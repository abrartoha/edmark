import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { IconCheck, IconGraduation, IconPlane, IconDocument } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Study in Australia: Complete Guide for International Students",
  description:
    "Everything you need to know about studying in Australia as an international student. Courses, costs, visas, scholarships, work rights and student life. A complete guide by Edmark Education.",
  alternates: { canonical: "/study-in-australia" },
};

const whyAustralia = [
  {
    title: "World-class education",
    desc: "8 of the world's top 100 universities. Globally recognised qualifications accepted by employers worldwide.",
  },
  {
    title: "Post-study work rights",
    desc: "Temporary Graduate visa (Subclass 485) lets you work in Australia for 2–4 years after graduating.",
  },
  {
    title: "Multicultural & safe",
    desc: "One of the most multicultural countries on earth, with strong international student support systems.",
  },
  {
    title: "Work while studying",
    desc: "Student visa holders can work up to 48 hours per fortnight during study periods.",
  },
  {
    title: "Innovation & research",
    desc: "Australia invests heavily in research. Students benefit from cutting-edge facilities and industry partnerships.",
  },
  {
    title: "Quality of life",
    desc: "Cities like Melbourne, Sydney and Brisbane consistently rank among the world's most liveable.",
  },
];

const educationTypes = [
  {
    type: "Universities",
    desc: "43 universities offering bachelor's, master's and PhD programs. Includes the prestigious Group of Eight research universities.",
    fees: "$20,000–$50,000 AUD/year",
  },
  {
    type: "TAFE",
    desc: "Government-funded technical and further education. Practical, industry-focused certificates and diplomas with pathways to university.",
    fees: "$8,000–$22,000 AUD/year",
  },
  {
    type: "Private Colleges",
    desc: "Specialised training in business, IT, hospitality, health and creative fields. Often smaller class sizes with strong industry connections.",
    fees: "$10,000–$25,000 AUD/year",
  },
  {
    type: "ELICOS",
    desc: "English Language Intensive Courses for Overseas Students. Build your English skills before starting your main program.",
    fees: "$300–$400 AUD/week",
  },
  {
    type: "Foundation & Pathway",
    desc: "Bridging programs that prepare you for university entry. Typically 6–12 months with guaranteed progression to a partner university.",
    fees: "$15,000–$30,000 AUD/year",
  },
];

const livingCosts = [
  { city: "Melbourne", rent: "$200–$350/week", food: "$100–$150/week", transport: "$40–$50/week" },
  { city: "Sydney", rent: "$250–$400/week", food: "$100–$150/week", transport: "$40–$55/week" },
  { city: "Brisbane", rent: "$180–$300/week", food: "$90–$130/week", transport: "$35–$45/week" },
  { city: "Adelaide", rent: "$150–$250/week", food: "$80–$120/week", transport: "$30–$40/week" },
  { city: "Perth", rent: "$170–$280/week", food: "$90–$130/week", transport: "$35–$45/week" },
];

export default function StudyInAustraliaPage() {
  return (
    <>
      <PageHero
        eyebrow="Study in Australia"
        title="Your complete guide to studying in Australia"
        subtitle="Everything international students need to know about courses, costs, visas, scholarships, work rights and student life."
      />
      <Breadcrumb items={[{ label: "Study in Australia" }]} />

      {/* Why Australia */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Why Australia?"
            title="6 reasons to study in Australia"
            subtitle="Australia is the third most popular destination for international students worldwide, and for good reason."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyAustralia.map((item, i) => (
              <div
                key={item.title}
                className="card reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-brand-500">
                  <IconCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-brand-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Education */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Education types"
            title="Types of education in Australia"
            subtitle="From world-leading universities to hands-on vocational training, Australia has a pathway for every student."
          />
          <div className="mt-12 space-y-4">
            {educationTypes.map((t, i) => (
              <div
                key={t.type}
                className="reveal grid items-center gap-6 rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:grid-cols-[1fr_auto]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div>
                  <h3 className="text-lg font-bold text-brand-900">{t.type}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-900/70">
                    {t.desc}
                  </p>
                </div>
                <div className="rounded-xl bg-brand-50 px-4 py-2 text-center">
                  <span className="block text-xs font-semibold uppercase text-brand-500">
                    Typical fees
                  </span>
                  <span className="font-display text-lg font-bold text-brand-900">
                    {t.fees}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Living costs"
            title="How much does it cost to live in Australia?"
            subtitle="The Australian Government requires international students to demonstrate access to at least AUD $29,710 per year for living costs."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b-2 border-brand-200">
                  <th className="py-3 pr-4 font-bold text-brand-900">City</th>
                  <th className="py-3 pr-4 font-bold text-brand-900">Rent (shared)</th>
                  <th className="py-3 pr-4 font-bold text-brand-900">Food</th>
                  <th className="py-3 font-bold text-brand-900">Transport</th>
                </tr>
              </thead>
              <tbody>
                {livingCosts.map((c) => (
                  <tr key={c.city} className="border-b border-brand-100">
                    <td className="py-3 pr-4 font-semibold text-brand-900">{c.city}</td>
                    <td className="py-3 pr-4 text-brand-900/70">{c.rent}</td>
                    <td className="py-3 pr-4 text-brand-900/70">{c.food}</td>
                    <td className="py-3 text-brand-900/70">{c.transport}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Student Visa */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page max-w-4xl">
          <SectionHeading
            center
            eyebrow="Student visa"
            title="Student Visa (Subclass 500)"
            subtitle="The Subclass 500 visa allows international students to study full-time in Australia."
          />
          <div className="mt-10 space-y-4">
            {[
              "Confirmation of Enrolment (CoE) from a CRICOS-registered institution",
              "Genuine Temporary Entrant (GTE) statement",
              "English language proficiency (IELTS 5.5–7.0 depending on course)",
              "Financial capacity (tuition + AUD $29,710/year living costs)",
              "Overseas Student Health Cover (OSHC)",
              "Police clearance and medical examination",
            ].map((req) => (
              <div
                key={req}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-soft"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500 text-brand-950">
                  <IconCheck className="h-3 w-3" />
                </span>
                <span className="text-sm text-brand-900/80">{req}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-brand-900/60">
            Visa application charge: AUD $2,500 (from 1 July 2026) · Processing time: 4–12 weeks ·{" "}
            <Link href="/blog/complete-guide-to-australian-student-visas-2026" className="font-semibold text-brand-600 hover:underline">
              Read our full visa guide →
            </Link>
          </p>
        </div>
      </section>

      {/* English Requirements */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page max-w-4xl">
          <SectionHeading
            center
            eyebrow="English requirements"
            title="English language test scores"
            subtitle="Most Australian institutions accept IELTS, PTE Academic and TOEFL."
          />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b-2 border-brand-200">
                  <th className="py-3 pr-4 font-bold text-brand-900">Level</th>
                  <th className="py-3 pr-4 font-bold text-brand-900">IELTS</th>
                  <th className="py-3 pr-4 font-bold text-brand-900">PTE</th>
                  <th className="py-3 font-bold text-brand-900">TOEFL iBT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-100">
                  <td className="py-3 pr-4 font-semibold text-brand-900">Foundation / Pathway</td>
                  <td className="py-3 pr-4 text-brand-900/70">5.0–5.5</td>
                  <td className="py-3 pr-4 text-brand-900/70">36–42</td>
                  <td className="py-3 text-brand-900/70">35–46</td>
                </tr>
                <tr className="border-b border-brand-100">
                  <td className="py-3 pr-4 font-semibold text-brand-900">Undergraduate</td>
                  <td className="py-3 pr-4 text-brand-900/70">6.0–6.5</td>
                  <td className="py-3 pr-4 text-brand-900/70">50–58</td>
                  <td className="py-3 text-brand-900/70">60–79</td>
                </tr>
                <tr className="border-b border-brand-100">
                  <td className="py-3 pr-4 font-semibold text-brand-900">Postgraduate</td>
                  <td className="py-3 pr-4 text-brand-900/70">6.5–7.0</td>
                  <td className="py-3 pr-4 text-brand-900/70">58–65</td>
                  <td className="py-3 text-brand-900/70">79–94</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-brand-900">PhD / Research</td>
                  <td className="py-3 pr-4 text-brand-900/70">6.5–7.5</td>
                  <td className="py-3 pr-4 text-brand-900/70">58–73</td>
                  <td className="py-3 text-brand-900/70">79–102</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-brand-900/60">
            Not sure which test to take?{" "}
            <Link href="/blog/ielts-vs-pte-which-english-test-should-you-take" className="font-semibold text-brand-600 hover:underline">
              Read our IELTS vs PTE guide →
            </Link>
          </p>
        </div>
      </section>

      {/* Intakes & Work Rights */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div className="card reveal">
            <h3 className="text-xl font-bold text-brand-900">Intake dates</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-900/70">
              Australian universities typically have two main intakes:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-brand-900/70">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500 text-brand-950 text-xs font-bold">1</span>
                <span><strong className="text-brand-900">Semester 1 (February/March)</strong> is the primary intake, with the widest range of courses. Applications typically close in October–December of the previous year.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-900/70">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500 text-brand-950 text-xs font-bold">2</span>
                <span><strong className="text-brand-900">Semester 2 (July/August)</strong> is a secondary intake available for most courses. Applications typically close in April–May.</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-brand-900/50">
              Some institutions also offer trimester or quarterly intakes.
            </p>
          </div>

          <div className="card reveal" style={{ transitionDelay: "100ms" }}>
            <h3 className="text-xl font-bold text-brand-900">Work while studying</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-900/70">
              Student visa holders enjoy generous work rights in Australia:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-brand-900/70">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500 text-brand-950">
                  <IconCheck className="h-3 w-3" />
                </span>
                <span><strong className="text-brand-900">During study periods:</strong> Up to 48 hours per fortnight</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-900/70">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500 text-brand-950">
                  <IconCheck className="h-3 w-3" />
                </span>
                <span><strong className="text-brand-900">During breaks:</strong> Unlimited hours</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-900/70">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500 text-brand-950">
                  <IconCheck className="h-3 w-3" />
                </span>
                <span><strong className="text-brand-900">Minimum wage:</strong> $24.10 AUD/hour (2026)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* OSHC */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page max-w-3xl text-center">
          <SectionHeading
            center
            eyebrow="Health insurance"
            title="Overseas Student Health Cover (OSHC)"
            subtitle="OSHC is mandatory for all international students in Australia. It covers essential medical and hospital services."
          />
          <div className="mt-8 rounded-2xl bg-brand-50 p-8">
            <p className="text-sm leading-relaxed text-brand-900/70">
              OSHC typically costs <strong className="text-brand-900">$500–$700 AUD per year</strong> and must be held for the entire duration of your student visa. Popular providers include Medibank, Allianz, BUPA and NIB. We help you choose the right plan during our pre-departure support.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Let us guide your journey to Australia"
        subtitle="Book a free consultation and get a personalised plan covering courses, scholarships, visas and everything else you need."
      />
    </>
  );
}
