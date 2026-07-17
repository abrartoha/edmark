import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { IconPhone, IconMail, IconPin } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Consultation",
  description:
    "Book your free education consultation with Edmark Education. Call, email or visit our Sunshine VIC office. Expert, no-obligation advice for studying in Australia.",
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: IconPhone,
    label: "Call us",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: IconMail,
    label: "Email us",
    value: site.email,
    href: site.emailHref,
  },
  {
    icon: IconPin,
    label: "Visit us",
    value: site.address.full,
    href: `https://maps.google.com/?q=${encodeURIComponent(site.address.full)}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's talk"
        title="Book your free consultation"
        subtitle="Tell us where you want to go — we'll show you the fastest, smartest way to get there. No cost, no pressure, no obligation."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-bold text-brand-900">
              Speak with an advisor today
            </h2>
            <p className="mt-3 text-brand-900/70">
              Prefer to talk directly? Reach out any way you like — we usually
              reply within one business day, often much sooner.
            </p>

            <div className="mt-8 space-y-4">
              {details.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  className="flex items-start gap-4 rounded-2xl border border-brand-100 p-5 transition hover:border-brand-200 hover:bg-brand-50"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient text-brand-950">
                    <d.icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-brand-500">
                      {d.label}
                    </span>
                    <span className="mt-1 block font-semibold text-brand-900">
                      {d.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-brand-50 p-5">
              <p className="text-sm font-semibold text-brand-900">
                Office hours
              </p>
              <p className="mt-1 text-sm text-brand-900/70">{site.hours}</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-brand-50 pb-16 lg:pb-24">
        <div className="container-page">
          <div className="overflow-hidden rounded-3xl border border-brand-100 shadow-soft">
            <iframe
              title="Edmark Education office location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                site.address.full
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
