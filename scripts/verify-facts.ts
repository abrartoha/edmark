// Build-time guard on every factual figure the site publishes.
//
// The companion to scripts/verify-careers.ts. That one stops the site
// advertising a training product it may not advertise; this one stops it
// stating a number nobody stands behind.
//
// A wage rate on this site was two years out of date. Nothing caught it,
// because nothing could: the figure was a string in a paragraph, with no
// source to check it against and no date to measure staleness from. Now every
// figure carries both, and this fails the build when one goes stale.
//
// Six months is the window. It is short enough that a July indexation cannot
// sit unnoticed through a second July, and long enough that it is not
// constantly in the way.
//
// Run: npm run verify:facts   (also runs as part of npm run build)

import { facts, type SourcedFact } from "../lib/facts.ts";
import { levels, isAttributed, type Course } from "../lib/higher-education.ts";

const MAX_AGE_MONTHS = 6;

type Problem = { fact: string; problem: string };
const problems: Problem[] = [];

const today = new Date();
const staleBefore = new Date(today);
staleBefore.setMonth(staleBefore.getMonth() - MAX_AGE_MONTHS);

// Dates here are typed by a person in Australia and checked by a build server
// running UTC, which is up to eleven hours behind. Without this, a figure
// verified this morning in Melbourne reads as future-dated to the server and
// fails the build — which is precisely what happened, taking every deploy with
// it for an hour. Two days is enough for any timezone and still catches a year
// typed wrong.
const TIMEZONE_GRACE_DAYS = 2;
const futureLimit = new Date(today);
futureLimit.setDate(futureLimit.getDate() + TIMEZONE_GRACE_DAYS);

const ISO = /^\d{4}-\d{2}-\d{2}$/;

function monthsBetween(from: Date, to: Date): number {
  return (
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth())
  );
}

for (const [name, raw] of Object.entries(facts)) {
  const fact = raw as SourcedFact;

  if (!fact.value?.trim()) {
    problems.push({ fact: name, problem: "has no value" });
  }

  // A figure with no source is the defect this whole control exists to stop.
  // There is no acceptable placeholder: if the source is unknown, the sentence
  // gets written without a number.
  if (!fact.source?.trim()) {
    problems.push({
      fact: name,
      problem:
        "has no source. A figure nobody stands behind should not be published — write the sentence without the number instead.",
    });
  }
  if (!fact.sourceUrl?.trim()) {
    problems.push({
      fact: name,
      problem: "has no sourceUrl, so a reader cannot check it at the source",
    });
  } else if (!/^https?:\/\//.test(fact.sourceUrl)) {
    problems.push({ fact: name, problem: `has a sourceUrl that is not a URL: ${fact.sourceUrl}` });
  }

  for (const field of ["asAt", "lastVerified"] as const) {
    const v = fact[field];
    if (!v || !ISO.test(v)) {
      problems.push({ fact: name, problem: `${field} is missing or not an ISO date` });
      continue;
    }
    if (Number.isNaN(new Date(`${v}T00:00:00`).getTime())) {
      problems.push({ fact: name, problem: `${field} is not a real date: ${v}` });
    }
  }

  if (ISO.test(fact.lastVerified ?? "")) {
    const verified = new Date(`${fact.lastVerified}T00:00:00`);
    if (verified > futureLimit) {
      problems.push({
        fact: name,
        problem: `lastVerified is in the future (${fact.lastVerified})`,
      });
    } else if (verified < staleBefore) {
      const age = monthsBetween(verified, today);
      problems.push({
        fact: name,
        problem: `was last verified ${age} months ago (${fact.lastVerified}). Check it against ${fact.source} and update lastVerified, or remove the figure.`,
      });
    }
  }
}

// ---------------------------------------------------------------------------
// Higher-education courses.
//
// Higher-education course detail (duration, entry and English requirements)
// renders on every course page and card, beside INDICATIVE_NOTICE, at
// Edmark's direction (13 September 2026). Tuition and next intake are not
// shown. A course that
// also names its provider is held to more: the provider, CRICOS code, fee
// source and check date must all be there.
// ---------------------------------------------------------------------------
let indicative = 0;

for (const level of levels) {
  for (const course of level.courses) {
    const attributed = isAttributed(course);
    const hasFee = Boolean(course.tuitionMin || course.tuitionMax);

    if (!attributed) {
      if (hasFee || course.duration || course.entryRequirement) indicative++;
      continue;
    }

    // Attributed: this course's fee and detail reach the reader, so everything
    // that says who is responsible for them has to be there.
    const missing = [
      !course.providerLegalName && "providerLegalName",
      !course.cricosProviderCode && "cricosProviderCode",
      hasFee && !course.feeSource && "feeSource",
      !course.lastVerified && "lastVerified",
    ].filter(Boolean);

    if (missing.length > 0) {
      problems.push({
        fact: `course "${course.name}"`,
        problem: `renders its fee and course detail but is missing ${missing.join(", ")}. A fee is a claim about a course somebody else delivers: name the provider it came from, or remove the attribution.`,
      });
    }
  }
}

if (problems.length > 0) {
  console.error(`\nverify:facts FAILED — ${problems.length} problem(s)\n`);
  for (const p of problems) {
    console.error(`  facts.${p.fact}\n    ${p.problem}\n`);
  }
  console.error(
    "Every published figure needs a source, a URL, the date it took effect,\n" +
      "and the date someone last checked it. See lib/facts.ts and\n" +
      "docs/asqa-remediation-log.md.\n"
  );
  process.exit(1);
}

const courseCount = levels.reduce((n, l) => n + l.courses.length, 0);
const attributedCount = levels.reduce(
  (n, l) => n + l.courses.filter(isAttributed).length,
  0
);
const count = Object.keys(facts).length;
const oldest = Object.values(facts)
  .map((f) => (f as SourcedFact).lastVerified)
  .sort()[0];
console.log(
  `verify:facts OK — ${count} figures, all sourced, oldest check ${oldest}.\n` +
    `                 ${attributedCount}/${courseCount} higher-education courses attributed; ` +
    `${indicative} show indicative detail without a named provider.`
);
