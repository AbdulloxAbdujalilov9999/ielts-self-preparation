import { notFound } from "next/navigation";
import { getTest } from "@/lib/tests";
import { getSkillOrder, skillRoute } from "@/lib/flow";
import StartTestButton from "@/components/StartTestButton";

export default async function TestOverviewPage({
  params,
}: {
  params: Promise<{ testId: string }>;
}) {
  const { testId } = await params;
  const test = getTest(testId);
  if (!test) notFound();

  const order = getSkillOrder(test);
  const firstRoute = skillRoute(test.id, order[0]);

  const sections = [
    test.listening && {
      skill: "Listening",
      detail: `${test.listening.parts.length} parts · ${test.listening.parts.reduce((n, p) => n + p.questions.length, 0)} questions`,
      minutes: test.listening.durationMinutes,
    },
    test.reading && {
      skill: "Reading",
      detail: `${test.reading.passages.length} passages · ${test.reading.passages.reduce((n, p) => n + p.questions.length, 0)} questions`,
      minutes: test.reading.durationMinutes,
    },
    test.writing && {
      skill: "Writing",
      detail: `${test.writing.tasks.length} task${test.writing.tasks.length > 1 ? "s" : ""}`,
      minutes: test.writing.durationMinutes,
    },
  ].filter(Boolean) as { skill: string; detail: string; minutes: number }[];

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">{test.title}</h1>
      <p className="mt-1 text-muted">{test.subtitle}</p>

      <div className="mt-6 overflow-hidden rounded-lg border border-border">
        {sections.map((s, i) => (
          <div
            key={s.skill}
            className={`flex items-center justify-between px-4 py-3 ${i > 0 ? "border-t border-border" : ""} bg-surface`}
          >
            <div>
              <p className="font-medium">{s.skill}</p>
              <p className="text-sm text-muted">{s.detail}</p>
            </div>
            <p className="text-sm font-medium text-muted">{s.minutes} min</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200">
        Sections run back to back, just like the real computer-delivered test: Listening → Reading → Writing.
        Each section is timed and submits automatically when time runs out.
      </div>

      <div className="mt-6">
        <StartTestButton testId={test.id} firstRoute={firstRoute} />
      </div>
    </div>
  );
}
