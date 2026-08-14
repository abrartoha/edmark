import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import CourseBrowser from "@/components/CourseBrowser";
import { INDICATIVE_NOTICE, MARA_NOTICE } from "@/lib/compliance";
import {
  INTAKE_PLANNING_2026,
  SCHOLARSHIPS_NOTE,
  entryRequirementsExample,
  levels,
  whichLevel,
} from "@/lib/higher-education";

export const metadata: Metadata = {
  title: "Higher Education in Australia",
  description:
    "Bachelor degrees and Masters by coursework at Australian universities. Entry requirements explained plainly, with 2026 intake planning guidance from Edmark Education.",
  alternates: { canonical: "/services/higher-education" },
};

export default function HigherEducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Higher Education"
        title={
          <>
            Degrees, and the{" "}
            <span className="text-eucalypt-light">route that gets you there</span>
          </>
        }
        subtitle="Bachelor degrees and Masters by coursework at Australian universities."
      />
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Higher Education" },
        ]}
      />

      {/* The browser leads the page. Level is one of its filters, so there is
          no card grid in between: the nav link lands straight on the courses. */}
      <section className="border-y border-line bg-paper py-16 lg:py-24">
        <div className="container-page">
          <p className="eyebrow">Courses</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Find your course</h2>

          <CourseBrowser
            courses={levels.flatMap((l) =>
              l.courses.map((c) => ({
                ...c,
                levelSlug: l.slug,
                levelTitle: l.title,
              }))
            )}
            levels={levels.map((l) => ({
              slug: l.slug,
              title: l.title,
              count: l.courses.length,
            }))}
          />

          {/* The hub now lists the courses themselves, including the
              skilled-occupation ones, so it carries the same MARA notice the
              level pages do rather than leaving it behind on them. */}
          {levels.some((l) => l.skilledOccupationRelated) && (
            <p className="mt-10 max-w-3xl text-sm leading-relaxed text-sage">
              {MARA_NOTICE}
            </p>
          )}

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-sage">
            {INDICATIVE_NOTICE}
          </p>
        </div>
      </section>

      {/* Which level is right for you */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-page">
          <p className="eyebrow">Which level is right for you</p>
          <h2 className="mt-3 max-w-3xl text-3xl sm:text-4xl">
            Two levels, two different starting points
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {whichLevel.map((w) => (
              <div key={w.title} className="card">
                <h3 className="text-lg">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-copy">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry requirements, plainly */}
      <section className="border-y border-line bg-paper-sunk py-16 lg:py-24">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Entry requirements, plainly</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">What an offer actually asks for</h2>
          <p className="mt-5 text-base leading-relaxed text-copy">
            {entryRequirementsExample.intro}
          </p>

          <dl className="mt-8 divide-y divide-line border-y border-line">
            {entryRequirementsExample.rows.map((r) => (
              <div key={r.label} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="eyebrow">{r.label}</dt>
                <dd className="text-sm text-ink">{r.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-sm leading-relaxed text-sage">
            {entryRequirementsExample.note}
          </p>
        </div>
      </section>

      {/* 2026 intake planning — supplied verbatim */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">2026 intake planning</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Places are allocated, and timing matters</h2>
          <p className="mt-5 border-l-2 border-brass pl-5 text-base leading-relaxed text-copy">
            {INTAKE_PLANNING_2026}
          </p>
        </div>
      </section>

      {/* Scholarships. Generic on purpose: no institution named and no value
          attributed to one, because terms are reset every intake. */}
      <section className="border-y border-line bg-paper-sunk py-16 lg:py-24">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Scholarships</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            What you can realistically expect
          </h2>
          <p className="mt-5 text-base leading-relaxed text-copy">
            {SCHOLARSHIPS_NOTE}
          </p>
        </div>
      </section>

      <CTA
        title="Not sure which level fits your background?"
        subtitle="Book a free consultation and we'll map your qualification against what Australian universities will actually accept."
      />
    </>
  );
}
