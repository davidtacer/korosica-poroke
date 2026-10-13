"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { btnOutline } from "@/components/ui";
import { sendInquiry, type InquiryState } from "./actions";

type Opt = [value: string, label: string];

const ceremonies: Opt[] = [
  ["civilni", "Civilni v parku"],
  ["cerkveni", "Cerkveni"],
  ["oba", "Civilni in cerkveni"],
  ["brez", "Samo slavje"],
];
const foods: Opt[] = [
  ["catering", "Catering style"],
  ["meni", "Meni, dva obroka"],
  ["ai", "All inclusive"],
  ["nevem", "Še ne veva"],
];
const roomOpts: Opt[] = [
  ["da", "Da, za večino"],
  ["nekaj", "Za nekaj gostov"],
  ["ne", "Ne potrebujemo"],
];
const stepNames = ["Datum in obred", "Gostje in kulinarika", "Kontakt"];

const input =
  "h-[52px] rounded-[4px] border border-[#c9bcae] bg-paper px-3.5 text-base text-ink placeholder:text-ink-muted/70";
const label = "flex flex-col gap-2 text-[13px] font-semibold tracking-[0.1em]";

function Choice({ name, options, value, onChange }: { name: string; options: Opt[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2.5" role="radiogroup">
      {options.map(([v, l]) => (
        <label
          key={v}
          className={`min-h-11 cursor-pointer rounded-full border px-5 py-3 text-[15px] font-normal tracking-normal transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-taupe-deep ${
            value === v ? "border-ink bg-ink text-cream" : "border-[#c9bcae] bg-paper text-ink hover:border-ink"
          }`}
        >
          <input type="radio" name={name} value={v} checked={value === v} onChange={() => onChange(v)} className="sr-only" />
          {l}
        </label>
      ))}
    </div>
  );
}

export default function InquiryForm({ initialGuests, initialFood }: { initialGuests: number; initialFood: string }) {
  const [step, setStep] = useState(1);
  const [ceremony, setCeremony] = useState("civilni");
  const [guests, setGuests] = useState(initialGuests);
  const [food, setFood] = useState(initialFood);
  const [rooms, setRooms] = useState("da");
  const [state, action, pending] = useActionState<InquiryState, FormData>(sendInquiry, { ok: false });

  if (state.ok) {
    return (
      <section className="my-auto flex max-w-[620px] flex-col gap-6" aria-live="polite">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/korosica-znak-linija-rjava.svg" alt="" aria-hidden="true" width={72} height={72} className="h-[72px] w-[72px]" />
        <h2 className="font-display text-[56px] leading-[1.05]">Hvala. Veselimo se vajinega dne.</h2>
        <p className="text-lg font-light leading-relaxed">
          Povpraševanje za {state.guests || guests} gostov smo prejeli. Kmalu vama pošljemo ponudbo in predlog termina za ogled.
        </p>
        <Link href="/" className={`${btnOutline} self-start`}>
          NAZAJ NA POROKE
        </Link>
      </section>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-9" noValidate>
      <ol aria-label="Koraki" className="grid grid-cols-3 gap-3">
        {stepNames.map((n, i) => (
          <li
            key={n}
            aria-current={i + 1 === step ? "step" : undefined}
            className={`flex flex-col gap-1 border-t-[3px] pt-3 ${i + 1 <= step ? "border-taupe-deep text-ink" : "border-hairline text-ink-muted"}`}
          >
            <span className="text-xs font-semibold tracking-[0.14em]">0{i + 1}</span>
            <span className="text-[15px]">{n}</span>
          </li>
        ))}
      </ol>

      {/* Vsi koraki ostanejo v obrazcu (skriti), da se ob oddaji pošljejo vsa polja. */}
      <section hidden={step !== 1} className="flex flex-col gap-7">
        <h2 className="font-display text-[44px]">Kdaj?</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
          <label className={label}>
            ŽELENI DATUM
            <input type="date" name="datum" className={input} />
          </label>
          <label className={label}>
            <span>
              REZERVNI DATUM <span className="font-normal tracking-normal text-ink-muted">neobvezno</span>
            </span>
            <input type="date" name="rezervniDatum" className={input} />
          </label>
        </div>
        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 text-[13px] font-semibold tracking-[0.1em]">KAKŠEN OBRED NAČRTUJETA?</legend>
          <Choice name="obred" options={ceremonies} value={ceremony} onChange={setCeremony} />
        </fieldset>
      </section>

      <section hidden={step !== 2} className="flex flex-col gap-7">
        <h2 className="font-display text-[44px]">Koliko vas bo?</h2>
        <label className="flex flex-col gap-3 text-[13px] font-semibold tracking-[0.1em]">
          <span className="flex justify-between">
            <span>PRIBLIŽNO ŠTEVILO GOSTOV</span>
            <span className="text-[22px] font-medium tracking-normal">{guests}</span>
          </span>
          <input type="range" name="gostje" min={20} max={200} step={5} value={guests} onChange={(e) => setGuests(+e.target.value)} className="h-11 w-full" />
        </label>
        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 text-[13px] font-semibold tracking-[0.1em]">KULINARIKA, KI VAJU ZANIMA</legend>
          <Choice name="kulinarika" options={foods} value={food} onChange={setFood} />
        </fieldset>
        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 text-[13px] font-semibold tracking-[0.1em]">PRENOČITEV ZA GOSTE</legend>
          <Choice name="sobe" options={roomOpts} value={rooms} onChange={setRooms} />
        </fieldset>
      </section>

      <section hidden={step !== 3} className="flex flex-col gap-6">
        <h2 className="font-display text-[44px]">Kdo sta?</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
          <label className={label}>
            VAJINI IMENI
            <input type="text" name="imeni" required autoComplete="name" placeholder="Ana in Luka" className={input} />
          </label>
          <label className={label}>
            E-POŠTA
            <input type="email" name="email" required autoComplete="email" placeholder="ana@primer.si" className={input} />
          </label>
          <label className={label}>
            TELEFON
            <input type="tel" name="telefon" autoComplete="tel" placeholder="+386 …" className={input} />
          </label>
          <label className={label}>
            JEZIK KOMUNIKACIJE
            <select name="jezik" className={input} defaultValue="Slovenščina">
              <option>Slovenščina</option>
              <option>English</option>
              <option>Deutsch</option>
              <option>Hrvatski</option>
              <option>Italiano</option>
            </select>
          </label>
        </div>
        <label className={label}>
          <span>
            KAJ NAJ ŠE VEMO? <span className="font-normal tracking-normal text-ink-muted">neobvezno</span>
          </span>
          <textarea name="sporocilo" rows={4} placeholder="Želje, slog, posebne prehranske potrebe …" className="resize-y rounded-[4px] border border-[#c9bcae] bg-paper p-3.5 text-base leading-normal text-ink placeholder:text-ink-muted/70" />
        </label>
        <label className="flex items-start gap-3 text-sm leading-normal text-espresso">
          <input type="checkbox" name="soglasje" className="mt-0.5 h-5 w-5 accent-taupe-deep" />
          Strinjava se, da Hotel Korošica podatke uporabi za odgovor na to povpraševanje.
        </label>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      </section>

      {state.error && (
        <p role="alert" className="rounded-[4px] bg-linen px-4 py-3 text-[15px] text-espresso">
          {state.error}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
        {step > 1 ? (
          <button type="button" onClick={() => setStep(step - 1)} className="min-h-11 rounded-full border border-ink px-7 py-4 text-[13px] font-medium tracking-[0.14em]">
            NAZAJ
          </button>
        ) : (
          <span />
        )}
        <span className="text-sm text-ink-muted">Na vsako povpraševanje odgovorimo osebno.</span>
        {step < 3 ? (
          <button type="button" onClick={() => setStep(step + 1)} className="min-h-11 rounded-full bg-taupe-deep px-8 py-4 text-[13px] font-semibold tracking-[0.14em] text-white hover:bg-ink">
            NAPREJ
          </button>
        ) : (
          <button type="submit" disabled={pending} className="min-h-11 rounded-full bg-taupe-deep px-8 py-4 text-[13px] font-semibold tracking-[0.14em] text-white hover:bg-ink disabled:opacity-60">
            {pending ? "POŠILJAM …" : "POŠLJITA POVPRAŠEVANJE"}
          </button>
        )}
      </div>
    </form>
  );
}
