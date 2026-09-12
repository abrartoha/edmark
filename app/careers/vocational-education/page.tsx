import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import CareerIndex from "@/components/CareerIndex";
import { vocationalCareers } from "@/lib/careers";

export const metadata: Metadata = pageSeo({
  title: "Vocational Education Careers in Australia",
  description:
    "Trade, care, cookery and service occupations in Australia: what the work involves, what licensing applies, and the nationally recognised qualification usually used to enter each one.",
  path: "/careers/vocational-education",
});

export default function VocationalCareersPage() {
  return (
    <CareerIndex
      eyebrow="Vocational education careers"
      title={
        <>
          Trades and hands-on{" "}
          <span className="text-eucalypt-light">work</span>
        </>
      }
      subtitle="Occupations you reach through a nationally recognised vocational qualification."
      crumb="Vocational education"
      intro="These are guides to the work itself. Each page names the nationally recognised qualification usually used to enter the occupation and links to training.gov.au, so you can see for yourself which registered training organisations are approved to deliver it. Several of these trades are licensed, and the pages name the authority that licenses them."
      careers={vocationalCareers}
      alsoSee={{ label: "Looking at degrees instead", href: "/courses/higher-education" }}
      image="/images/heroes/short-courses.jpg"
    />
  );
}
