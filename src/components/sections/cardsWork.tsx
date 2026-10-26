import landingContent from "@/app/content/landingContent";
import RevealBlock from "../ui/animate/revealBlock";
import Card from "../ui/card";
import SectionHeading from "../ui/sectionHeading";

export default function AboutCards() {
  const {title, description, anchor, cardsWork} = landingContent.cards;
  return (
    <section className="container mx-auto mt-12 scroll-mt-24 px-4 md:mt-20" id={anchor}>
      <SectionHeading
        id={`${anchor}-title`}
        title={title}
        description={description}
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-[repeat(5,minmax(0,220px))] xl:justify-center">
        {cardsWork.map((card, index) => (
          <RevealBlock
            key={index}
            delay={index * 150}
            className={
              index === cardsWork.length - 1
                ? "col-span-2 mx-auto w-[calc(50%-0.5rem)] sm:col-span-1 sm:mx-0 sm:w-full"
                : ""
            }
          >
            <Card
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
            />
          </RevealBlock>
        ))}
      </div>
    </section>
  );
}
