"use client";

import { useEffect, useState, type CSSProperties } from "react";

const STORAGE_KEY = "edmark_intro_seen";

// Four tiles matching the logo: top-left big, top-right small, bottom-left small, bottom-right big
// Each tile flies in from a corner
const tiles: { style: CSSProperties; from: CSSProperties }[] = [
  {
    // Top-left: large tile
    style: { top: 4, left: 6, width: 58, height: 58, opacity: 1 },
    from: { ["--tx" as string]: "-220px", ["--ty" as string]: "-180px" },
  },
  {
    // Top-right: small tile
    style: { top: 10, left: 74, width: 46, height: 46, opacity: 0.9 },
    from: { ["--tx" as string]: "240px", ["--ty" as string]: "-200px" },
  },
  {
    // Bottom-left: small tile
    style: { top: 74, left: 0, width: 46, height: 46, opacity: 0.9 },
    from: { ["--tx" as string]: "-240px", ["--ty" as string]: "210px" },
  },
  {
    // Bottom-right: large cyan-blue tile
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
      {/* soft glow blobs */}

      <div className="relative flex flex-col items-center gap-8 px-6 sm:flex-row sm:gap-10">
        {/* Four tiles converging from corners to form the mark */}
        <div className="relative h-[150px] w-[150px] shrink-0">
          {tiles.map((t, i) => (
            <span
              key={i}
              className="intro-tile absolute rounded-[14px]"
              style={{
                ...t.style,
                ...t.from,
                animationDelay: `${i * 0.12}s`,
                background: i <= 1 ? "#8FBFA9" : "#154D3C",
                transform: `translate(var(--tx, 0), var(--ty, 0)) scale(0.3) rotate(-16deg) skewX(-8deg)`,
              }}
            />
          ))}
        </div>

        {/* Wordmark sliding in from the side, matching logo typography */}
        <div className="intro-word overflow-hidden text-center sm:text-left">
          <span className="block font-display text-5xl font-medium tracking-tight text-paper sm:text-6xl">
            EDMARK
          </span>
          <span className="mt-1 block text-sm font-medium uppercase tracking-[0.3em] text-mist">
            Education
          </span>
        </div>
      </div>

      <p className="intro-sub absolute bottom-16 text-sm font-medium tracking-wide text-mist">
        Empowering students for life
      </p>
    </div>
  );
}
