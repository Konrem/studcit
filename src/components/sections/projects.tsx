"use client";

import Image from "next/image";
import landingExtras from "@/app/content/landingExtras";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import SectionHeading from "../ui/sectionHeading";

export default function Projects() {
  const { projects, directionCards } = landingExtras;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const updateActiveIndex = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", updateActiveIndex);
    emblaApi.on("reInit", updateActiveIndex);
    updateActiveIndex();

    return () => {
      emblaApi.off("select", updateActiveIndex);
      emblaApi.off("reInit", updateActiveIndex);
    };
  }, [emblaApi]);

  return (
    <section
      className="container mx-auto mt-12 scroll-mt-24 px-4 md:mt-20"
      id="projects"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        id="projects-title"
        title={projects.title}
        description={projects.description}
        note={projects.disclaimer}
      />
      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          aria-label={projects.previousSlideLabel}
          onClick={() => emblaApi?.scrollPrev()}
          className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <ChevronLeftIcon className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label={projects.nextSlideLabel}
          onClick={() => emblaApi?.scrollNext()}
          className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <ChevronRightIcon className="size-5" aria-hidden="true" />
        </button>
      </div>
      <div
        ref={emblaRef}
        role="region"
        aria-label={projects.carouselLabel}
        aria-roledescription={projects.carouselRoleDescription}
        tabIndex={0}
        className="overflow-hidden pb-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
      >
        <div className="flex gap-4 sm:gap-5">
          {directionCards.map((project, index) => (
            <article
              key={project.title}
              aria-label={`${project.title}, ${index + 1} / ${directionCards.length}`}
              aria-roledescription={projects.slideRoleDescription}
              className="min-w-0 flex-[0_0_85%] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-1 sm:flex-[0_0_48%] lg:flex-[0_0_31%]"
            >
              <div className="relative flex h-44 items-center justify-center overflow-hidden bg-[var(--surface-secondary)] p-4">
                <Image
                  src={project.image}
                  alt={`${projects.imageAltPrefix} ${project.category}`}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 31vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--accent-text)]">
                  {project.category}
                </p>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {`${directionCards[activeIndex]?.title ?? ""}, ${activeIndex + 1} / ${directionCards.length}`}
      </p>
      <div className="mt-3 flex justify-center gap-2">
        {directionCards.map((project, index) => (
          <button
            key={project.title}
            type="button"
            aria-label={`${projects.goToSlideLabel}: ${project.title}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
              activeIndex === index
                ? "w-6 bg-[var(--accent)]"
                : "w-2 bg-[var(--border-strong)] hover:bg-[var(--accent)]"
            }`}
          />
        ))}
      </div>
      <div className="mt-7 text-center">
        <a
          href="#contact"
          className="font-semibold text-[var(--accent-text)] transition-colors hover:text-[var(--accent-text-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          {projects.contactAction} <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
