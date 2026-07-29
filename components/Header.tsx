"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/content";
import { prCategories } from "@/lib/pr-courses";
import ServiceIcon from "./ServiceIcon";
import Logo from "./Logo";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-100 bg-white/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-24 items-center justify-between py-3">
        <Link href="/" aria-label={`${site.name} home`} className="py-1">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.href === "/services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className="nav-link inline-flex items-center gap-1"
                  aria-expanded={servicesOpen}
                >
                  {item.label}
                  <Chevron open={servicesOpen} />
                </Link>

                <div
                  className={`absolute left-1/2 top-full z-50 w-[620px] -translate-x-1/2 pt-4 ${
                    servicesOpen ? "block" : "hidden"
                  }`}
                >
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-brand-100 bg-white p-3 shadow-glow">
                    {services.map((s) => (
                      <div key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50"
                        >
                          <span className="shrink-0 text-brand-500">
                            <ServiceIcon name={s.icon} className="h-6 w-6" />
                          </span>
                          <span>
                            <span className="block text-sm font-bold text-brand-900">
                              {s.title}
                            </span>
                            <span className="mt-0.5 block text-xs leading-snug text-brand-900/55 line-clamp-2">
                              {s.short}
                            </span>
                          </span>
                        </Link>
                        {s.slug === "pr-pathway-courses" && (
                          <div className="ml-12 mt-1 flex flex-wrap gap-1.5 pb-1">
                            {prCategories.map((c) => (
                              <Link
                                key={c.slug}
                                href={`/services/pr-pathway-courses/${c.slug}`}
                                onClick={() => setServicesOpen(false)}
                                className="rounded-full border border-brand-100 bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 transition-colors hover:border-brand-300 hover:text-brand-500"
                              >
                                {c.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn-primary">
            Enquire now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-brand-900 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-100 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            {nav.map((item) =>
              item.href === "/services" ? (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-brand-900 hover:bg-brand-50"
                    aria-expanded={mobileServicesOpen}
                  >
                    {item.label}
                    <Chevron open={mobileServicesOpen} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-3 border-l border-brand-100 pl-2">
                      <Link
                        href="/services"
                        onClick={closeMobile}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50"
                      >
                        All services
                      </Link>
                      {services.map((s) => (
                        <div key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            onClick={closeMobile}
                            className="block rounded-lg px-3 py-2 text-sm text-brand-900/80 hover:bg-brand-50"
                          >
                            {s.title}
                          </Link>
                          {s.slug === "pr-pathway-courses" && (
                            <div className="ml-3 border-l border-brand-100 pl-2">
                              {prCategories.map((c) => (
                                <Link
                                  key={c.slug}
                                  href={`/services/pr-pathway-courses/${c.slug}`}
                                  onClick={closeMobile}
                                  className="block rounded-lg px-3 py-1.5 text-sm text-brand-900/70 hover:bg-brand-50"
                                >
                                  {c.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="rounded-lg px-3 py-3 text-base font-medium text-brand-900 hover:bg-brand-50"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href="/contact" onClick={closeMobile} className="btn-primary mt-2">
              Enquire now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
