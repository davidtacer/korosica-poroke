import { facts, faq, hotel, prices } from "@/content/ponudba";
import { siteUrl } from "@/lib/site";

const offer = (name: string, price: number, description: string) => ({
  "@type": "Offer",
  name,
  description,
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    price,
    priceCurrency: "EUR",
    unitText: "na osebo",
  },
  offeredBy: { "@id": `${siteUrl}/#hotel` },
});

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hotel",
        "@id": `${siteUrl}/#hotel`,
        name: hotel.name,
        url: siteUrl,
        sameAs: [hotel.hotelSite, hotel.instagram],
        email: hotel.email,
        telephone: hotel.phone,
        image: `${siteUrl}/opengraph-image.jpg`,
        logo: `${siteUrl}/brand/korosica-znak.svg`,
        starRating: { "@type": "Rating", ratingValue: String(hotel.stars) },
        numberOfRooms: facts.rooms,
        address: {
          "@type": "PostalAddress",
          streetAddress: hotel.street,
          postalCode: hotel.postalCode,
          addressLocality: hotel.city,
          addressRegion: hotel.region,
          addressCountry: hotel.country,
        },
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: `Poroke do ${facts.capacityMax} gostov`, value: true },
          { "@type": "LocationFeatureSpecification", name: "Civilni ali cerkveni obred v parku in paviljonu", value: true },
          { "@type": "LocationFeatureSpecification", name: "Pokrita terasa ob dežju", value: true },
          { "@type": "LocationFeatureSpecification", name: "Glasba brez časovne omejitve", value: true },
          { "@type": "LocationFeatureSpecification", name: `${facts.rooms} sob, ${facts.beds} ležišč za goste`, value: true },
        ],
        availableLanguage: ["sl", "en", "de", "hr", "it"],
      },
      {
        "@type": "EventVenue",
        "@id": `${siteUrl}/#restavracija`,
        name: "Restavracija s teraso, Hotel Korošica",
        maximumAttendeeCapacity: facts.capacityMax,
        containedInPlace: { "@id": `${siteUrl}/#hotel` },
      },
      {
        "@type": "EventVenue",
        "@id": `${siteUrl}/#park`,
        name: "Park s paviljonom, Hotel Korošica",
        description: "Prostor za civilni ali cerkveni obred na prostem.",
        containedInPlace: { "@id": `${siteUrl}/#hotel` },
      },
      offer("Catering style", prices.catering, "Finger food in showcooking, cena od."),
      offer("Meni, dva obroka", prices.menu, "Postrežen meni in hladno-topli bife, cena od."),
      offer("All inclusive", prices.allInclusive, "Klasični meni in pijača od prihoda v restavracijo."),
      offer("All inclusive z dvema koktajloma", prices.allInclusiveCocktails, "Klasični meni, pijača in dva koktajla."),
      {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export default function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
