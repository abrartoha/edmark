import Image from "next/image";
import { site } from "@/lib/site";

// The two lockups are very different shapes, so each carries its own real
// intrinsic size and its own sizing axis.
//
// logo.png is a 885x351 wordmark: constrain it by height and it fills the box.
//
// logo-white.png is a 1000x1000 canvas whose artwork only occupies the middle
// 28% vertically. Constrain that by height and the visible mark comes out at
// roughly a quarter of the box, which is why it read as tiny in the footer.
// Sizing it by width instead gives the artwork room: a 176px-wide box renders
// the mark about 49px tall, against 22px at the old h-20.
const variants = {
  dark: {
    src: "/images/logo.png",
    width: 885,
    height: 351,
    className: "h-16 w-auto",
  },
  light: {
    src: "/images/logo-white.png",
    width: 1000,
    height: 1000,
    className: "h-auto w-44",
  },
} as const;

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const v = variants[variant];
  return (
    <span
      className={`inline-flex items-center ${className}`}
      aria-label={site.name}
    >
      <Image
        src={v.src}
        alt={site.name}
        width={v.width}
        height={v.height}
        className={`${v.className} object-contain`}
        priority
      />
    </span>
  );
}
