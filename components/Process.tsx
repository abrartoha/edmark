import { steps } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          center
          eyebrow="How it works"
          title={<>From confused to <em className="signature">enrolled</em> in four simple steps</>}
          subtitle="No jargon. No runaround. Just a clear, guided path to your Australian education."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className="reveal relative"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="card h-full">
                <span className="font-display text-4xl font-medium text-mist">
                  {step.n}
                </span>
                <h3 className="mt-3 text-lg font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-copy">
                  {step.body}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="absolute -right-3 top-1/2 hidden h-px w-6 bg-line lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
