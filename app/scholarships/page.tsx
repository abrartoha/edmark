import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { IconCheck, IconTrophy } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Scholarships for International Students in Australia",
  description:
    "Find and win scholarships to study in Australia. Edmark Education helps you identify merit-based, need-based and government-funded scholarships. Free consultation.",
  alternates: { canonical: "/scholarships" },
};

const scholarshipTypes = [
  {
    title: "Merit-Based",
    desc: "Awarded for academic excellence. Typically require a high GPA or outstanding test scores. Available at most Australian universities.",
  },
  {
    title: "Need-Based",
    desc: "Designed for students with financial hardship. Require documentation of financial circumstances. Can cover partial or full tuition fees.",
  },
  {
    title: "Government-Funded",
    desc: "Programs like Australia Awards and Destination Australia. Cover tuition, living costs and travel. Highly competitive but transformational.",
  },
  {
    title: "University-Specific",
    desc: "Each university offers its own scholarship programs. Range from 10% to 100% fee waivers. Often automatically assessed on application.",
  },
  {
    title: "Country-Specific",
    desc: "Reserved for students from specific countries or regions. Recognise bilateral relationships between Australia and partner nations.",
  },
  {
    title: "Field-Specific",
    desc: "Target students in priority areas like STEM, healthcare, education and agriculture. Designed to address skills shortages in Australia.",
  },
];

const steps = [
  {
    n: "01",
    title: "Eligibility screening",
    body: "We review your academic record, country of origin, chosen course and financial situation to identify every scholarship you qualify for.",
  },
  {
    n: "02",
    title: "Application support",
    body: "We help you write compelling personal statements, prepare supporting documents and meet all deadlines.",
  },
  {
    n: "03",
    title: "Maximise your outcome",
    body: "We advise on fee structures, payment plans and alternative funding options to minimise your out-of-pocket costs.",
  },
];

const scholarshipFaqs = [
  {
    q: "How much can I save with a scholarship?",
    a: "Savings range from $2,000 to $40,000+ depending on the scholarship type and your eligibility. Some government scholarships cover full tuition, living costs and airfare.",
  },
  {
    q: "Do I need perfect grades to get a scholarship?",
    a: "Not necessarily. While merit scholarships favour high achievers, there are need-based, country-specific and field-specific scholarships that consider other factors beyond grades.",
  },
  {
    q: "Can I apply for multiple scholarships?",
    a: "Yes, and we strongly recommend it. Some scholarships can even be combined. We'll help you identify the best mix of applications to maximise your chances.",
  },
  {
    q: "When should I start applying?",
    a: "We recommend starting 6–12 months before your intended start date. Many scholarships have early deadlines and competitive processes. The sooner you begin, the more options you'll have.",
  },
  {
    q: "Does Edmark charge for scholarship help?",
    a: "No. Our scholarship guidance is part of our free consultation service. Our expert help costs you nothing.",
  },
];

export default function ScholarshipsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: scholarshipFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="Scholarships"
        title="Don't pay more than you have to"
        subtitle="Thousands of dollars in scholarships go unclaimed every year. We help you find and win the funding you qualify for, completely free."
      />
      <Breadcrumb items={[{ label: "Scholarships" }]} />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Types of scholarships"
            title="Six ways to fund your Australian education"
            subtitle="Every student's situation is different. We screen your eligibility across all scholarship types to maximise your savings."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {scholarshipTypes.map((s, i) => (
              <div
                key={s.title}
                className="card reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-brand-950">
                  <IconTrophy className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-brand-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/70">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="How we help"
            title="Our 3-step scholarship process"
            subtitle="Finding and winning scholarships is one of our specialities. Here's how we do it."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-gradient font-display text-2xl font-extrabold text-brand-950">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/70">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading
            center
            eyebrow="FAQ"
            title="Scholarship questions, answered"
          />
          <div className="mt-10 divide-y divide-brand-100 rounded-2xl border border-brand-100">
            {scholarshipFaqs.map((f) => (
              <details
                key={f.q}
                className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-brand-900">
                  {f.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-transform group-open:rotate-45">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-brand-900/70">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Find out what scholarships you qualify for"
        subtitle="Book a free consultation and we'll screen your eligibility for every relevant scholarship, grant and fee discount."
      />
    </>
  );
}
