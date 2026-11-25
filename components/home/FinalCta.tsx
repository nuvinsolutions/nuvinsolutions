import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { finalCta } from "@/data/home";
import { site } from "@/data/site";
import { realValue } from "@/lib/utils";

export function FinalCta() {
  const whatsappPhone = realValue(site.phone)?.replace(/\D/g, "");

  return (
    <section aria-labelledby="cta-title" className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-[linear-gradient(120deg,#0B1F3A_0%,#123D75_55%,#1F4FD8_100%)] px-6 py-12 text-center text-white shadow-[0_28px_70px_-42px_rgba(11,31,58,0.65)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div aria-hidden className="pointer-events-none absolute -right-32 -top-48 -z-10 size-[34rem] rounded-full bg-sky/20 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-64 -left-24 -z-10 size-[28rem] rounded-full bg-royal/35 blur-3xl" />

          <Reveal className="relative mx-auto max-w-4xl">
            <p className="mb-5 flex items-center justify-center gap-4 font-ui text-[0.6875rem] font-semibold tracking-[0.2em] text-white/90 sm:text-xs">
              <span aria-hidden className="h-px w-8 bg-sky" />
              {finalCta.eyebrow}
              <span aria-hidden className="h-px w-8 bg-sky" />
            </p>
            <h2 id="cta-title" className="font-display text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {finalCta.title.before}<br />
              <span className="text-sky">{finalCta.title.emphasis}</span>
            </h2>
            <p className="text-lg mx-auto mt-5 max-w-[58ch] text-white/85">{finalCta.text}</p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href={finalCta.cta.href}
                className="group inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-royal shadow-sm transition-colors hover:bg-[#EEF4FF]"
              >
                {finalCta.cta.label}
                <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              {whatsappPhone && (
                <a
                  href={`https://wa.me/${whatsappPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-white/45 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  WhatsApp us <ArrowUpRight aria-hidden className="size-4" />
                </a>
              )}
            </div>
            <p className="mt-5 text-xs font-medium tracking-wide text-white/65 sm:text-sm">
              A clear first conversation. No need to have every detail figured out.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

