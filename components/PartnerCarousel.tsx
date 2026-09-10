"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { colleges, oshcProviders, tafes, universities } from "@/lib/partners";
import { IconArrow } from "./Icons";

// One slide per partner type. Twelve per slide, which is two rows of six on
// desktop, rather than the single row of six this used to show: that was
// hiding four partners outright, including two universities and two colleges
// added after it was written.
const PER_SLIDE = 12;

const groups = [
  { label: "Universities", items: universities.slice(0, PER_SLIDE) },
  { label: "Colleges & pathway providers", items: colleges.slice(0, PER_SLIDE) },
  { label: "TAFEs & polytechnics", items: tafes.slice(0, PER_SLIDE) },
  { label: "OSHC providers", items: oshcProviders.slice(0, PER_SLIDE) },
];

const INTERVAL = 3000;

export default function PartnerCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const go = useCallback((i: number) => setIndex(i % groups.length), []);

  useEffect(() => {
    if (paused || reduceMotion.current) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % groups.length),
      INTERVAL
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className="reveal border-b border-line bg-white py-12 lg:py-16"
      aria-roledescription="carousel"
      aria-label="Our partners"
    >
      <div className="container-page">
        <p className="eyebrow text-center">
          {groups[index].label}
        </p>

        {/* Viewport. Slides sit in a row and translate right to left.
            Auto-advance pauses only while the pointer or keyboard focus is on
            the logos themselves. Scoping it here rather than to the whole
            section matters: the section is a full-width band, so an idle
            cursor resting anywhere in it used to stop the carousel dead. */}
        <div
          className="mt-8 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {groups.map((g, gi) => (
              <div
                key={g.label}
                className="w-full shrink-0"
                aria-hidden={gi !== index}
              >
                <ul className="grid grid-cols-2 items-stretch gap-4 sm:grid-cols-3 lg:grid-cols-6">
                  {g.items.map((inst) => (
                    <li key={inst.slug}>
                      <a
                        href={inst.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={gi === index ? 0 : -1}
                        className="group flex h-full flex-col items-center gap-3 rounded-xl border border-line bg-white p-4 text-center transition-colors hover:border-sage/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-eucalypt focus-visible:ring-offset-2"
                      >
                        {/* Names only. A logo is a trade mark and showing one
                            implies an endorsement none of these institutions
                            has given in writing, so nothing renders until
                            logoLicensed is true for that entry. */}
                        <span className="grid h-[3.75rem] place-items-center text-sm font-medium leading-snug text-ink transition-colors group-hover:text-eucalypt">
                          {inst.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {groups.map((g, i) => (
            <button
              key={g.label}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${g.label}`}
              aria-current={i === index}
              className={`h-2.5 w-2.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-eucalypt focus-visible:ring-offset-2 ${
                i === index ? "bg-eucalypt" : "bg-line hover:bg-sage"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/partners"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-eucalypt transition-colors hover:text-teal-500"
          >
            See all partner institutions <IconArrow className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
