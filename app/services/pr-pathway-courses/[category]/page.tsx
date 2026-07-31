import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import ServiceIcon from "@/components/ServiceIcon";
import { IconCheck, IconArrow } from "@/components/Icons";
import { prCategories, getPrCategory } from "@/lib/pr-courses";

export function generateStaticParams() {
  return prCategories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const cat = getPrCategory(params.category);
  if (!cat) return {};
  return {
    title: `${cat.title}: PR Pathway Courses`,
    description: `${cat.tagline} Explore ${cat.title.toLowerCase()} qualifications, eligibility and career pathways with Edmark Education.`,
    alternates: { canonical: `/services/pr-pathway-courses/${cat.slug}` },
  };
}

export default function PrCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const cat = getPrCategory(params.category);
  if (!cat) notFound();

  const others = prCategories.filter((c) => c.slug !== cat.slug);

  return (
    <>
      <PageHero eyebrow="PR Pathway Courses" title={cat.title} subtitle={cat.tagline} />
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "PR Pathway Courses", href: "/services/pr-pathway-courses" },
          { label: cat.title },
        ]}
      />

      {/* Intro */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          <div className="grid h-20 w-20 place-items-center rounded-3xl bg-mint-300 text-brand-950 shadow-glow">
            <ServiceIcon name={cat.icon} className="h-10 w-10" />
          </div>
          <div className="space-y-4 text-brand-900/70">
            {cat.intro.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Programs / Certifications */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading center eyebrow="Qualifications" title={cat.programsHeading} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cat.programs.map((p, i) => (
              <div
                key={p.name}
                className="reveal flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="relative flex h-32 items-center justify-center bg-mint-300">
                  <ServiceIcon name={cat.icon} className="h-12 w-12 text-brand-950/90" />
                  {p.code && (
                    <span className="absolute right-3 top-3 rounded-full bg-brand-950/15 px-3 py-1 text-xs font-medium text-brand-950">
                      {p.code}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-medium text-brand-900">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-900/60">
                    {p.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-mint-300 px-5 py-2.5 text-sm font-medium text-brand-950 transition-transform hover:-translate-y-0.5"
                  >
                    Contact Now <IconArrow />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Eligibility"
            title="Eligibility requirements"
            subtitle="General entry guidance. Exact requirements vary by provider, course and your visa. We confirm the specifics for you."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {cat.eligibility.map((e) => (
              <div
                key={e}
                className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-brand-50/60 p-5"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint-300 text-brand-950">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm font-medium text-brand-800">{e}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Where it leads"
            title="Career pathways"
            subtitle="Roles this study path can lead to, in Australia and beyond."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cat.careerPathways.map((c, i) => (
              <div
                key={c}
                className="flex items-center gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint-300 text-sm font-medium text-brand-950">
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-brand-900">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration note */}
      <section className="bg-white py-10">
        <div className="container-page">
          <p className="mx-auto max-w-3xl rounded-2xl border border-brand-100 bg-brand-50/60 p-5 text-center text-xs leading-relaxed text-brand-900/60">
            Skilled occupation lists and migration rules change regularly. Edmark provides education and
            course guidance only. Formal migration advice must come from a registered migration agent
            (MARA), whom we can connect you with.
          </p>
        </div>
      </section>

      {/* Other categories */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <h2 className="text-center text-2xl font-medium text-brand-900">
            Explore other PR pathway courses
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/pr-pathway-courses/${o.slug}`}
                className="card-hover group flex items-start gap-4"
              >
                <div className="shrink-0 text-brand-500">
                  <ServiceIcon name={o.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-900 transition-colors group-hover:text-brand-600">
                    {o.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-900/60 line-clamp-2">{o.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={`Ready to start your ${cat.title.toLowerCase()} pathway?`}
        subtitle="Book a free consultation and we'll match you with the right course, provider and study plan for your goals."
      />
    </>
  );
}
