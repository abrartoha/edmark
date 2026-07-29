"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { nav, site, type NavChild, type NavItem } from "@/lib/site";
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

function Row({ c, onNavigate }: { c: NavChild; onNavigate: () => void }) {
  return (
    <Link
      href={c.href}
      onClick={onNavigate}
      className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-paper-sunk"
    >
      <span className="block text-sm font-medium text-ink">{c.label}</span>
      {c.note && (
        <span className="mt-0.5 block text-xs leading-snug text-sage">
          {c.note}
        </span>
      )}
    </Link>
  );
}

function Dropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {item.href ? (
        <Link
          href={item.href}
          className="nav-link inline-flex items-center gap-1"
          aria-expanded={open}
        >
          {item.label}
          <Chevron open={open} />
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="nav-link inline-flex items-center gap-1"
          aria-expanded={open}
        >
          {item.label}
          <Chevron open={open} />
        </button>
      )}

      <div
        className={`absolute left-1/2 top-full z-50 w-[380px] -translate-x-1/2 pt-4 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="rounded-xl border border-line bg-paper p-3">
          {item.blurb && (
            <p className="px-3 pb-2 pt-1 text-xs font-medium uppercase tracking-wider text-sage">
              {item.blurb}
            </p>
          )}

          {item.groups
            ? item.groups.map((g, gi) => (
                <div
                  key={g.label ?? `g${gi}`}
                  // Rule between blocks, never above the first.
                  className={gi > 0 ? "mt-2 border-t border-line pt-2" : ""}
                  role="group"
                  aria-label={g.label}
                >
                  {g.label && (
                    <p className="eyebrow px-3 pb-1 pt-2">{g.label}</p>
                  )}
                  {g.items.map((c) => (
                    <Row key={c.href} c={c} onNavigate={() => setOpen(false)} />
                  ))}
                </div>
              ))
            : item.children?.map((c) => (
                <Row key={c.href} c={c} onNavigate={() => setOpen(false)} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setOpen(false);
    setOpenGroup(null);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-24 items-center justify-between gap-6 py-3">
        <Link href="/" aria-label={`${site.name} home`} className="py-1">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
          {nav.map((item) =>
            item.children || item.groups ? (
              <Dropdown key={item.label} item={item} />
            ) : (
              <Link key={item.href} href={item.href ?? "/"} className="nav-link">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link href="/contact" className="btn-primary">
            Enquire now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-ink xl:hidden"
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
        <div className="border-t border-line bg-paper xl:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            {nav.map((item) =>
              item.children || item.groups ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenGroup((g) => (g === item.label ? null : item.label))
                    }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-paper-sunk"
                    aria-expanded={openGroup === item.label}
                  >
                    {item.label}
                    <Chevron open={openGroup === item.label} />
                  </button>
                  {openGroup === item.label && (
                    <div className="ml-3 border-l border-line pl-2">
                      {(item.groups ?? [{ items: item.children ?? [] }]).map(
                        (g, gi) => (
                          <div
                            key={g.label ?? `g${gi}`}
                            className={gi > 0 ? "mt-2 border-t border-line pt-2" : ""}
                            role="group"
                            aria-label={g.label}
                          >
                            {g.label && (
                              <p className="eyebrow px-3 pb-1 pt-2">{g.label}</p>
                            )}
                            {g.items.map((c) => (
                              <Link
                                key={c.href}
                                href={c.href}
                                onClick={closeMobile}
                                className="block rounded-lg px-3 py-2.5 hover:bg-paper-sunk"
                              >
                                <span className="block text-sm font-medium text-ink">
                                  {c.label}
                                </span>
                                {c.note && (
                                  <span className="mt-0.5 block text-xs text-sage">
                                    {c.note}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href ?? "/"}
                  onClick={closeMobile}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-paper-sunk"
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
