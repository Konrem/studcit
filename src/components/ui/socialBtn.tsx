import Link from "next/link";
import Image from "next/image";
import { UrlObject } from "url";

export default function SocialBtn(props: { icon: string; title: string; link: string | UrlObject; }) {
  return (
    <Link href={props.link}>
      <Image
        className="dark:invert mr-3 inline-block"
        src={props.icon}
        alt={props.title}
        title={props.title}
        width={25}
        height={25}
      />
    </Link>
  );
}
