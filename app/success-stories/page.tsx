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
                <div className="flex gap-1 text-brand-500">
                  {[...Array(5)].map((_, j) => (
                    <IconStar key={j} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm italic leading-relaxed text-brand-900/80">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm leading-relaxed text-brand-900/70">
                  {story.story}
                </p>
                <div className="mt-auto border-t border-brand-100 pt-4 mt-6">
                  <p className="text-base font-bold text-brand-900">
                    {story.name}
                  </p>
                  <p className="text-sm text-brand-600">
                    {story.course}, {story.university}
                  </p>
                  <p className="text-xs text-brand-900/50">
                    From {story.origin}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-xs font-semibold text-brand-800">
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
