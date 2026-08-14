"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import CourseCard from "./CourseCard";
import {
  FEE_BANDS,
  FIELD_ORDER,
  INTAKE_MONTHS,
  ieltsOf,
  intakeMonthsOf,
  PTE_EQUIVALENT,
  ROLLING_INTAKE,
  type Course,
  type Field,
  type FeeBand,
} from "@/lib/higher-education";

/** A course plus the level it sits under, so one flat list can span both. */
export type BrowserCourse = Course & {
  levelSlug: string;
  levelTitle: string;
  /** Set so a listed card links to its own page. */
  slug?: string;
};

/** Toggles a value in a set, returning a new set. */
function toggle<T>(set: Set<T>, value: T) {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

function Check({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count: number;
  checked: boolean;
  onChange: () => void;
}) {
  // Options that would return nothing are disabled rather than hidden, so the
  // list does not reshuffle under the pointer as filters are applied.
  const disabled = count === 0 && !checked;
  return (
    <label
      className={`flex items-center gap-2.5 py-1.5 text-sm ${
        disabled ? "cursor-not-allowed text-sage/60" : "cursor-pointer text-copy hover:text-ink"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="h-4 w-4 shrink-0 rounded border-line text-eucalypt accent-eucalypt focus-visible:ring-2 focus-visible:ring-eucalypt"
      />
      <span className="flex-1">{label}</span>
      <span className="font-mono text-xs text-sage">{count}</span>
    </label>
  );
}

function Group({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-line pt-5">
      <legend className="eyebrow mb-2">{legend}</legend>
      {children}
    </fieldset>
  );
}

export default function CourseBrowser({
  courses,
  levels = [],
  lockedLevel,
  fieldOrder = FIELD_ORDER,
  feeBands = FEE_BANDS,
  feeLegend = "Budget per semester",
  showIntake = true,
  showEnglish = true,
}: {
  courses: BrowserCourse[];
  /** Omit where the list has no levels, e.g. vocational courses. */
  levels?: { slug: string; title: string; count: number }[];
  /**
   * Set on a level page, where the route already fixes the level, so Level
   * renders as links out. Left undefined on the hub, where it is a filter and
   * a student can switch without loading another page.
   */
  lockedLevel?: string;
  /** Study areas to offer, in display order. Higher education by default. */
  fieldOrder?: readonly Field[];
  /** Fee tiers. Higher education quotes per semester, vocational per year. */
  feeBands?: FeeBand[];
  feeLegend?: string;
  /**
   * Vocational courses are almost all rolling intake at a provider-set English
   * level, so those two groups say the same thing on nearly every card and are
   * turned off there rather than offering a filter that cannot narrow much.
   */
  showIntake?: boolean;
  showEnglish?: boolean;
}) {
  const [levelSlugs, setLevelSlugs] = useState<Set<string>>(new Set());
  const [fields, setFields] = useState<Set<string>>(new Set());
  const [fees, setFees] = useState<Set<string>>(new Set());
  const [months, setMonths] = useState<Set<string>>(new Set());
  const [ielts, setIelts] = useState<Set<number>>(new Set());

  const all = courses;

  // Each predicate is separate so a facet's counts can be computed against
  // every OTHER filter, which is what makes the numbers beside each option
  // reflect what you would actually get by ticking it.
  const preds = useMemo(
    () => ({
      level: (c: BrowserCourse) =>
        levelSlugs.size === 0 || levelSlugs.has(c.levelSlug),
      field: (c: Course) => fields.size === 0 || (c.field ? fields.has(c.field) : false),
      fee: (c: Course) =>
        fees.size === 0 ||
        feeBands.some(
          (b) => fees.has(b.label) && c.tuitionMin != null && c.tuitionMin <= b.max
        ),
      month: (c: Course) =>
        !showIntake ||
        months.size === 0 ||
        intakeMonthsOf(c).some((m) => months.has(m)),
      ielts: (c: Course) => {
        if (!showEnglish || ielts.size === 0) return true;
        const v = ieltsOf(c);
        return v !== null && ielts.has(v);
      },
    }),
    [levelSlugs, fields, fees, months, ielts, feeBands, showIntake, showEnglish]
  );

  const results = useMemo(
    () => all.filter((c) => Object.values(preds).every((p) => p(c))),
    [all, preds]
  );

  /** Courses matching every filter except the named one. */
  const others = (skip: keyof typeof preds) =>
    all.filter((c) =>
      Object.entries(preds)
        .filter(([k]) => k !== skip)
        .every(([, p]) => p(c))
    );

  const fieldOptions = fieldOrder.filter((f) => all.some((c) => c.field === f));
  const ieltsOptions = Array.from(
    new Set(all.map(ieltsOf).filter((v): v is number => v !== null))
  ).sort((a, b) => a - b);
  const monthOptions = [
    ...INTAKE_MONTHS.filter((m) => all.some((c) => intakeMonthsOf(c).includes(m))),
    ...(all.some((c) => intakeMonthsOf(c).includes(ROLLING_INTAKE))
      ? [ROLLING_INTAKE]
      : []),
  ];

  const activeCount =
    levelSlugs.size +
    fields.size +
    fees.size +
    (showIntake ? months.size : 0) +
    (showEnglish ? ielts.size : 0);

  const clear = () => {
    setLevelSlugs(new Set());
    setFields(new Set());
    setFees(new Set());
    setMonths(new Set());
    setIelts(new Set());
  };

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[248px_1fr] lg:gap-12">
      {/* Sticky on desktop so the filters stay reachable down a long list, and
          scrollable in its own right because the six groups run past 1100px,
          taller than a laptop viewport. Without the max height and overflow a
          sticky column simply pins at the top and everything below the fold
          becomes unreachable: the page scrolls, the sidebar does not. */}
      <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto lg:pr-3">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg">Filter</h3>
          {activeCount > 0 && (
            <button
              type="button"
              onClick={clear}
              className="text-xs font-medium text-eucalypt underline underline-offset-4 hover:text-teal-500"
            >
              Clear {activeCount}
            </button>
          )}
        </div>

        <div className="mt-5 space-y-5">
          {levels.length > 0 && (
          <fieldset>
            <legend className="eyebrow mb-2">Level</legend>
            {lockedLevel
              ? levels.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/services/higher-education/${l.slug}`}
                    aria-current={l.slug === lockedLevel ? "page" : undefined}
                    className={`flex items-center justify-between py-1.5 text-sm ${
                      l.slug === lockedLevel
                        ? "font-semibold text-eucalypt"
                        : "text-copy hover:text-ink"
                    }`}
                  >
                    {l.title}
                    <span className="font-mono text-xs text-sage">{l.count}</span>
                  </Link>
                ))
              : levels.map((l) => (
                  <Check
                    key={l.slug}
                    label={l.title}
                    checked={levelSlugs.has(l.slug)}
                    count={others("level").filter((c) => c.levelSlug === l.slug).length}
                    onChange={() => setLevelSlugs(toggle(levelSlugs, l.slug))}
                  />
                ))}
          </fieldset>
          )}

          <Group legend="Study area">
            {fieldOptions.map((f) => (
              <Check
                key={f}
                label={f}
                checked={fields.has(f)}
                count={others("field").filter((c) => c.field === f).length}
                onChange={() => setFields(toggle(fields, f))}
              />
            ))}
          </Group>

          <Group legend={feeLegend}>
            {feeBands.map((b) => (
              <Check
                key={b.label}
                label={b.label}
                checked={fees.has(b.label)}
                count={
                  others("fee").filter(
                    (c) => c.tuitionMin != null && c.tuitionMin <= b.max
                  ).length
                }
                onChange={() => setFees(toggle(fees, b.label))}
              />
            ))}
            <p className="mt-2 text-xs leading-relaxed text-sage">
              Matched on the lowest fee in each course's range, so a tier shows
              everything available at or below it somewhere in the network.
            </p>
          </Group>

          {showIntake && (
          <Group legend="Intake">
            {monthOptions.map((m) => (
              <Check
                key={m}
                label={m}
                checked={months.has(m)}
                count={others("month").filter((c) => intakeMonthsOf(c).includes(m)).length}
                onChange={() => setMonths(toggle(months, m))}
              />
            ))}
          </Group>
          )}

          {showEnglish && (
          <Group legend="English (IELTS / PTE)">
            {ieltsOptions.map((v) => (
              <Check
                key={v}
                label={`IELTS ${v.toFixed(1)} / PTE ${PTE_EQUIVALENT[v.toFixed(1)] ?? "-"}`}
                checked={ielts.has(v)}
                count={others("ielts").filter((c) => ieltsOf(c) === v).length}
                onChange={() => setIelts(toggle(ielts, v))}
              />
            ))}
            <p className="mt-2 text-xs leading-relaxed text-sage">
              PTE figures are Pearson's indicative concordance. Each provider
              sets the score it accepts, and the visa requirement is set
              separately, so we confirm both against your shortlist.
            </p>
          </Group>
          )}

        </div>
      </aside>

      <div>
        <p aria-live="polite" className="text-sm text-sage">
          Showing <span className="font-semibold text-ink">{results.length}</span> of{" "}
          {all.length} courses
        </p>

        {results.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {results.map((c, i) => (
              <CourseCard
                key={`${c.name}-${i}`}
                course={c}
                href={c.slug ? `/courses/${c.slug}` : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-line p-10 text-center">
            <p className="text-base text-ink">No course matches every filter.</p>
            <p className="mt-2 text-sm text-sage">
              Try removing one, or book a free consultation and we will look
              across the network for you.
            </p>
            <button
              type="button"
              onClick={clear}
              className="btn-outline mt-6 text-sm"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
