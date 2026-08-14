import type { Field } from "@/lib/higher-education";

/**
 * Illustrated header for a study area, drawn rather than photographed.
 *
 * One per field, not one per course: 96 courses share 16 scenes, so a card
 * reads as belonging to a group. Everything is flat SVG in the site palette
 * with no external requests, so these cost nothing to load and cannot break
 * the way a missing image file would.
 *
 * Swapping any of these for a photograph later means replacing one case here,
 * not touching a card or a page.
 */

const MINT = "#D9F2EA";
const MINT_3 = "#7FD4C1";
const TEAL_7 = "#0F4A47";
const TEAL_5 = "#17706A";
const BRASS = "#C6A25C";
const SAND = "#F1E6CC";
const INK = "#062421";

/** Ground colour per field, so neighbouring cards in a grid do not repeat. */
const GROUND: Record<string, string> = {
  "Construction & Trades": SAND,
  Automotive: MINT,
  "Hospitality & Cookery": SAND,
  "Health & Community Care": MINT,
  "Early Childhood Education": SAND,
  "Computing & IT": MINT,
  Engineering: MINT,
  "Engineering & Fabrication": SAND,
  "Electrical & Refrigeration": MINT,
  Business: SAND,
  Law: MINT,
  Science: SAND,
  "Education & Teaching": MINT,
  "Hotel Management": SAND,
  Health: MINT,
  Security: SAND,
};

function Scene({ field }: { field: string }) {
  switch (field) {
    case "Construction & Trades":
      return (
        <>
          <rect x="26" y="96" width="52" height="48" fill={TEAL_7} />
          <rect x="84" y="72" width="46" height="72" fill={TEAL_5} />
          <rect x="136" y="110" width="40" height="34" fill={MINT_3} />
          <path d="M150 30h44v10h-44z" fill={BRASS} />
          <path d="M188 34v58" stroke={TEAL_7} strokeWidth="5" />
          <path d="M188 92l-12 12h24z" fill={BRASS} />
          <path d="M20 144h176" stroke={INK} strokeWidth="4" />
        </>
      );
    case "Automotive":
      return (
        <>
          <path d="M38 118h140l-14-34a14 14 0 00-13-9H65a14 14 0 00-13 9z" fill={TEAL_7} />
          <rect x="30" y="112" width="156" height="20" rx="9" fill={TEAL_5} />
          <circle cx="66" cy="134" r="15" fill={INK} />
          <circle cx="66" cy="134" r="6" fill={MINT_3} />
          <circle cx="150" cy="134" r="15" fill={INK} />
          <circle cx="150" cy="134" r="6" fill={MINT_3} />
          <path d="M74 84h68l8 22H66z" fill={MINT_3} />
          <path d="M108 84v22" stroke={TEAL_7} strokeWidth="3" />
        </>
      );
    case "Hospitality & Cookery":
      return (
        <>
          <path d="M108 34c-16 0-28 10-28 24 0 9 5 16 12 20v18h32V78c7-4 12-11 12-20 0-14-12-24-28-24z" fill={MINT_3} />
          <rect x="88" y="96" width="40" height="8" rx="3" fill={TEAL_7} />
          <path d="M52 122h112a0 0 0 010 0 34 34 0 01-34 34H86a34 34 0 01-34-34z" fill={TEAL_7} />
          <rect x="36" y="118" width="144" height="7" rx="3" fill={BRASS} />
          <path d="M150 60c10 4 16 12 16 22" stroke={TEAL_5} strokeWidth="4" fill="none" />
        </>
      );
    case "Health & Community Care":
    case "Health":
      return (
        <>
          <path d="M108 148s-46-27-46-58a26 26 0 0146-17 26 26 0 0146 17c0 31-46 58-46 58z" fill={TEAL_7} />
          <path d="M100 74h16v14h14v16h-14v14h-16v-14H86V88h14z" fill={MINT} />
          <circle cx="46" cy="52" r="12" fill={MINT_3} />
          <circle cx="170" cy="52" r="12" fill={BRASS} />
        </>
      );
    case "Early Childhood Education":
      return (
        <>
          <rect x="34" y="98" width="38" height="38" rx="6" fill={TEAL_7} />
          <rect x="80" y="98" width="38" height="38" rx="6" fill={MINT_3} />
          <rect x="126" y="98" width="38" height="38" rx="6" fill={BRASS} />
          <rect x="57" y="56" width="38" height="38" rx="6" fill={TEAL_5} />
          <rect x="103" y="56" width="38" height="38" rx="6" fill={TEAL_7} />
          <circle cx="76" cy="75" r="6" fill={MINT} />
          <circle cx="122" cy="75" r="6" fill={MINT_3} />
          <path d="M24 140h168" stroke={INK} strokeWidth="4" />
        </>
      );
    case "Computing & IT":
      return (
        <>
          <rect x="40" y="46" width="136" height="80" rx="8" fill={TEAL_7} />
          <rect x="52" y="58" width="112" height="56" rx="4" fill={MINT} />
          <path d="M70 74l-12 12 12 12" stroke={TEAL_5} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M104 70l-10 32" stroke={BRASS} strokeWidth="5" strokeLinecap="round" />
          <path d="M138 74l12 12-12 12" stroke={TEAL_5} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="82" y="134" width="52" height="8" rx="4" fill={TEAL_5} />
        </>
      );
    case "Engineering":
      return (
        <>
          <circle cx="108" cy="92" r="34" fill="none" stroke={TEAL_7} strokeWidth="12" />
          <circle cx="108" cy="92" r="12" fill={BRASS} />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <rect key={a} x="103" y="40" width="10" height="18" rx="3" fill={TEAL_5}
              transform={`rotate(${a} 108 92)`} />
          ))}
          <path d="M28 140h160" stroke={INK} strokeWidth="4" />
          <path d="M40 140V116h20v24" fill={MINT_3} />
        </>
      );
    case "Engineering & Fabrication":
      return (
        <>
          <path d="M44 132l58-58" stroke={TEAL_7} strokeWidth="12" strokeLinecap="round" />
          <path d="M96 68l22-22 26 26-22 22z" fill={TEAL_5} />
          <path d="M138 44l22 22" stroke={BRASS} strokeWidth="10" strokeLinecap="round" />
          {[[74, 108], [88, 122], [60, 94]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="5" fill={BRASS} />
          ))}
          <path d="M28 144h160" stroke={INK} strokeWidth="4" />
        </>
      );
    case "Electrical & Refrigeration":
      return (
        <>
          <rect x="62" y="38" width="92" height="104" rx="8" fill={TEAL_7} />
          <rect x="74" y="52" width="68" height="30" rx="4" fill={MINT} />
          <path d="M112 92l-16 26h14l-4 20 20-30h-14z" fill={BRASS} />
          <circle cx="86" cy="66" r="5" fill={MINT_3} />
          <circle cx="130" cy="66" r="5" fill={TEAL_5} />
        </>
      );
    case "Business":
      return (
        <>
          <rect x="34" y="110" width="30" height="34" fill={MINT_3} />
          <rect x="72" y="88" width="30" height="56" fill={TEAL_5} />
          <rect x="110" y="66" width="30" height="78" fill={TEAL_7} />
          <rect x="148" y="44" width="30" height="100" fill={BRASS} />
          <path d="M40 96l32-24 34-20 40-26" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 144h172" stroke={INK} strokeWidth="4" />
        </>
      );
    case "Law":
      return (
        <>
          <path d="M108 34v104" stroke={TEAL_7} strokeWidth="8" strokeLinecap="round" />
          <path d="M56 56h104" stroke={TEAL_7} strokeWidth="8" strokeLinecap="round" />
          <path d="M56 56l-18 34h36z" fill={MINT_3} />
          <path d="M160 56l-18 34h36z" fill={BRASS} />
          <rect x="76" y="138" width="64" height="10" rx="4" fill={TEAL_5} />
        </>
      );
    case "Science":
      return (
        <>
          <path d="M92 38h32v34l30 56a14 14 0 01-12 21H74a14 14 0 01-12-21l30-56z" fill={MINT_3} />
          <path d="M78 104h60l16 30H62z" fill={TEAL_7} />
          <circle cx="96" cy="120" r="5" fill={MINT} />
          <circle cx="120" cy="126" r="4" fill={BRASS} />
          <rect x="88" y="30" width="40" height="9" rx="4" fill={TEAL_5} />
        </>
      );
    case "Education & Teaching":
      return (
        <>
          <path d="M108 40l72 30-72 30-72-30z" fill={TEAL_7} />
          <path d="M108 106l44-18v30c0 10-20 18-44 18s-44-8-44-18V88z" fill={TEAL_5} />
          <path d="M172 74v34" stroke={BRASS} strokeWidth="5" strokeLinecap="round" />
          <circle cx="172" cy="114" r="7" fill={BRASS} />
        </>
      );
    case "Hotel Management":
      return (
        <>
          <rect x="42" y="52" width="60" height="92" fill={TEAL_7} />
          <rect x="110" y="76" width="56" height="68" fill={TEAL_5} />
          {[62, 82].map((x) => [66, 90, 114].map((y) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="14" height="14" fill={MINT} />
          )))}
          {[124, 146].map((x) => [92, 116].map((y) => (
            <rect key={`b${x}-${y}`} x={x} y={y} width="14" height="14" fill={MINT_3} />
          )))}
          <path d="M56 40h32l-16-16z" fill={BRASS} />
          <path d="M28 144h160" stroke={INK} strokeWidth="4" />
        </>
      );
    case "Security":
      return (
        <>
          <path d="M108 32l52 20v40c0 32-22 52-52 60-30-8-52-28-52-60V52z" fill={TEAL_7} />
          <path d="M88 92l14 14 30-30" stroke={MINT_3} strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M108 32l52 20v10l-52-18-52 18V52z" fill={BRASS} />
        </>
      );
    default:
      return (
        <>
          <circle cx="108" cy="90" r="42" fill={TEAL_7} />
          <path d="M86 90l16 16 30-32" stroke={MINT_3} strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      );
  }
}

export default function FieldArt({
  field,
  className = "",
}: {
  field?: Field | string;
  className?: string;
}) {
  const key = field ?? "";
  const ground = GROUND[key] ?? MINT;
  return (
    <svg
      viewBox="0 0 216 160"
      className={className}
      role="img"
      aria-label={field ? `${field} illustration` : "Course illustration"}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="216" height="160" fill={ground} />
      <Scene field={key} />
    </svg>
  );
}
