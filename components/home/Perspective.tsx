import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { perspective } from "@/data/home";

const journey = [
  {
    number: "01",
    title: "Attract",
    channels: "Search · Social · Ads",
    detail: "The right people notice you, with a promise that feels relevant.",
  },
  {
    number: "02",
    title: "Experience",
    channels: "Website · Product · Landing page",
    detail: "The page delivers on that promise and makes your value clear.",
  },
  {
    number: "03",
    title: "Enquire",
    channels: "Contact · Signup · Checkout",
    detail: "The next step is easy to understand and simple to take.",
  },
];

export function Perspective() {
  return (
    <section aria-labelledby="perspective-title" className="bg-white">
      <Container className="py-16 md:py-20 lg:py-24">
        <Reveal>
          <p className="mb-5 font-ui text-xs font-semibold tracking-[0.17em] text-royal md:text-sm">
            {perspective.eyebrow}
          </p>
          <h2 id="perspective-title" className="text-h2 max-w-[13ch]">
            A Partner<br /><span className="text-royal">Not a Vendor.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-4 max-w-5xl md:mt-5">
          
          <p className="text-lg mt-2 max-w-[66ch] text-slate">{perspective.copy}</p>
        </Reveal>

        <ol className="mt-10 grid gap-4 sm:grid-cols-3 md:mt-14 md:gap-5">
          {journey.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={index * 0.08}
              className="rounded-2xl bg-[#F6F8FC] p-6 md:p-7"
            >
              <p className="font-ui text-[0.6875rem] font-semibold tracking-[0.14em] text-royal">
                {step.number} <span className="ml-2 text-slate/70">{step.channels}</span>
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-navy md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-slate">{step.detail}</p>
            </Reveal>
          ))}
        </ol>


      </Container>
    </section>
  );
}




