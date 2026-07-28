import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <Image
        src="/images/hero-banner.jpg"
        alt=""
        fill
        sizes="100vw"
        className="scale-105 object-cover object-center opacity-25 blur-[3px]"
        priority
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                      </div>
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
