import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";
import { complaints, needsWork } from "@/lib/legal";

export const metadata: Metadata = {
  ...pageSeo({
    title: complaints.title,
    description: complaints.description,
    path: "/complaints",
  }),
  // Indexed only once every placeholder in the document is filled in. An
  // unfinished policy in search results reads as a settled one.
  ...(needsWork(complaints) ? { robots: { index: false, follow: true } } : {}),
};

export default function ComplaintsPage() {
  return <LegalPage doc={complaints} />;
}
