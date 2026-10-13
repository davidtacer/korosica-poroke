import Link from "next/link";
import { btnPrimary } from "./ui";

const nav = [
  { href: "/#obred", label: "Obred" },
  { href: "/#prostori", label: "Prostori" },
  { href: "/kulinarika", label: "Kulinarika" },
  { href: "/#izracun", label: "Cene" },
  { href: "/#prenocitev", label: "Prenočitev" },
  { href: "/#vprasanja", label: "Vprašanja" },
];

const langs = ["SL", "EN", "DE", "HR", "IT"];

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3 text-ink no-underline">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/korosica-znak-linija-rjava.svg" alt="" width={40} height={40} className="h-10 w-10" />
      <span className="flex flex-col leading-[1.1]">
        <span className="font-display text-2xl tracking-[0.08em]">KOROŠICA</span>
        <span className="text-[11px] tracking-[0.24em] text-ink-muted">POROKE</span>
      </span>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-hairline bg-cream/95 backdrop-blur-sm">
      <div className="container-page flex items-center justify-between gap-6 py-3.5">
        <Brand />

        <nav aria-label="Glavni meni" className="hidden gap-8 text-[13px] font-medium tracking-[0.12em] lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="uppercase text-ink no-underline hover:text-taupe-deep">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div aria-label="Jezik" className="hidden gap-2.5 text-xs tracking-[0.1em] md:flex">
            {langs.map((l) =>
              l === "SL" ? (
                <span key={l} aria-current="true" className="font-semibold text-ink">
                  {l}
                </span>
              ) : (
                <span key={l} className="text-ink-muted" title="Kmalu">
                  {l}
                </span>
              ),
            )}
          </div>
          <Link href="/povprasevanje" className={`${btnPrimary} hidden md:inline-flex`}>
            PREVERITA DATUM
          </Link>

          <details className="group relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-hairline [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Odpri meni</span>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 6h14M3 10h14M3 14h14" />
              </svg>
            </summary>
            <nav
              aria-label="Mobilni meni"
              className="absolute right-0 top-14 flex w-64 flex-col gap-1 rounded-[12px] border border-hairline bg-cream p-3 shadow-[0_8px_24px_rgba(60,48,35,0.12)]"
            >
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="rounded-md px-3 py-3 text-sm font-medium uppercase tracking-[0.12em] text-ink no-underline hover:bg-linen">
                  {n.label}
                </Link>
              ))}
              <Link href="/povprasevanje" className={`${btnPrimary} mt-2`}>
                PREVERITA DATUM
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
