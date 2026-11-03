export type Skill = "listening" | "reading" | "writing";

export type QuestionTag =
  | "multiple-choice"
  | "true-false-not-given"
  | "yes-no-not-given"
  | "matching-headings"
  | "matching-information"
  | "matching-features"
  | "sentence-completion"
  | "summary-completion"
  | "table-completion"
  | "form-completion"
  | "note-completion"
  | "short-answer"
  | "diagram-labeling"
  | "flow-chart-completion"
  | "map-labeling";

export const TAG_LABELS: Record<QuestionTag, string> = {
  "multiple-choice": "Multiple Choice",
  "true-false-not-given": "True / False / Not Given",
  "yes-no-not-given": "Yes / No / Not Given",
  "matching-headings": "Matching Headings",
  "matching-information": "Matching Information",
  "matching-features": "Matching Features",
  "sentence-completion": "Sentence Completion",
  "summary-completion": "Summary Completion",
  "table-completion": "Table Completion",
  "form-completion": "Form Completion",
  "note-completion": "Note Completion",
  "short-answer": "Short Answer",
  "diagram-labeling": "Diagram Labeling",
  "flow-chart-completion": "Flow-Chart Completion",
  "map-labeling": "Map Labeling",
};

interface BaseQuestion {
  id: string;
  number: number;
  tag: QuestionTag;
  prompt: string;
  maxWords?: number;
}

export interface ChoiceQuestion extends BaseQuestion {
  kind: "choice";
  options: { value: string; label: string }[];
  correct: string;
}

export interface TextQuestion extends BaseQuestion {
  kind: "text";
  correct: string[];
}

export type Question = ChoiceQuestion | TextQuestion;

export interface ListeningPart {
  partNumber: 1 | 2 | 3 | 4;
  title: string;
  context: string;
  script: string;
  questions: Question[];
}

export interface ReadingPassage {
  passageNumber: 1 | 2 | 3;
  title: string;
  paragraphs: { label: string; text: string }[];
  questions: Question[];
}

export interface WritingTask {
  taskNumber: 1 | 2;
  prompt: string;
  chart?: {
    kind: "bar" | "line" | "pie";
    data: { name: string; value: number; series?: string }[];
    caption: string;
  };
  minWords: number;
  suggestedMinutes: number;
}

export interface TestDefinition {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
  listening?: { parts: ListeningPart[]; durationMinutes: number };
  reading?: { passages: ReadingPassage[]; durationMinutes: number };
  writing?: { tasks: WritingTask[]; durationMinutes: number };
}

export const WRITING_CRITERIA = [
  { key: "taskAchievement", label: "Task Achievement / Response" },
  { key: "coherence", label: "Coherence & Cohesion" },
  { key: "lexical", label: "Lexical Resource" },
  { key: "grammar", label: "Grammatical Range & Accuracy" },
] as const;

export type WritingCriterionKey = (typeof WRITING_CRITERIA)[number]["key"];

export interface TagStat {
  correct: number;
  total: number;
}

export interface SkillResult {
  rawScore: number;
  maxScore: number;
  band: number;
  tagStats: Record<string, TagStat>;
  answers: Record<string, string>;
}

export interface WritingTaskResult {
  taskNumber: 1 | 2;
  text: string;
  wordCount: number;
  ratings: Record<WritingCriterionKey, number>;
  band: number;
}

export interface WritingResult {
  tasks: WritingTaskResult[];
  band: number;
}

export interface Attempt {
  id: string;
  testId: string;
  testTitle: string;
  startedAt: string;
  completedAt: string;
  listening?: SkillResult;
  reading?: SkillResult;
  writing?: WritingResult;
  overallBand: number;
}
