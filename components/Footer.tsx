import Link from "next/link";
import { nav, site } from "@/lib/site";
import { services as allServices } from "@/lib/content";
import Logo from "./Logo";

const services = allServices.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}));

const resources = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Research Degrees", href: "/research-degrees" },
  { label: "Study in Australia", href: "/study-in-australia" },
  { label: "Success Stories", href: "/success-stories" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-900 text-brand-100">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-700/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-200">
              {site.tagline}. Trusted education consultants guiding students to
              the right course, campus and career in Australia.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink href={site.social.facebook} label="Facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
              </SocialLink>
              <SocialLink href={site.social.instagram} label="Instagram">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </SocialLink>
              <SocialLink href={site.social.linkedin} label="LinkedIn">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.label}>
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
            <h3 className="text-sm font-medium uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-brand-200 transition-colors hover:text-mint"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {resources.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-brand-200 transition-colors hover:text-mint"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-white">
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
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-mint"
                >
                  WhatsApp
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
            © {site.legalName}. All rights reserved. ABN {site.abn}
          </p>
          <p>
            {site.address.full}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-brand-gradient text-brand-950 transition-transform duration-200 hover:scale-110"
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </a>
  );
}
