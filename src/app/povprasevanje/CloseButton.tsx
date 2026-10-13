"use client";

import { useRouter } from "next/navigation";

// Zapre obrazec: vrne na prejšnjo stran te spletne strani, sicer na domačo.
export default function CloseButton() {
  const router = useRouter();
  const close = () => {
    const fromHere = typeof document !== "undefined" && document.referrer.startsWith(window.location.origin);
    if (fromHere && window.history.length > 1) router.back();
    else router.push("/");
  };
  return (
    <button
      type="button"
      onClick={close}
      className="flex min-h-11 items-center gap-2 rounded-full border border-hairline bg-cream px-4 text-xs font-semibold tracking-[0.14em] text-ink transition-colors hover:border-ink"
    >
      ZAPRI
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 5l10 10M15 5L5 15" />
      </svg>
    </button>
  );
}
