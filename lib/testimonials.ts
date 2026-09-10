// Which student stories may be published, and the disclaimer that goes with
// any that are.
//
// A testimonial names a real person, their country, their course, their
// institution and what happened to them. Publishing that without written
// permission is a privacy problem before it is a marketing one, and an outcome
// presented without a caveat reads as a prediction rather than as one person's
// experience.
//
// Today nothing is published: no consents are on file. That is the honest
// state, and the pages render the empty case rather than hiding the gap.

import { testimonials, type Testimonial } from "./content";
import { successStories, type SuccessStory } from "./success-stories";

/** Only records with a signed consent on file. */
export function publishable<T extends { consentOnFile: boolean }>(
  records: T[]
): T[] {
  return records.filter((r) => r.consentOnFile === true);
}

export const publishedTestimonials: Testimonial[] = publishable(testimonials);
export const publishedStories: SuccessStory[] = publishable(successStories);

/**
 * Required beneath any published testimonial.
 *
 * One student's offer is not a forecast of anyone else's. Saying so is what
 * separates a testimonial from an implied promise about a result Edmark does
 * not control and cannot deliver.
 */
export const OUTCOMES_VARY_NOTICE =
  "Individual results vary. Outcomes depend on the institution, the course and each student's own circumstances. These are the experiences of individual students and are not a prediction of your result.";
