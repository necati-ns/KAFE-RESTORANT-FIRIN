"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface GalleryItem {
  id: string;
  image: string;
  titleTr: string;
  titleEn: string;
  categoryTr: string;
  categoryEn: string;
  span?: string; // Tailwind grid span
}

const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    titleTr: "Meşe Odun Fırını ve Ana Yemek Salonu",
    titleEn: "Oak Hearth & Dining Room Atmosphere",
    categoryTr: "Mekân & Atmosfer",
    categoryEn: "Interior",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: "g-2",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    titleTr: "72 Saat Dinlenmiş Karakılçık Ekmeği",
    titleEn: "72-Hour Sourdough Loaves Cooling",
    categoryTr: "Artisan Fırın",
    categoryEn: "Bakery",
    span: "col-span-1",
  },
  {
    id: "g-3",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
    titleTr: "V60 Demleme ve Kahve Barı",
    titleEn: "Specialty Pour-over Bar",
    categoryTr: "Nitelikli Kahve",
    categoryEn: "Coffee",
    span: "col-span-1",
  },
  {
    id: "g-4",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop",
    titleTr: "Antep Fıstıklı Çıtır Kruvasanlar",
    titleEn: "Fresh Pistachio Viennoiserie",
    categoryTr: "Viennoiserie",
    categoryEn: "Pastry",
    span: "col-span-1 md:col-span-2",
  },
  {
    id: "g-5",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop",
    titleTr: "Ege Levreği Crudo Sunumu",
    titleEn: "Aegean Sea Bass Crudo Plating",
    categoryTr: "Mutfak",
    categoryEn: "Culinary",
    span: "col-span-1",
  },
  {
    id: "g-6",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1200&auto=format&fit=crop",
    titleTr: "Atelier Sabah Kahvaltı Masası",
    titleEn: "Morning Atelier Breakfast Spread",
    categoryTr: "Brunch",
    categoryEn: "Brunch",
    span: "col-span-1",
  },
];

export function GallerySection() {
  const { lang, t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIdx(index);
  const closeLightbox = () => setActiveIdx(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F5EFEB] text-[#2D211A] border-b border-[#D8CBBF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D8CBBF]/40 gap-6">
          <div>
            <span className="font-mono-meta text-xs text-[#A85B3F] tracking-widest uppercase">
              {t("GÖRSEL GÜNLÜK", "VISUAL JOURNAL")}
            </span>
            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold tracking-tight text-[#222820] mt-2">
              {t("Mekân, Doku & Detaylar", "Atmosphere & Textures")}
            </h2>
          </div>
          <p className="font-sans-body text-sm text-[#352820]/75 max-w-sm">
            {t(
              "Taş değirmenin tozu, odun ateşinin isi ve mermer tezgâhın dinginliği.",
              "Stone-mill dust, oak fire smoke, and the calm elegance of marble counters."
            )}
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className={`group relative overflow-hidden rounded-sm cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 ${
                item.span || "col-span-1"
              }`}
            >
              <Image
                src={item.image}
                alt={lang === "tr" ? item.titleTr : item.titleEn}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="font-mono-meta text-[10px] text-[#A85B3F] uppercase tracking-wider">
                  {lang === "tr" ? item.categoryTr : item.categoryEn}
                </span>
                <h3 className="font-serif-title text-base font-bold mt-1">
                  {lang === "tr" ? item.titleTr : item.titleEn}
                </h3>
                <div className="mt-2 flex items-center space-x-1.5 text-xs text-[#D8CBBF]">
                  <Eye className="w-3.5 h-3.5 text-[#A85B3F]" />
                  <span>{t("Büyüt", "View")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 z-50 rounded-full bg-white/10"
            aria-label="Kapat"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 text-white/80 hover:text-white p-3 z-50 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Current Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={galleryItems[activeIdx].image}
                alt={lang === "tr" ? galleryItems[activeIdx].titleTr : galleryItems[activeIdx].titleEn}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="text-center text-white mt-4">
              <span className="font-mono-meta text-xs text-[#A85B3F] uppercase tracking-wider">
                {lang === "tr" ? galleryItems[activeIdx].categoryTr : galleryItems[activeIdx].categoryEn}
              </span>
              <h3 className="font-serif-title text-xl font-bold mt-1">
                {lang === "tr" ? galleryItems[activeIdx].titleTr : galleryItems[activeIdx].titleEn}
              </h3>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 text-white/80 hover:text-white p-3 z-50 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
