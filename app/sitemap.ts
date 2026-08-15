import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/content";
import { blogPosts } from "@/lib/blog";
import { levels } from "@/lib/higher-education";
import { catalog } from "@/lib/course-catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1, freq: "weekly" as const },
    { path: "/services", priority: 0.9, freq: "monthly" as const },
    { path: "/about", priority: 0.8, freq: "monthly" as const },
    { path: "/contact", priority: 0.9, freq: "monthly" as const },
    { path: "/blog", priority: 0.8, freq: "weekly" as const },
    { path: "/faq", priority: 0.7, freq: "monthly" as const },
    { path: "/scholarships", priority: 0.8, freq: "monthly" as const },
    { path: "/success-stories", priority: 0.7, freq: "monthly" as const },
    { path: "/study-in-australia", priority: 0.9, freq: "monthly" as const },
    { path: "/courses/research-degrees", priority: 0.9, freq: "monthly" as const },
    { path: "/courses/short-courses", priority: 0.8, freq: "monthly" as const },
    { path: "/partners", priority: 0.7, freq: "monthly" as const },
    { path: "/how-were-paid", priority: 0.6, freq: "yearly" as const },
    // Low priority, but listed: a student looking for the privacy policy or
    // the complaints process should be able to find it in search rather than
    // having to trust that it exists.
    { path: "/privacy", priority: 0.3, freq: "yearly" as const },
    { path: "/terms", priority: 0.3, freq: "yearly" as const },
    { path: "/complaints", priority: 0.4, freq: "yearly" as const },
  ];

  // Every course has its own page, and all 96 were missing here: they are the
  // pages a student actually searches for, by course name. /course-matcher is
  // deliberately absent, since it is noindex.
  const courseRoutes = catalog.map((c) => ({
    path: `/courses/${c.slug}`,
    priority: 0.6,
    freq: "monthly" as const,
  }));

  // Services written up elsewhere (the course categories, under /courses) are
  // listed with the routes above instead, at their own URL.
  const serviceRoutes = services
    .filter((s) => !s.href)
    .map((s) => ({
      path: `/services/${s.slug}`,
    priority: 0.7,
    freq: "monthly" as const,
  }));

  // Course data is populated and these pages are indexable: they inherit
  // index/follow from the root layout and set no robots override.
  const higherEducationRoutes = [
    { path: "/courses/higher-education", priority: 0.8, freq: "monthly" as const },
    ...levels.map((l) => ({
      path: `/courses/higher-education/${l.slug}`,
      priority: 0.7,
      freq: "monthly" as const,
    })),
  ];

  const blogRoutes = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.6,
    freq: "monthly" as const,
  }));

  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...higherEducationRoutes,
    ...courseRoutes,
    ...blogRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.freq,
    priority: route.priority,
  }));
}
