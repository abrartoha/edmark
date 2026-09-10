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
  /**
   * The qualification title, exactly as its register states it. No added
   * specialisations, and no institution's marketing name for it.
   */
  title: string;
  /**
   * Which national register lists the organisations approved to deliver it.
   *
   * "tga" — training.gov.au, for nationally recognised VET qualifications.
   * "cricos" — the CRICOS register, for higher education courses that may be
   * delivered to international students.
   *
   * Either way the point is the same: the page states the qualification as a
   * fact and sends the reader to the register to find who actually delivers
   * it, because Edmark does not.
   */
  register: "tga" | "cricos";
  registerUrl: string;
  /** VET only: the national code from the training package, e.g. "CPC30220". */
  nationalCode?: string;
  /** VET only. Unverified until checked. See docs/code-verification.md. */
  codeStatus?: CodeStatus;
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
        title: "Certificate III in Carpentry",
        nationalCode: "CPC30220",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CPC30220",
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
        title: "Certificate III in Joinery",
        nationalCode: "CPC31920",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CPC31920",
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
        title: "Certificate III in Plumbing",
        nationalCode: "CPC32420",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CPC32420",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Certificate III in Roof Plumbing",
        nationalCode: "CPC32620",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CPC32620",
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
        title: "Certificate III in Electrotechnology Electrician",
        nationalCode: "UEE30820",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/UEE30820",
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
        title: "Certificate III in Bricklaying and Blocklaying",
        nationalCode: "CPC33020",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CPC33020",
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
        title: "Certificate III in Wall and Floor Tiling",
        nationalCode: "CPC31320",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CPC31320",
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
        title: "Certificate III in Solid Plastering",
        nationalCode: "CPC31020",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CPC31020",
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
        title: "Certificate III in Painting and Decorating",
        nationalCode: "CPC30620",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CPC30620",
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
        title: "Certificate III in Concreting",
        nationalCode: "CPC30320",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CPC30320",
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
        title: "Certificate III in Cabinet Making and Timber Technology",
        nationalCode: "MSF30322",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/MSF30322",
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
        title: "Certificate III in Glass and Glazing",
        nationalCode: "MSF30422",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/MSF30422",
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
        title: "Certificate IV in Building and Construction",
        nationalCode: "CPC40120",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CPC40120",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Diploma of Building and Construction (Building)",
        nationalCode: "CPC50220",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CPC50220",
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
        title: "Certificate III in Air Conditioning and Refrigeration",
        nationalCode: "UEE32225",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/UEE32225",
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
        title: "Certificate III in Instrumentation and Control",
        nationalCode: "UEE31220",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/UEE31220",
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
        title: "Certificate III in Engineering - Fabrication Trade",
        nationalCode: "MEM31922",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/MEM31922",
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
        title: "Certificate III in Engineering - Mechanical Trade",
        nationalCode: "MEM30219",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/MEM30219",
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
        title: "Advanced Diploma of Engineering",
        nationalCode: "MEM60122",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/MEM60122",
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
        title: "Certificate III in Light Vehicle Mechanical Technology",
        nationalCode: "AUR30620",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/AUR30620",
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
        title: "Certificate III in Heavy Commercial Vehicle Mechanical Technology",
        nationalCode: "AUR31120",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/AUR31120",
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
        title: "Certificate III in Automotive Electrical Technology",
        nationalCode: "AUR30320",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/AUR30320",
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
        title: "Certificate III in Commercial Cookery",
        nationalCode: "SIT30821",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/SIT30821",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Certificate IV in Kitchen Management",
        nationalCode: "SIT40521",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/SIT40521",
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
        title: "Certificate III in Patisserie",
        nationalCode: "SIT31021",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/SIT31021",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Certificate IV in Patisserie",
        nationalCode: "SIT40721",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/SIT40721",
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
        title: "Certificate III in Hospitality",
        nationalCode: "SIT30622",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/SIT30622",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Diploma of Hospitality Management",
        nationalCode: "SIT50422",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/SIT50422",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Advanced Diploma of Hospitality Management",
        nationalCode: "SIT60322",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/SIT60322",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Bachelor of Business in Hotel Management",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Associate Degree of International Hotel and Tourism Management",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Master of Business in Global Hotel Leadership",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Graduate Diploma of Business in Global Hotel Leadership",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Graduate Certificate of Business in Global Hotel Leadership",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
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
        title: "Certificate III in Individual Support",
        nationalCode: "CHC33021",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CHC33021",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Certificate IV in Ageing Support",
        nationalCode: "CHC43015",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CHC43015",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Certificate IV in Disability Support",
        nationalCode: "CHC43121",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CHC43121",
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
        title: "Diploma of Nursing",
        nationalCode: "HLT54121",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/HLT54121",
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
        title: "Certificate IV in Mental Health Peer Work",
        nationalCode: "CHC43515",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CHC43515",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Diploma of Mental Health",
        nationalCode: "CHC53315",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CHC53315",
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
        title: "Diploma of Community Services",
        nationalCode: "CHC52025",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CHC52025",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Bachelor of Community Welfare",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
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
        title: "Certificate III in Early Childhood Education and Care",
        nationalCode: "CHC30125",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CHC30125",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Diploma of Early Childhood Education and Care",
        nationalCode: "CHC50125",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CHC50125",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Bachelor of Early Childhood Education",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Master of Teaching (Early Childhood)",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Graduate Diploma of Education (Early Childhood)",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
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
        title: "Certificate IV in School Based Education Support",
        nationalCode: "CHC40221",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CHC40221",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Diploma of School Age Education and Care",
        nationalCode: "CHC50221",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CHC50221",
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
        title: "Diploma of Business",
        nationalCode: "BSB50120",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/BSB50120",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
      {
        title: "Bachelor of Business",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "MBA / Master of Business",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Graduate Diploma of Business",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Graduate Certificate in Business",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
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
        title: "Graduate Diploma of Management (Learning)",
        nationalCode: "BSB80120",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/BSB80120",
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
        title: "Certificate II in Security Operations",
        nationalCode: "CPP20218",
        register: "tga",
        registerUrl: "https://training.gov.au/training/details/CPP20218",
        // TODO: verify on training.gov.au — see docs/code-verification.md
        codeStatus: "unverified",
      },
    ],
    relatedCareers: ["aged-care-and-disability-support-worker", "hospitality-manager"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "accountant",
    occupation: "Accountant",
    h1: "How to become an accountant in Australia",
    summary: "Accountants prepare and interpret financial records, and advise on tax, compliance and business performance.",
    dayToDay: [
      "Prepare financial statements and management reports",
      "Prepare and lodge tax returns and BAS",
      "Reconcile accounts and review controls",
      "Advise on budgeting, cash flow and structure",
      "Work to Australian accounting standards",
    ],
    workEnvironment: "Accounting practices, corporate finance teams and government, mostly office-based with busy periods around reporting and tax deadlines.",
    licensing:
      "Membership of a professional body such as CPA Australia, Chartered Accountants ANZ or IPA is expected for most senior roles and required to sign certain documents. Each body sets its own admission requirements.",
    pathways: [
      {
        title: "Bachelor of Accounting",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Master of Professional Accounting",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["business-administrator", "data-analyst", "marketing-specialist"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "marketing-specialist",
    occupation: "Marketing specialist",
    h1: "How to become a marketing specialist in Australia",
    summary: "Marketing specialists plan and run the campaigns and channels that bring an organisation its customers.",
    dayToDay: [
      "Plan campaigns against commercial objectives",
      "Run digital, social and content channels",
      "Research customers, competitors and pricing",
      "Measure performance and report on it",
      "Brief designers, agencies and media partners",
    ],
    workEnvironment: "Agencies, in-house marketing teams and consultancies, office-based with a good deal of collaboration.",
    pathways: [
      {
        title: "Bachelor of Business (Marketing)",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["business-administrator", "data-analyst", "accountant"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "data-analyst",
    occupation: "Data analyst",
    h1: "How to become a data analyst in Australia",
    summary: "Data analysts turn an organisation's data into the numbers people make decisions from.",
    dayToDay: [
      "Pull and clean data from operational systems",
      "Build dashboards and recurring reports",
      "Analyse patterns and test what drives them",
      "Translate findings for non-technical audiences",
      "Support forecasting and planning",
    ],
    workEnvironment: "Office and hybrid roles across almost every industry, working alongside operations, finance and technology teams.",
    pathways: [
      {
        title: "Master of Business Analytics",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["business-administrator", "network-and-systems-engineer", "marketing-specialist"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "network-and-systems-engineer",
    occupation: "Network and systems engineer",
    h1: "How to become a network and systems engineer in Australia",
    summary: "These engineers design, build and maintain the networks and server systems an organisation runs on.",
    dayToDay: [
      "Design and configure network infrastructure",
      "Maintain servers, storage and cloud services",
      "Monitor performance and resolve incidents",
      "Plan capacity, upgrades and migrations",
      "Document architecture and changes",
    ],
    workEnvironment: "Corporate IT teams, managed service providers and data centres, with on-call rotations in many roles.",
    pathways: [
      {
        title: "Bachelor of Information Technology and Systems",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Bachelor of Information Technology, Bachelor of Business",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Master of Information Technology / Networking",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["cyber-security-analyst", "data-analyst", "instrumentation-and-control-technician"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "cyber-security-analyst",
    occupation: "Cyber security analyst",
    h1: "How to become a cyber security analyst in Australia",
    summary: "Security analysts protect an organisation's systems and data from attack, and respond when something gets through.",
    dayToDay: [
      "Monitor systems for suspicious activity",
      "Investigate and respond to incidents",
      "Assess vulnerabilities and recommend fixes",
      "Apply security controls and policy",
      "Report on risk to management",
    ],
    workEnvironment: "Security operations centres, corporate IT and consultancies, often with shift or on-call coverage.",
    pathways: [
      {
        title: "Bachelor of Information Technology (Cyber Security)",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Master of Information Technology (Cyber Security)",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["network-and-systems-engineer", "data-analyst"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "school-teacher",
    occupation: "School teacher",
    h1: "How to become a school teacher in Australia",
    summary: "Teachers plan and deliver the curriculum, assess learning, and support students through their schooling.",
    dayToDay: [
      "Plan lessons and units against the curriculum",
      "Teach classes and manage the classroom",
      "Assess work and report on progress",
      "Support students with additional needs",
      "Work with families and colleagues",
    ],
    workEnvironment: "Primary and secondary schools, government and non-government, working to school terms.",
    licensing:
      "Teachers must be registered with the teacher regulatory authority in their state or territory before they can teach. In Victoria that is the Victorian Institute of Teaching, and a Working with Children Check applies as well.",
    pathways: [
      {
        title: "Bachelor of Education",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Master of Teaching",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Graduate Diploma of Teaching (Primary / Secondary)",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["early-childhood-educator", "education-support-officer", "psychologist"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "professional-engineer",
    occupation: "Professional engineer",
    h1: "How to become a professional engineer in Australia",
    summary: "Engineers design, analyse and deliver the built and mechanical systems that infrastructure and industry depend on.",
    dayToDay: [
      "Design and model systems and structures",
      "Analyse loads, tolerances and performance",
      "Prepare technical documentation and drawings",
      "Oversee construction, testing and commissioning",
      "Work to Australian standards and codes",
    ],
    workEnvironment: "Consultancies, contractors, utilities and manufacturers, split between office design work and site or plant visits.",
    licensing:
      "Engineers Australia assesses and recognises professional engineering qualifications, and some states restrict who may carry out or certify certain engineering work. Check the requirement for your discipline and state.",
    pathways: [
      {
        title: "Bachelor of Engineering (Honours)",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Master of Engineering",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["engineering-technician", "mechanical-fitter", "builder"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "registered-nurse",
    occupation: "Registered nurse",
    h1: "How to become a registered nurse in Australia",
    summary: "Registered nurses assess, plan and deliver patient care, and lead the nursing team around them.",
    dayToDay: [
      "Assess patients and plan their care",
      "Administer medication and treatments",
      "Monitor and document clinical observations",
      "Coordinate care with doctors and allied health",
      "Supervise enrolled nurses and support staff",
    ],
    workEnvironment: "Hospitals, aged care, community health and specialist services, on rotating shifts including nights and weekends.",
    licensing:
      "Registered nurses must hold registration with the Nursing and Midwifery Board of Australia through Ahpra before they can practise. Registration standards, including English language requirements, are set by the Board.",
    pathways: [
      {
        title: "Bachelor of Nursing",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Bachelor of Nursing (Enrolled Nurse to Registered Nurse)",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Master of Nursing (Graduate Entry)",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["enrolled-nurse", "midwife", "aged-care-and-disability-support-worker"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "midwife",
    occupation: "Midwife",
    h1: "How to become a midwife in Australia",
    summary: "Midwives care for women through pregnancy, birth and the weeks that follow, and for their newborns.",
    dayToDay: [
      "Provide antenatal care and education",
      "Support and monitor women through labour and birth",
      "Care for newborns and support feeding",
      "Provide postnatal care in hospital and at home",
      "Refer and coordinate with obstetric teams",
    ],
    workEnvironment: "Birthing suites, maternity wards and community midwifery programs, on rotating shifts.",
    licensing:
      "Midwives must hold registration with the Nursing and Midwifery Board of Australia through Ahpra before they can practise.",
    pathways: [
      {
        title: "Bachelor of Midwifery",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["registered-nurse", "enrolled-nurse"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "occupational-therapist",
    occupation: "Occupational therapist",
    h1: "How to become an occupational therapist in Australia",
    summary: "Occupational therapists help people do the everyday things illness, injury or disability has made difficult.",
    dayToDay: [
      "Assess function at home, school or work",
      "Set goals and plan therapy with the client",
      "Prescribe equipment and home modifications",
      "Retrain daily living and work skills",
      "Report to funders and referrers",
    ],
    workEnvironment: "Hospitals, community health, schools, aged care and private practice, with a good deal of travel to clients.",
    licensing:
      "Occupational therapists must hold registration with the Occupational Therapy Board of Australia through Ahpra.",
    pathways: [
      {
        title: "Bachelor of Occupational Therapy",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["speech-pathologist", "exercise-physiologist", "aged-care-and-disability-support-worker"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "speech-pathologist",
    occupation: "Speech pathologist",
    h1: "How to become a speech pathologist in Australia",
    summary: "Speech pathologists assess and treat difficulties with speech, language, voice and swallowing.",
    dayToDay: [
      "Assess communication and swallowing",
      "Plan and deliver therapy programs",
      "Work with families, teachers and carers",
      "Introduce communication aids where needed",
      "Document progress and outcomes",
    ],
    workEnvironment: "Schools, hospitals, community health and private practice, across all ages from infants to older adults.",
    licensing:
      "Speech Pathology Australia sets the professional standards and certification most employers require. The profession is self-regulated rather than registered through Ahpra.",
    pathways: [
      {
        title: "Bachelor of Speech Pathology",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["occupational-therapist", "psychologist", "education-support-officer"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "psychologist",
    occupation: "Psychologist",
    h1: "How to become a psychologist in Australia",
    summary: "Psychologists study behaviour and mental processes, and apply that to assessment, therapy and research.",
    dayToDay: [
      "Assess clients using structured tools",
      "Plan and deliver evidence-based interventions",
      "Write reports for clients and referrers",
      "Work with schools, employers or health teams",
      "Maintain confidential case records",
    ],
    workEnvironment: "Private practice, health services, schools, workplaces and research, in consulting rooms and increasingly by telehealth.",
    licensing:
      "Psychologists must hold registration with the Psychology Board of Australia through Ahpra. Registration requires accredited study beyond a first degree plus supervised practice, so the degrees below are the first step rather than the whole path.",
    pathways: [
      {
        title: "Bachelor of Psychological Science",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Bachelor of Psychological Science with Honours",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Bachelor of Psychological Science, Bachelor of Business",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["counsellor", "mental-health-support-worker", "social-worker"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "health-promotion-officer",
    occupation: "Health promotion officer",
    h1: "How to become a health promotion officer in Australia",
    summary: "Health promotion officers design and run programs that help communities live healthier lives.",
    dayToDay: [
      "Assess community health needs",
      "Design and deliver health programs",
      "Run education and behaviour-change campaigns",
      "Work with schools, workplaces and local groups",
      "Evaluate programs and report on outcomes",
    ],
    workEnvironment: "Local government, community health services, non-profits and workplaces, mixing office work with community delivery.",
    pathways: [
      {
        title: "Bachelor of Health Science (Health and Lifestyle)",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["exercise-physiologist", "community-services-worker", "social-worker"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "biomedical-scientist",
    occupation: "Biomedical scientist",
    h1: "How to become a biomedical scientist in Australia",
    summary: "Biomedical scientists investigate how disease works, and run the laboratory testing that diagnosis depends on.",
    dayToDay: [
      "Run laboratory analyses and assays",
      "Maintain instruments and quality control",
      "Interpret and report results",
      "Follow strict laboratory safety and handling",
      "Support research projects and trials",
    ],
    workEnvironment: "Pathology laboratories, hospitals, universities and biotechnology companies, working to accredited procedures.",
    pathways: [
      {
        title: "Bachelor of Biomedical Science",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["laboratory-scientist", "registered-nurse"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "exercise-physiologist",
    occupation: "Exercise physiologist",
    h1: "How to become an exercise physiologist in Australia",
    summary: "Exercise physiologists prescribe exercise as treatment for injury, chronic disease and rehabilitation.",
    dayToDay: [
      "Assess movement, capacity and risk",
      "Prescribe and supervise exercise programs",
      "Rehabilitate injury and manage chronic conditions",
      "Educate clients on activity and lifestyle",
      "Report to referrers and funders",
    ],
    workEnvironment: "Clinics, hospitals, sporting organisations and community health, in gyms, clinics and rehabilitation spaces.",
    licensing:
      "Exercise and Sports Science Australia accredits practitioners, and accreditation is what most funders and referrers require. The profession is self-regulated rather than registered through Ahpra.",
    pathways: [
      {
        title: "Bachelor of Clinical Exercise Physiology",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Bachelor of Sport and Exercise Science",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Bachelor of Exercise Science and Psychological Science",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["occupational-therapist", "health-promotion-officer", "osteopath"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "osteopath",
    occupation: "Osteopath",
    h1: "How to become an osteopath in Australia",
    summary: "Osteopaths assess and treat pain and movement problems through manual therapy and rehabilitation.",
    dayToDay: [
      "Take a history and assess movement",
      "Treat using manual and manipulative therapy",
      "Prescribe rehabilitation exercises",
      "Advise on posture, load and activity",
      "Refer for imaging or medical review where needed",
    ],
    workEnvironment: "Private practice and multidisciplinary clinics, in treatment rooms, largely one to one.",
    licensing:
      "Osteopaths must hold registration with the Osteopathy Board of Australia through Ahpra before they can practise.",
    pathways: [
      {
        title: "Bachelor of Clinical Sciences (Osteopathic Studies)",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Master of Osteopathic Medicine",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["exercise-physiologist", "naturopath", "occupational-therapist"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "counsellor",
    occupation: "Counsellor",
    h1: "How to become a counsellor in Australia",
    summary: "Counsellors work with people through difficulty, using structured conversation to help them find a way forward.",
    dayToDay: [
      "Build a working relationship with the client",
      "Assess need, risk and goals",
      "Deliver counselling using established approaches",
      "Refer to specialist services where needed",
      "Keep confidential case notes",
    ],
    workEnvironment: "Private practice, community agencies, schools and employee assistance programs, in consulting rooms and by telehealth.",
    licensing:
      "Counselling is self-regulated. Membership of a body such as the Australian Counselling Association or PACFA is what most employers and funders look for, and each sets its own requirements.",
    pathways: [
      {
        title: "Bachelor of Counselling",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["psychologist", "mental-health-support-worker", "social-worker"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "social-worker",
    occupation: "Social worker",
    h1: "How to become a social worker in Australia",
    summary: "Social workers support people through hardship and advocate for them across the systems around them.",
    dayToDay: [
      "Assess client need, risk and safety",
      "Develop and review case plans",
      "Provide counselling and practical support",
      "Advocate with housing, health and legal systems",
      "Maintain records and statutory reporting",
    ],
    workEnvironment: "Hospitals, child protection, community agencies, courts and mental health services, mixing office work with home and field visits.",
    licensing:
      "The Australian Association of Social Workers sets the professional standard, and eligibility for membership is what most employers require. A Working with Children Check and a police check apply to most roles.",
    pathways: [
      {
        title: "Bachelor of Social Work",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Master of Social Work (Professional Qualifying)",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Graduate Certificate in Social Sciences for Social Work",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["community-services-worker", "counsellor", "psychologist"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "naturopath",
    occupation: "Naturopath",
    h1: "How to become a naturopath in Australia",
    summary: "Naturopaths use nutritional, herbal and lifestyle approaches to support health, alongside conventional care.",
    dayToDay: [
      "Take a detailed health and lifestyle history",
      "Develop nutritional and herbal treatment plans",
      "Advise on diet, sleep and activity",
      "Monitor progress and adjust plans",
      "Refer to medical practitioners where indicated",
    ],
    workEnvironment: "Private practice, integrative clinics and dispensaries, largely one-to-one consultations.",
    licensing:
      "Naturopathy is not registered through Ahpra. Professional association membership is what most private health funds and clinics require, and each association sets its own standards.",
    pathways: [
      {
        title: "Master of Naturopathic Medicine",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["osteopath", "health-promotion-officer", "exercise-physiologist"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "lawyer",
    occupation: "Lawyer",
    h1: "How to become a lawyer in Australia",
    summary: "Lawyers advise clients on the law, prepare their documents and represent them in disputes.",
    dayToDay: [
      "Advise clients on their rights and options",
      "Draft contracts, pleadings and correspondence",
      "Research case law and legislation",
      "Negotiate settlements and appear in matters",
      "Manage files and client confidentiality",
    ],
    workEnvironment: "Law firms, in-house legal teams, government and community legal centres, mostly office-based with court and client attendance.",
    licensing:
      "To practise you must be admitted to the legal profession by the Supreme Court in your state or territory and hold a practising certificate. Admission requires accredited academic study plus practical legal training, so a law degree is the first step rather than the whole path.",
    pathways: [
      {
        title: "Bachelor of Laws",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["paralegal", "social-worker", "business-administrator"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "paralegal",
    occupation: "Paralegal and legal support officer",
    h1: "How to become a paralegal and legal support officer in Australia",
    summary: "Paralegals do the research, drafting and file management that keeps legal matters moving.",
    dayToDay: [
      "Research legislation and case law",
      "Draft routine documents and correspondence",
      "Manage files, evidence and court deadlines",
      "Liaise with clients, courts and registries",
      "Support solicitors in preparing matters",
    ],
    workEnvironment: "Law firms, in-house legal teams, courts and government, office-based with registry and court errands.",
    pathways: [
      {
        title: "Bachelor of Legal and Justice Studies",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
      {
        title: "Associate Degree of Law (Paralegal Studies)",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["lawyer", "business-administrator", "community-services-worker"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "laboratory-scientist",
    occupation: "Laboratory scientist",
    h1: "How to become a laboratory scientist in Australia",
    summary: "Laboratory scientists design and run the experiments and analyses that produce scientific evidence.",
    dayToDay: [
      "Plan and run experiments and analyses",
      "Operate and calibrate laboratory instruments",
      "Record, analyse and present data",
      "Maintain quality control and safety standards",
      "Contribute to reports and publications",
    ],
    workEnvironment: "University, government, industrial and commercial laboratories, working to documented procedures.",
    pathways: [
      {
        title: "Bachelor of Science",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["biomedical-scientist", "veterinary-technician", "professional-engineer"],
    lastReviewed: "2026-09-10",
  },
  {
    slug: "veterinary-technician",
    occupation: "Veterinary technician",
    h1: "How to become a veterinary technician in Australia",
    summary: "Veterinary technicians provide the clinical and nursing care that veterinary practice depends on.",
    dayToDay: [
      "Prepare animals and equipment for procedures",
      "Monitor anaesthesia and recovery",
      "Take samples and run laboratory tests",
      "Administer treatments under veterinary direction",
      "Advise owners on aftercare",
    ],
    workEnvironment: "Veterinary clinics, emergency hospitals, wildlife and research facilities, physically active and sometimes distressing work.",
    pathways: [
      {
        title: "Bachelor of Veterinary Technology",
        register: "cricos",
        registerUrl: "https://cricos.education.gov.au/",
      },
    ],
    relatedCareers: ["laboratory-scientist", "biomedical-scientist"],
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

/**
 * Careers split by the kind of qualification that leads into them.
 *
 * Derived from the pathways rather than stored on the record, so the two lists
 * cannot drift away from the qualifications they claim to cover. Add a degree
 * to a career and it appears under higher education; add a training-package
 * qualification and it appears under vocational.
 *
 * Four careers appear in both, and that is the point rather than a bug. An
 * early childhood educator is the same job whether a Certificate III or a
 * Master of Teaching got them there, and a student browsing either list should
 * find it.
 */
export const vocationalCareers: Career[] = careers.filter((c) =>
  c.pathways.some((p) => p.register === "tga")
);

export const higherEducationCareers: Career[] = careers.filter((c) =>
  c.pathways.some((p) => p.register === "cricos")
);
