import { Attempt, QuestionTag, TAG_LABELS } from "./types";

export interface TrendPoint {
  date: string;
  attemptId: string;
  testTitle: string;
  overall: number;
  listening?: number;
  reading?: number;
  writing?: number;
}

export interface WeakArea {
  tag: QuestionTag;
  label: string;
  correct: number;
  total: number;
  accuracy: number; // 0-100
}

export interface DashboardStats {
  totalAttempts: number;
  averageOverall: number;
  averageListening: number;
  averageReading: number;
  averageWriting: number;
  bestOverall: number;
  trend: TrendPoint[];
  weakAreas: WeakArea[];
  recentAttempts: Attempt[];
}

function average(nums: number[]): number {
  if (nums.length === 0) return 0;
  return Math.round((nums.reduce((a, b) => a + b, 0) / nums.length) * 10) / 10;
}

export function buildDashboardStats(attempts: Attempt[]): DashboardStats {
  const sorted = [...attempts].sort(
    (a, b) => new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime()
  );

  const trend: TrendPoint[] = sorted.map((a) => ({
    date: a.completedAt,
    attemptId: a.id,
    testTitle: a.testTitle,
    overall: a.overallBand,
    listening: a.listening?.band,
    reading: a.reading?.band,
    writing: a.writing?.band,
  }));

  const tagTotals: Record<string, { correct: number; total: number }> = {};
  for (const a of attempts) {
    for (const skillResult of [a.listening, a.reading]) {
      if (!skillResult) continue;
      for (const [tag, stat] of Object.entries(skillResult.tagStats)) {
        const entry = tagTotals[tag] ?? { correct: 0, total: 0 };
        entry.correct += stat.correct;
        entry.total += stat.total;
        tagTotals[tag] = entry;
      }
    }
  }

  const weakAreas: WeakArea[] = Object.entries(tagTotals)
    .map(([tag, stat]) => ({
      tag: tag as QuestionTag,
      label: TAG_LABELS[tag as QuestionTag] ?? tag,
      correct: stat.correct,
      total: stat.total,
      accuracy: stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0,
    }))
    .sort((a, b) => a.accuracy - b.accuracy);

  const recentAttempts = [...sorted].reverse().slice(0, 10);

  return {
    totalAttempts: attempts.length,
    averageOverall: average(attempts.map((a) => a.overallBand)),
    averageListening: average(attempts.map((a) => a.listening?.band).filter((v): v is number => v != null)),
    averageReading: average(attempts.map((a) => a.reading?.band).filter((v): v is number => v != null)),
    averageWriting: average(attempts.map((a) => a.writing?.band).filter((v): v is number => v != null)),
    bestOverall: attempts.length > 0 ? Math.max(...attempts.map((a) => a.overallBand)) : 0,
    trend,
    weakAreas,
    recentAttempts,
  };
}
