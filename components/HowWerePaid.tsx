import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { IconArrow } from "./Icons";

// The commission disclosure, in the students' words rather than a footnote.
// Held here and rendered on both the homepage and /how-were-paid so the two
// cannot drift apart. Same two-column shape as Why Edmark, which it sits under.
export const HOW_WERE_PAID = [
  "Edmark is free for students because institutions pay us a commission when a student enrols. Rates differ between institutions.",
  "We don't let that decide your shortlist. If the right course is somewhere we don't have an agreement with, we'll tell you, and we'll help you apply anyway.",
  "And if you ever want to know what we earn on a course we've recommended, ask. We'll tell you.",
];

export default function HowWerePaid({
  /** The homepage links through to the full page; the page itself does not. */
  withLink = false,
}: {
  withLink?: boolean;
}) {
  return (
    <section className="reveal bg-paper py-20 lg:py-28">
      <div className="container-page grid items-start gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="How we're paid"
            title="Free for you, because institutions pay us."
          />
          {withLink && (
            <Link href="/how-were-paid" className="btn-outline mt-8">
              Read the detail <IconArrow />
            </Link>
          )}
        </div>

        <div className="reveal space-y-5">
          {HOW_WERE_PAID.map((p) => (
            <p key={p} className="text-base leading-relaxed text-copy">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
