import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export type LegalSection = {
  heading: string;
  /** What this section has to cover. Replaced by the real text when written. */
  todo: string;
};

/**
 * Shared shell for the three legal pages. They are structure only until the
 * content is written: each section prints its heading and a visible note
 * saying what belongs there, so an unfinished page reads as unfinished rather
 * than as policy. All three are noindex until then; see each route.
 */
export default function LegalPage({
  title,
  subtitle,
  sections,
}: {
  title: string;
  subtitle: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle={subtitle} />
      <Breadcrumb items={[{ label: title }]} />

      <section className="bg-paper py-16 lg:py-24">
        <div className="container-page max-w-3xl">
          <p className="border-l-2 border-brass pl-5 text-sm leading-relaxed text-sage">
            This page is being written. The headings below are final; the text
            under each one is not yet published. For anything you need in the
            meantime, contact us on {site.phone} or at {site.email}.
          </p>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {sections.map((s, i) => (
              <section key={s.heading} className="py-8">
                <h2 className="text-xl font-medium text-ink">
                  <span className="mr-3 font-mono text-sm text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.heading}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-sage">
                  {s.todo}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-10 text-sm leading-relaxed text-sage">
            {site.legalName} · ABN {site.abn} · ACN {site.acn} ·{" "}
            {site.address.full}
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
