import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import { IconArrow } from "@/components/Icons";
import { INDICATIVE_NOTICE } from "@/lib/compliance";
import {
  INTAKE_PLANNING_2026,
  entryRequirementsExample,
  levels,
  whichLevel,
} from "@/lib/higher-education";

export const metadata: Metadata = {
  title: "Higher Education in Australia",
  description:
    "Bachelor degrees, Masters by coursework and pathway programs at Australian universities. Entry requirements explained plainly, with 2026 intake planning guidance from Edmark Education.",
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
        subtitle="Bachelor degrees, Masters by coursework and the pathway programs that lead into them."
      />
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Higher Education" },
        ]}
      />

      {/* Levels. First on the page so the three routes and their courses are
          the first thing a visitor can act on. */}
      <section className="border-y border-line bg-paper-sunk py-16 lg:py-24">
        <div className="container-page">
          <p className="eyebrow">Explore by level</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Where would you start?</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {levels.map((l) => (
              <Link
                key={l.slug}
                href={`/services/higher-education/${l.slug}`}
                className="card-hover group flex flex-col"
              >
                <h3 className="text-xl">{l.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-copy">
                  {l.tagline}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-eucalypt">
                  View {l.courses.length} courses
                  <IconArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-sage">
            {INDICATIVE_NOTICE}
          </p>
        </div>
      </section>

      {/* Which level is right for you */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-page">
          <p className="eyebrow">Which level is right for you</p>
          <h2 className="mt-3 max-w-3xl text-3xl sm:text-4xl">
            Three levels, three different starting points
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
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

      <CTA
        title="Not sure which level fits your background?"
        subtitle="Book a free consultation and we'll map your qualification against what Australian universities will actually accept."
      />
    </>
  );
}
