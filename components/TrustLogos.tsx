import Image from "next/image";
import Link from "next/link";
import { featuredInstitutions } from "@/lib/partners";
import { IconArrow } from "./Icons";

export default function TrustLogos() {
  return (
    <section className="border-b border-brand-100 bg-white py-14 lg:py-16">
      <div className="container-page">
        <p className="reveal text-center text-xs font-semibold uppercase tracking-widest text-brand-900/50">
          Partner institutions across Australia
        </p>

        <div className="reveal mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {featuredInstitutions.map((inst) => (
            <a
              key={inst.slug}
              href={inst.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-white p-4 text-center transition-all duration-300 hover:border-brand-200 hover:shadow-soft"
            >
              <Image
                src={`/images/partners/${inst.slug}.png`}
                alt={`${inst.name} logo`}
                width={120}
                height={60}
                className="h-12 w-auto max-w-[110px] object-contain"
              />
              <span className="text-xs font-semibold leading-snug text-brand-900 transition-colors group-hover:text-brand-600">
                {inst.name}
              </span>
            </a>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <Link
            href="/partners"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-800"
          >
            See all partner institutions <IconArrow className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
