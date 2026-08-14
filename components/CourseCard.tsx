import Image from "next/image";
import Link from "next/link";
import FieldArt from "./FieldArt";
import { coursePhoto } from "@/lib/course-catalog";
import type { Course } from "@/lib/higher-education";

function formatTuition(min?: number, max?: number): string {
  // Both omitted is a deliberate signal, not missing data: some programs are
  // priced too differently across the network to quote as a range.
  if (!min && !max) return "Varies by provider";
  const money = (n: number) => `$${n.toLocaleString("en-AU")}`;
  if (min && max && min !== max) return `${money(min)}–${money(max)}`;
  return money(max || min || 0);
}

/** A trailing training package code, e.g. "(CPC30220)". Deliberately strict on
 *  case and digits so a real parenthetical like "(Paralegal Studies)" or
 *  "(English language)" is left as part of the course name. */
const CODE = /\s*\(([A-Z]{2,4}\d{4,6}[A-Z]?)\)\s*$/;

/** The qualification that precedes the subject, e.g. "Certificate III in ",
 *  "Graduate Diploma of ". Anchored, so a name that does not start with one,
 *  like "Foundation studies" or "ELICOS", simply keeps its whole title. */
const QUALIFICATION =
  /^((?:Graduate |Associate |Advanced )?(?:Certificate|Diploma|Bachelor|Master|Doctor|Degree)(?:\s+[IVX]+)?(?:\s+Degree)?\s+(?:of|in)\s+)/;

/**
 * Splits "Certificate III in Carpentry (CPC30220)" into the qualification, the
 * subject and the code, so the subject can carry the visual weight. The
 * qualification and code are what every card has in common; the subject is the
 * only part a student is actually scanning for.
 */
export function splitCourseName(name: string) {
  const codeMatch = name.match(CODE);
  const code = codeMatch ? codeMatch[1] : null;
  const withoutCode = code ? name.replace(CODE, "") : name;

  const qualMatch = withoutCode.match(QUALIFICATION);
  const qualification = qualMatch ? qualMatch[1].trim() : null;
  const subject = qualMatch ? withoutCode.slice(qualMatch[1].length) : withoutCode;

  return { qualification, subject, code };
}

/**
 * Label and value share a line, label in bold, so the card scans as a list of
 * facts rather than a stack of headed blocks. Values here run to full
 * sentences, so the value wraps under the label instead of being truncated.
 */
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="inline font-semibold text-ink">{label}: </dt>
      <dd className="inline text-copy">{value || "Not set"}</dd>
    </div>
  );
}

export default function CourseCard({
  course,
  href,
}: {
  course: Course;
  /** Omit and the card renders as static, which keeps it usable anywhere. */
  href?: string;
}) {
  // sage measures 4.5:1 against Mint 100, which rounds onto the AA line
  // rather than clearing it, so the secondary text here uses copy at 7.9:1.
  const { qualification, subject, code } = splitCourseName(course.name);

  // href is always /courses/<slug>, so the photo is looked up from it rather
  // than threading a second prop through every caller.
  const slug = href?.replace("/courses/", "");
  const photo = coursePhoto(slug);

  const media = "-mx-7 -mt-7 mb-6 h-36 w-[calc(100%+3.5rem)] rounded-tr-[2.5rem] object-cover";

  const body = (
    <>
      {/* A photograph where the course has one, otherwise the study area
          illustration. Decorative either way: the course is named in the text
          beside it, so the alt text stays empty rather than repeating it. */}
      {photo ? (
        <Image
          src={photo}
          alt=""
          width={1200}
          height={805}
          className={media}
        />
      ) : (
        <FieldArt field={course.field} className={media} />
      )}
      <h3 className="leading-snug">
        {qualification && (
          <span className="block text-xs font-medium uppercase tracking-wider text-copy">
            {qualification}
          </span>
        )}
        <span className="mt-1 block text-2xl font-bold text-eucalypt">
          {subject}
        </span>
        {code && (
          <span className="mt-1.5 block font-mono text-xs text-copy">{code}</span>
        )}
      </h3>

      <dl className="mt-5 space-y-2.5 text-sm leading-relaxed">
        <Row label="Typical duration" value={course.duration} />
        <Row
          label={`Indicative tuition (${course.tuitionBasis ?? "per year"})`}
          value={formatTuition(course.tuitionMin, course.tuitionMax)}
        />
        <Row label="Typical entry requirement" value={course.entryRequirement} />
        <Row label="English requirement" value={course.englishRequirement} />
        <Row label="Next intake" value={course.nextIntake} />
      </dl>
    </>
  );

  const shell =
    "flex h-full flex-col overflow-hidden rounded-tr-[2.5rem] rounded-bl-[2.5rem] bg-mint-100 p-7";

  if (!href) return <article className={shell}>{body}</article>;

  return (
    <Link
      href={href}
      className={`${shell} group transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-eucalypt focus-visible:ring-offset-2`}
    >
      {body}
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-eucalypt">
        Course detail
        <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
      </span>
    </Link>
  );
}
