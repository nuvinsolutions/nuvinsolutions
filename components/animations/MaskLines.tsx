"use client";

import { m, useReducedMotion } from "motion/react";
import { DURATION, EASE, STAGGER } from "@/lib/motion";

/** Line-by-line masked headline reveal. Render inside an <h1>/<h2>. */
export function MaskLines({
  lines,
  lineClassName,
  delay = 0.15,
}: {
  lines: string[];
  /** Optional class per line index, e.g. { 2: "text-royal" } */
  lineClassName?: Record<number, string>;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.18em] -mb-[0.18em]">
          <m.span
            data-reveal
            className={`block ${lineClassName?.[i] ?? ""}`}
            initial={reduce ? false : { y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: reduce ? 0.15 : DURATION.hero, ease: EASE, delay: delay + i * STAGGER * 1.4 }}
          >
            {line}
          </m.span>
        </span>
      ))}
    </>
  );
}
