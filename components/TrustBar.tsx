import { IconCheck } from "./Icons";

const stats = [
  { value: "500+", label: "Students guided" },
  { value: "5+", label: "Years of experience" },
];

// Accreditations held by our counselling team. Deliberately specific: these
// are individual professional credentials, not company-level memberships.
const credentials = [
  { name: "ICEF Certified", note: "Education agent training" },
  { name: "QEAC Certified", note: "Qualified Education Agent Counsellor" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-paper-sunk py-10 lg:py-12">
      <div className="container-page reveal">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_auto_1fr] lg:gap-12">
          <dl className="grid grid-cols-2 gap-4 text-center lg:gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-medium text-eucalypt sm:text-4xl">
                  {s.value}
                </dd>
                <p className="mt-1 text-xs font-medium text-sage sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>

          <div
            className="hidden h-16 w-px bg-line lg:block"
            aria-hidden="true"
          />

          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-start">
            {credentials.map((c) => (
              <li key={c.name} className="flex items-center gap-2.5">
                <IconCheck className="h-5 w-5 shrink-0 text-eucalypt" />
                <span>
                  <span className="block text-sm font-medium text-ink">
                    {c.name}
                  </span>
                  <span className="block text-xs text-sage">
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
