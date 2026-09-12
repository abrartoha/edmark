import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import CareerIndex from "@/components/CareerIndex";
import { vocationalCareers } from "@/lib/careers";

export const metadata: Metadata = pageSeo({
  title: "Careers & Pathways in Australia",
  description:
    "Guides to trade, health, business, education and technology occupations in Australia: what the work involves, what licensing applies, and the qualification usually used to enter each one.",
  path: "/careers",
});

// Every published occupation. /careers/vocational-education is the page in the
// navigation; this stays as the place a search result or an old link can land.
export default function CareersPage() {
  return (
    <CareerIndex
      eyebrow="Careers & pathways"
      title={
        <>
          Start with the job,{" "}
          <span className="text-eucalypt-light">not the course</span>
        </>
      }
      subtitle="What the work involves, where it is done, what licensing applies, and the qualification usually used to get there."
      intro="These are guides to the work itself. Where a qualification is the usual way in, each page names it and links to the register that lists the organisations approved to deliver it, so you can check for yourself."
      careers={vocationalCareers}
    />
  );
}
