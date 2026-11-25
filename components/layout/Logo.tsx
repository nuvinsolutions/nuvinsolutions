import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The default logo is dark and should be placed on a light surface.
 * The wrapping link carries the accessible name, so the image alt is empty.
 */
export function Logo({ className, priority = false, src = "/brand/logo.png" }: { className?: string; priority?: boolean; src?: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={2172}
      height={724}
      priority={priority}
      className={cn("h-14 w-auto", className)}
    />
  );
}
