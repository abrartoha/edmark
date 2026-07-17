"use client";

import { useState, type FormEvent } from "react";
import { getSupabase } from "@/lib/supabase";
import { IconArrow } from "./Icons";

type Status = "idle" | "loading" | "success" | "error";

const interests = [
  "Not sure yet — need advice",
  "Undergraduate degree",
  "Postgraduate / Masters",
  "Diploma / Vocational (TAFE)",
  "English language (ELICOS)",
  "Scholarship guidance",
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
    };

    if (!payload.name || !payload.email) {
      setStatus("error");
      setError("Please add your name and email so we can reach you.");
      return;
    }

    try {
      const supabase = getSupabase();

      // Once you connect Supabase and create a `leads` table, this saves the
      // enquiry automatically. Until then it succeeds gracefully so the form works.
      if (supabase) {
        const { error: dbError } = await supabase.from("leads").insert([payload]);
        if (dbError) throw dbError;
      } else {
        // No Supabase configured yet — simulate success for a working demo.
        await new Promise((r) => setTimeout(r, 600));
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      const detail =
        err && typeof err === "object" && "message" in err
          ? String((err as { message: unknown }).message)
          : "";
      console.error("Contact form submit failed:", err);
      setError(
        `Something went wrong sending your enquiry. Please call or email us directly and we'll help right away.${
          detail ? ` (${detail})` : ""
        }`
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
          Your advisor will be in touch within one business day. Keen to talk
          sooner? Call us and we&apos;ll get started right away.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6"
        >
          Send another enquiry
        </button>
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

      <p className="mt-4 text-center text-xs text-brand-900/50">
        No spam, ever. Your details are only used to help with your enquiry.
      </p>
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
