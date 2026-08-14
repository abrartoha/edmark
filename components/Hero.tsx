import Link from "next/link";
import { site } from "@/lib/site";
import { IconArrow, IconCheck } from "./Icons";
import HeroVideo from "./HeroVideo";

const bullets = [
  "100% free consultation",
  "Trusted partner universities",
  "End-to-end application support",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Hero background video (poster image shows instantly and is the
          fallback if the video can't autoplay). Client component so it can
          force autoplay on mobile Safari. */}
      <HeroVideo />

      {/* Contrast scrim. Measured across the clip, the brightest frames put
          the composited background at L=0.20, which leaves the body copy at
          2.4:1 and even pure white at 4.0:1, both under AA. Brightening the
          text alone could not fix that, so this darkens what sits behind it.
          Weighted to the left, where the text block is, so the right side of
          the footage stays visible. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/65 to-ink/35"
        aria-hidden="true"
      />

      <div className="container-page relative py-20 lg:py-28">
        <div className="animate-fade-up max-w-3xl">
          <h1 className="text-4xl font-medium leading-[1.05] text-paper sm:text-5xl lg:text-6xl">
            Before you apply, talk to{" "}
            <span className="text-gradient">someone who knows.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper">
            Choosing a course, a college and a city is the biggest decision
            you&apos;ll make. We help international students in Australia get it
            right the first time. It&apos;s free, and there&apos;s no pressure
            to enrol anywhere.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-medium text-paper">
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
              Call {site.phone}
            </a>
          </div>

          <p className="mt-6 text-sm text-mist">
            Join hundreds of students who trusted Edmark to launch their careers.
          </p>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative" aria-hidden="true">
        <svg viewBox="0 0 1440 120" className="block w-full" preserveAspectRatio="none">
          <path
            fill="#FBFAF7"
            d="M0,64 C240,120 480,120 720,88 C960,56 1200,24 1440,64 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}