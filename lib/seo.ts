// ---------------------------------------------------------------------------
// PER-PAGE METADATA
//
// Next merges metadata a field at a time, but `openGraph` is all or nothing:
// a page that does not declare one inherits the root's entire block, so every
// route was sharing the homepage's og:title, og:description, og:url and
// og:image. Pages call pageSeo() instead of hand-rolling a block each, which
// keeps the canonical and the og:url pointing at the same place by
// construction rather than by care.
//
// OG ARTWORK
// ----------
// One file per route at /og/<route-slug>.jpg, 1200x630, where the slug is the
// path with its slashes turned into dashes: /courses/short-courses becomes
// /og/courses-short-courses.jpg, and "/" becomes /og/home.jpg.
//
// The artwork is being produced separately, so /og-image.jpg is listed second
// as a fallback. Scrapers take the first image they can fetch, which means a
// route with no file yet quietly falls back to the site card rather than
// sharing with no image at all.
// ---------------------------------------------------------------------------

import type { Metadata } from "next";
import { site } from "./site";

const FALLBACK_OG = "/og-image.jpg";

/** "/courses/short-courses" -> "/og/courses-short-courses.jpg" */
export function ogImagePath(path: string): string {
  const slug =
    path === "/" ? "home" : path.replace(/^\/|\/$/g, "").replace(/\//g, "-");
  return `/og/${slug}.jpg`;
}

type PageSeoInput = {
  /** Page title. The root layout appends "| Edmark Education". */
  title: string;
  description: string;
  /** The page's own path. Used for both the canonical and og:url. */
  path: string;
  /**
   * Overrides the derived OG image. Dynamic routes pass a section-level file,
   * since there is no per-item artwork: every post shares /og/blog.jpg.
   */
  image?: string;
  /** Set when the title should not take the site-name template. */
  absoluteTitle?: boolean;
  /** Blog posts pass their publish date, which also sets og:type to article. */
  publishedTime?: string;
};

export function pageSeo({
  title,
  description,
  path,
  image,
  absoluteTitle,
  publishedTime,
}: PageSeoInput): Metadata {
  const primary = image ?? ogImagePath(path);
  const images = [
    { url: primary, width: 1200, height: 630, alt: title },
    { url: FALLBACK_OG, width: 1200, height: 630, alt: site.name },
  ];
  const shared = {
    locale: "en_AU" as const,
    siteName: site.name,
    url: path,
    title,
    description,
    images,
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    // Split rather than spread so each branch keeps its literal og:type,
    // which is what ties publishedTime to the article shape.
    openGraph: publishedTime
      ? { ...shared, type: "article", publishedTime }
      : { ...shared, type: "website" },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [primary, FALLBACK_OG],
    },
  };
}
