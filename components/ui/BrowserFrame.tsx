import Image from "next/image";
import type { ProjectImage } from "@/lib/types";
import { cn } from "@/lib/utils";

/** CSS-built browser frame for project screenshots. Shows a neutral skeleton until a real image exists. */
export function BrowserFrame({ image, className, sizes, priority }: { image?: ProjectImage; className?: string; sizes?: string; priority?: boolean }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-line bg-white", className)}>
      <div className="flex h-8 items-center gap-1.5 bg-ice px-3" aria-hidden>
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
      </div>
      <div className="relative aspect-[16/10] w-full bg-ice">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={sizes ?? "(min-width: 1024px) 60vw, 100vw"}
            priority={priority}
            className="h-full w-full object-cover object-top transition-transform duration-[400ms] ease-nuvin group-hover:scale-[1.03]"
          />
        ) : (
          <div aria-hidden className="absolute inset-0 grid place-items-center p-8">
            <div className="w-full max-w-xs space-y-3">
              <div className="h-3 w-2/3 rounded-full bg-sky/40" />
              <div className="h-3 w-full rounded-full bg-line" />
              <div className="h-3 w-5/6 rounded-full bg-line" />
              <div className="mt-6 h-8 w-28 rounded-[10px] bg-royal/25" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

