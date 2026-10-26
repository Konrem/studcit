"use client";

import Image from "next/image";
import { useState } from "react";
import landingContent from "@/app/content/landingContent";

export default function ThemeToggle({ closeMenu }: { closeMenu: () => void }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { themeToggleLabels } = landingContent.header;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    closeMenu();
  };

  return (
    <button
      type="button"
      aria-label={themeToggleLabels[theme]}
      aria-pressed={theme === "dark"}
      title={themeToggleLabels[theme]}
      className="my-1 inline-flex size-10 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] xl:my-0"
      onClick={toggleTheme}
    >
      <Image
        src={theme === "light" ? "/moon.svg" : "/sun.svg"}
        alt=""
        width={25}
        height={25}
      />
    </button>
  );
}
