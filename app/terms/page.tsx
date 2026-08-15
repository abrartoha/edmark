import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Terms of Service",
    description:
      "The terms on which Edmark Education provides education consulting: what the service covers, what it does not, and the limits of what we can promise.",
    path: "/terms",
  }),
  // Structure only so far. Remove once the content lands.
  robots: { index: false, follow: true },
};

const sections: LegalSection[] = [
  {
    heading: "Scope of service",
    // TODO(abrar): this is the section that defines everything below it. It
    // should say plainly that the service is education consulting: course and
    // provider selection, application preparation and lodgement, enrolment,
    // OSHC arrangement.
    todo: "TODO(abrar): exactly what the engagement covers, service by service, and where it ends.",
  },
  {
    heading: "We are not migration agents",
    // The wording here must not contradict lib/compliance.ts MARA_NOTICE,
    // which is rendered verbatim across the course pages.
    todo: "TODO(abrar): that we do not provide immigration assistance, that only a MARA-registered agent or Australian legal practitioner may, and that we refer rather than advise. Keep consistent with MARA_NOTICE in lib/compliance.ts.",
  },
  {
    heading: "No guarantee of an offer or a visa outcome",
    todo: "TODO(abrar): that admission decisions rest with the institution and visa decisions with the Department of Home Affairs, and that nothing we say is a promise of either.",
  },
  {
    heading: "Fees and commission",
    // TODO(abrar): must not contradict /how-were-paid. If any service is ever
    // charged to a student, it has to be named here.
    todo: "TODO(abrar): that our service is free to students and paid by institution commission, plus any third-party costs a student pays directly. Must agree with /how-were-paid.",
  },
  {
    heading: "Your responsibilities",
    todo: "TODO(abrar): accurate and complete information, genuine documents, and meeting the deadlines we set out. State the consequence of not doing so.",
  },
  {
    heading: "Governing law",
    todo: "TODO(abrar): that these terms are governed by the law of Victoria, and the courts a dispute is submitted to.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="What our service covers, what it does not, and what we can and cannot promise."
      sections={sections}
    />
  );
}
