import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { IconCheck, IconGraduation } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Partner Institutions",
  description:
    "Edmark Education partners with 50+ leading Australian universities, TAFEs and colleges. Explore our partner institutions and find the right fit for your education journey.",
  alternates: { canonical: "/partners" },
};

const universities = [
  { name: "University of Melbourne", type: "Go8 University", location: "Melbourne, VIC" },
  { name: "Monash University", type: "Go8 University", location: "Melbourne, VIC" },
  { name: "University of Sydney", type: "Go8 University", location: "Sydney, NSW" },
  { name: "UNSW Sydney", type: "Go8 University", location: "Sydney, NSW" },
  { name: "University of Queensland", type: "Go8 University", location: "Brisbane, QLD" },
  { name: "Australian National University", type: "Go8 University", location: "Canberra, ACT" },
  { name: "RMIT University", type: "University", location: "Melbourne, VIC" },
  { name: "Deakin University", type: "University", location: "Geelong/Melbourne, VIC" },
  { name: "Swinburne University of Technology", type: "University", location: "Melbourne, VIC" },
  { name: "La Trobe University", type: "University", location: "Melbourne, VIC" },
  { name: "Victoria University", type: "University", location: "Melbourne, VIC" },
  { name: "Griffith University", type: "University", location: "Brisbane/Gold Coast, QLD" },
  { name: "Western Sydney University", type: "University", location: "Sydney, NSW" },
  { name: "University of Tasmania", type: "University", location: "Hobart, TAS" },
  { name: "Charles Darwin University", type: "University", location: "Darwin, NT" },
  { name: "Federation University", type: "University", location: "Ballarat, VIC" },
];

const tafes = [
  { name: "Melbourne Polytechnic", type: "TAFE", location: "Melbourne, VIC" },
  { name: "Holmesglen Institute", type: "TAFE", location: "Melbourne, VIC" },
  { name: "Box Hill Institute", type: "TAFE", location: "Melbourne, VIC" },
  { name: "Chisholm Institute", type: "TAFE", location: "Melbourne, VIC" },
  { name: "TAFE NSW", type: "TAFE", location: "Sydney, NSW" },
  { name: "TAFE Queensland", type: "TAFE", location: "Brisbane, QLD" },
];

const colleges = [
  { name: "Navitas Group", type: "Pathway Provider", location: "Multiple campuses" },
  { name: "Kaplan Business School", type: "College", location: "Melbourne/Sydney" },
  { name: "Insearch (UTS)", type: "Pathway Provider", location: "Sydney, NSW" },
  { name: "Eynesbury College", type: "Pathway Provider", location: "Adelaide, SA" },
  { name: "ELICOS Providers", type: "English Language", location: "Multiple cities" },
];

const benefits = [
  "Faster application processing through direct partnerships",
  "Access to exclusive scholarships not publicly advertised",
  "Priority assessment and conditional offers",
  "Direct communication with admissions teams",
  "Pathway and credit transfer arrangements",
  "Up-to-date knowledge of entry requirements and course changes",
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our partners"
        title="50+ partner institutions across Australia"
        subtitle="Direct relationships with leading universities, TAFEs and colleges mean faster offers, stronger applications and exclusive opportunities for our students."
      />
      <Breadcrumb items={[{ label: "Partners" }]} />

      {/* Why partnerships matter */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading
              eyebrow="Why it matters"
              title="How our partnerships benefit you"
              subtitle="We don't just recommend institutions — we have direct relationships with their admissions teams. This gives our students a real advantage."
            />
            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-brand-900/70">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-brand-950">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <div className="font-display text-4xl font-extrabold text-gradient">50+</div>
              <div className="mt-1 text-sm font-medium text-brand-900/70">Partner institutions</div>
            </div>
            <div className="card text-center">
              <div className="font-display text-4xl font-extrabold text-gradient">8</div>
              <div className="mt-1 text-sm font-medium text-brand-900/70">Group of Eight universities</div>
            </div>
            <div className="card text-center">
              <div className="font-display text-4xl font-extrabold text-gradient">6+</div>
              <div className="mt-1 text-sm font-medium text-brand-900/70">TAFE partners</div>
            </div>
            <div className="card text-center">
              <div className="font-display text-4xl font-extrabold text-gradient">5+</div>
              <div className="mt-1 text-sm font-medium text-brand-900/70">Pathway providers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading center eyebrow="Universities" title="University partners" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {universities.map((u, i) => (
              <div
                key={u.name}
                className="reveal flex items-center gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft"
                style={{ transitionDelay: `${(i % 8) * 50}ms` }}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient text-brand-950">
                  <IconGraduation className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-900">{u.name}</h3>
                  <p className="text-xs text-brand-900/50">{u.type} · {u.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAFEs & Colleges */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="TAFE partners" title="Vocational education" />
            <div className="mt-8 space-y-3">
              {tafes.map((t) => (
                <div key={t.name} className="flex items-center gap-4 rounded-xl border border-brand-100 bg-brand-50/50 p-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-gradient text-brand-950">
                    <IconGraduation className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-900">{t.name}</h3>
                    <p className="text-xs text-brand-900/50">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Colleges & pathways" title="Pathway providers" />
            <div className="mt-8 space-y-3">
              {colleges.map((c) => (
                <div key={c.name} className="flex items-center gap-4 rounded-xl border border-brand-100 bg-brand-50/50 p-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-gradient text-brand-950">
                    <IconGraduation className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-900">{c.name}</h3>
                    <p className="text-xs text-brand-900/50">{c.type} · {c.location}</p>
                  </div>
                </div>
              ))}
            </div>
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
