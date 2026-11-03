"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { loadAttempts } from "@/lib/storage";
import { buildDashboardStats, DashboardStats } from "@/lib/analytics";
import BandBadge from "@/components/BandBadge";

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    setStats(buildDashboardStats(loadAttempts()));
  }, []);

  if (!stats) return <div className="p-10 text-muted">Loading…</div>;

  if (stats.totalAttempts === 0) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-16 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome to your IELTS prep dashboard</h1>
        <p className="mt-2 text-muted">
          Take your first mock test to start tracking your band scores and see what to work on.
        </p>
        <Link
          href="/tests"
          className="mt-6 inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
        >
          Browse Tests
        </Link>
      </div>
    );
  }

  const chartData = stats.trend.map((t, i) => ({
    attempt: `#${i + 1}`,
    Overall: t.overall,
    Listening: t.listening,
    Reading: t.reading,
    Writing: t.writing,
  }));

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <Link href="/tests" className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90">
          Take a test
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
        <StatCard label="Attempts" value={String(stats.totalAttempts)} />
        <StatCard label="Avg. Overall" bandValue={stats.averageOverall} />
        <StatCard label="Avg. Listening" bandValue={stats.averageListening} />
        <StatCard label="Avg. Reading" bandValue={stats.averageReading} />
        <StatCard label="Avg. Writing" bandValue={stats.averageWriting} />
      </div>

      <div className="mt-8 rounded-lg border border-border bg-surface p-4">
        <h2 className="mb-3 font-semibold">Band score trend</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="attempt" fontSize={12} />
              <YAxis domain={[0, 9]} fontSize={12} />
              <Tooltip />
              <Line type="monotone" dataKey="Overall" stroke="#1d4ed8" strokeWidth={2.5} dot />
              <Line type="monotone" dataKey="Listening" stroke="#059669" strokeWidth={1.5} dot={false} />
              <Line type="monotone" dataKey="Reading" stroke="#d97706" strokeWidth={1.5} dot={false} />
              <Line type="monotone" dataKey="Writing" stroke="#db2777" strokeWidth={1.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface p-4">
          <h2 className="mb-3 font-semibold">What to work on</h2>
          {stats.weakAreas.length === 0 ? (
            <p className="text-sm text-muted">Complete a Listening or Reading test to see a breakdown.</p>
          ) : (
            <div className="flex flex-col gap-2">
              {stats.weakAreas.slice(0, 6).map((area) => (
                <div key={area.tag} className="flex items-center gap-3">
                  <div className="w-36 shrink-0 truncate text-sm">{area.label}</div>
                  <div className="h-2 flex-1 rounded-full bg-black/5 dark:bg-white/10">
                    <div
                      className={`h-2 rounded-full ${area.accuracy < 50 ? "bg-red-500" : area.accuracy < 75 ? "bg-amber-500" : "bg-emerald-500"}`}
                      style={{ width: `${area.accuracy}%` }}
                    />
                  </div>
                  <div className="w-16 shrink-0 text-right text-sm font-mono text-muted">
                    {area.correct}/{area.total}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-lg border border-border bg-surface p-4">
          <h2 className="mb-3 font-semibold">Recent attempts</h2>
          <div className="flex flex-col gap-2">
            {stats.recentAttempts.slice(0, 5).map((a) => (
              <Link
                key={a.id}
                href={`/results/${a.id}`}
                className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-black/5 dark:hover:bg-white/5"
              >
                <div>
                  <p className="font-medium">{a.testTitle}</p>
                  <p className="text-xs text-muted">{new Date(a.completedAt).toLocaleDateString()}</p>
                </div>
                <BandBadge band={a.overallBand} size="sm" />
              </Link>
            ))}
          </div>
          <Link href="/history" className="mt-3 inline-block text-sm font-medium text-accent hover:underline">
            View full history →
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, bandValue }: { label: string; value?: string; bandValue?: number }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4 text-center">
      <p className="text-xs font-medium text-muted">{label}</p>
      <div className="mt-1 flex justify-center">
        {bandValue !== undefined ? (
          bandValue > 0 ? <BandBadge band={bandValue} /> : <span className="text-sm text-muted">—</span>
        ) : (
          <span className="text-xl font-semibold">{value}</span>
        )}
      </div>
    </div>
  );
}
