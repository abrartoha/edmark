import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import ServiceIcon from "@/components/ServiceIcon";
import { IconArrow, IconCheck } from "@/components/Icons";
import { prCategories } from "@/lib/pr-courses";

export const metadata: Metadata = {
  title: "PR Pathway Courses",
  description:
    "Study pathways aligned with Australia's in-demand occupations in Trade, Nursing, Hospitality & Cookery and Teaching. Explore qualifications, eligibility and career pathways with Edmark Education.",
  alternates: { canonical: "/services/pr-pathway-courses" },
};

const benefits = [
  "Courses aligned with in-demand and skilled occupations",
  "Regional and metropolitan study options",
  "Packaged qualifications that build your study plan and visa length",
  "Referral to registered migration agents for formal advice",
];

export default function PrPathwayPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="PR Pathway Courses"
        subtitle="Choose a study path aligned with Australia's in-demand occupations, and build genuine skills and experience while you're at it."
      />
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "PR Pathway Courses" },
        ]}
      />

      {/* Overview */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Study with your future in mind"
              title="Not every course counts the same for migration"
              subtitle="Qualifications tied to occupations in demand can strengthen your skilled-migration profile. We help you pick a course that builds real skills and supports your long-term goals in Australia."
            />
            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-copy">
                  <span className="mt-0.5 shrink-0 text-eucalypt">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-paper-sunk p-8">
            <p className="text-sm leading-relaxed text-copy">
              Australia&apos;s skilled occupation lists include many trade, health, hospitality and
              education roles. The right qualification can open both a career and a longer-term
              pathway, but the rules change often.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-copy">
              We give you honest, up-to-date course guidance and connect you with a registered
              migration agent (MARA) for any formal migration advice.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-paper-sunk py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Pathways"
            title="Explore our PR pathway courses"
            subtitle="Four popular study areas, each with in-demand qualifications and clear career outcomes."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {prCategories.map((c, i) => (
              <Link
                key={c.slug}
                href={`/services/pr-pathway-courses/${c.slug}`}
                className="reveal group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300"
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              >
                <div className="flex h-28 items-center gap-4 bg-eucalypt px-8">
                  <div className="text-eucalypt">
                    <ServiceIcon name={c.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-medium text-ink">{c.title}</h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm leading-relaxed text-sage">{c.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-eucalypt group-hover:text-eucalypt">
                    View {c.programs.length} qualifications <IconArrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Not sure which pathway fits you?"
        subtitle="Book a free consultation and we'll help you choose a course that matches your goals, budget and long-term plans in Australia."
      />
    </>
  );
}
