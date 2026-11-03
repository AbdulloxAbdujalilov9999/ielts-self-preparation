"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getTest } from "@/lib/tests";
import { afterSkillRoute, AttemptDraft } from "@/lib/flow";
import { loadDraft, saveDraft } from "@/lib/storage";
import Timer from "@/components/Timer";
import QuestionNav from "@/components/QuestionNav";
import QuestionItem from "@/components/QuestionItem";

export default function ReadingTestPage() {
  const { testId } = useParams<{ testId: string }>();
  const router = useRouter();
  const test = getTest(testId);

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [activeIdx, setActiveIdx] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!test) return;
    const draft = loadDraft<AttemptDraft>(testId) ?? { testId, startedAt: new Date().toISOString() };
    setAnswers(draft.readingAnswers ?? {});
    setReady(true);
  }, [test, testId]);

  const allQuestions = useMemo(
    () => test?.reading?.passages.flatMap((p) => p.questions) ?? [],
    [test]
  );

  if (!test || !test.reading) {
    return <div className="p-10">Test not found.</div>;
  }
  if (!ready) {
    return <div className="p-10 text-muted">Loading…</div>;
  }

  const passage = test.reading.passages[activeIdx];

  const setAnswer = (id: string, value: string) => {
    setAnswers((prev) => {
      const next = { ...prev, [id]: value };
      const draft = loadDraft<AttemptDraft>(testId) ?? { testId, startedAt: new Date().toISOString() };
      saveDraft(testId, { ...draft, readingAnswers: next });
      return next;
    });
  };

  const toggleFlag = (id: string) => {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const finishSection = () => {
    const draft = loadDraft<AttemptDraft>(testId) ?? { testId, startedAt: new Date().toISOString() };
    saveDraft(testId, { ...draft, readingAnswers: answers });
    router.push(afterSkillRoute(test, "reading"));
  };

  const answeredCount = allQuestions.filter((q) => answers[q.id]).length;

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between border-b border-border bg-surface px-6 py-3">
        <div>
          <p className="font-semibold">{test.title} — Reading</p>
          <p className="text-xs text-muted">
            {answeredCount} / {allQuestions.length} answered
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Timer
            storageKey={`${testId}-reading`}
            durationMinutes={test.reading.durationMinutes}
            onExpire={finishSection}
          />
          <button
            onClick={finishSection}
            className="rounded-md bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
          >
            Submit Reading
          </button>
        </div>
      </header>

      <div className="flex items-center gap-1 border-b border-border bg-surface px-6 py-2">
        {test.reading.passages.map((p, i) => (
          <button
            key={p.passageNumber}
            onClick={() => setActiveIdx(i)}
            className={`rounded-md px-3 py-1 text-sm font-medium ${
              i === activeIdx ? "bg-accent text-accent-foreground" : "text-muted hover:bg-black/5 dark:hover:bg-white/5"
            }`}
          >
            Passage {p.passageNumber}
          </button>
        ))}
      </div>

      <div className="flex flex-1 overflow-hidden">
        <section className="w-1/2 overflow-y-auto border-r border-border px-6 py-6">
          <h2 className="mb-3 text-lg font-semibold">{passage.title}</h2>
          <div className="flex flex-col gap-3 text-sm leading-relaxed">
            {passage.paragraphs.map((p) => (
              <p key={p.label}>
                <span className="mr-1 font-semibold">{p.label}.</span>
                {p.text}
              </p>
            ))}
          </div>
        </section>

        <main className="w-1/2 overflow-y-auto px-6 py-6">
          <div className="flex flex-col gap-3">
            {passage.questions.map((q) => (
              <QuestionItem
                key={q.id}
                question={q}
                answer={answers[q.id]}
                onChange={(v) => setAnswer(q.id, v)}
                flagged={flagged.has(q.id)}
                onToggleFlag={() => toggleFlag(q.id)}
              />
            ))}
          </div>
        </main>

        <aside className="w-56 shrink-0 overflow-y-auto border-l border-border bg-surface p-4">
          <p className="mb-2 text-sm font-medium">All questions</p>
          <QuestionNav
            items={allQuestions.map((q) => ({ id: q.id, number: q.number }))}
            answers={answers}
            flagged={flagged}
            currentId={null}
            onJump={(id) => {
              const idx = test.reading!.passages.findIndex((p) => p.questions.some((q) => q.id === id));
              if (idx >= 0) setActiveIdx(idx);
              setTimeout(() => {
                document.getElementById(`q-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
              }, 50);
            }}
          />
        </aside>
      </div>
    </div>
  );
}
