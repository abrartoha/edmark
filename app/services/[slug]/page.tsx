import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { services, serviceExtras } from "@/lib/content";

export function generateStaticParams() {
  // Anything with its own href is written up under another section, /courses
  // in both current cases, and its old /services URL redirects there.
  return services
    .filter((s) => !s.href)
    .map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    ...pageSeo({
      title: service.title,
      description: `${service.short} Free consultation with Edmark Education, Australia's trusted education consultancy.`,
      path: `/services/${params.slug}`,
      image: "/og/services.jpg",
    }),
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <ServiceDetail
      service={service}
      extras={serviceExtras[params.slug]}
      eyebrow="Services"
      trail={[{ label: "Services", href: "/services" }, { label: service.title }]}
    />
  );
}
