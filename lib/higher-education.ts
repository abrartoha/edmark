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
  | "Science"
  // Vocational study areas. Separate values rather than reusing the academic
  // ones because a VET student browses by trade, not by faculty.
  | "Construction & Trades"
  | "Automotive"
  | "Hospitality & Cookery"
  | "Health & Community Care"
  | "Early Childhood Education"
  | "Security"
  | "Electrical & Refrigeration"
  | "Engineering & Fabrication";

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

/** Display order for the vocational list. */
export const VET_FIELD_ORDER: Field[] = [
  "Construction & Trades",
  "Electrical & Refrigeration",
  "Engineering & Fabrication",
  "Automotive",
  "Hospitality & Cookery",
  "Health & Community Care",
  "Early Childhood Education",
  "Security",
];

/** Anchor id for a field heading. */
export const fieldSlug = (f: string) =>
  f.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/**
 * Groups a level's courses for display: the fields present, in FIELD_ORDER,
 * preceded by anything with no field at all.
 *
 * That leading group matters. Foundation studies, diploma-to-degree and ELICOS
 * are not a discipline, they apply across all of them, so they carry no field.
 * Without this they would be silently dropped from a grouped page.
 */
export function courseGroups(courses: Course[]): { label: string; courses: Course[] }[] {
  const ungrouped = courses.filter((c) => !c.field);
  const byField = FIELD_ORDER.map((field) => ({
    label: field as string,
    courses: courses.filter((c) => c.field === field),
  })).filter((g) => g.courses.length > 0);

  return [
    ...(ungrouped.length ? [{ label: "All study areas", courses: ungrouped }] : []),
    ...byField,
  ];
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

// ---------------------------------------------------------------------------
// Filter helpers. Intake and English requirement are stored as free text
// because that is how a provider states them, so the browser derives its
// filters from those strings rather than from extra fields that could drift
// out of step with the sentence a student actually reads.
// ---------------------------------------------------------------------------

export const INTAKE_MONTHS = [
  "January",
  "February",
  "March",
  "July",
  "August",
  "September",
  "November",
] as const;

/** Minimum IELTS on a course, or null where none is stated. */
export function ieltsOf(c: Course): number | null {
  // Deliberately loose about what sits between "IELTS" and the number. Not
  // every course words it as "IELTS Academic 5.5"; one reads "Provider
  // placement test, commonly around IELTS 5.5", and requiring the strict
  // phrasing left that course out of the English filter entirely.
  const m = c.englishRequirement.match(/IELTS\D{0,20}(\d+(?:\.\d+)?)/);
  return m ? Number(m[1]) : null;
}

/**
 * Indicative PTE Academic equivalents for the IELTS bands used here, taken
 * from Pearson's concordance between the enhanced PTE Academic and IELTS
 * Academic (July 2025). Pearson gives each band a range; these are its
 * midpoints: 6.0 concords to 46-54, 6.5 to 55-62, 7.0 to 63-70, 7.5 to 71-78
 * and 8.0 to 79-85.
 *
 * Shown as a guide only. A provider sets the PTE score it will accept, and the
 * Department of Home Affairs sets a separate one for the visa, which it moved
 * on 7 August 2025. Neither is derived from this table.
 */
export const PTE_EQUIVALENT: Record<string, number> = {
  "5.0": 36,
  "5.5": 42,
  "6.0": 50,
  "6.5": 58,
  "7.0": 65,
  "7.5": 73,
  "8.0": 79,
};

/** Courses with no fixed month, which is most vocational training. */
export const ROLLING_INTAKE = "Rolling or multiple";

/**
 * Intake months named in the course's nextIntake sentence, or the rolling
 * bucket where none are. Without that fallback, a course reading "Rolling
 * intakes at most RTOs" would match no intake filter and become unreachable
 * the moment one was ticked.
 */
export function intakeMonthsOf(c: Course): string[] {
  const found = INTAKE_MONTHS.filter((m) => c.nextIntake.includes(m));
  return found.length > 0 ? found : [ROLLING_INTAKE];
}

/**
 * Budget tiers, tested against the LOWEST fee in a course's range.
 *
 * Cumulative rather than disjoint, and matched on the minimum, because a
 * student filters by what they can afford: picking "up to $13,000" should
 * return everything obtainable at or below that somewhere in the network, not
 * only courses whose whole range sits inside a bracket. Disjoint bands left
 * most of the list in one bucket and some buckets empty, since providers
 * cluster around the same entry price.
 */
export type FeeBand = { label: string; max: number };

// Plain data, not predicates. These cross from a server component into the
// client browser, and a function cannot be serialised over that boundary.
export const FEE_BANDS: FeeBand[] = [
  { label: "Up to $13,000", max: 13000 },
  { label: "Up to $18,000", max: 18000 },
  { label: "Up to $24,000", max: 24000 },
];

/** Vocational fees are annual, not per semester, and start far lower. */
export const VET_FEE_BANDS: FeeBand[] = [
  { label: "Up to $5,000", max: 5000 },
  { label: "Up to $10,000", max: 10000 },
  { label: "Up to $15,000", max: 15000 },
  { label: "Up to $20,000", max: 20000 },
];

export type LevelSlug = "undergraduate" | "postgraduate";

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
        tuitionMin: 13000,
        tuitionMax: 20000,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March, July and November",
        skilledOccupation: true,
        field: "Computing & IT",
      },
      {
        name: "Bachelor of Information Technology, Bachelor of Business",
        duration: "4 years full time",
        tuitionMin: 13000,
        tuitionMax: 20000,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. A double degree, so you graduate with both awards.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March",
        skilledOccupation: true,
        field: "Computing & IT",
      },
      {
        name: "Bachelor of Business",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 17750,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Business",
      },
      {
        name: "Bachelor of Accounting",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 17750,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Accredited by CPA Australia.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March, July and November",
        skilledOccupation: true,
        field: "Business",
      },
      {
        name: "Bachelor of Early Childhood Education",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 19000,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Accredited by ACECQA.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March and July",
        skilledOccupation: true,
        field: "Education & Teaching",
      },
      {
        name: "Bachelor of Education",
        duration: "4 years full time",
        tuitionMin: 13000,
        tuitionMax: 19000,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Specialisations across early childhood, primary and secondary.",
        englishRequirement: "IELTS Academic 7.5.",
        nextIntake: "March and July",
        skilledOccupation: true,
        field: "Education & Teaching",
      },
      {
        name: "Bachelor of Engineering (Honours)",
        duration: "4 years full time",
        tuitionMin: 13000,
        tuitionMax: 24000,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Accredited by Engineers Australia. Civil and mechanical specialisations.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March and July",
        skilledOccupation: true,
        field: "Engineering",
      },
      {
        name: "Bachelor of Nursing",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Accredited by the NMBA.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March and July",
        skilledOccupation: true,
        field: "Health",
      },
      {
        name: "Bachelor of Nursing (Enrolled Nurse to Registered Nurse)",
        duration: "2 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. For holders of an approved Diploma of Nursing.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March and July",
        skilledOccupation: true,
        field: "Health",
      },
      {
        name: "Bachelor of Midwifery",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Accredited by the NMBA.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March",
        skilledOccupation: true,
        field: "Health",
      },
      {
        name: "Bachelor of Occupational Therapy",
        duration: "4 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Accredited by OTA and the Occupational Therapy Council.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March",
        skilledOccupation: true,
        field: "Health",
      },
      {
        name: "Bachelor of Speech Pathology",
        duration: "4 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Accredited by Speech Pathology Australia. Note the IELTS 8.0 requirement.",
        englishRequirement: "IELTS Academic 8.0.",
        nextIntake: "March and November",
        skilledOccupation: true,
        field: "Health",
      },
      {
        name: "Bachelor of Psychological Science",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Accredited by APAC. Registration as a psychologist needs further postgraduate study.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March and July",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Bachelor of Psychological Science with Honours",
        duration: "1 year full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. The honours year following a psychological science degree.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Bachelor of Psychological Science, Bachelor of Business",
        duration: "4 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. A double degree, so you graduate with both awards.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Bachelor of Health Science (Health and Lifestyle)",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March and July",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Bachelor of Biomedical Science",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Bachelor of Clinical Exercise Physiology",
        duration: "4 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Bachelor of Clinical Sciences (Osteopathic Studies)",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Accredited by the Osteopathy Board of Australia.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Bachelor of Sport and Exercise Science",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Accredited by ESSA.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Bachelor of Exercise Science and Psychological Science",
        duration: "4 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Bachelor of Counselling",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Accredited by the Australian Counselling Association.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Bachelor of Social Work",
        duration: "4 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Accredited by the AASW. Includes supervised field placements.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March and July",
        skilledOccupation: true,
        field: "Health",
      },
      {
        name: "Bachelor of Community Welfare",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 23500,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Accredited by Community Work Australia.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March and July",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Bachelor of Laws",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 21000,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Admission to practise requires further practical legal training.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March and July",
        skilledOccupation: false,
        field: "Law",
      },
      {
        name: "Bachelor of Legal and Justice Studies",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 21000,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March and July",
        skilledOccupation: false,
        field: "Law",
      },
      {
        name: "Associate Degree of Law (Paralegal Studies)",
        duration: "2 years full time",
        tuitionMin: 13000,
        tuitionMax: 21000,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 6.0.",
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
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification. Specialisations in agriculture, environment and marine science.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March",
        skilledOccupation: false,
        field: "Science",
      },
      {
        name: "Bachelor of Veterinary Technology",
        duration: "3 years full time",
        tuitionMin: 18000,
        tuitionMax: 20000,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March",
        skilledOccupation: false,
        field: "Science",
      },
      {
        name: "Bachelor of Business in Hotel Management",
        duration: "3 years full time",
        tuitionMin: 13000,
        tuitionMax: 17750,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Hotel Management",
      },
      {
        name: "Associate Degree of International Hotel and Tourism Management",
        duration: "2 years full time",
        tuitionMin: 13000,
        tuitionMax: 17750,
        tuitionBasis: "per semester",
        entryRequirement: "Completed Year 12 or equivalent senior secondary qualification.",
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
        tuitionMin: 13000,
        tuitionMax: 20000,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree. Cybersecurity and artificial intelligence specialisations.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March, July and November",
        skilledOccupation: true,
        field: "Computing & IT",
      },
      {
        name: "MBA / Master of Business",
        duration: "2 years full time",
        tuitionMin: 13000,
        tuitionMax: 19750,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree. Business analytics and artificial intelligence specialisation available.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Business",
      },
      {
        name: "Master of Professional Accounting",
        duration: "2 years full time",
        tuitionMin: 13000,
        tuitionMax: 19750,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree. An entry route for graduates without an accounting background.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March, July and November",
        skilledOccupation: true,
        field: "Business",
      },
      {
        name: "Master of Business Analytics",
        duration: "2 years full time",
        tuitionMin: 13000,
        tuitionMax: 19750,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Business",
      },
      {
        name: "Graduate Diploma of Business",
        duration: "1 year full time",
        tuitionMin: 13000,
        tuitionMax: 19750,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree. Carries credit into a masters.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Business",
      },
      {
        name: "Graduate Certificate in Business",
        duration: "6 months full time",
        tuitionMin: 6500,
        tuitionMax: 19750,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree. A shorter entry point that credits into a masters.",
        englishRequirement: "IELTS Academic 6.0.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Business",
      },
      {
        name: "Master of Teaching",
        duration: "2 years full time",
        tuitionMin: 13000,
        tuitionMax: 19000,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree. Accredited by NESA and AITSL. Primary and secondary specialisations.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March, July, September and November",
        skilledOccupation: true,
        field: "Education & Teaching",
      },
      {
        name: "Master of Teaching (Early Childhood)",
        duration: "2 years full time",
        tuitionMin: 13000,
        tuitionMax: 19000,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree. Accredited by NESA, AITSL and ACECQA.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March, July, September and November",
        skilledOccupation: true,
        field: "Education & Teaching",
      },
      {
        name: "Graduate Diploma of Education (Early Childhood)",
        duration: "1 year full time",
        tuitionMin: 13000,
        tuitionMax: 19000,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree. Accredited by ACECQA.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March, July, September and November",
        skilledOccupation: true,
        field: "Education & Teaching",
      },
      {
        name: "Graduate Diploma of Teaching (Primary / Secondary)",
        duration: "1 year full time",
        tuitionMin: 13000,
        tuitionMax: 19000,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree. Accredited by ACECQA.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March, July and November",
        skilledOccupation: true,
        field: "Education & Teaching",
      },
      {
        name: "Master of Engineering",
        duration: "2 years full time",
        tuitionMin: 13000,
        tuitionMax: 24000,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree. Civil engineering specialisation.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March and July",
        skilledOccupation: true,
        field: "Engineering",
      },
      {
        name: "Master of Nursing (Graduate Entry)",
        duration: "2 years full time",
        tuitionMin: 18000,
        tuitionMax: 23750,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree. Accredited by the NMBA.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "January and August",
        skilledOccupation: true,
        field: "Health",
      },
      {
        name: "Master of Social Work (Professional Qualifying)",
        duration: "2 years full time",
        tuitionMin: 13000,
        tuitionMax: 23750,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree. Accredited by the AASW. The qualifying route for graduates of another discipline.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March and November",
        skilledOccupation: true,
        field: "Health",
      },
      {
        name: "Graduate Certificate in Social Sciences for Social Work",
        duration: "6 months full time",
        tuitionMin: 13000,
        tuitionMax: 23750,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "July and November",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Master of Naturopathic Medicine",
        duration: "2 years full time",
        tuitionMin: 13000,
        tuitionMax: 23750,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March and July",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Master of Osteopathic Medicine",
        duration: "1.5 years full time",
        tuitionMin: 13000,
        tuitionMax: 23750,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree. Requires prior undergraduate study in osteopathy.",
        englishRequirement: "IELTS Academic 7.0.",
        nextIntake: "March",
        skilledOccupation: false,
        field: "Health",
      },
      {
        name: "Master of Business in Global Hotel Leadership",
        duration: "2 years full time",
        tuitionMin: 13000,
        tuitionMax: 19750,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Hotel Management",
      },
      {
        name: "Graduate Diploma of Business in Global Hotel Leadership",
        duration: "1 year full time",
        tuitionMin: 13000,
        tuitionMax: 19750,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Hotel Management",
      },
      {
        name: "Graduate Certificate of Business in Global Hotel Leadership",
        duration: "6 months full time",
        tuitionMin: 6500,
        tuitionMax: 19750,
        tuitionBasis: "per semester",
        entryRequirement: "A completed bachelor degree.",
        englishRequirement: "IELTS Academic 6.5.",
        nextIntake: "March, July and November",
        skilledOccupation: false,
        field: "Hotel Management",
      },
    ],
    skilledOccupationRelated: true,
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
