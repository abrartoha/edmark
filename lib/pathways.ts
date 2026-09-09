// ============================================================================
// COURSE MATCHER DATA — THIS IS THE ONLY FILE YOU NEED TO EDIT.
// ============================================================================
//
// Twelve pathways covering all five fields across VET, undergraduate and
// postgraduate levels. Figures are researched national ranges, not any one
// provider's quote.
//
// These are national ranges, not a quote from any one provider, which is why
// every surface that prints them carries INDICATIVE_NOTICE. A student's actual
// fee is confirmed against a real shortlist during their consultation.
//
// HOW TO FILL ONE IN
// ------------------
//   name              The pathway as a student would say it, e.g.
//                     "Diploma of Nursing". Not an institution's marketing name.
//   duration          Free text, e.g. "18 months full-time".
//   tuitionMin/Max    Whole dollars per year, no commas or $ sign.
//                     Example: 18000 and 24000 renders as "$18,000–$24,000".
//                     Leave both at 0 and the card shows "Not set".
//   entryRequirement  Free text, e.g. "Year 12 or equivalent, IELTS 6.0".
//   nextIntake        Free text, e.g. "February and July".
//
// TAGS control which answers surface this pathway. Every tag value must come
// from the lists below — a typo will fail the build, which is deliberate: a
// silently dropped pathway would be far worse than a build error.
//
//   fields             one or more of:
//                      "nursing-health" | "trade-construction" |
//                      "hospitality-cookery" | "business-it" |
//                      "teaching-childcare" | "engineering-science"
//   qualifications     which prior qualifications can enter this pathway:
//                      "year12" | "diploma" | "bachelor" | "masters"
//   budgetBands        which yearly tuition budgets this fits:
//                      "under-15k" | "15-25k" | "25-40k" | "40k-plus"
//   inDemand           true only if this pathway leads to work Australian
//                      employers are consistently hiring for. It weights the
//                      matcher's ranking and prints nothing on the card. When
//                      in doubt, use false.
//
// There is deliberately no intake-month tag: intakes vary by institution, not
// by pathway, so a single value here would be invented data.
// ============================================================================

export type Field =
  | "nursing-health"
  | "trade-construction"
  | "hospitality-cookery"
  | "business-it"
  | "teaching-childcare"
  | "engineering-science";

export type Qualification = "year12" | "diploma" | "bachelor" | "masters";

export type BudgetBand = "under-15k" | "15-25k" | "25-40k" | "40k-plus";

/**
 * Higher-education pathways carry the commercial detail. Vocational ones do
 * not, and instead point at a career page.
 *
 * Edmark is an education agent, not an RTO. Publishing a fee, a duration or an
 * intake against an AQF qualification is marketing somebody else's training
 * product, which is what ASQA's notice of 2 September 2026 was about. The
 * vocational entries here were doing exactly that, on the homepage, and are
 * now occupations rather than qualifications.
 */
export type Pathway = {
  id: string;
  name: string;
  /** Set on vocational entries. Its presence is what makes an entry a career. */
  careerSlug?: string;
  /** One line about the occupation. Vocational entries only. */
  summary?: string;
  duration?: string;
  tuitionMin?: number;
  tuitionMax?: number;
  entryRequirement?: string;
  nextIntake?: string;
  tags: {
    fields: Field[];
    qualifications: Qualification[];
    budgetBands: BudgetBand[];
    inDemand: boolean;
  };
};

export const pathways: Pathway[] = [
  {
    id: "cert3-individual-support",
    name: "Aged care and disability support worker",
    careerSlug: "aged-care-and-disability-support-worker",
    summary: "Assisting older people and people with disability with daily living, personal care and community access.",
    tags: {
      fields: ["nursing-health"],
      qualifications: ["year12", "diploma", "bachelor", "masters"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: true,
    },
  },
  {
    id: "diploma-nursing",
    name: "Enrolled nurse",
    careerSlug: "enrolled-nurse",
    summary: "Providing nursing care under the supervision of a registered nurse, in hospitals, aged care and community health.",
    tags: {
      fields: ["nursing-health"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["15-25k", "25-40k"],
      inDemand: true,
    },
  },
  {
    id: "bachelor-nursing",
    name: "Bachelor of Nursing",
    duration: "3 years full time",
    tuitionMin: 32000,
    tuitionMax: 45000,
    entryRequirement: "Year 12 or equivalent. A Diploma of Nursing usually carries credit into second year.",
    nextIntake: "February and July at most universities",
    tags: {
      fields: ["nursing-health"],
      qualifications: ["year12", "diploma", "bachelor"],
      budgetBands: ["25-40k", "40k-plus"],
      inDemand: true,
    },
  },
  {
    id: "cert3-carpentry",
    name: "Carpenter",
    careerSlug: "carpenter",
    summary: "Setting out, building and installing structures in timber on residential and commercial sites.",
    tags: {
      fields: ["trade-construction"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: true,
    },
  },
  {
    id: "cert3-commercial-cookery",
    name: "Chef and commercial cook",
    careerSlug: "chef",
    summary: "Preparing and cooking food to order in commercial kitchens, and supervising kitchen sections.",
    tags: {
      fields: ["hospitality-cookery"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: true,
    },
  },
  {
    id: "diploma-hospitality-management",
    name: "Hospitality and venue manager",
    careerSlug: "hospitality-manager",
    summary: "Running the service, staffing and commercial side of cafes, restaurants, hotels and venues.",
    tags: {
      fields: ["hospitality-cookery"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["15-25k", "25-40k"],
      inDemand: true,
    },
  },
  {
    id: "diploma-early-childhood",
    name: "Early childhood educator",
    careerSlug: "early-childhood-educator",
    summary: "Planning and delivering education and care for children before school age.",
    tags: {
      fields: ["teaching-childcare"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["15-25k", "25-40k"],
      inDemand: true,
    },
  },
  {
    id: "master-teaching",
    name: "Master of Teaching",
    duration: "2 years full time",
    tuitionMin: 30000,
    tuitionMax: 45000,
    entryRequirement: "A completed bachelor degree in a related discipline. Leads to teacher registration.",
    nextIntake: "February and July at most universities",
    tags: {
      fields: ["teaching-childcare"],
      qualifications: ["bachelor", "masters"],
      budgetBands: ["25-40k", "40k-plus"],
      inDemand: true,
    },
  },
  {
    id: "bachelor-it",
    name: "Bachelor of Information Technology",
    duration: "3 years full time",
    tuitionMin: 30000,
    tuitionMax: 45000,
    entryRequirement: "Year 12 or equivalent. Some providers assume mathematics as background.",
    nextIntake: "February and July at most universities",
    tags: {
      fields: ["business-it"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["25-40k", "40k-plus"],
      inDemand: true,
    },
  },
  {
    id: "bachelor-business",
    name: "Bachelor of Business",
    duration: "3 years full time",
    tuitionMin: 22000,
    tuitionMax: 40000,
    entryRequirement: "Year 12 or equivalent senior secondary qualification.",
    nextIntake: "February and July, with a third intake at some providers",
    tags: {
      fields: ["business-it"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["15-25k", "25-40k", "40k-plus"],
      inDemand: false,
    },
  },
  {
    id: "master-professional-accounting",
    name: "Master of Professional Accounting",
    duration: "2 years full time",
    tuitionMin: 28000,
    tuitionMax: 45000,
    entryRequirement: "A completed bachelor degree in any discipline.",
    nextIntake: "February and July at most universities",
    tags: {
      fields: ["business-it"],
      qualifications: ["bachelor", "masters"],
      budgetBands: ["25-40k", "40k-plus"],
      inDemand: true,
    },
  },
  {
    id: "master-it",
    name: "Master of Information Technology",
    duration: "1.5 to 2 years full time, shorter with credit",
    tuitionMin: 30000,
    tuitionMax: 48000,
    entryRequirement: "A completed bachelor degree. A cognate degree usually shortens the program.",
    nextIntake: "February and July at most universities",
    tags: {
      fields: ["business-it"],
      qualifications: ["bachelor", "masters"],
      budgetBands: ["25-40k", "40k-plus"],
      inDemand: true,
    },
  },
  {
    id: "cert3-electrician",
    name: "Electrician",
    careerSlug: "electrician",
    summary: "Installing, testing and maintaining electrical wiring, switchboards and equipment.",
    tags: {
      fields: ["trade-construction"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: true,
    },
  },
  {
    id: "cert3-plumbing",
    name: "Plumber",
    careerSlug: "plumber",
    summary: "Installing and maintaining the water, gas, drainage and roof drainage systems in buildings.",
    tags: {
      fields: ["trade-construction"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: true,
    },
  },
  {
    id: "cert3-automotive",
    name: "Light vehicle mechanic",
    careerSlug: "light-vehicle-mechanic",
    summary: "Diagnosing, servicing and repairing cars and light commercial vehicles.",
    tags: {
      fields: ["trade-construction"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: true,
    },
  },
  {
    id: "bachelor-social-work",
    name: "Bachelor of Social Work",
    duration: "4 years full time",
    tuitionMin: 30000,
    tuitionMax: 38000,
    entryRequirement: "Year 12 or equivalent. Includes supervised field placements.",
    nextIntake: "February, with a mid-year intake at some universities",
    tags: {
      fields: ["nursing-health", "teaching-childcare"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["25-40k"],
      inDemand: true,
    },
  },
  {
    id: "master-nursing",
    name: "Master of Nursing",
    duration: "1.5 to 2 years full time",
    tuitionMin: 32000,
    tuitionMax: 46000,
    entryRequirement: "Registration as a nurse, or a bachelor degree for entry-to-practice streams.",
    nextIntake: "February and July at most universities",
    tags: {
      fields: ["nursing-health"],
      qualifications: ["bachelor", "masters"],
      budgetBands: ["25-40k", "40k-plus"],
      inDemand: true,
    },
  },
  {
    id: "bachelor-education",
    name: "Bachelor of Education (Early Childhood / Primary)",
    duration: "4 years full time",
    tuitionMin: 28000,
    tuitionMax: 40000,
    entryRequirement: "Year 12 or equivalent. A diploma in early childhood often carries credit.",
    nextIntake: "February, with a mid-year intake at some universities",
    tags: {
      fields: ["teaching-childcare"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["25-40k"],
      inDemand: true,
    },
  },
  {
    id: "diploma-business",
    name: "Business administrator and manager",
    careerSlug: "business-administrator",
    summary: "Running the operations, planning and coordination side of an organisation.",
    tags: {
      fields: ["business-it"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: false,
    },
  },
  {
    id: "bachelor-engineering",
    name: "Bachelor of Engineering (Honours)",
    duration: "4 years full time",
    tuitionMin: 40000,
    tuitionMax: 55000,
    entryRequirement: "Year 12 or equivalent, with mathematics and often physics required rather than assumed. Accredited by Engineers Australia.",
    nextIntake: "February and July at most universities",
    tags: {
      fields: ["engineering-science"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["25-40k", "40k-plus"],
      inDemand: true,
    },
  },
  {
    id: "master-engineering",
    name: "Master of Engineering",
    duration: "2 years full time",
    tuitionMin: 35000,
    tuitionMax: 50000,
    entryRequirement: "A completed bachelor degree in engineering or a closely related discipline.",
    nextIntake: "February and July at most universities",
    tags: {
      fields: ["engineering-science"],
      qualifications: ["bachelor", "masters"],
      budgetBands: ["25-40k", "40k-plus"],
      inDemand: true,
    },
  },
  {
    id: "diploma-engineering",
    name: "Engineering technician",
    careerSlug: "engineering-technician",
    summary: "Supporting design, planning and project delivery in engineering environments.",
    tags: {
      fields: ["engineering-science"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k", "25-40k"],
      inDemand: true,
    },
  },
  {
    id: "bachelor-science",
    name: "Bachelor of Science",
    duration: "3 years full time",
    tuitionMin: 30000,
    tuitionMax: 45000,
    entryRequirement: "Year 12 or equivalent. Majors range from biomedical and environmental science to data science.",
    nextIntake: "February and July at most universities",
    tags: {
      fields: ["engineering-science"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["25-40k", "40k-plus"],
      inDemand: false,
    },
  },
];
