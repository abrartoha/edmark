// ============================================================================
// COURSE MATCHER DATA — THIS IS THE ONLY FILE YOU NEED TO EDIT.
// ============================================================================
//
// Twelve pathways covering all five fields across VET, undergraduate and
// postgraduate levels. Figures are researched national ranges, not any one
// provider's quote, and need checking against a real shortlist before launch.
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

export type Pathway = {
  id: string;
  name: string;
  duration: string;
  tuitionMin: number;
  tuitionMax: number;
  entryRequirement: string;
  nextIntake: string;
  tags: {
    fields: Field[];
    qualifications: Qualification[];
    budgetBands: BudgetBand[];
    inDemand: boolean;
  };
};

export const pathways: Pathway[] = [
  // ---- Nursing & health -------------------------------------------------
  {
    id: "cert3-individual-support",
    name: "Certificate III in Individual Support (Ageing)",
    duration: "6 to 12 months",
    tuitionMin: 8000,
    tuitionMax: 15000,
    entryRequirement: "Year 12 or equivalent. Police check and placement hours required.",
    nextIntake: "Rolling intakes at most RTOs",
    tags: {
      fields: ["nursing-health"],
      qualifications: ["year12", "diploma", "bachelor", "masters"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: true,
    },
  },
  {
    id: "diploma-nursing",
    name: "Diploma of Nursing (Enrolled Nurse)",
    duration: "18 months to 2 years",
    tuitionMin: 18000,
    tuitionMax: 28000,
    entryRequirement: "Year 12 or equivalent. Leads to AHPRA registration as an Enrolled Nurse.",
    nextIntake: "February and July, with extra intakes at some RTOs",
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

  // ---- Trade & construction ---------------------------------------------
  {
    id: "cert3-carpentry",
    name: "Certificate III in Carpentry",
    duration: "2 to 3 years, including on-the-job training",
    tuitionMin: 12000,
    tuitionMax: 20000,
    entryRequirement: "Year 12 or equivalent. Usually completed alongside an apprenticeship or work placement.",
    nextIntake: "Rolling intakes at most RTOs",
    tags: {
      fields: ["trade-construction"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: true,
    },
  },

  // ---- Hospitality & cookery --------------------------------------------
  {
    id: "cert3-commercial-cookery",
    name: "Certificate III in Commercial Cookery",
    duration: "12 to 18 months",
    tuitionMin: 12000,
    tuitionMax: 18000,
    entryRequirement: "Year 12 or equivalent. Includes supervised kitchen service hours.",
    nextIntake: "Rolling intakes at most RTOs",
    tags: {
      fields: ["hospitality-cookery"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: true,
    },
  },
  {
    id: "diploma-hospitality-management",
    name: "Diploma of Hospitality Management",
    duration: "12 to 18 months",
    tuitionMin: 16000,
    tuitionMax: 26000,
    entryRequirement: "Year 12 or equivalent, or a Certificate III in a hospitality field for credit.",
    nextIntake: "Multiple intakes a year at most providers",
    tags: {
      fields: ["hospitality-cookery"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["15-25k", "25-40k"],
      inDemand: true,
    },
  },

  // ---- Teaching & childcare ---------------------------------------------
  {
    id: "diploma-early-childhood",
    name: "Diploma of Early Childhood Education and Care",
    duration: "18 months to 2 years",
    tuitionMin: 16000,
    tuitionMax: 26000,
    entryRequirement: "Year 12 or equivalent. Working with Children Check and placement hours required.",
    nextIntake: "Multiple intakes a year at most providers",
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

  // ---- Business & IT ------------------------------------------------------
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
  // ---- Added: trades beyond carpentry ------------------------------------
  {
    id: "cert3-electrician",
    name: "Certificate III in Electrotechnology Electrician",
    duration: "3 to 4 years, including on-the-job training",
    tuitionMin: 14000,
    tuitionMax: 22000,
    entryRequirement: "Year 12 or equivalent. Leads to electrical licensing, which is regulated in each state.",
    nextIntake: "Rolling intakes at most RTOs",
    tags: {
      fields: ["trade-construction"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: true,
    },
  },
  {
    id: "cert3-plumbing",
    name: "Certificate III in Plumbing",
    duration: "3 to 4 years, including on-the-job training",
    tuitionMin: 14000,
    tuitionMax: 22000,
    entryRequirement: "Year 12 or equivalent. Usually completed alongside an apprenticeship.",
    nextIntake: "Rolling intakes at most RTOs",
    tags: {
      fields: ["trade-construction"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: true,
    },
  },
  {
    id: "cert3-automotive",
    name: "Certificate III in Light Vehicle Mechanical Technology",
    duration: "2 to 3 years, including on-the-job training",
    tuitionMin: 12000,
    tuitionMax: 20000,
    entryRequirement: "Year 12 or equivalent. Diagnosing, servicing and repairing light vehicles.",
    nextIntake: "Rolling intakes at most RTOs",
    tags: {
      fields: ["trade-construction"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: true,
    },
  },

  // ---- Added: health beyond nursing --------------------------------------
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

  // ---- Added: hospitality progression ------------------------------------
  {
    id: "cert4-kitchen-management",
    name: "Certificate IV in Kitchen Management",
    duration: "12 to 18 months",
    tuitionMin: 13000,
    tuitionMax: 20000,
    entryRequirement: "Usually follows a Certificate III in Commercial Cookery and builds toward chef de partie roles.",
    nextIntake: "Rolling intakes at most RTOs",
    tags: {
      fields: ["hospitality-cookery"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: true,
    },
  },

  // ---- Added: teaching entry point ---------------------------------------
  {
    id: "cert3-early-childhood",
    name: "Certificate III in Early Childhood Education and Care",
    duration: "6 to 12 months",
    tuitionMin: 8000,
    tuitionMax: 15000,
    entryRequirement: "Year 12 or equivalent. Working with Children Check and placement hours required.",
    nextIntake: "Rolling intakes at most RTOs",
    tags: {
      fields: ["teaching-childcare"],
      qualifications: ["year12", "diploma", "bachelor", "masters"],
      budgetBands: ["under-15k", "15-25k"],
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

  // ---- Added: business entry point ---------------------------------------
  {
    id: "diploma-business",
    name: "Diploma of Business",
    duration: "12 months",
    tuitionMin: 12000,
    tuitionMax: 22000,
    entryRequirement: "Year 12 or equivalent. Often packaged as credit into the first year of a bachelor degree.",
    nextIntake: "Multiple intakes a year at most providers",
    tags: {
      fields: ["business-it"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k"],
      inDemand: false,
    },
  },
  // ---- Engineering & science ---------------------------------------------
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
    name: "Diploma of Engineering",
    duration: "12 months",
    tuitionMin: 16000,
    tuitionMax: 28000,
    entryRequirement: "Year 12 or equivalent. Usually carries credit into the second year of an engineering degree.",
    nextIntake: "Multiple intakes a year at most providers",
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
