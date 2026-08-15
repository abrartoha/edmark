import type { ReactNode } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import { type LegalDoc } from "@/lib/legal";

// ---------------------------------------------------------------------------
// Renders the legal documents held in lib/legal.ts. Deliberately a small,
// closed parser rather than a markdown library: it supports exactly what these
// three documents use, and anything it does not recognise renders as plain
// text rather than disappearing. Nothing here uses dangerouslySetInnerHTML, so
// a stray angle bracket in the copy cannot become markup.
//
// Supported: ## and ### headings, - bullets, 1. ordered items, --- rules,
// **bold** and [links](/path).
// ---------------------------------------------------------------------------

const INLINE = /(\[[^\]]+\]\([^)]+\))|(\*\*[^*]+\*\*)/g;

/** Bold and links inside a single line. */
function inline(line: string, key: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  INLINE.lastIndex = 0;

  while ((m = INLINE.exec(line)) !== null) {
    if (m.index > last) out.push(line.slice(last, m.index));
    const token = m[0];
    const k = `${key}-${m.index}`;

    if (token.startsWith("[")) {
      const [, label, href] = token.match(/\[([^\]]+)\]\(([^)]+)\)/)!;
      out.push(
        href.startsWith("/") ? (
          <Link
            key={k}
            href={href}
            className="text-eucalypt underline underline-offset-2 transition-colors hover:text-teal-500"
          >
            {label}
          </Link>
        ) : (
          <a
            key={k}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-eucalypt underline underline-offset-2 transition-colors hover:text-teal-500"
          >
            {label}
          </a>
        )
      );
    } else {
      out.push(
        <strong key={k} className="font-medium text-ink">
          {token.slice(2, -2)}
        </strong>
      );
    }
    last = m.index + token.length;
  }

  if (last < line.length) out.push(line.slice(last));
  return out;
}

type Block =
  | { kind: "h2" | "h3"; lines: string[] }
  | { kind: "ul" | "ol" | "p"; lines: string[] }
  | { kind: "hr"; lines: string[] };

/** Groups consecutive lines, so an address block keeps its line breaks. */
function blocks(body: string): Block[] {
  const out: Block[] = [];
  const push = (kind: Block["kind"], line: string) => {
    const last = out[out.length - 1];
    if (last && last.kind === kind && kind !== "hr") last.lines.push(line);
    else out.push({ kind, lines: [line] } as Block);
  };

  for (const raw of body.split("\n")) {
    const line = raw.trim();
    if (!line) {
      // A blank line ends the current block, so two paragraphs never merge.
      out.push({ kind: "p", lines: [] });
      continue;
    }
    if (line === "---") out.push({ kind: "hr", lines: [] });
    else if (line.startsWith("### ")) push("h3", line.slice(4));
    else if (line.startsWith("## ")) push("h2", line.slice(3));
    else if (line.startsWith("- ")) push("ul", line.slice(2));
    else if (/^\d+\.\s/.test(line)) push("ol", line.replace(/^\d+\.\s/, ""));
    else push("p", line);
  }

  return out.filter((b) => b.kind === "hr" || b.lines.length > 0);
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={doc.title} subtitle={doc.subtitle} />
      <Breadcrumb items={[{ label: doc.title }]} />

      <section className="bg-paper py-16 lg:py-24">
        <div className="container-page max-w-3xl">
          {blocks(doc.body).map((b, i) => {
            const key = `b${i}`;
            switch (b.kind) {
              case "hr":
                return <hr key={key} className="my-10 border-line" />;
              case "h2":
                return (
                  <h2
                    key={key}
                    className="mt-12 text-2xl font-medium text-ink first:mt-0 sm:text-3xl"
                  >
                    {inline(b.lines[0], key)}
                  </h2>
                );
              case "h3":
                return (
                  <h3 key={key} className="mt-8 text-lg font-medium text-ink">
                    {inline(b.lines[0], key)}
                  </h3>
                );
              case "ul":
                return (
                  <ul key={key} className="mt-4 space-y-2.5">
                    {b.lines.map((l, j) => (
                      <li
                        key={j}
                        className="relative pl-5 text-base leading-relaxed text-copy before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-sage"
                      >
                        {inline(l, `${key}-${j}`)}
                      </li>
                    ))}
                  </ul>
                );
              case "ol":
                return (
                  <ol key={key} className="mt-4 space-y-3">
                    {b.lines.map((l, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-base leading-relaxed text-copy"
                      >
                        <span className="mt-px shrink-0 font-mono text-sm text-sage">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <span>{inline(l, `${key}-${j}`)}</span>
                      </li>
                    ))}
                  </ol>
                );
              default:
                return (
                  <p
                    key={key}
                    className="mt-5 text-base leading-relaxed text-copy"
                  >
                    {b.lines.map((l, j) => (
                      <span key={j}>
                        {j > 0 && <br />}
                        {inline(l, `${key}-${j}`)}
                      </span>
                    ))}
                  </p>
                );
            }
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
