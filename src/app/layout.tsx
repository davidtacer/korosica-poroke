import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";
// Pisave gostimo sami (GDPR, brez klicev na Google): latin + latin-ext za č, š, ž.
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/allura/400.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Poroke na Koroškem | Hotel Korošica – obred v parku, do 200 gostov",
    template: "%s | Poroke Korošica",
  },
  description:
    "Poročna lokacija na Koroškem: civilni ali cerkveni obred v parku, restavracija za 180–200 gostov, 28 sob za goste in glasba brez časovne omejitve. Hotel Korošica, Šentjanž pri Dravogradu.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sl_SI",
    siteName: "Poroke Korošica",
    url: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sl">
      <body>
        <a href="#vsebina" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-cream">
          Skoči na vsebino
        </a>
        <Header />
        <main id="vsebina">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
