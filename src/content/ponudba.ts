// Edini vir resnice za dejstva in cene (poročni katalog 2026/2027).
// Iz tega se napolnijo besedila, kalkulator, FAQ in schema.org.

export const hotel = {
  name: "Hotel in restavracija Korošica",
  shortName: "Korošica",
  stars: 5,
  street: "Otiški Vrh 25d",
  postalCode: "2373",
  city: "Šentjanž pri Dravogradu",
  region: "Koroška",
  country: "SI",
  email: "info@korosica.si",
  phone: "+386 51 633 207",
  phoneHref: "tel:+38651633207",
  instagram: "https://www.instagram.com/korosica/",
  hotelSite: "https://korosica.si",
  season: "2026/2027",
} as const;

export const facts = {
  capacityMin: 180,
  capacityMax: 200,
  ceremonySeats: 20,
  rooms: 28,
  beds: 75,
} as const;

export const prices = {
  ceremonySetup: 700,
  catering: 22,
  menu: 68,
  allInclusive: 110,
  allInclusiveCocktails: 125,
  sweetCorner: 12,
  cakePerSlice: 4.5,
} as const;

export type PackageId = "catering" | "meni" | "ai" | "ai2";

export const packages: { id: PackageId; name: string; desc: string; price: number; label: string }[] = [
  { id: "catering", name: "Catering style", desc: "finger food, showcooking", price: prices.catering, label: `od ${prices.catering} €` },
  { id: "meni", name: "Meni, dva obroka", desc: "postrežen meni in bife", price: prices.menu, label: `od ${prices.menu} €` },
  { id: "ai", name: "All inclusive", desc: "meni in pijača", price: prices.allInclusive, label: `${prices.allInclusive} €` },
  { id: "ai2", name: "All inclusive +", desc: "z dvema koktajloma", price: prices.allInclusiveCocktails, label: `${prices.allInclusiveCocktails} €` },
];

export const faq: { q: string; a: string }[] = [
  { q: "Koliko gostov lahko povabiva?", a: `V dvorani s teraso je prostora za ${facts.capacityMin} do ${facts.capacityMax} gostov, vedno z dovolj velikim plesiščem.` },
  { q: "Ali lahko imava obred kar pri vas?", a: `Da. Civilni ali cerkveni obred pripravimo na prostem v parku ali paviljonu. Usklajevanje z uradnimi osebami prevzamemo mi. Priprava prostora stane ${prices.ceremonySetup} €.` },
  { q: "Kaj, če bo deževalo?", a: "Obred in sprejem prestavimo na pokrito teraso, ob močnem soncu pa pomagajo senčniki." },
  { q: "Do katere ure lahko traja zabava?", a: "Glasba in ples nista časovno omejena. Ko se zabava konča, so sobe v isti hiši." },
  { q: "Ali se najem dvorane plača posebej?", a: "Ne. Slavje poteka v naši dvorani in je vključeno v ceno kulinarike." },
  { q: "Koliko stane hrana in kaj je z otroki?", a: `Catering style je od ${prices.catering} € na osebo, meniji z dvema obrokoma od ${prices.menu} €, all inclusive z menijem in pijačo ${prices.allInclusive} € oziroma ${prices.allInclusiveCocktails} € z dvema koktajloma. Otroci od 3 do 12 let plačajo polovico, mlajši od 3 let nič.` },
  { q: "Kje bodo spali gostje?", a: `V hotelu je ${facts.rooms} sob in ${facts.beds} ležišč. Poročni gostje z neposredno rezervacijo dobijo ugodne cene, pozen zajtrk in kasnejšo odjavo, mladoporočenca pa sobo brezplačno.` },
  { q: "Ali lahko pripeljeva svojega dekoraterja ali cvetličarja?", a: "Seveda, z veseljem sodelujemo z vašimi načrtovalci in ponudniki. Če jih še nimata, vama priporočimo preverjene." },
];

export const fingerFood = [
  "Burgerčki, klasični in s pohancem",
  "Ocvrte kozice v kataifi testu",
  "Bao bunsi z natrgano svinjino",
  "Parmezanove in piščančje »lizike«",
  "Essigflajš",
  "Hobotnica v solati",
  "Fokača z ramstekom in fokača z mortadelo",
  "Različni wrapi in kanapeji",
  "Asortiman svežega sadja",
];

export const showcooking = [
  "Tomahawk na žaru ali drug izbran kos mesa",
  "Tataki tuna na avokadu in algah wakame",
  "Pice iz glinene peči",
  "Testenine ali ravioli v parmezanovem kolutu",
  "Peka z žara in burgerji",
  "Spare ribs in perutničke",
  "Pečen krompir",
];

export const firstCourse = [
  "Goveja juha z rezanci in gobova juha",
  "Pečen svinjski file v slanini, puranji file v panko drobtinah, pire, sirov štrukelj, sotirana zelenjava",
  "Sestavljena solata",
  "Kava",
];

export const buffet = [
  "Tatarski biftek, kraški pršut, domače salame, kraški zašinek, siri z oreščki",
  "Mornarska ponev, piščančji fingersi, spare ribs",
  "Njoki s tremi siri, slan krompir z blitvo, pečen krompir, zelenjava z žara",
  "Lignji po pariško, polnjeni in tržaški lignji",
  "Šopska, francoska in caprese solata",
  "Obara",
];

export const fourCourses = [
  "Škampov karpačo z domačo redukcijo balzamičnega kisa in okisanim osočnikom",
  "Kremna gobova juha z ajdovimi žganci, jurčkom iz ajdove kaše in krompirja ter ajdovimi kokicami",
  "Divjačinski ragu z domačimi žlinkrofi, polnjenimi z rikoto, in parmezanovo peno",
  "Počasi kuhana teletina s topinamburjevim pirejem, ajdovim štrukljem in sotirano zelenjavo",
];

export const drinks: { title: string; text: string }[] = [
  { title: "Aperitiv ob prihodu", text: "1 kozarec: viljamovka, borovničke, jägermeister, whiskey ali penina" },
  { title: "Vino", text: "Janževec, Jeruzalemčan, Konjičan, Cviček, Refošk" },
  { title: "Pivo", text: "Union, Laško, Radler, Heineken; po želji točeno Union ali Heineken" },
  { title: "Brezalkoholno", text: "Jabolčni, breskov in pomarančni sok; Radenska, Fanta, Coca-Cola" },
  { title: "Koktajli in spritzi", text: "Aperol Spritz, Hugo, Mojito, Gin & Tonic ali po vajinih željah" },
];

export const sweets = [
  "Panakota z jagodami",
  "Kozarčki s čokoladnim moussom",
  "Tapiokin puding z mangom",
  "Tiramisu",
  "Makroni",
  "Cakepopsi",
  "»Črviva« jabolka",
  "Limonine pite z meringo",
  "Šamrole",
  "Mini pavlove z angleško kremo",
  "Hišne Ferrero Rocher kroglice",
  "Linške oči in vaniljevi rogljički",
  "Hrustljave princeske",
  "Sadje",
];

export const eur = (n: number) => `${Math.round(n).toLocaleString("sl-SI")}`;
