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
  /** Defaults to "per year". Use "for the full course" for short programs. */
  tuitionBasis?: string;
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

export const levels: Level[] = [
  {
    slug: "undergraduate",
    title: "Undergraduate",
    tagline:
      "Bachelor degrees, the standard first degree at an Australian university.",
    intro: [
      "A bachelor degree sits at level 7 of the Australian Qualifications Framework and is the usual first degree at an Australian university. Most run three to four years of full-time study, with an honours year or professional accreditation requirements adding to that in some fields.",
      "This is the entry point if you are coming from Year 12 or an equivalent senior secondary qualification. If your qualification does not meet a university's direct entry requirement, a pathway program is usually the route in rather than a barrier.",
    ],
    courses: [
      {
        name: "Bachelor of Nursing",
        duration: "3 years full time",
        tuitionMin: 32000,
        tuitionMax: 45000,
        entryRequirement:
          "Completed Year 12 or equivalent. A completed Diploma of Nursing usually carries credit into second year.",
        englishRequirement:
          "IELTS Academic 7.0 overall with 7.0 in every band. Set by AHPRA for registration, not by the university, so it cannot be waived.",
        nextIntake: "February and July at most providers",
      },
      {
        name: "Bachelor of Business",
        duration: "3 years full time",
        tuitionMin: 22000,
        tuitionMax: 40000,
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 6.0 overall, commonly with no band below 6.0.",
        nextIntake: "February and July, with a third intake at some providers",
      },
      {
        name: "Bachelor of Information Technology",
        duration: "3 years full time",
        tuitionMin: 30000,
        tuitionMax: 45000,
        entryRequirement:
          "Completed Year 12 or equivalent. Some providers assume mathematics as background rather than requiring it.",
        englishRequirement: "IELTS Academic 6.0 overall, commonly with no band below 6.0.",
        nextIntake: "February and July at most providers",
      },
    ],
    skilledOccupationRelated: false,
  },
  {
    slug: "postgraduate",
    title: "Postgraduate",
    tagline:
      "Masters by coursework, taught programs that build on a completed bachelor degree.",
    intro: [
      "A masters by coursework sits at level 9 of the Australian Qualifications Framework and builds on a completed bachelor degree. It is taught rather than research-led, so you take structured units and assessments rather than writing a thesis.",
      "Length usually runs one to two years and depends heavily on credit: a bachelor degree in the same field, or relevant professional experience, can shorten the program. This is the common route for specialising further or moving into a new field without committing to research.",
    ],
    courses: [
      {
        name: "Master of Information Technology",
        duration: "1.5 to 2 years full time, shorter with credit",
        tuitionMin: 30000,
        tuitionMax: 48000,
        entryRequirement:
          "A completed bachelor degree. A degree in the same field usually reduces the program length.",
        englishRequirement: "IELTS Academic 6.5 overall, commonly with no band below 6.0.",
        nextIntake: "February and July at most providers",
      },
      {
        name: "Master of Professional Accounting",
        duration: "2 years full time",
        tuitionMin: 28000,
        tuitionMax: 45000,
        entryRequirement:
          "A completed bachelor degree in any discipline. Designed as an entry route for graduates without an accounting background.",
        englishRequirement: "IELTS Academic 6.5 overall, commonly with no band below 6.0.",
        nextIntake: "February and July at most providers",
      },
      {
        name: "Master of Public Health",
        duration: "1.5 to 2 years full time",
        tuitionMin: 30000,
        tuitionMax: 46000,
        entryRequirement:
          "A completed bachelor degree. Health, science or a related field is preferred at most providers.",
        englishRequirement: "IELTS Academic 6.5 overall, commonly with no band below 6.0.",
        nextIntake: "February and July at most providers",
      },
    ],
    skilledOccupationRelated: false,
  },
  {
    slug: "pathway-programs",
    title: "Pathway programs",
    tagline:
      "Foundation, diploma-to-degree and ELICOS routes that get you to the entry requirement.",
    intro: [
      "Pathway programs exist to get you to a university's entry requirement rather than around it. Foundation studies build academic and English skills for degree entry, diploma programs can carry credit equivalent to the first year of a bachelor degree so you continue into second year, and ELICOS courses lift your English to the level a course requires.",
      "Where a pathway leads into a degree, both can be issued together as a packaged offer on a single student visa, so you apply once rather than twice.",
    ],
    courses: [
      {
        name: "Foundation studies",
        duration: "8 to 12 months",
        tuitionMin: 28000,
        tuitionMax: 39000,
        entryRequirement:
          "Completed Year 11 or a Year 12 result below the direct-entry level for your chosen degree.",
        englishRequirement: "IELTS Academic 5.5 overall is the common entry point.",
        nextIntake: "Multiple intakes a year, commonly February, June and October",
      },
      {
        name: "Diploma leading to second year",
        duration: "8 to 12 months",
        tuitionMin: 18000,
        tuitionMax: 30000,
        entryRequirement:
          "Completed Year 12 or equivalent. Credit from the diploma carries into the degree, so you continue at second year rather than starting again.",
        englishRequirement: "IELTS Academic 5.5 to 6.0 overall, depending on the provider.",
        nextIntake: "Commonly February, June and October",
      },
      {
        name: "ELICOS English program",
        duration: "12 to 25 weeks, set by your current level",
        tuitionMin: 3600,
        tuitionMax: 12500,
        tuitionBasis: "for the full course",
        entryRequirement:
          "A placement test rather than a fixed entry score. Length is set by the gap between your current English and what your next course requires.",
        englishRequirement:
          "No minimum to enter. Typically priced at $300 to $500 a week, so total cost moves with course length.",
        nextIntake: "Weekly or fortnightly starts at most colleges",
      },
    ],
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
  {
    title: "Undergraduate",
    body: "A bachelor degree, AQF level 7, and the standard first degree at an Australian university. Most run three to four years full time. Start here if you are coming from Year 12 or an equivalent senior secondary qualification.",
  },
  {
    title: "Postgraduate coursework",
    body: "A masters by coursework, AQF level 9, taught through structured units rather than a research thesis. Usually one to two years, often shorter if your bachelor degree or work experience earns credit. Start here if you already hold a degree.",
  },
  {
    title: "Pathway programs",
    body: "Foundation studies, diploma-to-degree and ELICOS English courses. These get you to the entry requirement rather than around it, and a diploma can carry credit worth the first year of a degree. Start here if you are close to a requirement but not yet meeting it.",
  },
];

// ---------------------------------------------------------------------------
// HUB BLOCK 2 — "Entry requirements, plainly"
// A single worked example from a real, anonymised offer. Every field is free
// text. `intro` and `note` frame it; the rows are the requirement itself.
// ---------------------------------------------------------------------------
export const entryRequirementsExample = {
  intro:
    "Entry requirements look like one number but are really three separate gates: your qualification, your academic result, and your English. Here is what a Bachelor of Nursing application typically has to clear, and what happens when one of the three falls short.",
  rows: [
    {
      label: "Qualification",
      value:
        "Completed Year 12 or equivalent, or a completed Diploma of Nursing, which usually carries credit into second year.",
    },
    {
      label: "ATAR equivalent",
      value:
        "Commonly in the mid 60s to mid 70s, and higher at Group of Eight universities. Each institution converts overseas results to an ATAR equivalent using its own table, so the same transcript can clear one provider and not another.",
    },
    {
      label: "English test score",
      value:
        "IELTS Academic 7.0 overall with 7.0 in every band. For nursing this is set by AHPRA for registration rather than by the university, so no provider can lower it.",
    },
    {
      label: "Outcome",
      value:
        "Meet all three and you receive a full offer. Meet the first two but not the English, and the usual result is a packaged offer with an ELICOS course attached, on a single student visa.",
    },
  ],
  note:
    "Typical figures for planning, not a quote from any one provider. ATAR equivalence, credit and English rules all vary by institution and change between intakes. We confirm the exact numbers against your transcript and a real shortlist before you apply.",
};

// ---------------------------------------------------------------------------
// HUB BLOCK 3 — "2026 intake planning"
// Factual and sourced. Supplied verbatim; rendered by reference so it cannot
// drift through an edit to the page. Do not reword.
// ---------------------------------------------------------------------------
export const INTAKE_PLANNING_2026 =
  "Australia's National Planning Level for 2026 is 295,000 new international student commencements, with higher education providers sharing 196,750 of those places. It operates as a visa processing priority system rather than a hard refusal limit — once a provider reaches its allocation, visa processing for its students can slow significantly. Students moving into public universities from Australian schooling or from pathway colleges are exempt from the planning level. We'll tell you which providers still have room for your intake.";
