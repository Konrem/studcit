import Console from "@/components/ui/console";
import Browser from "@/components/ui/browser";
import AboutCards from "@/components/sections/cardsWork";
import Timeline from "@/components/sections/timeline";
import Info from "@/components/sections/info";
import SocialBtn from "../ui/socialBtn";
import RevealBlock from "../ui/animate/revealBlock";
import Form from "../ui/form";

export default function Main() {
  const socials = [
    {
      icon: "/technologies/html.svg",
      title: "HTML",
      link: "#",
      hover: "bg-trasparent",
    },
    {
      icon: "/technologies/css.svg",
      title: "CSS",
      link: "#",
      hover: "bg-trasparent",
    },
    {
      icon: "/technologies/js.svg",
      title: "JavaScript",
      link: "#",
      hover: "bg-trasparent",
    },
    {
      icon: "/technologies/laravel.svg",
      title: "Laravel",
      link: "#",
      hover: "bg-trasparent",
    },
  ];
  const sizeIconTech = 100;

  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-primary)] py-[5rem] overflow-hidden">
      <div className="text-center pb-4">
        <h1 className="font-semibold text-5xl tracking-tight">StudCIT.com</h1>
        <p className="font-medium text-xl line-height-[1.5] py-4">
          Поки ти дивишся сайт, ми його уже робимо
        </p>
      </div>
      <div className="flex flex-wrap gap-8 lg:flex-nowrap items-start justify-center">
        <Browser />
        <div>
          <Console />
          <div className="my-6">
            <div className="flex">
              {socials.map((social, index) => (
                <SocialBtn
                  key={index}
                  icon={social.icon}
                  title={social.title}
                  link={social.link}
                  hover={social.hover}
                  size={sizeIconTech}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Info />
      <AboutCards />
      <Timeline />
      <Form />
    </div>
  );
}
