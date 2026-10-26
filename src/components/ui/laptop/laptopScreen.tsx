import React from "react";

interface LaptopScreenProps {
  browser: React.ReactNode;
  status: React.ReactNode;
}

export default function LaptopScreen({ browser, status }: LaptopScreenProps) {
  return (
    <div className="relative w-full rounded-t-[1.75rem] border-x border-t border-[#3a3d44] bg-[#272a30] p-2 shadow-2xl ring-1 ring-black/30 sm:p-4">
      {/* Вебкамера з індикатором */}
      <div className="flex justify-center items-center pb-2">
        <div className="size-1.5 rounded-full bg-[#141519] ring-1 ring-[#454545]" />
      </div>

      <div className="relative grid aspect-[16/10] w-full grid-cols-1 overflow-hidden rounded-lg border border-[#111318] bg-[#17191d] shadow-inner md:aspect-[16/9] md:grid-cols-12">
        <div className="relative col-span-1 min-h-0 overflow-hidden bg-[var(--surface)] md:col-span-8 md:border-r md:border-[#42464f]">
          {browser}
        </div>
        <div className="hidden min-h-0 overflow-hidden md:col-span-4 md:flex md:flex-col">
          {status}
        </div>
      </div>
    </div>
  );
}