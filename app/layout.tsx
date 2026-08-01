import type { Metadata, Viewport } from "next";
import { Newsreader } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import ScrollReveal from "@/components/ScrollReveal";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import NotificationBar from "@/components/NotificationBar";
import ContactRail from "@/components/ContactRail";
import ExitIntentPopup from "@/components/ExitIntentPopup";

// Display and body serif. `adjustFontFallback` is off because Next has no
// metric overrides for Newsreader, which was emitting a build warning; an
// explicit Georgia fallback covers the swap instead.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: Study in Australia | Free Education Consulting`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "education consultant Australia",
    "study in Australia",
    "international student advisor",
    "university admission Australia",
    "student visa guidance",
    "course selection Melbourne",
    "education agent Sunshine VIC",
    "Edmark Education",
    "free education consultation Australia",
    "scholarship guidance Australia",
    "TAFE courses Melbourne",
    // "Group of Eight universities" removed: root keywords render on every
    // page, so it was naming institutions on the higher-education pages,
    // and none of the Go8 are partners.
    "study abroad Australia",
    "international student support Melbourne",
    "education agent Melbourne",
    "best education consultant Victoria",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: site.url,
    siteName: site.name,
    title: `${site.name}: Your Pathway to Studying in Australia`,
    description: site.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Edmark Education: Study in Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}: Study in Australia`,
    description: site.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "uSGONVt3j9FeBU1c5U8XoXxXHxBDuaFGo10cLt5jYnE",
  },
  category: "education",
};

export const viewport: Viewport = {
  themeColor: "#0F4A47",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  slogan: site.tagline,
  logo: `${site.url}/images/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.level}, ${site.address.street}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.postcode,
    addressCountry: "AU",
  },
  areaServed: "AU",
  sameAs: [
    site.social.facebook,
    site.social.instagram,
    site.social.linkedin,
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/images/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.level}, ${site.address.street}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.postcode,
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.7879,
    longitude: 144.8325,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  priceRange: "Free consultation",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
  publisher: {
    "@type": "Organization",
    name: site.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-AU"
      className={`${GeistSans.variable} ${GeistMono.variable} ${newsreader.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');try{if(sessionStorage.getItem('edmark_intro_seen')){document.documentElement.setAttribute('data-intro-seen','1')}}catch(e){}",
          }}
        />
      </head>
      <body>
        <GoogleAnalytics gaId={site.gaId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Intro />
        <ScrollReveal />
        <NotificationBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <ContactRail />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
