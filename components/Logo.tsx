import { site } from "@/lib/site";

// SVG recreation of the Edmark four-tile mark + wordmark.
export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const wordColor = variant === "light" ? "#ffffff" : "#0b1f1a";
  const subColor = variant === "light" ? "#c6f5e2" : "#0b4f43";

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={site.name}
    >
      <svg
        width="38"
        height="38"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="edmarkTile" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#1de9b6" />
            <stop offset="55%" stopColor="#12a085" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="17" height="17" rx="4" transform="skewX(-8)" fill="url(#edmarkTile)" />
        <rect x="25" y="6" width="14" height="14" rx="4" transform="skewX(-8)" fill="url(#edmarkTile)" opacity="0.85" />
        <rect x="2" y="26" width="14" height="14" rx="4" transform="skewX(-8)" fill="url(#edmarkTile)" opacity="0.85" />
        <rect x="20" y="24" width="20" height="18" rx="4" transform="skewX(-8)" fill="url(#edmarkTile)" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-lg font-extrabold tracking-tight"
          style={{ color: wordColor }}
        >
          EDMARK
        </span>
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.28em]"
          style={{ color: subColor }}
        >
          Education
        </span>
      </span>
    </span>
  );
}
