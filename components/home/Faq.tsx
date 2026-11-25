import { Plus } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";

const questions = [
  {
    question: "What web development services does Nuvin Solutions offer?",
    answer: "Nuvin Solutions builds business and custom websites, e-commerce stores, landing pages, and website redesigns tailored to your goals and audience.",
  },
  {
    question: "Does Nuvin Solutions build SaaS products and web applications?",
    answer: "Yes. SaaS development services include custom web applications, admin dashboards, subscription platforms, and API integrations.",
  },
  {
    question: "What digital marketing services does Nuvin provide?",
    answer: "Our digital marketing services include search engine optimization (SEO), Google Ads, Meta Ads, and paid advertising campaign management.",
  },
  {
    question: "Do you provide social media management?",
    answer: "Yes. Social media services include strategy, content planning, creative post design, account management, and audience engagement.",
  },
  {
    question: "Can I combine website development with digital marketing?",
    answer: "Yes. Website development, SEO, paid advertising, and social media can be planned together so the site and campaigns support the same business goals.",
  },
  {
    question: "How much does website development or digital marketing cost?",
    answer: "Pricing depends on the project scope, features, content, integrations, or campaign requirements. We review your needs first, then provide a tailored scope and proposal.",
  },
  {
    question: "How long does it take to build a website or SaaS product?",
    answer: "The timeline depends on the requirements, features, content, and review process. Once the scope is clear, we outline a realistic project timeline.",
  },
  {
    question: "Does Nuvin Solutions work with businesses outside Lahore?",
    answer: "Yes. Nuvin Solutions is based in Lahore and works remotely with businesses in other cities and locations as well.",
  },
];

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-[#F4F6F9] py-16 md:py-20 lg:py-24">
      <Container>
        <Reveal className="max-w-4xl">
          <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">
            ANSWERS TO YOUR QUESTIONS
          </p>
          <h2 id="faq-title" className="text-h2 max-w-[22ch]">
            Good questions.<br /><span className="text-royal">Clear answers.</span>
          </h2>
          <p className="text-lg mt-5 max-w-[60ch] text-slate">
            Learn about our web development, SaaS, and digital marketing services, project timelines, and pricing.
          </p>
        </Reveal>

        <ul className="mt-8 grid items-start gap-3 md:mt-10 md:grid-cols-2 md:gap-4">
          {questions.map((item, index) => (
            <Reveal as="li" key={item.question} delay={index * 0.04}>
              <details className="group rounded-2xl border border-[#D9DEE7] bg-white px-5 py-4 sm:px-7 sm:py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-base font-semibold leading-snug text-navy marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <Plus aria-hidden className="size-5 shrink-0 text-royal transition-transform duration-200 group-open:rotate-45" />
                </summary>
                <p className="mt-4 max-w-[60ch] pr-7 text-sm leading-relaxed text-slate sm:text-[0.9375rem]">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
