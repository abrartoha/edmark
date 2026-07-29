// PR Pathway course categories. Course codes are nationally recognised
// training-package codes (public data from training.gov.au). Descriptions are
// original. Skilled occupation lists change frequently, so formal migration
// advice must come from a registered migration agent (MARA).

import type { Service } from "./content";

export type Course = {
  name: string;
  code?: string;
  description: string;
};

export type PrCategory = {
  slug: string;
  title: string;
  icon: Service["icon"];
  tagline: string;
  intro: string[];
  programsHeading: string;
  programs: Course[];
  eligibility: string[];
  careerPathways: string[];
};

export const prCategories: PrCategory[] = [
  {
    slug: "trade",
    title: "Trade Courses",
    icon: "document",
    tagline: "Hands-on, licensed trades that are consistently in demand across Australia.",
    intro: [
      "Skilled trades are among the most reliable study-to-work pathways in Australia. Many trade occupations appear on the skilled occupation lists, and qualified tradespeople are needed in every state and territory.",
      "These qualifications blend classroom learning with practical, on-the-job training so you graduate genuinely job-ready, often with a licence to work in your trade.",
      "Every qualification below is a nationally recognised code from the Australian training system, so it means the same thing at every provider. As an international student you need to study with a provider that is both a registered training organisation and CRICOS registered for that specific course, and not every provider is registered for every trade. We check that for you before you apply.",
    ],
    programsHeading: "Certifications offered in Trade programs",
    // Names and codes are the current titles on the national training register
    // (training.gov.au). Keep them exact: students and providers match on the
    // code, and a superseded code can invalidate an application. Where a code
    // has been replaced we list the current one, not the code an older brochure
    // may still show.
    programs: [
      // Construction and building
      { name: "Certificate III in Carpentry", code: "CPC30220", description: "The trade qualification for carpenters in residential and commercial construction, covering setting out, building, assembling and installing timber and non-timber structures." },
      { name: "Certificate III in Joinery", code: "CPC31920", description: "Making and installing doors, windows, stairs, frames and fitted cabinetry, working from plans in a joinery shop as well as on site." },
      { name: "Certificate III in Bricklaying and Blocklaying", code: "CPC33020", description: "Laying bricks, blocks and masonry for residential and commercial projects, including setting out, reading plans and building walls to specification." },
      { name: "Certificate III in Wall and Floor Tiling", code: "CPC31320", description: "Preparing surfaces and installing tiles in domestic and commercial settings, from waterproofing wet areas through to finishing." },
      { name: "Certificate III in Solid Plastering", code: "CPC31020", description: "Applying render, cement and decorative finishes to internal and external surfaces, including patching, restoration and moulded detail." },
      { name: "Certificate III in Painting and Decorating", code: "CPC30620", description: "Preparing and finishing surfaces on residential and commercial jobs, covering coating systems, wallpapering and decorative finishes." },
      { name: "Certificate III in Concreting", code: "CPC30320", description: "Placing, finishing and curing concrete for domestic and commercial work, including formwork, reinforcement and decorative finishes." },
      { name: "Certificate III in Plumbing", code: "CPC32420", description: "A licensed trade outcome covering water, sanitary, drainage, gas and roofing plumbing across domestic and commercial work." },
      { name: "Certificate III in Roof Plumbing", code: "CPC32620", description: "The specialist trade for roof coverings, flashings, rainwater systems and roof drainage on new builds and replacements." },
      { name: "Certificate IV in Building and Construction", code: "CPC40120", description: "A supervisor and small builder qualification covering contracts, estimating, planning and site management. Commonly used as part of a builder registration application, though registration itself is assessed state by state." },

      // Electrotechnology
      { name: "Certificate III in Electrotechnology Electrician", code: "UEE30820", description: "The pathway to becoming a licensed electrician, with training in installing, testing, fault-finding and maintaining electrical systems safely." },
      { name: "Certificate III in Instrumentation and Control", code: "UEE31220", description: "Installing, calibrating, fault-finding and maintaining the measurement and process control systems used across manufacturing, water, energy and mining." },
      { name: "Certificate III in Air Conditioning and Refrigeration", code: "UEE32225", description: "Installing, commissioning and servicing refrigeration and air conditioning plant. Completing it covers the training component of the national Refrigerant Handling Licence. Note that this code replaced UEE32220, which is now superseded." },

      // Automotive
      { name: "Certificate III in Light Vehicle Mechanical Technology", code: "AUR30620", description: "Diagnosing, servicing and repairing light vehicles. This is the trade qualification for automotive mechanics." },
      { name: "Certificate III in Heavy Commercial Vehicle Mechanical Technology", code: "AUR31120", description: "Servicing and repairing trucks, buses and heavy commercial vehicles, including driveline, braking, steering and suspension systems." },
      { name: "Certificate III in Automotive Electrical Technology", code: "AUR30320", description: "Diagnosing and repairing vehicle electrical and electronic systems, from wiring and charging systems through to control units." },

      // Engineering, fabrication and manufacturing
      { name: "Certificate III in Engineering - Fabrication Trade", code: "MEM31922", description: "The boilermaking, welding, sheetmetal and fabrication trade, covering cutting, forming, welding and assembling metal structures. This code replaced MEM30319, which older course lists may still quote." },
      { name: "Certificate III in Engineering - Mechanical Trade", code: "MEM30219", description: "The fitting and machining trade, covering the manufacture, assembly, installation and maintenance of mechanical plant and equipment." },
      { name: "Advanced Diploma of Engineering", code: "MEM60122", description: "A para-professional engineering qualification for technician and technical officer roles, and a recognised credit pathway into an engineering degree at several universities." },
      { name: "Certificate III in Cabinet Making and Timber Technology", code: "MSF30322", description: "Making and installing kitchens, built-in furniture and cabinetry, covering machining, assembly and finishing in a workshop setting." },
    ],
    eligibility: [
      "Completion of Year 11/12 or an equivalent qualification",
      "English at the IELTS/PTE level required by your provider and visa",
      "Usually 18+ for onshore study",
      "Many trades include a supervised work placement or apprenticeship component",
    ],
    careerPathways: [
      "Carpenter or joiner",
      "Plumber or roof plumber",
      "Electrician",
      "Instrumentation and control technician",
      "Refrigeration and air conditioning mechanic",
      "Bricklayer, plasterer, tiler or concreter",
      "Painter and decorator",
      "Automotive mechanic, heavy vehicle mechanic or auto electrician",
      "Boilermaker, welder, fabricator or sheetmetal worker",
      "Fitter and turner or maintenance fitter",
      "Cabinet maker",
      "Engineering technician or technical officer",
      "Construction supervisor or site manager (with further study)",
      "Self-employed tradesperson or contractor",
    ],
  },
  {
    slug: "nursing",
    title: "Nursing",
    icon: "headset",
    tagline: "One of Australia's most in-demand professions, with clear registration pathways.",
    intro: [
      "Nursing offers strong graduate employment, competitive salaries and a clear route to professional registration in Australia. Depending on your background and goals, you can enter at diploma, bachelor or postgraduate level.",
      "We help you choose the right entry point, meet the higher English requirements that apply to nursing, and plan your progression from Enrolled Nurse through to Registered Nurse and beyond.",
    ],
    programsHeading: "Types of nursing programs",
    programs: [
      { name: "Diploma of Nursing", code: "HLT54121", description: "Prepares you to work as an Enrolled Nurse (EN) under the supervision of a Registered Nurse. Includes a minimum of 400 hours of supervised clinical placement and is approved by the Nursing and Midwifery Board of Australia (NMBA)." },
      { name: "Bachelor of Nursing", description: "The standard university pathway to becoming a Registered Nurse (RN), typically three years with extensive clinical placements, leading to AHPRA/NMBA registration. Diploma graduates may receive up to a year of credit." },
      { name: "Master of Nursing", description: "For registered nurses or graduates seeking advanced practice, leadership, education or specialisation, including pathways toward nurse practitioner roles." },
    ],
    eligibility: [
      "Completion of senior secondary study or a relevant prior qualification",
      "Higher English requirements apply to nursing (e.g. IELTS Academic 7.0 for registration), and we advise on the exact score",
      "Diploma graduates may receive credit toward a Bachelor of Nursing",
      "Health checks, police checks and immunisation for clinical placement",
    ],
    careerPathways: [
      "Enrolled Nurse (EN)",
      "Registered Nurse (RN)",
      "Aged care or community nurse",
      "Clinical nurse specialist",
      "Nurse educator",
      "Nurse practitioner (with further study)",
    ],
  },
  {
    slug: "hospitality-cookery",
    title: "Hospitality & Cookery",
    icon: "trophy",
    tagline: "From trade-level cookery to hospitality management, a clear and in-demand pathway.",
    intro: [
      "Australia's hospitality and tourism sector offers strong job prospects and well-defined pathways, from foundational cookery through to senior management. Several occupations, including chefs, cooks and restaurant managers, feature on skilled occupation lists.",
      "Packaged study plans (for example, Certificate III, then Certificate IV, then a Diploma) let you build your qualifications and your visa length together, with practical placements along the way.",
    ],
    programsHeading: "Certifications offered in Hospitality & Cookery programs",
    programs: [
      { name: "Certificate III in Commercial Cookery", code: "SIT30821", description: "Foundational chef training. Prepare and cook a range of dishes and work effectively across a commercial kitchen." },
      { name: "Certificate IV in Kitchen Management", code: "SIT40521", description: "Supervisory cookery and kitchen operations, including team leadership, rostering, menu costing and food safety." },
      { name: "Diploma of Hospitality Management", code: "SIT50422", description: "Operational and management skills across restaurants, hotels, events and functions in small and large organisations." },
      { name: "Advanced Diploma of Hospitality Management", code: "SIT60322", description: "Senior management, strategy and business planning for leadership roles across the hospitality industry." },
      { name: "Certificate III in Patisserie", code: "SIT31021", description: "Specialist training in pastries, cakes, desserts and breads for work as a pastry cook or patissier." },
      { name: "Certificate IV in Patisserie", code: "SIT40721", description: "Advanced patisserie techniques with supervisory skills for senior pastry roles." },
      { name: "Certificate III in Hospitality", code: "SIT30622", description: "Front-of-house service across cafes, bars, hotels and restaurants. This is the entry point to a hospitality career." },
    ],
    eligibility: [
      "Completion of senior secondary study or equivalent",
      "English at your provider's required IELTS/PTE level",
      "Practical work placement is built into cookery and kitchen-management courses",
      "Packaged pathways (Cert III → Cert IV → Diploma) are common and cost-effective",
    ],
    careerPathways: [
      "Commercial cook",
      "Chef / chef de partie",
      "Pastry chef (patissier)",
      "Sous chef or head chef",
      "Restaurant or café manager",
      "Hotel / hospitality manager",
      "Food and beverage supervisor",
    ],
  },
  {
    slug: "teaching",
    title: "Teaching",
    icon: "graduation",
    tagline: "Early childhood and education-support pathways at both VET and university level.",
    intro: [
      "Teaching and early childhood education is a rewarding, in-demand field with pathways at both vocational and university level. Early childhood educators and teachers appear on skilled occupation lists.",
      "We help you choose the right level, from a Certificate III to a Master of Teaching, and plan credit pathways so your study builds toward the role and registration you're aiming for.",
    ],
    programsHeading: "Certifications offered in Teaching programs",
    programs: [
      { name: "Certificate III in Early Childhood Education and Care", code: "CHC30121", description: "The entry qualification to work as an educator in long day care, preschool and family day care settings." },
      { name: "Diploma of Early Childhood Education and Care", code: "CHC50121", description: "Qualifies you as a lead educator or room leader. Note: the training package updated in 2025 (CHC50125 now supersedes CHC50121), and we place you in the current version." },
      { name: "Diploma of School Age Education and Care", code: "CHC50221", description: "Supporting school-aged children in before- and after-school programs and vacation care." },
      { name: "Certificate IV in School Based Education Support", code: "CHC40221", description: "Work as an education support worker or teacher's aide, assisting teachers and students in schools." },
      { name: "Bachelor of Education (Early Childhood / Primary)", description: "The university pathway to becoming a registered teacher in early childhood or primary settings." },
      { name: "Master of Teaching", description: "For graduates with a relevant bachelor degree who want to qualify and register as a teacher." },
    ],
    eligibility: [
      "Academic entry as required by the qualification level (VET or university)",
      "English requirements apply, with higher levels needed for teacher registration",
      "A Working With Children Check for placements",
      "Diploma-to-degree credit pathways are available",
    ],
    careerPathways: [
      "Early childhood educator",
      "Room leader / lead educator",
      "Centre director or coordinator",
      "Education support worker / teacher's aide",
      "Family day care operator",
      "Primary or early childhood teacher (with a degree and registration)",
    ],
  },
];

export function getPrCategory(slug: string) {
  return prCategories.find((c) => c.slug === slug);
}
