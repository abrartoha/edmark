import Link from "next/link";
import { site } from "@/lib/site";
import { IconArrow, IconPhone } from "./Icons";

export default function CTA({
  title = "Your future won't wait. Neither should you.",
  subtitle = "Book your free, no-obligation consultation today. In 30 minutes you'll have a clear plan for studying in Australia — and a team ready to make it happen.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-brand-diagonal px-8 py-16 text-center shadow-glow sm:px-16">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-100">
              {subtitle}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base">
                Book Free Consultation <IconArrow />
              </Link>
              <a href={site.phoneHref} className="btn-ghost-light text-base">
                <IconPhone className="h-5 w-5" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
