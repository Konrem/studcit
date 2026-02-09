import RevealBlock from "../ui/animate/revealBlock";
import TimelineBlock from "../ui/timeline-block";

export default function Timeline() {
  const timeline = [
    {
      icon: "/timeline/target.svg",
      title: "Аналіз",
      description:
        "Визначаємо цілі проєкту, цільову аудиторію та ключові задачі. Аналізуємо вимоги, контент і технічні обмеження, щоб сформувати чітке бачення майбутнього сайту.",
    },
    {
      icon: "/timeline/pencil.svg",
      title: "Проєктування",
      description:
        "Створюємо структуру сайту, продумуємо логіку навігації та взаємодію користувача з інтерфейсом. Формуємо прототип, який відображає основні сценарії використання.",
    },
    {
      icon: "/timeline/pen-file.svg",
      title: "Дизайн",
      description:
        "Розробляємо візуальний стиль, підбираємо кольори, шрифти та компоненти інтерфейсу. Дизайн узгоджується з цілями проєкту та підкреслює його характер.",
    },
    {
      icon: "/timeline/code-desktop.svg",
      title: "Веб-розробка",
      description:
        "Реалізуємо дизайн у коді, налаштовуємо адаптивність, інтегруємо необхідний функціонал та сервіси. Забезпечуємо коректну роботу на різних пристроях.",
    },
    {
      icon: "/timeline/rocket.svg",
      title: "Запуск",
      description:
        "Перевіряємо сайт, оптимізуємо швидкість та публікуємо проєкт. Після запуску можливі доопрацювання та подальший розвиток ресурсу.",
    },
  ];

  return (
    <div className="mt-[3rem] lg:mt-[5rem]" id="how-we-work">
      <h2 className="font-bold text-center mb-10 text-3xl md:text-5xl">
        Як ми працюємо?
      </h2>
      <ul className="relative before:absolute before:top-0 before:left-[1.4rem] pl-[2rem] pr-4 sm:before:left-[2.4rem] sm:px-[3rem] lg:before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-[var(--text-primary)] overflow-hidden">
        {timeline.map((block, index) => (
          <li
            className="group relative grid lg:grid-cols-2 my-10 -ml-5 lg:m-0 lg:odd:-ml-5 lg:even:-mr-5"
            key={index}
          >
            <div className="relative flex items-start gap-4 lg:group-even:flex-row-reverse lg:group-even:text-right lg:group-odd:order-last">
              <span className="size-5 mt-8 shrink-0 rounded-full bg-[var(--text-primary)]"></span>
              <span className="absolute mt-10 w-[60px] sm:w-[150px] h-[2px] bg-[var(--text-primary)]"></span>
              <div
                className={`size-3 ml-[20px] sm:ml-[110px] lg:ml-0 mt-9 ${index % 2 === 0 ? "lg:ml-[110px]" : "lg:mr-[110px]"} shrink-0 rounded-full bg-[var(--text-primary)]`}
              ></div>
              <TimelineBlock
                icon={block.icon}
                title={block.title}
                description={block.description}
              />
            </div>
            <div className="hidden lg:block" aria-hidden="true"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
