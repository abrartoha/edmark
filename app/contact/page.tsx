import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { IconPhone, IconMail, IconPin, IconStar } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us: Book a Free Consultation",
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
        subtitle="Tell us where you want to go and we'll show you the fastest, smartest way to get there. No cost, no pressure, no obligation."
      />
      <Breadcrumb items={[{ label: "Contact" }]} />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <h2 className="text-2xl font-bold text-brand-900">
              Speak with an advisor today
            </h2>
            <p className="mt-3 text-brand-900/70">
              Prefer to talk directly? Reach out any way you like. We usually
              reply within <strong>2 hours</strong> during business hours.
            </p>

            <div className="mt-8 space-y-4">
              {details.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  className="flex items-start gap-4 rounded-2xl border border-brand-100 p-5 transition hover:border-brand-200 hover:bg-brand-50"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500 text-brand-950">
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

              {/* WhatsApp CTA */}
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-green-200 bg-green-50 p-5 transition hover:border-green-300 hover:bg-green-100"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white" style={{ backgroundColor: "#25D366" }}>
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-green-700">
                    Chat on WhatsApp
                  </span>
                  <span className="mt-1 block font-semibold text-green-900">
                    Quick replies, even on weekends
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-6 rounded-2xl bg-brand-50 p-5">
              <p className="text-sm font-semibold text-brand-900">
                Office hours
              </p>
              <p className="mt-1 text-sm text-brand-900/70">{site.hours}</p>
            </div>

            {/* Testimonial near form */}
            <div className="mt-6 rounded-2xl border border-brand-100 p-5">
              <div className="flex gap-1 text-brand-500">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
              <p className="mt-2 text-sm italic text-brand-900/70">
                &ldquo;Professional, responsive and genuinely caring. Mahin and
                the team answered every question and made a stressful process
                feel simple.&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold text-brand-600">
                Lucia F., Diploma of Business
              </p>
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
