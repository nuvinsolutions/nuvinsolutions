import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { WorkGrid } from "@/components/work/WorkGrid";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Work | Nuvin Solutions",
  description: "Explore websites, SaaS products and digital experiences built by Nuvin Solutions.",
};

export default function WorkPage() {
  return (
    <>
      <section aria-labelledby="work-page-title" className="hero-tint relative overflow-hidden">
        <Container className="py-16 md:py-20 lg:py-24">
          <Reveal immediate className="max-w-5xl">
            <p className="text-label mb-6 flex w-fit max-w-full items-center gap-3 rounded-full border border-sky/35 bg-ice px-4 py-2 text-navy shadow-sm md:text-[0.7rem]">
              <span aria-hidden className="size-2 shrink-0 rounded-full bg-royal ring-4 ring-royal/10" />
              SELECTED PROJECTS
            </p>
            <h1 id="work-page-title" className="hero-title max-w-[18ch]">
              Digital Work Built Around <span className="text-royal">Real Goals</span>
            </h1>
            <p className="text-lg mt-6 max-w-[62ch] text-slate">
              Websites and digital products shaped around the people who use them and the businesses behind them.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary">Start a Project</Button>
              <Button href="/services" variant="secondary" arrow={false}>Explore Services</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="work-grid-title" className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">OUR WORK</p>
            <h2 id="work-grid-title" className="text-h2 max-w-[18ch]">
              Built for purpose. <span className="text-royal">Designed for people.</span>
            </h2>
          </Reveal>

          <WorkGrid />
        </Container>
      </section>

      <section aria-labelledby="work-cta-title" className="bg-[#F4F6F9] py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-[linear-gradient(120deg,#0B1F3A_0%,#123D75_55%,#1F4FD8_100%)] px-6 py-12 text-center text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <div aria-hidden className="pointer-events-none absolute -right-32 -top-48 -z-10 size-[30rem] rounded-full bg-sky/20 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-64 -left-24 -z-10 size-[24rem] rounded-full bg-royal/35 blur-3xl" />
              <div className="relative mx-auto max-w-4xl">
                <p className="mb-5 font-ui text-[0.6875rem] font-semibold tracking-[0.2em] text-white/85 sm:text-xs">YOUR PROJECT COULD BE NEXT</p>
                <h2 id="work-cta-title" className="font-display text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  Let’s build something that works.
                </h2>
                <p className="text-lg mx-auto mt-5 max-w-[58ch] text-white/85">
                  Tell us what you need, and we’ll help shape a practical plan around your goals.
                </p>
                <Link href="/contact" className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-[10px] border border-white bg-white px-6 text-[0.9375rem] font-semibold text-navy transition-colors duration-200 hover:bg-[#EAF2FF]">
                  Discuss Your Project
                  <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}


