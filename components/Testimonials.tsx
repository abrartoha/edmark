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
        {/* No portrait. The measure is capped so the quote does not run the
            full container width once there is nothing beside it. */}
        <figure className="reveal max-w-3xl">
          <blockquote className="text-xl font-medium leading-relaxed text-ink sm:text-2xl">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>

          {/* figcaption stays the last child of figure, so the link below
              sits outside it rather than between the quote and the caption. */}
          <figcaption className="mt-6">
            <p className="text-base font-medium text-ink">
              {featured.name}
              {featured.route && (
                <span className="font-medium text-sage">
                  {" "}
                  &middot; {featured.route}
                </span>
              )}
            </p>
            <p className="mt-1 text-sm text-sage">{featured.detail}</p>
            {featured.outcome && (
              <p className="mt-3 text-sm font-medium text-eucalypt">
                {featured.outcome}
              </p>
            )}
          </figcaption>
        </figure>

        <Link
          href="/success-stories"
          className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-eucalypt transition-colors hover:text-ink"
        >
          Read more student stories <IconArrow className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
