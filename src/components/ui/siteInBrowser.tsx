"use client";

import Image from "next/image";
import { useState } from "react";

export default function SiteInBrowser() {
  const [open, setOpen] = useState(false);

  const site = [
    {
      name: "Telephone",
      icon: "/social/telephone.svg",
    },
    {
      name: "Email",
      icon: "/social/email.svg",
    },
  ];

  const projects = [
    {
      name: "Business Card",
      icon: "/siteInBrowser/business-card.svg",
    },
    {
      name: "Landing Page",
      icon: "/siteInBrowser/landing-page.svg",
    },
    {
      name: "Component",
      icon: "/siteInBrowser/component.svg",
    },
    {
      name: "Multi-Page",
      icon: "/siteInBrowser/multipage.svg",
    },
  ];

  return (
    <div className="mx-auto mt-2 w-full">
      <div className="bg-[url(/siteInBrowser/modern-laptop-laying-desk.jpg)] bg-cover bg-center w-full h-[27rem] sm:h-[21rem]">
        <div className="h-full w-full rounded-md bg-clip-padding backdrop-blur-[3px] bg-opacity-10">
          <div className="flex justify-between items-center p-4">
            <div className="hidden text-xs font-medium text-white md:flex">
              <a className="px-2 cursor-pointer">About</a>
              <a className="px-2 cursor-pointer">Contacts</a>
            </div>

            <Image
              className="mx-2"
              src="/logo/StudCIT_MonoLogo.svg"
              alt=""
              width={75}
              height={75}
            />

            <div className="hidden text-xs font-medium text-white md:flex">
              <a className="px-1 cursor-pointer">+38(0XX) XXX-XX-XX</a>
            </div>
            <div className="relative md:hidden z-50">
              <button
                onClick={() => setOpen(!open)}
                className="w-9 h-10 flex flex-col items-center justify-center cursor-pointer mr-3"
              >
                <div
                  className={`w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left ${
                    open
                      ? "rotate-[-45deg] translate-y-[0.5rem]"
                      : "translate-y-[0.5rem]"
                  }`}
                />
                <div
                  className={`w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <div
                  className={`w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left ${
                    open
                      ? "rotate-[45deg] -translate-y-[0.5rem]"
                      : "-translate-y-[0.5rem]"
                  }`}
                />
              </button>

              <div
                className={`absolute right-0 top-12 flex flex-col items-center gap-4 transition-all duration-300 ${
                  open
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                {site.map((item, index) => (
                  <a
                    key={index}
                    onClick={() => setOpen(false)}
                    className={`flex flex-col items-center cursor-pointer transition-all duration-500 ${
                      open
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: open ? `${index * 70}ms` : "0ms",
                    }}
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-100">
                      <Image
                        className="invert p-1"
                        src={item.icon}
                        alt={item.name}
                        width={25}
                        height={25}
                      />
                    </div>

                    <span className="text-xs font-bold text-gray-900 text-center mt-2">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row px-4 justify-center md:justify-between items-start h-auto">
            <div className="mx-auto mt-4 text-center">
              <div className="text-2xl font-medium text-white px-2">
                StudCIT
              </div>
              <div className="text-sm text-white mt-4 px-2 w-[12rem]">
                Website and web application development
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap sm:gap-10 mt-4">
            {projects.map((item, index) => (
              <div
                key={index}
                className="max-w-[50%] min-w-[35%] sm:min-w-auto w-auto flex justify-center items-center flex-col mx-2 sm:mx-0 mt-4 md:mt-6"
              >
                <div className="w-[6rem] h-[6rem] rounded-xl bg-black/50 backdrop-blur-2xl border border-white/30 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-black/20">
                  <Image
                    className="py-2"
                    src={item.icon}
                    alt={item.name}
                    width={40}
                    height={40}
                  />
                  <span className="text-xs text-white/90 text-center px-1 my-1 block">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
