"use client";

import Link from "next/link";
import { useState } from "react";
import type { Pathway } from "@/lib/pathways";
import {
  INDICATIVE_NOTICE,
  MARA_NOTICE,
  formatTuition,
  matchPathways,
  questions,
  timingPrompt,
  type Answers,
  type Timing,
} from "@/lib/course-matcher";

const TOTAL = questions.length;

function Detail({ label, value }: { label: string; value: string; }) {
  return (
    <div className="border-t border-line pt-3">
      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-sage">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-ink">{value || "Not set"}</dd>
    </div>
  );
}

function ResultCard({ pathway }: { pathway: Pathway }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-paper p-6">
      <h3 className="font-serif text-xl font-normal leading-snug text-ink">
        {pathway.name}
      </h3>

      <dl className="mt-5 space-y-3">
        <Detail label="Typical duration" value={pathway.duration} />
        <div className="border-t border-line pt-3">
          <dt className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-sage">
            Indicative annual tuition
          </dt>
          <dd className="mt-1 font-mono text-sm text-eucalypt">
            {formatTuition(pathway.tuitionMin, pathway.tuitionMax)}
          </dd>
        </div>
        <Detail label="Typical entry requirement" value={pathway.entryRequirement} />
        <Detail label="Next intake" value={pathway.nextIntake} />
      </dl>

      {pathway.tags.skilledOccupation && (
        <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-sage">
          {MARA_NOTICE}
        </p>
      )}
    </article>
  );
}

function TalkToUsCard() {
  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-dashed border-line bg-paper-sunk p-6">
      <div>
        <h3 className="font-serif text-xl font-normal leading-snug text-ink">
          Nothing else matched cleanly
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-sage">
          Your answers point somewhere our shortlist does not cover yet. That is
          usually worth a conversation rather than a guess.
        </p>
      </div>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center justify-center rounded border border-eucalypt px-4 py-2.5 text-sm font-medium text-eucalypt transition-colors hover:bg-eucalypt hover:text-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-eucalypt focus-visible:ring-offset-2"
      >
        Talk to us
      </Link>
    </article>
  );
}

export default function CourseMatcher() {
  const [step, setStep] = useState(0);
  // Raw string answers, narrowed to Answers once at the point of scoring.
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const question = questions[step];

  const choose = (value: string) => {
    const next = { ...answers, [question.key]: value };
    setAnswers(next);
    if (step + 1 < TOTAL) setStep(step + 1);
    else setDone(true);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  const results = done ? matchPathways(answers as Answers) : [];
  const emptySlots = done ? Math.max(0, 3 - results.length) : 0;

  return (
    <section
      id="course-matcher"
      className="border-y border-line bg-paper-sunk py-16 lg:py-24"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-sage">
            Course matcher
          </p>
          <h2 className="mt-3 font-serif text-3xl font-normal leading-tight text-ink sm:text-4xl">
            Five questions, three pathways to consider
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sage">
            Free, instant, and no email required. It is a starting point for a
            conversation, not a decision.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          {!done ? (
            <div className="rounded-xl border border-line bg-paper p-6 sm:p-8">
              {/* Progress */}
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-sage">
                  Question {step + 1} of {TOTAL}
                </p>
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="rounded px-2 py-1 text-sm font-medium text-eucalypt underline-offset-4 transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-eucalypt focus-visible:ring-offset-2"
                  >
                    Back
                  </button>
                )}
              </div>
              <div
                className="mt-3 h-1 w-full overflow-hidden rounded bg-line"
                aria-hidden="true"
              >
                <div
                  className="h-full bg-eucalypt transition-[width] duration-300 motion-reduce:transition-none"
                  style={{ width: `${((step + 1) / TOTAL) * 100}%` }}
                />
              </div>

              {/* Question. Reserved height keeps the card from resizing as the
                  option count changes between questions. */}
              <div
                aria-live="polite"
                className="mt-8 flex min-h-[26rem] flex-col sm:min-h-[24rem]"
              >
                <h3
                  id={`q-${question.key}`}
                  className="font-serif text-2xl font-normal leading-snug text-ink sm:text-3xl"
                >
                  {question.prompt}
                </h3>

                <div
                  role="group"
                  aria-labelledby={`q-${question.key}`}
                  className="mt-6 grid gap-3 sm:grid-cols-2"
                >
                  {question.options.map((opt) => {
                    const selected = answers[question.key] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => choose(opt.value)}
                        aria-pressed={selected}
                        className={`w-full rounded border px-4 py-3.5 text-left text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-eucalypt focus-visible:ring-offset-2 motion-reduce:transition-none ${
                          selected
                            ? "border-eucalypt bg-eucalypt text-paper"
                            : "border-line bg-paper text-ink hover:border-eucalypt"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div aria-live="polite">
              <h3 className="font-serif text-2xl font-normal text-ink sm:text-3xl">
                Three pathways worth looking at
              </h3>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {results.map((p) => (
                  <ResultCard key={p.id} pathway={p} />
                ))}
                {Array.from({ length: emptySlots }).map((_, i) => (
                  <TalkToUsCard key={`empty-${i}`} />
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-sage">
                {INDICATIVE_NOTICE}
              </p>

              <div className="mt-8 rounded-xl border border-line bg-paper p-6 text-center">
                {answers.timing && (
                  <p className="mx-auto max-w-xl text-base leading-relaxed text-ink">
                    {timingPrompt[answers.timing as Timing]}
                  </p>
                )}
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center justify-center rounded bg-eucalypt px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-eucalypt-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-eucalypt focus-visible:ring-offset-2"
                >
                  Get these checked properly — book a free consultation
                </Link>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={restart}
                    className="rounded px-2 py-1 text-sm font-medium text-eucalypt underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-eucalypt focus-visible:ring-offset-2"
                  >
                    Start over
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
