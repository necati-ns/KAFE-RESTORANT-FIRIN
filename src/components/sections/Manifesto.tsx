"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Flame, Wheat, Coffee } from "lucide-react";

export function Manifesto() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#F5EFEB] text-[#2D211A] relative border-b border-[#D8CBBF]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Subtle Section Label */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="w-8 h-[1px] bg-[#A85B3F]" />
          <span className="font-mono-meta text-xs uppercase tracking-widest text-[#A85B3F]">
            {t("Felsefemiz & Zanaat", "Philosophy & Craft")}
          </span>
        </div>

        {/* Master Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
          <div className="lg:col-span-8">
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] text-[#222820]">
              {t(
                "Üç ayrı zanaat, tek bir çatı: Fırıncının sabrı, şefin ateşi ve baristanın hassasiyeti.",
                "Three artisanal crafts united under one roof: The baker's patience, the chef's fire, and the barista's precision."
              )}
            </h2>
          </div>
          <div className="lg:col-span-4 font-sans-body text-[#352820]/80 text-sm md:text-base leading-relaxed">
            <p>
              {t(
                "NSCODING Atelier'de yemek bir gösteriş değil; topraktan gelen malzemenin en saf haline duyulan saygıdır. Kimyasal katkılardan arındırılmış taş değirmen unları, yerli üreticilerden mevsiminde toplanan ürünler ve odun közüyle buluşan lezzetler.",
                "At NSCODING Atelier, dining is not mere spectacle; it is a profound reverence for raw earth. Free of industrial preservatives, we marry stone-milled heirloom grains with hyper-seasonal harvest over open oak embers."
              )}
            </p>
          </div>
        </div>

        {/* The 3 Pillars / Triad Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-[#D8CBBF]/40">
          {/* Pillar 1: Bakery */}
          <div className="flex flex-col space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#30372D]/5 border border-[#30372D]/15 flex items-center justify-center text-[#A85B3F] mb-2">
              <Wheat className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-xl font-bold text-[#222820]">
              {t("Artisan Fırın & Ekşi Maya", "Artisan Bakery & Hearth")}
            </h3>
            <p className="font-sans-body text-xs md:text-sm text-[#352820]/80 leading-relaxed">
              {t(
                "72 saatlik soğuk fermantasyon, 12 yıllık canlı ana maya ve Kastamonu Karakılçık buğdayı. Her sabah 07:30'da fırından çıkan çıtır kabuklu, gözenekli somunlar.",
                "72-hour cold fermentation with our 12-year mother starter and heirloom Anatolian flours. Crispy, blistered crusts pulled fresh at 07:30 AM."
              )}
            </p>
          </div>

          {/* Pillar 2: Restaurant */}
          <div className="flex flex-col space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#30372D]/5 border border-[#30372D]/15 flex items-center justify-center text-[#A85B3F] mb-2">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-xl font-bold text-[#222820]">
              {t("Modern Türk Mutfağı", "Contemporary Cuisine")}
            </h3>
            <p className="font-sans-body text-xs md:text-sm text-[#352820]/80 leading-relaxed">
              {t(
                "Geleneksel Anadolu tariflerinin çağdaş gastronomi teknikleriyle yeniden yorumlanması. Meşe odununda pişen etler, Ege crudo'ları ve fermente lezzetler.",
                "Anatolian culinary heritage reimagined with modern technical restraint. Oak-charred meats, Aegean crudo, and slow reductions."
              )}
            </p>
          </div>

          {/* Pillar 3: Specialty Coffee */}
          <div className="flex flex-col space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#30372D]/5 border border-[#30372D]/15 flex items-center justify-center text-[#A85B3F] mb-2">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-xl font-bold text-[#222820]">
              {t("Mikro Lot Nitelikli Kahve", "Specialty Coffee Lab")}
            </h3>
            <p className="font-sans-body text-xs md:text-sm text-[#352820]/80 leading-relaxed">
              {t(
                "Yüksek rakımlı Etiyopya ve Kolombiya mikrolotları. 90 ppm mineralli su ile masada V60 demlemeleri ve özel kakuleli flat white seçkisi.",
                "High-elevation African and South American microlots brewed table-side with tuned mineral water, plus signature botanical coffee blends."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
