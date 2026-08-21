import Link from "next/link";
import { homepageFaqs } from "@/lib/content";
import { IconArrow } from "./Icons";

// Single narrow column, deliberately narrower than the rest of the page so this
// section does not read as another full-width grid. The full 24 questions stay
// on /faq.
export default function FAQ() {
  return (
    <section className="reveal bg-white py-20 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl">
          <h2 className="reveal text-3xl font-medium text-ink sm:text-4xl">
            Everything you might be wondering
          </h2>

          <div className="reveal mt-8 divide-y divide-line border-y border-line">
            {homepageFaqs.map((f) => (
              // Still a native <details>: it opens without JavaScript and
              // carries its own expanded state for assistive tech. The
              // stylesheet animates ::details-content, so the open and close
              // are the browser's, only slower.
              <details
                key={f.q}
                className="faq group py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-ink">
                  {f.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-paper-sunk text-eucalypt transition-transform group-open:rotate-45">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                {/* The wrapper is the grid item that collapses. The margin
                    sits inside it, not on it, so a closed row measures zero
                    rather than zero-plus-a-margin. */}
                <div className="faq-body">
                  <p className="mt-3 text-sm leading-relaxed text-copy">
                    {f.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <div className="reveal mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-eucalypt transition-colors hover:text-ink"
            >
              See all questions <IconArrow className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
