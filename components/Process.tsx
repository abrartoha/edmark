import { steps } from "@/lib/content";

// Short node labels for the timeline. The full step titles and bodies stay in
// lib/content.ts and are still used verbatim beneath each node.
const nodeLabels = ["Apply", "Offer", "Visa", "Start"];

export default function Process() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container-page">
        <h2 className="reveal text-3xl font-medium text-brand-900 sm:text-4xl">
          From confused to enrolled in four simple steps
        </h2>

        {/* ---------------------------------------------------------------
            640px and up: one hairline rule running across, four nodes on it.
            Below 640px the same markup rotates, with the rule running down
            the left and the nodes sitting on it. One DOM, no duplication.
            --------------------------------------------------------------- */}
        <ol className="reveal relative mt-10 grid gap-8 sm:mt-14 sm:grid-cols-4 sm:gap-6">
          {/* Vertical rule, below sm */}
          <span
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-brand-200 sm:hidden"
            aria-hidden="true"
          />
          {/* Horizontal rule, sm and up */}
          <span
            className="absolute left-0 right-0 top-[7px] hidden h-px bg-brand-200 sm:block"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <li key={step.n} className="relative pl-8 sm:pl-0">
              <span
                className="absolute left-0 top-0 grid h-[15px] w-[15px] place-items-center rounded-full border-2 border-brand-500 bg-white sm:relative sm:mb-5"
                aria-hidden="true"
              >
                <span className="h-[5px] w-[5px] rounded-full bg-brand-500" />
              </span>

              <p className="eyebrow">
                {nodeLabels[i]}
              </p>
              <h3 className="mt-2 text-base font-medium text-brand-900">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-900/70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
