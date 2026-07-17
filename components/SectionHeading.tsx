export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? "bg-white/10 text-mint" : ""}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl font-extrabold sm:text-4xl ${
          light ? "text-white" : "text-brand-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-brand-100" : "text-brand-900/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
