import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  // ReactNode so a heading can carry the signature device, e.g.
  // title={<>Everything you need to <em className="signature">study here</em></>}
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={`reveal ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <span className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</span>
      )}
      <h2 className={`mt-4 ${light ? "text-paper" : "text-ink"}`}>{title}</h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-mist" : "text-copy"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
