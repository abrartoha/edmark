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
    <section className="relative overflow-hidden bg-brand-900">
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
        <div className="absolute -left-32 -top-20 h-80 w-80 rounded-full bg-brand-700/40 blur-3xl" />
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
      </div>
      <div className="container-page relative py-20 text-center lg:py-24">
        <span className="eyebrow bg-white/10 text-mint">{eyebrow}</span>
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-medium text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
          {subtitle}
        </p>
      </div>
      <div className="relative" aria-hidden="true">
        <svg viewBox="0 0 1440 100" className="block w-full" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
}
