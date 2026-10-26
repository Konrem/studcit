"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import landingContent from "@/app/content/landingContent";
import SectionHeading from "../ui/sectionHeading";

export default function Faq() {
  const [open, setOpen] = useState<string | null>(null);

  const { title, faqItems } = landingContent.faq;
  return (
    <section id="faq" className="container mx-auto mt-12 scroll-mt-24 px-4 md:mt-20" aria-labelledby="faq-title">
      <SectionHeading id="faq-title" title={title} />
      <div className="grid gap-3 md:grid-cols-2">
        {faqItems.map((item) => {
          const isOpen = open === item.id;

          return (
            <article
              key={item.id}
              id={item.id}
              className={`scroll-mt-24 overflow-hidden rounded-2xl border shadow-[var(--shadow-card)] ${
                isOpen
                  ? "border-[var(--border)] bg-[var(--surface)]"
                  : "border-[var(--faq-card-border)] bg-[var(--faq-card-surface)]"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={`${item.id}-answer`}
                className={`flex w-full items-center justify-between gap-3 p-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent)] sm:p-5 ${
                  isOpen
                    ? "text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]"
                    : "text-[var(--faq-card-text)] hover:bg-[var(--faq-card-hover)]"
                }`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]"
                  >
                    <Image src={item.icon} alt="" width={25} height={25} />
                  </span>
                  <span className="text-base font-semibold md:text-lg">
                    {item.title}
                  </span>
                </span>
                <ChevronDownIcon
                  className={`size-5 shrink-0 transition-transform duration-200 ${
                    isOpen
                      ? "rotate-180 text-[var(--accent-text)]"
                      : "text-[var(--faq-card-text)]"
                  }`}
                />
              </button>
              {isOpen && (
                <div
                  id={`${item.id}-answer`}
                  className="border-t border-[var(--border)] px-4 pb-5 pt-4 sm:px-5"
                >
                  <p className="whitespace-pre-line leading-relaxed text-[var(--text-secondary)]">
                    {item.content}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
