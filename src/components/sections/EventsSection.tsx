"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { upcomingEvents, EventItem } from "@/config/events-data";
import { Calendar, Clock, Users, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { formatWhatsAppOrder, getWhatsAppUrl } from "@/lib/utils/whatsapp";

interface EventsSectionProps {
  onOpenReservation?: () => void;
}

export function EventsSection({ onOpenReservation }: EventsSectionProps) {
  const { lang, t } = useLanguage();

  return (
    <section id="events" className="py-24 md:py-32 bg-[#222820] text-[#F5EFEB] border-b border-[#D8CBBF]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="font-mono-meta text-xs text-[#A85B3F] tracking-widest uppercase">
              {t("ATÖLYELER & BULUŞMALAR", "WORKSHOPS & PRIVATE GATHERINGS")}
            </span>
            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
              {t("Özel Etkinlikler & Şef Masası", "Events & Masterclasses")}
            </h2>
          </div>
          <p className="font-sans-body text-sm text-[#D8CBBF]/80 max-w-md">
            {t(
              "Ekşi maya fırıncılığı atölyelerinden, 7 aşamalı şef masası tadımlarına kadar sınırlı kontenjanlı gastronomi deneyimleri.",
              "From artisan sourdough masterclasses to 7-course private tasting encounters with our culinary directors."
            )}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-[#2A3127] rounded-sm border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#A85B3F] transition-all duration-300 group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={evt.image}
                  alt={lang === "tr" ? evt.titleTr : evt.titleEn}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                />
                <div className="absolute top-3 left-3 bg-[#1C211A]/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono-meta text-[#D8CBBF] rounded-sm border border-white/10">
                  {lang === "tr" ? evt.categoryTr : evt.categoryEn}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Meta details */}
                  <div className="flex items-center space-x-3 text-xs font-mono-meta text-[#A85B3F] mb-2.5">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{lang === "tr" ? evt.dateTr : evt.dateEn}</span>
                    </span>
                  </div>

                  <h3 className="font-serif-title text-xl font-bold text-white group-hover:text-[#A85B3F] transition-colors">
                    {lang === "tr" ? evt.titleTr : evt.titleEn}
                  </h3>

                  <p className="font-sans-body text-xs text-[#D8CBBF]/80 mt-3 leading-relaxed line-clamp-3">
                    {lang === "tr" ? evt.descTr : evt.descEn}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5">
                    {(lang === "tr" ? evt.highlightsTr : evt.highlightsEn).map((h, i) => (
                      <div key={i} className="flex items-start space-x-2 text-[11px] text-[#D8CBBF]/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A85B3F] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="font-mono-meta text-[10px] text-[#D8CBBF]/60 block">
                      {lang === "tr" ? evt.quotaTr : evt.quotaEn}
                    </span>
                    <span className="font-serif-title text-sm font-bold text-white">
                      {lang === "tr" ? evt.priceTr : evt.priceEn}
                    </span>
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      formatWhatsAppOrder(
                        `Etkinlik Kayıt Talebi: ${lang === "tr" ? evt.titleTr : evt.titleEn}`,
                        0,
                        lang
                      )
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#A85B3F] hover:bg-[#8e4a32] text-white px-3.5 py-1.5 rounded-sm text-xs font-sans-body font-semibold transition-colors flex items-center space-x-1"
                  >
                    <span>{t("Katıl / Ayırt", "Book Seat")}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
