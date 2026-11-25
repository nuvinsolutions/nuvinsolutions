"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { mainNav, serviceLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MobileMenu({
  onClose,
  returnFocusTo,
  headerHeight,
}: {
  onClose: () => void;
  returnFocusTo: React.RefObject<HTMLButtonElement | null>;
  headerHeight: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const trigger = returnFocusTo.current;
    const focusables = () =>
      Array.from(root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
    focusables()[0]?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [onClose, returnFocusTo]);

  return (
    <>
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={onClose}
        className="fixed inset-x-0 bottom-0 z-[59] bg-navy/10"
        style={{ top: headerHeight }}
      />
      <div
        ref={ref}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed right-3 z-[60] flex w-[min(20rem,calc(100vw-0.75rem))] flex-col overflow-y-auto rounded-2xl border border-[#E8EDF5] bg-white px-4 py-5 shadow-[0_18px_50px_rgba(11,31,58,0.2)]"
        style={{ top: headerHeight + 6, maxHeight: `calc(100vh - ${headerHeight + 18}px)` }}
      >
        <nav aria-label="Mobile">
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                {item.href === "/services" ? (
                  <>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={cn(
                          "flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
                          isActive(item.href) ? "text-[#1F4FD8]" : "text-navy hover:bg-[#F4F7FC]",
                        )}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label={servicesOpen ? "Collapse services" : "Expand services"}
                        aria-expanded={servicesOpen}
                        aria-controls="mobile-service-links"
                        onClick={() => setServicesOpen((isOpen) => !isOpen)}
                        className="inline-flex size-9 items-center justify-center rounded-lg text-navy transition-colors hover:bg-[#F4F7FC]"
                      >
                        <ChevronDown aria-hidden className={cn("size-4 transition-transform", servicesOpen && "rotate-180")} />
                      </button>
                    </div>
                    {servicesOpen && (
                      <ul id="mobile-service-links" className="mb-2 ml-3 border-l border-[#E2E8F1] pl-3">
                        {serviceLinks.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services/${service.slug}`}
                              onClick={onClose}
                              className="block rounded-lg px-3 py-2 text-sm text-slate transition-colors hover:bg-[#F4F7FC] hover:text-[#1F4FD8]"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
                      isActive(item.href) ? "text-[#1F4FD8]" : "text-navy hover:bg-[#F4F7FC]",
                    )}
                  >
                    {item.href === "/work" ? "Portfolio" : item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Button href="/contact" variant="primary" className="mt-4 h-10 w-full rounded-xl shadow-[0_8px_24px_rgba(31,79,216,0.2)]">
          Let’s Talk
        </Button>
      </div>
    </>
  );
}


