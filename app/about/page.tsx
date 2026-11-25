import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BadgeDollarSign, CalendarDays, Check, Gauge, Goal, LayoutDashboard, MessageCircle, Target } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Nuvin Solutions",
  description:
    "Nuvin Solutions helps ambitious businesses launch faster, look sharper and grow smarter with web development, SaaS products and digital marketing.",
};

const principles = [
  {
    icon: MessageCircle,
    title: "Clarity",
    text: "Plain-language communication, always.",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    text: "We ship work we’d put our own name on.",
  },
  {
    icon: Gauge,
    title: "Speed with care",
    text: "Fast delivery without cutting corners.",
  },
  {
    icon: Target,
    title: "Results first",
    text: "Design and code that serve business goals, not just aesthetics.",
  },
];

const promises = ["Clear communication", "Clean code", "Measurable results"];

const remoteBenefits = [
  {
    icon: CalendarDays,
    title: "Flexible collaboration",
    text: "Async updates plus scheduled calls that fit your day.",
  },
  {
    icon: LayoutDashboard,
    title: "Transparent workflow",
    text: "Shared boards and full visibility from kickoff to launch.",
  },
  {
    icon: Goal,
    title: "Built around your goals",
    text: "We shape the scope around what your business needs most, so the work has a clear purpose from the start.",
  },
  {
    icon: BadgeDollarSign,
    title: "Fair pricing",
    text: "Low overheads mean more value for your budget.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-title" className="hero-tint relative overflow-hidden">
        <Container className="flex items-center py-16 md:py-20 lg:min-h-[590px] lg:py-24">
          <div className="max-w-5xl">
            <Reveal immediate>
              <p className="text-label mb-6 flex w-fit max-w-full items-center gap-3 rounded-full border border-sky/35 bg-ice px-4 py-2 text-navy shadow-sm md:text-[0.7rem]">
                <span aria-hidden className="size-2 shrink-0 rounded-full bg-royal ring-4 ring-royal/10" />
                ABOUT NUVIN SOLUTIONS
              </p>
              <h1 id="about-title" className="hero-title max-w-[18ch]">
                A Digital Agency Building Websites, SaaS Products &amp; <span className="text-royal">Growth</span>
              </h1>
              <p className="text-lg mt-6 max-w-[56ch] text-slate">
                Nuvin Solutions helps ambitious businesses launch faster, look sharper and grow smarter, with a team that’s easy to work with from anywhere.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="primary">Start a Project</Button>
                <Button href="/work" variant="secondary" arrow={false}>View Our Work</Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="who-we-are-title" className="relative isolate overflow-hidden bg-[#0B1F3A] text-white">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-48 -z-10 size-[34rem] rounded-full bg-[#1F4FD8]/25 blur-3xl" />
        <Container className="relative grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-24">
          <Reveal className="lg:col-span-6">
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-sky md:text-sm">WHO WE ARE</p>
            <h2 id="who-we-are-title" className="text-h2 max-w-[17ch] text-white">We Build <span className="text-sky">Digital Products</span> That Actually Perform</h2>
            <p className="mt-6 text-base leading-relaxed text-white/85">
              Nuvin Solutions is a digital agency specializing in web development, SaaS development and digital marketing. We started with a simple belief: most businesses don’t need more agencies, they need one reliable partner that can design, build and promote their product under one roof.
            </p>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              Today we work with startups, small businesses and growing brands to turn ideas into fast, scalable and search-friendly digital experiences. No bloated processes, no endless meetings. Clear communication, clean code and measurable results.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#12294A] p-6 sm:p-8">
              <div aria-hidden className="pointer-events-none absolute -right-20 -top-24 -z-10 size-64 rounded-full bg-[#1F4FD8]/30 blur-3xl" />
              <p className="font-ui text-[0.6875rem] font-semibold tracking-[0.17em] text-[#9BC1FF]">THE WAY WE WORK</p>
              <p className="mt-4 max-w-[18ch] font-display text-2xl leading-snug font-semibold tracking-tight text-white sm:text-3xl">Good work should feel clear at every step.</p>
              <ul className="mt-7 space-y-3">
                {promises.map((promise) => (
                  <li key={promise} className="flex items-center gap-3 rounded-xl bg-white/[0.055] px-4 py-3.5 text-sm font-medium text-white/90">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#1F4FD8]/30 text-[#9BC1FF]"><Check aria-hidden className="size-3.5" strokeWidth={2.5} /></span>
                    {promise}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="remote-title" className="bg-[#F4F6F9]">
        <Container className="grid gap-9 py-16 md:py-20 lg:grid-cols-12 lg:items-start lg:gap-12 lg:py-24">
          <Reveal className="lg:col-span-4 lg:pt-2">
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">WE ARE EVERYWHERE</p>
            <h2 id="remote-title" className="text-h2 max-w-[13ch]">Work With Us From <span className="text-royal">Anywhere</span></h2>
            <p className="text-lg mt-5 max-w-[36ch]">Our workflow is built for clients in any timezone.</p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:gap-4">
            {remoteBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={benefit.title} delay={index * 0.06} className="h-full">
                  <article className="h-full rounded-2xl border border-[#E0E6EF] bg-white p-5 sm:p-6">
                    <span className="grid size-11 place-items-center rounded-xl bg-[#EAF2FF] text-royal">
                      <Icon aria-hidden className="size-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-5 font-display text-lg leading-snug font-semibold tracking-tight text-navy">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate">{benefit.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section aria-labelledby="principles-title" className="bg-white">
        <Container className="py-16 md:py-20 lg:py-24">
          <Reveal className="max-w-3xl">
           
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">THE NUVIN STANDARD</p>
            <h2 id="principles-title" className="text-h2 max-w-[17ch]">What We Stand For</h2>
            <p className="text-lg mt-5 max-w-[55ch]">The principles behind every decision, detail and delivery.</p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.08} className="h-full">
                  <article className="h-full rounded-2xl border border-[#E2E7EF] bg-white p-6 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#B5C9F3] hover:shadow-[0_18px_38px_-28px_rgba(11,31,58,0.3)] sm:p-7">
                    <span className="grid size-12 place-items-center rounded-2xl bg-[#EAF2FF] text-royal">
                      <Icon aria-hidden className="size-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-6 font-display text-xl leading-snug font-semibold tracking-tight text-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate">{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section aria-labelledby="about-work-title" className="pb-16 pt-4 md:pb-20 lg:pb-24">
        <Container>
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-[linear-gradient(120deg,#0B1F3A_0%,#123D75_58%,#1F4FD8_100%)] px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14">
              <div aria-hidden className="pointer-events-none absolute -right-32 -top-40 -z-10 size-80 rounded-full bg-[#6FA8FF]/20 blur-3xl" />
              <div className="max-w-2xl">
                <p className="mb-4 font-ui text-[0.6875rem] font-semibold tracking-[0.18em] text-[#B8D3FF]">THOUGHTFUL BY DESIGN. BUILT FOR REAL BUSINESSES.</p>
                <h2 id="about-work-title" className="font-display text-2xl leading-tight font-bold tracking-tight text-white sm:text-3xl">See what connected thinking can look like.</h2>
                <p className="mt-3 max-w-[55ch] text-sm leading-6 text-white/75">Explore real projects shaped around the people who use them and the businesses behind them.</p>
              </div>
              <Link href="/work" className="group mt-7 inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-5 text-sm font-semibold text-royal transition-colors hover:bg-[#EAF2FF] lg:mt-0">
                View selected work <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
