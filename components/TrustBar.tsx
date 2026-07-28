const items = [
  "Group of Eight universities",
  "TAFE & Vocational",
  "Public & Private Colleges",
  "English Language (ELICOS)",
  "Foundation & Pathways",
];

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-white py-8">
      <div className="container-page reveal">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-sage">
          Guiding students into every level of Australian education
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <span
              key={item}
              className="text-sm font-medium text-copy"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
