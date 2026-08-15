import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";
import { IconCheck } from "@/components/Icons";

export const metadata: Metadata = pageSeo({
  title: "About Us",
  description:
    "Edmark Education is a student-first Australian education consultancy. Learn about our mission to empower students for life with honest advice and end-to-end support.",
  path: "/about",
});

const values = [
  {
    title: "Students first, always",
    body: "Every recommendation we make is in your best interest. Your success is the only metric that matters to us.",
  },
  {
    title: "Honesty over hype",
    body: "We tell you what you need to hear, not just what you want to hear. Clear, realistic advice you can build a future on.",
  },
  {
    title: "Excellence in the details",
    body: "Deadlines, documents, and follow-ups handled meticulously, because the small things decide whether you get that offer.",
  },
  {
    title: "Relationships that last",
    body: "We're not here for a transaction. We're here for your whole journey, and the students who come after you.",
  },
];

const stats = [
  { value: "1,200+", label: "Students guided" },
  { value: "5+", label: "Years of experience" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Edmark"
        title="Empowering students for life"
        subtitle="We're on a mission to make world-class Australian education accessible, understandable and achievable for every ambitious student."
        image="/images/heroes/about.jpg"
      />
      <Breadcrumb items={[{ label: "About" }]} />

      {/* Team / Consultants */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Our team"
            title="Your dedicated team"
            subtitle="Experienced consultants and support ready to guide you through every step of your study journey in Australia."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {site.team.map((member, i) => (
              <div
                key={member.name}
                className="reveal rounded-3xl border border-brand-100 bg-white p-8 text-center shadow-soft"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="mx-auto h-40 w-40 rounded-full object-cover border-4 border-white shadow-soft"
                />
                <h3 className="mt-5 text-xl font-medium text-brand-900">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-brand-600">
                  {member.role}
                </p>
                {member.credential && (
                  <p className="mt-1 text-xs font-medium text-brand-900/60">
                    {member.credential}
                  </p>
                )}
                <a
                  href={`mailto:${member.email}`}
                  className="mt-3 inline-block text-sm font-medium text-brand-700 hover:text-brand-500 transition-colors"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Founded on a simple belief: every student deserves an honest guide"
            />
            <div className="mt-6 space-y-4 text-brand-900/70">
              <p>
                Choosing where and what to study is one of the biggest decisions
                of your life, yet too many students make it with confusing
                information, hidden agendas and no real support. We started
                Edmark Education to change that.
              </p>
              <p>
                From our office at Level 5, 12 Clarke Street in Sunshine, Victoria, we&apos;ve
                helped 1,200+ students find the right course, win scholarships
                they didn&apos;t know existed, and step onto campus with confidence.
                No pressure, no jargon, just expert guidance that puts you first.
              </p>
              <p>
                Today, Edmark partners with leading Australian universities,
                TAFEs and colleges to open doors for students from every
                background. Because when you&apos;re empowered with the right
                advice, there&apos;s no limit to where your education can take you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="card reveal text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="font-display text-4xl font-medium text-eucalypt">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-medium text-brand-900/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Our values"
            title="What we stand for"
            subtitle="These aren't slogans on a wall. They're the standard we hold ourselves to with every student."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="card reveal"
                style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              >
                <div className="text-brand-500">
                  <IconCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-medium text-brand-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/70">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABN & Legal */}
      <section className="border-t border-brand-100 bg-white py-10">
        <div className="container-page text-center">
          <p className="text-sm text-brand-900/60">
            <strong className="text-brand-900">Edmark Education</strong> · ABN {site.abn} · {site.address.full}
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
