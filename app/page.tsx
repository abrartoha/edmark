import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustLogos from "@/components/TrustLogos";
// import CourseMatcher from "@/components/CourseMatcher";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { faqs } from "@/lib/content";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.slice(0, 5).map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <TrustBar />
      <TrustLogos />
      {/* Hidden until lib/pathways.ts holds real course data. The quiz gating
          itself works: the results screen only appears after question 5. But
          completing the quiz today surfaces three "PLACEHOLDER — replace before
          launch" cards, and any curious visitor will complete it.
          Re-enable by uncommenting the line below. */}
      {/* <CourseMatcher /> */}
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA tinted />
    </>
  );
}
