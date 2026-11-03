"use client";

import { useEffect, useRef, useState } from "react";

function cleanForSpeech(script: string): string {
  return script
    .split("\n")
    .map((line) => line.replace(/^[A-Za-z][\w .]*:\s*/, ""))
    .join(" ");
}

export default function ListeningPlayer({ script, title }: { script: string; title: string }) {
  const [status, setStatus] = useState<"idle" | "playing" | "finished" | "unsupported">("idle");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setStatus("unsupported");
    }
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  const play = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanForSpeech(script));
    utterance.rate = 0.95;
    utterance.onend = () => setStatus("finished");
    utterance.onerror = () => setStatus("finished");
    utteranceRef.current = utterance;
    setStatus("playing");
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis?.cancel();
    setStatus("finished");
  };

  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>
        {status === "playing" ? (
          <button
            onClick={stop}
            className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700"
          >
            ⏸ Stop
          </button>
        ) : (
          <button
            onClick={play}
            disabled={status === "unsupported"}
            className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground hover:opacity-90 disabled:opacity-50"
          >
            ▶ {status === "finished" ? "Replay audio" : "Play audio"}
          </button>
        )}
      </div>
      {status === "unsupported" && (
        <p className="text-sm text-red-600">
          Your browser doesn&apos;t support speech playback. Try Chrome or Edge, or read the transcript below.
        </p>
      )}
      {status === "playing" && (
        <p className="text-sm text-muted">Playing — in the real test, audio only plays once. Try not to replay below.</p>
      )}
      <details className="mt-2 text-sm text-muted">
        <summary className="cursor-pointer">Show transcript (for practice only — hide this in a real test attempt)</summary>
        <pre className="mt-2 whitespace-pre-wrap font-sans text-foreground">{script}</pre>
      </details>
    </div>
  );
}
