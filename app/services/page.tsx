import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Code2, Globe2, Megaphone, Plus, Share2 } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Services | Web Development, SaaS, Digital Marketing & Social Media | Nuvin Solutions",
  description:
    "Web development, SaaS development, digital marketing and social media management from one agency. Explore Nuvin Solutions’ services and grow your business.",
};

const services = [
  {
    slug: "web-development",
    icon: Globe2,
    title: "Web Development",
    description: "Fast, SEO-ready websites that convert visitors into clients.",
    points: ["Business & corporate websites", "E-commerce stores", "Landing pages & redesigns"],
  },
  {
    slug: "saas-development",
    icon: Code2,
    title: "SaaS Development",
    description: "Scalable software products, from idea to launch.",
    points: ["MVP development", "Dashboards & admin panels", "Authentication, payments & APIs"],
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven campaigns that bring qualified leads.",
    points: ["SEO & content marketing", "Google & Meta ads", "Email marketing & analytics"],
  },
  {
    slug: "social-media-management",
    icon: Share2,
    title: "Social Media Management",
    description: "Consistent, on-brand presence across your platforms.",
    points: ["Content planning & post design", "Scheduling & community management", "Monthly performance reports"],
  },
];

const reasons = [
  { title: "One team, one workflow", text: "Build, launch and promote without juggling agencies." },
  { title: "SEO built in", text: "Every site we build is search-ready from day one." },
  { title: "Transparent communication", text: "Regular updates, clear timelines, no surprises." },
  { title: "Built for growth", text: "Solutions that scale as your business does." },
];

const process = [
  { title: "Discover", text: "We learn about your goals, audience and what success needs to look like." },
  { title: "Plan", text: "We agree on the scope, priorities and a clear route forward." },
  { title: "Build", text: "We bring the plan to life and keep you informed as the work takes shape." },
  { title: "Launch & Grow", text: "We prepare your launch and help you take the next step with confidence." },
];

const bundles = [
  { title: "Launch Package", combination: ["Website", "SEO setup"], description: "A strong, search-ready foundation for your next launch." },
  { title: "Growth Package", combination: ["Website", "Digital Marketing", "Social Media"], description: "A connected presence that helps more of the right people find you." },
  { title: "Product Package", combination: ["SaaS build", "Marketing launch"], description: "Bring your software product to market with a clear launch plan." },
];

const faqs = [
  {
    question: "Which service should I start with?",
    answer: "Start with the goal you need to reach. If you need a stronger online presence, a website may be the first step. If the product is ready but needs more visibility, SEO or digital marketing may fit better. We can help you decide after learning about your business.",
  },
  {
    question: "Can I hire Nuvin Solutions for just one service?",
    answer: "Yes. You can work with us on a single service, such as web development, SaaS development, digital marketing or social media management. We can also connect services when your goals call for a broader solution.",
  },
  {
    question: "How long does a website or SaaS project take?",
    answer: "Timelines depend on the project scope, features, content and integrations. Once we understand what you need, we will outline a realistic schedule before work begins.",
  },
  {
    question: "Do you offer monthly social media packages?",
    answer: "Social media management can be arranged as an ongoing monthly engagement. The scope can include content planning, post design, scheduling, community management and performance reporting.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes. We can discuss post-launch support based on your website or product, including updates, maintenance and improvements as your needs change.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <section aria-labelledby="services-hero-title" className="hero-tint relative overflow-hidden">
        <Container className="py-16 md:py-20 lg:py-24">
          <Reveal immediate className="max-w-5xl">
            <p className="text-label mb-6 flex w-fit max-w-full items-center gap-3 rounded-full border border-sky/35 bg-ice px-4 py-2 text-navy shadow-sm md:text-[0.7rem]">
              <span aria-hidden className="size-2 shrink-0 rounded-full bg-royal ring-4 ring-royal/10" />
              SERVICES THAT WORK TOGETHER
            </p>
            <h1 id="services-hero-title" className="hero-title max-w-[20ch]">
              Digital Services That Help Your Business <span className="text-royal">Grow</span>
            </h1>
            <p className="text-lg mt-6 max-w-[62ch] text-slate">
              From building your website to marketing it, Nuvin Solutions handles everything you need to launch, scale and stay visible online.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary">Get a Free Quote</Button>
              <Button href="/work" variant="secondary" arrow={false}>See Our Work</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="services-grid-title" className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">WHAT WE OFFER</p>
            <h2 id="services-grid-title" className="text-h2">The right expertise for your next step.</h2>
          </Reveal>

          <div className="mt-9 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={index * 0.06} className="h-full">
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-[#D3DAE5] bg-white p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-royal hover:shadow-[0_20px_48px_-34px_rgba(31,79,216,0.3)] sm:p-8">
                    <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-transparent transition-colors duration-300 group-hover:bg-royal" />
                    <span className="grid size-14 place-items-center rounded-2xl bg-royal text-white shadow-[0_8px_20px_-12px_rgba(31,79,216,0.75)] transition-transform duration-300 group-hover:rotate-[-4deg]">
                      <Icon aria-hidden className="size-6" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">{service.title}</h3>
                    <p className="mt-2 max-w-[48ch] text-[0.9375rem] leading-relaxed text-slate">{service.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate">
                          <BadgeCheck aria-hidden className="mt-1 size-4 shrink-0 text-royal" strokeWidth={1.8} />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/services/${service.slug}`} className="group/link mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-royal">
                      Learn more <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section aria-labelledby="why-title" className="bg-[#F4F6F9] py-16 md:py-20 lg:py-24">
        <Container className="grid gap-9 lg:grid-cols-12 lg:items-start lg:gap-14">
          <Reveal className="lg:col-span-4">
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">WHY NUVIN</p>
            <h2 id="why-title" className="text-h2 max-w-[14ch]">Why Businesses Choose Nuvin Solutions</h2>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.06} className="h-full">
                <article className="h-full rounded-2xl border border-[#E0E6EF] bg-white p-5 sm:p-6">
                  <p className="font-ui text-xs font-semibold tracking-[0.12em] text-royal">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-navy">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate">{reason.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="service-process-title" className="relative isolate overflow-hidden bg-navy py-16 text-white md:py-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-48 -z-10 size-[34rem] rounded-full bg-royal/20 blur-3xl" />
        <Container className="relative">
          <Reveal className="max-w-3xl">
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-sky md:text-sm">A CLEAR PATH FORWARD</p>
            <h2 id="service-process-title" className="text-h2 max-w-[16ch] text-white">How We Work</h2>
            <p className="text-lead mt-5 max-w-[52ch] text-on-navy-muted">A shared process keeps the project focused, transparent and moving.</p>
          </Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-7">
            {process.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 0.07} className="h-full">
                <p aria-hidden className="font-display text-5xl leading-none font-semibold tracking-[-0.06em] text-sky/55 md:text-6xl">0{index + 1}</p>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">{step.title}</h3>
                <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-on-navy-muted md:text-[0.9375rem]">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="bundles-title" className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">SERVICES, CONNECTED</p>
            <h2 id="bundles-title" className="text-h2">Better Together</h2>
            <p className="text-lg mt-5 max-w-[54ch]">Bring the right services together around one business goal. Every package is scoped to your project no public price list, no one-size-fits-all plan.</p>
          </Reveal>
          <div className="mt-9 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
            {bundles.map((bundle, index) => (
              <Reveal key={bundle.title} delay={index * 0.07} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-[#D9E0EA] bg-white p-6 sm:p-7">
                  <p className="font-ui text-[0.6875rem] font-semibold tracking-[0.15em] text-royal">0{index + 1} / SERVICE BUNDLE</p>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">{bundle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate">{bundle.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {bundle.combination.map((item) => (
                      <li key={item} className="rounded-full border border-[#D6E3F8] bg-[#F2F7FF] px-3 py-1.5 text-xs font-medium text-[#1747A8]">{item}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-7 text-sm font-semibold text-royal">
                    Request a quote <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="services-faq-title" className="bg-[#F4F6F9] py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">ANSWERS TO YOUR QUESTIONS</p>
            <h2 id="services-faq-title" className="text-h2">Frequently Asked Questions</h2>
          </Reveal>
          <div className="mt-8 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04}>
                <details className="group h-full rounded-2xl border border-[#D9DEE7] bg-white px-5 py-4 sm:px-6 sm:py-5">
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

      <section aria-labelledby="service-cta-title" className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-[linear-gradient(120deg,#0B1F3A_0%,#123D75_55%,#1F4FD8_100%)] px-6 py-12 text-center text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <div aria-hidden className="pointer-events-none absolute -right-32 -top-48 -z-10 size-[30rem] rounded-full bg-sky/20 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-64 -left-24 -z-10 size-[24rem] rounded-full bg-royal/35 blur-3xl" />
              <div className="relative mx-auto max-w-4xl">
                <p className="mb-5 font-ui text-[0.6875rem] font-semibold tracking-[0.2em] text-white/85 sm:text-xs">LET’S FIND THE RIGHT NEXT STEP</p>
                <h2 id="service-cta-title" className="font-display text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Not Sure Which Service You Need?</h2>
                <p className="text-lead mx-auto mt-5 max-w-[58ch] text-white/85">Tell us about your business and we’ll recommend the right solution, free of charge.</p>
                <div className="mt-8">
                  <Button href="/contact" variant="secondary" className="border-white bg-white text-royal hover:bg-[#EAF2FF]">Book a Free Consultation</Button>
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
