# Poroke Korošica

Poročna spletna stran Hotela in restavracije Korošica (verzija 1 dizajna). Next.js 15 (App Router), Tailwind CSS 4, TypeScript.

## Zagon

```bash
npm install
cp .env.example .env.local   # po potrebi izpolni
npm run dev                   # http://localhost:3000
npm run build && npm start    # produkcija
```

## Struktura

| Pot | Vsebina |
|---|---|
| `src/content/ponudba.ts` | **Edini vir dejstev in cen** (katalog 2026/2027). Besedila, kalkulator, FAQ, schema.org in llms.txt se ravnajo po njem. Ob novi sezoni popravi tu. |
| `src/app/page.tsx` | Domača stran: hero, dejstva, obred, potek dneva, prostori, kulinarika, kalkulator, prenočitev, trenutki, FAQ, CTA |
| `src/app/kulinarika/` | Vsi meniji in cene |
| `src/app/povprasevanje/` | Obrazec v treh korakih + strežniška akcija (Resend) |
| `src/components/` | Glava, noga, kalkulator, JSON-LD |
| `src/app/globals.css` | Žetoni CGP (barve, pisave) kot Tailwind `@theme` |
| `src/assets/images/` | Fotografije iz poročnega kataloga |
| `public/brand/` | Vektorski logotipi |
| `public/llms.txt`, `src/app/robots.ts`, `src/app/sitemap.ts` | SEO in AI iskalniki |

## Pisave

Katalog uporablja Hatton, MADE Evolve Sans in Hertine. Na spletu so zamenjane z Google Fonts (Cormorant Garamond, Jost, Allura) prek `next/font`.

## Še odprto

- Jezikovne različice EN, DE, HR, IT (priporočeno: `next-intl` z lokaliziranimi potmi in hreflang); stikalo jezika v glavi je zaenkrat le prikaz.
- Podatki, ki jih mora potrditi hotel: status civilnega obreda pri UE Dravograd, ekskluzivni najem, zamašnina, ara in odpoved, degustacija, cene sob za goste, prosti termini, kontaktna oseba in odzivni čas.
- Domena (`NEXT_PUBLIC_SITE_URL`).
