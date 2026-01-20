import Image from "next/image";
import TimelineBlock from "../ui/timeline-block";
import { describe } from "node:test";

export default function Timeline() {
  const timeline = [
    {
      icon: "/test.svg",
      title: "Аналіз",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      icon: "/test.svg",
      title: "Проєктування",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      icon: "/test.svg",
      title: "Дизайн",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      icon: "/test.svg",
      title: "Веб-розробка",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      icon: "/test.svg",
      title: "Запуск",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <div className="mt-[5em]">
      <h2 className="font-bold text-center mb-10 text-5xl">Як ми працюємо?</h2>
      <ul className="relative before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-black overflow-hidden">
        {timeline.map((block, index) => (
          <li
            className="group relative grid grid-cols-2 odd:-ms-5 even:-me-5"
            key={index}
          >
            <div className="relative flex items-start gap-4 group-even:flex-row-reverse group-even:text-right group-odd:order-last">
              <span className="size-5 mt-8 shrink-0 rounded-full bg-black"></span>
              <span className="absolute mt-10 w-[150px] h-[2px] bg-black"></span>
              <div
                className={`size-3 mt-9 ${index % 2 === 0 ? "ml-[110px]" : "mr-[110px]"} shrink-0 rounded-full bg-black`}
              ></div>
              <TimelineBlock
                icon={block.icon}
                title={block.title}
                description={block.description}
              />
            </div>
            <div aria-hidden="true"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
