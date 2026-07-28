import SectionHeading from "./SectionHeading";

const institutions = [
  "University of Melbourne",
  "Monash University",
  "RMIT University",
  "Deakin University",
  "Swinburne University",
  "La Trobe University",
  "Melbourne Polytechnic",
  "PIA",
  "AAHE",
  "VIT",
  "SISTC",
  "Kaplan Business School",
];

export default function TrustLogos() {
  return (
    <section className="bg-paper-sunk py-14 lg:py-20">
      <div className="container-page">
        <SectionHeading
          center
          eyebrow="Partner institutions"
          title="Universities, TAFEs and colleges across Australia"
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {institutions.map((uni, i) => (
            <div
              key={uni}
              className="reveal flex h-24 items-center justify-center rounded-xl border border-line bg-white px-4 text-center transition-all hover:border-sage/50"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="text-sm font-medium text-ink">{uni}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
