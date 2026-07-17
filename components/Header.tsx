"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-100 bg-white/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between py-3">
        <Link href="/" aria-label={`${site.name} home`} className="py-1">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phoneHref} className="text-sm font-semibold text-brand-700">
            {site.phone}
          </a>
          <Link href="/contact" className="btn-primary">
            Free Consultation
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
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-brand-900 hover:bg-brand-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Book Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
