"use client";

import { m } from "motion/react";
import { DURATION, EASE, VIEWPORT } from "@/lib/motion";

/** A rule that expands left to right when it enters the viewport. */
export function ExpandLine({ delay = 0, className = "bg-line" }: { delay?: number; className?: string }) {
  return (
    <m.div
      data-reveal
      aria-hidden
      className={`h-px w-full origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.reveal + 0.1, ease: EASE, delay }}
    />
  );
}
