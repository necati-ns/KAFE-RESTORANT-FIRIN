/**
 * NSCODING RESTAURANT · CAFÉ · BAKERY
 * Business Configuration (Demolabeled)
 */

export const businessConfig = {
  isDemo: true,
  name: "NSCODING RESTAURANT · CAFÉ · BAKERY",
  subtitle: "Atelier · Mutfak · Fırın / Kitchen · Bakery · Coffee",
  address: {
    street: "Karabağlar (Demo Lokasyon)",
    district: "Karabağlar",
    city: "İzmir",
    country: "Türkiye",
    postalCode: "35140",
    geo: {
      latitude: 38.3736,
      longitude: 27.1287,
    },
  },
  contact: {
    phoneDisplay: "+90 (551) 078 9071 (Demo Rezervasyon Hattı)",
    phoneClean: "+905510789071",
    whatsappNumber: "905510789071",
    email: "nscodingtr@gmail.com",
  },
  hours: {
    tr: [
      { days: "Pazartesi – Perşembe", hours: "08:00 – 23:00", note: "Fırın: 07:30'dan itibaren" },
      { days: "Cuma – Cumartesi", hours: "08:00 – 00:30", note: "Akşam Servisi & Canlı Mutfak" },
      { days: "Pazar", hours: "08:30 – 22:30", note: "Artisan Brunch & Çay Saati" },
    ],
    en: [
      { days: "Monday – Thursday", hours: "08:00 – 23:00", note: "Bakery opens from 07:30" },
      { days: "Friday – Saturday", hours: "08:00 – 00:30", note: "Dinner Service & Open Kitchen" },
      { days: "Sunday", hours: "08:30 – 22:30", note: "Artisan Brunch & Afternoon Bakes" },
    ],
  },
  features: {
    tr: [
      "72 Saatlik Taş Değirmen Ekşi Mayası",
      "Karakılçık & Siyez Buğdayı",
      "Meşe Odunu Taş Fırın",
      "Mikro Lot Tek Köken Nitelikli Kahve",
      "Mevsimsel Yerel Üretici Malzemeleri",
      "Açık Şef Masası & Tadım Menüsü",
    ],
    en: [
      "72-Hour Stoneground Sourdough",
      "Heirloom Anatolian Grains",
      "Oak Wood-Fired Hearth",
      "Micro-Lot Single Origin Coffee",
      "Hyper-Seasonal Smallholder Sourcing",
      "Interactive Chef's Table Experience",
    ],
  },
};
