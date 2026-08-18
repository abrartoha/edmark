import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import ServiceIcon from "@/components/ServiceIcon";
import { IconArrow, IconCheck } from "@/components/Icons";
import { careerCategories } from "@/lib/career-courses";

export const metadata: Metadata = {
  title: "In-Demand Career Courses",
  description:
    "Study pathways in Trade, Nursing, Hospitality & Cookery and Teaching, four fields Australian employers consistently need. Explore qualifications, eligibility and career outcomes with Edmark Education.",
  alternates: { canonical: "/services/career-courses" },
};

const benefits = [
  "Courses tied to fields Australian employers consistently need",
  "Regional and metropolitan study options",
  "Packaged qualifications that build one credential on the next",
  "Nationally recognised codes, checked against CRICOS registration",
];

export default function CareerCoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="In-Demand Career Courses"
        subtitle="Choose a study path in a field Australian employers are hiring in, and build genuine skills and experience while you're at it."
      />
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "In-Demand Career Courses" },
        ]}
      />

      {/* Overview */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Study with your future in mind"
              title="Not every course opens the same doors"
              subtitle="Qualifications tied to the work employers are actually hiring for lead somewhere. We help you pick a course that builds real skills and supports the career you want in Australia."
            />
            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-brand-900/70">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint-300 text-brand-950">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-brand-100 bg-brand-50/60 p-8">
            <p className="text-sm leading-relaxed text-brand-900/70">
              Trade, health, hospitality and education roles are among the most consistently
              advertised jobs in Australia, in the cities and well beyond them. The right
              qualification opens a career, but which fields are hiring hardest does shift over
              time.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-900/70">
              So we keep our course guidance honest and current, and confirm outcomes, provider
              registration and entry requirements with you before you apply.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Pathways"
            title="Explore our career courses"
            subtitle="Four popular study areas, each with in-demand qualifications and clear career outcomes."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {careerCategories.map((c, i) => (
              <Link
                key={c.slug}
                href={`/services/career-courses/${c.slug}`}
                className="reveal group flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              >
                <div className="flex h-28 items-center gap-4 bg-mint-300 px-8">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 text-brand-950 backdrop-blur">
                    <ServiceIcon name={c.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-medium text-brand-950">{c.title}</h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm leading-relaxed text-brand-900/65">{c.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 group-hover:text-brand-500">
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
