"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { colleges, oshcProviders, tafes, universities } from "@/lib/partners";
import { IconArrow } from "./Icons";

// Three slides, one per partner type, each showing every partner in the group
// (rows of six on desktop).
const groups = [
  { key: "universities", label: "Universities", items: universities },
  {
    key: "colleges",
    label: "Private Colleges, TAFE and Polytechnic Partners",
    items: [...colleges, ...tafes],
  },
  { key: "oshc", label: "OSHC providers", items: oshcProviders },
];

const INTERVAL = 3000;

export default function PartnerCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useRef(false);
  // The viewport takes the height of the slide on show, so a short group
  // (OSHC) doesn't sit above the empty space left for a long one.
  const slides = useRef<(HTMLDivElement | null)[]>([]);
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const measure = () => setHeight(slides.current[index]?.offsetHeight);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [index]);

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
          className="mt-8 overflow-hidden transition-[height] duration-700 ease-out motion-reduce:transition-none"
          style={{ height }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            className="flex items-start transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {groups.map((g, gi) => (
              <div
                key={g.key}
                ref={(el) => {
                  slides.current[gi] = el;
                }}
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
                        {/* Gated on logoLicensed, per institution. An entry
                            without permission or without a file renders its
                            name instead, so the list never depends on a logo
                            being there. */}
                        {inst.logoLicensed && inst.logoAsset ? (
                          <>
                            <Image
                              src={`/images/partners/${inst.logoAsset}`}
                              alt={`${inst.name} logo`}
                              width={120}
                              height={60}
                              className="h-10 w-auto max-w-[100px] object-contain"
                            />
                            <span className="text-xs font-medium leading-snug text-ink transition-colors group-hover:text-eucalypt">
                              {inst.name}
                            </span>
                          </>
                        ) : (
                          <span className="grid flex-1 place-items-center text-sm font-medium leading-snug text-ink transition-colors group-hover:text-eucalypt">
                            {inst.name}
                          </span>
                        )}
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
              key={g.key}
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
