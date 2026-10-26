"use client";

import browserInside from "@/app/content/browserInside";
import Image from "next/image";

export default function SiteInBrowser() {
  const {
    title,
    description,
    header,
    headerMobile,
    projects,
    siteImageAlt,
  } = browserInside;

  return (
    <div className="relative h-full min-h-0 w-full overflow-hidden">
      <Image
        src="/siteInBrowser/modern-laptop-laying-desk.webp"
        alt={siteImageAlt}
        fill
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 55vw, 800px"
        priority
        className="object-cover object-center"
      />
      <div className="relative flex h-full w-full flex-col bg-black/10 backdrop-blur-[2px]">
        <div className="flex shrink-0 items-center justify-between px-2 py-1.5 sm:px-3">
          <div className="hidden text-[10px] font-medium text-white md:flex">
            {header.map((item, index) => (
              <span className="cursor-pointer px-2" key={index}>
                {item.name}
              </span>
            ))}
          </div>

          <Image
            className="mx-1 size-8 sm:size-10"
            src="/logo/StudCIT_MonoLogo.svg"
            alt=""
            width={40}
            height={40}
          />

          <div className="hidden text-xs font-medium text-white md:flex">
            <span className="cursor-pointer px-1">
              {headerMobile[0].value}
            </span>
          </div>
          <div className="flex items-center gap-1 md:hidden">
            <Image
              src={headerMobile[0].icon}
              alt=""
              width={14}
              height={14}
              className="size-3.5 invert"
            />
            <span className="text-[7px] font-medium text-white">
              {headerMobile[0].value}
            </span>
          </div>
        </div>
        <div className="min-h-0 flex-1 px-2">
          <div className="mx-auto mt-1 text-center sm:mt-2">
            <div className="px-2 text-xs font-semibold text-white sm:text-base md:text-xl">
              {title}
            </div>
            <div className="mx-auto mt-1 hidden max-w-64 px-2 text-[10px] text-white/90 sm:block md:text-xs">
              {description}
            </div>
          </div>
          <div className="mt-1 grid grid-cols-2 gap-1 px-1 sm:mt-3 sm:gap-2 sm:px-2">
            {projects.map((item) => (
              <div
                key={item.name}
                className="flex min-h-8 min-w-0 flex-col items-center justify-center gap-0.5 rounded-lg border border-white/25 bg-black/55 p-1 shadow-sm backdrop-blur sm:min-h-14 sm:gap-1 sm:p-1.5"
              >
                <Image
                  className="size-4 shrink-0 object-contain sm:size-6"
                  src={item.icon}
                  alt=""
                  width={20}
                  height={20}
                />
                <span className="block max-w-full truncate text-[7px] font-medium text-white sm:text-[9px]">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
