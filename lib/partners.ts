// Partner institutions, shared by the homepage carousel and /partners.
// `url` is the institution's official homepage; links open in a new tab.

export type Institution = {
  slug: string;
  name: string;
  meta: string;
  url: string;
  /**
   * Set once a logo file exists at public/images/partners/<slug>.png.
   * Entries without one render as a name card instead of a broken image.
   */
  hasLogo?: boolean;
};

export const universities: Institution[] = [
  { slug: "vu", name: "Victoria University", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.vu.edu.au" },
  { slug: "federation", name: "Federation University", meta: "Ballarat / Melbourne, VIC", hasLogo: true, url: "https://federation.edu.au" },
  { slug: "latrobe", name: "La Trobe University", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.latrobe.edu.au" },
  { slug: "deakin", name: "Deakin University", meta: "Geelong / Melbourne, VIC", hasLogo: true, url: "https://www.deakin.edu.au" },
  { slug: "swinburne", name: "Swinburne University of Technology", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.swinburne.edu.au" },
  { slug: "rmit", name: "RMIT University", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.rmit.edu.au" },
  { slug: "acu", name: "Australian Catholic University", meta: "Melbourne, VIC · multiple campuses", hasLogo: true, url: "https://www.acu.edu.au" },
  { slug: "cqu", name: "CQUniversity Melbourne", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.cqu.edu.au" },
  { slug: "torrens", name: "Torrens University", meta: "Melbourne, VIC · multiple campuses", hasLogo: true, url: "https://www.torrens.edu.au" },
  { slug: "utas", name: "University of Tasmania", meta: "Hobart, TAS", hasLogo: true, url: "https://www.utas.edu.au" },
  { slug: "cdu", name: "Charles Darwin University", meta: "Darwin, NT", hasLogo: true, url: "https://www.cdu.edu.au" },
];

export const tafes: Institution[] = [
  { slug: "melbournepoly", name: "Melbourne Polytechnic", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.melbournepolytechnic.edu.au" },
  { slug: "holmesglen", name: "Holmesglen Institute", meta: "Melbourne, VIC", hasLogo: true, url: "https://holmesglen.edu.au" },
  { slug: "boxhill", name: "Box Hill Institute", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.boxhill.edu.au" },
  { slug: "kangan", name: "Kangan Institute", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.kangan.edu.au" },
  { slug: "angliss", name: "William Angliss Institute", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.angliss.edu.au" },
];

export const colleges: Institution[] = [
  { slug: "pia", name: "Polytechnic Institute Australia (PIA)", meta: "Sydney, NSW", hasLogo: true, url: "https://www.pia.edu.au" },
  { slug: "aahe", name: "Australasian Academy of Higher Education (AAHE)", meta: "CRICOS 04181B", hasLogo: true, url: "https://aahe.edu.au" },
  { slug: "vit", name: "Victorian Institute of Technology (VIT)", meta: "Melbourne, VIC", hasLogo: true, url: "https://vit.edu.au" },
  { slug: "sistc", name: "Sydney International School of Technology and Commerce (SISTC)", meta: "Sydney, NSW", hasLogo: true, url: "https://sistc.edu.au" },
  { slug: "kaplan", name: "Kaplan Business School", meta: "Multiple campuses", hasLogo: true, url: "https://www.kbs.edu.au" },
  { slug: "holmes", name: "Holmes Institute", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.holmes.edu.au" },
  { slug: "mit", name: "Melbourne Institute of Technology (MIT)", meta: "Melbourne & Sydney", hasLogo: true, url: "https://www.mit.edu.au" },
];

// ---------------------------------------------------------------------------
// Overseas Student Health Cover. Only five providers are government approved
// for a subclass 500 visa. CBHS left the OSHC market in October 2025 and is
// deliberately not listed. Providers without a logo file render as name cards
// until one is added and hasLogo is set.
// ---------------------------------------------------------------------------
export const oshcProviders: Institution[] = [
  { slug: "ahm", name: "ahm OSHC", meta: "Government approved OSHC provider", hasLogo: true, url: "https://www.ahm.com.au" },
  { slug: "allianzcare", name: "Allianz Care Australia", meta: "Government approved OSHC provider", hasLogo: true, url: "https://www.allianzcare.com.au" },
  { slug: "bupa", name: "Bupa", meta: "Government approved OSHC provider", hasLogo: true, url: "https://www.bupa.com.au" },
  { slug: "medibank", name: "Medibank", meta: "Government approved OSHC provider", hasLogo: true, url: "https://www.medibank.com.au" },
  { slug: "nib", name: "nib", meta: "Government approved OSHC provider", hasLogo: true, url: "https://www.nib.com.au" },
];

export const allInstitutions: Institution[] = [
  ...universities,
  ...colleges,
  ...tafes,
];
