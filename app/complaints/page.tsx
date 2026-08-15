import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Complaints",
    description:
      "How to raise a complaint with Edmark Education, when you will hear back, how it is handled, and where to take it if you are not satisfied.",
    path: "/complaints",
  }),
  // Structure only so far. Remove once the content lands.
  robots: { index: false, follow: true },
};

const sections: LegalSection[] = [
  {
    heading: "How to raise a complaint",
    // TODO(abrar): give at least two channels, one of them in writing, and do
    // not route a complaint through the advisor it may be about.
    todo: "TODO(abrar): the channels for making a complaint, what to include, and who receives it.",
  },
  {
    heading: "When you will hear back",
    // TODO(abrar): commit to a number of business days only if the business
    // can meet it every time. An unmet published timeframe is worse than none.
    todo: "TODO(abrar): the acknowledgement timeframe, and the target timeframe for a resolution.",
  },
  {
    heading: "How we handle it",
    todo: "TODO(abrar): the steps between receipt and outcome, who investigates, and how the outcome is communicated.",
  },
  {
    heading: "If you are not satisfied",
    // TODO(abrar): confirm which external body applies before naming one. It
    // differs by complaint type, and naming the wrong one is worse than
    // pointing at the institution and the relevant regulator generally.
    todo: "TODO(abrar): internal review, then the external options open to a student, including the institution's own process and the relevant regulator.",
  },
  {
    heading: "Privacy of complaints",
    todo: "TODO(abrar): who sees a complaint, how it is recorded, and how long it is kept. Must agree with the retention section of /privacy.",
  },
];

export default function ComplaintsPage() {
  return (
    <LegalPage
      title="Complaints"
      subtitle="If something has gone wrong, here is how to tell us and what happens next."
      sections={sections}
    />
  );
}
