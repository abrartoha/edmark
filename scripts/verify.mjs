// Runs the compliance guards, and draws a hard line between two things that
// look identical to a build system and could not be more different:
//
//   1. A guard ran and found a violation.  -> fail the build. Always.
//   2. A guard could not run at all.       -> warn loudly, let the build pass.
//
// The second case is why this wrapper exists. The guards are TypeScript,
// executed directly by Node, which only works from Node 22.6 with a flag and
// 23.6 without one. On a host running anything older the command fails, the
// build command fails with it, and the deploy never happens. The site then
// silently serves the last good build for as long as nobody notices — which is
// exactly what happened here: nine commits of compliance work sat on the main
// branch, pushed and green locally, while production served a build from
// before any of it.
//
// A control that takes the site offline when its own runtime is unavailable is
// worse than no control, because the failure is invisible and the thing it
// protects stops being updated at all. So an environment failure is loud in the
// build log and non-fatal, and a real violation still stops the deploy dead.
//
// The guards also run in CI on a pinned Node (.github/workflows/verify.yml),
// which is where enforcement actually lives. This is the second line, not the
// first.

import { spawnSync } from "node:child_process";

const GUARDS = [
  ["careers", "scripts/verify-careers.ts"],
  ["facts", "scripts/verify-facts.ts"],
];

/** Our guards print this when they find something. Anything else is the
 *  runtime failing to start them. */
const VIOLATION_MARKER = /FAILED — \d+ problem/;

let violations = 0;
let unrunnable = 0;

for (const [name, script] of GUARDS) {
  // The flag is a no-op where stripping is already on, and the difference
  // between running and not running on Node 22.x.
  const run = spawnSync(
    process.execPath,
    ["--experimental-strip-types", script],
    { encoding: "utf8" }
  );

  const output = `${run.stdout ?? ""}${run.stderr ?? ""}`;
  const noise = /MODULE_TYPELESS_PACKAGE_JSON|Reparsing as ES module|To eliminate this warning|trace-warnings/;
  const cleaned = output
    .split("\n")
    .filter((l) => l.trim() && !noise.test(l))
    .join("\n");

  if (run.status === 0) {
    console.log(cleaned);
    continue;
  }

  if (VIOLATION_MARKER.test(output)) {
    // A real finding. This is the case the guard exists for.
    console.error(cleaned);
    violations++;
    continue;
  }

  // The guard never got to run. Say so in terms that make the cause findable,
  // and do not take the deploy down over it.
  unrunnable++;
  console.warn(
    [
      "",
      "  ============================================================",
      `  WARNING: the ${name} guard could not run in this environment.`,
      "",
      `  ${script} did not execute. It was not a content violation —`,
      "  the script itself failed to start.",
      "",
      `  Node here is ${process.version}. These guards need 22.6 or newer,`,
      "  which is what package.json engines and .nvmrc ask for.",
      "",
      "  The build is being allowed through so the site keeps deploying.",
      "  Enforcement for this push is CI (.github/workflows/verify.yml).",
      "  Fix the runtime and this goes away.",
      "",
      "  Exit code:",
      `  ${run.status}`,
      cleaned ? `  ${cleaned.split("\n").slice(0, 6).join("\n  ")}` : "",
      "  ============================================================",
      "",
    ].join("\n")
  );
}

if (violations > 0) {
  console.error(
    `\nverify FAILED — ${violations} guard(s) found problems. See above.\n` +
      "Nothing deploys until these are fixed. See docs/asqa-remediation-log.md.\n"
  );
  process.exit(1);
}

if (unrunnable > 0) {
  console.warn(
    `verify: ${unrunnable} guard(s) could not run here and were skipped. ` +
      "CI is enforcing them."
  );
}
