import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "secondary" | "secondaryOnDark";
type Size = "md" | "sm";

const variants: Record<Variant, string> = {
  primary: "bg-royal text-white hover:bg-[#1a43bb]",
  // Orange buttons use NAVY text (5.4:1). White on orange fails contrast.
  accent: "bg-orange text-navy hover:bg-[#ff7d42]",
  secondary: "border border-navy text-navy hover:bg-ice",
  secondaryOnDark: "border border-white/40 text-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[0.9375rem]",
  sm: "h-10 px-5 text-sm",
};

type Common = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps =
  | (Common & { href: string; external?: boolean; type?: never; disabled?: never; onClick?: never })
  | (Common & { href?: undefined; external?: never; type?: "button" | "submit"; disabled?: boolean; onClick?: () => void });

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", arrow = true, className, children } = props;
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold whitespace-nowrap",
    "transition-colors duration-200 ease-nuvin disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-200 ease-nuvin group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (props.href !== undefined) {
    if (props.external) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} disabled={props.disabled} onClick={props.onClick} className={classes}>
      {content}
    </button>
  );
}
