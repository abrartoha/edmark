import { facts, type FactKey, type SourcedFact } from "@/lib/facts";

/** Australian long date, e.g. "1 July 2026". */
function longDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * A factual figure with its source attached.
 *
 * The source is not a tooltip or a footnote marker. A reader who wants to know
 * where a number came from should be able to see it without hovering, and a
 * reader who does not care should be able to skip it — hence the value at
 * reading weight and the attribution beneath it, quiet but present.
 *
 * There is no way to render a figure on this site without one of these, which
 * is the point: the attribution cannot be forgotten because the number cannot
 * be typed without it.
 */
export default function Fact({
  name,
  className = "",
  inline = false,
}: {
  name: FactKey;
  className?: string;
  /** Inline in a sentence: value and source on one line, no block spacing. */
  inline?: boolean;
}) {
  const fact: SourcedFact = facts[name];

  if (inline) {
    return (
      <span className={className}>
        <strong className="font-semibold text-ink">{fact.value}</strong>
        {fact.note ? ` (${fact.note})` : ""}{" "}
        <span className="text-sm text-sage">
          &mdash;{" "}
          <a
            href={fact.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-eucalypt"
          >
            {fact.source}
          </a>
          , as at {longDate(fact.asAt)}
        </span>
      </span>
    );
  }

  return (
    <div className={className}>
      <p className="text-base text-ink">
        <strong className="font-semibold">{fact.value}</strong>
        {fact.note ? (
          <span className="text-copy"> &mdash; {fact.note}</span>
        ) : null}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-sage">
        <a
          href={fact.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-eucalypt"
        >
          {fact.source}
        </a>
        , as at {longDate(fact.asAt)}.
      </p>
    </div>
  );
}

/**
 * Just the value, for places where the surrounding sentence already carries
 * the attribution. Use sparingly: the whole point is that a number travels
 * with its source.
 */
export function factValue(name: FactKey): string {
  return facts[name].value;
}
