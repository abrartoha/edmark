// Questions, scoring and compliance copy for the course matcher.
// The course data itself lives in lib/pathways.ts — edit that file, not this one.

import type { BudgetBand, Field, Pathway, Qualification } from "./pathways";
import { pathways } from "./pathways";

export type Timing = "next-intake" | "six-months" | "one-year" | "exploring";
export type Residency = "priority" | "somewhat" | "no";
export type FieldAnswer = Field | "not-sure";

export type Answers = {
  qualification?: Qualification;
  field?: FieldAnswer;
  budget?: BudgetBand;
  residency?: Residency;
  timing?: Timing;
};

export type QuestionKey = keyof Answers;

export type Question = {
  key: QuestionKey;
  prompt: string;
  options: { value: string; label: string }[];
};

export const questions: Question[] = [
  {
    key: "qualification",
    prompt: "What's your highest completed qualification?",
    options: [
      { value: "year12", label: "Year 12" },
      { value: "diploma", label: "Diploma" },
      { value: "bachelor", label: "Bachelor" },
      { value: "masters", label: "Masters" },
    ],
  },
  {
    key: "field",
    prompt: "What field interests you?",
    options: [
      { value: "nursing-health", label: "Nursing & health" },
      { value: "trade-construction", label: "Trade & construction" },
      { value: "hospitality-cookery", label: "Hospitality & cookery" },
      { value: "business-it", label: "Business & IT" },
      { value: "teaching-childcare", label: "Teaching & childcare" },
      { value: "engineering-science", label: "Engineering & science" },
      { value: "not-sure", label: "Not sure yet" },
    ],
  },
  {
    key: "budget",
    prompt: "What's your yearly budget for tuition?",
    options: [
      { value: "under-15k", label: "Under $15k" },
      { value: "15-25k", label: "$15–25k" },
      { value: "25-40k", label: "$25–40k" },
      { value: "40k-plus", label: "$40k+" },
    ],
  },
  {
    key: "residency",
    prompt: "Is long-term residency part of your plan?",
    options: [
      { value: "priority", label: "Yes, it's a priority" },
      { value: "somewhat", label: "Somewhat" },
      { value: "no", label: "No, just study" },
    ],
  },
  {
    key: "timing",
    prompt: "When do you want to start?",
    options: [
      { value: "next-intake", label: "Next intake" },
      { value: "six-months", label: "Within 6 months" },
      { value: "one-year", label: "Within a year" },
      { value: "exploring", label: "Just exploring" },
    ],
  },
];

// Compliance copy now lives in lib/compliance.ts so the higher-education pages
// share the exact same strings. Re-exported here so existing imports still work.
export { MARA_NOTICE, INDICATIVE_NOTICE } from "./compliance";

// ---------------------------------------------------------------------------
// Timing shapes the closing prompt only. It never affects ranking: intakes vary
// by institution rather than by pathway, so there is no intake tag to score on.
// ---------------------------------------------------------------------------

export const timingPrompt: Record<Timing, string> = {
  "next-intake":
    "Intakes fill and visa processing slows once a provider hits its allocation. Book a consultation this week.",
  "six-months":
    "Good timing. Book a free consultation and we'll map your application deadlines.",
  "one-year":
    "Plenty of runway. Book a free consultation to plan your intake and budget.",
  exploring:
    "No rush. Book a free consultation whenever you're ready. It's free and there's no obligation.",
};

// ---------------------------------------------------------------------------
// Scoring: plain weighted sum, no library.
//   field match          +3
//   qualification match  +2
//   budget band match    +2
//   skilled occupation   +1 when residency is a priority, +0.5 when somewhat
// "Not sure yet" applies no field preference, so nothing is filtered out.
// Residency only weights which pathways surface. It produces no visa or
// residency output anywhere in the results.
// ---------------------------------------------------------------------------

export function scorePathway(p: Pathway, a: Answers): number {
  let score = 0;

  if (a.field && a.field !== "not-sure" && p.tags.fields.includes(a.field)) {
    score += 3;
  }
  if (a.qualification && p.tags.qualifications.includes(a.qualification)) {
    score += 2;
  }
  if (a.budget && p.tags.budgetBands.includes(a.budget)) {
    score += 2;
  }
  if (p.tags.skilledOccupation) {
    if (a.residency === "priority") score += 1;
    else if (a.residency === "somewhat") score += 0.5;
  }

  return score;
}

/** Top 3 matches, best first. Anything scoring zero is not a match. */
export function matchPathways(a: Answers): Pathway[] {
  return pathways
    .map((p) => ({ p, score: scorePathway(p, a) }))
    .filter((r) => r.score > 0)
    .sort((x, y) => y.score - x.score)
    .slice(0, 3)
    .map((r) => r.p);
}

/** "$18,000–$24,000", or "Not set" while the data file is unfilled. */
export function formatTuition(min: number, max: number): string {
  if (!min && !max) return "Not set";
  const money = (n: number) => `$${n.toLocaleString("en-AU")}`;
  if (min && max && min !== max) return `${money(min)}–${money(max)}`;
  return money(max || min);
}
