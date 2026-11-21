import { businessConfig } from "@/config/business";

export interface ReservationPayload {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: "hearth" | "bakery_terrace" | "dining_room" | "chef_counter";
  notes?: string;
  lang?: "tr" | "en";
}

export function formatWhatsAppReservation(payload: ReservationPayload): string {
  const isTr = payload.lang !== "en";
  
  const seatingLabelsTr: Record<string, string> = {
    hearth: "Odun Atesi Yani (Hearth)",
    bakery_terrace: "Firin & Avlu Terasi",
    dining_room: "Ana Yemek Salonu",
    chef_counter: "Sef Masasi / Bar",
  };

  const seatingLabelsEn: Record<string, string> = {
    hearth: "Wood-Fired Hearthside",
    bakery_terrace: "Bakery & Courtyard Terrace",
    dining_room: "Main Dining Hall",
    chef_counter: "Chef's Counter",
  };

  const area = isTr ? seatingLabelsTr[payload.seatingArea] || "Standart" : seatingLabelsEn[payload.seatingArea] || "Standard";

  const message = isTr
    ? `*NSCODING RESTAURANT · CAFE · BAKERY Rezervasyon Talebi (Demo)*\n\n` +
      `- *Misafir:* ${payload.name}\n` +
      `- *Iletisim:* ${payload.phone}\n` +
      `- *Tarih:* ${payload.date}\n` +
      `- *Saat:* ${payload.time}\n` +
      `- *Kisi Sayisi:* ${payload.guests} Kisi\n` +
      `- *Masa Tercihi:* ${area}\n` +
      `${payload.notes ? `- *Ozel Istek / Not:* ${payload.notes}\n` : ""}\n` +
      `[Not: Bu mesaj demo web sitesi uzerinden olusturulmustur.]`
    : `*NSCODING RESTAURANT · CAFE · BAKERY Reservation Request (Demo)*\n\n` +
      `- *Guest:* ${payload.name}\n` +
      `- *Phone:* ${payload.phone}\n` +
      `- *Date:* ${payload.date}\n` +
      `- *Time:* ${payload.time}\n` +
      `- *Guests:* ${payload.guests} person(s)\n` +
      `- *Seating Area:* ${area}\n` +
      `${payload.notes ? `- *Special Notes:* ${payload.notes}\n` : ""}\n` +
      `[Note: Generated via NSCODING website showcase demo.]`;

  return encodeURIComponent(message);
}

export function formatWhatsAppOrder(itemTitle: string, price: number, lang: "tr" | "en" = "tr"): string {
  const isTr = lang === "tr";
  const message = isTr
    ? `*NSCODING Siparis & Bilgi Talebi (Demo)*\n\n` +
      `Merhaba, web sitenizden su urun hakkinda bilgi almak istiyorum:\n\n` +
      `- *Urun:* ${itemTitle}\n` +
      `- *Fiyat:* ${price} TL\n\n` +
      `[Siparis durumu ve saatleri hakkinda bilgi alabilir miyim?]`
    : `*NSCODING Order Inquiry (Demo)*\n\n` +
      `Hello, I would like to inquire regarding:\n\n` +
      `- *Item:* ${itemTitle}\n` +
      `- *Price:* ${price} TL\n\n` +
      `[Could you provide availability and dispatch times?]`;

  return encodeURIComponent(message);
}

export function getWhatsAppUrl(encodedText: string): string {
  return `https://wa.me/${businessConfig.contact.whatsappNumber}?text=${encodedText}`;
}
