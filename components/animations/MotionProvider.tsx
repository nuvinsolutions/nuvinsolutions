"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

/** Loads only the light animation feature set and honours the OS reduced-motion setting. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
