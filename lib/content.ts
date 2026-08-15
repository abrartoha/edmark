// Shared marketing content used across the homepage and inner pages.

export type Service = {
  slug: string;
  icon: "compass" | "graduation" | "document" | "trophy" | "plane" | "headset" | "research";
  title: string;
  short: string;
  long: string;
  points: string[];
  /**
   * Where the service is written up, when that is not /services/<slug>. Two of
   * these are course categories rather than services and live under /courses,
   * so every listing links straight there rather than through a redirect.
   */
  href?: string;
};

export const services: Service[] = [
  {
    slug: "student-counselling",
    icon: "compass",
    title: "Free Course Counselling",
    short:
      "Free, honest one-on-one counselling that maps your goals, budget and the right study path in Australia.",
    long: "Our experienced counsellors take the time to understand your academic background, career goals, budget and personal situation, then give you clear, unbiased advice on the best courses, institutions and pathways for you. No pressure, no hidden agenda, just guidance you can trust.",
    points: [
      "One-on-one session with an expert advisor",
      "Course, institution and pathway recommendations",
      "Budget, timeline and career-fit planning",
    ],
  },
  {
    slug: "short-courses",
    href: "/courses/short-courses",
    icon: "graduation",
    title: "Vocational (VET) & Short Courses",
    short:
      "Nationally recognised trade, care, cookery and short courses. Practical qualifications that lead to work rather than to another degree.",
    long: "Vocational education and training, VET, is the practical half of the Australian system. These are nationally recognised qualifications built around doing the job rather than studying the theory of it, and many of them lead to licensed or registered occupations. They are also the fastest and cheapest route to a recognised Australian qualification.\n\nWe cover trades such as carpentry, plumbing, electrical and automotive, the care sector across aged care and early childhood, commercial cookery and hospitality, and short security courses. Every one of these is delivered by a registered training organisation, and we check that the RTO and the course are the right ones for your visa and your goal before you enrol.",
    points: [
      "Trade apprenticeship qualifications",
      "Security licensing courses",
      "Aged Care (Certificate III & IV)",
      "Child Care / Early Childhood Education & Care",
      "RTO selection and enrolment support",
    ],
  },
  {
    slug: "application-support",
    icon: "document",
    title: "Application & Enrolment Support",
    short:
      "We prepare, submit and track your applications, then carry you through offer, payment and CoE.",
    long: "An application fails on detail far more often than on grades. We build your document set, check every transcript and English result against the institution's own criteria, and submit to several providers in parallel so you are not waiting on a single answer. From there we chase admissions on your behalf, talk you through each offer, and handle acceptance, tuition payment and your Confirmation of Enrolment (CoE).\n\nWe also help you prepare for the Genuine Student (GS) requirement, which replaced the old Genuine Temporary Entrant test in March 2024. GS asks targeted questions, each answered in 150 words or fewer, about why you chose this course, how it fits your background and career plans, and how you will meet your visa conditions. Unlike GTE, it accepts that you may later seek permanent residency, provided study is your genuine primary purpose. We help you answer it consistently and in your own voice.",
    points: [
      "Document checklist and transcript preparation",
      "Parallel applications to several institutions",
      "Genuine Student (GS) statement guidance",
      "Offer comparison, acceptance and tuition payment",
      "Confirmation of Enrolment (CoE) and deadline tracking",
    ],
  },
  {
    slug: "health-insurance",
    icon: "document",
    title: "OSHC Health Cover",
    short:
      "Arrange the Overseas Student Health Cover (OSHC) required for your student visa, quick and hassle-free.",
    long: "Every international student needs Overseas Student Health Cover (OSHC) for the length of their visa. We help you compare providers, choose the right level of cover for yourself or your family, and arrange your policy so your visa and enrolment requirements are fully met.",
    points: [
      "Compare OSHC providers and levels of cover",
      "Single, couple and family policies",
      "Cover arranged for visa and CoE requirements",
      "Guidance on claims and renewals",
    ],
  },
  {
    slug: "pte-naati-py",
    icon: "headset",
    title: "PTE & NAATI Test Prep",
    short:
      "Preparation, strategy and booking support for PTE Academic and the NAATI CCL test.",
    long: "English proficiency and community-language credentials both carry weight in the skilled migration points test, and both reward preparation. We help you work out which test suits you, what score to aim for, and how to prepare for it, then support you through booking and results. PTE Academic is accepted by every Australian university and by the Department of Home Affairs, while the NAATI CCL test rewards applicants who speak an eligible community language.",
    points: [
      "Choosing between PTE Academic and IELTS",
      "Target score planning for your course and visa",
      "Practice resources and test-day strategy",
      "NAATI CCL (community language) preparation",
      "Booking support and results guidance",
    ],
  },
  {
    slug: "professional-year",
    icon: "trophy",
    title: "Professional Year",
    short:
      "A 44-week program for accounting, IT and engineering graduates, including a 12-week internship, worth 5 points toward skilled migration.",
    long: "The Professional Year Program runs for 44 weeks and combines classroom learning in Australian workplace practice with a 12-week internship at a host company in your field. Completed with an approved provider in an area related to your nominated occupation, it is worth 5 points in the skilled migration points test, and the local experience is often worth more than the points.\n\nTo enrol you generally need a Temporary Graduate (subclass 485) visa and a bachelor degree or higher from an Australian institution in accounting, IT or engineering, recognised by the body that governs your stream: ACS for IT, CPA Australia or CA ANZ for accounting, and Engineers Australia for engineering. Because the program takes about a year, apply at least 12 months before your visa expires.\n\nA Professional Year on its own does not guarantee permanent residency. It is one input alongside your occupation, English score, work experience and skills assessment, and the rules change. We help you choose a provider and time your enrolment, and refer you to a registered migration agent (MARA) for formal migration advice.",
    points: [
      "44 weeks, including a 12-week industry internship",
      "Accounting, IT and engineering streams",
      "5 points toward the skilled migration points test",
      "Eligibility check against your 485 visa and degree",
      "Approved provider selection and enrolment",
      "Referral to a registered migration agent for formal advice",
    ],
  },
  {
    slug: "research-degrees",
    href: "/courses/research-degrees",
    icon: "research",
    title: "Research Degrees",
    short:
      "From supervisor match to a winning research proposal, full support for Masters by Research and PhD applications.",
    long: "Research degrees are very different from coursework programs. You need a strong research proposal, a supervisor match, and evidence of research capability. We guide you through every step, from identifying the right research group to crafting a proposal that gets accepted at leading Australian universities.",
    points: [
      "Research proposal writing and review",
      "Supervisor identification and matching",
      "PhD and Masters by Research application support",
      "Research scholarship and funding guidance",
      "Academic CV and publication portfolio preparation",
    ],
  },
];

/**
 * The long-form half of a service write-up. Kept beside the services rather
 * than inside the /services/[slug] route, because two of these pages now live
 * under /courses and both routes read from the same place.
 */
export type ServiceExtras = {
  whoFor: string[];
  whatToExpect: string[];
  extended: string;
};

export const serviceExtras: Record<string, ServiceExtras> = {
  "student-counselling": {
    extended:
      "Choosing what and where to study is one of the biggest decisions you'll make, and it shouldn't be rushed or based on incomplete information. Our student counselling sessions are designed to give you clarity. We explore your academic history, career aspirations, budget and personal circumstances to build a realistic, personalised study plan.\n\nUnlike agents who push whichever institution pays the most, we recommend what's genuinely right for you. That's why most of our students come to us through referrals.",
    whoFor: [
      "High school leavers unsure which course to pursue",
      "Working professionals looking to upskill or change careers",
      "International students exploring Australian education options",
      "Parents seeking guidance for their children's education",
    ],
    whatToExpect: [
      "A relaxed conversation, in person or online",
      "An honest assessment of your options based on your profile",
      "A personalised shortlist of courses and institutions",
      "Clear next steps and a timeline for your journey",
    ],
  },
  "application-support": {
    extended:
      "Applications are lost on detail far more often than on grades: a missing transcript page, an English result that expired last month, a course code that changed between intakes. We build your document set against each institution's own criteria, submit to several providers in parallel so you are never waiting on a single answer, and chase admissions on your behalf until decisions land.\n\nOnce offers arrive we go through them with you honestly, including the ones we think you should turn down, then handle acceptance, tuition payment and your Confirmation of Enrolment (CoE). We also prepare you for the Genuine Student (GS) requirement, which replaced the Genuine Temporary Entrant test in March 2024 and asks targeted questions, 150 words or fewer each, about why this course, why now, and how it fits your career.",
    whoFor: [
      "Students applying to more than one institution at once",
      "Anyone who has had an application delayed or knocked back",
      "Applicants unsure how to answer the Genuine Student questions",
      "Students transferring between providers or courses",
    ],
    whatToExpect: [
      "A document checklist tailored to each provider",
      "Applications lodged in parallel, not one at a time",
      "Draft review of your Genuine Student responses",
      "A plain comparison of every offer you receive",
      "Acceptance, payment and CoE handled end to end",
    ],
  },
  "health-insurance": {
    extended:
      "Overseas Student Health Cover (OSHC) is a mandatory requirement for your student visa. You must hold valid cover for the entire length of your stay. Choosing the right policy protects both your visa status and your health while you study.\n\nWe make it simple. We compare the major OSHC providers, explain what's covered, and help you arrange single, couple or family cover that matches your visa dates and enrolment. If you ever need to make a claim or renew, we're here to help.",
    whoFor: [
      "New international students applying for a student visa",
      "Students bringing a partner or family to Australia",
      "Anyone renewing or extending their existing cover",
      "Students unsure which provider or level of cover to choose",
    ],
    whatToExpect: [
      "A comparison of OSHC providers and levels of cover",
      "The right policy for your visa and CoE dates",
      "Help arranging single, couple or family cover",
      "Guidance on claims, extensions and renewals",
    ],
  },
  "research-degrees": {
    extended:
      "Research degrees such as Masters by Research and PhDs are fundamentally different from coursework programs. There are no set classes or assignments. Instead, you work closely with a supervisor on an original research project that contributes new knowledge to your field. Getting accepted requires a completely different application strategy.\n\nUniversities don't just look at your grades. They want a well-defined research proposal, evidence of research capability, and a clear alignment between your interests and the expertise of their academic staff. Most importantly, you often need a supervisor willing to take you on before you even submit your formal application.\n\nThis is where most applicants struggle, with generic proposals, vague supervisor emails, or applications sent without understanding what the research group needs. We help you navigate the process, from identifying the right research group to crafting a proposal that gets accepted at leading Australian universities.",
    whoFor: [
      "Graduates wanting to pursue a Masters by Research in Australia",
      "PhD applicants looking for supervisor matches",
      "Researchers needing help writing or refining a research proposal",
      "Honours graduates considering the transition to a research career",
    ],
    whatToExpect: [
      "A detailed assessment of your research background and interests",
      "Supervisor search and shortlisting across Australian universities",
      "Research proposal drafting, structuring and review",
      "Academic CV support and research scholarship guidance",
    ],
  },
  "pte-naati-py": {
    extended:
      "English proficiency, community-language credentials and Australian work experience can each add valuable points toward skilled migration. PTE Academic is one of the most widely accepted English tests, the NAATI CCL test rewards applicants who speak an eligible community language, and the Professional Year Program (PYP) provides supervised local work experience for graduates in accounting, IT and engineering.\n\nWe help you understand which tests and programs apply to you, what scores to aim for, and how to prepare, including practice resources, test strategy, booking support, and enrolment into an approved Professional Year provider.",
    whoFor: [
      "Students needing an English test for a visa or admission",
      "Skilled migration applicants seeking extra points",
      "Bilingual applicants eligible for the NAATI CCL test",
      "Accounting, IT and engineering graduates considering a Professional Year",
    ],
    whatToExpect: [
      "Advice on the right test and target score for your goal",
      "PTE Academic preparation and booking support",
      "NAATI CCL guidance and study resources",
      "Professional Year Program eligibility and provider selection",
    ],
  },
  "professional-year": {
    extended:
      "The Professional Year Program runs 44 weeks and pairs classroom learning in Australian workplace practice with a 12-week internship at a host company in your field. For many graduates the internship matters more than the points: it is often the first line of local experience on an Australian resume.\n\nCompleted with an approved provider in an area related to your nominated occupation, it is worth 5 points in the skilled migration points test. You will generally need a Temporary Graduate (subclass 485) visa and an Australian bachelor degree or higher in accounting, IT or engineering, recognised by the body governing your stream: ACS, CPA Australia or CA ANZ, or Engineers Australia. Since the program takes about a year, start it at least 12 months before your 485 expires.\n\nOne caution we would rather give up front: a Professional Year does not on its own deliver permanent residency. It sits alongside your occupation, English score, work experience and skills assessment, and those settings change. We help you choose a provider and time your enrolment, then refer you to a registered migration agent (MARA) for formal advice.",
    whoFor: [
      "Accounting, IT and engineering graduates of Australian degrees",
      "Temporary Graduate (485) visa holders planning their next step",
      "Graduates with no Australian work experience yet",
      "Anyone weighing 5 points against a year of study",
    ],
    whatToExpect: [
      "An eligibility check against your degree and visa",
      "Provider comparison across the three streams",
      "Timing advice so the program fits inside your 485",
      "Enrolment support and document preparation",
      "Referral to a MARA agent for formal migration advice",
    ],
  },
  "short-courses": {
    extended:
      "Short vocational (VET) courses are one of the fastest, most affordable ways to gain nationally recognised, job-ready skills. Whether you want to start working sooner or add a practical qualification, these courses open doors in high-demand industries.\n\nWe help you choose the right course and provider in popular areas such as Security, Aged Care and Child Care, and connect you with quality registered training organisations (RTOs) so your qualification is recognised and respected by employers.",
    whoFor: [
      "People wanting job-ready skills quickly",
      "Students seeking an affordable, practical qualification",
      "Anyone entering security, aged care or child care",
      "Workers looking to upskill or change fields",
    ],
    whatToExpect: [
      "Help choosing the right short course for your goal",
      "Matching to a quality registered training organisation (RTO)",
      "Guidance on licensing and certification requirements",
      "Enrolment support from start to finish",
    ],
  },
};

export const steps = [
  {
    n: "01",
    title: "Book your free consultation",
    body: "Tell us your goals in a relaxed, no-pressure chat, online or at our Sunshine office.",
  },
  {
    n: "02",
    title: "Get your personalised plan",
    body: "We shortlist the best-fit courses, universities and scholarships for your profile and budget.",
  },
  {
    n: "03",
    title: "We handle your application",
    body: "Documents, submissions and follow-ups, managed end to end so you never miss a deadline.",
  },
  {
    n: "04",
    title: "Enrol and take off",
    body: "Accept your offer with confidence and get pre-departure support all the way to campus.",
  },
];

export const reasons = [
  {
    title: "Advice you can actually trust",
    body: "We recommend what's right for you, with honest, student-first guidance every time. Your goals come before anything else.",
  },
  {
    title: "Direct university partnerships",
    body: "Established relationships with leading Australian institutions mean faster offers and stronger applications.",
  },
  {
    title: "End-to-end, done-for-you service",
    body: "From first chat to first class, one dedicated advisor manages everything, with no runaround and no confusion.",
  },
  {
    title: "Proven results",
    body: "Hundreds of students placed into the right courses, and a reputation built on referrals, not ads.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  /** Origin to destination, where we have it on record. */
  route?: string;
  /** Where they are now. Only filled in when we can verify it. */
  outcome?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I had no idea where to start. Edmark mapped out three perfect courses, got my application in early, and I received my offer within weeks. Genuinely life-changing.",
    name: "Priya S.",
    detail: "Bachelor of Nursing, Australian Catholic University",
    route: "India to Melbourne",
    outcome: "Now a registered nurse at a Melbourne hospital",
  },
  {
    quote:
      "The scholarship advice alone saved me thousands. They treated my future like it was their own. I recommend Edmark to every student I meet.",
    name: "Arjun M.",
    detail: "Master of IT, Melbourne Institute of Technology",
    route: "India",
    outcome: "Now working at Deloitte",
  },
];

export const faqs = [
  // General
  {
    q: "How much does your consultation cost?",
    a: "Your initial consultation is completely free, with no hidden fees and no obligations. We're here to help you find the best path forward.",
  },
  {
    q: "How does the consultation process work?",
    a: "It starts with a free, no-pressure conversation where we learn about your goals, academic background and budget. From there, we create a personalised study plan, shortlist the best-fit courses and universities, and manage the entire application process for you.",
  },
  {
    q: "Who can use your services?",
    a: "We help international students from all backgrounds and at every stage of their education journey. Whether you're looking to start a diploma, pursue a bachelor's or master's degree, or advance into research, we're here to help.",
  },
  {
    q: "How long does the entire process take?",
    a: "From first consultation to receiving an offer typically takes 4–8 weeks, depending on the institution and intake period. We recommend starting at least 3–6 months before your intended start date to allow time for visa processing.",
  },
  {
    q: "Can I consult online or does it have to be in person?",
    a: "Both! We offer face-to-face consultations at our Sunshine, VIC office as well as video calls and phone consultations for students anywhere in Australia or overseas. The quality of service is the same regardless of format.",
  },
  // Courses & Universities
  {
    q: "Which courses and institutions do you work with?",
    a: "We work across the full spectrum of Australian education, including universities, TAFEs, private colleges like PIA, AAHE, VIT and SISTC, English language schools, and foundation/pathway programs. Our partnerships span over 50 institutions across Australia.",
  },
  {
    q: "How do I choose the right course?",
    a: "We assess your academic background, career goals, budget and lifestyle preferences to shortlist the courses where you'll thrive. We consider employability outcomes, course structure, campus culture and location so you make an informed decision, not a rushed one.",
  },
  {
    q: "What is the Group of Eight?",
    a: "The Group of Eight (Go8) is a coalition of Australia's eight leading research universities: University of Melbourne, ANU, University of Sydney, UNSW, University of Queensland, Monash, University of Western Australia, and University of Adelaide. They are consistently ranked among the world's top universities.",
  },
  {
    q: "What is the difference between university and TAFE?",
    a: "Universities offer bachelor's, master's, and PhD programs with a focus on theory and research. TAFEs (Technical and Further Education) offer practical, vocational training through certificates and diplomas. Many students use TAFE as a pathway to university with credit transfer.",
  },
  {
    q: "What English language score do I need?",
    a: "Requirements vary by institution and course level. Generally, undergraduate programs require an IELTS score of 6.0–6.5, while postgraduate programs may require 6.5–7.0. We'll check the exact requirements for your chosen course and advise on test preparation if needed.",
  },
  // Scholarships
  {
    q: "Can you help me find scholarships?",
    a: "Yes. Finding and winning funding is one of our specialities. We screen your eligibility for every relevant scholarship, grant and fee discount and help you apply.",
  },
  {
    q: "What types of scholarships are available?",
    a: "There are merit-based scholarships (for academic excellence), need-based scholarships (for financial hardship), government-funded scholarships (like Australia Awards), university-specific scholarships, country-specific scholarships, and field-specific scholarships. We help you identify which ones you qualify for.",
  },
  {
    q: "When should I apply for scholarships?",
    a: "We recommend starting at least 6–12 months before your intended enrolment date. Many scholarships have early deadlines and competitive application processes. The sooner you start, the more opportunities you can pursue.",
  },
  {
    q: "Can I get a full scholarship?",
    a: "Full scholarships are competitive but absolutely available, particularly through programs like Australia Awards and some university-specific schemes. Most students receive partial scholarships that significantly reduce tuition fees. We'll be upfront about your chances and help you maximise your application.",
  },
  // Visa & Life in Australia
  {
    q: "Do you help with student visa applications?",
    a: "While we are not migration agents, we guide you through the student visa (Subclass 500) process step by step. We help you understand the requirements, prepare your documentation, and connect you with a registered migration agent if you need specialist visa assistance.",
  },
  {
    q: "Can I work while studying in Australia?",
    a: "Yes! Student visa holders can work up to 48 hours per fortnight during study periods and unlimited hours during scheduled breaks. This allows many students to gain valuable work experience and supplement their living costs while studying.",
  },
  {
    q: "How much does it cost to live in Australia as a student?",
    a: "Two different numbers matter here. For your visa you must show access to at least AUD $29,710 per year for living costs, which is the Australian Government's financial capacity requirement and is not negotiable. What you actually spend is a separate question: in Melbourne most students find accommodation, food, transport and personal expenses land somewhere around AUD $24,000 to $30,000 a year depending on how you live, and regional areas are cheaper. Budget to the visa figure, not to the lifestyle one. We go through both with you during your consultation.",
  },
  {
    q: "What is OSHC and do I need it?",
    a: "Overseas Student Health Cover (OSHC) is mandatory health insurance for international students in Australia. It covers essential medical and hospital services. The cost is approximately $500–$700 AUD per year, and we help you choose the right provider and plan.",
  },
  {
    q: "Do you help after I get my offer?",
    a: "Absolutely. We provide full pre-departure support covering accommodation, health cover, banking and orientation, plus ongoing help throughout your studies.",
  },
  {
    q: "Where are you located?",
    a: "Our office is at Level 5, 12 Clarke Street, Sunshine VIC 3020. We also support students Australia-wide and internationally via phone, email and video call.",
  },
  // Research Degrees
  {
    q: "Do you help with Masters by Research and PhD applications?",
    a: "Yes, research degree support is one of our specialist services. We help you identify suitable supervisors, write a compelling research proposal, prepare your academic CV and publication portfolio, and manage the entire application process. Research degrees have unique requirements that differ significantly from coursework programs, and our team understands exactly what universities look for.",
  },
  {
    q: "Can you help me write a research proposal?",
    a: "Absolutely. A strong research proposal is the most critical part of a research degree application. We help you define your research questions, structure your methodology, review your literature positioning, and refine your proposal until it meets the standards expected by Australian universities. We've helped students get accepted into competitive research programs at Group of Eight universities.",
  },
  {
    q: "How do I find a PhD supervisor in Australia?",
    a: "Finding the right supervisor is essential for a successful research degree. We help you search university research profiles, identify academics whose work aligns with your interests, and craft a professional initial approach email. We also advise on what supervisors look for in a candidate and how to present your research experience effectively.",
  },
  {
    q: "Are there scholarships for research degree students?",
    a: "Yes. Research students have access to specific funding that coursework students don't, including Research Training Program (RTP) scholarships from the Australian Government, university-funded research scholarships, and industry-partnered PhD stipends. Many of these cover full tuition plus a living allowance of $30,000–$35,000 AUD per year. We help you identify and apply for every scholarship you're eligible for.",
  },
];

// ---------------------------------------------------------------------------
// The five questions shown on the homepage. The full set above stays intact and
// /faq keeps rendering all of it, so nothing here removes content from the site.
// Selected by question text and validated at module load: if one of these is
// reworded above, the build fails rather than the homepage quietly dropping a
// question.
// ---------------------------------------------------------------------------
const homepageFaqQuestions = [
  "How much does your consultation cost?",
  "How does the consultation process work?",
  "How long does the entire process take?",
  "Can I consult online or does it have to be in person?",
  "Do you help with student visa applications?",
];

export const homepageFaqs = homepageFaqQuestions.map((q) => {
  const found = faqs.find((f) => f.q === q);
  if (!found) throw new Error(`Homepage FAQ not found in faqs: "${q}"`);
  return found;
});
