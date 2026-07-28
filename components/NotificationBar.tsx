"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NotificationBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("edmark_notif_dismissed")) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem("edmark_notif_dismissed", "1");
  }

  if (!visible) return null;

  return (
    <div className="relative z-50 bg-brass">
      <div className="container-page flex items-center justify-between gap-4 py-2.5">
        <Link
          href="/contact"
          className="flex-1 text-center text-xs font-medium text-ink hover:underline sm:text-sm"
        >
          February 2027 intake closing soon. Book your free consultation today
          <span className="ml-1" aria-hidden="true">→</span>
        </Link>
        <button
          onClick={dismiss}
          className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-ink/70 hover:bg-ink/10 hover:text-ink"
          aria-label="Dismiss notification"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
