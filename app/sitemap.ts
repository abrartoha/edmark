import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/content";
import { blogPosts } from "@/lib/blog";
import { careers } from "@/lib/careers";

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
    { path: "/careers", priority: 0.9, freq: "monthly" as const },
    { path: "/careers/higher-education", priority: 0.9, freq: "monthly" as const },
    { path: "/careers/vocational-education", priority: 0.9, freq: "monthly" as const },
    { path: "/partners", priority: 0.7, freq: "monthly" as const },
    { path: "/how-were-paid", priority: 0.6, freq: "yearly" as const },
    // Low priority, but listed: a student looking for the privacy policy or
    // the complaints process should be able to find it in search rather than
    // having to trust that it exists.
    { path: "/privacy", priority: 0.3, freq: "yearly" as const },
    { path: "/terms", priority: 0.3, freq: "yearly" as const },
    { path: "/complaints", priority: 0.4, freq: "yearly" as const },
  ];

  // One page per occupation. These replaced the vocational course pages on
  // 10 September 2026; the retired course URLs 301 to them from
  // next.config.mjs and are deliberately absent here.
  const careerRoutes = careers.map((c) => ({
    path: `/careers/${c.slug}`,
    priority: 0.7,
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

  const blogRoutes = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.6,
    freq: "monthly" as const,
  }));

  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...careerRoutes,
    ...blogRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.freq,
    priority: route.priority,
  }));
}
