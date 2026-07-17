"use client";

import { useEffect, useState, type CSSProperties } from "react";

const STORAGE_KEY = "edmark_intro_seen";

// Each tile: final position/size in a 150px square + the direction it flies in from.
const tiles: { style: CSSProperties; from: CSSProperties }[] = [
  {
    style: { top: 4, left: 6, width: 58, height: 58, opacity: 1 },
    from: { ["--tx" as string]: "-220px", ["--ty" as string]: "-180px" },
  },
  {
    style: { top: 10, left: 74, width: 46, height: 46, opacity: 0.9 },
    from: { ["--tx" as string]: "240px", ["--ty" as string]: "-200px" },
  },
  {
    style: { top: 74, left: 0, width: 46, height: 46, opacity: 0.9 },
    from: { ["--tx" as string]: "-240px", ["--ty" as string]: "210px" },
  },
  {
    style: { top: 62, left: 56, width: 68, height: 62, opacity: 1 },
    from: { ["--tx" as string]: "240px", ["--ty" as string]: "220px" },
  },
];

export default function Intro() {
  const [show, setShow] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = !!sessionStorage.getItem(STORAGE_KEY);
    } catch {
      /* storage unavailable */
    }

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduce) {
      setShow(false);
      return;
    }

    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }

    document.documentElement.style.overflow = "hidden";

    const exitTimer = setTimeout(() => setExiting(true), 2300);
    const doneTimer = setTimeout(() => {
      setShow(false);
      document.documentElement.style.overflow = "";
    }, 3050);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      id="edmark-intro"
      className={exiting ? "intro-exit" : ""}
      role="status"
      aria-label="Edmark Education"
    >
      {/* soft glow blobs matching the theme */}
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-mint/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center gap-8 px-6 sm:flex-row sm:gap-10">
        {/* Four tiles converging to form the mark */}
        <div className="relative h-[150px] w-[150px] shrink-0">
          {tiles.map((t, i) => (
            <span
              key={i}
              className="intro-tile absolute rounded-[14px] shadow-glow"
              style={{
                ...t.style,
                ...t.from,
                animationDelay: `${i * 0.12}s`,
                background:
                  "linear-gradient(135deg,#1de9b6 0%,#12a085 55%,#22d3ee 100%)",
              }}
            />
          ))}
        </div>

        {/* Wordmark sliding in from the side */}
        <div className="intro-word overflow-hidden text-center sm:text-left">
          <span className="block font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            EDMARK
          </span>
          <span className="mt-1 block text-sm font-semibold uppercase tracking-[0.42em] text-mint">
            Education
          </span>
        </div>
      </div>

      <p className="intro-sub absolute bottom-16 text-sm font-medium tracking-wide text-brand-100">
        Empowering students for life
      </p>
    </div>
  );
}
