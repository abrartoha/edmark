import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceIcon from "@/components/ServiceIcon";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import { services } from "@/lib/content";
import { IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Education Consulting Services",
  description:
    "Free career counselling, university and course selection, admissions, scholarships and pre-departure support. Edmark Education guides you into the right Australian institution, from end to end.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Expert guidance at every step of your study journey"
        subtitle="One dedicated advisor. A done-for-you process. Everything you need to go from 'where do I start?' to your first day on an Australian campus."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page space-y-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal grid items-center gap-8 rounded-xl border border-line p-8 lg:grid-cols-[auto_1fr_1fr] lg:p-10"
            >
              <div className="text-eucalypt">
                <ServiceIcon name={s.icon} className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-eucalypt-light">
                  0{i + 1}
                </span>
                <h2 className="mt-1 text-2xl font-medium text-ink">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-copy">
                  {s.long}
                </p>
              </div>
              <ul className="space-y-3 rounded-xl bg-paper-sunk p-6">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm font-medium text-ink">
                    <span className="mt-0.5 shrink-0 text-eucalypt">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <Process />
      <CTA />
    </>
  );
}
