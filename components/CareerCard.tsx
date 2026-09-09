import Image from "next/image";
import Link from "next/link";
import { careerPhoto } from "@/lib/career-photos";
import type { Career } from "@/lib/careers";

/**
 * An occupation on the careers index.
 *
 * Job title and one line about the work. No national code, no qualification
 * title, no fee, no duration — a card that listed those would be a course
 * listing again, whatever the page around it was called.
 */
export default function CareerCard({ career }: { career: Career }) {
  const photo = careerPhoto(career);

  return (
    <Link
      href={`/careers/${career.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-tr-[2.5rem] rounded-bl-[2.5rem] bg-mint-100 p-7 transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-eucalypt focus-visible:ring-offset-2"
    >
      {photo && (
        <Image
          src={photo}
          alt=""
          width={1200}
          height={805}
          className="-mx-7 -mt-7 mb-6 h-36 w-[calc(100%+3.5rem)] rounded-tr-[2.5rem] object-cover"
        />
      )}

      <h3 className="text-2xl font-bold leading-snug text-eucalypt">
        {career.occupation}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-copy">{career.summary}</p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-eucalypt">
        About this career
        <span className="transition-transform group-hover:translate-x-0.5">
          &rarr;
        </span>
      </span>
    </Link>
  );
}
