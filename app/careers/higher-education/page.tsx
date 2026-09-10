import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import CareerIndex from "@/components/CareerIndex";
import { higherEducationCareers } from "@/lib/careers";

export const metadata: Metadata = pageSeo({
  title: "Higher Education Careers in Australia",
  description:
    "Occupations you reach through an Australian degree: what the work involves, what registration applies, and the qualification usually used to enter each one.",
  path: "/careers/higher-education",
});

export default function HigherEducationCareersPage() {
  return (
    <CareerIndex
      eyebrow="Higher education careers"
      title={
        <>
          Where a degree{" "}
          <span className="text-eucalypt-light">actually leads</span>
        </>
      }
      subtitle="Occupations you reach through a bachelor, masters or graduate qualification at an Australian institution."
      crumb="Higher education"
      intro="These are guides to the work itself. Each page names the qualification usually used to enter the occupation and links to the CRICOS register, so you can see which institutions are registered to deliver it to international students. Some of these occupations also require registration with a professional board beyond the degree, and the pages say so where that applies."
      careers={higherEducationCareers}
      alsoSee={{ label: "Looking at trades and vocational careers instead", href: "/careers/vocational-education" }}
      image="/images/heroes/higher-education.jpg"
    />
  );
}
