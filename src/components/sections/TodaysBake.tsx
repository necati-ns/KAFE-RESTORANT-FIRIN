"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { menuItems, MenuItem } from "@/config/menu-data";
import { Clock, Sparkles, ArrowRight } from "lucide-react";
import { formatWhatsAppOrder, getWhatsAppUrl } from "@/lib/utils/whatsapp";

interface TodaysBakeProps {
  onSelectItem?: (item: MenuItem) => void;
}

export function TodaysBake({ onSelectItem }: TodaysBakeProps) {
  const { lang, t } = useLanguage();
  const bakeList = menuItems.filter((i) => i.isTodaysBake);

  return (
    <section id="todays-bake" className="py-24 bg-[#222820] text-[#F5EFEB] relative overflow-hidden">
      {/* Decorative top badge */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#D8CBBF]/20 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#A85B3F]/20 text-[#A85B3F] text-xs font-mono-meta mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("GÜNLÜK SINIRLI FIRIN SEÇKİSİ", "DAILY LIMITED HEARTH BATCH")}</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {t("Bugünün Fırınından", "Today's Bake")}
            </h2>
            <p className="font-sans-body text-sm text-[#D8CBBF]/80 max-w-xl mt-3">
              {t(
                "Her sabah meşe odunu taş fırınımızda sabırla pişen, taze ve sınırlı sayıda çıkan artisan ekmek ve viennoiserie çeşitlerimiz.",
                "Handcrafted daily in limited artisanal batches, baked over glowing oak logs using heirloom grains and slow ferment."
              )}
            </p>
          </div>

          <div className="flex items-center space-x-3 text-xs font-mono-meta text-[#D8CBBF]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span>{t("FIRIN AKTİF: 07:30 – TÜKENENE KADAR", "HEARTH ACTIVE: 07:30 – UNTIL SOLD OUT")}</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bakeList.map((item) => (
            <div
              key={item.id}
              className="group bg-[#2A3127]/80 rounded-sm border border-[#D8CBBF]/20 overflow-hidden flex flex-col justify-between hover:border-[#A85B3F] transition-all duration-300"
            >
              {/* Product Image */}
              <div
                className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer"
                onClick={() => onSelectItem && onSelectItem(item)}
              >
                <Image
                  src={item.image}
                  alt={lang === "tr" ? item.nameTr : item.nameEn}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                {item.bakeTime && (
                  <div className="absolute top-3 left-3 bg-[#1C211A]/85 backdrop-blur-md px-2.5 py-1 rounded-sm text-[10px] font-mono-meta text-[#D8CBBF] flex items-center space-x-1.5 border border-white/10">
                    <Clock className="w-3 h-3 text-[#A85B3F]" />
                    <span>{item.bakeTime}</span>
                  </div>
                )}
                {item.isSignature && (
                  <div className="absolute top-3 right-3 bg-[#A85B3F] text-white px-2 py-0.5 text-[9px] font-mono-meta uppercase tracking-wider rounded-sm font-semibold">
                    {t("İmza", "Signature")}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3
                    onClick={() => onSelectItem && onSelectItem(item)}
                    className="font-serif-title text-lg font-bold text-white hover:text-[#A85B3F] transition-colors cursor-pointer line-clamp-1"
                  >
                    {lang === "tr" ? item.nameTr : item.nameEn}
                  </h3>
                  <p className="font-sans-body text-xs text-[#D8CBBF]/80 line-clamp-2 mt-2 leading-relaxed">
                    {lang === "tr" ? item.descTr : item.descEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="font-mono-meta text-xs text-[#D8CBBF]/60">
                      {t("Fiyat", "Price")}
                    </span>
                    <div className="font-serif-title text-base font-bold text-white">
                      {item.price} {item.currency}
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      formatWhatsAppOrder(lang === "tr" ? item.nameTr : item.nameEn, item.price, lang)
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#A85B3F]/20 hover:bg-[#A85B3F] text-[#F5EFEB] hover:text-white px-3 py-1.5 rounded-sm text-xs font-sans-body font-medium transition-colors flex items-center space-x-1"
                  >
                    <span>{t("Ayırt", "Hold")}</span>
                    <ArrowRight className="w-3 h-3" />
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
