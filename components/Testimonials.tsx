import {
  OUTCOMES_VARY_NOTICE,
  publishedTestimonials,
} from "@/lib/testimonials";

// One testimonial only, the most complete.
//
// Nothing here renders until a signed consent exists for that student, so the
// whole section is absent today rather than showing a heading over a gap.
const featured = publishedTestimonials[0];

export default function Testimonials() {
  if (!featured) return null;

  return (
    <section className="reveal bg-paper-sunk py-20 lg:py-28">
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

        <p className="reveal mt-10 max-w-3xl text-sm leading-relaxed text-sage">
          {OUTCOMES_VARY_NOTICE}
        </p>
      </div>
    </section>
  );
}
