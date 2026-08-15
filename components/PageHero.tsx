import Image from "next/image";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  /** ReactNode so a page can emphasise one phrase, e.g. a coloured span. */
  title: ReactNode;
  subtitle: string;
  /**
   * Banner for this page, from /images/heroes. Every page carrying a hero
   * passes its own, so the header says something about the page rather than
   * repeating one campus photograph site-wide. The homepage keeps its video.
   *
   * The default is the shared banner, which is also the video poster: a page
   * that forgets to pass one still renders rather than showing a gap.
   */
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <Image
        src={image ?? "/images/hero-banner.jpg"}
        alt=""
        fill
        sizes="100vw"
        className="scale-105 object-cover object-center opacity-25 blur-[3px]"
        priority
        aria-hidden="true"
      />
      <div className="container-page relative py-20 text-center lg:py-24">
        <span className="eyebrow-light">{eyebrow}</span>
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-medium text-paper sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mist">
          {subtitle}
        </p>
      </div>
      <div className="relative" aria-hidden="true">
        <svg viewBox="0 0 1440 100" className="block w-full" preserveAspectRatio="none">
          <path
            fill="#FBFAF7"
            d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
}
