import Link from "next/link";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";

const services = [
  "Free Career Counselling",
  "University & Course Selection",
  "Admission & Application",
  "Scholarship Guidance",
  "Pre-Departure Support",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-900 text-brand-100">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-700/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-200">
              {site.tagline}. Trusted education consultants guiding students to
              the right course, campus and career in Australia.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-200 transition-colors hover:text-mint"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s} className="text-brand-200">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-mint">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="transition-colors hover:text-mint">
                  {site.email}
                </a>
              </li>
              <li className="text-brand-200">{site.address.full}</li>
              <li className="text-brand-200">{site.hours}</li>
            </ul>
            <Link href="/contact" className="btn-primary mt-6">
              Book Free Consultation
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-brand-800 pt-8 text-xs text-brand-300 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>
            {site.contact.name} · {site.contact.role}
          </p>
        </div>
      </div>
    </footer>
  );
}
