import Link from "next/link";
import { site } from "@/lib/site";
import { IconArrow, IconPhone } from "./Icons";

export default function CTA({
  title = "Your future won't wait. Neither should you.",
  subtitle = "Book your free, no-obligation consultation today. In 30 minutes you'll have a clear plan for studying in Australia, and a team ready to make it happen.",
  // Opt-in only. Every page except the homepage keeps the white ground.
  tinted = false,
}: {
  title?: string;
  subtitle?: string;
  tinted?: boolean;
}) {
  return (
    <section className={`${tinted ? "bg-paper-sunk" : "bg-white"} pb-20 lg:pb-28 ${tinted ? "pt-20 lg:pt-28" : ""}`}>
      <div className="container-page">
        <div className="reveal relative overflow-hidden rounded-xl bg-wash-deep px-8 py-16 text-center sm:px-16">
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-medium text-paper sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-mist">
              {subtitle}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base">
                Book Free Consultation <IconArrow />
              </Link>
              <a href={site.phoneHref} className="btn-ghost-light text-base">
                <IconPhone className="h-5 w-5" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
