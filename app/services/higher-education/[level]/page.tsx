import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CourseCard from "@/components/CourseCard";
import CTA from "@/components/CTA";
import { IconArrow } from "@/components/Icons";
import { INDICATIVE_NOTICE, MARA_NOTICE } from "@/lib/compliance";
import { coursesByField, fieldSlug, getLevel, levels } from "@/lib/higher-education";

export function generateStaticParams() {
  return levels.map((l) => ({ level: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { level: string };
}): Metadata {
  const level = getLevel(params.level);
  if (!level) return {};
  return {
    title: `${level.title} in Australia`,
    description: `${level.title} study options in Australia: indicative tuition, typical entry and English requirements, and intake timing. Confirmed for your situation during a free consultation with Edmark Education.`,
    alternates: { canonical: `/services/higher-education/${level.slug}` },
  };
}

export default function LevelPage({ params }: { params: { level: string } }) {
  const level = getLevel(params.level);
  if (!level) notFound();

  // Empty on a level whose courses carry no field, e.g. pathway programs,
  // which then falls back to the flat grid.
  const groups = coursesByField(level.courses);

  return (
    <>
      <PageHero
        eyebrow="Higher Education"
        title={level.title}
        subtitle={level.tagline}
      />
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Higher Education", href: "/services/higher-education" },
          { label: level.title },
        ]}
      />

      <section className="bg-paper py-16 lg:py-24">
        <div className="container-page max-w-3xl">
          {level.intro.map((p) => (
            <p key={p} className="mt-4 text-base leading-relaxed text-copy first:mt-0">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-sunk py-16 lg:py-24">
        <div className="container-page">
          <p className="eyebrow">Courses</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{level.title} options</h2>

          {groups.length > 0 ? (
            <>
              {/* Browse by field. Jumps within the page rather than routing to
                  a per-field page, so there is one URL per level to maintain
                  and nothing can 404 when a field ends up with no courses. */}
              <nav className="mt-10 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3" aria-label="Browse by field">
                {groups.map((g) => (
                  <a
                    key={g.field}
                    href={`#${fieldSlug(g.field)}`}
                    className="group flex items-center justify-between gap-4 border-b border-line py-4 text-base font-medium text-ink transition-colors hover:text-eucalypt"
                  >
                    {g.field}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mint-300 text-ink transition-transform group-hover:translate-x-0.5">
                      <IconArrow className="h-3.5 w-3.5" />
                    </span>
                  </a>
                ))}
              </nav>

              {groups.map((g) => (
                <div key={g.field} className="mt-14 scroll-mt-28" id={fieldSlug(g.field)}>
                  <h3 className="text-2xl">{g.field}</h3>
                  <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {g.courses.map((c, i) => (
                      <CourseCard key={`${c.name}-${i}`} course={c} />
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {level.courses.map((c, i) => (
                <CourseCard key={`${c.name}-${i}`} course={c} />
              ))}
            </div>
          )}

          {/* Only when the level genuinely touches skilled occupations. */}
          {level.skilledOccupationRelated && (
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-sage">
              {MARA_NOTICE}
            </p>
          )}

          {/* Unconditional, under every course listing. */}
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-sage">
            {INDICATIVE_NOTICE}
          </p>

          <Link
            href="/services/higher-education"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-eucalypt transition-colors hover:text-teal-500"
          >
            <IconArrow className="h-3.5 w-3.5 rotate-180" />
            All higher education
          </Link>
        </div>
      </section>

      <CTA
        title={`Ready to look at ${level.title.toLowerCase()} options?`}
        subtitle="Book a free consultation and we'll shortlist the providers that fit your background, budget and intake."
      />
    </>
  );
}
