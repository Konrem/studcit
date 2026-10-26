interface SectionHeadingProps {
  id: string;
  title: string;
  description?: string;
  note?: string;
}

export default function SectionHeading({
  id,
  title,
  description,
  note,
}: SectionHeadingProps) {
  return (
    <div className="mb-7 text-center md:mb-9">
      <h2 className="text-3xl font-bold md:text-4xl" id={id}>
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-[var(--text-secondary)] md:text-lg">
          {description}
        </p>
      )}
      {note && (
        <p className="mt-1 text-xs text-[var(--text-muted)]">{note}</p>
      )}
    </div>
  );
}
