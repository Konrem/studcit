import Browser from "@/components/ui/browser";
import ProjectStatus from "@/components/ui/projectStatus";
import Image from "next/image";
import landingContent from "@/app/content/landingContent";
import LaptopScreen from "@/components/ui/laptop/laptopScreen";
import LaptopBase from "@/components/ui/laptop/laptopBase";

export default function Header() {
  const {
    upperTitle,
    title,
    description,
    contactAction,
    projectsAction,
    technologies,
    technologiesLabel,
    stats,
  } = landingContent.main;
  const sizeIconTech = 100;

  return (
    <header
      className="bg-[var(--bg-main)] text-[var(--text-primary)] overflow-hidden pb-12 pt-14 transition-colors lg:pt-20 md:pb-16"
      id="top"
      role="banner"
    >
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* Ліва колонка: Текст та кнопки */}
          <div className="z-10 flex flex-col justify-center px-4 lg:col-span-5 lg:px-0">
            {upperTitle && (
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-wider text-[var(--accent-text)] sm:text-sm">
                {upperTitle}
              </span>
            )}

            <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              {description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3.5 items-center">
              <a
                href="#contact"
                className="rounded-lg bg-[var(--accent)] px-6 py-3.5 text-center text-sm font-semibold text-[var(--text-on-accent)] shadow-md transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:text-base"
              >
                {contactAction}
              </a>
              <a
                href="#projects"
                className="rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-6 py-3.5 text-center text-sm font-semibold text-[var(--text-primary)] shadow-sm transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:text-base"
              >
                {projectsAction}
              </a>
            </div>
          </div>

          {/* Права колонка: Laptop з розділеними компонентами */}
          <div className="flex w-full select-none items-center justify-center [perspective:1200px] lg:col-span-7">
            <div className="relative flex w-[84%] max-w-[760px] flex-col items-center lg:w-[85%] xl:max-w-[820px]">

              {/* Екран з кольором #353535 та співвідношенням 16:9 */}
              <LaptopScreen
                browser={<Browser />}
                status={<ProjectStatus />}
              />

              {/* Збільшена клавіатура, повернута вперед */}
              <LaptopBase />

            </div>
          </div>

        </div>

        {/* Стек технологій */}

          <div className="technology-stack mt-12 flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-card)] sm:mt-16 sm:p-6">
            <span className="text-center text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] sm:text-left">
              {technologiesLabel}
            </span>
            <div className="flex w-full items-stretch justify-center gap-1 sm:gap-3">
              {technologies.map((technology) => (
                <div
                  key={technology.title}
                  className="technology-item group relative flex min-h-24 min-w-0 flex-1 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-1 py-3 text-center transition-colors duration-300 hover:border-[var(--border)] hover:bg-[var(--surface-secondary)] sm:min-h-28 sm:px-2"
                >
                  <Image
                    src={technology.icon}
                    alt=""
                    width={sizeIconTech}
                    height={sizeIconTech}
                    className="technology-icon size-10 shrink-0 object-contain transition duration-500 ease-out sm:size-14 lg:size-16"
                  />
                  <span className="technology-title break-words text-[10px] font-semibold leading-tight text-[var(--text-primary)] sm:text-xs">
                    {technology.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        <div
          aria-label="Показники роботи"
          className="mt-5 grid grid-cols-2 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)] sm:mt-6 lg:grid-cols-4"
          role="list"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-24 items-center gap-2 px-2 py-4 sm:justify-center sm:gap-3 sm:px-4 md:gap-4 md:py-5"
              role="listitem"
            >
              <Image
                src={stat.icon}
                alt=""
                width={48}
                height={48}
                className="size-10 shrink-0 object-contain sm:size-12"
              />
              <div className="min-w-0">
                <p className="text-lg font-bold leading-none tracking-tight text-[var(--text-primary)] sm:text-2xl md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-[var(--text-secondary)] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </header>
  );
}