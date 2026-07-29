import Link from "next/link";
import { homepageFaqs } from "@/lib/content";
import { IconArrow } from "./Icons";

// Single narrow column, deliberately narrower than the rest of the page so this
// section does not read as another full-width grid. The full 24 questions stay
// on /faq.
export default function FAQ() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl">
          <h2 className="reveal text-3xl font-extrabold text-brand-900 sm:text-4xl">
            Everything you might be wondering
          </h2>

          <div className="reveal mt-8 divide-y divide-brand-100 border-y border-brand-100">
            {homepageFaqs.map((f) => (
              <details
                key={f.q}
                className="group py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-brand-900">
                  {f.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-paper-sunk text-brand-600 transition-transform group-open:rotate-45">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-brand-900/70">
                  {f.a}
                </p>
              </details>
            ))}
          </div>

          <div className="reveal mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-800"
            >
              See all questions <IconArrow className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
