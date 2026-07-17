import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { IconArrow, IconCheck, IconStar } from "./Icons";

const bullets = [
  "100% free consultation",
  "Trusted partner universities",
  "End-to-end application support",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      {/* Hero background image */}
      <Image
        src="/images/hero-banner.png"
        alt=""
        fill
        className="object-cover object-center opacity-30"
        priority
        aria-hidden="true"
      />

      {/* Decorative organic shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand-700/40 blur-3xl" />
        <div className="absolute -right-24 -top-20 h-[28rem] w-[28rem] rounded-full bg-brand-500/20 blur-3xl" />
      </div>

      <div className="container-page relative grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="animate-fade-up">
          <span className="eyebrow bg-white/10 text-mint">
            <IconStar className="h-3.5 w-3.5" /> Australia&apos;s trusted education consultants
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Pave the way to
            <span className="text-gradient"> career growth</span> in Australia.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
            Confused about which course, campus or career path is right for you?
            We turn confusion into a clear plan — matching you with the right
            university, maximising your scholarship chances, and handling the
            paperwork so you can focus on your future.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-medium text-white">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-gradient text-brand-950">
                  <IconCheck className="h-3 w-3" />
                </span>
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

          <p className="mt-6 text-sm text-brand-200">
            Join hundreds of students who trusted Edmark to launch their careers.
          </p>
        </div>

        {/* Floating highlight card */}
        <div className="animate-fade-up relative mx-auto w-full max-w-md lg:mx-0">
          <div className="rounded-3xl border border-white/15 bg-white/95 p-8 shadow-glow backdrop-blur">
            <div className="flex items-center gap-1 text-brand-500">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} className="h-5 w-5" />
              ))}
              <span className="ml-2 text-sm font-semibold text-brand-900">
                Rated by students
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Stat value="500+" label="Students guided" />
              <Stat value="50+" label="Partner institutions" />
              <Stat value="98%" label="Visa success rate" />
              <Stat value="10+" label="Years experience" />
            </div>

            <div className="mt-6 rounded-2xl bg-brand-50 p-5">
              <p className="text-sm font-medium text-brand-800">
                &ldquo;Edmark found me a course I&apos;d never even considered —
                and a scholarship that covered my first year.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold text-brand-600">
                — Priya, now studying Nursing in Melbourne
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative" aria-hidden="true">
        <svg viewBox="0 0 1440 120" className="block w-full" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,64 C240,120 480,120 720,88 C960,56 1200,24 1440,64 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-brand-100 p-4 text-center">
      <div className="font-display text-2xl font-extrabold text-brand-600">{value}</div>
      <div className="mt-1 text-xs font-medium text-brand-900/70">{label}</div>
    </div>
  );
}
