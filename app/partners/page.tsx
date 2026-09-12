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
    "The Australian universities, TAFEs and colleges Edmark Education places students with, and how the application process works.",
  path: "/partners",
});

// What Edmark can actually evidence. The previous list claimed faster
// processing, priority assessment, exclusive scholarships and "an open line to
// admissions teams" — assertions of special access that would need an
// institution to confirm them, and none has.
const benefits = [
  "Help comparing institutions, courses and campuses against your goals",
  "Applications prepared and checked before they are lodged",
  "Pathway and credit transfer options explained",
  "Current entry and English requirements confirmed with the institution",
  "One point of contact from shortlist to enrolment",
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
        {/* Gated on logoLicensed. Without permission or without a file, the
            card falls back to the institution's initial. */}
        {inst.logoLicensed && inst.logoAsset ? (
          <Image
            src={`/images/partners/${inst.logoAsset}`}
            alt={`${inst.name} logo`}
            width={80}
            height={80}
            className="h-16 w-16 object-contain"
          />
        ) : (
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
        title="Institutions we place students with"
        subtitle="The universities, TAFEs and colleges we most often place students with. We can also apply to many institutions beyond this list."
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
            subtitle="Victorian universities, TAFEs and colleges, alongside partners in New South Wales, the ACT, Tasmania and the Northern Territory."
          />
          <LogoGrid items={universities} />
        </div>
      </section>

      {/* Private colleges, TAFEs and polytechnics, as one group */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Colleges, TAFEs & polytechnics"
            title="Private Colleges, TAFE and Polytechnic Partners"
            subtitle="Practical, industry-focused study, from certificates and diplomas through to degrees."
          />
          <LogoGrid items={[...colleges, ...tafes]} />
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
            <p className="eyebrow">How this works</p>
            <h3 className="mt-3 text-2xl">
              How we place students at these institutions
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-900/70">
              Our relationships with these institutions are direct and
              sub-partnered. Either way Edmark Education is your education
              agent, and the institution named on your offer is the provider
              that delivers and issues your qualification.
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
