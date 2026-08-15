import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { IconCheck } from "@/components/Icons";
import {
  universities,
  colleges,
  tafes,
  oshcProviders,
  type Institution,
} from "@/lib/partners";

export const metadata: Metadata = pageSeo({
  title: "Our Partner Institutions",
  description:
    "Edmark Education partners with leading Australian universities, TAFEs and colleges across every state. Explore our partner institutions and find the right fit for your study journey.",
  path: "/partners",
});

const benefits = [
  "Faster application processing through our partner network",
  "Access to exclusive scholarships not publicly advertised",
  "Priority assessment and conditional offers",
  "An open line to admissions teams",
  "Pathway and credit transfer arrangements",
  "Up-to-date knowledge of entry requirements and course changes",
];

function LogoCard({ inst, i }: { inst: Institution; i: number }) {
  return (
    <a
      href={inst.url}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal group flex flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-white p-5 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
      style={{ transitionDelay: `${(i % 10) * 40}ms` }}
    >
      <div className="grid h-20 w-20 place-items-center rounded-2xl border border-brand-100 bg-white">
        {inst.hasLogo ? (
          <Image
            src={`/images/partners/${inst.slug}.png`}
            alt={`${inst.name} logo`}
            width={80}
            height={80}
            className="h-16 w-16 object-contain"
          />
        ) : (
          /* No logo file yet: initial as a placeholder mark. */
          <span className="font-mono text-2xl font-medium text-eucalypt">
            {inst.name.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-sm font-medium leading-snug text-brand-900 transition-colors group-hover:text-brand-600">
          {inst.name}
        </h3>
        <p className="mt-1 text-xs text-brand-900/50">{inst.meta}</p>
      </div>
    </a>
  );
}

function LogoGrid({ items }: { items: Institution[] }) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((inst, i) => (
        <LogoCard key={inst.slug} inst={inst} i={i} />
      ))}
    </div>
  );
}

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our partners"
        title="Direct partnerships across Australia"
        subtitle="We work directly with the universities, TAFEs and colleges listed here, which means faster offers and stronger applications. We can also get students admitted to many more institutions beyond this list."
        image="/images/heroes/partners.jpg"
      />
      <Breadcrumb items={[{ label: "Partners" }]} />

      {/* Universities */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Universities"
            title="University partners"
            subtitle="Victorian universities, TAFEs and colleges, alongside partners in Tasmania, the Northern Territory and New South Wales."
          />
          <LogoGrid items={universities} />
        </div>
      </section>

      {/* Colleges & pathways */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Colleges & pathways"
            title="Private colleges & pathway providers"
            subtitle="Flexible entry points, diplomas and pathway programs that lead into a full degree."
          />
          <LogoGrid items={colleges} />
        </div>
      </section>

      {/* TAFEs */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Vocational education"
            title="TAFE & polytechnic partners"
            subtitle="Practical, industry-focused qualifications with strong graduate employment outcomes."
          />
          <LogoGrid items={tafes} />
        </div>
      </section>

      <section className="border-t border-line bg-paper py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Health cover"
            title="OSHC providers we work with"
            subtitle="Overseas Student Health Cover is a visa requirement, and only five providers are approved by the Australian Government for a subclass 500 visa. We arrange cover with any of them."
          />
          <LogoGrid items={oshcProviders} />
        </div>
      </section>

      {/* Why partnerships matter. Sits after the lists so a visitor sees who
          we work with before the pitch. Tinted rather than white because the
          OSHC section above it is bg-paper, which is close enough to white
          that the two would read as one long band. */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why it matters"
              title="How our partnerships benefit you"
              subtitle="We don't just recommend institutions. We work with their admissions teams. This gives our students a real advantage."
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
          <div className="card">
            <p className="eyebrow">Direct partners</p>
            <h3 className="mt-3 text-2xl">
              These are the institutions we work with directly
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-900/70">
              Every university, TAFE and college on this page is a direct
              partner. Your application goes straight to an admissions team
              that already knows us, which is why offers come back faster.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-900/70">
              We can also get students admitted to many more institutions
              across Australia. If the course you want sits outside this list,
              ask us anyway. We will tell you honestly whether we can help.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Not sure which institution is right for you?"
        subtitle="Book a free consultation and we'll match you with the best-fit partner institution based on your goals, budget and academic profile."
      />
    </>
  );
}
