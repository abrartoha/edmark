/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // What you study now lives under /courses, and how we help you get
      // there stays under /services. These three pages were on the wrong side
      // of that line: the nav filed them under Courses while their URLs, and
      // so their breadcrumbs, still said Services. Every old URL was live and
      // indexed, so each one redirects to its new home rather than 404ing.
      {
        source: "/services/higher-education",
        destination: "/courses/higher-education",
        permanent: true,
      },
      {
        // Before the catch-all below, which would otherwise claim it.
        source: "/services/higher-education/pathway-programs",
        destination: "/courses/higher-education",
        permanent: true,
      },
      {
        source: "/services/higher-education/:level",
        destination: "/courses/higher-education/:level",
        permanent: true,
      },
      {
        source: "/services/short-courses",
        destination: "/courses/short-courses",
        permanent: true,
      },
      {
        source: "/research-degrees",
        destination: "/courses/research-degrees",
        permanent: true,
      },
      {
        // Research Degrees existed at two URLs competing for the same queries.
        // Pointed straight at the new page, so this is one hop rather than a
        // chain through /research-degrees.
        source: "/services/research-degrees",
        destination: "/courses/research-degrees",
        permanent: true,
      },
      {
        // PR pathway courses was removed. Its trade list now lives on the
        // vocational page, so that URL goes there rather than to the hub.
        // Listed before the catch-all below, which would otherwise claim it.
        source: "/services/pr-pathway-courses/trade",
        destination: "/courses/short-courses",
        permanent: true,
      },
      {
        source: "/services/pr-pathway-courses/:category*",
        destination: "/services",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        // Files in public/ ship with "max-age=0, must-revalidate" by default,
        // so the 11.6MB hero video was re-downloaded in full on every single
        // page view, including by returning visitors. On a slow connection
        // that alone can stall the page long enough to look broken.
        //
        // Marked immutable, so if the video is ever replaced it must be given
        // a NEW filename or returning visitors keep the old one for a year.
        source: "/videos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // 30 days rather than immutable: partner logos and team photos do get
        // swapped, and a replacement should propagate without renaming.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000" },
        ],
      },
    ];
  },

  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
