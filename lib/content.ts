// Shared marketing content used across the homepage and inner pages.

export type Service = {
  icon: "compass" | "graduation" | "document" | "trophy" | "plane" | "headset";
  title: string;
  short: string;
  long: string;
  points: string[];
};

export const services: Service[] = [
  {
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
    icon: "graduation",
    title: "University & Course Selection",
    short:
      "Cut through 40+ institutions and 1,000+ courses to the handful that are perfect for you.",
    long: "With partnerships across Australia's leading universities, TAFEs and colleges, we shortlist options that match your profile, maximise your acceptance odds and set you up for a job after graduation — not just a degree.",
    points: [
      "Matched to Group of Eight & specialist providers",
      "Entry-requirement and eligibility check",
      "Course outcomes and employability review",
    ],
  },
  {
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
    body: "We recommend what's right for you — not whoever pays the biggest commission. Honest, student-first guidance every time.",
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
  {
    q: "How much does your consultation cost?",
    a: "Your initial consultation is completely free. We're paid by our partner institutions when you enrol, so our expert guidance costs you nothing.",
  },
  {
    q: "Which courses and institutions do you work with?",
    a: "We work across the full spectrum of Australian education — universities (including Group of Eight), TAFEs, private colleges, English language schools, and foundation/pathway programs.",
  },
  {
    q: "Can you help me find scholarships?",
    a: "Yes. Finding and winning funding is one of our specialities. We screen your eligibility for every relevant scholarship, grant and fee discount and help you apply.",
  },
  {
    q: "Do you help after I get my offer?",
    a: "Absolutely. We provide full pre-departure support — accommodation, health cover, banking and orientation — plus ongoing help throughout your studies.",
  },
  {
    q: "Where are you located?",
    a: "Our office is at 12 Clark St, Sunshine VIC 3020. We also support students Australia-wide and internationally via phone, email and video call.",
  },
];
