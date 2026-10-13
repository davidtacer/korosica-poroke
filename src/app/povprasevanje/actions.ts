"use server";

import { hotel } from "@/content/ponudba";

export type InquiryState = { ok: boolean; error?: string; guests?: number };

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendInquiry(_prev: InquiryState, form: FormData): Promise<InquiryState> {
  // Past za robote: pravi uporabniki tega polja ne vidijo.
  if (form.get("website")) return { ok: true };

  const get = (k: string) => String(form.get(k) ?? "").trim().slice(0, 2000);
  const data = {
    datum: get("datum"),
    rezervniDatum: get("rezervniDatum"),
    obred: get("obred"),
    gostje: Number(get("gostje")) || 0,
    kulinarika: get("kulinarika"),
    sobe: get("sobe"),
    imeni: get("imeni"),
    email: get("email"),
    telefon: get("telefon"),
    jezik: get("jezik"),
    sporocilo: get("sporocilo"),
    soglasje: form.get("soglasje") === "on",
  };

  if (!data.imeni || !data.email) return { ok: false, error: "Prosimo, vpišita imeni in e-pošto." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return { ok: false, error: "E-poštni naslov ni pravilen." };
  if (!data.soglasje) return { ok: false, error: "Za odgovor potrebujemo vajino soglasje." };

  const rows = [
    ["Imeni", data.imeni],
    ["E-pošta", data.email],
    ["Telefon", data.telefon],
    ["Jezik", data.jezik],
    ["Želeni datum", data.datum],
    ["Rezervni datum", data.rezervniDatum],
    ["Obred", data.obred],
    ["Gostje", String(data.gostje)],
    ["Kulinarika", data.kulinarika],
    ["Prenočitev", data.sobe],
    ["Sporočilo", data.sporocilo],
  ];

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // Brez ključa (razvoj): povpraševanje samo izpišemo v dnevnik strežnika.
    console.log("[povprasevanje]", Object.fromEntries(rows));
    return { ok: true, guests: data.gostje };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.INQUIRY_FROM ?? "Poroke Korošica <poroke@resend.dev>",
      to: [process.env.INQUIRY_TO ?? hotel.email],
      reply_to: data.email,
      subject: `Poročno povpraševanje: ${data.imeni}${data.datum ? `, ${data.datum}` : ""}`,
      html: `<table>${rows.map(([k, v]) => `<tr><th align="left">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</table>`,
    }),
  });

  if (!res.ok) return { ok: false, error: `Pošiljanje ni uspelo. Pišita nam na ${hotel.email} ali pokličita ${hotel.phone}.` };
  return { ok: true, guests: data.gostje };
}
