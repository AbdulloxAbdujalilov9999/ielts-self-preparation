import { Skill, TestDefinition, WritingCriterionKey } from "./types";

const SKILL_ORDER: Skill[] = ["listening", "reading", "writing"];

export function getSkillOrder(test: TestDefinition): Skill[] {
  return SKILL_ORDER.filter((s) => test.skills.includes(s));
}

export function getNextSkill(test: TestDefinition, current: Skill): Skill | null {
  const order = getSkillOrder(test);
  const idx = order.indexOf(current);
  return idx >= 0 && idx < order.length - 1 ? order[idx + 1] : null;
}

export function skillRoute(testId: string, skill: Skill): string {
  return `/tests/${testId}/${skill}`;
}

export function finishRoute(testId: string): string {
  return `/tests/${testId}/finish`;
}

export function afterSkillRoute(test: TestDefinition, current: Skill): string {
  const next = getNextSkill(test, current);
  return next ? skillRoute(test.id, next) : finishRoute(test.id);
}

export interface WritingSubmission {
  taskNumber: 1 | 2;
  text: string;
  ratings: Record<WritingCriterionKey, number>;
}

export interface AttemptDraft {
  testId: string;
  startedAt: string;
  listeningAnswers?: Record<string, string>;
  readingAnswers?: Record<string, string>;
  writingSubmissions?: WritingSubmission[];
}
