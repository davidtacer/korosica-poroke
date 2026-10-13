import { hotel } from "@/content/ponudba";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-cream">
      <div className="container-page flex flex-wrap justify-between gap-10 py-14 text-sm leading-7 text-ink-muted">
        <div className="flex items-start gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/korosica-znak.svg" alt="Hotel Korošica" width={56} height={56} className="h-14 w-14" />
          <address className="not-italic">
            <strong className="text-xs font-semibold tracking-[0.12em] text-ink">HOTEL IN RESTAVRACIJA KOROŠICA</strong>
            <br />
            {hotel.street}
            <br />
            {hotel.postalCode} {hotel.city}, Slovenija
          </address>
        </div>
        <div>
          <a href={`mailto:${hotel.email}`} className="text-ink">
            {hotel.email}
          </a>
          <br />
          <a href={hotel.phoneHref} className="text-ink">
            {hotel.phone}
          </a>
          <br />
          <a href={hotel.instagram} className="text-ink" target="_blank" rel="noopener noreferrer">
            @korosica
          </a>
        </div>
        <div>
          Hotel, restavracija in wellness:
          <br />
          <a href={hotel.hotelSite} target="_blank" rel="noopener noreferrer" className="text-ink">
            korosica.si
          </a>
        </div>
        <div>
          SL · EN · DE · HR · IT
          <br />© {new Date().getFullYear()} Hotel Korošica
        </div>
      </div>
    </footer>
  );
}
