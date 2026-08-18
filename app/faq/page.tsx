import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Get answers to common questions about studying in Australia: courses, scholarships, costs, health cover and how Edmark Education can help you. Free consultation available.",
  alternates: { canonical: "/faq" },
};

const categories = [
  {
    heading: "General",
    items: faqs.slice(0, 5),
  },
  {
    heading: "Courses & Universities",
    items: faqs.slice(5, 10),
  },
  {
    heading: "Scholarships",
    items: faqs.slice(10, 14),
  },
  {
    heading: "Life in Australia",
    items: faqs.slice(14),
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about studying in Australia with Edmark Education. Can't find your answer? Book a free consultation."
      />
      <Breadcrumb items={[{ label: "FAQ" }]} />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page max-w-4xl">
          {categories.map((cat) => (
            <div key={cat.heading} className="mb-12 last:mb-0">
              <h2 className="mb-6 text-2xl font-medium text-brand-900">
                {cat.heading}
              </h2>
              <div className="reveal divide-y divide-brand-100 rounded-2xl border border-brand-100">
                {cat.items.map((f) => (
                  <details
                    key={f.q}
                    className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-brand-900">
                      {f.q}
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-transform group-open:rotate-45">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-brand-900/70">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Still have questions?"
        subtitle="Book a free, no-obligation consultation and get personalised answers about your specific situation."
      />
    </>
  );
}
