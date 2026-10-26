import Image from "next/image";
import RevealBlock from "./animate/revealBlock";

export default function CardInfo(props: {
  index: number;
  image: string;
  title: string;
  description: string;
}) {
  return (
    <RevealBlock
      direction={props.index % 2 === 0 ? "up" : "down"}
      className="h-full"
    >
      <article className="h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-1">
        <Image
          src={props.image}
          alt={props.title}
          width={600}
          height={360}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-48 w-full object-cover"
        />
        <div className="p-5">
          <h3 className="mb-3 text-lg font-bold leading-tight">
            {props.title}
          </h3>
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            {props.description}
          </p>
        </div>
      </article>
    </RevealBlock>
  );
}
