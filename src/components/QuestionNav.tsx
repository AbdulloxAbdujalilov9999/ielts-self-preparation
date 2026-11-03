export default function QuestionNav({
  items,
  answers,
  flagged,
  currentId,
  onJump,
}: {
  items: { id: string; number: number }[];
  answers: Record<string, string>;
  flagged: Set<string>;
  currentId: string | null;
  onJump: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => {
        const answered = Boolean(answers[item.id]);
        const isFlagged = flagged.has(item.id);
        const isCurrent = item.id === currentId;
        return (
          <button
            key={item.id}
            onClick={() => onJump(item.id)}
            className={`relative flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium transition-colors ${
              isCurrent
                ? "bg-accent text-accent-foreground"
                : answered
                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                : "bg-black/5 text-foreground hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10"
            }`}
            title={isFlagged ? "Flagged for review" : undefined}
          >
            {item.number}
            {isFlagged && (
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-orange-500" />
            )}
          </button>
        );
      })}
    </div>
  );
}
