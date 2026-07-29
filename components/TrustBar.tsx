import { IconCheck } from "./Icons";

const stats = [
  { value: "500+", label: "Students guided" },
  { value: "50+", label: "Partner institutions" },
  { value: "5+", label: "Years of experience" },
];

// Accreditations held by our counselling team. Deliberately specific: these
// are individual professional credentials, not company-level memberships.
const credentials = [
  { name: "ICEF Certified", note: "Education agent training" },
  { name: "QEAC #15175", note: "Qualified Education Agent Counsellor" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-brand-100 bg-brand-50/60 py-10 lg:py-12">
      <div className="container-page reveal">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_auto_1fr] lg:gap-12">
          <dl className="grid grid-cols-3 gap-4 text-center lg:gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-brand-600 sm:text-4xl">
                  {s.value}
                </dd>
                <p className="mt-1 text-xs font-medium text-brand-900/60 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>

          <div
            className="hidden h-16 w-px bg-brand-200 lg:block"
            aria-hidden="true"
          />

          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-start">
            {credentials.map((c) => (
              <li key={c.name} className="flex items-center gap-2.5">
                <IconCheck className="h-5 w-5 shrink-0 text-brand-500" />
                <span>
                  <span className="block text-sm font-bold text-brand-900">
                    {c.name}
                  </span>
                  <span className="block text-xs text-brand-900/55">
                    {c.note}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
