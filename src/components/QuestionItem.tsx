import { Question } from "@/lib/types";

export default function QuestionItem({
  question,
  answer,
  onChange,
  flagged,
  onToggleFlag,
}: {
  question: Question;
  answer: string | undefined;
  onChange: (value: string) => void;
  flagged: boolean;
  onToggleFlag: () => void;
}) {
  return (
    <div
      id={`q-${question.id}`}
      className="rounded-lg border border-border bg-surface p-4 scroll-mt-24"
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <p className="text-sm font-medium">
          <span className="mr-2 inline-flex h-5 min-w-5 items-center justify-center rounded bg-accent px-1 text-xs text-accent-foreground">
            {question.number}
          </span>
          {question.prompt}
        </p>
        <button
          onClick={onToggleFlag}
          className={`shrink-0 rounded px-1.5 py-0.5 text-xs ${
            flagged ? "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300" : "text-muted hover:bg-black/5 dark:hover:bg-white/5"
          }`}
        >
          🚩 {flagged ? "Flagged" : "Flag"}
        </button>
      </div>

      {question.kind === "choice" ? (
        <div className="flex flex-col gap-1.5">
          {question.options.map((opt) => (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-colors ${
                answer === opt.value
                  ? "border-accent bg-accent/10"
                  : "border-border hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              <input
                type="radio"
                name={question.id}
                value={opt.value}
                checked={answer === opt.value}
                onChange={() => onChange(opt.value)}
                className="accent-[var(--accent)]"
              />
              {opt.label}
            </label>
          ))}
        </div>
      ) : (
        <input
          type="text"
          value={answer ?? ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your answer"
          className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm outline-none focus:border-accent"
        />
      )}
    </div>
  );
}
