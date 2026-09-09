import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CareerCard from "@/components/CareerCard";
import CTA from "@/components/CTA";
import { AGENT_ROLE_DISCLOSURE } from "@/lib/compliance";
import { careers } from "@/lib/careers";

export const metadata: Metadata = pageSeo({
  title: "Careers & Pathways in Australia",
  description:
    "Guides to trade, care, hospitality and business occupations in Australia: what the work involves, what licensing applies, and the qualification usually used to enter each one.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers & pathways"
        title={
          <>
            Start with the job,{" "}
            <span className="text-eucalypt-light">not the course</span>
          </>
        }
        subtitle="What the work involves, where it is done, what licensing applies, and the qualification usually used to get there."
        image="/images/heroes/short-courses.jpg"
      />

      <Breadcrumb items={[{ label: "Careers & pathways" }]} />

      {/* Edmark's role, stated before the reader sees a single occupation
          rather than in the footer after they have read everything. */}
      <section className="border-b border-line bg-paper-sunk py-8">
        <div className="container-page">
          <p className="max-w-4xl text-sm leading-relaxed text-copy">
            {AGENT_ROLE_DISCLOSURE}
          </p>
        </div>
      </section>

      <section className="reveal bg-paper py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Occupations</p>
          <h2 className="mt-3 max-w-3xl text-3xl sm:text-4xl">
            {careers.length} careers you can work toward in Australia
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-copy">
            These are guides to the work itself. Where a nationally recognised
            qualification is the usual way in, each page names it and links to
            the national register, so you can see for yourself which
            organisations are approved to deliver it.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careers.map((c) => (
              <CareerCard key={c.slug} career={c} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Not sure which of these fits you?"
        subtitle="Book a free consultation. We'll help you compare providers, understand the visa and licensing requirements, and prepare a strong application."
        tinted
      />
    </>
  );
}
