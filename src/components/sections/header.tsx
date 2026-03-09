import Console from "@/components/ui/console";
import Browser from "@/components/ui/browser";
import SocialBtn from "../ui/socialBtn";
import landingContent from "@/app/content/landingContent";

export default function Header() {
  const { title, description, technologies } = landingContent.main;
  const sizeIconTech = 100;
  
  return (
    <header
      className="bg-[var(--bg-main)] text-[var(--text-primary)] pt-[6rem] lg:pt-[8rem] overflow-hidden"
      id="top"
      role="banner"
    >
      <div className="text-center pb-4">
        <h1 className="font-semibold text-5xl tracking-tight">{title}</h1>
        <p className="font-medium text-xl line-height-[1.5] py-4">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-8 lg:flex-nowrap items-start justify-center">
        <Browser />
        <div>
          <Console />
          <div className="my-6">
            <div className="flex">
              {technologies.map((technology, index) => (
                <SocialBtn
                  key={index}
                  icon={technology.icon}
                  title={technology.title}
                  link={technology.link}
                  hover={technology.hover}
                  size={sizeIconTech}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
