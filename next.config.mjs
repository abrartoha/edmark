/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ----------------------------------------------------------------
      // ASQA notice, 2 September 2026. The 43 vocational course pages are
      // retired: Edmark is an education agent, not an RTO, and a page
      // advertising a qualification it neither delivers nor issues is a
      // training product being marketed without the provider named.
      //
      // Each one now points at the career page that replaced it, which is
      // about the occupation rather than the qualification. Permanent, and
      // to a real page rather than a 404 or the listing, so the reader who
      // followed a search result still lands on the subject they wanted.
      // ----------------------------------------------------------------
      {
        source: "/courses/certificate-iii-in-carpentry-cpc30220",
        destination: "/careers/carpenter",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-plumbing-cpc32420",
        destination: "/careers/plumber",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-electrotechnology-electrician-uee30820",
        destination: "/careers/electrician",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-light-vehicle-mechanical-technology-aur30620",
        destination: "/careers/light-vehicle-mechanic",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-commercial-cookery-sit30821",
        destination: "/careers/chef",
        permanent: true,
      },
      {
        source: "/courses/diploma-of-hospitality-management-sit50422",
        destination: "/careers/hospitality-manager",
        permanent: true,
      },
      {
        source: "/courses/diploma-of-nursing-hlt54121",
        destination: "/careers/enrolled-nurse",
        permanent: true,
      },
      {
        source: "/courses/certificate-ii-in-security-operations-cpp20218",
        destination: "/careers/security-officer",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-individual-support-ageing-and-disability-chc33021",
        destination: "/careers/aged-care-and-disability-support-worker",
        permanent: true,
      },
      {
        source: "/courses/certificate-iv-in-ageing-support",
        destination: "/careers/aged-care-and-disability-support-worker",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-early-childhood-education-and-care-chc30125",
        destination: "/careers/early-childhood-educator",
        permanent: true,
      },
      {
        source: "/courses/diploma-of-early-childhood-education-and-care-chc50125",
        destination: "/careers/early-childhood-educator",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-joinery-cpc31920",
        destination: "/careers/joiner",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-bricklaying-and-blocklaying-cpc33020",
        destination: "/careers/bricklayer",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-wall-and-floor-tiling-cpc31320",
        destination: "/careers/wall-and-floor-tiler",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-solid-plastering-cpc31020",
        destination: "/careers/plasterer",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-painting-and-decorating-cpc30620",
        destination: "/careers/painter-and-decorator",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-concreting-cpc30320",
        destination: "/careers/concreter",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-cabinet-making-and-timber-technology-msf30322",
        destination: "/careers/cabinet-maker",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-roof-plumbing-cpc32620",
        destination: "/careers/plumber",
        permanent: true,
      },
      {
        source: "/courses/certificate-iv-in-building-and-construction-cpc40120",
        destination: "/careers/builder",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-instrumentation-and-control-uee31220",
        destination: "/careers/instrumentation-and-control-technician",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-air-conditioning-and-refrigeration-uee32225",
        destination: "/careers/air-conditioning-and-refrigeration-technician",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-engineering-fabrication-trade-mem31922",
        destination: "/careers/metal-fabricator",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-engineering-mechanical-trade-mem30219",
        destination: "/careers/mechanical-fitter",
        permanent: true,
      },
      {
        source: "/courses/advanced-diploma-of-engineering-mem60122",
        destination: "/careers/engineering-technician",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-heavy-commercial-vehicle-mechanical-technology-aur31120",
        destination: "/careers/heavy-vehicle-mechanic",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-automotive-electrical-technology-aur30320",
        destination: "/careers/automotive-electrician",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-glass-and-glazing-msf30422",
        destination: "/careers/glazier",
        permanent: true,
      },
      {
        source: "/courses/diploma-of-building-and-construction-building-cpc50220",
        destination: "/careers/builder",
        permanent: true,
      },
      {
        source: "/courses/diploma-of-business-bsb50120",
        destination: "/careers/business-administrator",
        permanent: true,
      },
      {
        source: "/courses/graduate-diploma-of-management-learning-bsb80120",
        destination: "/careers/learning-and-development-officer",
        permanent: true,
      },
      {
        source: "/courses/certificate-iv-in-disability-support-chc43121",
        destination: "/careers/aged-care-and-disability-support-worker",
        permanent: true,
      },
      {
        source: "/courses/certificate-iv-in-mental-health-peer-work-chc43515",
        destination: "/careers/mental-health-support-worker",
        permanent: true,
      },
      {
        source: "/courses/diploma-of-mental-health-chc53315",
        destination: "/careers/mental-health-support-worker",
        permanent: true,
      },
      {
        source: "/courses/diploma-of-community-services-case-management-child-youth-and-family-welfare-chc52025",
        destination: "/careers/community-services-worker",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-hospitality-sit30622",
        destination: "/careers/hospitality-manager",
        permanent: true,
      },
      {
        source: "/courses/certificate-iii-in-patisserie-sit31021",
        destination: "/careers/pastry-chef",
        permanent: true,
      },
      {
        source: "/courses/certificate-iv-in-patisserie-sit40721",
        destination: "/careers/pastry-chef",
        permanent: true,
      },
      {
        source: "/courses/certificate-iv-in-kitchen-management-sit40521",
        destination: "/careers/chef",
        permanent: true,
      },
      {
        source: "/courses/advanced-diploma-of-hospitality-management-sit60322",
        destination: "/careers/hospitality-manager",
        permanent: true,
      },
      {
        source: "/courses/certificate-iv-in-school-based-education-support-chc40221",
        destination: "/careers/education-support-officer",
        permanent: true,
      },
      {
        source: "/courses/diploma-of-school-age-education-and-care-chc50221",
        destination: "/careers/education-support-officer",
        permanent: true,
      },
      {
        source: "/courses/short-courses",
        destination: "/careers",
        permanent: true,
      },
      // Renamed 11 September 2026: "Bachelor of Information Technology /
      // Networking" is now "Bachelor of Information Technology and Systems".
      // The slug is derived from the course name, so the old URL was live and
      // indexed and redirects rather than 404ing.
      {
        source: "/courses/bachelor-of-information-technology-networking",
        destination: "/courses/bachelor-of-information-technology-and-systems",
        permanent: true,
      },
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
