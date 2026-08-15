import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import PartnerCarousel from "@/components/PartnerCarousel";
import CourseMatcher from "@/components/CourseMatcher";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

// Absolute, because the root title template would otherwise append the site
// name to a title that already opens with it.
export const metadata: Metadata = pageSeo({
  title: `${site.name}: Study in Australia | Free Education Consulting`,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

// No FAQPage here. The homepage carries an abridged five-question set and
// /faq carries all of them, so publishing both invites a mismatch flag
// between the markup and the page a searcher lands on. /faq holds it.

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PartnerCarousel />
      <CourseMatcher />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA tinted />
    </>
  );
}
