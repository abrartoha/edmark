import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageSeo } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import CareerCard from "@/components/CareerCard";
import QualificationPathway from "@/components/QualificationPathway";
import { IconCheck } from "@/components/Icons";
import { careerPhoto } from "@/lib/career-photos";
import { careers, getCareer, relatedTo } from "@/lib/careers";

export function generateStaticParams() {
  return careers.map((c) => ({ slug: c.slug }));
}

/**
 * Title and description describe the occupation. Neither names a
 * qualification, carries a national code, or suggests Edmark provides
 * training — a page that reads as careers information but whose search result
 * advertises a qualification has not actually changed.
 */
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const career = getCareer(params.slug);
  if (!career) return {};

  return pageSeo({
    title: career.h1,
    description: `${career.summary} What the work involves day to day, the conditions, and the usual qualification pathway.`,
    path: `/careers/${career.slug}`,
    image: "/og/courses.jpg",
  });
}

export default function CareerPage({ params }: { params: { slug: string } }) {
  const career = getCareer(params.slug);
  if (!career) notFound();

  const photo = careerPhoto(career);
  const related = relatedTo(career);

  return (
    <>
      {/* The occupation leads the page. Not a qualification title, and not a
          national code — those belong further down, as a statement of fact. */}
      <section className="relative overflow-hidden bg-ink">
        {photo && (
          <Image
            src={photo}
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover opacity-40"
          />
        )}
        <div className="container-page relative py-16 lg:py-20">
          <p className="text-xs font-medium uppercase tracking-wider text-mist">
            Careers &amp; pathways
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium text-paper sm:text-5xl">
            {career.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
            {career.summary}
          </p>
        </div>
      </section>

      <Breadcrumb
        items={[
          { label: "Careers & pathways", href: "/careers" },
          { label: career.occupation },
        ]}
      />

      <section className="reveal bg-paper py-16 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow">The work</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">What the job involves</h2>

            <ul className="mt-8 space-y-3">
              {career.dayToDay.map((d) => (
                <li key={d} className="flex items-start gap-3 text-base text-ink">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-eucalypt text-paper">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {d}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-medium text-ink">
              Where the work happens
            </h3>
            <p className="mt-3 text-base leading-relaxed text-copy">
              {career.workEnvironment}
            </p>

            {/* Only where a licensing regime applies, and it names the
                authority so the reader can check it at the source. */}
            {career.licensing && (
              <>
                <h3 className="mt-10 text-xl font-medium text-ink">
                  Licensing and registration
                </h3>
                <p className="mt-3 text-base leading-relaxed text-copy">
                  {career.licensing}
                </p>
              </>
            )}

            {career.outlook && (
              <>
                <h3 className="mt-10 text-xl font-medium text-ink">
                  Job outlook
                </h3>
                <p className="mt-3 text-base leading-relaxed text-copy">
                  {career.outlook}
                </p>
              </>
            )}
          </div>

          <aside className="lg:pt-14">
            <div className="rounded-tr-[2.5rem] rounded-bl-[2.5rem] bg-mint-100 p-8">
              <h3 className="text-xl font-semibold text-eucalypt">
                How Edmark helps
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-copy">
                Edmark Education is an education agent. We help international
                students compare providers, understand visa and licensing
                requirements, and prepare a strong application. We do not
                deliver training or issue qualifications.
              </p>
              <Link href="/contact" className="btn-primary mt-6 w-full">
                Book a free consultation
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <QualificationPathway career={career} />

      {related.length > 0 && (
        <section className="reveal bg-paper py-16 lg:py-20">
          <div className="container-page">
            <p className="eyebrow">Related</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Careers like this one</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <CareerCard key={c.slug} career={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line bg-paper py-8">
        <div className="container-page">
          <p className="text-sm text-sage">
            Last reviewed: {career.lastReviewed}
          </p>
        </div>
      </section>

      <CTA
        title={`Thinking about a career in ${career.occupation.toLowerCase()}?`}
        subtitle="Book a free consultation and we'll help you compare providers and prepare your application."
      />
    </>
  );
}
