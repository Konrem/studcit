import Image from "next/image";
import Link from "next/link";
import SocialBtn from "../ui/socialBtn";
import Map from "../ui/Map";

export default function Footer() {
  const socials = [
    {
      icon: "/social/whatsapp.svg",
      title: "Whatsapp",
      link: "#",
      hover: "bg-green-400",
    },
    {
      icon: "/social/telegram.svg",
      title: "Telegram",
      link: "#",
      hover: "bg-blue-400",
    },
    {
      icon: "/social/viber.svg",
      title: "Viber",
      link: "#",
      hover: "bg-fuchsia-700",
    },
    {
      icon: "/social/facebook.svg",
      title: "Facebook",
      link: "#",
      hover: "bg-blue-500",
    },
    {
      icon: "/social/linkedin.svg",
      title: "LinkedIn",
      link: "#",
      hover: "bg-[#006699]",
    },
    {
      icon: "/social/github.svg",
      title: "Github",
      link: "#",
      hover: "bg-white",
    },
    {
      icon: "/social/instagram.svg",
      title: "Instagram",
      link: "#",
      hover: "bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500",
    },
    {
      icon: "/social/youtube.svg",
      title: "Youtube",
      link: "#",
      hover: "bg-[#FF3000]",
    },
  ];

  const sizeIconSocial = 25;
  return (
    <div className="dark-theme border-t-1 border-neutral-700">
      <footer
        id="footer"
        className="container flex item-center flex-wrap justify-between p-8 mx-auto"
      >
        <div>
          <div className="mt-4 mx-4">
            <div className="flex py-1">
              <Link href="tel:+380985252165">
                <Image
                  className="mr-3 inline-block"
                  src="/social/telephone.svg"
                  alt="Telephone"
                  width={25}
                  height={25}
                />
                <span className="fw-medium text-base md:text-xl">
                  +38(098) 525-21-65
                </span>
              </Link>
            </div>
            <div className="flex py-1">
              <Link href="mailto:studcit.test@gmail.com">
                <Image
                  className="mr-3 inline-block"
                  src="/social/email.svg"
                  alt="Email"
                  width={25}
                  height={25}
                />
                <span className="fw-medium text-base md:text-xl">
                  studcit.test@gmail.com
                </span>
              </Link>
            </div>
          </div>
          <div className="mx-2 mt-2">
            <div className="flex flex-wrap">
              {socials.map((social, index) => (
                <div className="mr-2 mb-2 md:m-0" key={index}>
                  <SocialBtn
                    icon={social.icon}
                    title={social.title}
                    link={social.link}
                    hover={social.hover}
                    size={sizeIconSocial}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 mt-4">
            <p className="fw-medium text-base md:text-xl">
              Україна, м. Суми, вул. Харківська, 116,
            </p>
            <p className="fw-medium text-base md:text-xl">
              Сумський Державний Університет, ЕТ корпус, каб. ЕТ-504
            </p>
          </div>
        </div>
        <Map />
      </footer>
    </div>
  );
}
