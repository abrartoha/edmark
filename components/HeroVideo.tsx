"use client";

import { useEffect, useRef } from "react";

/**
 * Background hero video. Split into a client component so we can force
 * autoplay on mobile: iOS only honours autoplay when the element is *actually*
 * muted (the `muted` DOM property, not just the JSX attribute, which React
 * doesn't reliably apply) and when `play()` is called with playsInline. We also
 * retry on first touch and when the tab becomes visible, covering cases where
 * the initial autoplay attempt was blocked. If everything is blocked (e.g. iOS
 * Low Power Mode), the poster image remains as a graceful fallback.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    tryPlay();

    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);
    document.addEventListener("touchstart", tryPlay, { once: true, passive: true });

    return () => {
      document.removeEventListener("visibilitychange", onVisible);
      document.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-60 blur-[0.5px]"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/images/hero-banner.jpg"
      aria-hidden="true"
    >
      {/* Versioned filename on purpose: /videos/* is cached immutable for a
          year, so replacing the file in place would leave returning
          visitors on the old cut. Bump the suffix on any future edit. */}
      <source src="/videos/hero-v2.mp4" type="video/mp4" />
    </video>
  );
}
