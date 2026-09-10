// Career photography, reusing the images already shot for the qualifications
// these careers replaced.
//
// The photo map is keyed by the retired course slug. Two kinds of key exist,
// because two kinds of course page were retired:
//
//   Vocational — the slug ends in the national code, so a career is matched by
//   the code on its pathway.
//   Higher education — the slug is the course title, so a career is matched by
//   slugifying the pathway's title the same way the old course pages did.
//
// Nothing was reshot and no file moved; only the lookup changed. A career with
// no match renders its card without a photo rather than with a broken one.

import { COURSE_PHOTO_FILES } from "./course-photos.generated";
import type { Career, QualificationPathway } from "./careers";

/** The slug the retired course page would have had, from its title. */
function titleSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function fileFor(pathway: QualificationPathway): string | null {
  // Vocational: the code is the reliable part of the slug.
  if (pathway.nationalCode) {
    const code = pathway.nationalCode.toLowerCase();
    const key = Object.keys(COURSE_PHOTO_FILES).find((k) => k.endsWith(`-${code}`));
    if (key) return COURSE_PHOTO_FILES[key];
  }
  // Higher education: the title is the slug.
  return COURSE_PHOTO_FILES[titleSlug(pathway.title)] ?? null;
}

/**
 * Photo for a career, from the first of its pathways that has one.
 *
 * First rather than best: the pathways are listed in the order a reader would
 * meet them, so the first is the one the page leads with.
 */
export function careerPhoto(career: Career): string | null {
  for (const pathway of career.pathways) {
    const file = fileFor(pathway);
    if (file) return `/images/courses/${file}`;
  }
  return null;
}
