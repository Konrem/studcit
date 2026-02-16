"use client";

import Image from "next/image";
import NavBtn from "../ui/navBtn";
import { useState } from "react";
import ThemeToggle from "../ui/themeBtn";
import Link from "next/link";

export default function Header() {
  const navButtons = [
    {
      title: "Основні аспекти",
      link: "/#main-aspects",
    },
    {
      title: "Про нас",
      link: "/#about",
    },
    {
      title: "Як ми працюємо",
      link: "/#how-we-work",
    },
    // {
    //   title: "Контакти",
    //   link: "/#footer",
    // },
  ];

  const [isPressed, setIsPressed] = useState(false);

  const closeMenu = () => setIsPressed(!isPressed);

  return (
    <div className="fixed w-full z-20 dark-theme border-b-1 border-neutral-700">
      <nav className="container flex item-center flex-wrap justify-between px-2 lg:px-4 mx-auto flex-row">
        <div className="logo block">
          <Link href="#banner">
            <Image
              src="/logo/logo_darkTheme.svg"
              className="m-2 w-[200px] sm:w-[240px] h-auto"
              alt="StudCIT logo"
              width={240}
              height={60}
            />
          </Link>
        </div>

        <button
          className="group inline-flex lg:hidden w-12 h-12 text-slate-800 text-center items-center justify-center rounded transition m-2"
          aria-pressed={isPressed}
          onClick={() => setIsPressed(!isPressed)}
        >
          <svg
            className="w-6 h-6 fill-current pointer-events-none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="text-[#fff] origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
              y="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
            <rect
              className="text-[#fff] origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45"
              y="7"
              width="16"
              height="2"
              rx="1"
            ></rect>
            <rect
              className="text-[#fff] origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:-rotate-[225deg]"
              y="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
          </svg>
        </button>
        <div
          className={`${isPressed ? "flex" : "hidden"} lg:flex w-full lg:w-auto items-center justify-center`}
        >
          <ul className="flex flex-col lg:flex-row pb-3 lg:pb-0">
            {navButtons.map((btn, index) => (
              <li key={index} className="text-center">
                <NavBtn title={btn.title} link={btn.link} closeMenu={closeMenu} />
              </li>
            ))}
            <li className="text-center">
              <Link
                href="#form"
                onClick={() => setIsPressed(!isPressed)}
                className="inline-flex flex-col items-center justify-center font-medium cursor-pointer rounded px-4 py-2 bg-orange-500 hover:bg-orange-600 mx-3"
              >
                Зв&apos;язатися з нами
              </Link>
            </li>
            <li className="text-center">
              <ThemeToggle closeMenu={closeMenu} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
