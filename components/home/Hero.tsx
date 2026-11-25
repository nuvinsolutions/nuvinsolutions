import Link from "next/link";
import { MaskLines } from "@/components/animations/MaskLines";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SystemMap } from "@/components/home/SystemMap";
import { capabilities, hero } from "@/data/home";

export function Hero() {
  return (
    <>
      <section aria-labelledby="hero-title" className="hero-tint relative">
        <Container className="grid items-center gap-8 py-8 md:h-[calc(100svh-72px)] md:grid-cols-12 md:gap-6 md:px-16 md:py-2 lg:h-[calc(100svh-72px)] lg:max-w-[1440px] lg:gap-10 lg:px-24 lg:py-8">
          <div className="min-w-0 md:col-span-7 lg:col-span-6">
            <Reveal immediate delay={0.05}>
              <p className="text-label -translate-y-1 flex w-fit max-w-full items-center gap-3 rounded-full border border-sky/35 bg-ice px-4 py-2 text-navy shadow-sm md:text-[0.7rem]">
                <span aria-hidden className="size-2 shrink-0 rounded-full bg-royal ring-4 ring-royal/10" />
                {hero.tagline}
              </p>
            </Reveal>

            <h1 id="hero-title" className="hero-title mt-6 max-w-full md:mt-3 lg:max-w-[12em]">
              <MaskLines lines={hero.lines} lineClassName={{ 2: "text-royal" }} />
            </h1>

            <Reveal immediate delay={0.75} className="hero-lead mt-8 md:mt-3 lg:mt-8">
              <p className="text-lead max-w-[56ch]">{hero.lead}</p>
            </Reveal>

            <Reveal immediate delay={0.95} className="mt-10 flex flex-col gap-3 sm:flex-row md:mt-4 md:gap-2 lg:mt-10 lg:gap-3">
              <Button href={hero.primaryCta.href} variant="primary" className="w-full sm:w-auto md:h-10 md:px-4 md:text-sm lg:h-12 lg:px-6 lg:text-[0.9375rem]">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" arrow={false} className="w-full sm:w-auto md:h-10 md:px-4 md:text-sm lg:h-12 lg:px-6 lg:text-[0.9375rem]">
                {hero.secondaryCta.label}
              </Button>
            </Reveal>
          </div>

          <div className="mx-auto hidden w-full max-w-[280px] md:col-span-5 md:block lg:col-span-6 lg:max-w-[560px]">
            <SystemMap />
          </div>
        </Container>
      </section>

      <nav aria-label="Our services" className="services-marquee bg-royal text-white">
        <div className="services-marquee-track flex w-max">
          {Array.from({ length: 8 }, (_, copyIndex) => (
            <ul
              key={copyIndex}
              aria-hidden={copyIndex > 0 || undefined}
              className="services-marquee-group flex shrink-0 items-center gap-10 pr-10"
            >
              {capabilities.items.map((service) => (
                <li key={service.slug} className="flex shrink-0 items-center gap-10">
                  <Link
                    href={`/services/${service.slug}`}
                    tabIndex={copyIndex > 0 ? -1 : undefined}
                    className="whitespace-nowrap py-5 font-ui text-sm font-semibold text-white transition-colors hover:text-ice"
                  >
                    {service.title}
                  </Link>
                  <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-white/55" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </nav>

    </>
  );
}





