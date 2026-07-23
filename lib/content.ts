// Shared marketing content used across the homepage and inner pages.

export type Service = {
  slug: string;
  icon: "compass" | "graduation" | "document" | "trophy" | "plane" | "headset" | "research";
  title: string;
  short: string;
  long: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "free-career-counselling",
    icon: "compass",
    title: "Free Career Counselling",
    short:
      "One honest conversation that maps your strengths, goals and budget to the right course.",
    long: "We start by understanding you — your academic background, career ambitions, budget and lifestyle. Then we build a personalised study roadmap so every step you take moves you closer to the career you actually want.",
    points: [
      "One-on-one guidance with an expert advisor",
      "Career and course fit assessment",
      "Realistic budget and ROI planning",
    ],
  },
  {
    slug: "university-course-selection",
    icon: "graduation",
    title: "University & Course Selection",
    short:
      "Cut through 40+ institutions and 1,000+ courses to the handful that are perfect for you.",
    long: "With partnerships across Australia's leading universities, TAFEs and colleges, we shortlist options that match your profile, maximise your acceptance odds and set you up for a job after graduation — not just a degree.",
    points: [
      "Matched to universities, TAFEs, private colleges & pathway providers",
      "Entry-requirement and eligibility check",
      "Course outcomes and employability review",
    ],
  },
  {
    slug: "admission-application",
    icon: "document",
    title: "Admission & Application",
    short:
      "We handle the paperwork, deadlines and documents — you avoid costly mistakes.",
    long: "From statements of purpose to document certification and submission, our team manages your entire application so nothing gets missed. Faster offers, fewer rejections, zero guesswork.",
    points: [
      "Application preparation & submission",
      "Statement of purpose and CV support",
      "Deadline and document tracking",
    ],
  },
  {
    slug: "scholarship-guidance",
    icon: "trophy",
    title: "Scholarship Guidance",
    short:
      "Don't leave money on the table — we help you find and win the funding you qualify for.",
    long: "Many students overpay because they never apply for scholarships they were eligible for. We identify every grant, discount and merit scholarship you qualify for and help you present a winning application.",
    points: [
      "Scholarship eligibility screening",
      "Application and essay support",
      "Fee and payment-plan advice",
    ],
  },
  {
    slug: "pre-departure-support",
    icon: "plane",
    title: "Pre-Departure Support",
    short:
      "Arrive confident — accommodation, banking, and settling-in advice sorted before you fly.",
    long: "Your journey doesn't end with an offer letter. We prepare you for life in Australia with practical guidance on accommodation, health cover, banking and your first weeks on campus.",
    points: [
      "Accommodation and living-cost guidance",
      "Health cover (OSHC) and banking setup",
      "Orientation and settling-in checklist",
    ],
  },
  {
    slug: "ongoing-student-support",
    icon: "headset",
    title: "Ongoing Student Support",
    short:
      "A team that stays in your corner long after enrolment — because your success is our reputation.",
    long: "Need to change courses, extend a program, or plan your next step after graduation? We're here for the whole journey, with responsive support whenever you need it.",
    points: [
      "Course transfer and progression advice",
      "Continued academic guidance",
      "One point of contact you can trust",
    ],
  },
  {
    slug: "research-degree-support",
    icon: "research",
    title: "Research Degree Support",
    short:
      "From finding the right supervisor to writing a winning research proposal — we help you secure your Masters by Research or PhD place.",
    long: "Research degrees are different from coursework programs. You need a strong research proposal, a supervisor match, evidence of research capability, and often publications or prior research experience. We guide you through every step — from identifying the right research group to crafting a proposal that gets accepted.",
    points: [
      "Research proposal writing and review",
      "Supervisor identification and matching",
      "PhD and Masters by Research application support",
      "Research scholarship and funding guidance",
      "Academic CV and publication portfolio preparation",
    ],
  },
];

export const steps = [
  {
    n: "01",
    title: "Book your free consultation",
    body: "Tell us your goals in a relaxed, no-pressure chat — online or at our Sunshine office.",
  },
  {
    n: "02",
    title: "Get your personalised plan",
    body: "We shortlist the best-fit courses, universities and scholarships for your profile and budget.",
  },
  {
    n: "03",
    title: "We handle your application",
    body: "Documents, submissions and follow-ups — managed end to end so you never miss a deadline.",
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
    body: "We recommend what's right for you — honest, student-first guidance every time. Your goals come before anything else.",
  },
  {
    title: "Direct university partnerships",
    body: "Established relationships with leading Australian institutions mean faster offers and stronger applications.",
  },
  {
    title: "End-to-end, done-for-you service",
    body: "From first chat to first class, one dedicated advisor manages everything — no runaround, no confusion.",
  },
  {
    title: "Proven results",
    body: "Hundreds of students placed, a 98% visa success rate, and a reputation built on referrals, not ads.",
  },
];

export const testimonials = [
  {
    quote:
      "I had no idea where to start. Edmark mapped out three perfect courses, got my application in early, and I received my offer within weeks. Genuinely life-changing.",
    name: "Priya S.",
    detail: "Bachelor of Nursing, Melbourne",
  },
  {
    quote:
      "The scholarship advice alone saved me thousands. They treated my future like it was their own. I recommend Edmark to every student I meet.",
    name: "Arjun M.",
    detail: "Master of IT",
  },
  {
    quote:
      "Professional, responsive and genuinely caring. Mahin and the team answered every question and made a stressful process feel simple.",
    name: "Lucia F.",
    detail: "Diploma of Business",
  },
];

export const faqs = [
  // General
  {
    q: "How much does your consultation cost?",
    a: "Your initial consultation is completely free — no hidden fees, no obligations. We're here to help you find the best path forward.",
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
    a: "We work across the full spectrum of Australian education — universities, TAFEs, private colleges like PIA, AAHE, VIT and SISTC, English language schools, and foundation/pathway programs. Our partnerships span over 50 institutions across Australia.",
  },
  {
    q: "How do I choose the right course?",
    a: "We assess your academic background, career goals, budget and lifestyle preferences to shortlist the courses where you'll thrive. We consider employability outcomes, course structure, campus culture and location so you make an informed decision — not a rushed one.",
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
    a: "Living costs vary by city. In Melbourne, budget approximately $21,000–$25,000 AUD per year for accommodation, food, transport and personal expenses. Regional areas are typically more affordable. We provide detailed cost breakdowns for your specific situation during consultation.",
  },
  {
    q: "What is OSHC and do I need it?",
    a: "Overseas Student Health Cover (OSHC) is mandatory health insurance for international students in Australia. It covers essential medical and hospital services. The cost is approximately $500–$700 AUD per year, and we help you choose the right provider and plan.",
  },
  {
    q: "Do you help after I get my offer?",
    a: "Absolutely. We provide full pre-departure support — accommodation, health cover, banking and orientation — plus ongoing help throughout your studies.",
  },
  {
    q: "Where are you located?",
    a: "Our office is at 12 Clark St, Sunshine VIC 3020. We also support students Australia-wide and internationally via phone, email and video call.",
  },
  // Research Degrees
  {
    q: "Do you help with Masters by Research and PhD applications?",
    a: "Yes — research degree support is one of our specialist services. We help you identify suitable supervisors, write a compelling research proposal, prepare your academic CV and publication portfolio, and manage the entire application process. Research degrees have unique requirements that differ significantly from coursework programs, and our team understands exactly what universities look for.",
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
