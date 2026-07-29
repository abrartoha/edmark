import Link from "next/link";
import { services } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import ServiceIcon from "./ServiceIcon";
import { IconArrow } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          center
          eyebrow="What we do"
          title={
            <>
              Everything you need,{" "}
              <span className="text-eucalypt">under one roof</span>
            </>
          }
          subtitle="From your first question to your first day on campus, we handle the hard parts."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.title}
              href={`/services/${s.slug}`}
              className="card-hover group reveal flex flex-col"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              {/* Icon on its own, no tile behind it. */}
              <ServiceIcon
                name={s.icon}
                className="h-9 w-9 text-eucalypt transition-colors group-hover:text-eucalypt"
              />
              <h3 className="mt-5 text-lg font-medium text-ink transition-colors group-hover:text-eucalypt">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-copy">
                {s.short}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-eucalypt">
                Learn more
                <IconArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
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
