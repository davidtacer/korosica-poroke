import type { Metadata } from "next";
import Image from "next/image";
import { hotel } from "@/content/ponudba";
import izhodPara from "@/assets/images/izhod-para.jpg";
import InquiryForm from "./InquiryForm";
import CloseButton from "./CloseButton";

export const metadata: Metadata = {
  title: "Povpraševanje za poroko",
  description: "Preverita prost datum za poroko v Hotelu Korošica in prejmita ponudbo z meniji, cenami in predlogom poteka dneva.",
  alternates: { canonical: "/povprasevanje" },
  openGraph: { url: "/povprasevanje" },
};

const foodIds = ["catering", "meni", "ai", "ai2"];

export default async function Povprasevanje({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const sp = await searchParams;
  const g = Number(sp.gostje);
  const initialGuests = g >= 20 && g <= 200 ? Math.round(g / 5) * 5 : 120;
  const paket = sp.paket === "ai2" ? "ai" : sp.paket;
  const initialFood = paket && foodIds.includes(paket) ? paket : "meni";

  return (
    <div className="relative flex min-h-[calc(100vh-73px)] flex-wrap">
      <div className="absolute right-4 top-4 z-10 md:right-6 md:top-6">
        <CloseButton />
      </div>
      <aside className="relative min-h-[420px] min-w-0 flex-[1_1_420px] overflow-hidden bg-olive-deep text-cream">
        <Image src={izhodPara} alt="" aria-hidden="true" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover opacity-35" />
        <div className="relative flex h-full flex-col justify-end gap-10 p-[clamp(28px,4vw,56px)]">
          <div className="flex flex-col gap-5">
            <p className="font-script text-[44px] text-on-olive-muted">vaša Korošica</p>
            <h1 className="font-display text-[clamp(44px,5vw,72px)] font-light leading-none">Povejta nam o vajinem dnevu.</h1>
            <p className="max-w-[440px] text-[17px] font-light leading-relaxed">
              Trije kratki koraki. Preverimo datum in vama pošljemo ponudbo z meniji, cenami in predlogom poteka dneva.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 text-[15px]">
            <span className="text-xs font-semibold tracking-[0.14em]">RAJE POKLIČETA?</span>
            <a href={hotel.phoneHref} className="text-[22px] text-cream no-underline">
              {hotel.phone}
            </a>
            <a href={`mailto:${hotel.email}`} className="text-cream">
              {hotel.email}
            </a>
          </div>
        </div>
      </aside>
      <div className="flex min-w-0 flex-[999_1_560px] flex-col px-[clamp(16px,5vw,96px)] pb-[clamp(28px,5vw,80px)] pt-[clamp(72px,7vw,96px)]">
        <InquiryForm initialGuests={initialGuests} initialFood={initialFood} />
      </div>
    </div>
  );
}
