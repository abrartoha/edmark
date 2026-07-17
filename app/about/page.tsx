import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";
import { IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Edmark Education is a student-first Australian education consultancy. Learn about our mission to empower students for life with honest advice and end-to-end support.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Students first, always",
    body: "Every recommendation we make is in your best interest — not driven by commissions. Your success is the only metric that matters to us.",
  },
  {
    title: "Honesty over hype",
    body: "We tell you what you need to hear, not just what you want to hear. Clear, realistic advice you can build a future on.",
  },
  {
    title: "Excellence in the details",
    body: "Deadlines, documents, and follow-ups handled meticulously — because the small things decide whether you get that offer.",
  },
  {
    title: "Relationships that last",
    body: "We're not here for a transaction. We're here for your whole journey, and the students who come after you.",
  },
];

const stats = [
  { value: "500+", label: "Students guided" },
  { value: "50+", label: "Partner institutions" },
  { value: "98%", label: "Visa success rate" },
  { value: "10+", label: "Years of experience" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Edmark"
        title="Empowering students for life"
        subtitle="We're on a mission to make world-class Australian education accessible, understandable and achievable for every ambitious student."
      />

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
                of your life — yet too many students make it with confusing
                information, hidden agendas and no real support. We started
                Edmark Education to change that.
              </p>
              <p>
                From our office in Sunshine, Victoria, we&apos;ve helped hundreds
                of students find the right course, win scholarships they didn&apos;t
                know existed, and step onto campus with confidence. No pressure,
                no jargon — just expert guidance that puts you first.
              </p>
              <p>
                Today, Edmark partners with leading Australian universities,
                TAFEs and colleges to open doors for students from every
                background. Because when you&apos;re empowered with the right
                advice, there&apos;s no limit to where your education can take you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="card text-center">
                <div className="font-display text-4xl font-extrabold text-gradient">
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

      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Our values"
            title="What we stand for"
            subtitle="These aren't slogans on a wall — they're the standard we hold ourselves to with every student."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-brand-950">
                  <IconCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-brand-900">
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

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-3xl border border-brand-100 bg-brand-50 p-8 text-center shadow-soft sm:p-12">
            <span className="eyebrow">Your dedicated advisor</span>
            <h2 className="mt-4 text-2xl font-bold text-brand-900">
              {site.contact.name}
            </h2>
            <p className="text-sm font-semibold text-brand-600">
              {site.contact.role}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-900/70">
              &ldquo;My job is simple: understand your goals and build the
              clearest path to reach them. Reach out anytime — the first
              conversation is always free.&rdquo;
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-semibold text-brand-700">
              <a href={site.phoneHref}>{site.phone}</a>
              <span className="text-brand-200">·</span>
              <a href={site.emailHref}>{site.email}</a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
