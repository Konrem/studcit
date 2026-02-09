"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <Link
      href="#"
      className="py-2 inline-flex flex-col items-center justify-center"
      onClick={toggleTheme}
    >
      <Image
        className="inline-block"
        src={theme === 'light' ? "/moon.svg" : "/sun.svg"}
        alt="Theme"
        width={25}
        height={25}
      />
      {/* Зараз: {theme === 'light' ? 'Світла' : 'Темна'} */}
    </Link>
  );
}
