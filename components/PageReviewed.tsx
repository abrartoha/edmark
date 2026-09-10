import { VISA_CURRENCY_NOTICE } from "@/lib/facts";

/**
 * When a page was last reviewed, and the standing warning on anything carrying
 * visa or cost information.
 *
 * A page about visas is only ever true on a date. Without one, a reader has no
 * way to tell whether they are looking at this year's rules or the ones from
 * two intakes ago — which is exactly how a minimum wage rate sat on this site
 * two years out of date, read by students deciding whether they could afford
 * to come.
 *
 * The date is passed rather than generated from the build, deliberately. A
 * build date would update itself every deploy and quietly claim a review that
 * nobody did.
 */
export default function PageReviewed({
  date,
  visaNotice = true,
}: {
  /** ISO date a human last reviewed this page's content. */
  date: string;
  /** Set false on a page with no visa or cost information. */
  visaNotice?: boolean;
}) {
  const shown = new Date(`${date}T00:00:00`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="border-t border-line bg-paper py-8">
      <div className="container-page">
        <div className="max-w-3xl">
          {visaNotice && (
            <p className="text-sm leading-relaxed text-copy">
              {VISA_CURRENCY_NOTICE}
            </p>
          )}
          <p className={`text-sm text-sage ${visaNotice ? "mt-3" : ""}`}>
            Last reviewed: {shown}
          </p>
        </div>
      </div>
    </section>
  );
}
