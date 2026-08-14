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
  type Course,
  type Level,
} from "@/lib/higher-education";

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
  level,
  levels,
}: {
  level: Level;
  levels: { slug: string; title: string; count: number }[];
}) {
  const [fields, setFields] = useState<Set<string>>(new Set());
  const [fees, setFees] = useState<Set<string>>(new Set());
  const [months, setMonths] = useState<Set<string>>(new Set());
  const [ielts, setIelts] = useState<Set<number>>(new Set());
  const [durations, setDurations] = useState<Set<string>>(new Set());

  const all = level.courses;

  // Each predicate is separate so a facet's counts can be computed against
  // every OTHER filter, which is what makes the numbers beside each option
  // reflect what you would actually get by ticking it.
  const preds = useMemo(
    () => ({
      field: (c: Course) => fields.size === 0 || (c.field ? fields.has(c.field) : false),
      fee: (c: Course) =>
        fees.size === 0 ||
        FEE_BANDS.some((b) => fees.has(b.label) && b.test(c.tuitionMin ?? 0)),
      month: (c: Course) =>
        months.size === 0 || intakeMonthsOf(c).some((m) => months.has(m)),
      ielts: (c: Course) => {
        if (ielts.size === 0) return true;
        const v = ieltsOf(c);
        return v !== null && ielts.has(v);
      },
      duration: (c: Course) => durations.size === 0 || durations.has(c.duration),
    }),
    [fields, fees, months, ielts, durations]
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

  const fieldOptions = FIELD_ORDER.filter((f) => all.some((c) => c.field === f));
  const durationOptions = Array.from(new Set(all.map((c) => c.duration))).sort();
  const ieltsOptions = Array.from(
    new Set(all.map(ieltsOf).filter((v): v is number => v !== null))
  ).sort((a, b) => a - b);
  const monthOptions = INTAKE_MONTHS.filter((m) =>
    all.some((c) => intakeMonthsOf(c).includes(m))
  );

  const activeCount =
    fields.size + fees.size + months.size + ielts.size + durations.size;

  const clear = () => {
    setFields(new Set());
    setFees(new Set());
    setMonths(new Set());
    setIelts(new Set());
    setDurations(new Set());
  };

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[248px_1fr] lg:gap-12">
      {/* Sticky on desktop so the filters stay reachable down a long list. */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
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
          <fieldset>
            <legend className="eyebrow mb-2">Level</legend>
            {levels.map((l) => (
              <Link
                key={l.slug}
                href={`/services/higher-education/${l.slug}`}
                aria-current={l.slug === level.slug ? "page" : undefined}
                className={`flex items-center justify-between py-1.5 text-sm ${
                  l.slug === level.slug
                    ? "font-semibold text-eucalypt"
                    : "text-copy hover:text-ink"
                }`}
              >
                {l.title}
                <span className="font-mono text-xs text-sage">{l.count}</span>
              </Link>
            ))}
          </fieldset>

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

          <Group legend="Tuition per semester">
            {FEE_BANDS.map((b) => (
              <Check
                key={b.label}
                label={b.label}
                checked={fees.has(b.label)}
                count={others("fee").filter((c) => b.test(c.tuitionMin ?? 0)).length}
                onChange={() => setFees(toggle(fees, b.label))}
              />
            ))}
          </Group>

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

          <Group legend="English (IELTS Academic)">
            {ieltsOptions.map((v) => (
              <Check
                key={v}
                label={v.toFixed(1)}
                checked={ielts.has(v)}
                count={others("ielts").filter((c) => ieltsOf(c) === v).length}
                onChange={() => setIelts(toggle(ielts, v))}
              />
            ))}
            <p className="mt-2 text-xs leading-relaxed text-sage">
              PTE is accepted at most providers. We confirm the equivalent score
              for your shortlist, since providers set their own conversion.
            </p>
          </Group>

          <Group legend="Duration">
            {durationOptions.map((d) => (
              <Check
                key={d}
                label={d.replace(" full time", "")}
                checked={durations.has(d)}
                count={others("duration").filter((c) => c.duration === d).length}
                onChange={() => setDurations(toggle(durations, d))}
              />
            ))}
          </Group>
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
              <CourseCard key={`${c.name}-${i}`} course={c} />
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
