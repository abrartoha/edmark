// ---------------------------------------------------------------------------
// SOURCED FACTS
//
// Every factual figure rendered anywhere on this site lives here, and nowhere
// else. Not in JSX, not in prose, not in a component's local constant.
//
// The reason is the defect that ran through the whole site: confident numbers
// with nobody behind them and no date on them. A wage rate two years stale, a
// partner count nearly double the list beneath it, living costs to the dollar
// from no stated source. Individually small; together they are the same
// misleading-marketing problem ASQA wrote about on 2 September 2026, in a
// different costume.
//
// A figure with a source and a date can be checked and can go stale loudly.
// One typed into a paragraph cannot. scripts/verify-facts.ts fails the build
// when any fact here is missing a source, is missing a URL, or has not been
// verified in six months, so a stale number stops a deploy instead of sitting
// on the site for two years.
//
// Rules for adding one:
//
//   - The source is where the number actually came from. If the number is
//     Edmark's own, say Edmark and date it. Never attribute a figure to an
//     authority that did not publish it.
//   - asAt is when the figure took effect. lastVerified is when a human last
//     looked at the source. They are not the same date and both matter.
//   - If there is no source, there is no figure. Write the sentence without
//     a number instead.
// ---------------------------------------------------------------------------

export type SourcedFact = {
  /** Rendered as-is, e.g. "$26.44 per hour". */
  value: string;
  /** Who published it. */
  source: string;
  sourceUrl: string;
  /** ISO date the figure took effect. */
  asAt: string;
  /** ISO date a human last checked it against the source. */
  lastVerified: string;
  /** Optional qualifier shown after the value, e.g. "for the primary applicant". */
  note?: string;
};

const HOME_AFFAIRS = "Department of Home Affairs";
const HOME_AFFAIRS_500 =
  "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500";

export const facts = {
  // --- Pay -----------------------------------------------------------------
  minimumWage: {
    value: "$26.44 per hour",
    source: "Fair Work Ombudsman",
    sourceUrl: "https://www.fairwork.gov.au/pay-and-wages/minimum-wages",
    asAt: "2026-07-01",
    lastVerified: "2026-09-11",
    note: "national minimum wage, before tax",
  },

  // --- Student visa --------------------------------------------------------
  studentVisaCharge: {
    value: "$2,500",
    source: HOME_AFFAIRS,
    sourceUrl: HOME_AFFAIRS_500,
    asAt: "2026-07-01",
    lastVerified: "2026-09-11",
    note: "primary applicant",
  },
  elicosVisaCharge: {
    value: "$2,050",
    source: HOME_AFFAIRS,
    sourceUrl: HOME_AFFAIRS_500,
    asAt: "2026-07-01",
    lastVerified: "2026-09-11",
    note: "ELICOS and non-award courses",
  },
  livingCostRequirement: {
    value: "$29,710 per year",
    source: HOME_AFFAIRS,
    sourceUrl:
      "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500/financial-capacity",
    asAt: "2024-05-10",
    lastVerified: "2026-09-11",
    note: "single applicant, financial capacity requirement",
  },
  workRights: {
    value: "48 hours per fortnight",
    source: HOME_AFFAIRS,
    sourceUrl: HOME_AFFAIRS_500,
    asAt: "2023-07-01",
    lastVerified: "2026-09-11",
    note: "during study periods; unrestricted when your course is not in session",
  },

  // --- Health cover --------------------------------------------------------
  // The requirement is Home Affairs'. The price is not: no government body
  // publishes an OSHC price range, so this is Edmark's own reading of the
  // policies listed on the government comparison site, and is attributed as
  // such rather than dressed up as an official figure.
  oshcCost: {
    value: "$500 to $700 per year",
    source:
      "Edmark Education, from OSHC policies listed on the Australian Government comparison site",
    sourceUrl: "https://www.privatehealth.gov.au/",
    asAt: "2026-09-11",
    lastVerified: "2026-09-11",
    note: "single cover; varies by provider, level of cover and policy length",
  },
} satisfies Record<string, SourcedFact>;

export type FactKey = keyof typeof facts;

/**
 * The standing warning on any page carrying visa or cost information.
 *
 * Every figure here has a date on it, and every one of them can change between
 * that date and the day somebody reads the page. This says so plainly rather
 * than leaving the reader to assume the site is current.
 */
export const VISA_CURRENCY_NOTICE =
  "Visa requirements change frequently. Always confirm the current position on the Department of Home Affairs website before making decisions.";
