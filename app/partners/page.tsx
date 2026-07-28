import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Partner Institutions",
  description:
    "Edmark Education partners with leading Australian universities, TAFEs and colleges across every state. Explore our partner institutions and find the right fit for your study journey.",
  alternates: { canonical: "/partners" },
};

type Institution = { slug: string; name: string; meta: string };

const universities: Institution[] = [
  { slug: "unimelb", name: "University of Melbourne", meta: "Go8 · Melbourne, VIC" },
  { slug: "monash", name: "Monash University", meta: "Go8 · Melbourne, VIC" },
  { slug: "sydney", name: "University of Sydney", meta: "Go8 · Sydney, NSW" },
  { slug: "unsw", name: "UNSW Sydney", meta: "Go8 · Sydney, NSW" },
  { slug: "uq", name: "University of Queensland", meta: "Go8 · Brisbane, QLD" },
  { slug: "anu", name: "Australian National University", meta: "Go8 · Canberra, ACT" },
  { slug: "adelaide", name: "University of Adelaide", meta: "Go8 · Adelaide, SA" },
  { slug: "uwa", name: "University of Western Australia", meta: "Go8 · Perth, WA" },
  { slug: "rmit", name: "RMIT University", meta: "Melbourne, VIC" },
  { slug: "deakin", name: "Deakin University", meta: "Geelong / Melbourne, VIC" },
  { slug: "swinburne", name: "Swinburne University of Technology", meta: "Melbourne, VIC" },
  { slug: "latrobe", name: "La Trobe University", meta: "Melbourne, VIC" },
  { slug: "vu", name: "Victoria University", meta: "Melbourne, VIC" },
  { slug: "federation", name: "Federation University", meta: "Ballarat, VIC" },
  { slug: "uts", name: "University of Technology Sydney", meta: "Sydney, NSW" },
  { slug: "macquarie", name: "Macquarie University", meta: "Sydney, NSW" },
  { slug: "westernsydney", name: "Western Sydney University", meta: "Sydney, NSW" },
  { slug: "newcastle", name: "University of Newcastle", meta: "Newcastle, NSW" },
  { slug: "uow", name: "University of Wollongong", meta: "Wollongong, NSW" },
  { slug: "csu", name: "Charles Sturt University", meta: "Bathurst, NSW" },
  { slug: "scu", name: "Southern Cross University", meta: "Lismore, NSW" },
  { slug: "une", name: "University of New England", meta: "Armidale, NSW" },
  { slug: "acu", name: "Australian Catholic University", meta: "Multiple campuses" },
  { slug: "canberra", name: "University of Canberra", meta: "Canberra, ACT" },
  { slug: "cdu", name: "Charles Darwin University", meta: "Darwin, NT" },
  { slug: "flinders", name: "Flinders University", meta: "Adelaide, SA" },
  { slug: "unisa", name: "University of South Australia", meta: "Adelaide, SA" },
  { slug: "utas", name: "University of Tasmania", meta: "Hobart, TAS" },
  { slug: "qut", name: "Queensland University of Technology", meta: "Brisbane, QLD" },
  { slug: "griffith", name: "Griffith University", meta: "Brisbane / Gold Coast, QLD" },
  { slug: "jcu", name: "James Cook University", meta: "Townsville, QLD" },
  { slug: "usq", name: "University of Southern Queensland", meta: "Toowoomba, QLD" },
  { slug: "usc", name: "University of the Sunshine Coast", meta: "Sunshine Coast, QLD" },
  { slug: "cqu", name: "CQUniversity", meta: "Rockhampton, QLD" },
  { slug: "bond", name: "Bond University", meta: "Gold Coast, QLD" },
  { slug: "torrens", name: "Torrens University Australia", meta: "Multiple campuses" },
  { slug: "ecu", name: "Edith Cowan University", meta: "Perth, WA" },
  { slug: "curtin", name: "Curtin University", meta: "Perth, WA" },
  { slug: "murdoch", name: "Murdoch University", meta: "Perth, WA" },
  { slug: "notredame", name: "University of Notre Dame Australia", meta: "Fremantle, WA" },
];

const colleges: Institution[] = [
  { slug: "kaplan", name: "Kaplan Business School", meta: "Multiple campuses" },
  { slug: "mit", name: "Melbourne Institute of Technology", meta: "Melbourne, VIC" },
  { slug: "vit", name: "Victorian Institute of Technology", meta: "Melbourne, VIC" },
  { slug: "holmes", name: "Holmes Institute", meta: "Melbourne, VIC" },
  { slug: "koi", name: "King's Own Institute", meta: "Sydney, NSW" },
  { slug: "navitas", name: "Navitas", meta: "Pathway provider" },
  { slug: "deakincollege", name: "Deakin College", meta: "Pathway · Melbourne, VIC" },
  { slug: "monashcollege", name: "Monash College", meta: "Pathway · Melbourne, VIC" },
  { slug: "utscollege", name: "UTS College", meta: "Pathway · Sydney, NSW" },
];

const tafes: Institution[] = [
  { slug: "melbournepoly", name: "Melbourne Polytechnic", meta: "Melbourne, VIC" },
  { slug: "holmesglen", name: "Holmesglen Institute", meta: "Melbourne, VIC" },
  { slug: "boxhill", name: "Box Hill Institute", meta: "Melbourne, VIC" },
  { slug: "chisholm", name: "Chisholm Institute", meta: "Melbourne, VIC" },
  { slug: "tafensw", name: "TAFE NSW", meta: "Sydney, NSW" },
  { slug: "tafeqld", name: "TAFE Queensland", meta: "Brisbane, QLD" },
  { slug: "tafesa", name: "TAFE SA", meta: "Adelaide, SA" },
  { slug: "tastafe", name: "TasTAFE", meta: "Hobart, TAS" },
  { slug: "cit", name: "Canberra Institute of Technology", meta: "Canberra, ACT" },
];

const benefits = [
  "Faster application processing through direct partnerships",
  "Access to exclusive scholarships not publicly advertised",
  "Priority assessment and conditional offers",
  "Direct communication with admissions teams",
  "Pathway and credit transfer arrangements",
  "Up-to-date knowledge of entry requirements and course changes",
];

function LogoCard({ inst, i }: { inst: Institution; i: number }) {
  return (
    <div
      className="reveal group flex flex-col items-center gap-3 rounded-xl border border-line bg-white p-5 text-center transition-all duration-300 hover:border-sage/50"
      style={{ transitionDelay: `${(i % 10) * 40}ms` }}
    >
      <div className="grid h-20 w-20 place-items-center rounded-xl border border-line bg-white">
        <Image
          src={`/images/partners/${inst.slug}.png`}
          alt={`${inst.name} logo`}
          width={80}
          height={80}
          className="h-16 w-16 object-contain"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium leading-snug text-ink">{inst.name}</h3>
        <p className="mt-1 text-xs text-sage">{inst.meta}</p>
      </div>
    </div>
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
  const total = universities.length + colleges.length + tafes.length;
  return (
    <>
      <PageHero
        eyebrow="Our partners"
        title={`${total}+ partner institutions across Australia`}
        subtitle="Direct relationships with leading universities, TAFEs and colleges mean faster offers, stronger applications and exclusive opportunities for our students."
      />
      <Breadcrumb items={[{ label: "Partners" }]} />

      {/* Why partnerships matter */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why it matters"
              title="How our partnerships benefit you"
              subtitle="We don't just recommend institutions. We have direct relationships with their admissions teams. This gives our students a real advantage."
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
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <div className="numeral text-4xl">{total}+</div>
              <div className="mt-1 text-sm font-medium text-copy">Partner institutions</div>
            </div>
            <div className="card text-center">
              <div className="numeral text-4xl">8</div>
              <div className="mt-1 text-sm font-medium text-copy">Group of Eight universities</div>
            </div>
            <div className="card text-center">
              <div className="numeral text-4xl">{universities.length}</div>
              <div className="mt-1 text-sm font-medium text-copy">University partners</div>
            </div>
            <div className="card text-center">
              <div className="numeral text-4xl">{tafes.length}</div>
              <div className="mt-1 text-sm font-medium text-copy">TAFE & polytechnic partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="bg-paper-sunk py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Universities"
            title="University partners"
            subtitle="From the Group of Eight to leading modern universities, we work with institutions in every Australian state and territory."
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
      <section className="bg-paper-sunk py-16 lg:py-24">
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

      <CTA
        title="Not sure which institution is right for you?"
        subtitle="Book a free consultation and we'll match you with the best-fit partner institution based on your goals, budget and academic profile."
      />
    </>
  );
}
