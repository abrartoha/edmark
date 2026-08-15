import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import ServiceIcon from "@/components/ServiceIcon";
import { IconCheck } from "@/components/Icons";
import { services, type Service, type ServiceExtras } from "@/lib/content";
import { MARA_NOTICE } from "@/lib/compliance";
import { site } from "@/lib/site";

type Crumb = { label: string; href?: string };

/**
 * The write-up shared by /services/[slug] and the course pages that were once
 * served by it. Only the eyebrow and the breadcrumb differ between them, so
 * the body lives here rather than being copied into each route.
 */
export default function ServiceDetail({
  service,
  extras,
  eyebrow,
  trail,
  maraNotice,
  children,
}: {
  service: Service;
  extras?: ServiceExtras;
  eyebrow: string;
  trail: Crumb[];
  /**
   * Prints the verbatim MARA notice above the write-up. Set on any service
   * whose copy touches migration, so the caveat is read before the claim
   * rather than after it.
   */
  maraNotice?: boolean;
  /** Rendered between the breadcrumb and the write-up, e.g. a course list. */
  children?: React.ReactNode;
}) {
  const otherServices = services.filter((s) => s.slug !== service.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.long,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: "AU",
    serviceType: "Education Consulting",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* service.short is a sentence and service.long runs to several
          paragraphs, so using them as the heading and subheading pushed the
          content far down the page. The title is the page name, the subtitle
          is the one-line summary, and the long copy stays where it belongs:
          in the body below, and as the meta description. */}
      <PageHero
        eyebrow={eyebrow}
        title={service.title}
        subtitle={service.short}
        image={`/images/heroes/${service.slug}.jpg`}
      />
      <Breadcrumb items={trail} />

      {/* Courses lead the page where a page has them, so clicking through to
          VET lands on the list and its filters rather than on service copy.
          The explanatory sections follow underneath. */}
      {children}

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-brand-500">
              <ServiceIcon name={service.icon} className="h-9 w-9" />
            </div>
            <h2 className="mt-6 text-3xl font-medium text-brand-900">
              {service.title}
            </h2>
            {maraNotice && (
              <p className="mt-6 border-l-2 border-brass pl-5 text-sm leading-relaxed text-sage">
                {MARA_NOTICE}
              </p>
            )}
            {extras?.extended.split("\n\n").map((p, i) => (
              <p
                key={i}
                className="mt-4 text-brand-900/70 leading-relaxed"
              >
                {p}
              </p>
            ))}

            <div className="mt-8 rounded-2xl bg-brand-50 p-6">
              <h3 className="text-lg font-medium text-brand-900">
                What&apos;s included
              </h3>
              <ul className="mt-4 space-y-3">
                {service.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm font-medium text-brand-800"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint-300 text-brand-950">
                      <IconCheck className="h-3 w-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            {extras && (
              <>
                <div className="card">
                  <h3 className="text-lg font-medium text-brand-900">
                    Who is this for?
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {extras.whoFor.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-brand-900/70"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                          <IconCheck className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-lg font-medium text-brand-900">
                    What to expect
                  </h3>
                  <ol className="mt-4 space-y-3">
                    {extras.whatToExpect.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-brand-900/70"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint-300 text-brand-950 text-xs font-medium">
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </>
            )}
          </div>
        </div>

      </section>

      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-page">
          <h2 className="text-center text-2xl font-medium text-brand-900">
            Explore our other services
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={s.href ?? `/services/${s.slug}`}
                className="card-hover group flex items-start gap-4"
              >
                <div className="shrink-0 text-brand-500">
                  <ServiceIcon name={s.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-900 group-hover:text-brand-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-900/60 line-clamp-2">
                    {s.short}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
