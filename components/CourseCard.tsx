import type { Course } from "@/lib/higher-education";

function formatTuition(min: number, max: number): string {
  if (!min && !max) return "Not set";
  const money = (n: number) => `$${n.toLocaleString("en-AU")}`;
  if (min && max && min !== max) return `${money(min)}–${money(max)}`;
  return money(max || min);
}

function Row({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="border-t border-line pt-3">
      <dt className="eyebrow text-[0.65rem]">{label}</dt>
      <dd
        className={`mt-1 text-sm ${mono ? "font-mono text-eucalypt" : "text-ink"}`}
      >
        {value || "Not set"}
      </dd>
    </div>
  );
}

/** Built on the migrated .card primitive: 12px radius, 1px line, no shadow. */
export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card flex h-full flex-col">
      <h3 className="text-lg leading-snug">{course.name}</h3>
      <dl className="mt-5 space-y-3">
        <Row label="Typical duration" value={course.duration} />
        <Row
          label="Indicative annual tuition"
          value={formatTuition(course.tuitionMin, course.tuitionMax)}
          mono
        />
        <Row label="Typical entry requirement" value={course.entryRequirement} />
        <Row label="English requirement" value={course.englishRequirement} />
        <Row label="Next intake" value={course.nextIntake} />
      </dl>
    </article>
  );
}
