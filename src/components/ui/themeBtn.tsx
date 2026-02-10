"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ThemeToggle({ changeTheme }: { changeTheme: any }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    changeTheme(true);
  };

  return (
    <Link
      href="#"
      className="group relative overflow-hidden p-2 my-2 lg:my-0 inline-flex flex-col items-center justify-center transition-all duration-200 ease-out rounded-full hover:bg-white"
      onClick={toggleTheme}
    >
      <Image
        className={`z-10 transition-discrete transition-all duration-500 ease-out ${theme === "light" ? "absolute invert collapse group-hover:opacity-100 group-hover:visible translate-x-10 -translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0" : "inline-block translate-x-0 translate-y-0 group-hover:-translate-x-10 group-hover:translate-y-3 group-hover:opacity-0  group-hover:invisible"}`}
        src="/moon.svg"
        alt="Theme"
        width={25}
        height={25}
      />
      <Image
        className={`z-10 transition-discrete transition-all duration-500 ease-out ${theme === "dark" ? "absolute invert collapse group-hover:opacity-100 group-hover:visible translate-x-10 -translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0" : "inline-block translate-x-0 translate-y-0 group-hover:-translate-x-10 group-hover:translate-y-3 group-hover:opacity-0  group-hover:invisible"}`}
        src="/sun.svg"
        alt="Theme"
        width={25}
        height={25}
      />
    </Link>
  );
}
