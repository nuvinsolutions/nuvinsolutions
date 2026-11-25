import type { GraphicKind } from "@/data/home";

/** Small monochrome line graphics for the capability cards (navy/royal strokes, 120×80). */
export function CapabilityGraphic({ kind }: { kind: GraphicKind }) {
  return (
    <svg viewBox="0 0 120 80" aria-hidden className="h-16 w-24 shrink-0 sm:h-20 sm:w-[7.5rem]" fill="none" strokeWidth="1.5">
      {kind === "web" && (
        <>
          <rect x="6" y="8" width="108" height="64" rx="8" className="stroke-navy" />
          <path d="M6 24h108" className="stroke-navy" />
          <circle cx="16" cy="16" r="2" className="fill-royal stroke-none" />
          <circle cx="24" cy="16" r="2" className="fill-sky stroke-none" />
          <rect x="16" y="34" width="46" height="8" rx="4" className="fill-orange stroke-none" />
          <path d="M16 52h70M16 60h52" className="stroke-sky" strokeLinecap="round" />
          <rect x="74" y="34" width="30" height="14" rx="3" className="stroke-royal" />
        </>
      )}
      {kind === "saas" && (
        <>
          <rect x="6" y="6" width="108" height="68" rx="8" className="stroke-navy" />
          <path d="M34 6v68" className="stroke-navy" />
          <path d="M14 20h12M14 30h12M14 40h12" className="stroke-sky" strokeLinecap="round" />
          {[18, 30, 22, 38].map((h, i) => (
            <rect key={i} x={44 + i * 17} y={64 - h} width="11" height={h} rx="2.5" className={i === 3 ? "fill-orange stroke-none" : "stroke-royal"} />
          ))}
          <path d="M44 20h40" className="stroke-navy" strokeLinecap="round" />
        </>
      )}
      {kind === "marketing" && (
        <>
          {[10, 20, 30].map((r) => (
            <circle key={r} cx="40" cy="40" r={r} className={r === 10 ? "stroke-royal" : "stroke-sky"} />
          ))}
          <circle cx="40" cy="40" r="3" className="fill-orange stroke-none" />
          {[16, 28, 42, 58].map((h, i) => (
            <rect key={i} x={76 + i * 10} y={72 - h} width="7" height={h} rx="2" className={i === 3 ? "fill-orange stroke-none" : "stroke-navy"} />
          ))}
        </>
      )}
      {kind === "social" && (
        <>
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={10 + (i % 2) * 52}
              y={8 + Math.floor(i / 2) * 34}
              width="46"
              height="28"
              rx="6"
              className={i === 1 ? "fill-orange stroke-none" : i === 2 ? "stroke-sky" : "stroke-navy"}
            />
          ))}
          <path d="M18 22l8-6 8 6M72 16l12 8" className="stroke-sky" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}
