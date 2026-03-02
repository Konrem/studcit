import landingContent from "@/app/content/landingContent";
import RevealBlock from "../ui/animate/revealBlock";
import Card from "../ui/card";

export default function AboutCards() {
  const {title, description, anchor, cardsWork} = landingContent.cards;
  return (
    <div className="mt-[3rem] lg:mt-[5rem] scroll-mt-20" id={anchor}>
      <div className="text-center pb-4">
        <h2 className="font-bold text-3xl md:text-5xl">{title}</h2>
        <p className="font-medium text-xl py-4">
          {description}
        </p>
      </div>
      <div className="container mx-auto flex justify-center lg:justify-around flex-wrap gap-8 lg:flex-nowrap lg:gap-2">
        {cardsWork.map((card, index) => (
          <RevealBlock key={index} delay={index * 150}>
            <Card
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
            />
          </RevealBlock>
        ))}
      </div>
    </div>
  );
}
