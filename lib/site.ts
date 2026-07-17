// Central place for business info + copy so it's easy to update in one spot.

export const site = {
  name: "Edmark Education",
  legalName: "Edmark Education",
  tagline: "Empowering students for life",
  domain: "edmark.com.au",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://edmark.com.au",
  description:
    "Edmark Education is a trusted Australian education consultancy helping students choose the right course, university and pathway. Free consultation, expert guidance, admission to top institutions.",
  phone: "+61 3 7057 3443",
  phoneHref: "tel:+61370573443",
  email: "mahin@edmark.com.au",
  emailHref: "mailto:mahin@edmark.com.au",
  whatsappHref: "https://wa.me/61449212492",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX",
  address: {
    street: "12 Clark St",
    city: "Sunshine",
    state: "VIC",
    postcode: "3020",
    country: "Australia",
    full: "12 Clark St, Sunshine VIC 3020, Australia",
  },
  contact: {
    name: "Mahin Khan",
    role: "Business Development Manager",
  },
  hours: "Mon–Sat: 9:00am – 6:00pm",
  social: {
    facebook: "https://facebook.com/edmarkeducation",
    instagram: "https://instagram.com/edmarkeducation",
    linkedin: "https://linkedin.com/company/edmark-education",
    tiktok: "https://tiktok.com/@edmarkeducation",
    youtube: "https://youtube.com/@edmarkeducation",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
