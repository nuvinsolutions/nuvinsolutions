import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, ChevronRight, Plus } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { getServicePage, servicePages } from "@/data/service-pages";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(servicePages).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) notFound();

  const canonical = `/services/${service.slug}`;

  return {
    title: { absolute: service.title },
    description: service.metaDescription,
    keywords: [service.primaryKeyword],
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: service.title,
      description: service.metaDescription,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <section aria-labelledby="service-title" className="hero-tint relative overflow-hidden">
        <Container className="pb-14 pt-8 md:pb-20 md:pt-12 lg:pb-24 lg:pt-14">
          <Reveal immediate className="max-w-4xl">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate">
                <li>
                  <Link href="/" className="transition-colors hover:text-royal">Home</Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="size-4" /></li>
                <li>
                  <Link href="/services" className="transition-colors hover:text-royal">Services</Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="size-4" /></li>
                <li aria-current="page" className="font-medium text-navy">{service.title.replace(/\s*\|.*$/, "")}</li>
              </ol>
            </nav>

            <p className="text-label mt-8 flex w-fit max-w-full items-center gap-3 rounded-full border border-sky/35 bg-ice px-4 py-2 text-navy shadow-sm md:text-[0.7rem]">
              <span aria-hidden className="size-2 shrink-0 rounded-full bg-royal ring-4 ring-royal/10" />
              {service.primaryKeyword}
            </p>
            <h1 id="service-title" className="hero-title mt-6 max-w-[20ch] text-navy">
              {service.headline.before}{" "}
              <span className="text-royal">{service.headline.emphasis}</span>
            </h1>
            <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-slate">{service.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary">Discuss Your Project</Button>
              <Button href="/work" variant="secondary" arrow={false}>See Our Work</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="service-problem-title" className="bg-white py-16 md:py-20 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">THE CHALLENGE</p>
            <h2 id="service-problem-title" className="text-h2 max-w-[16ch]">
              {service.problemTitle.split(/(Costing|Product Idea|Code|Marketing|Right People|Social Presence|Consistent)/).map((part, index) =>
                part === "Costing" ||
                part === "Product Idea" ||
                part === "Code" ||
                part === "Marketing" ||
                part === "Right People" ||
                part === "Social Presence" ||
                part === "Consistent" ? (
                  <span key={index} className="text-royal">{part}</span>
                ) : (
                  <span key={index}>{part}</span>
                ),
              )}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="space-y-5 lg:col-span-7 lg:col-start-6">
            {service.problem.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate sm:text-lg">{paragraph}</p>
            ))}
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="service-included-title" className="bg-[#F4F6F9] py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">WHAT’S INCLUDED</p>
            <h2 id="service-included-title" className="text-h2">A complete service, <span className="text-royal">built around your needs.</span></h2>
            <p className="mt-5 max-w-[66ch] text-base leading-relaxed text-slate sm:text-lg">{service.includedLead}</p>
          </Reveal>

          <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {service.included.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 0.05} className="h-full">
                <article className="h-full rounded-2xl border border-line bg-white p-5 shadow-[0_10px_30px_-28px_rgba(11,31,58,0.35)] sm:p-6">
                  <BadgeCheck aria-hidden className="size-6 text-royal" strokeWidth={1.8} />
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="service-process-title" className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">HOW WE WORK</p>
            <h2 id="service-process-title" className="text-h2">A clear process, <span className="text-royal">from start to launch.</span></h2>
            <p className="mt-5 max-w-[66ch] text-base leading-relaxed text-slate sm:text-lg">{service.processLead}</p>
          </Reveal>

          <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 0.06} className="h-full">
                <article className="h-full rounded-2xl border border-line bg-white p-5 sm:p-6">
                  <p className="font-ui text-xs font-semibold tracking-[0.14em] text-royal">STEP 0{index + 1}</p>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-navy">{step.title}</h3>
                  <p className="mt-2 inline-flex rounded-full bg-ice px-3 py-1 text-xs font-semibold text-royal">{step.timeframe}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate">{step.detail}</p>
                </article>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="service-packages-title" className="bg-[#F4F6F9] py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">WAYS TO GET STARTED</p>
            <h2 id="service-packages-title" className="text-h2">A scope that fits <span className="text-royal">your stage.</span></h2>
            <p className="mt-5 max-w-[66ch] text-base leading-relaxed text-slate sm:text-lg">{service.packageLead}</p>
          </Reveal>

          <ul className="mt-9 grid gap-4 md:grid-cols-3 lg:mt-12">
            {service.packages.map((plan, index) => (
              <Reveal as="li" key={plan.name} delay={index * 0.06} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 sm:p-7">
                  <p className="font-ui text-xs font-semibold tracking-[0.14em] text-royal">0{index + 1} / STARTING POINT</p>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-navy">{plan.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{plan.description}</p>
                  <ul className="mt-5 space-y-3">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate">
                        <BadgeCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-royal" strokeWidth={1.8} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-7 text-sm font-semibold text-royal">
                    Request a tailored quote
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="service-faq-title" className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">ANSWERS TO YOUR QUESTIONS</p>
            <h2 id="service-faq-title" className="text-h2">Frequently asked questions</h2>
          </Reveal>
          <div className="mt-8 grid items-start gap-3 md:mt-10 md:grid-cols-2 md:gap-4">
            {service.faq.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04} className="w-full self-start">
                <details className="group rounded-2xl border border-line bg-white px-5 py-4 sm:px-6 sm:py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-base font-semibold leading-snug text-navy marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <Plus aria-hidden className="size-5 shrink-0 text-royal transition-transform duration-200 group-open:rotate-45" />
                  </summary>
                  <p className="mt-4 max-w-[60ch] pr-7 text-sm leading-relaxed text-slate sm:text-[0.9375rem]">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      </section>

      <section aria-labelledby="service-cta-title" className="bg-[#F4F6F9] py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-[linear-gradient(120deg,#0B1F3A_0%,#123D75_55%,#1F4FD8_100%)] px-6 py-12 text-center text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <div aria-hidden className="pointer-events-none absolute -right-32 -top-48 -z-10 size-[30rem] rounded-full bg-sky/20 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-64 -left-24 -z-10 size-[24rem] rounded-full bg-royal/35 blur-3xl" />
              <div className="relative mx-auto max-w-4xl">
                <p className="mb-5 font-ui text-[0.6875rem] font-semibold tracking-[0.2em] text-white/85 sm:text-xs">LET’S TALK ABOUT YOUR PROJECT</p>
                <h2 id="service-cta-title" className="font-display text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  Ready to take the next step?
                </h2>
                <p className="text-lead mx-auto mt-5 max-w-[58ch] text-white/85">
                  Tell us what you need, and we’ll help shape a practical plan around your goals.
                </p>
                <div className="mt-8">
                  <Button href="/contact" variant="secondaryOnDark" className="border-white bg-white text-navy hover:bg-[#EAF2FF]">Discuss Your Project</Button>
                </div>
                <p className="mt-5 text-sm text-white/65">A clear first conversation. No need to have every detail figured out.</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
