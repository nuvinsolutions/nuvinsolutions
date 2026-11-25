import { Capabilities } from "@/components/home/Capabilities";
import { FinalCta } from "@/components/home/FinalCta";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Perspective } from "@/components/home/Perspective";
import { Process } from "@/components/home/Process";
import { SelectedWork } from "@/components/home/SelectedWork";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Perspective />
      <Capabilities />
      <SelectedWork />
      <Process />
      <Faq />
      <FinalCta />
    </>
  );
}


