import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import { blogPosts } from "@/lib/blog";
import { IconArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Blog: Study in Australia Tips & Guides",
  description:
    "Expert tips, guides and advice for international students planning to study in Australia. Courses, visas, scholarships, student life and more from Edmark Education.",
  alternates: { canonical: "/blog" },
};

// One flat, in-palette chip for every category. The old map ran seven
// competing hues, which is exactly the chromatic noise this palette removes.
const CATEGORY_CHIP = "border border-line bg-paper-sunk text-eucalypt";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Tips & guides for studying in Australia"
        subtitle="Expert advice to help you choose the right course, win scholarships, navigate visas and thrive as a student in Australia."
      />
      <Breadcrumb items={[{ label: "Blog" }]} />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <article
                key={post.slug}
                className="card-hover reveal group flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded px-3 py-1 text-xs font-medium ${CATEGORY_CHIP}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-sage">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-medium text-ink group-hover:text-eucalypt transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sage">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                  <time
                    dateTime={post.date}
                    className="text-xs text-sage"
                  >
                    {new Date(post.date).toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-sm font-medium text-eucalypt hover:text-ink transition-colors"
                  >
                    Read more <IconArrow className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Need personalised advice?"
        subtitle="Our blog gives you the big picture. A free consultation gives you a plan tailored to your specific goals and circumstances."
      />
    </>
  );
}
