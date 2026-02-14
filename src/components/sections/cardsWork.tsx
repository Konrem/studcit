import RevealBlock from "../ui/animate/revealBlock";
import Card from "../ui/card";

export default function AboutCards() {
  const cardsWork = [
    {
      icon: "/cards/star.svg",
      title: "Талановиті фахівці",
      subtitle: "Досвідчена команда професіоналів",
    },
    {
      icon: "/cards/trending.svg",
      title: "Постійний розвиток",
      subtitle: "Постійно вдосконалюємо свої навички",
    },
    {
      icon: "/cards/mind.svg",
      title: "Індивідуальний підхід",
      subtitle: "Враховуємо особливості і потреби клієнта",
    },
    {
      icon: "/cards/lightbulb.svg",
      title: "Креативні рішення",
      subtitle: "Знаходимо нестандартні підходи",
    },
    {
      icon: "/cards/warranty.svg",
      title: "Гарантія якісної роботи",
      subtitle: "Ретельно тестуємо кожний проєкт",
    },
  ];
  return (
    <div className="mt-[3rem] lg:mt-[5rem] scroll-mt-20" id="about">
      <div className="text-center pb-4">
        <h2 className="font-bold text-3xl md:text-5xl">СтудЦІТ - це</h2>
        <p className="font-medium text-xl py-4">
          не тільки спеціалісти, які отримують вищу, а також
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
