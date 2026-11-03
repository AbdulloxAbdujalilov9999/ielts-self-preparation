"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Attempt } from "@/lib/types";
import { deleteAttempt, loadAttempts } from "@/lib/storage";
import BandBadge from "@/components/BandBadge";

export default function HistoryPage() {
  const [attempts, setAttempts] = useState<Attempt[] | null>(null);

  useEffect(() => {
    setAttempts([...loadAttempts()].reverse());
  }, []);

  if (!attempts) return <div className="p-10 text-muted">Loading…</div>;

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Attempt History</h1>
      <p className="mt-1 text-muted">Every test you&apos;ve completed, stored locally in this browser.</p>

      {attempts.length === 0 ? (
        <p className="mt-6 text-muted">No attempts yet. Head to the Test Library to take your first test.</p>
      ) : (
        <div className="mt-6 flex flex-col gap-3">
          {attempts.map((a) => (
            <div key={a.id} className="flex items-center justify-between rounded-lg border border-border bg-surface p-4">
              <div>
                <p className="font-medium">{a.testTitle}</p>
                <p className="text-sm text-muted">{new Date(a.completedAt).toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  {a.listening && <BandBadge band={a.listening.band} size="sm" />}
                  {a.reading && <BandBadge band={a.reading.band} size="sm" />}
                  {a.writing && <BandBadge band={a.writing.band} size="sm" />}
                </div>
                <BandBadge band={a.overallBand} />
                <Link href={`/results/${a.id}`} className="text-sm font-medium text-accent hover:underline">
                  View
                </Link>
                <button
                  onClick={() => {
                    deleteAttempt(a.id);
                    setAttempts((prev) => prev?.filter((x) => x.id !== a.id) ?? null);
                  }}
                  className="text-sm text-muted hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
