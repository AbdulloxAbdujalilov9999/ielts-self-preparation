"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getTest } from "@/lib/tests";
import { afterSkillRoute, AttemptDraft, WritingSubmission } from "@/lib/flow";
import { loadDraft, saveDraft } from "@/lib/storage";
import { wordCount } from "@/lib/grading";
import { WRITING_CRITERIA, WritingCriterionKey } from "@/lib/types";
import Timer from "@/components/Timer";
import WritingChart from "@/components/WritingChart";

type Phase = "write" | "rate";

export default function WritingTestPage() {
  const { testId } = useParams<{ testId: string }>();
  const router = useRouter();
  const test = getTest(testId);

  const [texts, setTexts] = useState<Record<number, string>>({});
  const [ratings, setRatings] = useState<Record<number, Record<WritingCriterionKey, number>>>({});
  const [phase, setPhase] = useState<Phase>("write");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!test) return;
    const draft = loadDraft<AttemptDraft>(testId) ?? { testId, startedAt: new Date().toISOString() };
    const initialTexts: Record<number, string> = {};
    for (const sub of draft.writingSubmissions ?? []) {
      initialTexts[sub.taskNumber] = sub.text;
    }
    setTexts(initialTexts);
    setReady(true);
  }, [test, testId]);

  if (!test || !test.writing) {
    return <div className="p-10">Test not found.</div>;
  }
  if (!ready) {
    return <div className="p-10 text-muted">Loading…</div>;
  }

  const defaultRating = (): Record<WritingCriterionKey, number> => ({
    taskAchievement: 6,
    coherence: 6,
    lexical: 6,
    grammar: 6,
  });

  const goToRating = () => {
    setRatings((prev) => {
      const next = { ...prev };
      for (const task of test.writing!.tasks) {
        if (!next[task.taskNumber]) next[task.taskNumber] = defaultRating();
      }
      return next;
    });
    setPhase("rate");
  };

  const finish = () => {
    const submissions: WritingSubmission[] = test.writing!.tasks.map((task) => ({
      taskNumber: task.taskNumber,
      text: texts[task.taskNumber] ?? "",
      ratings: ratings[task.taskNumber] ?? defaultRating(),
    }));
    const draft = loadDraft<AttemptDraft>(testId) ?? { testId, startedAt: new Date().toISOString() };
    saveDraft(testId, { ...draft, writingSubmissions: submissions });
    router.push(afterSkillRoute(test, "writing"));
  };

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between border-b border-border bg-surface px-6 py-3">
        <p className="font-semibold">
          {test.title} — Writing {phase === "rate" && "· Self-assessment"}
        </p>
        <div className="flex items-center gap-3">
          <Timer
            storageKey={`${testId}-writing`}
            durationMinutes={test.writing.durationMinutes}
            onExpire={phase === "write" ? goToRating : finish}
          />
          {phase === "write" ? (
            <button
              onClick={goToRating}
              className="rounded-md bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Submit Writing
            </button>
          ) : (
            <button
              onClick={finish}
              className="rounded-md bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Finish Test
            </button>
          )}
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-6 py-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          {phase === "write" &&
            test.writing.tasks.map((task) => {
              const text = texts[task.taskNumber] ?? "";
              const count = wordCount(text);
              return (
                <section key={task.taskNumber} className="rounded-lg border border-border bg-surface p-4">
                  <h2 className="mb-2 font-semibold">
                    Task {task.taskNumber} · suggested {task.suggestedMinutes} min
                  </h2>
                  <p className="mb-3 text-sm">{task.prompt}</p>
                  {task.chart && <WritingChart chart={task.chart} />}
                  <textarea
                    value={text}
                    onChange={(e) => setTexts((prev) => ({ ...prev, [task.taskNumber]: e.target.value }))}
                    rows={12}
                    placeholder="Write your response here…"
                    className="mt-3 w-full resize-y rounded-md border border-border bg-background p-3 text-sm outline-none focus:border-accent"
                  />
                  <p className={`mt-1 text-xs ${count < task.minWords ? "text-red-600" : "text-emerald-600"}`}>
                    {count} words (minimum {task.minWords})
                  </p>
                </section>
              );
            })}

          {phase === "rate" && (
            <div className="flex flex-col gap-8">
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200">
                There&apos;s no automatic essay grader here, so rate your own response against the four official
                IELTS writing criteria as honestly as you can — or hand this to a teacher/study partner to rate
                instead before finishing.
              </div>
              {test.writing.tasks.map((task) => (
                <section key={task.taskNumber} className="rounded-lg border border-border bg-surface p-4">
                  <h2 className="mb-3 font-semibold">Task {task.taskNumber} self-assessment</h2>
                  <div className="flex flex-col gap-4">
                    {WRITING_CRITERIA.map((c) => (
                      <div key={c.key}>
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span>{c.label}</span>
                          <span className="font-mono font-semibold">
                            {ratings[task.taskNumber]?.[c.key] ?? 6}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={1}
                          max={9}
                          step={0.5}
                          value={ratings[task.taskNumber]?.[c.key] ?? 6}
                          onChange={(e) =>
                            setRatings((prev) => ({
                              ...prev,
                              [task.taskNumber]: {
                                ...(prev[task.taskNumber] ?? defaultRating()),
                                [c.key]: Number(e.target.value),
                              },
                            }))
                          }
                          className="w-full accent-[var(--accent)]"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
