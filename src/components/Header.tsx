import Link from "next/link";
import MobileMenu from "./MobileMenu";

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
    <Link href="/" className="flex shrink-0 items-center gap-3 text-ink no-underline">
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

        <nav aria-label="Glavni meni" className="hidden gap-5 text-[12px] font-medium tracking-[0.12em] lg:flex xl:gap-8 xl:text-[13px]">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="uppercase text-ink no-underline hover:text-taupe-deep">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <div aria-label="Jezik" className="hidden gap-2.5 text-xs tracking-[0.1em] xl:flex">
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
          <Link
            href="/povprasevanje"
            className="hidden min-h-11 items-center whitespace-nowrap rounded-full bg-taupe-deep px-5 text-[11px] font-semibold tracking-[0.14em] text-white transition-colors hover:bg-ink lg:inline-flex xl:px-6 xl:text-xs"
          >
            PREVERITA DATUM
          </Link>

          <MobileMenu nav={nav} />
        </div>
      </div>
    </header>
  );
}
