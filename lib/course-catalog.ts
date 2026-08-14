// ---------------------------------------------------------------------------
// COURSE CATALOGUE
//
// One list covering both higher education and vocational study, so a course
// can have its own page without either source knowing about the other. Slugs
// are derived from the course name, and from its national code where it has
// one, since two providers can word the same qualification differently but the
// code is fixed.
// ---------------------------------------------------------------------------

import { levels, type Course, type Field } from "./higher-education";
import { vetCourses } from "./vet-courses";

export type Sector = "Higher education" | "Vocational";

export type CatalogCourse = Course & {
  slug: string;
  sector: Sector;
  /** Level title for higher education, e.g. "Undergraduate". Empty for VET. */
  levelTitle: string;
  levelSlug: string;
  /** Where the course is listed, for the breadcrumb back. */
  listHref: string;
};

/** Trailing national code, e.g. "(CPC30220)". */
const CODE = /\(([A-Z]{2,4}\d{4,6}[A-Z]?)\)\s*$/;

export function courseSlug(name: string): string {
  const code = name.match(CODE)?.[1];
  const base = name
    .replace(CODE, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return code ? `${base}-${code.toLowerCase()}` : base;
}

function build(): CatalogCourse[] {
  const out: CatalogCourse[] = [];

  for (const level of levels) {
    for (const c of level.courses) {
      out.push({
        ...c,
        slug: courseSlug(c.name),
        sector: "Higher education",
        levelTitle: level.title,
        levelSlug: level.slug,
        listHref: `/services/higher-education/${level.slug}`,
      });
    }
  }

  for (const c of vetCourses) {
    out.push({
      ...c,
      slug: courseSlug(c.name),
      sector: "Vocational",
      levelTitle: "",
      levelSlug: "",
      listHref: "/services/short-courses",
    });
  }

  // A slug collision would silently make one course unreachable, so the
  // duplicate is suffixed rather than left to overwrite.
  const seen = new Map<string, number>();
  for (const c of out) {
    const n = seen.get(c.slug) ?? 0;
    seen.set(c.slug, n + 1);
    if (n > 0) c.slug = `${c.slug}-${n + 1}`;
  }

  return out;
}

export const catalog: CatalogCourse[] = build();

export function getCourse(slug: string) {
  return catalog.find((c) => c.slug === slug);
}

/** Other courses in the same study area, for the "related" strip. */
export function relatedCourses(course: CatalogCourse, limit = 3) {
  return catalog
    .filter((c) => c.slug !== course.slug && c.field === course.field)
    .slice(0, limit);
}

// ---------------------------------------------------------------------------
// Study-area detail. Careers are the lists that were published on the PR
// pathway pages before it was removed, plus the career sections printed in the
// provider brochures the courses came from. They describe the field, not one
// course, which is why they sit here rather than on each entry.
// ---------------------------------------------------------------------------

export type FieldInfo = {
  blurb: string;
  careers: string[];
};

export const FIELD_INFO: Record<string, FieldInfo> = {
  "Construction & Trades": {
    blurb:
      "Licensed and trade qualifications across residential and commercial building. Most combine classroom training with supervised work on real sites, and several lead to a licence that is issued state by state.",
    careers: [
      "Carpenter or joiner",
      "Plumber or roof plumber",
      "Bricklayer, plasterer, tiler or concreter",
      "Painter and decorator",
      "Cabinet maker",
      "Glazier",
      "Construction supervisor or site manager (with further study)",
      "Self-employed tradesperson or contractor",
    ],
  },
  "Electrical & Refrigeration": {
    blurb:
      "Electrotechnology trades covering installation, testing, fault finding and maintenance. The refrigeration qualification also covers the training component of the national Refrigerant Handling Licence.",
    careers: [
      "Electrician",
      "Instrumentation and control technician",
      "Refrigeration and air conditioning mechanic",
      "Maintenance technician",
      "Self-employed contractor",
    ],
  },
  "Engineering & Fabrication": {
    blurb:
      "Metal trades and para-professional engineering, from cutting and welding through to the technician qualifications that carry credit into an engineering degree.",
    careers: [
      "Boilermaker, welder, fabricator or sheetmetal worker",
      "Fitter and turner or maintenance fitter",
      "Engineering technician or technical officer",
      "Production or workshop supervisor",
    ],
  },
  Automotive: {
    blurb:
      "Diagnosing, servicing and repairing vehicles, from light passenger cars through to heavy commercial vehicles and vehicle electrical systems.",
    careers: [
      "Automotive mechanic",
      "Heavy vehicle mechanic",
      "Auto electrician",
      "Service adviser or workshop supervisor",
    ],
  },
  "Hospitality & Cookery": {
    blurb:
      "Commercial kitchen and front-of-house qualifications. Cookery and patisserie certificates include supervised service hours, and the management qualifications build on them rather than replacing them.",
    careers: [
      "Commercial cook",
      "Chef or chef de partie",
      "Pastry chef (patissier)",
      "Sous chef or head chef",
      "Restaurant or cafe manager",
      "Food and beverage supervisor",
      "Hotel or hospitality manager",
    ],
  },
  "Hotel Management": {
    blurb:
      "Hotel and tourism management, taught through business subjects with an industry placement, and delivered from diploma level through to a masters.",
    careers: [
      "Front office or guest services manager",
      "Hotel operations manager",
      "Revenue or reservations manager",
      "Events and conferencing manager",
      "Tourism operations manager",
    ],
  },
  "Health & Community Care": {
    blurb:
      "Care sector qualifications across ageing, disability, mental health and community services. All of them include supervised work placement, from 80 hours up to 400.",
    careers: [
      "Personal care assistant or support worker",
      "Disability support worker",
      "Residential care officer",
      "Mental health outreach or peer worker",
      "Community services worker",
      "Case manager or coordinator",
    ],
  },
  Health: {
    blurb:
      "Degree-level health study, including the qualifications that lead to professional registration. Registration bodies set their own English standard on top of the provider's, and it is usually higher.",
    careers: [
      "Registered Nurse",
      "Midwife",
      "Occupational therapist",
      "Speech pathologist",
      "Exercise physiologist",
      "Social worker",
      "Counsellor",
    ],
  },
  "Early Childhood Education": {
    blurb:
      "Vocational qualifications for working in early childhood and school age care. The certificate is the entry point and the diploma builds on it, with the certificate usually a prerequisite.",
    careers: [
      "Early childhood educator",
      "Room leader or lead educator",
      "Centre director or coordinator",
      "Education support worker or teacher's aide",
      "Outside school hours care coordinator",
      "Family day care educator",
    ],
  },
  "Education & Teaching": {
    blurb:
      "Degree and postgraduate routes into teacher registration. Teacher registration authorities set an English standard separate from the university's, so both need checking before you apply.",
    careers: [
      "Early childhood teacher",
      "Primary school teacher",
      "Secondary school teacher",
      "Curriculum or learning support specialist",
    ],
  },
  "Computing & IT": {
    blurb:
      "Information technology from diploma through to masters, including cybersecurity and networking specialisations. Several of these map to occupations on the skilled lists.",
    careers: [
      "Software engineer or developer",
      "Cybersecurity analyst",
      "Network or systems administrator",
      "Business or systems analyst",
      "IT support engineer",
      "IT manager",
    ],
  },
  Engineering: {
    blurb:
      "Accredited engineering degrees, usually four years at undergraduate level because they are honours degrees, with civil and mechanical the most commonly offered specialisations.",
    careers: [
      "Civil engineer",
      "Mechanical engineer",
      "Project engineer",
      "Design engineer",
      "Engineering project manager",
    ],
  },
  Business: {
    blurb:
      "Business, accounting and management study across every level, from a vocational diploma through to an MBA. Accounting qualifications are commonly accredited by the professional bodies.",
    careers: [
      "Accountant",
      "Business analyst",
      "Business development manager",
      "Operations manager",
      "Marketing or sales manager",
      "Human resource manager",
      "General manager",
    ],
  },
  Law: {
    blurb:
      "Law and paralegal study. A law degree alone does not admit you to practise in Australia; practical legal training follows the degree and is assessed separately.",
    careers: [
      "Paralegal or law clerk",
      "Conveyancer",
      "Legal and justice studies roles",
      "Policy or compliance officer",
      "Solicitor (after practical legal training and admission)",
    ],
  },
  Science: {
    blurb:
      "Science degrees with majors ranging from environmental and marine science through to biomedical and veterinary technology.",
    careers: [
      "Laboratory or research technician",
      "Environmental scientist",
      "Marine scientist",
      "Veterinary technologist",
      "Science communicator or educator",
    ],
  },
  Security: {
    blurb:
      "Short security qualifications. In Victoria, the Licensing and Regulation Division recognises overseas-student security training only where the course is from an approved RTO and CRICOS registered, and visa work-hour limits still apply once licensed.",
    careers: [
      "Security officer or guard",
      "Crowd controller",
      "Control room operator",
      "Loss prevention officer",
    ],
  },
};

// ---------------------------------------------------------------------------
// Course photography. Listed explicitly rather than probed from disk, because
// the card renders inside a client component and cannot read the filesystem.
// A course without an entry here falls back to its study area illustration,
// so the two can coexist and photos can arrive a few at a time.
// ---------------------------------------------------------------------------
export const COURSE_PHOTOS = new Set<string>([
  "bachelor-of-business",
  "bachelor-of-education",
  "bachelor-of-nursing",
  "bachelor-of-psychological-science",
  "bachelor-of-speech-pathology",
]);

export function coursePhoto(slug?: string): string | null {
  return slug && COURSE_PHOTOS.has(slug) ? `/images/courses/${slug}.jpg` : null;
}

export function fieldInfo(field?: Field | string): FieldInfo | undefined {
  return field ? FIELD_INFO[field] : undefined;
}
