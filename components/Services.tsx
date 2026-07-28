import Link from "next/link";
import { services } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import ServiceIcon from "./ServiceIcon";
import { IconArrow, IconCheck } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          center
          eyebrow="What we do"
          title="Everything you need to study in Australia, under one roof"
          subtitle="From your first question to your first day on campus, Edmark handles the hard parts so you can focus on what matters: your future."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="card-hover group reveal"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-brand-950 shadow-glow">
                <ServiceIcon name={s.icon} className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-brand-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-900/70">
                {s.short}
              </p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-brand-800">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <Link href="/services" className="btn-outline">
            Explore all services <IconArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
