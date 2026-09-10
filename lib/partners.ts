// Partner institutions, shared by the homepage carousel and /partners.
// `url` is the institution's official homepage; links open in a new tab.

export type Institution = {
  slug: string;
  name: string;
  meta: string;
  url: string;
  /**
   * How Edmark reaches this institution. Some placements are direct; others
   * run through a partner agency that holds the agreement. The site does not
   * say which is which, because a student's outcome does not turn on it — what
   * matters is that Edmark is the agent and the institution is the provider.
   */
  relationship: "direct" | "sub-partnered";
  /**
   * Written permission from the institution to display its logo.
   *
   * False on every entry. A logo is a trade mark, and displaying one implies
   * an endorsement the institution has not given us in writing. The files stay
   * on disk; nothing renders them until this is true, and it is set by hand
   * against a document, never by a script.
   */
  logoLicensed: boolean;
  /** Logo file under /images/partners, whether or not it is licensed to show. */
  logoAsset: string | null;
};

// Order is deliberate: this is the sequence they appear in on the homepage
// carousel and /partners, so the first three lead the first slide.
export const universities: Institution[] = [
  { slug: "rmit", name: "RMIT University", meta: "Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "rmit.png", url: "https://www.rmit.edu.au" },
  { slug: "swinburne", name: "Swinburne University of Technology", meta: "Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "swinburne.png", url: "https://www.swinburne.edu.au" },
  { slug: "latrobe", name: "La Trobe University", meta: "Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "latrobe.png", url: "https://www.latrobe.edu.au" },
  { slug: "vu", name: "Victoria University", meta: "Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "vu.png", url: "https://www.vu.edu.au" },
  { slug: "federation", name: "Federation University", meta: "Ballarat / Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "federation.png", url: "https://federation.edu.au" },
  { slug: "deakin", name: "Deakin University", meta: "Geelong / Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "deakin.png", url: "https://www.deakin.edu.au" },
  { slug: "acu", name: "Australian Catholic University", meta: "Melbourne, VIC · multiple campuses", relationship: "sub-partnered", logoLicensed: false, logoAsset: "acu.png", url: "https://www.acu.edu.au" },
  { slug: "cqu", name: "CQUniversity Melbourne", meta: "Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "cqu.png", url: "https://www.cqu.edu.au" },
  { slug: "torrens", name: "Torrens University", meta: "Melbourne, VIC · multiple campuses", relationship: "sub-partnered", logoLicensed: false, logoAsset: "torrens.png", url: "https://www.torrens.edu.au" },
  { slug: "utas", name: "University of Tasmania", meta: "Hobart, TAS", relationship: "sub-partnered", logoLicensed: false, logoAsset: "utas.png", url: "https://www.utas.edu.au" },
  { slug: "cdu", name: "Charles Darwin University", meta: "Darwin, NT", relationship: "sub-partnered", logoLicensed: false, logoAsset: "cdu.png", url: "https://www.cdu.edu.au" },
  { slug: "southerncross", name: "Southern Cross University", meta: "Gold Coast, NSW · Sydney & Melbourne campuses", relationship: "sub-partnered", logoLicensed: false, logoAsset: "southerncross.png", url: "https://www.scu.edu.au" },
];

export const tafes: Institution[] = [
  { slug: "melbournepoly", name: "Melbourne Polytechnic", meta: "Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "melbournepoly.png", url: "https://www.melbournepolytechnic.edu.au" },
  { slug: "holmesglen", name: "Holmesglen Institute", meta: "Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "holmesglen.png", url: "https://holmesglen.edu.au" },
  { slug: "boxhill", name: "Box Hill Institute", meta: "Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "boxhill.png", url: "https://www.boxhill.edu.au" },
  { slug: "kangan", name: "Kangan Institute", meta: "Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "kangan.png", url: "https://www.kangan.edu.au" },
  { slug: "angliss", name: "William Angliss Institute", meta: "Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "angliss.png", url: "https://www.angliss.edu.au" },
];

export const colleges: Institution[] = [
  { slug: "pia", name: "Polytechnic Institute Australia (PIA)", meta: "Sydney, NSW", relationship: "sub-partnered", logoLicensed: false, logoAsset: "pia.png", url: "https://www.pia.edu.au" },
  { slug: "aahe", name: "Australasian Academy of Higher Education (AAHE)", meta: "CRICOS 04181B", relationship: "sub-partnered", logoLicensed: false, logoAsset: "aahe.png", url: "https://aahe.edu.au" },
  { slug: "vit", name: "Victorian Institute of Technology (VIT)", meta: "Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "vit.png", url: "https://vit.edu.au" },
  { slug: "sistc", name: "Sydney International School of Technology and Commerce (SISTC)", meta: "Sydney, NSW", relationship: "sub-partnered", logoLicensed: false, logoAsset: "sistc.png", url: "https://sistc.edu.au" },
  { slug: "kaplan", name: "Kaplan Business School", meta: "Multiple campuses", relationship: "sub-partnered", logoLicensed: false, logoAsset: "kaplan.png", url: "https://www.kbs.edu.au" },
  { slug: "holmes", name: "Holmes Institute", meta: "Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "holmes.png", url: "https://www.holmes.edu.au" },
  { slug: "mit", name: "Melbourne Institute of Technology (MIT)", meta: "Melbourne & Sydney", relationship: "sub-partnered", logoLicensed: false, logoAsset: "mit.png", url: "https://www.mit.edu.au" },
  { slug: "icv", name: "International College of Victoria (ICV)", meta: "West Melbourne, VIC · RTO 22581", relationship: "sub-partnered", logoLicensed: false, logoAsset: "icv.png", url: "https://www.icv.edu.au" },
  { slug: "mihe", name: "Melbourne Institute of Higher Education (MIHE)", meta: "Preston & Melbourne, VIC", relationship: "sub-partnered", logoLicensed: false, logoAsset: "mihe.png", url: "https://www.mihe.vic.edu.au" },
  { slug: "jti", name: "Job Training Institute (JTI)", meta: "Melbourne, VIC · RTO 122208", relationship: "sub-partnered", logoLicensed: false, logoAsset: "jti.png", url: "https://www.jti.edu.au" },
];

// ---------------------------------------------------------------------------
// Overseas Student Health Cover. Only five providers are government approved
// for a subclass 500 visa. CBHS left the OSHC market in October 2025 and is
// deliberately not listed. Providers without a logo file render as name cards
// until one is added and hasLogo is set.
// ---------------------------------------------------------------------------
export const oshcProviders: Institution[] = [
  { slug: "ahm", name: "ahm OSHC", meta: "Government approved OSHC provider", relationship: "sub-partnered", logoLicensed: false, logoAsset: "ahm.png", url: "https://www.ahm.com.au" },
  { slug: "allianzcare", name: "Allianz Care Australia", meta: "Government approved OSHC provider", relationship: "sub-partnered", logoLicensed: false, logoAsset: "allianzcare.png", url: "https://www.allianzcare.com.au" },
  { slug: "bupa", name: "Bupa", meta: "Government approved OSHC provider", relationship: "sub-partnered", logoLicensed: false, logoAsset: "bupa.png", url: "https://www.bupa.com.au" },
  { slug: "medibank", name: "Medibank", meta: "Government approved OSHC provider", relationship: "sub-partnered", logoLicensed: false, logoAsset: "medibank.png", url: "https://www.medibank.com.au" },
  { slug: "nib", name: "nib", meta: "Government approved OSHC provider", relationship: "sub-partnered", logoLicensed: false, logoAsset: "nib.png", url: "https://www.nib.com.au" },
];

export const allInstitutions: Institution[] = [
  ...universities,
  ...colleges,
  ...tafes,
];

/**
 * How many institutions are listed, counted from the list itself.
 *
 * The FAQ used to claim "over 50 institutions" against 27 on the page. Nobody
 * had lied on purpose; the number was typed once and the list changed
 * underneath it. Deriving it means the claim cannot be wrong, because there is
 * no separate claim to be wrong.
 *
 * OSHC providers are excluded: they insure students, they do not teach them.
 */
export const institutionCount =
  universities.length + tafes.length + colleges.length;
