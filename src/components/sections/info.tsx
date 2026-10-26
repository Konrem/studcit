import landingContent from "@/app/content/landingContent";
import CardInfo from "../ui/card-info";
import SectionHeading from "../ui/sectionHeading";

export default function Info() {
  const {title, anchor, infoCards} = landingContent.info;
  return (
    <section
      className="container mx-auto mt-12 scroll-mt-24 px-4 md:mt-20"
      id={anchor}
      aria-labelledby="main-aspects-title"
    >
      <SectionHeading id="main-aspects-title" title={title} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}
