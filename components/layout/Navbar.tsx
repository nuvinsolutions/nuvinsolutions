"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { m } from "motion/react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { mainNav, serviceLinks } from "@/data/navigation";
import { DURATION, EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // Menu is open only for the path it was opened on, so any route change closes it without an effect.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <m.header
        data-reveal
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: DURATION.hero * 0.8, ease: EASE }}
        className={cn(
          "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-[250ms] ease-nuvin",
          scrolled
            ? "border-[#E9EDF4] bg-white/95 shadow-[0_8px_30px_rgba(11,31,58,0.06)] backdrop-blur-xl"
            : "border-transparent bg-white/85 backdrop-blur-xl",
        )}
      >
        <Container
          className={cn("flex items-center justify-between gap-5 transition-[height] duration-[250ms] ease-nuvin", scrolled ? "h-[68px]" : "h-[78px]")}
        >
          <Link href="/" aria-label="Nuvin Solutions – Home" className="shrink-0">
            <Logo priority className="h-16 w-[160px] object-cover object-center sm:w-[192px]" />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5 rounded-full border border-[#E8EDF5] bg-[#F7F9FC] p-1">
              {mainNav.map((item, i) => (
                <m.li
                  key={item.href}
                  data-reveal
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: DURATION.card, ease: EASE, delay: 0.25 + i * 0.08 }}
                  className="group relative"
                >
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "relative flex items-center gap-1.5 rounded-full px-4 py-[0.65rem] text-[0.875rem] font-medium transition-[background-color,color,box-shadow] duration-200",
                      isActive(item.href)
                        ? "bg-white text-[#1F4FD8] shadow-[0_2px_8px_rgba(11,31,58,0.09)]"
                        : "text-slate hover:bg-white/75 hover:text-navy",
                    )}
                  >
                    {item.label}
                    {item.href === "/services" && <ChevronDown aria-hidden className="size-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />}
                  </Link>

                  {item.href === "/services" && (
                    <div className="invisible absolute top-full left-1/2 w-[22rem] -translate-x-1/2 pt-3 opacity-0 transition-[opacity,visibility] duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <ul className="rounded-2xl border border-[#E8EDF5] bg-white p-2.5 shadow-[0_18px_50px_rgba(11,31,58,0.14)]">
                        {serviceLinks.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className="block rounded-xl px-4 py-3 transition-colors hover:bg-[#F3F7FF]"
                            >
                              <span className="block text-sm font-semibold text-navy">{s.title}</span>
                              <span className="block text-[0.8125rem] text-slate">{s.blurb}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </m.li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <m.div
              data-reveal
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: DURATION.card, ease: EASE, delay: 0.7 }}
              className="hidden sm:block"
            >
              <Button href="/contact" size="sm" variant="primary" className="h-11 rounded-xl px-5 shadow-[0_6px_18px_rgba(31,79,216,0.2)] hover:shadow-[0_8px_24px_rgba(31,79,216,0.28)]">
                Let’s Talk
              </Button>
            </m.div>
            <button
              ref={menuButton}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpenAt(open ? null : pathname)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-[#E2E8F1] bg-white text-navy shadow-sm transition hover:border-[#1F4FD8]/30 hover:text-[#1F4FD8] lg:hidden"
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </Container>
      </m.header>
      {open && (
        <MobileMenu
          onClose={() => setOpenAt(null)}
          returnFocusTo={menuButton}
          headerHeight={scrolled ? 68 : 78}
        />
      )}
    </>
  );
}


