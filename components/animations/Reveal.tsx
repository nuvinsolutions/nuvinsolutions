"use client";

import { m, useReducedMotion } from "motion/react";
import { DISTANCE, DURATION, EASE, VIEWPORT } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Animate on mount (above-the-fold) instead of on scroll. */
  immediate?: boolean;
  as?: "div" | "p" | "li" | "section";
};

/** The one shared fade-and-rise. Sections must not invent their own entrance animations. */
export function Reveal({ children, delay = 0, className, immediate = false, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = m[as];
  const hidden = { opacity: 0, y: reduce ? 0 : DISTANCE.desktop };
  const shown = { opacity: 1, y: 0 };
  const transition = { duration: reduce ? 0.15 : DURATION.reveal, ease: EASE, delay };

  return (
    <Comp
      data-reveal
      className={className}
      initial={immediate ? false : hidden}
      transition={transition}
      {...(immediate ? { animate: shown } : { whileInView: shown, viewport: VIEWPORT })}
    >
      {children}
    </Comp>
  );
}
