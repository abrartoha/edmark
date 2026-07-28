import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import { successStories } from "@/lib/success-stories";
import { IconStar } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Student Success Stories",
  description:
    "Real stories from real students. See how Edmark Education has helped hundreds of students find the right course, win scholarships and launch their careers in Australia.",
  alternates: { canonical: "/success-stories" },
};

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success stories"
        title="Real students. Real results."
        subtitle="Our reputation is built on referrals. Here's what happens when students trust Edmark with their future."
      />
      <Breadcrumb items={[{ label: "Success Stories" }]} />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            {successStories.map((story, i) => (
              <article
                key={story.name}
                className="card reveal flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-1 text-eucalypt">
                  {[...Array(5)].map((_, j) => (
                    <IconStar key={j} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm italic leading-relaxed text-copy">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm leading-relaxed text-copy">
                  {story.story}
                </p>
                <div className="mt-auto border-t border-line pt-4 mt-6">
                  <p className="text-base font-medium text-ink">
                    {story.name}
                  </p>
                  <p className="text-sm text-eucalypt">
                    {story.course}, {story.university}
                  </p>
                  <p className="text-xs text-sage">
                    From {story.origin}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded bg-paper-sunk px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-eucalypt" />
                    <span className="text-xs font-medium text-ink">
                      {story.outcome}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to write your own success story?"
        subtitle="Book a free consultation and take the first step toward your dream education in Australia."
      />
    </>
  );
}
