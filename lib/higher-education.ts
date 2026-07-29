// ============================================================================
// HIGHER EDUCATION DATA — THIS IS THE ONLY FILE YOU NEED TO EDIT.
// ============================================================================
//
// Nothing below describes a real course. Every course entry is a placeholder
// and every figure is zero or empty. Replace them before these pages are
// linked from the nav.
//
// FILLING IN A COURSE
// -------------------
//   name                 As a student would say it, e.g. "Bachelor of Nursing".
//                        Not an institution's marketing name.
//   duration             Free text, e.g. "3 years full-time".
//   tuitionMin / Max     Whole dollars per year, no commas or $ sign.
//                        18000 and 24000 render as "$18,000–$24,000".
//                        Leave both 0 and the card shows "Not set".
//   entryRequirement     Free text, e.g. "Completed Year 12 or equivalent".
//   englishRequirement   Free text, e.g. "IELTS 6.5 with no band below 6.0".
//   nextIntake           Free text, e.g. "February and July".
//
// PER LEVEL
// ---------
//   skilledOccupationRelated
//        Set true only if the level's content genuinely touches skilled
//        occupation lists or residency. Setting it true adds the MARA referral
//        notice to that page. All three ship false. When in doubt, leave false.
//
// The indicative-only notice renders under every course listing regardless,
// on all four pages. It is not configurable, by design.
//
// There is deliberately no intake-month field on a level: intakes vary by
// institution rather than by level, so a single value here would be invented.
// ============================================================================

export type Course = {
  name: string;
  duration: string;
  tuitionMin: number;
  tuitionMax: number;
  entryRequirement: string;
  englishRequirement: string;
  nextIntake: string;
};

export type LevelSlug = "undergraduate" | "postgraduate" | "pathway-programs";

export type Level = {
  slug: LevelSlug;
  title: string;
  /** One line, shown on the hub card and under the page title. */
  tagline: string;
  /** Paragraphs above the course list. */
  intro: string[];
  courses: Course[];
  skilledOccupationRelated: boolean;
};

const PLACEHOLDER = "PLACEHOLDER — replace before launch";

const blankCourse = (): Course => ({
  name: PLACEHOLDER,
  duration: "",
  tuitionMin: 0,
  tuitionMax: 0,
  entryRequirement: "",
  englishRequirement: "",
  nextIntake: "",
});

export const levels: Level[] = [
  {
    slug: "undergraduate",
    title: "Undergraduate",
    tagline: PLACEHOLDER,
    intro: [PLACEHOLDER],
    courses: [blankCourse(), blankCourse(), blankCourse()],
    skilledOccupationRelated: false,
  },
  {
    slug: "postgraduate",
    title: "Postgraduate",
    tagline: PLACEHOLDER,
    intro: [PLACEHOLDER],
    courses: [blankCourse(), blankCourse(), blankCourse()],
    skilledOccupationRelated: false,
  },
  {
    slug: "pathway-programs",
    title: "Pathway programs",
    tagline: PLACEHOLDER,
    intro: [PLACEHOLDER],
    courses: [blankCourse(), blankCourse(), blankCourse()],
    skilledOccupationRelated: false,
  },
];

export function getLevel(slug: string) {
  return levels.find((l) => l.slug === slug);
}

// ---------------------------------------------------------------------------
// HUB BLOCK 1 — "Which level is right for you"
// Replace each body. The three titles are level names, not claims.
// ---------------------------------------------------------------------------
export const whichLevel: { title: string; body: string }[] = [
  { title: "Undergraduate", body: PLACEHOLDER },
  { title: "Postgraduate coursework", body: PLACEHOLDER },
  { title: "Pathway programs", body: PLACEHOLDER },
];

// ---------------------------------------------------------------------------
// HUB BLOCK 2 — "Entry requirements, plainly"
// A single worked example from a real, anonymised offer. Every field is free
// text. `intro` and `note` frame it; the rows are the requirement itself.
// ---------------------------------------------------------------------------
export const entryRequirementsExample = {
  intro: PLACEHOLDER,
  rows: [
    { label: "Qualification", value: PLACEHOLDER },
    { label: "ATAR equivalent", value: PLACEHOLDER },
    { label: "English test score", value: PLACEHOLDER },
    { label: "Outcome", value: PLACEHOLDER },
  ],
  note: PLACEHOLDER,
};

// ---------------------------------------------------------------------------
// HUB BLOCK 3 — "2026 intake planning"
// Factual and sourced. Supplied verbatim; rendered by reference so it cannot
// drift through an edit to the page. Do not reword.
// ---------------------------------------------------------------------------
export const INTAKE_PLANNING_2026 =
  "Australia's National Planning Level for 2026 is 295,000 new international student commencements, with higher education providers sharing 196,750 of those places. It operates as a visa processing priority system rather than a hard refusal limit — once a provider reaches its allocation, visa processing for its students can slow significantly. Students moving into public universities from Australian schooling or from pathway colleges are exempt from the planning level. We'll tell you which providers still have room for your intake.";
