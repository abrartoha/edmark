import type { Career } from "@/lib/careers";

/**
 * The qualification section of a career page.
 *
 * This is the one place a national code appears, and it is deliberately low on
 * the page and deliberately plain. It states a fact — this is the usual entry
 * qualification for this occupation — and sends the reader to the national
 * register to find the organisations approved to deliver it.
 *
 * What it must never become: a course listing. No fee, no duration, no intake,
 * no entry requirement, no provider name, and no invitation to apply or enrol.
 * Those turn a statement of fact back into an advertisement for a training
 * product, which is not Edmark's to advertise. scripts/verify-careers.ts
 * enforces this.
 */
export default function QualificationPathway({ career }: { career: Career }) {
  const many = career.pathways.length > 1;

  return (
    <section className="reveal border-y border-line bg-paper-sunk py-16 lg:py-20">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">Typical qualification pathway</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          {many
            ? "The qualifications usually used to enter this work"
            : "The qualification usually used to enter this work"}
        </h2>

        <ul className="mt-8 space-y-6">
          {career.pathways.map((p) => (
            <li
              key={p.nationalCode ?? p.title}
              className="border-t border-line pt-6 text-base leading-relaxed text-copy"
            >
              <p>
                {many ? "One entry qualification is" : "The usual entry qualification is"}{" "}
                <strong className="font-semibold text-ink">
                  {p.title}
                  {p.nationalCode ? ` (${p.nationalCode})` : ""}
                </strong>
                {p.register === "tga" ? (
                  <>
                    , a nationally recognised qualification on the national
                    register. The registered training organisations approved to
                    deliver and issue it are listed on{" "}
                  </>
                ) : (
                  <>
                    , a higher education qualification. The institutions
                    registered to deliver it to international students are
                    listed on{" "}
                  </>
                )}
                <a
                  href={p.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-eucalypt underline underline-offset-2 transition-colors hover:text-ink"
                >
                  {p.register === "tga" ? "training.gov.au" : "the CRICOS register"}
                </a>
                .
              </p>
              {p.note && (
                <p className="mt-2 text-sm text-sage">{p.note}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
