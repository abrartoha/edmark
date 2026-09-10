// Build-time guard on the careers content.
//
// This is the control that stops the ASQA breach recurring, and it is the one
// thing in this remediation that is not a wording change: wording drifts back,
// a failing build does not.
//
// Edmark is an education agent. It does not deliver training and does not
// issue qualifications, so it must not advertise a training product. The line
// between careers information and marketing a training product is drawn by
// what appears on the page:
//
//   Careers information  — what the occupation is, what licensing applies,
//                          and a factual statement of the qualification
//                          usually used to enter it.
//   Marketing a product  — a price, a duration, an intake date, an entry
//                          requirement, a provider name, or an invitation to
//                          apply or enrol.
//
// Anything in the second list turns the first back into the thing ASQA wrote
// about on 2 September 2026. This script fails the build if one reappears.
//
// Run: npm run verify:careers   (also runs as part of npm run build)

import { careers, type Career } from "../lib/careers.ts";

type Finding = { career: string; field: string; problem: string };

const findings: Finding[] = [];

function fail(career: string, field: string, problem: string) {
  findings.push({ career, field, problem });
}

/**
 * Text that may never appear anywhere in a career record.
 *
 * Each pattern is one of the things that makes a page an advertisement for
 * somebody else's training product. The wording of the message matters: it has
 * to tell whoever hit it *why*, or it will be read as a lint rule to silence.
 */
const BANNED: Array<{ label: string; re: RegExp; why: string }> = [
  {
    label: "a fee or currency amount",
    re: /\$\s?\d|\b\d[\d,]*\s?(?:AUD|dollars)\b|\btuition\b|\bfees?\b(?!\s*apply\s*to\s*the\s*visa)/i,
    why: "Edmark holds no source for any fee charged by an RTO. No source, no number.",
  },
  {
    label: "a course duration",
    re: /\b\d+(?:\.\d+)?\s*(?:to\s*\d+\s*)?(?:weeks?|months?|years?)\b|\bfull[- ]time\b|\bpart[- ]time\b/i,
    why: "Course length is set by the RTO and varies between them. Stating one advertises a product.",
  },
  {
    label: "an intake claim",
    re: /\bintakes?\b|\brolling\b|\benrolments? open\b|\bstart dates?\b/i,
    why: "Intake dates belong to the provider delivering the course, not to an agent.",
  },
  {
    label: "an English test score requirement",
    re: /\bIELTS\b|\bPTE\b|\bTOEFL\b|\bOET\b|\bband\s*\d/i,
    why: "English requirements are set per course by the provider and by Home Affairs.",
  },
  {
    label: "an entry requirement claim",
    re: /\bentry requirement\b|\bprerequisite\b|\bYear\s*1[012]\s*or equivalent\b/i,
    why: "Entry requirements are the RTO's to state, and differ between them.",
  },
  {
    label: "an apply or enrol call to action",
    re: /\benrol(?:l|ment|ling)?\b|\bapply now\b|\bapplications? open\b/i,
    why: "Edmark cannot enrol anyone in a qualification it does not deliver.",
  },
  {
    label: "an RTO or provider name",
    re: /\bRTO\s*(?:code)?\s*\d{4,5}\b|\bCRICOS\b|\bregistered training organisation\b(?!s (?:approved|listed))/i,
    why: "Naming a provider Edmark holds no marketing agreement with is a worse breach than naming none.",
  },
];

/** Every string in a record, with a path, so a finding can name its field. */
function strings(value: unknown, path: string): Array<[string, string]> {
  if (typeof value === "string") return [[path, value]];
  if (Array.isArray(value))
    return value.flatMap((v, i) => strings(v, `${path}[${i}]`));
  if (value && typeof value === "object")
    return Object.entries(value).flatMap(([k, v]) => strings(v, `${path}.${k}`));
  return [];
}

const NATIONAL_CODE = /\b[A-Z]{2,4}\d{4,6}[A-Z]?\b/;

for (const career of careers as Career[]) {
  // The national code is allowed in exactly one place: the pathways block,
  // where it is a statement of fact linked to the national register. In the
  // h1, the slug or the title it makes the qualification the subject of the
  // page, which is the whole thing we moved away from.
  if (NATIONAL_CODE.test(career.h1))
    fail(career.slug, "h1", "carries a national training code — the page's subject must be the occupation");
  if (NATIONAL_CODE.test(career.slug))
    fail(career.slug, "slug", "carries a national training code in the URL");
  if (NATIONAL_CODE.test(career.occupation))
    fail(career.slug, "occupation", "carries a national training code");

  // Everything except the pathways block, which is allowed to name the
  // qualification and the register.
  const { pathways, ...rest } = career;
  for (const [path, text] of strings(rest, career.slug)) {
    for (const { label, re, why } of BANNED) {
      if (re.test(text)) {
        fail(career.slug, path, `contains ${label}. ${why}`);
      }
    }
  }

  // The pathway entries themselves still may not carry commercial detail —
  // only the title, the code, the register link and an optional note.
  for (const p of pathways) {
    for (const [path, text] of strings({ note: p.note ?? "" }, `${career.slug}.${p.nationalCode ?? p.title}`)) {
      for (const { label, re, why } of BANNED.filter((b) => b.label !== "an RTO or provider name")) {
        if (re.test(text)) fail(career.slug, path, `contains ${label}. ${why}`);
      }
    }
    if (!p.nationalCode) {
      // A degree carries no training-package code, so there is nothing to
      // verify against training.gov.au.
    } else if (p.codeStatus === "current" || p.codeStatus === "superseded") {
      // Fine — someone has checked it against the register.
    } else if (p.codeStatus !== "unverified") {
      fail(career.slug, p.nationalCode, `has an unknown codeStatus "${p.codeStatus}"`);
    }
  }

  if (career.outlook && !/jobs and skills australia|abs|australian bureau of statistics|labour market insights/i.test(career.outlook)) {
    fail(career.slug, "outlook", "states a labour-market claim without naming a source");
  }
}

if (findings.length > 0) {
  console.error(`\nverify:careers FAILED — ${findings.length} problem(s)\n`);
  for (const f of findings) {
    console.error(`  ${f.career} · ${f.field}\n    ${f.problem}\n`);
  }
  console.error(
    "These pages describe occupations. They must not advertise a training\n" +
      "product Edmark does not deliver. See docs/asqa-remediation-log.md.\n"
  );
  process.exit(1);
}

const codes = careers.flatMap((c) => c.pathways.map((p) => p.nationalCode));
console.log(
  `verify:careers OK — ${careers.length} careers, ${codes.length} qualifications referenced, no marketing claims found.`
);
