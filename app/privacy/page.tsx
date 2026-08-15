import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";
import { privacy, needsWork } from "@/lib/legal";

export const metadata: Metadata = {
  ...pageSeo({
    title: privacy.title,
    description: privacy.description,
    path: "/privacy",
  }),
  // Indexed only once every placeholder in the document is filled in. An
  // unfinished policy in search results reads as a settled one.
  ...(needsWork(privacy) ? { robots: { index: false, follow: true } } : {}),
};

export default function PrivacyPage() {
  return <LegalPage doc={privacy} />;
}
