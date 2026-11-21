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
    hearth: "Odun Ateşi Yanı (Hearth)",
    bakery_terrace: "Fırın & Avlu Terası",
    dining_room: "Ana Yemek Salonu",
    chef_counter: "Şef Masası / Bar",
  };

  const seatingLabelsEn: Record<string, string> = {
    hearth: "Wood-Fired Hearthside",
    bakery_terrace: "Bakery & Courtyard Terrace",
    dining_room: "Main Dining Hall",
    chef_counter: "Chef's Counter",
  };

  const area = isTr ? seatingLabelsTr[payload.seatingArea] || "Standart" : seatingLabelsEn[payload.seatingArea] || "Standard";

  const message = isTr
    ? `🌿 *NSCODING RESTAURANT · CAFÉ · BAKERY Rezervasyon Talebi (Demo)*\n\n` +
      `👤 *Misafir:* ${payload.name}\n` +
      `📞 *İletişim:* ${payload.phone}\n` +
      `📅 *Tarih:* ${payload.date}\n` +
      `⏰ *Saat:* ${payload.time}\n` +
      `👥 *Kişi Sayısı:* ${payload.guests} Kişi\n` +
      `📍 *Masa Tercihi:* ${area}\n` +
      `${payload.notes ? `📝 *Özel İstek/Alerjen:* ${payload.notes}\n` : ""}\n` +
      `_Not: Bu mesaj demo web sitesi arayüzü üzerinden oluşturulmuştur._`
    : `🌿 *NSCODING RESTAURANT · CAFÉ · BAKERY Reservation Request (Demo)*\n\n` +
      `👤 *Guest:* ${payload.name}\n` +
      `📞 *Phone:* ${payload.phone}\n` +
      `📅 *Date:* ${payload.date}\n` +
      `⏰ *Time:* ${payload.time}\n` +
      `👥 *Guests:* ${payload.guests} person(s)\n` +
      `📍 *Seating:* ${area}\n` +
      `${payload.notes ? `📝 *Notes/Allergies:* ${payload.notes}\n` : ""}\n` +
      `_Note: Generated via NSCODING website showcase demo._`;

  return encodeURIComponent(message);
}

export function formatWhatsAppOrder(itemTitle: string, price: number, lang: "tr" | "en" = "tr"): string {
  const isTr = lang === "tr";
  const message = isTr
    ? `🥖 *NSCODING Sipariş & Bilgi Talebi (Demo)*\n\n` +
      `Merhaba, web sitenizden şu ürün için bilgi almak istiyorum:\n\n` +
      `• *Ürün:* ${itemTitle}\n` +
      `• *Fiyat:* ${price} ₺\n\n` +
      `_Sipariş durumu ve teslimat saatleri hakkında bilgi alabilir miyim?_`
    : `🥖 *NSCODING Order Inquiry (Demo)*\n\n` +
      `Hello, I would like to inquire regarding:\n\n` +
      `• *Item:* ${itemTitle}\n` +
      `• *Price:* ${price} ₺\n\n` +
      `_Could you provide availability and dispatch times?_`;

  return encodeURIComponent(message);
}

export function getWhatsAppUrl(encodedText: string): string {
  return `https://wa.me/${businessConfig.contact.whatsappNumber}?text=${encodedText}`;
}
