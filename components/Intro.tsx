"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const STORAGE_KEY = "edmark_intro_seen";

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
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-mint/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center gap-6 px-6">
        <div className="intro-word">
          <Image
            src="/images/logo-white.png"
            alt="Edmark Education"
            width={280}
            height={84}
            className="h-20 w-auto object-contain sm:h-24"
            priority
          />
        </div>
      </div>

      <p className="intro-sub absolute bottom-16 text-sm font-medium tracking-wide text-brand-100">
        Empowering students for life
      </p>
    </div>
  );
}
