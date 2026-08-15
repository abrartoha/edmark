import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";
import { IconCheck, IconResearch, IconDocument, IconTrophy } from "@/components/Icons";

export const metadata: Metadata = pageSeo({
  title: "Research Degrees in Australia: Masters by Research & PhD Guide",
  description:
    "Complete guide to Masters by Research and PhD programs in Australia. Research proposal writing, supervisor matching, scholarships and application support from Edmark Education.",
  path: "/courses/research-degrees",
});

const whatWeHelp = [
  {
    title: "Research Proposal Writing",
    desc: "We help you craft a compelling, well-structured research proposal that clearly defines your research questions, methodology and expected contributions. We review and refine multiple drafts until your proposal meets the standards expected by Australian universities.",
    icon: IconDocument,
  },
  {
    title: "Supervisor Identification & Matching",
    desc: "Finding the right supervisor is the single most important step. We search university research profiles, identify academics whose expertise aligns with your interests, and help you write a professional approach email that opens the door to a conversation.",
    icon: IconResearch,
  },
  {
    title: "Research Scholarship Applications",
    desc: "Research students can access generous funding including RTP scholarships ($32,000+ AUD/year stipend), university research awards, and industry-partnered PhD stipends. We identify every funding opportunity you qualify for and help you apply.",
    icon: IconTrophy,
  },
];

const degreeTypes = [
  {
    title: "Masters by Research",
    duration: "1.5–2 years",
    desc: "A research-focused master's degree where you complete an original research project and write a thesis (typically 30,000–50,000 words). Ideal for students who want to develop deep expertise in a specific area, transition into a research career, or prepare for a PhD.",
    entry: [
      "Bachelor's degree with honours (or equivalent) in a related field",
      "Evidence of research capability (honours thesis, publications, or research experience)",
      "Research proposal aligned with a supervisor's expertise",
      "English language proficiency (IELTS 6.5–7.0 overall)",
    ],
  },
  {
    title: "Doctor of Philosophy (PhD)",
    duration: "3–4 years",
    desc: "The highest academic qualification. You conduct original research that makes a significant contribution to knowledge in your field, producing a thesis of 80,000–100,000 words. A PhD opens doors to academic careers, senior research positions, and leadership roles in industry.",
    entry: [
      "Master's degree with a research component, or bachelor's with first-class honours",
      "Strong evidence of research capability and academic writing",
      "Detailed research proposal (3,000–5,000 words)",
      "A confirmed or prospective supervisor at the university",
      "English language proficiency (IELTS 6.5–7.0 overall, often 7.0 in writing)",
    ],
  },
  {
    title: "Professional Doctorate",
    duration: "3–4 years",
    desc: "A practice-based doctoral program that combines advanced coursework with a research project focused on your professional practice. Popular in education (EdD), business (DBA), health, and engineering. Designed for experienced professionals.",
    entry: [
      "Master's degree or equivalent professional experience",
      "Significant professional experience in the relevant field",
      "Research proposal connected to professional practice",
      "English language proficiency (IELTS 6.5–7.0)",
    ],
  },
];

const proposalSections = [
  { title: "Title & Abstract", desc: "A specific, descriptive title and a 200-word summary of your entire proposal." },
  { title: "Background & Literature Review", desc: "Demonstrate your understanding of the field, identify the gap your research will fill, and cite 15–30 key papers." },
  { title: "Research Questions & Objectives", desc: "One clear primary research question broken into 2–4 measurable objectives." },
  { title: "Methodology", desc: "Detailed explanation of your research design, data collection methods, analysis techniques, and tools." },
  { title: "Timeline & Milestones", desc: "A realistic schedule showing key phases of your research across the candidature." },
  { title: "Expected Contributions", desc: "What new knowledge, frameworks or insights your research will produce." },
  { title: "References", desc: "A properly formatted reference list demonstrating your familiarity with the literature." },
];

const scholarships = [
  {
    name: "Research Training Program (RTP)",
    funder: "Australian Government",
    coverage: "Full tuition + stipend from ~$34,315 AUD/year",
    desc: "The primary funding source for research students at Australian universities. Covers tuition fees, provides a living allowance, and includes a relocation allowance for students who move interstate or internationally.",
  },
  {
    name: "University Research Scholarships",
    funder: "Individual universities",
    coverage: "Varies, often full tuition + stipend",
    desc: "Most universities offer their own research scholarship programs. These may be faculty-specific, department-specific, or open to all research students. Often assessed alongside your application automatically.",
  },
  {
    name: "Industry-Partnered PhD Scholarships",
    funder: "University + industry partner",
    coverage: "Full tuition + enhanced stipend ($35,000–$45,000 AUD/year)",
    desc: "Co-funded by a university and an industry partner. Your research project addresses a real industry challenge, and you gain industry experience alongside your academic work. These typically offer higher stipends than standard scholarships.",
  },
  {
    name: "Endeavour Leadership Program",
    funder: "Australian Government (DFAT)",
    coverage: "Full tuition + travel + living costs + insurance",
    desc: "For high-achieving international students from partner countries. Covers virtually all costs associated with studying in Australia and is among the most prestigious scholarships available.",
  },
];

const faqItems = [
  {
    q: "What's the difference between a Masters by Research and a Masters by Coursework?",
    a: "A Masters by Coursework involves structured classes, assignments and exams, similar to an undergraduate degree but at a higher level. A Masters by Research is entirely project-based: you work with a supervisor on original research and produce a thesis. Research masters develop deep expertise in a specific topic and are the typical pathway to a PhD.",
  },
  {
    q: "Do I need publications to apply for a PhD?",
    a: "Publications strengthen your application but are not always required. What universities look for is evidence of research capability. This could be an honours or master's thesis, a conference presentation, a research assistant role, or demonstrated analytical skills in your professional work. We help you present whatever research experience you have in the strongest possible light.",
  },
  {
    q: "Can I do a PhD part-time or remotely?",
    a: "Some Australian universities offer part-time PhD candidature, which extends the timeline to 6–8 years. Remote or offshore candidature is less common but increasingly available, especially post-COVID. However, international students on a Subclass 500 visa typically need to be enrolled full-time and physically present in Australia. We can advise on options for your specific situation.",
  },
  {
    q: "How competitive are research scholarships?",
    a: "Research scholarships are competitive, but the odds are better than many students think, especially if you have a strong proposal and a supervisor who advocates for you. At many universities, 30–50% of research students receive some form of scholarship. We help you maximise your chances by strengthening your proposal, identifying multiple funding sources, and timing your application strategically.",
  },
  {
    q: "How long does the PhD application process take?",
    a: "From initial supervisor contact to formal offer, the process typically takes 3–6 months. This includes identifying supervisors (2–4 weeks), writing your proposal (4–8 weeks), submitting the application (2–4 weeks processing), and receiving a decision. We recommend starting at least 6–9 months before your intended start date.",
  },
  {
    q: "Can Edmark help me if I've already been rejected?",
    a: "Absolutely. Many of our research degree clients come to us after a previous rejection. We review what went wrong (usually a weak proposal, poor supervisor fit, or incomplete application), and help you completely restructure your approach for a successful reapplication. Several of our students have been accepted on their second attempt with our support.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Research Degree Support: Masters by Research & PhD Applications",
  description: "Complete support for Masters by Research and PhD applications at Australian universities. Research proposal writing, supervisor matching, scholarship guidance and application management.",
  provider: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
  areaServed: "AU",
  serviceType: "Research Degree Application Support",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ResearchDegreesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="Research degrees"
        title="Masters by Research & PhD application support"
        subtitle="From research proposal writing to supervisor matching and scholarship applications, we guide you into Australia's top research programs."
        image="/images/heroes/research-degrees.jpg"
      />
      <Breadcrumb items={[{ label: "Courses" }, { label: "Research Degrees" }]} />

      {/* What We Help With */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="How we help"
            title="End-to-end research degree support"
            subtitle="Research applications are complex. We handle every step so you can focus on your research ideas."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {whatWeHelp.map((item, i) => (
              <div
                key={item.title}
                className="card-hover reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-brand-500">
                  <item.icon className="h-9 w-9" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-brand-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-900/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Degree Types */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Research degree types"
            title="Which research degree is right for you?"
            subtitle="Australia offers several research degree pathways, each suited to different career goals and experience levels."
          />
          <div className="mt-12 space-y-6">
            {degreeTypes.map((d, i) => (
              <div
                key={d.title}
                className="reveal rounded-3xl border border-brand-100 bg-white p-8 shadow-soft lg:p-10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-medium text-brand-900">{d.title}</h3>
                    <span className="mt-1 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600">
                      Duration: {d.duration}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-brand-900/70 leading-relaxed">{d.desc}</p>
                <div className="mt-6">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-brand-500">
                    Entry requirements
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {d.entry.map((req) => (
                      <li key={req} className="flex items-start gap-3 text-sm text-brand-900/70">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint-300 text-brand-950">
                          <IconCheck className="h-3 w-3" />
                        </span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Proposal Guide */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Research proposal"
            title="What makes a winning research proposal?"
            subtitle="Your research proposal is the single most important document in your application. Here's what it needs to include."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {proposalSections.map((s, i) => (
              <div
                key={s.title}
                className="reveal rounded-2xl border border-brand-100 bg-brand-50/50 p-6"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="grid h-9 w-9 place-items-center rounded-full bg-mint-300 font-display text-sm font-medium text-brand-950">
                  {i + 1}
                </div>
                <h3 className="mt-3 font-medium text-brand-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/60">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/blog/how-to-write-a-research-proposal-for-australian-universities" className="text-sm font-medium text-brand-600 hover:underline">
              Read our full research proposal writing guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Research funding"
            title="Scholarships for research students"
            subtitle="Research degree students have access to generous funding. Many scholarships cover full tuition plus a living stipend of $32,000+ AUD per year."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {scholarships.map((s, i) => (
              <div
                key={s.name}
                className="card reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium text-brand-900">{s.name}</h3>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600">
                    {s.funder}
                  </span>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                    {s.coverage}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-brand-900/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Our process"
            title="How we help you secure a research place"
            subtitle="From first conversation to confirmed offer, here's what working with us looks like."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", title: "Assess your profile", desc: "We review your academic background, research experience, publications and career goals to understand your starting position." },
              { n: "02", title: "Define your research", desc: "We work with you to narrow your research focus, define clear questions, and structure a proposal that meets university standards." },
              { n: "03", title: "Find your supervisor", desc: "We identify potential supervisors, help you craft a professional approach, and facilitate the initial connection." },
              { n: "04", title: "Apply and get accepted", desc: "We prepare your full application, apply for scholarships, and manage the process until you receive your offer." },
            ].map((step, i) => (
              <div
                key={step.n}
                className="reveal text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint-300 font-display text-2xl font-medium text-brand-950">
                  {step.n}
                </div>
                <h3 className="mt-5 text-base font-medium text-brand-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading
            center
            eyebrow="FAQ"
            title="Research degree questions, answered"
          />
          <div className="mt-10 divide-y divide-brand-100 rounded-2xl border border-brand-100 bg-white">
            {faqItems.map((f) => (
              <details
                key={f.q}
                className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-brand-900">
                  {f.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-transform group-open:rotate-45">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-brand-900/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to start your research journey?"
        subtitle="Book a free consultation. We'll assess your profile, discuss your research interests, and map out the fastest path to a research degree in Australia."
      />
    </>
  );
}
