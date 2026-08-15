import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CourseMatcher from "@/components/CourseMatcher";

export const metadata: Metadata = pageSeo({
  title: "Course Matcher",
  description:
    "Answer five questions and see three Australian study pathways worth considering. Free, instant and no email required. Indicative only, confirmed with you during a free consultation.",
  path: "/course-matcher",
});

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
