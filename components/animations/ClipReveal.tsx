"use client";

import { m, useReducedMotion } from "motion/react";
import { DURATION, EASE, VIEWPORT } from "@/lib/motion";

/** Image-style clip reveal (top to bottom) for project previews. */
export function ClipReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <m.div
      data-reveal
      className={className}
      initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
      whileInView={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
      viewport={VIEWPORT}
      transition={{ duration: reduce ? 0.15 : DURATION.reveal + 0.1, ease: EASE, delay }}
    >
      {children}
    </m.div>
  );
}
