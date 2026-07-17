import SectionHeading from "./SectionHeading";

const universities = [
  "University of Melbourne",
  "Monash University",
  "RMIT University",
  "Deakin University",
  "Swinburne University",
  "La Trobe University",
  "Victoria University",
  "Melbourne Polytechnic",
];

export default function TrustLogos() {
  return (
    <section className="bg-brand-50/50 py-14 lg:py-20">
      <div className="container-page">
        <SectionHeading
          center
          eyebrow="Partner institutions"
          title="Trusted by students heading to Australia's leading institutions"
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
          {universities.map((uni, i) => (
            <div
              key={uni}
              className="reveal flex h-24 items-center justify-center rounded-2xl border border-brand-100 bg-white px-4 text-center shadow-soft transition-all hover:border-brand-200 hover:shadow-glow"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="text-sm font-semibold text-brand-800">{uni}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
