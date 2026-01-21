import Image from "next/image";
import Link from "next/link";
import SocialBtn from "../ui/socialBtn";
import Map from "../ui/Map";

export default function Footer() {
  const socials = [
    {
      icon: "/test.svg",
      title: "Telegram",
      link: "#",
    },
    {
      icon: "/test.svg",
      title: "Facebook",
      link: "#",
    },
    {
      icon: "/test.svg",
      title: "Instagram",
      link: "#",
    },
    {
      icon: "/test.svg",
      title: "LinkedIn",
      link: "#",
    },
    {
      icon: "/test.svg",
      title: "Github",
      link: "#",
    },
  ];
  return (
    <footer
      id="footer"
      className="container flex item-center flex-wrap justify-between p-8 mx-auto"
    >
      <div>
        <div className="p-4">
          <div className="flex py-1">
            <Link href="tel:+380985252165">
              <Image
                className="dark:invert mr-3 inline-block"
                src="/test.svg"
                alt="Icon"
                width={25}
                height={25}
              />
              <span className="fw-medium text-xl">+380985252165</span>
            </Link>
          </div>
          <div className="flex py-1">
            <Link href="mailto:studcit@gmail.com">
              <Image
                className="dark:invert mr-3 inline-block"
                src="/test.svg"
                alt="Icon"
                width={25}
                height={25}
              />
              <span className="fw-medium text-xl">studcit@gmail.com</span>
            </Link>
          </div>
          <div className="flex py-2">
            {socials.map((social, index) => (
              <div key={index}>
                <SocialBtn
                  icon={social.icon}
                  title={social.title}
                  link={social.link}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 mt-4">
          <p className="fw-medium text-xl">
            Україна, Суми, вул. Римського-Корсакова, 2
          </p>
          <p className="fw-medium text-xl">
            Сумський Державний Університет, ЕТ корпус, каб. ЕТ-504{" "}
          </p>
        </div>
      </div>
      <div>
        <Map />
      </div>
    </footer>
  );
}
