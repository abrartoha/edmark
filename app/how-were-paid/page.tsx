import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import HowWerePaid from "@/components/HowWerePaid";
import CTA from "@/components/CTA";

export const metadata: Metadata = pageSeo({
  title: "How We're Paid",
  description:
    "Edmark is free for students because institutions pay us a commission when a student enrols. What that means for your shortlist, and why you can ask us what we earn on any course we recommend.",
  path: "/how-were-paid",
});

export default function HowWerePaidPage() {
  return (
    <>
      <PageHero
        eyebrow="How we're paid"
        title="Free for you, because institutions pay us."
        subtitle="The part most agents leave off their website. Here is ours, in full."
        image="/images/heroes/how-were-paid.jpg"
      />
      <Breadcrumb items={[{ label: "How we're paid" }]} />
      <HowWerePaid />
      <CTA />
    </>
  );
}
