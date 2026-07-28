import Link from "next/link";
import { site } from "@/lib/site";
import { IconArrow, IconCheck, IconStar } from "./Icons";

const bullets = [
  "100% free consultation",
  "Trusted partner universities",
  "End-to-end application support",
];

const stats = [
  { value: "500+", label: "Students guided" },
  { value: "50+", label: "Partner institutions" },
  { value: "10+", label: "Years experience" },
];

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        {/* Hero background video (poster image shows instantly and is the
            fallback if the video can't autoplay) */}
        <video
          className="absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-60 blur-[1px]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-banner.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Scrim: a separate layer above the video, never on the video itself,
            so it covers the poster frame and the playing footage identically
            and there is no colour flash before playback begins. Sits below the
            content in z-order and never intercepts pointer events. */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-scrim-hero-mobile md:bg-scrim-hero"
          aria-hidden="true"
        />

        <div className="container-page relative z-10 py-24 lg:py-32">
          {/* Held to the left half: the md+ scrim is horizontal, so the text
              must stay inside the dark end of it. */}
          <div className="max-w-2xl animate-fade-up">
            <span className="eyebrow-light">
              <IconStar className="h-3.5 w-3.5" /> Australia&apos;s trusted
              education consultants
            </span>

            <h1 className="mt-6 text-paper">
              Pave the way to
              <span className="signature-light"> career growth</span> in
              Australia.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
              Confused about which course, campus or career path is right for
              you? We turn confusion into a clear plan, matching you with the
              right university, maximising your scholarship chances, and
              handling the paperwork so you can focus on your future.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-sm font-normal text-paper"
                >
                  <IconCheck className="h-4 w-4 shrink-0 text-eucalypt-light" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base">
                Book Your Free Consultation <IconArrow />
              </Link>
              <a href={site.phoneHref} className="btn-ghost-light text-base">
                Call{" "}
                <span className="font-mono tracking-[0.12em]">{site.phone}</span>
              </a>
            </div>

            <p className="mt-6 text-sm text-mist">
              Join hundreds of students who trusted Edmark to launch their
              careers.
            </p>
          </div>
        </div>
      </section>

      {/* Stat band. Moved out of the old floating glass card so that nothing
          overlaps the video: its own flat band directly beneath the hero. */}
      <section className="border-b border-line bg-paper">
        <div className="container-page grid gap-10 py-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
          <dl className="grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="numeral text-3xl sm:text-4xl">{s.value}</dd>
                <p className="eyebrow mt-2">{s.label}</p>
              </div>
            ))}
          </dl>

          <figure className="border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <div
              className="flex items-center gap-1 text-eucalypt"
              aria-label="Rated by students"
            >
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} className="h-4 w-4" />
              ))}
              <span className="eyebrow ml-3">Rated by students</span>
            </div>
            <blockquote className="mt-4 text-base leading-relaxed text-copy">
              &ldquo;Edmark found me a course I&apos;d never even considered,
              and a scholarship that covered my first year.&rdquo;
            </blockquote>
            <figcaption className="eyebrow mt-3">
              Priya, now a registered nurse in Melbourne
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
