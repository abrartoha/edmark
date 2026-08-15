import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CourseBrowser from "@/components/CourseBrowser";
import { courseSlug } from "@/lib/course-catalog";
import CTA from "@/components/CTA";
import { IconArrow } from "@/components/Icons";
import { INDICATIVE_NOTICE, MARA_NOTICE } from "@/lib/compliance";
import { getLevel, levels } from "@/lib/higher-education";

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
    ...pageSeo({
      title: `${level.title} in Australia`,
      description: `${level.title} study options in Australia: indicative tuition, typical entry and English requirements, and intake timing. Confirmed for your situation during a free consultation with Edmark Education.`,
      path: `/courses/higher-education/${level.slug}`,
    }),
  };
}

export default function LevelPage({ params }: { params: { level: string } }) {
  const level = getLevel(params.level);
  if (!level) notFound();

  return (
    <>
      <PageHero
        eyebrow="Higher Education"
        title={level.title}
        subtitle={level.tagline}
        image={`/images/heroes/${level.slug}.jpg`}
      />
      <Breadcrumb
        items={[
          { label: "Courses" },
          { label: "Higher Education", href: "/courses/higher-education" },
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

      {/* Paper, not paper-sunk. paper-sunk is Sand 200, a warm cream, and
          the course cards are Mint 100, a cool tint. Sitting one on the other
          put two competing tints in the same block. The border-y keeps this
          section separated from the intro above it. */}
      <section className="border-y border-line bg-paper py-16 lg:py-24">
        <div className="container-page">
          <p className="eyebrow">Courses</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{level.title} options</h2>

          <CourseBrowser
            courses={level.courses.map((c) => ({
              ...c,
              levelSlug: level.slug,
              levelTitle: level.title,
              slug: courseSlug(c.name),
            }))}
            levels={levels.map((l) => ({
              slug: l.slug,
              title: l.title,
              count: l.courses.length,
            }))}
            lockedLevel={level.slug}
          />

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
            href="/courses/higher-education"
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
