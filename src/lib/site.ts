// Javni URL strani: canonical, sitemap, schema.org in absolutne poti do og slike.
// 1. NEXT_PUBLIC_SITE_URL, ko bo domena izbrana (npr. https://poroke-korosica.si)
// 2. sicer produkcijski ali predogledni naslov na Vercelu, da og slika deluje že pred domeno
// 3. lokalno http://localhost:3000
const vercel = process.env.VERCEL_ENV === "production" ? process.env.VERCEL_PROJECT_PRODUCTION_URL : process.env.VERCEL_URL;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (vercel ? `https://${vercel}` : `http://localhost:${process.env.PORT ?? 3000}`);
