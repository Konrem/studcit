"use client";

import Image from "next/image";
import NavBtn from "../ui/navBtn";
import { useState } from "react";
import ThemeToggle from "../ui/themeBtn";
import Link from "next/link";
import landingContent from "@/app/content/landingContent";

export default function Header() {
  const {navButtons, contactForUs, logoAlt, menuToggleLabel} = landingContent.header;

  const [isPressed, setIsPressed] = useState(false);

  const closeMenu = () => setIsPressed(false);

  return (
    <nav className="dark-theme fixed z-20 w-full border-b border-[var(--border)] shadow-sm" role="navigation">
      <div className="container mx-auto flex flex-row flex-wrap items-center justify-between px-2 lg:px-4">
        <div className="logo block">
          <Link href="#top">
            <Image
              src="/logo/logo_darkTheme.svg"
              className="m-2 w-[200px] sm:w-[240px] h-auto"
              alt={logoAlt}
              width={240}
              height={60}
            />
          </Link>
        </div>

        <button
          className="group m-2 inline-flex size-12 items-center justify-center rounded text-[var(--text-on-strong)] transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] xl:hidden"
          aria-expanded={isPressed}
          aria-pressed={isPressed}
          aria-controls="primary-navigation"
          aria-label={menuToggleLabel}
          onClick={() => setIsPressed(!isPressed)}
        >
          <svg
            className="pointer-events-none size-6 fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="origin-center -translate-y-[5px] translate-x-[7px] text-white transition-all duration-300 group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
              y="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
            <rect
              className="origin-center text-white transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45"
              y="7"
              width="16"
              height="2"
              rx="1"
            ></rect>
            <rect
              className="origin-center translate-y-[5px] text-white transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:-rotate-[225deg]"
              y="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
          </svg>
        </button>
        <div
          id="primary-navigation"
          className={`${isPressed ? "flex" : "hidden"} max-h-[calc(100dvh-5rem)] w-full items-center justify-center overflow-y-auto xl:max-h-none xl:overflow-visible xl:flex xl:w-auto`}
        >
          <ul className="flex w-full flex-col items-center pb-3 xl:w-auto xl:flex-row xl:pb-0">
            {navButtons.map((btn, index) => (
              <li key={index} className="text-center">
                <NavBtn title={btn.title} link={btn.link} closeMenu={closeMenu} />
              </li>
            ))}
            <li className="text-center">
              <Link
                href={contactForUs.link}
                onClick={closeMenu}
                className="mx-3 my-4 inline-flex flex-col items-center justify-center rounded-lg bg-[var(--accent)] px-4 py-2 font-semibold text-[var(--text-on-accent)] transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] md:my-0"
              >
                {contactForUs.text}
              </Link>
            </li>
            <li className="mt-3 border-t border-white/15 pt-3 text-center xl:mt-0 xl:border-0 xl:pt-0">
              <ThemeToggle closeMenu={closeMenu} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
