import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";
import { terms, needsWork } from "@/lib/legal";

export const metadata: Metadata = {
  ...pageSeo({
    title: terms.title,
    description: terms.description,
    path: "/terms",
  }),
  // Indexed only once every placeholder in the document is filled in. An
  // unfinished policy in search results reads as a settled one.
  ...(needsWork(terms) ? { robots: { index: false, follow: true } } : {}),
};

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
