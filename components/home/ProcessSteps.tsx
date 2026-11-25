import { Reveal } from "@/components/animations/Reveal";
import { workProcess } from "@/data/home";
import { STAGGER } from "@/lib/motion";

export function ProcessSteps() {
  return (
    <ol className="mt-12 grid gap-9 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-7">
      {workProcess.steps.map((step, index) => (
        <Reveal as="li" key={step.title} delay={index * STAGGER} className="flex h-full min-w-0 flex-col">
          <p aria-hidden className="font-display text-5xl leading-none font-semibold tracking-[-0.06em] text-sky/55 md:text-6xl">
            0{index + 1}
          </p>
          <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
            {step.title}
          </h3>
          <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-on-navy-muted md:text-[0.9375rem]">
            {step.text}
          </p>
          <div className="mt-auto pt-8">
            <p className="font-ui text-[0.625rem] font-semibold tracking-[0.16em] text-sky">YOU LEAVE WITH</p>
            <p className="mt-1 text-sm font-medium text-white">{step.output}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

