import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Privacy Policy",
    description:
      "How Edmark Education collects, uses, discloses and retains your personal information, and how to access, correct or complain about it.",
    path: "/privacy",
  }),
  // Structure only so far. Indexing an unwritten privacy policy would publish
  // a promise we have not made. Remove this once the content lands.
  robots: { index: false, follow: true },
};

const sections: LegalSection[] = [
  {
    heading: "What we collect",
    // TODO(abrar): list the actual fields captured by the contact form, the
    // course matcher and the consultation intake, plus anything captured by
    // Google Analytics. Name the categories, not just "your information".
    todo: "TODO(abrar): the categories of personal information we collect, including identity and contact details, academic history, financial capacity, visa status and anything collected automatically through analytics.",
  },
  {
    heading: "Why we collect it",
    // TODO(abrar): tie each purpose back to a service we actually provide.
    todo: "TODO(abrar): the purpose for each category, and what happens if a student chooses not to provide it.",
  },
  {
    heading: "Who we disclose it to",
    // TODO(abrar): the three named recipient classes below are the ones the
    // business actually uses. Confirm whether any offshore disclosure occurs,
    // which triggers an additional obligation.
    todo: "TODO(abrar): education institutions and their admissions systems, OSHC insurers, and registered migration agents we refer to. State whether any recipient is located overseas.",
  },
  {
    heading: "How long we keep it",
    todo: "TODO(abrar): retention period per record type, and what triggers destruction or de-identification.",
  },
  {
    heading: "Access and correction",
    todo: "TODO(abrar): how a student asks for a copy of their information or a correction, what proof of identity is required, and the response timeframe.",
  },
  {
    heading: "Complaints about privacy",
    todo: "TODO(abrar): how to raise a privacy complaint with us, and the timeframe for acknowledgement and resolution.",
  },
  {
    heading: "Escalating to the OAIC",
    // TODO(abrar): confirm the current OAIC contact route before publishing;
    // do not paraphrase their process from memory.
    todo: "TODO(abrar): a student's right to escalate to the Office of the Australian Information Commissioner if unsatisfied, and how to do so.",
  },
  {
    heading: "Contact us",
    todo: "TODO(abrar): the privacy contact point, whether that is a named role or the general office address, phone and email.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="What we collect, why we collect it, who sees it, and what you can do about it."
      sections={sections}
    />
  );
}
