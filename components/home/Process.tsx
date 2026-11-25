import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { workProcess } from "@/data/home";

export function Process() {
  return (
    <section aria-labelledby="process-title" className="relative isolate overflow-hidden bg-navy py-16 text-white md:py-20 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-48 -z-10 size-[38rem] rounded-full bg-royal/20 blur-3xl" />
      <Container className="relative">
        <Reveal className="max-w-3xl">
          <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-sky md:text-sm">HOW WE WORK</p>
          <h2 id="process-title" className="text-h2 max-w-[17ch] !text-white">
            {workProcess.title.before}{" "}
            <span className="text-sky">{workProcess.title.emphasis}</span>
          </h2>
          <p className="text-lg mt-5 max-w-[54ch] text-on-navy-muted">{workProcess.lead}</p>
        </Reveal>
        <ProcessSteps />
      </Container>
    </section>
  );
}
