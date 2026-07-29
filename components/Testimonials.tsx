import Link from "next/link";
import { testimonials } from "@/lib/content";
import { IconArrow } from "./Icons";

// One testimonial only, the most complete. The other two are shown on
// /success-stories, which carries a pull-quote strip at its foot.
const featured = testimonials[0];

export default function Testimonials() {
  return (
    <section className="bg-paper-sunk py-20 lg:py-28">
      <div className="container-page">
        <figure className="reveal grid items-center gap-10 sm:grid-cols-[240px_1fr] sm:gap-12">
          {/* Neutral placeholder until the real photo is supplied. */}
          <div
            className="mx-auto h-[240px] w-[240px] shrink-0 rounded-2xl border border-brand-100 bg-white sm:mx-0"
            role="img"
            aria-label={`Photo of ${featured.name} coming soon`}
          />

          <div>
            <blockquote className="text-xl font-medium leading-relaxed text-brand-900 sm:text-2xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>

            <figcaption className="mt-6">
              <p className="text-base font-medium text-brand-900">
                {featured.name}
                {featured.route && (
                  <span className="font-medium text-brand-900/50">
                    {" "}
                    &middot; {featured.route}
                  </span>
                )}
              </p>
              <p className="mt-1 text-sm text-brand-900/60">{featured.detail}</p>
              {featured.outcome && (
                <p className="mt-3 text-sm font-medium text-brand-700">
                  {featured.outcome}
                </p>
              )}
            </figcaption>

            <Link
              href="/success-stories"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition-colors hover:text-brand-800"
            >
              Read more student stories <IconArrow className="h-3.5 w-3.5" />
            </Link>
          </div>
        </figure>
      </div>
    </section>
  );
}
