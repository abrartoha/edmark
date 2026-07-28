import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "./Icons";

// A representative slice of the partner network. The full list, grouped by
// type and state, lives on /partners.
const logos = [
  { slug: "unimelb", name: "University of Melbourne" },
  { slug: "monash", name: "Monash University" },
  { slug: "sydney", name: "University of Sydney" },
  { slug: "unsw", name: "UNSW Sydney" },
  { slug: "uq", name: "University of Queensland" },
  { slug: "anu", name: "Australian National University" },
  { slug: "adelaide", name: "University of Adelaide" },
  { slug: "uwa", name: "University of Western Australia" },
  { slug: "rmit", name: "RMIT University" },
  { slug: "deakin", name: "Deakin University" },
  { slug: "swinburne", name: "Swinburne University of Technology" },
  { slug: "latrobe", name: "La Trobe University" },
  { slug: "uts", name: "University of Technology Sydney" },
  { slug: "griffith", name: "Griffith University" },
  { slug: "curtin", name: "Curtin University" },
  { slug: "qut", name: "Queensland University of Technology" },
  { slug: "melbournepoly", name: "Melbourne Polytechnic" },
  { slug: "tafensw", name: "TAFE NSW" },
  { slug: "kaplan", name: "Kaplan Business School" },
  { slug: "navitas", name: "Navitas" },
];

export default function TrustLogos() {
  return (
    <section className="border-b border-brand-100 bg-white py-14 lg:py-16">
      <div className="container-page">
        <p className="reveal text-center text-xs font-semibold uppercase tracking-widest text-brand-900/50">
          Direct partners with 50+ Australian institutions
        </p>

        <div className="reveal mt-10 grid grid-cols-3 items-center gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-5">
          {logos.map((l) => (
            <div key={l.slug} className="flex items-center justify-center">
              <Image
                src={`/images/partners/${l.slug}.png`}
                alt={l.name}
                width={160}
                height={64}
                className="h-10 w-auto max-w-[130px] object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 lg:h-12"
              />
            </div>
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
