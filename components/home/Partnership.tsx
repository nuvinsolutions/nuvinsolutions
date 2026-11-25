"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { m } from "motion/react";
import { Plus } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";
import { partnership } from "@/data/home";
import { DURATION, EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Partnership() {
  const [open, setOpen] = useState(0);
  const uid = useId();

  return (
    <section aria-labelledby="partner-title" className="py-16 md:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 id="partner-title" className="text-h2">
              {partnership.title}
            </h2>
            <p className="text-lead mt-5 max-w-[42ch]">{partnership.lead}</p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <ul className="">
            {partnership.pairings.map((p, i) => {
              const isOpen = open === i;
              const panelId = `${uid}-panel-${i}`;
              const buttonId = `${uid}-button-${i}`;
              return (
                <Reveal as="li" key={p.a} delay={i * 0.1}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span>
                        <span className="block font-display text-[clamp(1.375rem,1.1rem+1.2vw,2rem)] leading-tight font-semibold tracking-tight text-navy">
                          {p.a} <span className="text-orange">+</span> {p.b}
                        </span>
                        <span className="mt-1 block text-[0.9375rem] text-slate">{p.outcome}</span>
                      </span>
                      <span
                        aria-hidden
                        className={cn(
                          "mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
                          isOpen ? "border-orange bg-orange text-navy" : "border-line text-navy",
                        )}
                      >
                        <Plus className={cn("size-4 transition-transform duration-[350ms] ease-nuvin", isOpen && "rotate-45")} />
                      </span>
                    </button>
                  </h3>

                  <m.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={false}
                    animate={
                      isOpen
                        ? { height: "auto", opacity: 1, visibility: "visible" }
                        : { height: 0, opacity: 0, transitionEnd: { visibility: "hidden" } }
                    }
                    transition={{ duration: DURATION.card, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="pb-7">
                      <p className="max-w-[56ch] text-[0.9375rem]">{p.detail}</p>
                      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                        {p.links.map((l) => (
                          <li key={l.href}>
                            <Link href={l.href} className="text-[0.9375rem] font-semibold text-royal underline-offset-4 hover:underline">
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </m.div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

