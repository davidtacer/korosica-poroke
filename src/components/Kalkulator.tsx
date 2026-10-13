"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { eur, packages, prices, type PackageId } from "@/content/ponudba";
import { btnLight } from "./ui";

type ExtraId = "obred" | "sladko" | "torta";

const extrasList: { id: ExtraId; label: string }[] = [
  { id: "obred", label: `Obred v parku · ${prices.ceremonySetup} €` },
  { id: "sladko", label: `Sladki kotiček · ${prices.sweetCorner} €/osebo` },
  { id: "torta", label: "Poročna torta · od 4,50 €/kos" },
];

export default function Kalkulator() {
  const [adults, setAdults] = useState(120);
  const [kids, setKids] = useState(6);
  const [pkg, setPkg] = useState<PackageId>("meni");
  const [extras, setExtras] = useState<Record<ExtraId, boolean>>({ obred: true, sladko: true, torta: true });

  const result = useMemo(() => {
    const p = packages.find((x) => x.id === pkg)!;
    const persons = adults + kids;
    const food = adults * p.price + (kids * p.price) / 2;
    const lines = [{ label: `${p.name} (${adults} + ${kids} otrok)`, amount: food }];
    let total = food;
    if (extras.obred) {
      total += prices.ceremonySetup;
      lines.push({ label: "Priprava obreda", amount: prices.ceremonySetup });
    }
    if (extras.sladko) {
      total += persons * prices.sweetCorner;
      lines.push({ label: "Sladki kotiček", amount: persons * prices.sweetCorner });
    }
    if (extras.torta) {
      total += persons * prices.cakePerSlice;
      lines.push({ label: `Torta (${persons} kosov)`, amount: persons * prices.cakePerSlice });
    }
    return { total, perGuest: total / adults, lines };
  }, [adults, kids, pkg, extras]);

  const inquiryHref = `/povprasevanje?gostje=${adults}&otroci=${kids}&paket=${pkg}`;

  return (
    <div className="flex flex-wrap items-stretch gap-6">
      <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-8 rounded-[12px] bg-paper p-6 md:p-10">
        <div className="flex flex-col gap-3">
          <label htmlFor="odrasli" className="flex justify-between text-[13px] font-semibold tracking-[0.12em]">
            <span>ODRASLI GOSTJE</span>
            <span className="text-xl font-medium tracking-normal">{adults}</span>
          </label>
          <input id="odrasli" type="range" min={20} max={200} step={5} value={adults} onChange={(e) => setAdults(+e.target.value)} className="h-11 w-full" />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="otroci" className="flex justify-between gap-4 text-[13px] font-semibold tracking-[0.12em]">
            <span>
              OTROCI 3–12 LET <span className="font-normal tracking-normal text-ink-muted">(polovična cena, mlajši brezplačno)</span>
            </span>
            <span className="text-xl font-medium tracking-normal">{kids}</span>
          </label>
          <input id="otroci" type="range" min={0} max={40} step={1} value={kids} onChange={(e) => setKids(+e.target.value)} className="h-11 w-full" />
        </div>

        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 text-[13px] font-semibold tracking-[0.12em]">KULINARIKA IN PIJAČA</legend>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
            {packages.map((p) => {
              const on = p.id === pkg;
              return (
                <button
                  key={p.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setPkg(p.id)}
                  className={`flex min-h-11 flex-col items-start gap-1.5 rounded-[12px] border p-[18px] text-left transition-colors ${
                    on ? "border-ink bg-ink text-cream" : "border-hairline bg-cream text-ink hover:border-ink"
                  }`}
                >
                  <span className="text-[15px] font-semibold">{p.name}</span>
                  <span className="text-[13px] leading-snug">{p.desc}</span>
                  <span className="font-display text-[26px]">{p.label}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 text-[13px] font-semibold tracking-[0.12em]">DODATKI</legend>
          <div className="flex flex-wrap gap-2.5">
            {extrasList.map((x) => {
              const on = extras[x.id];
              return (
                <button
                  key={x.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setExtras((s) => ({ ...s, [x.id]: !s[x.id] }))}
                  className={`min-h-11 rounded-full border px-5 py-3 text-sm transition-colors ${
                    on ? "border-taupe-deep bg-taupe-deep text-white" : "border-hairline bg-paper text-ink hover:border-ink"
                  }`}
                >
                  {on ? "✓" : "+"} {x.label}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <aside aria-live="polite" className="flex min-w-0 flex-[1_1_340px] flex-col justify-between gap-5 rounded-[12px] bg-olive-deep p-6 text-cream md:p-10">
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-semibold tracking-[0.16em]">OKVIRNA CENA</span>
          <span className="font-display text-[clamp(52px,6vw,76px)] leading-none">{eur(result.total)} €</span>
          <span className="text-[15px] text-on-olive-muted">približno {eur(result.perGuest)} € na odraslega gosta</span>
        </div>
        <ul className="flex flex-col gap-2.5 text-sm">
          {result.lines.map((l) => (
            <li key={l.label} className="flex justify-between gap-3 border-t border-cream/30 pt-2.5">
              <span>{l.label}</span>
              <span className="whitespace-nowrap">{eur(l.amount)} €</span>
            </li>
          ))}
        </ul>
        <p className="text-[13px] leading-normal text-on-olive-muted">
          Najem restavracije je vključen. Za mladoporočenca je soba brezplačna. Cene so »od«, končna ponudba je odvisna od izbranega menija.
        </p>
        <Link href={inquiryHref} className={btnLight}>
          POŠLJITA TA IZRAČUN
        </Link>
      </aside>
    </div>
  );
}
