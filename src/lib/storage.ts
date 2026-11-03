import { Attempt } from "./types";

const ATTEMPTS_KEY = "ielts-prep:attempts";
const DRAFT_PREFIX = "ielts-prep:draft:";

export function loadAttempts(): Attempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(ATTEMPTS_KEY);
    return raw ? (JSON.parse(raw) as Attempt[]) : [];
  } catch {
    return [];
  }
}

export function saveAttempt(attempt: Attempt): void {
  if (typeof window === "undefined") return;
  const attempts = loadAttempts();
  attempts.push(attempt);
  window.localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts));
}

export function deleteAttempt(id: string): void {
  if (typeof window === "undefined") return;
  const attempts = loadAttempts().filter((a) => a.id !== id);
  window.localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts));
}

export function clearAllAttempts(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ATTEMPTS_KEY);
}

// Draft storage lets an in-progress attempt (listening -> reading -> writing)
// survive a page refresh without needing a backend.
export function saveDraft<T>(testId: string, data: T): void {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(DRAFT_PREFIX + testId, JSON.stringify(data));
}

export function loadDraft<T>(testId: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(DRAFT_PREFIX + testId);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

export function clearDraft(testId: string): void {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(DRAFT_PREFIX + testId);
}
