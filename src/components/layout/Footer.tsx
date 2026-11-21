"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { businessConfig } from "@/config/business";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Share2 } from "lucide-react";

export function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#1C211A] text-[#F5EFEB] pt-20 pb-12 border-t border-[#D8CBBF]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#D8CBBF]/15">
          {/* Col 1: Brand Story */}
          <div className="flex flex-col space-y-4">
            <span className="font-serif-title text-2xl font-bold tracking-tight text-white">
              NSCODING
            </span>
            <span className="font-mono-meta text-xs text-[#A85B3F]">
              Atelier · Mutfak · Fırın
            </span>
            <p className="font-sans-body text-sm text-[#D8CBBF]/80 leading-relaxed pt-2">
              {t(
                "Toprağın hafızası, ateşin sabrı ve buğdayın asaleti. Modern Türk mutfağı, 72 saatlik soğuk fermente ekşi maya ve mikro lot nitelikli kahvenin kesiştiği lezzet atölyesi.",
                "The memory of earth, the patience of fire, and the grace of wheat. A gastronomic atelier uniting contemporary Turkish dining, 72-hour sourdough bakes, and single origin coffee."
              )}
            </p>
            <div className="pt-3 flex items-center space-x-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#A85B3F] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="font-mono-meta text-xs text-[#A85B3F] uppercase tracking-widest mb-4">
              {t("Keşfet", "Navigation")}
            </h3>
            <ul className="space-y-2.5 font-sans-body text-sm text-[#D8CBBF]/85">
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  {t("Atölye Deneyimi", "Atelier Experience")}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  {t("Mevsimsel Menü", "Seasonal Menu")}
                </a>
              </li>
              <li>
                <a href="#todays-bake" className="hover:text-white transition-colors">
                  {t("Günün Fırını (Today's Bake)", "Today's Bake")}
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-white transition-colors">
                  {t("İmza Yemekler & Tatlılar", "Signatures & Desserts")}
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  {t("Atölyeler & Şef Masası", "Workshops & Chef's Table")}
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-white transition-colors">
                  {t("Gastronomi Dergisi", "Culinary Journal")}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours */}
          <div>
            <h3 className="font-mono-meta text-xs text-[#A85B3F] uppercase tracking-widest mb-4 flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{t("Servis Saatleri", "Hours of Service")}</span>
            </h3>
            <div className="space-y-3 font-sans-body text-xs text-[#D8CBBF]/85">
              {businessConfig.hours[lang].map((item, idx) => (
                <div key={idx} className="border-b border-white/5 pb-2">
                  <div className="font-semibold text-white">{item.days}</div>
                  <div className="text-[#A85B3F] font-mono-meta text-[11px]">{item.hours}</div>
                  <div className="text-[10px] text-[#D8CBBF]/60 italic">{item.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Location & Demo Contact */}
          <div>
            <h3 className="font-mono-meta text-xs text-[#A85B3F] uppercase tracking-widest mb-4 flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t("Konum & İletişim", "Location & Contact")}</span>
            </h3>
            <div className="space-y-2.5 font-sans-body text-xs text-[#D8CBBF]/85">
              <p className="leading-relaxed">
                {businessConfig.address.street}
                <br />
                {businessConfig.address.district}, {businessConfig.address.city}
              </p>
              <div className="pt-2 flex items-center space-x-2 text-white">
                <Phone className="w-3.5 h-3.5 text-[#A85B3F]" />
                <span>{businessConfig.contact.phoneDisplay}</span>
              </div>
              <div className="flex items-center space-x-2 text-[#D8CBBF]/70">
                <Mail className="w-3.5 h-3.5 text-[#A85B3F]" />
                <span>{businessConfig.contact.email}</span>
              </div>
              <div className="mt-3 p-2.5 rounded bg-white/5 border border-white/10 text-[11px] text-[#D8CBBF]/70">
                <span className="font-bold text-[#A85B3F]">Demo Uyarısı:</span> İletişim ve adres
                bilgileri portföy vitrini amacıyla kurgulanmıştır.
              </div>
            </div>
          </div>
        </div>

        {/* NSCODING Mandatory Demo Credit Footer (Clause #35) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D8CBBF]/70 gap-4">
          <div className="demo-credit text-center sm:text-left">
            <p className="font-sans-body">
              {siteConfig.developer.demoNoteTr}
            </p>
            <p className="text-[11px] opacity-60">
              © 2026 NSCODING. Tüm hakları saklıdır.
            </p>
          </div>

          <div className="flex items-center">
            <a
              href="https://nscoding.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NSCODING resmi web sitesini ziyaret et"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-sm bg-white/5 hover:bg-[#A85B3F] hover:text-white border border-[#D8CBBF]/20 text-white font-mono-meta tracking-wider transition-all duration-200"
            >
              <span>Website design & development by NSCODING ↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
