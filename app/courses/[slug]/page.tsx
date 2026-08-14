import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import CourseCard from "@/components/CourseCard";
import CTA from "@/components/CTA";
import FieldArt from "@/components/FieldArt";
import { IconArrow, IconCheck } from "@/components/Icons";
import { INDICATIVE_NOTICE, MARA_NOTICE } from "@/lib/compliance";
import { catalog, fieldInfo, getCourse, relatedCourses } from "@/lib/course-catalog";
import { splitCourseName } from "@/components/CourseCard";

export function generateStaticParams() {
  return catalog.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const course = getCourse(params.slug);
  if (!course) return {};
  return {
    title: course.name,
    description: `${course.name}: typical duration, indicative tuition, entry and English requirements, intakes and career outcomes. Confirmed for your situation in a free consultation with Edmark Education.`,
    alternates: { canonical: `/courses/${course.slug}` },
  };
}

function formatTuition(min?: number, max?: number) {
  if (!min && !max) return "Varies by provider";
  const money = (n: number) => `$${n.toLocaleString("en-AU")}`;
  if (min && max && min !== max) return `${money(min)}–${money(max)}`;
  return money(max || min || 0);
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line py-4">
      <dt className="eyebrow text-[0.65rem]">{label}</dt>
      <dd className="mt-1.5 text-base leading-relaxed text-ink">{value}</dd>
    </div>
  );
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug);
  if (!course) notFound();

  const { qualification, subject, code } = splitCourseName(course.name);
  const info = fieldInfo(course.field);
  const related = relatedCourses(course);

  return (
    <>
      {/* Illustrated header rather than a photograph, drawn in the site
          palette. One scene per study area, so a course reads as part of a
          group instead of carrying stock imagery that fits nothing. */}
      <section className="relative overflow-hidden bg-ink">
        <FieldArt
          field={course.field}
          className="absolute inset-0 h-full w-full opacity-30"
        />
        <div className="container-page relative py-16 lg:py-20">
          <p className="text-xs font-medium uppercase tracking-wider text-mist">
            {course.sector}
            {course.levelTitle ? ` · ${course.levelTitle}` : ""}
            {course.field ? ` · ${course.field}` : ""}
          </p>
          {qualification && (
            <p className="mt-4 text-sm font-medium uppercase tracking-wider text-mist">
              {qualification}
            </p>
          )}
          <h1 className="mt-1 max-w-3xl text-4xl font-medium text-paper sm:text-5xl">
            {subject}
          </h1>
          {code && (
            <p className="mt-3 font-mono text-sm text-mist">{code}</p>
          )}
        </div>
      </section>

      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          {
            label:
              course.sector === "Vocational"
                ? "Vocational (VET) & Short Courses"
                : "Higher Education",
            href: course.listHref,
          },
          { label: subject },
        ]}
      />

      <section className="bg-paper py-16 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow">Course detail</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">What this course involves</h2>
            {info && (
              <p className="mt-5 text-base leading-relaxed text-copy">
                {info.blurb}
              </p>
            )}

            <dl className="mt-8">
              <Fact label="Typical duration" value={course.duration} />
              <Fact
                label={`Indicative tuition (${course.tuitionBasis ?? "per year"})`}
                value={formatTuition(course.tuitionMin, course.tuitionMax)}
              />
              <Fact label="Typical entry requirement" value={course.entryRequirement} />
              <Fact label="English requirement" value={course.englishRequirement} />
              <Fact label="Next intake" value={course.nextIntake} />
            </dl>

            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-sage">
              {INDICATIVE_NOTICE}
            </p>
            {course.skilledOccupation && (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sage">
                {MARA_NOTICE}
              </p>
            )}
          </div>

          <aside className="lg:pt-14">
            {info && (
              <div className="rounded-tr-[2.5rem] rounded-bl-[2.5rem] bg-mint-100 p-8">
                <h3 className="text-xl font-semibold text-eucalypt">
                  Where it can lead
                </h3>
                <p className="mt-2 text-sm text-copy">
                  Roles this study area commonly leads to.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {info.careers.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-eucalypt text-paper">
                        <IconCheck className="h-3 w-3" />
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link
              href={course.listHref}
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-eucalypt transition-colors hover:text-teal-500"
            >
              <IconArrow className="h-3.5 w-3.5 rotate-180" />
              All {course.sector.toLowerCase()} courses
            </Link>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-y border-line bg-paper-sunk py-16 lg:py-20">
          <div className="container-page">
            <p className="eyebrow">Related</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              More in {course.field}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((c) => (
                <CourseCard key={c.slug} course={c} href={`/courses/${c.slug}`} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA
        title={`Thinking about ${subject}?`}
        subtitle="Book a free consultation and we'll confirm the fees, entry requirements and intakes that apply to your background, across the providers we work with."
      />
    </>
  );
}
