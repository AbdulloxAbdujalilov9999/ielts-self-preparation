"use client";

import { useRouter } from "next/navigation";
import { clearDraft, saveDraft } from "@/lib/storage";
import { AttemptDraft } from "@/lib/flow";

export default function StartTestButton({ testId, firstRoute }: { testId: string; firstRoute: string }) {
  const router = useRouter();

  const start = () => {
    clearDraft(testId);
    const draft: AttemptDraft = { testId, startedAt: new Date().toISOString() };
    saveDraft(testId, draft);
    router.push(firstRoute);
  };

  return (
    <button
      onClick={start}
      className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
    >
      Start Test
    </button>
  );
}
