// ============================================================================
// COURSE MATCHER DATA — THIS IS THE ONLY FILE YOU NEED TO EDIT.
// ============================================================================
//
// Every entry below is a placeholder. Nothing here describes a real course.
// Replace all four (add as many more as you like) before this tool goes live.
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
//                      "teaching-childcare"
//   qualifications     which prior qualifications can enter this pathway:
//                      "year12" | "diploma" | "bachelor" | "masters"
//   budgetBands        which yearly tuition budgets this fits:
//                      "under-15k" | "15-25k" | "25-40k" | "40k-plus"
//   skilledOccupation  true only if this pathway maps to an occupation on a
//                      skilled occupation list. Setting true adds the MARA
//                      referral notice to the card. When in doubt, use false.
//
// There is deliberately no intake-month tag: intakes vary by institution, not
// by pathway, so a single value here would be invented data.
// ============================================================================

export type Field =
  | "nursing-health"
  | "trade-construction"
  | "hospitality-cookery"
  | "business-it"
  | "teaching-childcare";

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
    skilledOccupation: boolean;
  };
};

export const pathways: Pathway[] = [
  {
    id: "placeholder-1",
    name: "PLACEHOLDER — replace before launch",
    duration: "",
    tuitionMin: 0,
    tuitionMax: 0,
    entryRequirement: "",
    nextIntake: "",
    tags: {
      fields: ["nursing-health"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["15-25k", "25-40k"],
      skilledOccupation: true,
    },
  },
  {
    id: "placeholder-2",
    name: "PLACEHOLDER — replace before launch",
    duration: "",
    tuitionMin: 0,
    tuitionMax: 0,
    entryRequirement: "",
    nextIntake: "",
    tags: {
      fields: ["trade-construction"],
      qualifications: ["year12"],
      budgetBands: ["under-15k", "15-25k"],
      skilledOccupation: true,
    },
  },
  {
    id: "placeholder-3",
    name: "PLACEHOLDER — replace before launch",
    duration: "",
    tuitionMin: 0,
    tuitionMax: 0,
    entryRequirement: "",
    nextIntake: "",
    tags: {
      fields: ["business-it"],
      qualifications: ["bachelor", "masters"],
      budgetBands: ["25-40k", "40k-plus"],
      skilledOccupation: false,
    },
  },
  {
    id: "placeholder-4",
    name: "PLACEHOLDER — replace before launch",
    duration: "",
    tuitionMin: 0,
    tuitionMax: 0,
    entryRequirement: "",
    nextIntake: "",
    tags: {
      fields: ["hospitality-cookery", "teaching-childcare"],
      qualifications: ["year12", "diploma"],
      budgetBands: ["under-15k", "15-25k"],
      skilledOccupation: false,
    },
  },
];
