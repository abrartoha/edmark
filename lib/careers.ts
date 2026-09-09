// ---------------------------------------------------------------------------
// CAREERS
//
// These pages are about occupations, not about courses.
//
// Edmark is an education agent. It does not deliver training and does not
// issue qualifications, so it is not entitled to advertise a training product
// — that is the RTO's to advertise, and ASQA's tip-off notice of 2 September
// 2026 was about this site doing it anyway, across 43 qualifications, without
// naming the RTO responsible for any of them.
//
// The fix is not a disclaimer on a course page. It is that the subject of the
// page changed. The page is now about the job: what the work is, where it is
// done, what licensing applies. The qualification appears once, low on the
// page, as a statement of fact about the usual entry pathway, linked to the
// national register so the reader can find the organisations approved to
// deliver it.
//
// What must never appear in this file, under any framing:
//
//   fees, tuition ranges, course durations, intake dates, English test score
//   requirements, entry requirements, RTO or provider names, or any call to
//   apply or enrol.
//
// Each of those turns careers information back into marketing a training
// product. scripts/verify-careers.ts fails the build if one reappears.
//
// Absent fields are absent, not null: a career with no licensing regime
// simply has no , and nothing renders. Nothing here is a
// placeholder waiting to be filled with a number we do not have.
//
// Every labour-market or licensing statement must be attributable to the
// authority named in it. There are no salary figures and no job-outlook
// statistics, because none have been sourced. Do not add them without a
// citation to Jobs and Skills Australia or the relevant regulator.
// ---------------------------------------------------------------------------

export type CodeStatus = "current" | "superseded" | "unverified";

export type QualificationPathway = {
  /** National code from the training package, e.g. "CPC30220". */
  nationalCode: string;
  /** Title exactly as training.gov.au states it. No added specialisations. */
  tgaTitle: string;
  tgaUrl: string;
  /** Unverified until checked against the register. See docs/code-verification.md. */
  codeStatus: CodeStatus;
  note?: string;
};

export type Career = {
  slug: string;
  occupation: string;
  /** Leads the page. Never a qualification title, never a national code. */
  h1: string;
  summary: string;
  dayToDay: string[];
  workEnvironment: string;
  /** Only where a licensing regime applies, and only naming the authority. */
  licensing?: string;
  /** Only with a citation. Absent everywhere until figures are sourced. */
  outlook?: string;
  pathways: QualificationPathway[];
  relatedCareers: string[];
  lastReviewed: string;
};

export const careers: Career[] = [
  {
    slug: "carpenter",
    occupation: "Carpenter",
    h1: "How to become a carpenter in Australia",
    summary: "Carpenters set out, build, assemble and install structures in timber and related materials on residential and commercial sites.",
    dayToDay: [
      "Read plans and set out work to measurements",
      "Frame floors, walls and roofs",
      "Install doors, windows, stairs and fixtures",
      "Form up for concrete pours",
      "Work to building codes and site safety requirements",
    ],
    workEnvironment: "Residential and commercial building sites, mostly outdoors and often at height. Work is physical and usually starts early.",
    pathways: [
      {
        nationalCode: "CPC30220",
        tgaTitle: "Certificate III in Carpentry",
        tgaUrl: "https://training.gov.au/training/details/CPC30220",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["joiner", "cabinet-maker", "builder", "bricklayer"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "joiner",
    occupation: "Joiner",
    h1: "How to become a joiner in Australia",
    summary: "Joiners make and install timber doors, windows, staircases and fitted joinery, usually working from a workshop rather than on site.",
    dayToDay: [
      "Interpret drawings and prepare cutting lists",
      "Machine and assemble timber components",
      "Build stairs, windows and door sets",
      "Finish and install completed joinery",
    ],
    workEnvironment: "A workshop environment with static machinery, with some installation work on site.",
    pathways: [
      {
        nationalCode: "CPC31920",
        tgaTitle: "Certificate III in Joinery",
        tgaUrl: "https://training.gov.au/training/details/CPC31920",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["carpenter", "cabinet-maker"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "plumber",
    occupation: "Plumber",
    h1: "How to become a plumber in Australia",
    summary: "Plumbers install and maintain the water, gas, drainage and roof drainage systems in buildings.",
    dayToDay: [
      "Install and test water and drainage systems",
      "Fit fixtures, appliances and hot water systems",
      "Locate and repair faults and leaks",
      "Install roof drainage, flashings and guttering",
      "Work to plumbing standards and inspection requirements",
    ],
    workEnvironment: "Residential, commercial and industrial sites, indoors and outdoors, often in confined spaces or at height.",
    licensing:
      "Plumbing is a licensed trade in every state and territory. In Victoria, plumbing licensing and registration is administered by the Victorian Building Authority. Check the current requirements with the authority in the state where you intend to work.",
    pathways: [
      {
        nationalCode: "CPC32420",
        tgaTitle: "Certificate III in Plumbing",
        tgaUrl: "https://training.gov.au/training/details/CPC32420",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        nationalCode: "CPC32620",
        tgaTitle: "Certificate III in Roof Plumbing",
        tgaUrl: "https://training.gov.au/training/details/CPC32620",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["electrician", "builder", "carpenter"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "electrician",
    occupation: "Electrician",
    h1: "How to become a electrician in Australia",
    summary: "Electricians install, test and maintain the electrical wiring, switchboards and equipment in buildings and infrastructure.",
    dayToDay: [
      "Install wiring, switchboards and power outlets",
      "Test and fault-find electrical circuits",
      "Connect appliances, lighting and control systems",
      "Work to the wiring rules and safety requirements",
    ],
    workEnvironment: "Building sites, occupied buildings and industrial plant. Work involves isolation procedures and strict safety controls.",
    licensing:
      "Electrical work is licensed in every state and territory. In Victoria, electrical licensing is administered by Energy Safe Victoria. Check the current requirements with the authority in the state where you intend to work.",
    pathways: [
      {
        nationalCode: "UEE30820",
        tgaTitle: "Certificate III in Electrotechnology Electrician",
        tgaUrl: "https://training.gov.au/training/details/UEE30820",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["instrumentation-and-control-technician", "air-conditioning-and-refrigeration-technician", "automotive-electrician"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "bricklayer",
    occupation: "Bricklayer",
    h1: "How to become a bricklayer in Australia",
    summary: "Bricklayers lay brick, block and stone to build walls and structures to plan and to specification.",
    dayToDay: [
      "Set out and lay brick and block courses",
      "Mix and apply mortar",
      "Build structural and decorative walls",
      "Check level, plumb and alignment as work proceeds",
    ],
    workEnvironment: "Outdoor building sites in most weather. Physically demanding, repetitive lifting.",
    pathways: [
      {
        nationalCode: "CPC33020",
        tgaTitle: "Certificate III in Bricklaying and Blocklaying",
        tgaUrl: "https://training.gov.au/training/details/CPC33020",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["concreter", "plasterer", "carpenter"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "wall-and-floor-tiler",
    occupation: "Wall and floor tiler",
    h1: "How to become a wall and floor tiler in Australia",
    summary: "Tilers prepare surfaces and lay ceramic, stone and composite tiles to walls and floors.",
    dayToDay: [
      "Prepare and waterproof surfaces",
      "Set out tile layouts",
      "Cut and lay tiles to pattern",
      "Grout, seal and finish",
    ],
    workEnvironment: "Residential and commercial interiors, often in bathrooms and kitchens. Extended kneeling and crouching.",
    pathways: [
      {
        nationalCode: "CPC31320",
        tgaTitle: "Certificate III in Wall and Floor Tiling",
        tgaUrl: "https://training.gov.au/training/details/CPC31320",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["plasterer", "painter-and-decorator", "concreter"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "plasterer",
    occupation: "Plasterer",
    h1: "How to become a plasterer in Australia",
    summary: "Plasterers apply rendering and solid plaster finishes to internal and external surfaces.",
    dayToDay: [
      "Prepare surfaces and mix render",
      "Apply and level coats by hand and machine",
      "Form arches, cornices and decorative finishes",
      "Patch and repair existing plaster",
    ],
    workEnvironment: "Building sites and occupied buildings, indoors and outdoors. Overhead work is common.",
    pathways: [
      {
        nationalCode: "CPC31020",
        tgaTitle: "Certificate III in Solid Plastering",
        tgaUrl: "https://training.gov.au/training/details/CPC31020",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["painter-and-decorator", "wall-and-floor-tiler", "bricklayer"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "painter-and-decorator",
    occupation: "Painter and decorator",
    h1: "How to become a painter and decorator in Australia",
    summary: "Painters prepare surfaces and apply paint, coatings and decorative finishes to buildings.",
    dayToDay: [
      "Prepare, sand and prime surfaces",
      "Apply paint by brush, roller and spray",
      "Apply specialist and protective coatings",
      "Hang wallpaper and apply decorative finishes",
    ],
    workEnvironment: "Residential and commercial buildings, indoors and outdoors, frequently on ladders or scaffold.",
    pathways: [
      {
        nationalCode: "CPC30620",
        tgaTitle: "Certificate III in Painting and Decorating",
        tgaUrl: "https://training.gov.au/training/details/CPC30620",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["plasterer", "wall-and-floor-tiler"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "concreter",
    occupation: "Concreter",
    h1: "How to become a concreter in Australia",
    summary: "Concreters place, finish and cure concrete for slabs, footings, driveways and structures.",
    dayToDay: [
      "Set out and prepare formwork and reinforcement",
      "Place and screed concrete",
      "Float, trowel and finish surfaces",
      "Cure and protect completed work",
    ],
    workEnvironment: "Outdoor sites, early starts, and work paced by the concrete pour rather than the clock.",
    pathways: [
      {
        nationalCode: "CPC30320",
        tgaTitle: "Certificate III in Concreting",
        tgaUrl: "https://training.gov.au/training/details/CPC30320",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["bricklayer", "carpenter", "builder"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "cabinet-maker",
    occupation: "Cabinet maker",
    h1: "How to become a cabinet maker in Australia",
    summary: "Cabinet makers build cabinets and fitted furniture from timber and manufactured board.",
    dayToDay: [
      "Interpret drawings and prepare cutting lists",
      "Machine, assemble and finish components",
      "Fit hardware, hinges and drawer systems",
      "Install completed cabinetry on site",
    ],
    workEnvironment: "A workshop with static and portable machinery, plus installation work in homes and businesses.",
    pathways: [
      {
        nationalCode: "MSF30322",
        tgaTitle: "Certificate III in Cabinet Making and Timber Technology",
        tgaUrl: "https://training.gov.au/training/details/MSF30322",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["joiner", "carpenter"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "glazier",
    occupation: "Glazier",
    h1: "How to become a glazier in Australia",
    summary: "Glaziers cut, handle and install glass in residential, commercial and shopfront settings.",
    dayToDay: [
      "Measure and cut glass to size",
      "Handle and lift glass safely",
      "Install windows, doors and shopfronts",
      "Replace broken and damaged glazing",
    ],
    workEnvironment: "Workshops and on-site installation. Heavy, fragile materials and strict manual handling controls.",
    pathways: [
      {
        nationalCode: "MSF30422",
        tgaTitle: "Certificate III in Glass and Glazing",
        tgaUrl: "https://training.gov.au/training/details/MSF30422",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["carpenter", "builder"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "builder",
    occupation: "Builder and building supervisor",
    h1: "How to become a builder and building supervisor in Australia",
    summary: "Builders and building supervisors plan, estimate, coordinate and supervise residential and commercial building projects.",
    dayToDay: [
      "Read and interpret plans and specifications",
      "Estimate quantities and prepare costings",
      "Coordinate trades and site programmes",
      "Supervise quality and site safety",
      "Manage inspections and compliance documentation",
    ],
    workEnvironment: "A mix of site supervision and office-based planning, estimating and client contact.",
    licensing:
      "Building work above certain values requires registration. In Victoria, builder registration is administered by the Victorian Building Authority. Registration classes and requirements are set state by state.",
    pathways: [
      {
        nationalCode: "CPC40120",
        tgaTitle: "Certificate IV in Building and Construction",
        tgaUrl: "https://training.gov.au/training/details/CPC40120",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        nationalCode: "CPC50220",
        tgaTitle: "Diploma of Building and Construction (Building)",
        tgaUrl: "https://training.gov.au/training/details/CPC50220",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["carpenter", "concreter", "bricklayer"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "air-conditioning-and-refrigeration-technician",
    occupation: "Air conditioning and refrigeration technician",
    h1: "How to become a air conditioning and refrigeration technician in Australia",
    summary: "These technicians install, service and repair air conditioning and refrigeration systems.",
    dayToDay: [
      "Install split, ducted and commercial systems",
      "Diagnose faults and replace components",
      "Recover, charge and test refrigerant",
      "Service commercial refrigeration plant",
    ],
    workEnvironment: "Homes, commercial buildings and plant rooms, frequently on rooftops and in confined plant spaces.",
    licensing:
      "Work involving refrigerant handling requires a licence issued through the Australian Refrigeration Council. Electrical work carried out as part of the role is separately licensed by the electrical safety regulator in each state.",
    pathways: [
      {
        nationalCode: "UEE32225",
        tgaTitle: "Certificate III in Air Conditioning and Refrigeration",
        tgaUrl: "https://training.gov.au/training/details/UEE32225",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["electrician", "instrumentation-and-control-technician", "mechanical-fitter"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "instrumentation-and-control-technician",
    occupation: "Instrumentation and control technician",
    h1: "How to become a instrumentation and control technician in Australia",
    summary: "These technicians install, calibrate and maintain the instruments and control systems that run industrial processes.",
    dayToDay: [
      "Install sensors, transmitters and control loops",
      "Calibrate instruments to specification",
      "Fault-find control and monitoring systems",
      "Document calibration and maintenance records",
    ],
    workEnvironment: "Industrial plant, utilities and processing facilities, working to permit and isolation procedures.",
    pathways: [
      {
        nationalCode: "UEE31220",
        tgaTitle: "Certificate III in Instrumentation and Control",
        tgaUrl: "https://training.gov.au/training/details/UEE31220",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["electrician", "mechanical-fitter", "engineering-technician"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "metal-fabricator",
    occupation: "Metal fabricator and boilermaker",
    h1: "How to become a metal fabricator and boilermaker in Australia",
    summary: "Fabricators cut, form, weld and assemble metal structures and components.",
    dayToDay: [
      "Interpret fabrication drawings",
      "Cut and form plate and section",
      "Weld to specified procedures",
      "Assemble, fit and finish fabricated work",
    ],
    workEnvironment: "Fabrication workshops and site installation, with heat, noise and hot-work controls.",
    pathways: [
      {
        nationalCode: "MEM31922",
        tgaTitle: "Certificate III in Engineering - Fabrication Trade",
        tgaUrl: "https://training.gov.au/training/details/MEM31922",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["mechanical-fitter", "engineering-technician", "glazier"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "mechanical-fitter",
    occupation: "Mechanical fitter",
    h1: "How to become a mechanical fitter in Australia",
    summary: "Mechanical fitters machine, fit and maintain mechanical plant and components.",
    dayToDay: [
      "Machine components on lathes and mills",
      "Fit, align and assemble mechanical plant",
      "Diagnose wear and mechanical failure",
      "Carry out scheduled maintenance",
    ],
    workEnvironment: "Workshops and industrial plant, often on planned maintenance shutdowns.",
    pathways: [
      {
        nationalCode: "MEM30219",
        tgaTitle: "Certificate III in Engineering - Mechanical Trade",
        tgaUrl: "https://training.gov.au/training/details/MEM30219",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["metal-fabricator", "engineering-technician", "heavy-vehicle-mechanic"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "engineering-technician",
    occupation: "Engineering technician",
    h1: "How to become a engineering technician in Australia",
    summary: "Engineering technicians support design, planning and project delivery in engineering environments.",
    dayToDay: [
      "Prepare and interpret technical drawings",
      "Support design and project documentation",
      "Plan and schedule engineering work",
      "Analyse performance and test data",
    ],
    workEnvironment: "Offices, workshops and plant, working alongside engineers and trades.",
    pathways: [
      {
        nationalCode: "MEM60122",
        tgaTitle: "Advanced Diploma of Engineering",
        tgaUrl: "https://training.gov.au/training/details/MEM60122",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["mechanical-fitter", "metal-fabricator", "instrumentation-and-control-technician"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "light-vehicle-mechanic",
    occupation: "Light vehicle mechanic",
    h1: "How to become a light vehicle mechanic in Australia",
    summary: "Light vehicle mechanics diagnose, service and repair cars and light commercial vehicles.",
    dayToDay: [
      "Carry out scheduled servicing",
      "Diagnose engine, transmission and brake faults",
      "Replace and repair components",
      "Road test and verify repairs",
    ],
    workEnvironment: "Workshops and service centres, working on hoists and with diagnostic equipment.",
    pathways: [
      {
        nationalCode: "AUR30620",
        tgaTitle: "Certificate III in Light Vehicle Mechanical Technology",
        tgaUrl: "https://training.gov.au/training/details/AUR30620",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["heavy-vehicle-mechanic", "automotive-electrician", "mechanical-fitter"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "heavy-vehicle-mechanic",
    occupation: "Heavy vehicle mechanic",
    h1: "How to become a heavy vehicle mechanic in Australia",
    summary: "Heavy vehicle mechanics service and repair trucks, buses and heavy commercial vehicles.",
    dayToDay: [
      "Service and repair heavy engines and driveline",
      "Diagnose braking and air systems",
      "Carry out roadworthiness inspections",
      "Maintain fleet servicing records",
    ],
    workEnvironment: "Large workshops and depots, working on heavy plant with lifting equipment.",
    pathways: [
      {
        nationalCode: "AUR31120",
        tgaTitle: "Certificate III in Heavy Commercial Vehicle Mechanical Technology",
        tgaUrl: "https://training.gov.au/training/details/AUR31120",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["light-vehicle-mechanic", "automotive-electrician", "mechanical-fitter"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "automotive-electrician",
    occupation: "Automotive electrician",
    h1: "How to become a automotive electrician in Australia",
    summary: "Automotive electricians diagnose and repair the electrical and electronic systems in vehicles.",
    dayToDay: [
      "Fault-find wiring and electronic control systems",
      "Repair charging, starting and lighting systems",
      "Install accessories and auxiliary systems",
      "Use diagnostic scan equipment",
    ],
    workEnvironment: "Automotive workshops, working with wiring looms, test equipment and vehicle electronics.",
    pathways: [
      {
        nationalCode: "AUR30320",
        tgaTitle: "Certificate III in Automotive Electrical Technology",
        tgaUrl: "https://training.gov.au/training/details/AUR30320",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["light-vehicle-mechanic", "heavy-vehicle-mechanic", "electrician"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "chef",
    occupation: "Chef and commercial cook",
    h1: "How to become a chef and commercial cook in Australia",
    summary: "Chefs and commercial cooks prepare and cook food to order in commercial kitchens, and supervise kitchen sections.",
    dayToDay: [
      "Prepare ingredients and cook to order",
      "Work a section during service",
      "Control food safety and hygiene",
      "Cost and plan menus at senior levels",
      "Supervise and train kitchen staff",
    ],
    workEnvironment: "Commercial kitchens, working evenings, weekends and public holidays under time pressure.",
    pathways: [
      {
        nationalCode: "SIT30821",
        tgaTitle: "Certificate III in Commercial Cookery",
        tgaUrl: "https://training.gov.au/training/details/SIT30821",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        nationalCode: "SIT40521",
        tgaTitle: "Certificate IV in Kitchen Management",
        tgaUrl: "https://training.gov.au/training/details/SIT40521",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["pastry-chef", "hospitality-manager"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "pastry-chef",
    occupation: "Pastry chef",
    h1: "How to become a pastry chef in Australia",
    summary: "Pastry chefs produce pastries, cakes and desserts in commercial kitchens and patisseries.",
    dayToDay: [
      "Produce doughs, pastries and desserts",
      "Decorate cakes and plated desserts",
      "Manage production schedules",
      "Supervise a pastry section at senior levels",
    ],
    workEnvironment: "Patisseries, bakeries and hotel kitchens, usually with early morning starts.",
    pathways: [
      {
        nationalCode: "SIT31021",
        tgaTitle: "Certificate III in Patisserie",
        tgaUrl: "https://training.gov.au/training/details/SIT31021",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        nationalCode: "SIT40721",
        tgaTitle: "Certificate IV in Patisserie",
        tgaUrl: "https://training.gov.au/training/details/SIT40721",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["chef", "hospitality-manager"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "hospitality-manager",
    occupation: "Hospitality and venue manager",
    h1: "How to become a hospitality and venue manager in Australia",
    summary: "Hospitality managers run the service, staffing and commercial side of cafes, restaurants, hotels and venues.",
    dayToDay: [
      "Supervise service and front-of-house teams",
      "Roster staff and manage labour cost",
      "Handle bookings, guests and complaints",
      "Manage stock, suppliers and budgets",
      "Maintain licensing and compliance obligations",
    ],
    workEnvironment: "Venues and hotels, across split shifts, evenings and weekends.",
    pathways: [
      {
        nationalCode: "SIT30622",
        tgaTitle: "Certificate III in Hospitality",
        tgaUrl: "https://training.gov.au/training/details/SIT30622",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        nationalCode: "SIT50422",
        tgaTitle: "Diploma of Hospitality Management",
        tgaUrl: "https://training.gov.au/training/details/SIT50422",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        nationalCode: "SIT60322",
        tgaTitle: "Advanced Diploma of Hospitality Management",
        tgaUrl: "https://training.gov.au/training/details/SIT60322",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["chef", "pastry-chef", "business-administrator"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "aged-care-and-disability-support-worker",
    occupation: "Aged care and disability support worker",
    h1: "How to become a aged care and disability support worker in Australia",
    summary: "Support workers assist older people and people with disability with daily living, personal care and community participation.",
    dayToDay: [
      "Assist with personal care and daily routines",
      "Support community access and activities",
      "Follow individual support plans",
      "Record and report changes in wellbeing",
      "Work alongside families and health professionals",
    ],
    workEnvironment: "Residential aged care, group homes and clients' own homes, often on rostered shifts.",
    licensing:
      "Workers in NDIS-funded roles require an NDIS Worker Screening Check, and aged care roles require a police check. Requirements are set by the relevant scheme and by each employer.",
    pathways: [
      {
        nationalCode: "CHC33021",
        tgaTitle: "Certificate III in Individual Support",
        tgaUrl: "https://training.gov.au/training/details/CHC33021",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        nationalCode: "CHC43015",
        tgaTitle: "Certificate IV in Ageing Support",
        tgaUrl: "https://training.gov.au/training/details/CHC43015",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        nationalCode: "CHC43121",
        tgaTitle: "Certificate IV in Disability Support",
        tgaUrl: "https://training.gov.au/training/details/CHC43121",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["enrolled-nurse", "mental-health-support-worker", "community-services-worker"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "enrolled-nurse",
    occupation: "Enrolled nurse",
    h1: "How to become a enrolled nurse in Australia",
    summary: "Enrolled nurses provide nursing care under the supervision of a registered nurse.",
    dayToDay: [
      "Take and record clinical observations",
      "Assist with personal and clinical care",
      "Administer medication within scope",
      "Document care and report changes",
      "Support patients and their families",
    ],
    workEnvironment: "Hospitals, aged care and community health, on rotating shifts including nights and weekends.",
    licensing:
      "Enrolled nurses must be registered with the Nursing and Midwifery Board of Australia through Ahpra before they can practise. Registration standards are set by the Board.",
    pathways: [
      {
        nationalCode: "HLT54121",
        tgaTitle: "Diploma of Nursing",
        tgaUrl: "https://training.gov.au/training/details/HLT54121",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["aged-care-and-disability-support-worker", "mental-health-support-worker"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "mental-health-support-worker",
    occupation: "Mental health support worker",
    h1: "How to become a mental health support worker in Australia",
    summary: "Mental health workers support people experiencing mental illness, including in peer roles drawing on lived experience.",
    dayToDay: [
      "Support recovery-oriented planning",
      "Provide day-to-day practical and emotional support",
      "Connect people to services and supports",
      "Use lived experience in peer roles",
      "Maintain case notes and reporting",
    ],
    workEnvironment: "Community services, clinical settings and outreach, often working with people in crisis.",
    licensing:
      "Roles commonly require a police check, and a Working with Children Check where the work involves young people.",
    pathways: [
      {
        nationalCode: "CHC43515",
        tgaTitle: "Certificate IV in Mental Health Peer Work",
        tgaUrl: "https://training.gov.au/training/details/CHC43515",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        nationalCode: "CHC53315",
        tgaTitle: "Diploma of Mental Health",
        tgaUrl: "https://training.gov.au/training/details/CHC53315",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["community-services-worker", "aged-care-and-disability-support-worker", "enrolled-nurse"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "community-services-worker",
    occupation: "Community services worker and case manager",
    h1: "How to become a community services worker and case manager in Australia",
    summary: "Community services workers assess need, coordinate support and manage cases across social service settings.",
    dayToDay: [
      "Assess client need and risk",
      "Develop and review case plans",
      "Coordinate referrals across services",
      "Advocate for clients",
      "Maintain case records and reporting",
    ],
    workEnvironment: "Community agencies, outreach and client homes, across areas such as homelessness, family violence and child protection.",
    licensing:
      "Roles commonly require a police check, and a Working with Children Check where the work involves children or young people.",
    pathways: [
      {
        nationalCode: "CHC52025",
        tgaTitle: "Diploma of Community Services",
        tgaUrl: "https://training.gov.au/training/details/CHC52025",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["mental-health-support-worker", "aged-care-and-disability-support-worker", "education-support-officer"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "early-childhood-educator",
    occupation: "Early childhood educator",
    h1: "How to become a early childhood educator in Australia",
    summary: "Early childhood educators plan and deliver education and care for children before school age.",
    dayToDay: [
      "Plan and run learning experiences",
      "Supervise and care for children",
      "Observe and document development",
      "Work in partnership with families",
      "Meet the national quality and ratio requirements",
    ],
    workEnvironment: "Long day care, kindergarten and preschool settings, working with children and their families.",
    licensing:
      "Working with children requires a Working with Children Check in every state and territory. In Victoria it is administered by the Department of Government Services.",
    pathways: [
      {
        nationalCode: "CHC30125",
        tgaTitle: "Certificate III in Early Childhood Education and Care",
        tgaUrl: "https://training.gov.au/training/details/CHC30125",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        nationalCode: "CHC50125",
        tgaTitle: "Diploma of Early Childhood Education and Care",
        tgaUrl: "https://training.gov.au/training/details/CHC50125",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["education-support-officer", "community-services-worker"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "education-support-officer",
    occupation: "Education support officer and teacher's aide",
    h1: "How to become a education support officer and teacher's aide in Australia",
    summary: "Education support officers assist teachers and support students in school settings.",
    dayToDay: [
      "Support students individually and in small groups",
      "Assist teachers in the classroom",
      "Support students with additional needs",
      "Prepare materials and help supervise activities",
      "Run programmes in outside-school-hours care",
    ],
    workEnvironment: "Primary and secondary schools, and outside-school-hours care services, during school terms.",
    licensing:
      "Working with children requires a Working with Children Check in every state and territory. In Victoria it is administered by the Department of Government Services.",
    pathways: [
      {
        nationalCode: "CHC40221",
        tgaTitle: "Certificate IV in School Based Education Support",
        tgaUrl: "https://training.gov.au/training/details/CHC40221",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        nationalCode: "CHC50221",
        tgaTitle: "Diploma of School Age Education and Care",
        tgaUrl: "https://training.gov.au/training/details/CHC50221",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["early-childhood-educator", "community-services-worker"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "business-administrator",
    occupation: "Business administrator and manager",
    h1: "How to become a business administrator and manager in Australia",
    summary: "Business administrators and managers run the operations, planning and coordination side of an organisation.",
    dayToDay: [
      "Coordinate day-to-day operations",
      "Plan and monitor budgets and reporting",
      "Supervise teams and workflow",
      "Improve processes and systems",
      "Manage supplier and client relationships",
    ],
    workEnvironment: "Offices across almost every industry, increasingly with hybrid arrangements.",
    pathways: [
      {
        nationalCode: "BSB50120",
        tgaTitle: "Diploma of Business",
        tgaUrl: "https://training.gov.au/training/details/BSB50120",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["learning-and-development-officer", "hospitality-manager"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "learning-and-development-officer",
    occupation: "Learning and development officer",
    h1: "How to become a learning and development officer in Australia",
    summary: "Learning and development officers build workforce capability through organisational training and development.",
    dayToDay: [
      "Analyse capability and training needs",
      "Design learning programmes",
      "Facilitate training and workshops",
      "Evaluate learning outcomes",
      "Advise on organisational capability",
    ],
    workEnvironment: "Corporate, government and large service organisations, working across teams.",
    pathways: [
      {
        nationalCode: "BSB80120",
        tgaTitle: "Graduate Diploma of Management (Learning)",
        tgaUrl: "https://training.gov.au/training/details/BSB80120",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["business-administrator", "education-support-officer"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "security-officer",
    occupation: "Security officer and crowd controller",
    h1: "How to become a security officer and crowd controller in Australia",
    summary: "Security officers protect people and property, control access, and manage crowds at venues and events.",
    dayToDay: [
      "Control access and monitor entry points",
      "Patrol sites and monitor CCTV",
      "Manage crowds at venues and events",
      "Respond to and report incidents",
      "Write incident and shift reports",
    ],
    workEnvironment: "Venues, events, retail and commercial sites, largely on night and weekend shifts.",
    licensing:
      "Security work requires a licence. In Victoria, security licences are issued by Victoria Police through its Licensing and Regulation Division, which sets its own requirements for training completed by overseas students. Confirm the current requirements with Victoria Police before you commit to a course.",
    pathways: [
      {
        nationalCode: "CPP20218",
        tgaTitle: "Certificate II in Security Operations",
        tgaUrl: "https://training.gov.au/training/details/CPP20218",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["aged-care-and-disability-support-worker", "hospitality-manager"],
    lastReviewed: "2026-09-10",
  },
];

export function getCareer(slug: string): Career | undefined {
  return careers.find((c) => c.slug === slug);
}

/** Careers linked from this one, in the order they were listed. */
export function relatedTo(career: Career): Career[] {
  return career.relatedCareers
    .map((s) => careers.find((c) => c.slug === s))
    .filter((c): c is Career => Boolean(c));
}
