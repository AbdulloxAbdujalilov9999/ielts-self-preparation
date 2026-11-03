import Link from "next/link";
import { TESTS } from "@/lib/tests";

export default function TestsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Test Library</h1>
      <p className="mt-1 text-muted">
        Mock content for now — original practice material, not copied from any copyrighted test book.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        {TESTS.map((test) => {
          const totalMinutes =
            (test.listening?.durationMinutes ?? 0) +
            (test.reading?.durationMinutes ?? 0) +
            (test.writing?.durationMinutes ?? 0);
          return (
            <Link
              key={test.id}
              href={`/tests/${test.id}`}
              className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">{test.title}</h2>
                <span className="text-sm text-muted">~{totalMinutes} min</span>
              </div>
              <p className="mt-1 text-sm text-muted">{test.subtitle}</p>
              <div className="mt-3 flex gap-2">
                {test.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs font-medium capitalize dark:bg-white/10"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
