import { listeningBand, readingBand } from "./bandScore";
import {
  Question,
  SkillResult,
  TagStat,
  WritingCriterionKey,
  WritingResult,
  WritingTask,
  WritingTaskResult,
} from "./types";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:'"]/g, "")
    .replace(/\s+/g, " ");
}

export function isCorrect(question: Question, answer: string | undefined): boolean {
  if (!answer) return false;
  if (question.kind === "choice") {
    return answer === question.correct;
  }
  const normalizedAnswer = normalize(answer);
  return question.correct.some((c) => normalize(c) === normalizedAnswer);
}

export function gradeSkill(
  skill: "listening" | "reading",
  questions: Question[],
  answers: Record<string, string>
): SkillResult {
  const tagStats: Record<string, TagStat> = {};
  let rawScore = 0;

  for (const q of questions) {
    const stat = tagStats[q.tag] ?? { correct: 0, total: 0 };
    stat.total += 1;
    const correct = isCorrect(q, answers[q.id]);
    if (correct) {
      stat.correct += 1;
      rawScore += 1;
    }
    tagStats[q.tag] = stat;
  }

  const maxScore = questions.length;
  // Scale raw score to a /40 equivalent so shorter practice sets still map
  // onto the standard band-conversion tables.
  const scaledTo40 = maxScore > 0 ? Math.round((rawScore / maxScore) * 40) : 0;
  const band = skill === "listening" ? listeningBand(scaledTo40) : readingBand(scaledTo40);

  return { rawScore, maxScore, band, tagStats, answers };
}

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function gradeWriting(
  tasks: WritingTask[],
  submissions: { taskNumber: 1 | 2; text: string; ratings: Record<WritingCriterionKey, number> }[]
): WritingResult {
  const taskResults: WritingTaskResult[] = submissions.map((sub) => {
    const ratingValues = Object.values(sub.ratings);
    const band =
      ratingValues.length > 0
        ? Math.round((ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length) * 2) / 2
        : 0;
    return {
      taskNumber: sub.taskNumber,
      text: sub.text,
      wordCount: wordCount(sub.text),
      ratings: sub.ratings,
      band,
    };
  });

  // Task 2 counts for roughly twice as much as Task 1 in real IELTS writing.
  const weighted = taskResults.reduce((sum, t) => sum + t.band * (t.taskNumber === 2 ? 2 : 1), 0);
  const totalWeight = taskResults.reduce((sum, t) => sum + (t.taskNumber === 2 ? 2 : 1), 0);
  const band = totalWeight > 0 ? Math.round((weighted / totalWeight) * 2) / 2 : 0;

  return { tasks: taskResults, band };
}
