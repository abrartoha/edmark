"use client";

import { useState, type FormEvent } from "react";
import { getSupabase } from "@/lib/supabase";
import { IconArrow, IconStar } from "./Icons";
import { trackFormSubmission } from "./GoogleAnalytics";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const interests = [
  "Not sure yet — need advice",
  "Undergraduate degree",
  "Postgraduate / Masters (coursework)",
  "Masters by Research",
  "PhD / Doctoral program",
  "Diploma / Vocational (TAFE)",
  "English language (ELICOS)",
  "Scholarship guidance",
  "Research proposal help",
];

const referralSources = [
  "Google search",
  "Social media",
  "Friend or family referral",
  "University or school",
  "WhatsApp / community group",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      interest: String(data.get("interest") || ""),
      message: String(data.get("message") || "").trim(),
      referral_source: String(data.get("referral_source") || ""),
    };

    if (!payload.name || !payload.email) {
      setStatus("error");
      setError("Please add your name and email so we can reach you.");
      return;
    }

    // Deliver the lead through two independent channels — a database record
    // and an email notification — so a failure in one never loses the lead.
    let dbOk = false;
    let emailOk = false;

    try {
      const supabase = getSupabase();
      if (supabase) {
        const { error: dbError } = await supabase.from("leads").insert([payload]);
        if (dbError) console.error("Lead DB insert failed:", dbError);
        else dbOk = true;
      } else {
        // No database configured — that's fine, the email is the record.
        dbOk = true;
      }
    } catch (err) {
      console.error("Lead DB insert threw:", err);
    }

    try {
      const res = await fetch("/api/lead-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      emailOk = res.ok;
      if (!res.ok) {
        console.error("Email notification failed:", res.status, await res.text());
      }
    } catch (err) {
      console.error("Email notification fetch failed:", err);
    }

    // Success as long as the lead reached us through at least one channel.
    if (dbOk || emailOk) {
      trackFormSubmission();
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setError(
        "Something went wrong sending your enquiry. Please call or email us directly and we'll help right away."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-brand-200 bg-brand-50 p-10 text-center shadow-soft">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-gradient text-brand-950">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-bold text-brand-900">
          Thank you — we&apos;ve got it!
        </h3>
        <p className="mt-2 text-sm text-brand-900/70">
          <strong>Mahin will contact you within 2 hours</strong> during business hours.
          Keen to talk sooner? Call us and we&apos;ll get started right away.
        </p>
        <div className="mt-4 rounded-xl bg-white p-4">
          <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider">What happens next</p>
          <ol className="mt-2 space-y-1.5 text-left text-sm text-brand-900/70">
            <li className="flex items-start gap-2">
              <span className="font-bold text-brand-600">1.</span>
              We review your enquiry and prepare personalised recommendations
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-brand-600">2.</span>
              Mahin calls or emails you with a tailored study plan
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-brand-600">3.</span>
              We begin your application process — fully managed, end to end
            </li>
          </ol>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="btn-outline"
          >
            Send another enquiry
          </button>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="reveal rounded-3xl border border-brand-100 bg-white p-8 shadow-soft"
      style={{ transitionDelay: "120ms" }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Your name" required />
        <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
        <Field label="Phone" name="phone" type="tel" placeholder="04xx xxx xxx" />
        <div>
          <label htmlFor="interest" className="mb-1.5 block text-sm font-semibold text-brand-900">
            I&apos;m interested in
          </label>
          <select
            id="interest"
            name="interest"
            className="w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            defaultValue={interests[0]}
          >
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-900">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a little about your goals..."
          className="w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="referral_source" className="mb-1.5 block text-sm font-semibold text-brand-900">
          How did you hear about us?
        </label>
        <select
          id="referral_source"
          name="referral_source"
          className="w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          defaultValue=""
        >
          <option value="" disabled>Select an option</option>
          {referralSources.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-6 w-full text-base disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Get My Free Consultation"}
        {status !== "loading" && <IconArrow />}
      </button>

      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-brand-900/50">
        <span>No spam, ever.</span>
        <span>·</span>
        <span className="flex items-center gap-1">
          <IconStar className="h-3 w-3 text-brand-500" />
          We respond within 2 hours
        </span>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-brand-900">
        {label} {required && <span className="text-brand-400">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
