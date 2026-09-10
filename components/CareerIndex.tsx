import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CareerCard from "@/components/CareerCard";
import CTA from "@/components/CTA";
import type { Career } from "@/lib/careers";

/**
 * One occupation index, used by the two sector pages and the combined list.
 *
 * The three pages differ in which careers they show and what they say at the
 * top, not in how they work — so the layout lives here and a change to a card
 * or a heading happens once rather than three times.
 */
export default function CareerIndex({
  eyebrow,
  title,
  subtitle,
  intro,
  careers,
  crumb,
  image,
  alsoSee,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  intro: string;
  careers: Career[];
  /** Trailing breadcrumb label; "Careers & pathways" is always the parent. */
  crumb?: string;
  image?: string;
  /** The other sector, so a reader who picked the wrong list can cross over. */
  alsoSee?: { label: string; href: string };
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        image={image ?? "/images/heroes/short-courses.jpg"}
      />

      <Breadcrumb
        items={
          crumb
            ? [{ label: "Careers & pathways", href: "/careers" }, { label: crumb }]
            : [{ label: "Careers & pathways" }]
        }
      />

      <section className="reveal bg-paper py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Occupations</p>
          <h2 className="mt-3 max-w-3xl text-3xl sm:text-4xl">
            {careers.length} careers you can work toward in Australia
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-copy">
            {intro}
          </p>

          {alsoSee && (
            <Link
              href={alsoSee.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-eucalypt transition-colors hover:text-ink"
            >
              {alsoSee.label} &rarr;
            </Link>
          )}

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careers.map((c) => (
              <CareerCard key={c.slug} career={c} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Not sure which of these fits you?"
        subtitle="Book a free consultation. We'll help you compare providers, understand the visa and licensing requirements, and prepare a strong application."
        tinted
      />
    </>
  );
}
