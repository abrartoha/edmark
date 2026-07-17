const items = [
  "Group of Eight universities",
  "TAFE & Vocational",
  "Public & Private Colleges",
  "English Language (ELICOS)",
  "Foundation & Pathways",
];

export default function TrustBar() {
  return (
    <section className="border-b border-brand-100 bg-white py-8">
      <div className="container-page reveal">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-900/50">
          Guiding students into every level of Australian education
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <span
              key={item}
              className="text-sm font-semibold text-brand-800/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
