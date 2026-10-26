import laptopContent from "@/app/content/laptopContent";

export default function ProjectStatus() {
  return (
    <aside className="flex h-full w-full flex-col bg-[var(--surface-strong)] p-3 text-[var(--text-on-strong)] sm:p-4">
      <div className="mb-3 border-b border-white/15 pb-3">
        <h2 className="text-xs font-semibold sm:text-sm">{laptopContent.title}</h2>
        <p className="mt-1 text-[10px] text-white/60 sm:text-xs">
          {laptopContent.subtitle}
        </p>
      </div>
      <ol className="flex min-h-0 flex-1 flex-col justify-between gap-2">
        {laptopContent.stages.map((stage, index) => (
          <li className="flex min-h-0 items-center gap-2" key={stage.title}>
            <span
              className={`flex size-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${
                stage.state === "done"
                  ? "bg-[var(--accent)] text-[var(--text-on-accent)]"
                  : stage.state === "current"
                    ? "border border-[var(--accent)] text-[var(--accent-text)]"
                    : "border border-white/25 text-white/60"
              }`}
            >
              {stage.state === "done" ? "✓" : String(index + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[10px] font-medium sm:text-xs">
                {stage.title}
              </span>
              <span
                className={`text-[9px] sm:text-[10px] ${
                  stage.state === "current"
                    ? "text-[var(--accent-text)]"
                    : "text-white/55"
                }`}
              >
                {laptopContent.states[stage.state]}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </aside>
  );
}
