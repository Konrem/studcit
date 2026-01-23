import Card from "../ui/card";

export default function AboutCards() {
  const cardsWork = [
    {
      icon: "/test.svg",
      title: "Талановиті фахівці",
      subtitle: "Досвідчена команда професіоналів",
    },
    {
      icon: "/test.svg",
      title: "Постійний розвиток",
      subtitle: "Постійно вдосконалюємо свої навички",
    },
    {
      icon: "/test.svg",
      title: "Індивідуальний підхід",
      subtitle: "Враховуємо особливості і потреби клієнта",
    },
    {
      icon: "/test.svg",
      title: "Креативні рішення",
      subtitle: "Знаходимо нестандартні підходи",
    },
    {
      icon: "/test.svg",
      title: "Гарантія якісної роботи",
      subtitle: "Ретельно тестуємо кожний проєкт",
    },
  ];
  return (
    <div className="mt-[5em]" id="about">
      <div className="text-center pb-[1rem]">
        <h2 className="font-bold text-5xl">СтудЦІТ - це</h2>
        <p className="font-medium text-xl py-[1rem]">
          не тільки спеціалісти, які отримують вищу, а також
        </p>
      </div>
      <div className="container mx-auto flex justify-around">
        {cardsWork.map((card, index) => (
          <div key={index}>
            <Card
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
