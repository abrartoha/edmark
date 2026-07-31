"use client";

import { useState, useEffect, type FormEvent } from "react";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("edmark_exit_shown")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0) {
        setShow(true);
        sessionStorage.setItem("edmark_exit_shown", "1");
        document.removeEventListener("mouseout", handleMouseLeave);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseout", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-glow animate-fade-up">
        <button
          onClick={() => setShow(false)}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-brand-900/50 hover:bg-brand-50 hover:text-brand-900"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-mint-300 text-brand-950">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium text-brand-900">Check your inbox!</h3>
            <p className="mt-2 text-sm text-brand-900/70">
              Your free Study in Australia Checklist is on its way.
            </p>
            <button
              onClick={() => setShow(false)}
              className="btn-primary mt-6"
            >
              Continue browsing
            </button>
          </div>
        ) : (
          <>
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-50">
              <svg className="h-7 w-7 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                <path d="M14 2v6h6" />
                <path d="M8 13h8M8 17h5" />
              </svg>
            </div>
            <h3 className="mt-4 text-center text-xl font-medium text-brand-900">
              Wait! Before you go&hellip;
            </h3>
            <p className="mt-2 text-center text-sm text-brand-900/70">
              Download our free <strong>Study in Australia Checklist</strong>. Everything you need to know in one place.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex gap-3">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
              <button type="submit" className="btn-primary whitespace-nowrap text-sm">
                Send it
              </button>
            </form>
            <p className="mt-3 text-center text-xs text-brand-900/40">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
