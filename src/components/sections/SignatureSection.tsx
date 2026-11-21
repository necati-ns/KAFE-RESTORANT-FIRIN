"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Utensils, MessageSquare } from "lucide-react";
import { formatWhatsAppOrder, getWhatsAppUrl } from "@/lib/utils/whatsapp";

export function SignatureSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="signature" className="py-24 md:py-32 bg-[#1C211A] text-[#F5EFEB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#A85B3F]/20 text-[#A85B3F] text-xs font-mono-meta mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("ŞEFİN İMZA KOLEKSİYONU", "THE CHEF'S SIGNATURE EDIT")}</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {t("Özel Sunumlar & İmzalar", "Signature Craft & Dishes")}
            </h2>
          </div>
          <p className="font-sans-body text-sm text-[#D8CBBF]/80 max-w-md">
            {t(
              "Haftalarca süren fermantasyonlar, 14 saatlik ağır meşe pişirmeleri ve atölyenin alametifarikası tatlar.",
              "Weeks of microbial fermentation, 14-hour slow braises over oak charcoal, and the atelier's iconic creations."
            )}
          </p>
        </div>

        {/* Feature 1: Slow Braised Lamb Shank */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-7 relative aspect-[16/11] rounded-sm overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src="https://images.unsplash.com/photo-1514944298352-f67d4f9bf4f9?q=80&w=1400&auto=format&fit=crop"
              alt="14-Hour Braised Lamb Shank with Firik"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
            />
            <div className="absolute top-4 left-4 bg-[#A85B3F] text-white px-3 py-1 font-mono-meta text-xs uppercase tracking-wider font-semibold rounded-sm">
              {t("14 Saat Meşe Odunu", "14-Hour Hearth Braise")}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 lg:pl-6">
            <span className="font-mono-meta text-xs text-[#A85B3F] tracking-widest uppercase">
              {t("İmza Ana Yemek", "Signature Main")}
            </span>
            <h3 className="font-serif-title text-3xl sm:text-4xl font-bold text-white leading-tight">
              {t("Ağır Pişmiş Kuzu İncik & İsli Firik Keşkeği", "Braised Lamb Shank with Smoked Firik Risotto")}
            </h3>
            <p className="font-sans-body text-sm sm:text-base text-[#D8CBBF]/85 leading-relaxed">
              {t(
                "Kök sebzeler ve defne ile fırında 14 saat kemiğinden ayrılacak yumuşaklıkta demlenmiş kuzu incik, tereyağlı tütsülü firik buğdayı ve nar pekmezi jü sosu ile servis edilir.",
                "Braised overnight over dying oak embers until tender to the touch, paired with aromatic smoked green firik grains, roasted root glaze, and wild pomegranate reduction."
              )}
            </p>
            <div className="flex items-center space-x-6 pt-4 border-t border-white/10">
              <span className="font-serif-title text-2xl font-bold text-white">690 ₺</span>
              <a
                href={getWhatsAppUrl(
                  formatWhatsAppOrder("Ağır Pişmiş Kuzu İncik & İsli Firik", 690, lang)
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#A85B3F] hover:bg-[#8e4a32] text-white px-5 py-2.5 rounded-sm font-sans-body text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t("Sipariş / Rezervasyon", "Reserve Dish")}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Feature 2: Mille-Feuille Katmer (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center space-y-5 lg:pr-6">
            <span className="font-mono-meta text-xs text-[#A85B3F] tracking-widest uppercase">
              {t("İmza Tatlı", "Signature Dessert")}
            </span>
            <h3 className="font-serif-title text-3xl sm:text-4xl font-bold text-white leading-tight">
              {t("NSCODING Katmer Mille-Feuille", "Katmer Mille-Feuille & Buffalo Cream")}
            </h3>
            <p className="font-sans-body text-sm sm:text-base text-[#D8CBBF]/85 leading-relaxed">
              {t(
                "Geleneksel Gaziantep katmerinin Fransız mille-feuille mimarisiyle yeniden doğuşu. İncecik tül yufka yaprakları, taş değirmen Antep boz fıstığı, manda kaymağı muselini ve ılık keçi sütü şerbeti.",
                "The rebirth of traditional Gaziantep katmer through French pastry architecture. Delicate crisp filo leaves, stone-crushed emerald pistachios, clotted buffalo cream mousseline, and warm goat milk reduction."
              )}
            </p>
            <div className="flex items-center space-x-6 pt-4 border-t border-white/10">
              <span className="font-serif-title text-2xl font-bold text-white">320 ₺</span>
              <a
                href={getWhatsAppUrl(
                  formatWhatsAppOrder("Katmer Mille-Feuille", 320, lang)
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#A85B3F] hover:bg-[#8e4a32] text-white px-5 py-2.5 rounded-sm font-sans-body text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t("Tatlıyı Deneyimleyin", "Experience Dessert")}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative aspect-[16/11] rounded-sm overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src="https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=1400&auto=format&fit=crop"
              alt="Katmer Mille-Feuille"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
            />
            <div className="absolute top-4 right-4 bg-[#A85B3F] text-white px-3 py-1 font-mono-meta text-xs uppercase tracking-wider font-semibold rounded-sm">
              {t("Günlük El Açması", "Handmade Daily")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
