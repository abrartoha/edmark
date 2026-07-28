import { faqs } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Questions, answered"
          title="Everything you might be wondering"
          subtitle="Still unsure? Book a free consultation and we'll answer every question about your specific situation."
        />

        <div className="reveal divide-y divide-line rounded-xl border border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-ink">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-paper-sunk text-eucalypt transition-colors group-open:rotate-45">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-copy">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
