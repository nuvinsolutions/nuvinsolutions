"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { ClipReveal } from "@/components/animations/ClipReveal";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { categoryLabel, projects } from "@/data/projects";
import { selectedWork } from "@/data/home";

export function SelectedWork() {
  const items = projects.filter((project) => project.featured && !project.isPlaceholder && project.liveUrl).slice(0, 3);
  const [activeProject, setActiveProject] = useState<(typeof items)[number] | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogTitleId = useId();

  const closeModal = useCallback(() => {
    setActiveProject(null);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject, closeModal]);

  if (items.length === 0) return null;

  return (
    <section aria-labelledby="work-title" className="bg-[#F4F6F9] py-16 md:py-20 lg:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="mb-4 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">SELECTED WORK</p>
          <h2 id="work-title" className="text-h2">Let&rsquo;s do something<br /><span className="text-royal">better together</span></h2>
          <p className="text-lg mt-4">{selectedWork.lead}</p>
        </Reveal>

        <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {items.map((project, index) => {
            const image = project.images[0];
            if (!image || !project.liveUrl) return null;

            return (
              <Reveal as="li" key={project.slug} delay={index * 0.08} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_36px_-30px_rgba(11,31,58,0.38)] transition-shadow duration-300 hover:shadow-[0_20px_48px_-30px_rgba(11,31,58,0.28)]">
                  <ClipReveal>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#E8EDF4]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-500 ease-nuvin group-hover:scale-[1.025]"
                      />
                    </div>
                  </ClipReveal>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-royal">{categoryLabel[project.category]}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-navy sm:text-2xl">
                      {project.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{project.summary}</p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <button
                        ref={(node) => {
                          if (node) triggerRef.current = node;
                        }}
                        type="button"
                        onClick={(event) => {
                          triggerRef.current = event.currentTarget;
                          setActiveProject(project);
                        }}
                        className="inline-flex items-center gap-2 rounded-[10px] bg-royal px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1a43bb] focus-visible:outline-offset-4"
                      >
                        View case study
                        <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.name} live website (opens in a new tab)`}
                        className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#F2F6FC] text-navy transition-colors hover:bg-ice hover:text-royal"
                      >
                        <ArrowUpRight aria-hidden className="size-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={0.2} className="mt-8 text-center">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-royal underline-offset-4 hover:underline">
            Explore all seven projects <ArrowRight aria-hidden className="size-4" />
          </Link>
        </Reveal>
      </Container>

      {activeProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/65 p-4 backdrop-blur-sm sm:p-6"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            className="relative max-h-[96svh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              aria-label="Close case study"
              className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full bg-white/95 text-navy shadow-md transition-colors hover:bg-white hover:text-royal"
            >
              <X aria-hidden className="size-5" />
            </button>

            {activeProject.images[0] && (
              <div className="relative aspect-[16/7] overflow-hidden bg-[#E8EDF4]">
                <Image
                  src={activeProject.images[0].src}
                  alt={activeProject.images[0].alt}
                  fill
                  sizes="(min-width:768px) 768px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            )}

            <div className="p-6 sm:p-9 md:p-10">
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-royal">{categoryLabel[activeProject.category]}</p>
              <h2 id={dialogTitleId} className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                {activeProject.name}
              </h2>
              <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-slate sm:text-lg">
                {activeProject.caseStudy?.intro ?? activeProject.summary}
              </p>

              {activeProject.caseStudy && (
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <section className="rounded-2xl bg-[#F4F6F9] p-5 sm:p-6">
                    <p className="font-ui text-[0.6875rem] font-semibold tracking-[0.14em] text-royal">THE CHALLENGE</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate sm:text-[0.9375rem]">{activeProject.caseStudy.challenge}</p>
                  </section>
                  <section className="rounded-2xl bg-[#F4F6F9] p-5 sm:p-6">
                    <p className="font-ui text-[0.6875rem] font-semibold tracking-[0.14em] text-royal">WHAT WE BUILT</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate sm:text-[0.9375rem]">{activeProject.caseStudy.solution}</p>
                  </section>
                </div>
              )}

              {activeProject.caseStudy?.highlights && (
                <div className="mt-7">
                  <h3 className="font-display text-lg font-semibold text-navy">What customers can do</h3>
                  <ul className="mt-3 grid gap-x-5 gap-y-2 sm:grid-cols-3">
                    {activeProject.caseStudy.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2 text-sm leading-relaxed text-slate">
                        <span aria-hidden className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-royal" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-[10px] bg-royal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a43bb]"
                >
                  Visit live website <ArrowUpRight aria-hidden className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}





