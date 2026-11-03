import { TestDefinition } from "../types";
import { mockTest1Listening } from "./mockTest1Listening";
import { mockTest1Reading } from "./mockTest1Reading";
import { mockTest1Writing } from "./mockTest1Writing";
import { mockTest2Listening } from "./mockTest2Listening";
import { mockTest2Reading } from "./mockTest2Reading";
import { mockTest2Writing } from "./mockTest2Writing";
import { mockTest3Listening } from "./mockTest3Listening";
import { mockTest3Reading } from "./mockTest3Reading";
import { mockTest3Writing } from "./mockTest3Writing";
import {
  quickDiagnosticListening,
  quickDiagnosticReading,
  quickDiagnosticWriting,
} from "./quickDiagnostic";

export const TESTS: TestDefinition[] = [
  {
    id: "mock-test-1",
    title: "Full Mock Exam 1",
    subtitle: "Listening (40Q) · Reading (40Q) · Writing (2 tasks) — full-length, exam timing",
    skills: ["listening", "reading", "writing"],
    listening: mockTest1Listening,
    reading: mockTest1Reading,
    writing: mockTest1Writing,
  },
  {
    id: "mock-test-2",
    title: "Full Mock Exam 2",
    subtitle: "Listening (40Q) · Reading (40Q) · Writing (2 tasks) — full-length, exam timing",
    skills: ["listening", "reading", "writing"],
    listening: mockTest2Listening,
    reading: mockTest2Reading,
    writing: mockTest2Writing,
  },
  {
    id: "mock-test-3",
    title: "Full Mock Exam 3",
    subtitle: "Listening (40Q) · Reading (40Q) · Writing (2 tasks) — full-length, exam timing",
    skills: ["listening", "reading", "writing"],
    listening: mockTest3Listening,
    reading: mockTest3Reading,
    writing: mockTest3Writing,
  },
  {
    id: "quick-diagnostic",
    title: "Quick Diagnostic",
    subtitle: "Listening Part 1 (10Q) · Reading (7Q) · Writing Task 2 — a short warm-up test",
    skills: ["listening", "reading", "writing"],
    listening: quickDiagnosticListening,
    reading: quickDiagnosticReading,
    writing: quickDiagnosticWriting,
  },
];

export function getTest(id: string): TestDefinition | undefined {
  return TESTS.find((t) => t.id === id);
}
