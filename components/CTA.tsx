import Link from "next/link";
import { site } from "@/lib/site";
import { IconArrow, IconPhone } from "./Icons";

export default function CTA({
  title = "Your future won't wait. Neither should you.",
  subtitle = "Book your free, no-obligation consultation today. In 30 minutes you'll have a clear plan for studying in Australia, and a team ready to make it happen.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    // Flat #154D3C: wash-deep's own 0% stop. The footer gradient below picks
    // up from exactly this colour, so the seam is invisible by construction
    // rather than by tuning, on every page and every viewport height.
    <section className="bg-eucalypt pb-20 pt-20 lg:pb-28 lg:pt-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-paper">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">{subtitle}</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn bg-paper text-ink hover:bg-paper-sunk focus-visible:ring-offset-ink text-base"
            >
              Book Free Consultation <IconArrow />
            </Link>
            <a href={site.phoneHref} className="btn-ghost-light text-base">
              <IconPhone className="h-5 w-5" />
              <span className="font-mono tracking-[0.12em]">{site.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
