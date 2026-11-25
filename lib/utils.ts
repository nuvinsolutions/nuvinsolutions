import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns a site-config value only if it is real.
 * `PLACEHOLDER:*` values are visible in development (so gaps are obvious)
 * and hidden in production (the prebuild guard also fails the build).
 */
export function realValue(value?: string): string | undefined {
  if (!value) return undefined;
  if (value.startsWith("PLACEHOLDER:")) {
    return process.env.NODE_ENV === "production" ? undefined : value;
  }
  return value;
}
