import landingContent from "@/app/content/landingContent";
import CardInfo from "../ui/card-info";

export default function Info() {
  const {title, anchor, infoCards} = landingContent.info;
  return (
    <div className="mt-[3rem] lg:mt-[5rem] scroll-mt-20" id={anchor}>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-center">
        {title}
      </h2>
      {infoCards.map((card, index) => (
        <CardInfo
          key={index}
          index={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
