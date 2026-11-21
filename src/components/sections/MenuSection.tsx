"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { menuCategories, menuItems, MenuItem } from "@/config/menu-data";
import { Sparkles, Info, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { formatWhatsAppOrder, getWhatsAppUrl } from "@/lib/utils/whatsapp";

interface MenuSectionProps {
  onSelectItem?: (item: MenuItem) => void;
}

export function MenuSection({ onSelectItem }: MenuSectionProps) {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#F5EFEB] text-[#2D211A] relative border-b border-[#D8CBBF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#A85B3F]/10 text-[#A85B3F] text-xs font-mono-meta mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("MEVSİMSEL GASTRONOMİ SEÇKİSİ", "SEASONAL CULINARY REPERTOIRE")}</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222820]">
            {t("Atelier Menü", "The Atelier Menu")}
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-[#352820]/80 mt-4 leading-relaxed">
            {t(
              "Tüm yemeklerimiz odun ateşi, taş fırın ve geleneksel yöntemlerle günlük olarak hazırlanır. Malzemelerimiz yerel kooperatif ve butik üreticilerden temin edilmektedir.",
              "Every plate is created daily using slow wood-fired and stoneground hearth techniques. Sourced exclusively from boutique cooperatives and regenerative Anatolian growers."
            )}
          </p>
        </div>

        {/* Category Filters with Visual Scroll Indicators & Horizontal Arrows */}
        <div className="relative max-w-5xl mx-auto mb-14">
          {/* Scroll instruction for mobile/tablet */}
          <div className="flex sm:hidden items-center justify-center space-x-1.5 text-[11px] font-mono-meta text-[#A85B3F] mb-3">
            <ChevronLeft className="w-3.5 h-3.5 animate-pulse" />
            <span>{t("Kategorileri kaydırarak inceleyin", "Swipe to browse categories")}</span>
            <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
          </div>

          {/* Left subtle fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-3 w-8 bg-gradient-to-r from-[#F5EFEB] to-transparent z-10 hidden sm:block" />
          
          {/* Category Tabs Wrapper */}
          <div className="flex items-center sm:justify-center overflow-x-auto pb-3 px-4 space-x-2.5 scrollbar-thin scrollbar-thumb-[#D8CBBF] scrollbar-track-transparent snap-x">
            {menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2.5 rounded-sm text-xs md:text-sm font-sans-body uppercase tracking-wider transition-all duration-200 cursor-pointer shrink-0 snap-center shadow-xs ${
                    isActive
                      ? "bg-[#222820] text-white shadow-md font-semibold ring-2 ring-[#A85B3F]"
                      : "bg-white/80 text-[#352820]/80 hover:bg-white hover:text-[#222820] border border-[#D8CBBF]"
                  }`}
                >
                  {lang === "tr" ? cat.labelTr : cat.labelEn}
                </button>
              );
            })}
          </div>

          {/* Right subtle fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-3 w-8 bg-gradient-to-l from-[#F5EFEB] to-transparent z-10 hidden sm:block" />
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-sm border border-[#D8CBBF]/60 overflow-hidden shadow-sm hover:shadow-md hover:border-[#A85B3F] transition-all duration-300 flex flex-col justify-between"
            >
              <div
                className="relative aspect-[16/10] w-full overflow-hidden cursor-pointer"
                onClick={() => onSelectItem && onSelectItem(item)}
              >
                <Image
                  src={item.image}
                  alt={lang === "tr" ? item.nameTr : item.nameEn}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.isSignature && (
                  <div className="absolute top-3 left-3 bg-[#A85B3F] text-white px-2.5 py-1 text-[10px] font-mono-meta uppercase tracking-wider rounded-sm font-semibold shadow">
                    {t("Şefin İmzası", "Signature")}
                  </div>
                )}
                {item.allergens.length > 0 && (
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white/90 px-2 py-0.5 text-[9px] font-mono-meta rounded-sm">
                    {item.allergens.join(", ")}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      onClick={() => onSelectItem && onSelectItem(item)}
                      className="font-serif-title text-xl font-bold text-[#222820] hover:text-[#A85B3F] transition-colors cursor-pointer"
                    >
                      {lang === "tr" ? item.nameTr : item.nameEn}
                    </h3>
                    <div className="font-serif-title text-lg font-bold text-[#A85B3F] whitespace-nowrap">
                      {item.price} {item.currency}
                    </div>
                  </div>

                  <p className="font-sans-body text-xs sm:text-sm text-[#352820]/80 mt-2.5 leading-relaxed line-clamp-3">
                    {lang === "tr" ? item.descTr : item.descEn}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#D8CBBF]/40 flex items-center justify-between">
                  <button
                    onClick={() => onSelectItem && onSelectItem(item)}
                    className="font-mono-meta text-[11px] text-[#A85B3F] hover:underline flex items-center space-x-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>{t("Detaylar & İçerik", "Details & Ingredients")}</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(
                      formatWhatsAppOrder(lang === "tr" ? item.nameTr : item.nameEn, item.price, lang)
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-sans-body font-medium px-3 py-1.5 rounded-sm bg-[#30372D]/5 hover:bg-[#A85B3F] hover:text-white transition-colors flex items-center space-x-1.5 border border-[#30372D]/15"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{t("Sipariş Bilgisi", "Order Inquiry")}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
