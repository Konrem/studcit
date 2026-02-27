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
      icon: "/siteInBrowser/business-card-svgrepo-com.svg",
    },
    {
      name: "Landing Page",
      icon: "/siteInBrowser/calculator-svgrepo-com.svg",
    },
    {
      name: "Web Component",
      icon: "/siteInBrowser/project-svgrepo-com.svg",
    },
    {
      name: "Multi-Page",
      icon: "/siteInBrowser/analyze-svgrepo-com.svg",
    },
  ];

  return (
    <div className="mx-auto mt-2 w-full">
      <div className="bg-[url(/siteInBrowser/modern-laptop-laying-desk.jpg)] bg-cover bg-center w-full h-[15rem]">
        <div className="h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-10">
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
        </div>
      </div>
      <div className="flex justify-center flex-wrap sm:gap-10">
        {projects.map((item, index) => (
          <div key={index} className="w-1/2 sm:w-auto flex items-center flex-col mt-3">
            <div className="w-[4rem] h-[4rem] rounded-xl bg-neutral-200 mx-2 flex items-center justify-center transition-all duration-300 hover:scale-110 ">
              <Image
                className="p-0"
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
              />
            </div>
            <span className="text-xs text-center mt-2 block">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
