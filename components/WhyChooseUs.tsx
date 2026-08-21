import Link from "next/link";
import { reasons } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { IconArrow, IconCheck } from "./Icons";

export default function WhyChooseUs() {
  return (
    <section className="reveal bg-paper-sunk py-20 lg:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Why Edmark"
            title="Every student deserves honest advice."
            subtitle="There are plenty of agents. There's only one Edmark, where honest advice, real partnerships and a done-for-you service come standard."
          />
          <Link href="/contact" className="btn-primary mt-8">
            Talk to an advisor <IconArrow />
          </Link>
        </div>

        <ul className="reveal divide-y divide-line">
          {reasons.map((r) => (
            <li key={r.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
              <IconCheck className="mt-1 h-5 w-5 shrink-0 text-eucalypt" />
              <div>
                <h3 className="text-base font-medium text-ink">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-copy">
                  {r.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
