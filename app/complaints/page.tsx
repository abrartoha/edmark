import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";
import { complaints } from "@/lib/legal";

export const metadata: Metadata = pageSeo({
  title: complaints.title,
  description: complaints.description,
  path: "/complaints",
});

export default function ComplaintsPage() {
  return <LegalPage doc={complaints} />;
}
