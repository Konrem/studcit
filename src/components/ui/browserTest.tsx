import React from "react";

type BrowserWindowProps = {
  url?: string;
  theme?: "light" | "dark";
  children?: React.ReactNode;
};

export const BrowserWindow: React.FC<BrowserWindowProps> = ({
  url = "example.com",
  theme = "light",
  children,
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={[
        "w-[520px] rounded-xl overflow-hidden",
        "backdrop-blur",
        "shadow-[0_20px_40px_rgba(0,0,0,0.25)]",
        isDark ? "bg-[#1A1A1A]" : "bg-[#F4F4F5]",
      ].join(" ")}
    >
      {/* Top bar */}
      <div
        className={[
          "flex items-center gap-3 h-10 px-4",
          isDark ? "bg-[#222]" : "bg-[#EAEAEC]",
        ].join(" ")}
      >
        {/* macOS dots */}
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>

        {/* Address bar */}
        <div
          className={[
            "mx-auto rounded-md px-3 py-1 text-xs font-medium",
            "tracking-tight",
            isDark
              ? "bg-[#111] text-white/70"
              : "bg-white text-black/60",
          ].join(" ")}
        >
          {url}
        </div>
      </div>

      {/* Page preview */}
      <div
        className={[
          "min-h-[260px] px-6 py-8",
          isDark ? "bg-[#1A1A1A] text-white" : "bg-white text-black",
        ].join(" ")}
      >
        {children ?? (
          <div className="opacity-60 text-sm">
            Website preview
          </div>
        )}
      </div>
    </div>
  );
};
export default BrowserWindow;