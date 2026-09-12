/** @type {import('next').NextConfig} */
// Redirects here use statusCode: 301 rather than `permanent: true`. Next emits
// 308 for `permanent`, which is the modern permanent redirect and which Google
// treats identically — but 308 still reads as unexpected to a good deal of SEO
// tooling, and an audit that flags every retired URL is an audit nobody reads.
// 301 says the same thing in the dialect the tools speak.
const nextConfig = {
  async redirects() {
    return [
      // The success stories page was removed on 13 September 2026. It had no
      // stories to show — none have a signed consent on file — so it goes to
      // the homepage rather than leaving a live URL with nothing behind it.
      {
        source: "/success-stories",
        destination: "/",
        statusCode: 301,
      },
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
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-plumbing-cpc32420",
        destination: "/careers/plumber",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-electrotechnology-electrician-uee30820",
        destination: "/careers/electrician",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-light-vehicle-mechanical-technology-aur30620",
        destination: "/careers/light-vehicle-mechanic",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-commercial-cookery-sit30821",
        destination: "/careers/chef",
        statusCode: 301,
      },
      {
        source: "/courses/diploma-of-hospitality-management-sit50422",
        destination: "/careers/hospitality-manager",
        statusCode: 301,
      },
      {
        source: "/courses/diploma-of-nursing-hlt54121",
        destination: "/careers/enrolled-nurse",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-ii-in-security-operations-cpp20218",
        destination: "/careers/security-officer",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-individual-support-ageing-and-disability-chc33021",
        destination: "/careers/aged-care-and-disability-support-worker",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iv-in-ageing-support",
        destination: "/careers/aged-care-and-disability-support-worker",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-early-childhood-education-and-care-chc30125",
        destination: "/careers/early-childhood-educator",
        statusCode: 301,
      },
      {
        source: "/courses/diploma-of-early-childhood-education-and-care-chc50125",
        destination: "/careers/early-childhood-educator",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-joinery-cpc31920",
        destination: "/careers/joiner",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-bricklaying-and-blocklaying-cpc33020",
        destination: "/careers/bricklayer",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-wall-and-floor-tiling-cpc31320",
        destination: "/careers/wall-and-floor-tiler",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-solid-plastering-cpc31020",
        destination: "/careers/plasterer",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-painting-and-decorating-cpc30620",
        destination: "/careers/painter-and-decorator",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-concreting-cpc30320",
        destination: "/careers/concreter",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-cabinet-making-and-timber-technology-msf30322",
        destination: "/careers/cabinet-maker",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-roof-plumbing-cpc32620",
        destination: "/careers/plumber",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iv-in-building-and-construction-cpc40120",
        destination: "/careers/builder",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-instrumentation-and-control-uee31220",
        destination: "/careers/instrumentation-and-control-technician",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-air-conditioning-and-refrigeration-uee32225",
        destination: "/careers/air-conditioning-and-refrigeration-technician",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-engineering-fabrication-trade-mem31922",
        destination: "/careers/metal-fabricator",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-engineering-mechanical-trade-mem30219",
        destination: "/careers/mechanical-fitter",
        statusCode: 301,
      },
      {
        source: "/courses/advanced-diploma-of-engineering-mem60122",
        destination: "/careers/engineering-technician",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-heavy-commercial-vehicle-mechanical-technology-aur31120",
        destination: "/careers/heavy-vehicle-mechanic",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-automotive-electrical-technology-aur30320",
        destination: "/careers/automotive-electrician",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-glass-and-glazing-msf30422",
        destination: "/careers/glazier",
        statusCode: 301,
      },
      {
        source: "/courses/diploma-of-building-and-construction-building-cpc50220",
        destination: "/careers/builder",
        statusCode: 301,
      },
      {
        source: "/courses/diploma-of-business-bsb50120",
        destination: "/careers/business-administrator",
        statusCode: 301,
      },
      {
        source: "/courses/graduate-diploma-of-management-learning-bsb80120",
        destination: "/careers/learning-and-development-officer",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iv-in-disability-support-chc43121",
        destination: "/careers/aged-care-and-disability-support-worker",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iv-in-mental-health-peer-work-chc43515",
        destination: "/careers/mental-health-support-worker",
        statusCode: 301,
      },
      {
        source: "/courses/diploma-of-mental-health-chc53315",
        destination: "/careers/mental-health-support-worker",
        statusCode: 301,
      },
      {
        source: "/courses/diploma-of-community-services-case-management-child-youth-and-family-welfare-chc52025",
        destination: "/careers/community-services-worker",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-hospitality-sit30622",
        destination: "/careers/hospitality-manager",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iii-in-patisserie-sit31021",
        destination: "/careers/pastry-chef",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iv-in-patisserie-sit40721",
        destination: "/careers/pastry-chef",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iv-in-kitchen-management-sit40521",
        destination: "/careers/chef",
        statusCode: 301,
      },
      {
        source: "/courses/advanced-diploma-of-hospitality-management-sit60322",
        destination: "/careers/hospitality-manager",
        statusCode: 301,
      },
      {
        source: "/courses/certificate-iv-in-school-based-education-support-chc40221",
        destination: "/careers/education-support-officer",
        statusCode: 301,
      },
      {
        source: "/courses/diploma-of-school-age-education-and-care-chc50221",
        destination: "/careers/education-support-officer",
        statusCode: 301,
      },
      {
        source: "/courses/short-courses",
        destination: "/careers/vocational-education",
        statusCode: 301,
      },
      // /careers/vocational was live briefly before being renamed for symmetry
      // with /careers/higher-education. Short-lived, but it was in the sitemap.
      {
        source: "/careers/vocational",
        destination: "/careers/vocational-education",
        statusCode: 301,
      },
      // ----------------------------------------------------------------
      // 11 September 2026. The 53 higher-education course pages follow the
      // vocational ones to /careers, for the same reason: Edmark is an
      // education agent, and a page built around a qualification it neither
      // delivers nor issues is somebody else's product being marketed without
      // the provider named. The occupation is ours to write about; the course
      // is not.
      // ----------------------------------------------------------------
      {
        source: "/courses/bachelor-of-information-technology-and-systems",
        destination: "/careers/network-and-systems-engineer",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-engineering-honours",
        destination: "/careers/professional-engineer",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-information-technology-bachelor-of-business",
        destination: "/careers/network-and-systems-engineer",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-business",
        destination: "/careers/business-administrator",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-accounting",
        destination: "/careers/accountant",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-early-childhood-education",
        destination: "/careers/early-childhood-educator",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-education",
        destination: "/careers/school-teacher",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-nursing",
        destination: "/careers/registered-nurse",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-nursing-enrolled-nurse-to-registered-nurse",
        destination: "/careers/registered-nurse",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-midwifery",
        destination: "/careers/midwife",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-occupational-therapy",
        destination: "/careers/occupational-therapist",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-speech-pathology",
        destination: "/careers/speech-pathologist",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-psychological-science",
        destination: "/careers/psychologist",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-psychological-science-with-honours",
        destination: "/careers/psychologist",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-psychological-science-bachelor-of-business",
        destination: "/careers/psychologist",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-health-science-health-and-lifestyle",
        destination: "/careers/health-promotion-officer",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-biomedical-science",
        destination: "/careers/biomedical-scientist",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-clinical-exercise-physiology",
        destination: "/careers/exercise-physiologist",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-clinical-sciences-osteopathic-studies",
        destination: "/careers/osteopath",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-sport-and-exercise-science",
        destination: "/careers/exercise-physiologist",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-exercise-science-and-psychological-science",
        destination: "/careers/exercise-physiologist",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-counselling",
        destination: "/careers/counsellor",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-social-work",
        destination: "/careers/social-worker",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-community-welfare",
        destination: "/careers/community-services-worker",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-laws",
        destination: "/careers/lawyer",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-legal-and-justice-studies",
        destination: "/careers/paralegal",
        statusCode: 301,
      },
      {
        source: "/courses/associate-degree-of-law-paralegal-studies",
        destination: "/careers/paralegal",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-science",
        destination: "/careers/laboratory-scientist",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-veterinary-technology",
        destination: "/careers/veterinary-technician",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-business-in-hotel-management",
        destination: "/careers/hospitality-manager",
        statusCode: 301,
      },
      {
        source: "/courses/associate-degree-of-international-hotel-and-tourism-management",
        destination: "/careers/hospitality-manager",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-business-marketing",
        destination: "/careers/marketing-specialist",
        statusCode: 301,
      },
      {
        source: "/courses/bachelor-of-information-technology-cyber-security",
        destination: "/careers/cyber-security-analyst",
        statusCode: 301,
      },
      {
        source: "/courses/master-of-information-technology-networking",
        destination: "/careers/network-and-systems-engineer",
        statusCode: 301,
      },
      {
        source: "/courses/mba-master-of-business",
        destination: "/careers/business-administrator",
        statusCode: 301,
      },
      {
        source: "/courses/master-of-professional-accounting",
        destination: "/careers/accountant",
        statusCode: 301,
      },
      {
        source: "/courses/master-of-business-analytics",
        destination: "/careers/data-analyst",
        statusCode: 301,
      },
      {
        source: "/courses/graduate-diploma-of-business",
        destination: "/careers/business-administrator",
        statusCode: 301,
      },
      {
        source: "/courses/graduate-certificate-in-business",
        destination: "/careers/business-administrator",
        statusCode: 301,
      },
      {
        source: "/courses/master-of-teaching",
        destination: "/careers/school-teacher",
        statusCode: 301,
      },
      {
        source: "/courses/master-of-teaching-early-childhood",
        destination: "/careers/early-childhood-educator",
        statusCode: 301,
      },
      {
        source: "/courses/graduate-diploma-of-education-early-childhood",
        destination: "/careers/early-childhood-educator",
        statusCode: 301,
      },
      {
        source: "/courses/graduate-diploma-of-teaching-primary-secondary",
        destination: "/careers/school-teacher",
        statusCode: 301,
      },
      {
        source: "/courses/master-of-engineering",
        destination: "/careers/professional-engineer",
        statusCode: 301,
      },
      {
        source: "/courses/master-of-nursing-graduate-entry",
        destination: "/careers/registered-nurse",
        statusCode: 301,
      },
      {
        source: "/courses/master-of-social-work-professional-qualifying",
        destination: "/careers/social-worker",
        statusCode: 301,
      },
      {
        source: "/courses/graduate-certificate-in-social-sciences-for-social-work",
        destination: "/careers/social-worker",
        statusCode: 301,
      },
      {
        source: "/courses/master-of-naturopathic-medicine",
        destination: "/careers/naturopath",
        statusCode: 301,
      },
      {
        source: "/courses/master-of-osteopathic-medicine",
        destination: "/careers/osteopath",
        statusCode: 301,
      },
      {
        source: "/courses/master-of-business-in-global-hotel-leadership",
        destination: "/careers/hospitality-manager",
        statusCode: 301,
      },
      {
        source: "/courses/graduate-diploma-of-business-in-global-hotel-leadership",
        destination: "/careers/hospitality-manager",
        statusCode: 301,
      },
      {
        source: "/courses/graduate-certificate-of-business-in-global-hotel-leadership",
        destination: "/careers/hospitality-manager",
        statusCode: 301,
      },
      {
        source: "/courses/master-of-information-technology-cyber-security",
        destination: "/careers/cyber-security-analyst",
        statusCode: 301,
      },
      {
        source: "/courses/higher-education",
        destination: "/careers/higher-education",
        statusCode: 301,
      },
      {
        source: "/courses/higher-education/undergraduate",
        destination: "/careers/higher-education",
        statusCode: 301,
      },
      {
        source: "/courses/higher-education/postgraduate",
        destination: "/careers/higher-education",
        statusCode: 301,
      },
      // Renamed 11 September 2026: "Bachelor of Information Technology /
      // Networking" is now "Bachelor of Information Technology and Systems".
      // The slug is derived from the course name, so the old URL was live and
      // indexed and redirects rather than 404ing.
      {
        // Was renamed to .../and-systems, which has since become a career page.
        // Pointed straight at the destination rather than through the
        // intermediate URL: a chain of redirects loses a little link equity at
        // every hop and costs a crawler an extra round trip for nothing.
        source: "/courses/bachelor-of-information-technology-networking",
        destination: "/careers/network-and-systems-engineer",
        statusCode: 301,
      },
      // What you study now lives under /courses, and how we help you get
      // there stays under /services. These three pages were on the wrong side
      // of that line: the nav filed them under Courses while their URLs, and
      // so their breadcrumbs, still said Services. Every old URL was live and
      // indexed, so each one redirects to its new home rather than 404ing.
      {
        source: "/services/higher-education",
        destination: "/careers/higher-education",
        statusCode: 301,
      },
      {
        // Before the catch-all below, which would otherwise claim it.
        source: "/services/higher-education/pathway-programs",
        destination: "/careers/higher-education",
        statusCode: 301,
      },
      {
        source: "/services/higher-education/:level",
        destination: "/careers/higher-education",
        statusCode: 301,
      },
      {
        source: "/services/short-courses",
        destination: "/careers/vocational-education",
        statusCode: 301,
      },
      {
        source: "/research-degrees",
        destination: "/courses/research-degrees",
        statusCode: 301,
      },
      {
        // Research Degrees existed at two URLs competing for the same queries.
        // Pointed straight at the new page, so this is one hop rather than a
        // chain through /research-degrees.
        source: "/services/research-degrees",
        destination: "/courses/research-degrees",
        statusCode: 301,
      },
      {
        // PR pathway courses was removed. Its trade list now lives on the
        // vocational page, so that URL goes there rather than to the hub.
        // Listed before the catch-all below, which would otherwise claim it.
        source: "/services/pr-pathway-courses/trade",
        destination: "/careers/vocational-education",
        statusCode: 301,
      },
      {
        source: "/services/pr-pathway-courses/:category*",
        destination: "/services",
        statusCode: 301,
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
