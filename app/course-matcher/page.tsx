import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CourseMatcher from "@/components/CourseMatcher";

export const metadata: Metadata = {
  title: "Course Matcher",
  description:
    "Answer five questions and see three Australian study pathways worth considering. Free, instant and no email required. Indicative only, confirmed with you during a free consultation.",
  alternates: { canonical: "/course-matcher" },
  // Placeholder course data: keep this out of the index until it is real.
  robots: { index: false, follow: true },
};

export default function CourseMatcherPage() {
  return (
    <>
      <PageHero
        eyebrow="Course matcher"
        title="Not sure where to start?"
        subtitle="Five questions, three pathways worth a closer look. Free, instant, and no email required."
      />
      <Breadcrumb items={[{ label: "Course matcher" }]} />
      <CourseMatcher />
    </>
  );
}
