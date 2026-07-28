import Image from "next/image";
import { site } from "@/lib/site";

// The light lockup is square, mark-only artwork with generous transparent
// padding, so it needs a taller box than the dark wordmark to read at the
// same optical weight.
const sizes = {
  dark: "h-14 w-auto",
  light: "h-20 w-auto",
} as const;

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
      aria-label={site.name}
    >
      <Image
        src={variant === "light" ? "/images/logo-white.png" : "/images/logo.png"}
        alt={site.name}
        width={240}
        height={72}
        className={`${sizes[variant]} object-contain`}
        priority
      />
    </span>
  );
}
