"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Code2, Globe2, Megaphone, Share2 } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { capabilities } from "@/data/home";
import { STAGGER } from "@/lib/motion";

const serviceIcons = {
  web: Globe2,
  saas: Code2,
  marketing: Megaphone,
  social: Share2,
};

export function Capabilities() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section aria-labelledby="capabilities-title" className="bg-white pt-10 pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24">
      <Container>
        <Reveal>
          <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">
            WHAT WE BRING TOGETHER
          </p>
          <h2 id="capabilities-title" className="text-h2">
            <span className="text-royal">Digital expertise</span>
            <br />
            for your next step.
          </h2>
          <p className="text-lg mt-5 max-w-[48ch] text-slate">
            Explore the services that help your business move forward.
          </p>
        </Reveal>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-10 md:gap-6">
          {capabilities.items.map((capability, index) => {
            const Icon = serviceIcons[capability.graphic];
            const isSelected = selected === capability.slug;

            return (
              <Reveal as="li" key={capability.slug} delay={index * STAGGER} className="h-full">
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border bg-white p-6 transition-all duration-300 sm:p-7 md:p-8 ${
                    isSelected
                      ? "border-royal shadow-[0_18px_48px_-30px_rgba(31,79,216,0.2)]"
                      : "border-[#D3DAE5] hover:border-royal focus-within:border-royal hover:shadow-[0_18px_48px_-34px_rgba(31,79,216,0.3)]"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-1 rounded-t-[1.35rem] transition-colors duration-300 ${
                      isSelected ? "bg-royal" : "bg-transparent group-hover:bg-royal group-focus-within:bg-royal"
                    }`}
                  />

                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelected(isSelected ? null : capability.slug)}
                    className="w-full text-left focus-visible:outline-offset-4"
                  >
                    <span className="mb-6 inline-grid size-14 rotate-0 place-items-center rounded-xl bg-royal text-white shadow-[0_8px_20px_-12px_rgba(31,79,216,0.75)] transition-transform duration-300 group-hover:rotate-[-4deg]">
                      <Icon aria-hidden className="size-6" strokeWidth={1.8} />
                    </span>
                    <span className="block font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
                      {capability.title}
                    </span>
                    <span className="mt-3 block max-w-[48ch] text-[0.9375rem] leading-relaxed text-slate">
                      {capability.description}
                    </span>
                  </button>

                  <ul aria-label={`${capability.title} services`} className="mt-6 flex flex-wrap gap-2">
                    {capability.services.map((service) => (
                      <li
                        key={service}
                        className="rounded-full border border-[#CFE0F8] bg-[#F4F8FF] px-3 py-1.5 text-xs font-medium leading-snug text-[#1747A8] sm:text-[0.8125rem]"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${capability.slug}`}
                    data-track="capability_open"
                    className="group/link mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-royal"
                  >
                    Learn more
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-200 ease-nuvin group-hover/link:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}








