import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/lib/legal";

export const metadata: Metadata = pageSeo({
  title: privacy.title,
  description: privacy.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage doc={privacy} />;
}
