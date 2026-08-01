import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/content";
import { blogPosts } from "@/lib/blog";
import { levels } from "@/lib/higher-education";

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
    { path: "/research-degrees", priority: 0.9, freq: "monthly" as const },
    { path: "/partners", priority: 0.7, freq: "monthly" as const },
  ];

  const serviceRoutes = services
    .filter((s) => s.slug !== "research-degrees")
    .map((s) => ({
      path: `/services/${s.slug}`,
    priority: 0.7,
    freq: "monthly" as const,
  }));

  // Course data is populated and these pages are indexable: they inherit
  // index/follow from the root layout and set no robots override.
  const higherEducationRoutes = [
    { path: "/services/higher-education", priority: 0.8, freq: "monthly" as const },
    ...levels.map((l) => ({
      path: `/services/higher-education/${l.slug}`,
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
    ...blogRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.freq,
    priority: route.priority,
  }));
}
