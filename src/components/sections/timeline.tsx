import landingContent from "@/app/content/landingContent";
import SectionHeading from "../ui/sectionHeading";

export default function Timeline() {
  const {title, subtitle, anchor, timelineBlocks} = landingContent.timeline;

  return (
    <section
      className="container mx-auto mt-12 scroll-mt-24 px-4 md:mt-20"
      id={anchor}
      aria-labelledby="timeline-title"
    >
      <SectionHeading
        id="timeline-title"
        title={title}
        description={subtitle}
      />
      <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 lg:before:absolute lg:before:left-[10%] lg:before:right-[10%] lg:before:top-5 lg:before:h-px lg:before:bg-[var(--border-strong)]">
        {timelineBlocks.map((block, index) => (
          <li className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-center shadow-[var(--shadow-card)]" key={block.title}>
            <span className="relative z-10 mx-auto flex size-11 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-[var(--text-on-accent)] shadow-md">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-bold">{block.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              {block.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
