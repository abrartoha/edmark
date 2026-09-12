import SectionHeading from "./SectionHeading";

// The commission disclosure, in the students' words rather than a footnote.
// Rendered on the homepage. Same two-column shape as Why Edmark, which it sits
// under.
export const HOW_WERE_PAID = [
  "Edmark is free for students because a commission is paid when a student enrols. Our institution relationships are direct and sub-partnered, and rates differ between institutions.",
  "We don't let that decide your shortlist. If the right course is somewhere we don't have an arrangement with, we'll tell you, and we'll help you apply anyway.",
  "Since 31 March 2026, providers cannot pay agent commission when a student transfers between providers onshore. We receive no commission on those transfers. Initial enrolments and progression within a packaged course are not affected.",
  // TODO: confirm whether Edmark receives any commission or benefit for
  // arranging OSHC, and state the answer here either way. Do not assert
  // either position until it is confirmed.
  "And if you ever want to know what we earn on a course we've recommended, ask. We'll tell you.",
];

export default function HowWerePaid() {
  return (
    <section className="reveal bg-paper py-20 lg:py-28">
      <div className="container-page grid items-start gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="How we're paid"
            title="Free for you, because the institution pays the commission."
          />
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
