// Central place for business info + copy so it's easy to update in one spot.

export const site = {
  name: "Edmark Education",
  legalName: "Edmark Education",
  abn: "75 700 341 028",
  tagline: "Empowering students for life",
  domain: "edmark.com.au",
  // Canonical site URL. Strip any trailing slash so we never emit "//path".
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.edmark.com.au").replace(/\/+$/, ""),
  description:
    "Edmark Education is a trusted Australian education consultancy helping students choose the right course, university and pathway. Free consultation, expert guidance, admission to top institutions.",
  phone: "03 7057 3443",
  phoneHref: "tel:0370573443",
  email: "operations@edmark.com.au",
  emailHref: "mailto:operations@edmark.com.au",
  whatsappHref: "https://wa.me/61449212492",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX",
  address: {
    level: "Level 5",
    street: "12 Clark St",
    city: "Sunshine",
    state: "VIC",
    postcode: "3020",
    country: "Australia",
    full: "Level 5, 12 Clark St, Sunshine VIC 3020, Australia",
  },
  team: [
    {
      name: "Mahin Khan",
      role: "Education Consultant",
      credential: "ICEF Certified · QEAC No: #15175",
      email: "mahin@edmark.com.au",
      image: "/images/mahin.png",
    },
    {
      name: "Ashab Ahmed Sakib",
      role: "Education Consultant",
      credential: "",
      email: "sakib@edmark.com.au",
      image: "/images/sakib.png",
    },
    {
      name: "Abrar Hossain Chy Toha",
      role: "Operations Manager",
      credential: "",
      email: "abrar@edmark.com.au",
      image: "/images/abrar.png",
    },
  ],
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
  { label: "Partners", href: "/partners" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
