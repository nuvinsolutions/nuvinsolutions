/** Single source of truth for motion. Never hard-code durations in components. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  micro: 0.2, // 180–250ms
  card: 0.35, // 300–400ms
  reveal: 0.6, // 500–700ms
  hero: 0.9, // 700–1100ms
} as const;

export const STAGGER = 0.1; // 80–120ms
export const DISTANCE = { mobile: 20, desktop: 28, max: 35 } as const;
export const VIEWPORT = { once: true, margin: "-10% 0px" } as const;
