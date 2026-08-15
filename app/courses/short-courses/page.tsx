import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import CourseBrowser from "@/components/CourseBrowser";
import { services, serviceExtras } from "@/lib/content";
import { VET_FEE_BANDS, VET_FIELD_ORDER } from "@/lib/higher-education";
import { vetCourses } from "@/lib/vet-courses";
import { courseSlug } from "@/lib/course-catalog";
import { INDICATIVE_NOTICE } from "@/lib/compliance";

const SLUG = "short-courses";

export function generateMetadata(): Metadata {
  const service = services.find((s) => s.slug === SLUG);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.short} Free consultation with Edmark Education, Australia's trusted education consultancy.`,
    alternates: { canonical: "/courses/short-courses" },
  };
}

export default function ShortCoursesPage() {
  const service = services.find((s) => s.slug === SLUG);
  if (!service) notFound();

  return (
    <ServiceDetail
      service={service}
      extras={serviceExtras[SLUG]}
      eyebrow="Courses"
      trail={[{ label: "Courses" }, { label: service.title }]}
    >
      <section className="border-b border-line bg-paper py-12 lg:py-16">
        <div className="container-page">
          <p className="eyebrow">Courses</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            What you can study
          </h2>
          {/* Same browser as higher education, configured for vocational
              study: trade study areas, annual fee tiers rather than per
              semester, and no Level group since VET has none. */}
          <CourseBrowser
            courses={vetCourses.map((c) => ({
              ...c,
              levelSlug: "",
              levelTitle: "",
              slug: courseSlug(c.name),
            }))}
            fieldOrder={VET_FIELD_ORDER}
            feeBands={VET_FEE_BANDS}
            feeLegend="Budget per year"
            showIntake={false}
            showEnglish={false}
          />
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-sage">
            {INDICATIVE_NOTICE}
          </p>
        </div>
      </section>
    </ServiceDetail>
  );
}
