import type { Course } from "@/lib/higher-education";

function formatTuition(min?: number, max?: number): string {
  // Both omitted is a deliberate signal, not missing data: some programs are
  // priced too differently across the network to quote as a range.
  if (!min && !max) return "Varies by provider";
  const money = (n: number) => `$${n.toLocaleString("en-AU")}`;
  if (min && max && min !== max) return `${money(min)}–${money(max)}`;
  return money(max || min || 0);
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

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article
      className="flex h-full flex-col rounded-tr-[2.5rem] rounded-bl-[2.5rem] bg-mint-100 p-7"
    >
      <h3 className="text-xl font-semibold leading-snug text-eucalypt">
        {course.name}
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
    </article>
  );
}
