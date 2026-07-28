import Link from "next/link";
import { reasons } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { IconArrow, IconCheck } from "./Icons";

export default function WhyChooseUs() {
  return (
    <section className="bg-wash-paper py-20 lg:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Why Edmark"
            title={<>Students choose us because we <em className="signature">put them first</em></>}
            subtitle="There are plenty of agents. There's only one Edmark, where honest advice, real partnerships and a done-for-you service come standard."
          />
          <Link href="/contact" className="btn-primary mt-8">
            Talk to an advisor <IconArrow />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="card reveal"
              style={{ transitionDelay: `${(i % 2) * 100}ms` }}
            >
              <div className="text-eucalypt">
                <IconCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-medium text-ink">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-copy">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
