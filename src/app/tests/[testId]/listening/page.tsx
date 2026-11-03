"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getTest } from "@/lib/tests";
import { afterSkillRoute, AttemptDraft } from "@/lib/flow";
import { loadDraft, saveDraft } from "@/lib/storage";
import Timer from "@/components/Timer";
import QuestionNav from "@/components/QuestionNav";
import QuestionItem from "@/components/QuestionItem";
import ListeningPlayer from "@/components/ListeningPlayer";

export default function ListeningTestPage() {
  const { testId } = useParams<{ testId: string }>();
  const router = useRouter();
  const test = getTest(testId);

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!test) return;
    const draft = loadDraft<AttemptDraft>(testId) ?? { testId, startedAt: new Date().toISOString() };
    setAnswers(draft.listeningAnswers ?? {});
    const firstQ = test.listening?.parts[0]?.questions[0];
    setCurrentId(firstQ?.id ?? null);
    setReady(true);
  }, [test, testId]);

  const allQuestions = useMemo(
    () => (test?.listening?.parts.flatMap((p) => p.questions) ?? []),
    [test]
  );

  if (!test || !test.listening) {
    return <div className="p-10">Test not found.</div>;
  }
  if (!ready) {
    return <div className="p-10 text-muted">Loading…</div>;
  }

  const setAnswer = (id: string, value: string) => {
    setAnswers((prev) => {
      const next = { ...prev, [id]: value };
      const draft = loadDraft<AttemptDraft>(testId) ?? { testId, startedAt: new Date().toISOString() };
      saveDraft(testId, { ...draft, listeningAnswers: next });
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
    saveDraft(testId, { ...draft, listeningAnswers: answers });
    router.push(afterSkillRoute(test, "listening"));
  };

  const answeredCount = allQuestions.filter((q) => answers[q.id]).length;

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between border-b border-border bg-surface px-6 py-3">
        <div>
          <p className="font-semibold">{test.title} — Listening</p>
          <p className="text-xs text-muted">
            {answeredCount} / {allQuestions.length} answered
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Timer
            storageKey={`${testId}-listening`}
            durationMinutes={test.listening.durationMinutes}
            onExpire={finishSection}
          />
          <button
            onClick={finishSection}
            className="rounded-md bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
          >
            Submit Listening
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto px-6 py-6">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            {test.listening.parts.map((part) => (
              <section key={part.partNumber}>
                <h2 className="mb-1 text-lg font-semibold">
                  Part {part.partNumber}: {part.title}
                </h2>
                <p className="mb-3 text-sm text-muted">{part.context}</p>
                <ListeningPlayer script={part.script} title={`Part ${part.partNumber} audio`} />
                <div className="mt-4 flex flex-col gap-3">
                  {part.questions.map((q) => (
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
              </section>
            ))}
          </div>
        </main>

        <aside className="w-64 shrink-0 overflow-y-auto border-l border-border bg-surface p-4">
          <p className="mb-2 text-sm font-medium">Question navigator</p>
          <QuestionNav
            items={allQuestions.map((q) => ({ id: q.id, number: q.number }))}
            answers={answers}
            flagged={flagged}
            currentId={currentId}
            onJump={(id) => {
              setCurrentId(id);
              document.getElementById(`q-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          />
        </aside>
      </div>
    </div>
  );
}
