"use client";

import { useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { getTest } from "@/lib/tests";
import { AttemptDraft } from "@/lib/flow";
import { clearDraft, loadDraft, saveAttempt } from "@/lib/storage";
import { gradeSkill, gradeWriting } from "@/lib/grading";
import { averageBand } from "@/lib/bandScore";
import { Attempt } from "@/lib/types";

export default function FinishTestPage() {
  const { testId } = useParams<{ testId: string }>();
  const router = useRouter();
  const test = getTest(testId);
  // Guards against React Strict Mode's double effect invocation in dev:
  // without this, the second run would find the draft already cleared by
  // the first run and incorrectly bounce back to the test overview.
  const finalizedRef = useRef(false);

  useEffect(() => {
    if (!test || finalizedRef.current) return;
    const draft = loadDraft<AttemptDraft>(testId);
    if (!draft) {
      router.replace(`/tests/${testId}`);
      return;
    }
    finalizedRef.current = true;

    const listening = test.listening
      ? gradeSkill("listening", test.listening.parts.flatMap((p) => p.questions), draft.listeningAnswers ?? {})
      : undefined;

    const reading = test.reading
      ? gradeSkill("reading", test.reading.passages.flatMap((p) => p.questions), draft.readingAnswers ?? {})
      : undefined;

    const writing = test.writing ? gradeWriting(test.writing.tasks, draft.writingSubmissions ?? []) : undefined;

    const bands = [listening?.band, reading?.band, writing?.band].filter((b): b is number => b != null);

    const attempt: Attempt = {
      id: crypto.randomUUID(),
      testId: test.id,
      testTitle: test.title,
      startedAt: draft.startedAt,
      completedAt: new Date().toISOString(),
      listening,
      reading,
      writing,
      overallBand: averageBand(bands),
    };

    saveAttempt(attempt);
    clearDraft(testId);
    router.replace(`/results/${attempt.id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testId]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-muted">Scoring your test…</p>
    </div>
  );
}
