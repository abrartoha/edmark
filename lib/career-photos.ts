// Career photography, reusing the images already shot for the qualifications
// these careers replaced.
//
// The photo map is keyed by the retired course slug, each of which ends in its
// national code. A career is matched to the photo for its first pathway code,
// so a page about carpentry still shows carpentry. Nothing new was shot and no
// file moved; only the lookup changed.
//
// A career with no match renders its study-area illustration instead, so a
// missing photo is never a gap.

import { COURSE_PHOTO_FILES } from "./course-photos.generated";
import type { Career } from "./careers";

/** Photo for a career, found via the national code of its first pathway. */
export function careerPhoto(career: Career): string | null {
  const code = career.pathways[0]?.nationalCode.toLowerCase();
  if (!code) return null;

  const key = Object.keys(COURSE_PHOTO_FILES).find((k) => k.endsWith(`-${code}`));
  return key ? `/images/courses/${COURSE_PHOTO_FILES[key]}` : null;
}
