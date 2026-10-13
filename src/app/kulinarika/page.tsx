import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { btnLight, btnOutlineLight } from "@/components/ui";
import { buffet, drinks, fingerFood, firstCourse, fourCourses, hotel, prices, showcooking, sweets } from "@/content/ponudba";

import fingerFoodImg from "@/assets/images/finger-food.jpg";
import teletina from "@/assets/images/meni-teletina.jpg";
import juha from "@/assets/images/meni-juha.jpg";
import torta from "@/assets/images/torta.jpg";
import makroni from "@/assets/images/makroni.jpg";
import sladkiKoticek from "@/assets/images/sladki-koticek.jpg";

export const metadata: Metadata = {
  title: "Poročni meniji in cene",
  description: `Poročni meniji Hotela Korošica: catering style od ${prices.catering} €, meniji z dvema obrokoma od ${prices.menu} €, all inclusive ${prices.allInclusive} € na osebo, sladki kotiček ${prices.sweetCorner} €.`,
  alternates: { canonical: "/kulinarika" },
  openGraph: { url: "/kulinarika" },
};

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-[18px] text-base leading-normal">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default function Kulinarika() {
  return (
    <>
      <section className="container-page flex flex-wrap items-end justify-between gap-10 pb-12 pt-[clamp(56px,8vw,112px)]">
        <div className="flex max-w-[820px] flex-col gap-5">
          <Link href="/" className="eyebrow text-taupe-deep no-underline">
            ← Poroke
          </Link>
          <h1 className="font-display text-[clamp(56px,8vw,112px)] font-light leading-[0.95] tracking-[0.04em]">KULINARIKA</h1>
          <p className="text-[19px] font-light leading-relaxed">
            Vse cene na enem mestu, brez povpraševanja. Meni sestavimo skupaj in ga prilagodimo vajinemu urniku, slogu in posebnim željam.
          </p>
        </div>
        <p className="font-script text-[44px] text-taupe-deep">vse pripravljeno v hiši</p>
      </section>

      <section aria-label="Načina pogostitve" className="container-page grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 pb-[clamp(56px,8vw,96px)]">
        {[
          { href: "#catering", img: fingerFoodImg, alt: "Miza s finger foodom", tag: "Sproščeno in družabno", title: "Catering style", price: `od ${prices.catering} €` },
          { href: "#meniji", img: teletina, alt: "Postrežen hod s teletino", tag: "Klasično in prefinjeno", title: "Večhodni meniji", price: `od ${prices.menu} €` },
        ].map((c) => (
          <a key={c.href} href={c.href} className="flex flex-col overflow-hidden rounded-[12px] bg-paper text-ink no-underline">
            <Image src={c.img} alt={c.alt} placeholder="blur" sizes="(min-width: 768px) 50vw, 100vw" className="aspect-video w-full object-cover" />
            <span className="flex flex-wrap items-end justify-between gap-4 p-7">
              <span className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-taupe-deep">{c.tag}</span>
                <span className="font-display text-4xl">{c.title}</span>
              </span>
              <span className="font-display text-4xl">{c.price}</span>
            </span>
          </a>
        ))}
      </section>

      <section id="catering" className="bg-linen">
        <div className="container-page flex flex-col gap-10 py-[clamp(56px,8vw,112px)]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-[720px] flex-col gap-3">
              <span className="eyebrow text-taupe-deep">Catering style · od {prices.catering} € na osebo</span>
              <h2 className="font-display text-[clamp(36px,4.5vw,56px)] leading-[1.05]">Finger food kot sprejem ali kot cel obrok</h2>
            </div>
            <p className="max-w-[420px] text-[15px] leading-relaxed text-ink-muted">
              Cena je odvisna od vajinih želja in obsega. Kombiniramo delno ali kot popolne prigrizke.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            <div className="flex flex-col gap-4 rounded-[12px] bg-cream p-8">
              <h3 className="text-[13px] font-semibold tracking-[0.14em]">IZBRANE IDEJE ZA FINGER FOOD</h3>
              <Bullets items={fingerFood} />
            </div>
            <div className="flex flex-col gap-4 rounded-[12px] bg-cream p-8">
              <h3 className="text-[13px] font-semibold tracking-[0.14em]">SHOWCOOKING NA ŽARU ZUNAJ</h3>
              <Bullets items={showcooking} />
              <p className="mt-2 rounded-[12px] bg-espresso px-[18px] py-4 text-sm leading-normal text-cream">
                Namesto klasičnega prvega obroka lahko celotno prigrizkovanje nadomestimo s showcookingom.
              </p>
            </div>
            <Image src={juha} alt="Juha, ki se preliva v temno skodelico" placeholder="blur" sizes="(min-width: 1024px) 33vw, 100vw" className="h-full min-h-80 w-full rounded-[12px] object-cover" />
          </div>
        </div>
      </section>

      <section id="meniji" className="container-page flex flex-col gap-10 py-[clamp(56px,8vw,112px)]">
        <div className="flex max-w-[760px] flex-col gap-3">
          <span className="eyebrow text-taupe-deep">Meniji · dva obroka od {prices.menu} € na osebo</span>
          <h2 className="font-display text-[clamp(36px,4.5vw,56px)] leading-[1.05]">Prvi obrok na krožniku, drugi ob bifeju</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          <article className="flex flex-col gap-5 rounded-[12px] bg-paper p-9">
            <span className="self-start rounded-full bg-linen px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em]">PRILJUBLJENA IZBIRA PAROV</span>
            <h3 className="font-display text-3xl font-medium">I. obrok, postrežen na krožnik</h3>
            <Bullets items={firstCourse} />
            <h3 className="mt-3 font-display text-3xl font-medium">II. obrok, hladno-topli bife</h3>
            <Bullets items={buffet} />
          </article>
          <article className="flex flex-col gap-5 rounded-[12px] bg-olive-deep p-9 text-cream">
            <span className="self-start rounded-full border border-cream/60 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em]">PRIMER 4-HODNEGA MENIJA</span>
            <h3 className="font-display text-3xl font-medium">Večhodni meni po vajinem okusu</h3>
            <ol className="flex flex-col text-base leading-normal">
              {fourCourses.map((c, i) => (
                <li key={c} className="flex gap-[18px] border-t border-cream/30 py-4 last:border-b">
                  <span className="min-w-6 font-display text-[28px] leading-none">{i + 1}</span>
                  <span>{c}</span>
                </li>
              ))}
            </ol>
            <p className="text-sm leading-relaxed text-on-olive-muted">Hode po potrebi spremenimo. Večhodni meni lahko kombinirata s hladno-toplim bifejem.</p>
          </article>
        </div>
        <p className="rounded-[12px] bg-linen px-6 py-5 text-base leading-relaxed">
          <strong className="font-semibold">Otroški meniji:</strong> otroci od 3 do 12 let plačajo polovično ceno, za mlajše od 3 let ne zaračunamo ničesar.
        </p>
      </section>

      <section id="all-inclusive" className="bg-ink text-cream">
        <div className="container-page flex flex-col gap-10 py-[clamp(56px,8vw,112px)]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-[720px] flex-col gap-3">
              <span className="eyebrow text-taupe-light">All inclusive</span>
              <h2 className="font-display text-[clamp(36px,4.5vw,56px)] leading-[1.05]">Meni in pijača v eni ceni</h2>
            </div>
            <div className="flex flex-wrap gap-10">
              <div className="flex flex-col gap-1">
                <span className="font-display text-[56px] leading-none">{prices.allInclusive} €</span>
                <span className="text-[13px] text-on-dark-muted">klasični, od prihoda v dvorano</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-[56px] leading-none">{prices.allInclusiveCocktails} €</span>
                <span className="text-[13px] text-on-dark-muted">z dvema koktajloma</span>
              </div>
            </div>
          </div>
          <dl className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            {drinks.map((d) => (
              <div key={d.title} className="flex flex-col gap-2 border-t border-cream/30 py-[22px] pr-6">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-taupe-light">{d.title}</dt>
                <dd className="text-[15px] leading-relaxed">{d.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="sladko" className="container-page flex flex-wrap items-start gap-[clamp(32px,5vw,72px)] py-[clamp(56px,8vw,112px)]">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-6">
          <span className="eyebrow text-taupe-deep">Sladki kotiček · {prices.sweetCorner} € na osebo</span>
          <h2 className="font-display text-[clamp(36px,4.5vw,56px)] leading-[1.05]">Ročno, v naši kuhinji, iz naravnih sestavin</h2>
          <ul className="columns-[220px] gap-8 text-base leading-loose">
            {sweets.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-[12px] bg-linen p-7">
            <div className="flex max-w-[420px] flex-col gap-1.5">
              <strong className="text-xs font-semibold tracking-[0.14em]">POROČNA TORTA</strong>
              <span className="text-[15px] leading-relaxed text-ink-muted">Popolnoma po vajinih željah. Pripravimo tudi monoporcijske in velvet torte.</span>
            </div>
            <span className="font-display text-[40px] leading-none">
              od 4,50 € <span className="font-sans text-sm">/ kos</span>
            </span>
          </div>
        </div>
        <div className="grid min-w-0 flex-[1_1_480px] grid-cols-2 gap-4">
          <Image src={torta} alt="Tridelna bela poročna torta s cvetjem" placeholder="blur" sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[2/3] w-full rounded-[12px] object-cover" />
          <div className="flex flex-col gap-4">
            <Image src={makroni} alt="Makroni v pastelnih barvah" placeholder="blur" sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-square w-full rounded-[12px] object-cover" />
            <Image src={sladkiKoticek} alt="Sladki kotiček s cakepopsi, makroni in piškoti" placeholder="blur" sizes="(min-width: 1024px) 25vw, 50vw" className="w-full flex-1 rounded-[12px] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-olive-deep text-cream">
        <div className="container-page flex flex-wrap items-center justify-between gap-8 py-[clamp(56px,8vw,96px)]">
          <h2 className="max-w-[760px] font-display text-[clamp(36px,4.5vw,56px)] font-light leading-[1.05]">Skupaj sestavimo meni, ki bo navdušil vajine goste.</h2>
          <div className="flex flex-wrap gap-3.5">
            <Link href="/#izracun" className={btnOutlineLight}>
              IZRAČUNAJTA CENO
            </Link>
            <Link href="/povprasevanje" className={btnLight}>
              POŠLJITA POVPRAŠEVANJE
            </Link>
          </div>
        </div>
      </section>
      <p className="container-page pt-6 text-sm text-ink-muted">Cene veljajo za sezono {hotel.season}.</p>
    </>
  );
}
