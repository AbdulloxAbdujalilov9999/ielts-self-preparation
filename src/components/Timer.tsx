"use client";

import { useEffect, useRef, useState } from "react";

function formatTime(totalSeconds: number): string {
  const s = Math.max(0, totalSeconds);
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function Timer({
  storageKey,
  durationMinutes,
  onExpire,
}: {
  storageKey: string;
  durationMinutes: number;
  onExpire: () => void;
}) {
  const endTimeRef = useRef<number | null>(null);
  const [remaining, setRemaining] = useState(durationMinutes * 60);
  const expiredRef = useRef(false);

  useEffect(() => {
    const key = `ielts-prep:timer:${storageKey}`;
    const stored = window.sessionStorage.getItem(key);
    const now = Date.now();
    let endTime: number;
    if (stored) {
      endTime = Number(stored);
    } else {
      endTime = now + durationMinutes * 60 * 1000;
      window.sessionStorage.setItem(key, String(endTime));
    }
    endTimeRef.current = endTime;
    setRemaining(Math.max(0, Math.round((endTime - now) / 1000)));

    const interval = setInterval(() => {
      const left = Math.max(0, Math.round(((endTimeRef.current ?? now) - Date.now()) / 1000));
      setRemaining(left);
      if (left <= 0 && !expiredRef.current) {
        expiredRef.current = true;
        clearInterval(interval);
        onExpire();
      }
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey, durationMinutes]);

  const low = remaining <= 120;

  return (
    <div
      className={`rounded-md border px-3 py-1.5 font-mono text-sm font-medium ${
        low
          ? "border-red-300 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300"
          : "border-border bg-surface text-foreground"
      }`}
    >
      ⏱ {formatTime(remaining)}
    </div>
  );
}
