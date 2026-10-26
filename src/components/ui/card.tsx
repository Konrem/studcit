import Image from "next/image";

export default function Card(props: { icon: string; title: string; subtitle: string; }) {
  return (
    <article className="about-value-card group relative isolate flex h-full min-h-56 flex-col items-center rounded-2xl border border-[var(--border)] p-4 pt-5 text-[var(--text-primary)] shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-1">
      <span className="relative z-10 mb-3 flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]">
        <Image
          className="size-8 object-contain transition-transform duration-200 group-hover:scale-110"
          src={props.icon}
          alt=""
          width={32}
          height={32}
        />
      </span>
      <h3 className="relative z-10 flex min-h-14 w-full items-center justify-center text-center text-base font-bold leading-tight">
        {props.title}
      </h3>
      <p className="relative z-10 mt-2 w-full flex-1 text-center text-sm leading-relaxed text-[var(--text-secondary)]">
        {props.subtitle}
      </p>
    </article>
  );
}
