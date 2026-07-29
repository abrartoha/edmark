import Link from "next/link";
import { site } from "@/lib/site";
import { IconArrow, IconCheck, IconStar } from "./Icons";

const bullets = [
  "100% free consultation",
  "Trusted partner universities",
  "End-to-end application support",
];

export default function Hero() {
  return (
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

      <div className="container-page relative py-20 lg:py-28">
        <div className="animate-fade-up max-w-3xl">
          <span className="eyebrow-light">
            <IconStar className="h-3.5 w-3.5" /> Free consultations · Melbourne
            based
          </span>

          <h1 className="mt-6 text-4xl font-medium leading-[1.05] text-paper sm:text-5xl lg:text-6xl">
            Before you apply, talk to{" "}
            <span className="text-gradient">someone who knows.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Choosing a course, a college and a city is the biggest decision
            you&apos;ll make. We help international students in Australia get it
            right the first time &mdash; free, and with no pressure to enrol
            anywhere.
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