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
    "Free career counselling, university and course selection, admissions, scholarships and pre-departure support. Edmark Education guides you into the right Australian institution — end to end.",
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
              className="grid items-center gap-8 rounded-3xl border border-brand-100 p-8 shadow-soft lg:grid-cols-[auto_1fr_1fr] lg:p-10"
            >
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-gradient text-brand-950 shadow-glow">
                <ServiceIcon name={s.icon} className="h-8 w-8" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
                  0{i + 1}
                </span>
                <h2 className="mt-1 text-2xl font-bold text-brand-900">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-900/70">
                  {s.long}
                </p>
              </div>
              <ul className="space-y-3 rounded-2xl bg-brand-50 p-6">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm font-medium text-brand-800">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-brand-950">
                      <IconCheck className="h-3 w-3" />
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
