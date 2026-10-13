import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Kalkulator from "@/components/Kalkulator";
import JsonLd, { homeJsonLd } from "@/components/JsonLd";
import { btnLight, btnOutline, btnOutlineLight } from "@/components/ui";
import { facts, faq, hotel, prices } from "@/content/ponudba";

import heroSvatje from "@/assets/images/hero-svatje.jpg";
import obredPaviljon from "@/assets/images/obred-paviljon.jpg";
import prihodNeveste from "@/assets/images/prihod-neveste.jpg";
import pogrinjek from "@/assets/images/pogrinjek.jpg";
import park from "@/assets/images/park.jpg";
import dvorana from "@/assets/images/dvorana.jpg";
import terasa from "@/assets/images/terasa.jpg";
import teletina from "@/assets/images/meni-teletina.jpg";
import karpaco from "@/assets/images/meni-karpaco.jpg";
import fingerFood from "@/assets/images/finger-food.jpg";
import makroni from "@/assets/images/makroni.jpg";
import soba from "@/assets/images/soba.jpg";
import izhodPara from "@/assets/images/izhod-para.jpg";
import tortaPar from "@/assets/images/torta-par.jpg";
import iskrice from "@/assets/images/iskrice.jpg";
import glasba from "@/assets/images/glasba.jpg";

const factStrip = [
  { big: `do ${facts.capacityMax}`, small: "Gostov v dvorani s teraso" },
  { big: `${facts.rooms} sob`, small: `${facts.beds} ležišč za goste` },
  { big: "v parku", small: "Civilni ali cerkveni obred" },
  { big: `od ${prices.catering} €`, small: "Na osebo za kulinariko" },
  { big: "do jutra", small: "Glasba brez časovne omejitve" },
];

const ceremonyPoints = [
  `Okoli ${facts.ceremonySeats} stolov za mladoporočenca, priči in najbližje, ostali svatje ob stoječih mizah z razgledom.`,
  "Po zaobljubah šampanjec za vaju in priči, po želji prigrizki in glasbena spremljava.",
  "Postavitev, ozvočenje, preobleke stolov in usklajevanje z uradnimi osebami prevzamemo mi.",
  "Ob dežju ali močnem soncu se preselimo na pokrito teraso.",
];

const day = [
  { n: "I", t: "Obred v parku", d: "Paviljon s cvetjem, razgled na hribe." },
  { n: "II", t: "Šampanjec in sprejem", d: "Finger food ali showcooking na žaru zunaj." },
  { n: "III", t: "Večerja v dvorani", d: "Postrežen meni in hladno-topli bife." },
  { n: "IV", t: "Torta in sladki kotiček", d: "Vse sladice ročno, v naši kuhinji." },
  { n: "V", t: "Ples do jutra", d: "Veliko plesišče, glasba brez časovne omejitve." },
  { n: "VI", t: "Pozen zajtrk", d: "Gostje prespijo, odjava kasneje." },
];

const spaces: { img: StaticImageData; alt: string; tag: string; title: string; text: string }[] = [
  {
    img: park,
    alt: "Park Hotela Korošica s paviljonom in iglavci",
    tag: "Obred · zunaj",
    title: "Park s paviljonom",
    text: `Približno ${facts.ceremonySeats} sedežev za najbližje, stoječe mize za ostale svate. Cvetlično okrasitev pripravimo po vajinih željah.`,
  },
  {
    img: dvorana,
    alt: "Pogrnjena dvorana z okroglimi mizami in steklenimi stenami proti parku",
    tag: `Slavje · ${facts.capacityMin}–${facts.capacityMax} gostov`,
    title: "Dvorana s teraso",
    text: "Svetla dvorana s steklenimi stenami proti parku in vedno dovolj velikim plesiščem. Najem je vključen v kulinariko.",
  },
  {
    img: terasa,
    alt: "Pokrita terasa pred stekleno dvorano, odprta proti parku",
    tag: "Rezerva ob dežju",
    title: "Pokrita terasa",
    text: "Če vreme ne sodeluje, obred in sprejem varno prestavimo pod streho, s senčniki ob močnem soncu.",
  },
];

const priceTiles = [
  { tag: "Catering style", price: `od ${prices.catering} €`, note: "na osebo · finger food, showcooking" },
  { tag: "Meni, dva obroka", price: `od ${prices.menu} €`, note: "na osebo · postrežen meni in bife" },
  { tag: "All inclusive", price: `${prices.allInclusive} €`, note: "na osebo · meni in pijača" },
  { tag: "Sladki kotiček", price: `${prices.sweetCorner} €`, note: "na osebo · vse ročno v hiši" },
];

const moments = [
  { img: izhodPara, alt: "Mladoporočenca odhajata od oltarja, svatje ploskajo" },
  { img: tortaPar, alt: "Mladoporočenca ob torti z iskrico ponoči" },
  { img: iskrice, alt: "Svatje z iskricami tvorijo špalir za mladoporočenca" },
  { img: glasba, alt: "Glasbena skupina s pihali igra na poroki" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd()} />

      {/* HERO */}
      <section id="top" className="bg-olive-deep text-cream">
        <div className="container-page flex flex-wrap items-center gap-[clamp(32px,5vw,72px)] py-[clamp(40px,6vw,88px)]">
          <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-7">
            <span className="self-start rounded-full border border-cream/60 px-[18px] py-[9px] text-[11px] font-medium tracking-[0.22em]">
              ★★★★★ &nbsp;HOTEL IN RESTAVRACIJA KOROŠICA
            </span>
            <h1 className="font-display text-[clamp(64px,10vw,152px)] font-light leading-[0.88] tracking-[0.04em]">POROKE</h1>
            <p className="-mt-2 font-script text-[clamp(36px,4vw,52px)] leading-none text-on-olive-muted">v objemu narave</p>
            <p className="max-w-[520px] text-[19px] font-light leading-relaxed">
              Obred v parku s pogledom na koroške hribe, slavje za do {facts.capacityMax} gostov in sobe za vse, ki ostanejo do jutra. Vse na enem
              mestu, v Šentjanžu pri Dravogradu.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link href="/povprasevanje" className={btnLight}>
                PREVERITA PROST DATUM
              </Link>
              <Link href="#izracun" className={btnOutlineLight}>
                IZRAČUNAJTA CENO
              </Link>
            </div>
          </div>
          <div className="relative min-w-0 flex-[1_1_520px]">
            <Image
              src={heroSvatje}
              alt="Nevesta in družice s šopki v zraku v parku Hotela Korošica, v ozadju hribi"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/5] w-full rounded-[12px] object-cover object-[50%_40%]"
            />
            <div className="absolute bottom-8 left-4 flex items-center gap-3.5 rounded-[12px] bg-cream px-[22px] py-[18px] text-ink shadow-[0_8px_24px_rgba(60,48,35,0.12)] md:-left-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/korosica-znak.svg" alt="" aria-hidden="true" width={44} height={44} className="h-11 w-11" />
              <span className="flex flex-col gap-0.5">
                <strong className="text-[15px] font-semibold">Mladoporočenca prespita brezplačno</strong>
                <span className="text-[13px] text-ink-muted">poročna soba je naše darilo</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DEJSTVA */}
      <section aria-label="Na kratko" className="bg-linen">
        <dl className="container-page grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-10 gap-y-7 py-10">
          {factStrip.map((f) => (
            <div key={f.small} className="flex flex-col-reverse gap-1.5">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{f.small}</dt>
              <dd className="text-[40px] font-light leading-[1.1]">{f.big}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* OBRED */}
      <section id="obred" className="container-page flex flex-wrap items-center gap-[clamp(40px,6vw,96px)] py-[clamp(64px,9vw,128px)]">
        <div className="grid min-w-0 flex-[1_1_520px] grid-cols-5 gap-4">
          <Image src={obredPaviljon} alt="Poročni obred v paviljonu: beli stoli, cvetlični aranžmaji ob prehodu, hribi v ozadju" placeholder="blur" sizes="(min-width: 1024px) 30vw, 60vw" className="col-span-3 aspect-[3/4] w-full rounded-[12px] object-cover" />
          <div className="col-span-2 flex flex-col gap-4 pt-16">
            <Image src={prihodNeveste} alt="Oče vodi nevesto po poti skozi park do paviljona" placeholder="blur" sizes="(min-width: 1024px) 20vw, 40vw" className="aspect-[4/5] w-full rounded-[12px] object-cover" />
            <Image src={pogrinjek} alt="Pogrnjena miza z belimi cvetličnimi aranžmaji" placeholder="blur" sizes="(min-width: 1024px) 20vw, 40vw" className="aspect-square w-full rounded-[12px] object-cover" />
          </div>
        </div>
        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-6">
          <span className="eyebrow text-taupe-deep">Poročni obred</span>
          <h2 className="section-title">Da reče se v parku, pod odprtim nebom.</h2>
          <p className="text-lg font-light leading-[1.7]">
            Urejen park z razgledom na okoliške hribe in paviljon, ki ga po vajinih željah okrasimo s cvetjem, sta pripravljena za{" "}
            <strong className="font-semibold">civilni ali cerkveni obred na prostem</strong>.
          </p>
          <ol className="flex flex-col text-base leading-normal">
            {ceremonyPoints.map((p, i) => (
              <li key={p} className="flex gap-3.5 border-t border-hairline py-3.5 last:border-b">
                <span className="min-w-7 font-semibold text-taupe-deep">{String(i + 1).padStart(2, "0")}</span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
          <p className="flex flex-wrap items-baseline gap-3">
            <span className="font-display text-[44px] leading-none">{prices.ceremonySetup} €</span>
            <span className="text-sm text-ink-muted">celotna priprava prostora za obred</span>
          </p>
        </div>
      </section>

      {/* POTEK DNEVA */}
      <section aria-labelledby="dan" className="bg-espresso text-cream">
        <div className="container-page flex flex-col gap-12 py-[clamp(64px,8vw,112px)]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-3.5">
              <span className="eyebrow text-taupe-light">Vajin dan pri nas</span>
              <h2 id="dan" className="section-title">
                Od obreda do zajtrka.
                <br />
                Brez selitev.
              </h2>
            </div>
            <p className="font-script text-[40px] text-taupe-light">vse na enem mestu</p>
          </div>
          <ol className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
            {day.map((d) => (
              <li key={d.n} className="flex flex-col gap-2.5 border-t border-cream/35 pr-5 pt-[22px] pb-6">
                <span className="font-display text-4xl text-taupe-light">{d.n}</span>
                <strong className="text-[17px] font-medium">{d.t}</strong>
                <span className="text-[15px] font-light leading-[1.55] text-on-dark-muted">{d.d}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROSTORI */}
      <section id="prostori" className="container-page flex flex-col gap-12 py-[clamp(64px,9vw,128px)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[640px] flex-col gap-3.5">
            <span className="eyebrow text-taupe-deep">Prostori</span>
            <h2 className="section-title">Park, dvorana in terasa, nekaj korakov narazen.</h2>
          </div>
          <p className="max-w-[420px] text-base leading-relaxed text-ink-muted">
            Pred hotelom je veliko parkirišče za vse goste. Klasično ali okroglo omizje pripravimo mi.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {spaces.map((s) => (
            <article key={s.title} className="flex flex-col overflow-hidden rounded-[12px] bg-paper">
              <Image src={s.img} alt={s.alt} placeholder="blur" sizes="(min-width: 1024px) 33vw, 100vw" className="aspect-[4/3] w-full object-cover" />
              <div className="flex flex-col gap-3 p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-taupe-deep">{s.tag}</span>
                <h3 className="font-display text-[32px] font-medium">{s.title}</h3>
                <p className="text-base leading-relaxed text-ink-muted">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* KULINARIKA */}
      <section aria-labelledby="kulinarika" className="bg-linen">
        <div className="container-page flex flex-wrap items-center gap-[clamp(40px,6vw,88px)] py-[clamp(64px,9vw,128px)]">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-6">
            <span className="eyebrow text-taupe-deep">Kulinarika</span>
            <h2 id="kulinarika" className="section-title">
              Noč je dolga.
              <br />
              Hrane bo dovolj.
            </h2>
            <p className="text-lg font-light leading-[1.7]">
              Kuhamo in pečemo v hiši. Meni prilagodimo vajinemu urniku in slogu, od finger fooda do štirih hodov.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
              {priceTiles.map((t) => (
                <div key={t.tag} className="flex flex-col gap-2 rounded-[12px] bg-cream p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{t.tag}</span>
                  <span className="font-display text-[40px] leading-none">{t.price}</span>
                  <span className="text-sm text-ink-muted">{t.note}</span>
                </div>
              ))}
            </div>
            <Link href="/kulinarika" className={`${btnOutline} self-start`}>
              POGLEJTA MENIJE IN CENE
            </Link>
          </div>
          <div className="grid min-w-0 flex-[1_1_560px] grid-cols-6 gap-4">
            <Image src={teletina} alt="Počasi kuhana teletina z zelenjavo na belem krožniku" placeholder="blur" sizes="(min-width: 1024px) 35vw, 66vw" className="col-span-4 aspect-[4/3] w-full rounded-[12px] object-cover" />
            <Image src={karpaco} alt="Škampov karpačo na belem krožniku" placeholder="blur" sizes="(min-width: 1024px) 18vw, 33vw" className="col-span-2 h-full w-full rounded-[12px] object-cover" />
            <Image src={fingerFood} alt="Miza s finger foodom: burgerčki, fokače in prigrizki" placeholder="blur" sizes="(min-width: 1024px) 26vw, 50vw" className="col-span-3 aspect-[4/3] w-full rounded-[12px] object-cover" />
            <Image src={makroni} alt="Domači makroni v pastelnih barvah" placeholder="blur" sizes="(min-width: 1024px) 26vw, 50vw" className="col-span-3 aspect-[4/3] w-full rounded-[12px] object-cover" />
          </div>
        </div>
      </section>

      {/* IZRAČUN */}
      <section id="izracun" aria-labelledby="izracun-naslov" className="container-page flex flex-col gap-10 py-[clamp(64px,9vw,128px)]">
        <div className="flex max-w-[760px] flex-col gap-3.5">
          <span className="eyebrow text-taupe-deep">Cene brez ugibanja</span>
          <h2 id="izracun-naslov" className="section-title">
            Izračunajta okvirno ceno vajine poroke.
          </h2>
          <p className="text-[17px] leading-relaxed text-ink-muted">Po cenah iz kataloga {hotel.season}. Natančno ponudbo pripravimo po pogovoru.</p>
        </div>
        <Kalkulator />
      </section>

      {/* PRENOČITEV */}
      <section id="prenocitev" className="bg-paper">
        <div className="container-page flex flex-wrap items-center gap-[clamp(40px,6vw,88px)] py-[clamp(64px,9vw,128px)]">
          <Image src={soba} alt="Dvoposteljna soba Hotela Korošica s svetlimi toni in velikim oknom" placeholder="blur" sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] w-full min-w-0 flex-[1_1_380px] rounded-[12px] object-cover" />
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-6">
            <span className="eyebrow text-taupe-deep">Prenočitev</span>
            <h2 className="section-title">Nihče ne vozi domov.</h2>
            <p className="text-lg font-light leading-[1.7]">Dvoposteljne sobe in suite, primerne tudi za družine, so v isti hiši kot plesišče.</p>
            <div className="flex flex-wrap gap-12">
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-7xl italic leading-none">{facts.rooms}</span>
                <span className="text-lg">sob</span>
              </div>
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-7xl italic leading-none">{facts.beds}</span>
                <span className="text-lg">ležišč</span>
              </div>
            </div>
            <ul className="flex flex-col gap-3 text-base leading-normal">
              {["Soba za mladoporočenca je naše darilo.", "Gostje z neposredno rezervacijo dobijo ugodne cene.", "Pozen zajtrk in kasnejša odjava naslednji dan."].map((t) => (
                <li key={t} className="flex gap-3">
                  <span aria-hidden="true" className="text-taupe-deep">
                    —
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TRENUTKI */}
      <section aria-labelledby="trenutki" className="container-page flex flex-col gap-10 py-[clamp(64px,9vw,128px)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="trenutki" className="section-title">
            Trenutki s porok pri nas
          </h2>
          <a href={hotel.instagram} rel="noopener" className="eyebrow text-taupe-deep">
            @korosica na Instagramu
          </a>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {moments.map((m) => (
            <Image key={m.alt} src={m.img} alt={m.alt} placeholder="blur" sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[3/4] w-full rounded-[12px] object-cover" />
          ))}
        </div>
      </section>

      {/* VPRAŠANJA */}
      <section id="vprasanja" className="bg-linen">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-10 px-[clamp(16px,4vw,40px)] py-[clamp(64px,9vw,128px)]">
          <div className="flex flex-col gap-3.5">
            <span className="eyebrow text-taupe-deep">Pogosta vprašanja</span>
            <h2 className="section-title">Kar naju pari najpogosteje vprašajo</h2>
          </div>
          <div className="flex flex-col">
            {faq.map((f, i) => (
              <details key={f.q} open={i === 0} className="group border-t border-[#c9bcae] last:border-b">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-[26px] text-ink [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span aria-hidden="true" className="font-sans text-[28px] font-light text-taupe-deep transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mb-6 max-w-[760px] text-[17px] leading-[1.7] text-espresso">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta" className="relative overflow-hidden bg-ink text-cream">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/korosica-znak-linija-bela.svg" alt="" aria-hidden="true" className="pointer-events-none absolute -right-20 top-1/2 w-[520px] -translate-y-1/2 opacity-[0.08]" />
        <div className="container-page relative flex flex-col items-start gap-7 py-[clamp(72px,10vw,140px)]">
          <p className="font-script text-[44px] text-taupe-light">vaša Korošica</p>
          <h2 id="cta" className="max-w-[860px] font-display text-[clamp(44px,6vw,84px)] font-light leading-none">
            Pridita na ogled. Pokažemo vama, kje bo vajin dan.
          </h2>
          <div className="flex flex-wrap gap-3.5">
            <Link href="/povprasevanje" className={btnLight}>
              DOGOVORITA OGLED
            </Link>
            <a href={hotel.phoneHref} className={btnOutlineLight}>
              {hotel.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
