import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";
import { terms } from "@/lib/legal";

export const metadata: Metadata = pageSeo({
  title: terms.title,
  description: terms.description,
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
