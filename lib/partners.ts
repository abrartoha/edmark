// Partner institutions, shared by the homepage logo wall and /partners.
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
  { slug: "unimelb", name: "University of Melbourne", meta: "Go8 · Melbourne, VIC", hasLogo: true, url: "https://www.unimelb.edu.au" },
  { slug: "monash", name: "Monash University", meta: "Go8 · Melbourne, VIC", hasLogo: true, url: "https://www.monash.edu" },
  { slug: "sydney", name: "University of Sydney", meta: "Go8 · Sydney, NSW", hasLogo: true, url: "https://www.sydney.edu.au" },
  { slug: "unsw", name: "UNSW Sydney", meta: "Go8 · Sydney, NSW", hasLogo: true, url: "https://www.unsw.edu.au" },
  { slug: "uq", name: "University of Queensland", meta: "Go8 · Brisbane, QLD", hasLogo: true, url: "https://www.uq.edu.au" },
  { slug: "anu", name: "Australian National University", meta: "Go8 · Canberra, ACT", hasLogo: true, url: "https://www.anu.edu.au" },
  { slug: "adelaide", name: "University of Adelaide", meta: "Go8 · Adelaide, SA", hasLogo: true, url: "https://www.adelaide.edu.au" },
  { slug: "uwa", name: "University of Western Australia", meta: "Go8 · Perth, WA", hasLogo: true, url: "https://www.uwa.edu.au" },
  { slug: "rmit", name: "RMIT University", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.rmit.edu.au" },
  { slug: "deakin", name: "Deakin University", meta: "Geelong / Melbourne, VIC", hasLogo: true, url: "https://www.deakin.edu.au" },
  { slug: "swinburne", name: "Swinburne University of Technology", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.swinburne.edu.au" },
  { slug: "latrobe", name: "La Trobe University", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.latrobe.edu.au" },
  { slug: "vu", name: "Victoria University", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.vu.edu.au" },
  { slug: "federation", name: "Federation University", meta: "Ballarat, VIC", hasLogo: true, url: "https://federation.edu.au" },
  { slug: "uts", name: "University of Technology Sydney", meta: "Sydney, NSW", hasLogo: true, url: "https://www.uts.edu.au" },
  { slug: "macquarie", name: "Macquarie University", meta: "Sydney, NSW", hasLogo: true, url: "https://www.mq.edu.au" },
  { slug: "westernsydney", name: "Western Sydney University", meta: "Sydney, NSW", hasLogo: true, url: "https://www.westernsydney.edu.au" },
  { slug: "newcastle", name: "University of Newcastle", meta: "Newcastle, NSW", hasLogo: true, url: "https://www.newcastle.edu.au" },
  { slug: "uow", name: "University of Wollongong", meta: "Wollongong, NSW", hasLogo: true, url: "https://www.uow.edu.au" },
  { slug: "csu", name: "Charles Sturt University", meta: "Bathurst, NSW", hasLogo: true, url: "https://www.csu.edu.au" },
  { slug: "scu", name: "Southern Cross University", meta: "Lismore, NSW", hasLogo: true, url: "https://www.scu.edu.au" },
  { slug: "une", name: "University of New England", meta: "Armidale, NSW", hasLogo: true, url: "https://www.une.edu.au" },
  { slug: "acu", name: "Australian Catholic University", meta: "Multiple campuses", hasLogo: true, url: "https://www.acu.edu.au" },
  { slug: "canberra", name: "University of Canberra", meta: "Canberra, ACT", hasLogo: true, url: "https://www.canberra.edu.au" },
  { slug: "cdu", name: "Charles Darwin University", meta: "Darwin, NT", hasLogo: true, url: "https://www.cdu.edu.au" },
  { slug: "flinders", name: "Flinders University", meta: "Adelaide, SA", hasLogo: true, url: "https://www.flinders.edu.au" },
  { slug: "unisa", name: "University of South Australia", meta: "Adelaide, SA", hasLogo: true, url: "https://www.unisa.edu.au" },
  { slug: "utas", name: "University of Tasmania", meta: "Hobart, TAS", hasLogo: true, url: "https://www.utas.edu.au" },
  { slug: "qut", name: "Queensland University of Technology", meta: "Brisbane, QLD", hasLogo: true, url: "https://www.qut.edu.au" },
  { slug: "griffith", name: "Griffith University", meta: "Brisbane / Gold Coast, QLD", hasLogo: true, url: "https://www.griffith.edu.au" },
  { slug: "jcu", name: "James Cook University", meta: "Townsville, QLD", hasLogo: true, url: "https://www.jcu.edu.au" },
  { slug: "usq", name: "University of Southern Queensland", meta: "Toowoomba, QLD", hasLogo: true, url: "https://www.unisq.edu.au" },
  { slug: "usc", name: "University of the Sunshine Coast", meta: "Sunshine Coast, QLD", hasLogo: true, url: "https://www.usc.edu.au" },
  { slug: "cqu", name: "CQUniversity", meta: "Rockhampton, QLD", hasLogo: true, url: "https://www.cqu.edu.au" },
  { slug: "bond", name: "Bond University", meta: "Gold Coast, QLD", hasLogo: true, url: "https://bond.edu.au" },
  { slug: "torrens", name: "Torrens University Australia", meta: "Multiple campuses", hasLogo: true, url: "https://www.torrens.edu.au" },
  { slug: "ecu", name: "Edith Cowan University", meta: "Perth, WA", hasLogo: true, url: "https://www.ecu.edu.au" },
  { slug: "curtin", name: "Curtin University", meta: "Perth, WA", hasLogo: true, url: "https://www.curtin.edu.au" },
  { slug: "murdoch", name: "Murdoch University", meta: "Perth, WA", hasLogo: true, url: "https://www.murdoch.edu.au" },
  { slug: "notredame", name: "University of Notre Dame Australia", meta: "Fremantle, WA", hasLogo: true, url: "https://www.notredame.edu.au" },
];

export const colleges: Institution[] = [
  { slug: "kaplan", name: "Kaplan Business School", meta: "Multiple campuses", hasLogo: true, url: "https://www.kbs.edu.au" },
  { slug: "mit", name: "Melbourne Institute of Technology", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.mit.edu.au" },
  { slug: "vit", name: "Victorian Institute of Technology", meta: "Melbourne, VIC", hasLogo: true, url: "https://vit.edu.au" },
  { slug: "holmes", name: "Holmes Institute", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.holmes.edu.au" },
  { slug: "koi", name: "King's Own Institute", meta: "Sydney, NSW", hasLogo: true, url: "https://www.koi.edu.au" },
  { slug: "navitas", name: "Navitas", meta: "Pathway provider", hasLogo: true, url: "https://www.navitas.com" },
  { slug: "deakincollege", name: "Deakin College", meta: "Pathway · Melbourne, VIC", hasLogo: true, url: "https://www.deakincollege.edu.au" },
  { slug: "monashcollege", name: "Monash College", meta: "Pathway · Melbourne, VIC", hasLogo: true, url: "https://www.monashcollege.edu.au" },
  { slug: "utscollege", name: "UTS College", meta: "Pathway · Sydney, NSW", hasLogo: true, url: "https://www.utscollege.edu.au" },
];

export const tafes: Institution[] = [
  { slug: "melbournepoly", name: "Melbourne Polytechnic", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.melbournepolytechnic.edu.au" },
  { slug: "holmesglen", name: "Holmesglen Institute", meta: "Melbourne, VIC", hasLogo: true, url: "https://holmesglen.edu.au" },
  { slug: "boxhill", name: "Box Hill Institute", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.boxhill.edu.au" },
  { slug: "chisholm", name: "Chisholm Institute", meta: "Melbourne, VIC", hasLogo: true, url: "https://www.chisholm.edu.au" },
  { slug: "tafensw", name: "TAFE NSW", meta: "Sydney, NSW", hasLogo: true, url: "https://www.tafensw.edu.au" },
  { slug: "tafeqld", name: "TAFE Queensland", meta: "Brisbane, QLD", hasLogo: true, url: "https://tafeqld.edu.au" },
  { slug: "tafesa", name: "TAFE SA", meta: "Adelaide, SA", hasLogo: true, url: "https://www.tafesa.edu.au" },
  { slug: "tastafe", name: "TasTAFE", meta: "Hobart, TAS", hasLogo: true, url: "https://www.tastafe.tas.edu.au" },
  { slug: "cit", name: "Canberra Institute of Technology", meta: "Canberra, ACT", hasLogo: true, url: "https://cit.edu.au" },
];


// ---------------------------------------------------------------------------
// Overseas Student Health Cover. Only five providers are government approved
// for a subclass 500 visa. CBHS left the OSHC market in October 2025 and is
// deliberately not listed. None of these have a logo file yet, so they render
// as name cards until one is added and hasLogo is set.
// ---------------------------------------------------------------------------
export const oshcProviders: Institution[] = [
  { slug: "ahm", name: "ahm OSHC", meta: "Government approved OSHC provider", url: "https://www.ahm.com.au" },
  { slug: "allianzcare", name: "Allianz Care Australia", meta: "Government approved OSHC provider", url: "https://www.allianzcare.com.au" },
  { slug: "bupa", name: "Bupa", meta: "Government approved OSHC provider", url: "https://www.bupa.com.au" },
  { slug: "medibank", name: "Medibank", meta: "Government approved OSHC provider", url: "https://www.medibank.com.au" },
  { slug: "nib", name: "nib", meta: "Government approved OSHC provider", url: "https://www.nib.com.au" },
];

export const allInstitutions: Institution[] = [
  ...universities,
  ...colleges,
  ...tafes,
];

// Shown on the homepage wall. The rest are on /partners.
const featuredSlugs = [
  "unimelb", "monash", "sydney", "unsw", "uq",
  "anu", "adelaide", "uwa", "rmit", "deakin",
  "swinburne", "latrobe", "uts", "griffith", "curtin",
  "qut", "melbournepoly", "tafensw", "kaplan", "navitas",
];

export const featuredInstitutions: Institution[] = featuredSlugs.map((s) => {
  const found = allInstitutions.find((i) => i.slug === s);
  if (!found) throw new Error(`Unknown partner slug: ${s}`);
  return found;
});
