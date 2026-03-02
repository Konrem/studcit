"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import landingContent from "@/app/content/landingContent";

export default function Faq() {
  const [open, setOpen] = useState<string | null>(null);

  const { title, faqItems } = landingContent.faq;
  return (
    <div className="container mx-auto mt-[3rem] lg:mt-[5rem] px-4">
      <h2 className="text-3xl md:text-3xl text-center font-bold mb-4 md:mb-8">
        {title}
      </h2>
      {faqItems.map((item) => {
        return (
          <div
            key={item.id}
            id={item.id}
            className={`rounded-xl my-4 overflow-hidden border-2 transition-all duration-300 scroll-mt-20 ${
              open === item.id
                ? "scale-[1.01] border-[var(--bg-main)] bg-[var(--text-primary)]/[0.9]"
                : "bg-[var(--bg-main)] border-[var(--text-primary)]"
            }`}
          >
            <button
              onClick={() => setOpen(open === item.id ? null : item.id)}
              className="w-full px-2 py-4 sm:p-6 flex justify-between items-center"
            >
              <div className="flex items-center gap-2 md:gap-4">
                <div className="min-w-[40px] w-12 h-12 rounded-xl bg-[var(--bg-main)] md:border-2 border-[var(--text-primary)] md:backdrop-blur-md mdshadow-inner flex items-center justify-center">
                  <Image src={item.icon} alt="" width={25} height={25} />
                </div>
                <h3
                  className={`text-base md:text-xl font-semibold ${
                    open === item.id
                      ? "text-[var(--bg-main)]"
                      : "text-[var(--text-primary)]"
                  }
                 `}
                >
                  {item.title}
                </h3>
              </div>
              <ChevronDownIcon
                className={`w-6 h-6 transition-transform duration-300 ${open === item.id ? "rotate-180 text-[var(--bg-main)]" : "text-[var(--text-primary)]"}`}
              />
            </button>
            {open === item.id && (
              <div className="p-6 border-t backdrop-blur-3xl animate-[slideDown_0.4s_ease-out] bg-[var(--text-primary)]/[0.5]">
                <p className="text-[var(--bg-main)] leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
