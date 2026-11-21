export interface EventItem {
  id: string;
  titleTr: string;
  titleEn: string;
  dateTr: string;
  dateEn: string;
  time: string;
  priceTr: string;
  priceEn: string;
  quotaTr: string;
  quotaEn: string;
  descTr: string;
  descEn: string;
  image: string;
  categoryTr: string;
  categoryEn: string;
  highlightsTr: string[];
  highlightsEn: string[];
}

export const upcomingEvents: EventItem[] = [
  {
    id: "sourdough-masterclass",
    titleTr: "Usta Sınıfı: 72 Saatlik Ekşi Maya & Ata Buğdayları",
    titleEn: "Masterclass: 72-Hour Sourdough & Heirloom Grains",
    dateTr: "29 Kasım 2026, Cumartesi",
    dateEn: "Saturday, November 29, 2026",
    time: "10:00 – 14:00",
    priceTr: "2.400 ₺ (Demo Atölye)",
    priceEn: "2,400 ₺ (Demo Workshop)",
    quotaTr: "10 Katılımcı ile Sınırlı",
    quotaEn: "Limited to 10 Participants",
    descTr: "Baş Fırıncımız eşliğinde Karakılçık unuyla hamur yoğurma, hidrasyon yönetimi, katlama teknikleri, fırın taşı dinamikleri ve kendi 12 yıllık canlı mayanızı eve götürme deneyimi.",
    descEn: "Hands-on kneading with stoneground heirloom grains, managing high-hydration, laminating, Dutch oven baking, plus taking home your own live 12-year mother starter.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    categoryTr: "Atölye",
    categoryEn: "Workshop",
    highlightsTr: [
      "Özel Fırıncı Önlüğü & Jilet Bıçağı Hediyesi",
      "Canlı Maya Kavanozu (12 Yıllık Miras)",
      "Sıcak Ekmek & Şarap Eşleşmeli Tadım Sofrası",
    ],
    highlightsEn: [
      "Signature Baker's Apron & Scoring Lame",
      "Live Mother Starter Jar (12-Year Lineage)",
      "Warm Bread & Wine Pairing Luncheon",
    ],
  },
  {
    id: "autumn-chefs-table",
    titleTr: "Şef Masası: 7 Aşamalı Sonbahar Hasat Eşleşmesi",
    titleEn: "Chef's Table: 7-Course Autumn Harvest Pairing",
    dateTr: "05 Aralık 2026, Cuma",
    dateEn: "Friday, December 5, 2026",
    time: "19:30 – 23:00",
    priceTr: "3.800 ₺ (Demo Rezervasyon)",
    priceEn: "3,800 ₺ (Demo Reservation)",
    quotaTr: "12 Kişilik Özel Masa",
    quotaEn: "Exclusive 12-Seat Counter",
    descTr: "Şef Kenan Demir'in açık mutfakta hazırlayacağı, yerel bağların seçkileri ve odun ateşinde pişmiş mevsimsel kuzu ve deniz mahsullerinden oluşan özel akşam deneyimi.",
    descEn: "Culinary Director Kenan Demir presents a 7-stage dining journey seated directly at our marble hearth counter, paired with boutique Anatolian vintages.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    categoryTr: "Tadım Deneyimi",
    categoryEn: "Tasting Experience",
    highlightsTr: [
      "Açık Meşe Ateşinde Canlı Pişirme",
      "7 Aşamalı İmza Gastronomi Rotası",
      "Sommelier Anlatımlı Eşleşmeler",
    ],
    highlightsEn: [
      "Live Cooking Over Glowing Embers",
      "7-Stage Signature Gastronomic Arc",
      "Sommelier-Guided Heritage Pairings",
    ],
  },
  {
    id: "specialty-coffee-sensory",
    titleTr: "Duyusal Kahve & Tadım Seansı (Cupping Lab)",
    titleEn: "Sensory Coffee Cupping & Terroir Exploration",
    dateTr: "13 Aralık 2026, Pazar",
    dateEn: "Sunday, December 13, 2026",
    time: "11:00 – 13:00",
    priceTr: "950 ₺ (Demo Atölye)",
    priceEn: "950 ₺ (Demo Workshop)",
    quotaTr: "8 Kişi",
    quotaEn: "8 Seats",
    descTr: "Etiyopya, Kolombiya ve Kenya mikrolotlarının SCA standartlarında cupping protokolüyle tadımı; asidite, gövde ve aroma çarkı analizi.",
    descEn: "SCA standard cupping table featuring rare microlots from Ethiopia, Colombia, and Kenya; exploring sensory wheels, acidity grading, and bean genetics.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
    categoryTr: "Tadım",
    categoryEn: "Tasting",
    highlightsTr: [
      "6 Farklı Mikro Lot Çekirdek Tadımı",
      "SCA Tadım Kaşığı & Aroma Rehberi",
      "Taze Kavrulmuş 250g Paket Hediyesi",
    ],
    highlightsEn: [
      "Cupping of 6 Distinct Single Origins",
      "Official SCA Cupping Spoon & Flavour Map",
      "Freshly Roasted 250g Whole Bean Bag",
    ],
  },
];
