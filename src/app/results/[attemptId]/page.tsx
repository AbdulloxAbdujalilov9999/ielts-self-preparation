"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { loadAttempts } from "@/lib/storage";
import { Attempt, TAG_LABELS, WRITING_CRITERIA } from "@/lib/types";
import BandBadge from "@/components/BandBadge";

export default function ResultsPage() {
  const { attemptId } = useParams<{ attemptId: string }>();
  const [attempt, setAttempt] = useState<Attempt | null | undefined>(undefined);

  useEffect(() => {
    const found = loadAttempts().find((a) => a.id === attemptId);
    setAttempt(found ?? null);
  }, [attemptId]);

  if (attempt === undefined) return <div className="p-10 text-muted">Loading…</div>;
  if (attempt === null) return <div className="p-10">Result not found.</div>;

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <p className="text-sm text-muted">{attempt.testTitle}</p>
      <div className="mt-1 flex items-center gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">Your Results</h1>
        <BandBadge band={attempt.overallBand} size="lg" />
      </div>
      <p className="mt-1 text-sm text-muted">
        Overall band (average of completed skills) · {new Date(attempt.completedAt).toLocaleString()}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {attempt.listening && (
          <ScoreCard label="Listening" band={attempt.listening.band} detail={`${attempt.listening.rawScore}/${attempt.listening.maxScore} correct`} />
        )}
        {attempt.reading && (
          <ScoreCard label="Reading" band={attempt.reading.band} detail={`${attempt.reading.rawScore}/${attempt.reading.maxScore} correct`} />
        )}
        {attempt.writing && (
          <ScoreCard label="Writing" band={attempt.writing.band} detail={`${attempt.writing.tasks.length} task(s) self-assessed`} />
        )}
      </div>

      {(attempt.listening || attempt.reading) && (
        <div className="mt-8">
          <h2 className="mb-3 text-lg font-semibold">Question-type breakdown</h2>
          <div className="flex flex-col gap-2">
            {[attempt.listening, attempt.reading].filter(Boolean).flatMap((skill, skillIdx) =>
              Object.entries(skill!.tagStats).map(([tag, stat]) => (
                <div key={`${skillIdx}-${tag}`} className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2 text-sm">
                  <span>{TAG_LABELS[tag as keyof typeof TAG_LABELS] ?? tag}</span>
                  <span className="font-mono text-muted">
                    {stat.correct}/{stat.total}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {attempt.writing && (
        <div className="mt-8">
          <h2 className="mb-3 text-lg font-semibold">Writing</h2>
          <div className="flex flex-col gap-4">
            {attempt.writing.tasks.map((task) => (
              <div key={task.taskNumber} className="rounded-lg border border-border bg-surface p-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-medium">Task {task.taskNumber} — {task.wordCount} words</p>
                  <BandBadge band={task.band} size="sm" />
                </div>
                <div className="mb-3 grid grid-cols-2 gap-2 text-xs text-muted">
                  {WRITING_CRITERIA.map((c) => (
                    <div key={c.key} className="flex justify-between">
                      <span>{c.label}</span>
                      <span className="font-mono">{task.ratings[c.key]}</span>
                    </div>
                  ))}
                </div>
                <details className="text-sm">
                  <summary className="cursor-pointer text-muted">View response</summary>
                  <p className="mt-2 whitespace-pre-wrap">{task.text || "(no response written)"}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 flex gap-3">
        <Link href="/" className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90">
          Go to Dashboard
        </Link>
        <Link href="/tests" className="rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/5">
          Back to Tests
        </Link>
      </div>
    </div>
  );
}

function ScoreCard({ label, band, detail }: { label: string; band: number; detail: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4 text-center">
      <p className="text-sm font-medium text-muted">{label}</p>
      <div className="mt-2 flex justify-center">
        <BandBadge band={band} size="lg" />
      </div>
      <p className="mt-2 text-xs text-muted">{detail}</p>
    </div>
  );
}
