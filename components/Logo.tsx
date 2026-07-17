import Image from "next/image";
import { site } from "@/lib/site";

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
        width={180}
        height={54}
        className="h-11 w-auto object-contain"
        priority
      />
    </span>
  );
}
