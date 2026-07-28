import { testimonials } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { IconStar } from "./Icons";

export default function Testimonials() {
  return (
    <section className="bg-paper-sunk py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          center
          eyebrow="Student stories"
          title={<>Real students. Real offers. <em className="signature">Real futures.</em></>}
          subtitle="Our reputation is built on referrals. Here's what students say after working with Edmark."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="card reveal flex h-full flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 text-eucalypt">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-copy">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="text-xs text-eucalypt">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
