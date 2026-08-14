// ============================================================================
// HIGHER EDUCATION DATA
// ============================================================================
//
// NO INSTITUTION NAMES. Not on this page, not on the three level pages. Every
// figure is a RANGE across the partner network, never a quote from one
// provider. There is deliberately no institution field on Course: if one is
// added, it will end up rendered.
//
// FILLING IN A COURSE
// -------------------
//   name                 As a student would say it, e.g. "Bachelor of Nursing".
//   duration             Free text, e.g. "3 years full time".
//   tuitionMin / Max     Whole dollars, no commas or $ sign. Omit BOTH when
//                        fees genuinely vary too widely to quote; the card
//                        then reads "Varies by provider" rather than a number.
//   tuitionBasis         Defaults to "per year", which is why every degree
//                        here sets it explicitly to "per semester". The
//                        pathway entries use "for the full course" and
//                        "per week", because that is how they are priced.
//   entryRequirement     Free text. Keep it generic across the network.
//   englishRequirement   Free text, e.g. "IELTS Academic 6.0".
//   nextIntake           Free text, e.g. "February and July".
//   skilledOccupation    true only where the qualification maps to an
//                        occupation on a skilled list. Recorded as data; it is
//                        not rendered, and no occupation code is published.
//
// The indicative-only notice renders under every course listing on all four
// pages. It is not configurable, by design.
//
// There is deliberately no intake-month field on a level: intakes vary by
// institution rather than by level, so a single value here would be invented.
// ============================================================================

/** Study areas, used to group and index the course lists on a level page. */
export type Field =
  | "Business"
  | "Computing & IT"
  | "Education & Teaching"
  | "Engineering"
  | "Health"
  | "Hotel Management"
  | "Law"
  | "Science";

/** Fixed display order, so the index reads the same on every level. */
export const FIELD_ORDER: Field[] = [
  "Business",
  "Computing & IT",
  "Education & Teaching",
  "Engineering",
  "Health",
  "Hotel Management",
  "Law",
  "Science",
];

/** Anchor id for a field heading. */
export const fieldSlug = (f: string) =>
  f.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Fields actually present on a level, in FIELD_ORDER, each with its courses. */
export function coursesByField(courses: Course[]): { field: Field; courses: Course[] }[] {
  return FIELD_ORDER.map((field) => ({
    field,
    courses: courses.filter((c) => c.field === field),
  })).filter((g) => g.courses.length > 0);
}

export type Course = {
  name: string;
  duration: string;
  /** Omit both when fees vary too widely to quote as a range. */
  tuitionMin?: number;
  tuitionMax?: number;
  entryRequirement: string;
  englishRequirement: string;
  nextIntake: string;
  /** Defaults to "per year". */
  tuitionBasis?: string;
  /** Optional so the short-courses list, which shares this type, stays valid. */
  skilledOccupation?: boolean;
  /** Study area. Drives the browse-by-field index on a level page. */
  field?: Field;
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
        name: "Bachelor of Information Technology / Networking",
        duration: "3 years full time",
        tuitionMin: 4800,
        tuitionMax: 20000,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "February, July and November",
        skilledOccupation: true,
        field: "Computing & IT",
      },
      {
        name: "Bachelor of Business",
        duration: "3 years full time",
        tuitionMin: 4800,
        tuitionMax: 17750,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "February, July and November",
        skilledOccupation: false,
        field: "Business",
      },
      {
        name: "Bachelor of Nursing",
        duration: "3 years full time",
        tuitionMin: 18000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement:
          "IELTS Academic 6.5 to 7.0. The nursing registration body sets 7.0, so that standard cannot be lowered by a provider.",
        nextIntake: "February, with July at some providers",
        skilledOccupation: true,
        field: "Health",
      },
      {
        name: "Bachelor of Accounting",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 17500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "February, July and November",
        skilledOccupation: true,
        field: "Business",
      },
      {
        name: "Bachelor of Engineering",
        duration: "4 years full time",
        tuitionMin: 19000,
        tuitionMax: 24000,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "February and July",
        skilledOccupation: true,
        field: "Engineering",
      },
      {
        name: "Bachelor of Early Childhood Education",
        duration: "3 to 4 years full time",
        tuitionMin: 15000,
        tuitionMax: 19000,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement:
          "IELTS Academic 6.5 to 7.0. Teacher registration authorities set their own standard on top of the provider's.",
        nextIntake: "February and July",
        skilledOccupation: true,
        field: "Education & Teaching",
      },
      {
        name: "Bachelor of Social Work",
        duration: "4 years full time",
        tuitionMin: 13000,
        tuitionMax: 19000,
        tuitionBasis: "per semester",
        entryRequirement:
          "Completed Year 12 or equivalent. Includes supervised field placements across the degree.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March, July and November",
        skilledOccupation: true,
        field: "Health",
      },
      {
        name: "Bachelor of Psychological Science",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 19000,
        tuitionBasis: "per semester",
        entryRequirement:
          "Completed Year 12 or equivalent. Registration as a psychologist needs further postgraduate study on top of this degree.",
        englishRequirement: "IELTS Academic 6.0 to 6.5.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Bachelor of Health Science",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 19000,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 6.0 to 6.5.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Bachelor of Laws",
        duration: "4 years full time",
        tuitionMin: 13000,
        tuitionMax: 21000,
        tuitionBasis: "per semester",
        entryRequirement:
          "Completed Year 12 or equivalent. Admission to practise in Australia requires further practical legal training after the degree.",
        englishRequirement: "IELTS Academic 6.5 to 7.0.",
        nextIntake: "March and July",
        skilledOccupation: false,
        field: "Law",
      },
      {
        name: "Bachelor of Science",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 20000,
        tuitionBasis: "per semester",
        entryRequirement:
          "Completed Year 12 or equivalent. Majors range from environmental and marine science through to biomedical science.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Science",
      },
      {
        name: "Bachelor of Business (Hotel Management)",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 17750,
        tuitionBasis: "per semester",
        entryRequirement:
          "Completed Year 12 or equivalent. Usually includes an industry placement.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Hotel Management",
      },
    ],
    skilledOccupationRelated: true,
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
        name: "Master of Information Technology / Networking",
        duration: "2 years full time",
        tuitionMin: 6500,
        tuitionMax: 20000,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree.",
        englishRequirement: "IELTS Academic 6.0 to 6.5.",
        nextIntake: "February, July and November",
        skilledOccupation: true,
        field: "Computing & IT",
      },
      {
        name: "MBA / Master of Business",
        duration: "1.5 to 2 years full time",
        tuitionMin: 6500,
        tuitionMax: 19750,
        tuitionBasis: "per semester",
        entryRequirement:
          "A completed bachelor degree. Some providers also expect professional work experience.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "February, July and November",
        skilledOccupation: false,
        field: "Business",
      },
      {
        name: "Master of Professional Accounting",
        duration: "2 years full time",
        tuitionMin: 10250,
        tuitionMax: 19250,
        tuitionBasis: "per semester",
        entryRequirement:
          "A completed bachelor degree in any discipline. Designed as an entry route for graduates without an accounting background.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "February, July and November",
        skilledOccupation: true,
        field: "Business",
      },
      {
        name: "Master of Business Analytics",
        duration: "2 years full time",
        tuitionMin: 17500,
        tuitionMax: 20000,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "February, July and November",
        skilledOccupation: false,
        field: "Business",
      },
      {
        name: "Master of Nursing",
        duration: "1.5 to 2 years full time",
        tuitionMin: 17250,
        tuitionMax: 23750,
        tuitionBasis: "per semester",
        entryRequirement:
          "A completed bachelor degree, or registration as a nurse depending on the stream.",
        englishRequirement:
          "IELTS Academic 6.5 to 7.0. The nursing registration body sets 7.0 where the program leads to registration.",
        nextIntake: "February and July",
        skilledOccupation: true,
        field: "Health",
      },
      {
        name: "Master of Teaching",
        duration: "2 years full time",
        tuitionMin: 17000,
        tuitionMax: 19000,
        tuitionBasis: "per semester",
        entryRequirement:
          "A completed bachelor degree in a related discipline. This is the postgraduate route into teacher registration.",
        englishRequirement:
          "IELTS Academic 7.0 or higher, with registration authorities setting an additional standard.",
        nextIntake: "February and July",
        skilledOccupation: true,
        field: "Education & Teaching",
      },
      {
        name: "Master of Social Work",
        duration: "2 years full time",
        tuitionMin: 13000,
        tuitionMax: 19000,
        tuitionBasis: "per semester",
        entryRequirement:
          "A completed bachelor degree. This is the qualifying route into professional social work for graduates of another discipline.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March and July",
        skilledOccupation: true,
        field: "Health",
      },
      {
        name: "Master of Engineering",
        duration: "2 years full time",
        tuitionMin: 13000,
        tuitionMax: 24000,
        tuitionBasis: "per semester",
        entryRequirement:
          "A completed bachelor degree in engineering or a closely related discipline.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March and July",
        skilledOccupation: true,
        field: "Engineering",
      },
      {
        name: "Graduate Certificate in Business",
        duration: "6 months full time",
        tuitionMin: 13000,
        tuitionMax: 13000,
        tuitionBasis: "per semester",
        entryRequirement:
          "A completed bachelor degree. Often used as a shorter entry point that credits into a masters.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Business",
      },
      {
        name: "Graduate Diploma in Business",
        duration: "1 year full time",
        tuitionMin: 13000,
        tuitionMax: 19750,
        tuitionBasis: "per semester",
        entryRequirement:
          "A completed bachelor degree, or a graduate certificate carrying credit.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Business",
      },
    ],
    skilledOccupationRelated: true,
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
        duration: "About 1 year full time",
        tuitionBasis: "per semester",
        entryRequirement:
          "Leads into year 1 of a bachelor degree. Suited to a Year 11 or Year 12 result below the direct-entry level for your chosen degree.",
        englishRequirement: "IELTS Academic 5.5.",
        nextIntake: "February, June and October",
        skilledOccupation: false,
      },
      {
        name: "Diploma to degree (Business or IT)",
        duration: "1 year full time",
        tuitionMin: 19000,
        tuitionMax: 38000,
        tuitionBasis: "for the full course",
        entryRequirement:
          "Usually carries credit into year 2 of a bachelor degree, so you continue rather than start again.",
        englishRequirement: "IELTS Academic 5.5 to 6.0.",
        nextIntake: "February, July and November",
        skilledOccupation: false,
      },
      {
        name: "ELICOS (English language)",
        duration: "Flexible, set by the gap between your English and your next course",
        tuitionMin: 400,
        tuitionMax: 500,
        tuitionBasis: "per week",
        entryRequirement:
          "Packaged with a main course on a single student visa, so you apply once rather than twice.",
        englishRequirement: "No minimum to enter. A placement test sets your starting level.",
        nextIntake: "Rolling starts through the year",
        skilledOccupation: false,
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
        "Commonly in the mid 60s to mid 70s, and higher at the more selective providers. Each institution converts overseas results to an ATAR equivalent using its own table, so the same transcript can clear one provider and not another.",
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
  "Australia's National Planning Level for 2026 is 295,000 new international student commencements, with higher education providers sharing 196,750 of those places. It operates as a visa processing priority system rather than a hard refusal limit. Once a provider reaches its allocation, visa processing for its students can slow significantly. Students moving into public universities from Australian schooling or from pathway colleges are exempt from the planning level. We'll tell you which providers still have room for your intake.";

// ---------------------------------------------------------------------------
// HUB BLOCK 4 — Scholarships
// Generic by design. No institution is named and no value is attributed to a
// provider, because scholarship terms are reset by each institution every
// intake and a named figure here would go stale without anyone noticing.
// ---------------------------------------------------------------------------
export const SCHOLARSHIPS_NOTE =
  "Most of our partner institutions offer international scholarships of 10–30% of tuition. Many are applied automatically when you apply, and some go up to 50% by separate application. Values and conditions are set by each institution, usually depend on your prior academic results, and often require ongoing grades to keep. We'll tell you exactly what you qualify for, in writing, as part of your free consultation.";
