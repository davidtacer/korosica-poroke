"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { btnPrimary } from "./ui";

export default function MobileMenu({ nav }: { nav: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  // Zapri ob menjavi strani.
  useEffect(() => setOpen(false), [pathname]);

  // Zapri ob tipki Esc in kliku izven menija.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={ref} className="relative lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobilni-meni"
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline"
      >
        <span className="sr-only">{open ? "Zapri meni" : "Odpri meni"}</span>
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
        </svg>
      </button>
      {open && (
        <nav
          id="mobilni-meni"
          aria-label="Mobilni meni"
          className="absolute right-0 top-14 flex w-64 flex-col gap-1 rounded-[12px] border border-hairline bg-cream p-3 shadow-[0_8px_24px_rgba(60,48,35,0.12)]"
        >
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={close} className="rounded-md px-3 py-3 text-sm font-medium uppercase tracking-[0.12em] text-ink no-underline hover:bg-linen">
              {n.label}
            </Link>
          ))}
          <Link href="/povprasevanje" onClick={close} className={`${btnPrimary} mt-2`}>
            PREVERITA DATUM
          </Link>
        </nav>
      )}
    </div>
  );
}
