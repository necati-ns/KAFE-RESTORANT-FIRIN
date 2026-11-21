"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, ChevronDown, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenReservation?: () => void;
}

export function Hero({ onOpenReservation }: HeroProps) {
  const { lang, t } = useLanguage();

  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#181D17]">
      {/* Background Photography with subtle dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop"
          alt="NSCODING Restaurant Hearth and Dining Room"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.42] scale-105 transform animate-pulse duration-1000"
        />
        {/* Editorial Vignette & Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C211A] via-transparent to-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-[#F5EFEB] flex flex-col items-center pt-24 pb-16">
        {/* Subtle Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#A85B3F]" />
          <span className="font-mono-meta text-[11px] uppercase tracking-widest text-[#D8CBBF]">
            {t("Atelier · Mutfak · Fırın", "Kitchen · Bakery · Specialty Coffee")}
          </span>
        </div>

        {/* Master Headline */}
        <h1 className="font-serif-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
          {t("Toprağın Hafızası,", "The Memory of Earth,")}{" "}
          <span className="italic font-normal font-serif text-[#D8CBBF] block sm:inline">
            {t("Ateşin Sabrı.", "The Fire's Grace.")}
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="max-w-2xl font-sans-body text-base sm:text-lg md:text-xl text-[#D8CBBF]/90 font-light leading-relaxed mb-10">
          {t(
            "Anadolu'nun atalık buğdaylarıyla 72 saatlik soğuk fermente artisan fırın, meşe odununda pişen modern Türk mutfağı ve mikro lot nitelikli kahve kültürü tek bir adreste.",
            "A culinary sanctuary uniting 72-hour heirloom cold-fermented sourdoughs, oak wood-fired contemporary Anatolian gastronomy, and micro-lot specialty coffee."
          )}
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center space-y-3.5 sm:space-y-0 sm:space-x-5 w-full sm:w-auto">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto bg-[#A85B3F] hover:bg-[#8e4a32] text-white font-sans-body font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{t("Masa Ayırın", "Reserve a Table")}</span>
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-[#F5EFEB] border border-white/30 backdrop-blur-sm font-sans-body font-medium text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>{t("Menüyü Keşfedin", "Explore Menu")}</span>
          </a>
        </div>
      </div>

      {/* Editorial Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-1.5 opacity-75 hover:opacity-100 transition-opacity">
        <span className="font-mono-meta text-[10px] uppercase tracking-widest text-[#D8CBBF]">
          {t("Aşağı Kaydırın", "Scroll to Explore")}
        </span>
        <ChevronDown className="w-4 h-4 text-[#A85B3F] animate-bounce" />
      </div>
    </section>
  );
}
