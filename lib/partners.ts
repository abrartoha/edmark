// Partner institutions, shared by the homepage logo wall and /partners.
// `url` is the institution's official homepage; links open in a new tab.

export type Institution = {
  slug: string;
  name: string;
  meta: string;
  url: string;
};

export const universities: Institution[] = [
  { slug: "unimelb", name: "University of Melbourne", meta: "Go8 · Melbourne, VIC", url: "https://www.unimelb.edu.au" },
  { slug: "monash", name: "Monash University", meta: "Go8 · Melbourne, VIC", url: "https://www.monash.edu" },
  { slug: "sydney", name: "University of Sydney", meta: "Go8 · Sydney, NSW", url: "https://www.sydney.edu.au" },
  { slug: "unsw", name: "UNSW Sydney", meta: "Go8 · Sydney, NSW", url: "https://www.unsw.edu.au" },
  { slug: "uq", name: "University of Queensland", meta: "Go8 · Brisbane, QLD", url: "https://www.uq.edu.au" },
  { slug: "anu", name: "Australian National University", meta: "Go8 · Canberra, ACT", url: "https://www.anu.edu.au" },
  { slug: "adelaide", name: "University of Adelaide", meta: "Go8 · Adelaide, SA", url: "https://www.adelaide.edu.au" },
  { slug: "uwa", name: "University of Western Australia", meta: "Go8 · Perth, WA", url: "https://www.uwa.edu.au" },
  { slug: "rmit", name: "RMIT University", meta: "Melbourne, VIC", url: "https://www.rmit.edu.au" },
  { slug: "deakin", name: "Deakin University", meta: "Geelong / Melbourne, VIC", url: "https://www.deakin.edu.au" },
  { slug: "swinburne", name: "Swinburne University of Technology", meta: "Melbourne, VIC", url: "https://www.swinburne.edu.au" },
  { slug: "latrobe", name: "La Trobe University", meta: "Melbourne, VIC", url: "https://www.latrobe.edu.au" },
  { slug: "vu", name: "Victoria University", meta: "Melbourne, VIC", url: "https://www.vu.edu.au" },
  { slug: "federation", name: "Federation University", meta: "Ballarat, VIC", url: "https://federation.edu.au" },
  { slug: "uts", name: "University of Technology Sydney", meta: "Sydney, NSW", url: "https://www.uts.edu.au" },
  { slug: "macquarie", name: "Macquarie University", meta: "Sydney, NSW", url: "https://www.mq.edu.au" },
  { slug: "westernsydney", name: "Western Sydney University", meta: "Sydney, NSW", url: "https://www.westernsydney.edu.au" },
  { slug: "newcastle", name: "University of Newcastle", meta: "Newcastle, NSW", url: "https://www.newcastle.edu.au" },
  { slug: "uow", name: "University of Wollongong", meta: "Wollongong, NSW", url: "https://www.uow.edu.au" },
  { slug: "csu", name: "Charles Sturt University", meta: "Bathurst, NSW", url: "https://www.csu.edu.au" },
  { slug: "scu", name: "Southern Cross University", meta: "Lismore, NSW", url: "https://www.scu.edu.au" },
  { slug: "une", name: "University of New England", meta: "Armidale, NSW", url: "https://www.une.edu.au" },
  { slug: "acu", name: "Australian Catholic University", meta: "Multiple campuses", url: "https://www.acu.edu.au" },
  { slug: "canberra", name: "University of Canberra", meta: "Canberra, ACT", url: "https://www.canberra.edu.au" },
  { slug: "cdu", name: "Charles Darwin University", meta: "Darwin, NT", url: "https://www.cdu.edu.au" },
  { slug: "flinders", name: "Flinders University", meta: "Adelaide, SA", url: "https://www.flinders.edu.au" },
  { slug: "unisa", name: "University of South Australia", meta: "Adelaide, SA", url: "https://www.unisa.edu.au" },
  { slug: "utas", name: "University of Tasmania", meta: "Hobart, TAS", url: "https://www.utas.edu.au" },
  { slug: "qut", name: "Queensland University of Technology", meta: "Brisbane, QLD", url: "https://www.qut.edu.au" },
  { slug: "griffith", name: "Griffith University", meta: "Brisbane / Gold Coast, QLD", url: "https://www.griffith.edu.au" },
  { slug: "jcu", name: "James Cook University", meta: "Townsville, QLD", url: "https://www.jcu.edu.au" },
  { slug: "usq", name: "University of Southern Queensland", meta: "Toowoomba, QLD", url: "https://www.unisq.edu.au" },
  { slug: "usc", name: "University of the Sunshine Coast", meta: "Sunshine Coast, QLD", url: "https://www.usc.edu.au" },
  { slug: "cqu", name: "CQUniversity", meta: "Rockhampton, QLD", url: "https://www.cqu.edu.au" },
  { slug: "bond", name: "Bond University", meta: "Gold Coast, QLD", url: "https://bond.edu.au" },
  { slug: "torrens", name: "Torrens University Australia", meta: "Multiple campuses", url: "https://www.torrens.edu.au" },
  { slug: "ecu", name: "Edith Cowan University", meta: "Perth, WA", url: "https://www.ecu.edu.au" },
  { slug: "curtin", name: "Curtin University", meta: "Perth, WA", url: "https://www.curtin.edu.au" },
  { slug: "murdoch", name: "Murdoch University", meta: "Perth, WA", url: "https://www.murdoch.edu.au" },
  { slug: "notredame", name: "University of Notre Dame Australia", meta: "Fremantle, WA", url: "https://www.notredame.edu.au" },
];

export const colleges: Institution[] = [
  { slug: "kaplan", name: "Kaplan Business School", meta: "Multiple campuses", url: "https://www.kbs.edu.au" },
  { slug: "mit", name: "Melbourne Institute of Technology", meta: "Melbourne, VIC", url: "https://www.mit.edu.au" },
  { slug: "vit", name: "Victorian Institute of Technology", meta: "Melbourne, VIC", url: "https://vit.edu.au" },
  { slug: "holmes", name: "Holmes Institute", meta: "Melbourne, VIC", url: "https://www.holmes.edu.au" },
  { slug: "koi", name: "King's Own Institute", meta: "Sydney, NSW", url: "https://www.koi.edu.au" },
  { slug: "navitas", name: "Navitas", meta: "Pathway provider", url: "https://www.navitas.com" },
  { slug: "deakincollege", name: "Deakin College", meta: "Pathway · Melbourne, VIC", url: "https://www.deakincollege.edu.au" },
  { slug: "monashcollege", name: "Monash College", meta: "Pathway · Melbourne, VIC", url: "https://www.monashcollege.edu.au" },
  { slug: "utscollege", name: "UTS College", meta: "Pathway · Sydney, NSW", url: "https://www.utscollege.edu.au" },
];

export const tafes: Institution[] = [
  { slug: "melbournepoly", name: "Melbourne Polytechnic", meta: "Melbourne, VIC", url: "https://www.melbournepolytechnic.edu.au" },
  { slug: "holmesglen", name: "Holmesglen Institute", meta: "Melbourne, VIC", url: "https://holmesglen.edu.au" },
  { slug: "boxhill", name: "Box Hill Institute", meta: "Melbourne, VIC", url: "https://www.boxhill.edu.au" },
  { slug: "chisholm", name: "Chisholm Institute", meta: "Melbourne, VIC", url: "https://www.chisholm.edu.au" },
  { slug: "tafensw", name: "TAFE NSW", meta: "Sydney, NSW", url: "https://www.tafensw.edu.au" },
  { slug: "tafeqld", name: "TAFE Queensland", meta: "Brisbane, QLD", url: "https://tafeqld.edu.au" },
  { slug: "tafesa", name: "TAFE SA", meta: "Adelaide, SA", url: "https://www.tafesa.edu.au" },
  { slug: "tastafe", name: "TasTAFE", meta: "Hobart, TAS", url: "https://www.tastafe.tas.edu.au" },
  { slug: "cit", name: "Canberra Institute of Technology", meta: "Canberra, ACT", url: "https://cit.edu.au" },
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
