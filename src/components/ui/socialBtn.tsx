"use client";

import Link from "next/link";
import Image from "next/image";
import { UrlObject } from "url";

export default function SocialBtn(props: {
  icon: string;
  title: string;
  link: string | UrlObject;
  hover: string;
  size: number;
}) {
  const iconColor = (props.hover == "bg-white") ? "group-hover:dark:invert" : "";
  const rounded = (props.hover !== "bg-trasparent") ? "rounded-full" : "";
  return (
    <Link
      href={props.link}
      title={props.title}
      className={`p-2 flex relative overflow-hidden items-center justify-center group transition-all duration-300 z-0 ${rounded}`}
    >
      <Image
        className={`z-10 inline-block duration-500 group-hover:scale-115 ${iconColor}`}
        src={props.icon}
        alt=""
        width={props.size}
        height={props.size}
      />
      <div
        className={`absolute top-full left-0 w-full h-full z-0 transition-all duration-500 group-hover:top-0 ${props.hover} ${rounded} `}
      ></div>
    </Link>
  );
}
