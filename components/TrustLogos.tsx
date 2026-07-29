import Image from "next/image";
import { featuredInstitutions } from "@/lib/partners";

export default function TrustLogos() {
  return (
    <section className="border-b border-line bg-white py-12 lg:py-16">
      <div className="container-page">
        <div className="reveal grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {featuredInstitutions.map((inst) => (
            <a
              key={inst.slug}
              href={inst.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-white p-4 text-center transition-all duration-300 hover:border-sage/50 hover:"
            >
              <Image
                src={`/images/partners/${inst.slug}.png`}
                alt={`${inst.name} logo`}
                width={120}
                height={60}
                className="h-12 w-auto max-w-[110px] object-contain"
              />
              <span className="text-xs font-medium leading-snug text-ink transition-colors group-hover:text-eucalypt">
                {inst.name}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
