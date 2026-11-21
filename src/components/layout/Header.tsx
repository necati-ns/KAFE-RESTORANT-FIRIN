"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { Menu, X, Calendar, ArrowUpRight, Phone } from "lucide-react";

interface HeaderProps {
  onOpenReservation?: () => void;
}

export function Header({ onOpenReservation }: HeaderProps) {
  const { lang, toggleLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#experience", tr: "Deneyim", en: "Experience" },
    { href: "#menu", tr: "Menü", en: "Menu" },
    { href: "#todays-bake", tr: "Günün Fırını", en: "Today's Bake" },
    { href: "#signature", tr: "İmzalar", en: "Signatures" },
    { href: "#gallery", tr: "Galeri", en: "Atmosphere" },
    { href: "#events", tr: "Etkinlikler", en: "Events" },
    { href: "#journal", tr: "Dergi", en: "Journal" },
    { href: "#contact", tr: "İletişim", en: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#222820]/90 backdrop-blur-md py-3 text-[#F5EFEB] shadow-lg border-b border-[#D8CBBF]/20"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif-title text-xl md:text-2xl font-bold tracking-tight group-hover:text-[#A85B3F] transition-colors">
              NSCODING
            </span>
            <span className="font-mono-meta text-[9px] md:text-[10px] tracking-widest text-[#D8CBBF] uppercase">
              Atelier · Mutfak · Fırın
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 font-sans-body text-xs uppercase tracking-wider font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/85 hover:text-[#A85B3F] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#A85B3F] hover:after:w-full after:transition-all after:duration-300"
              >
                {t(link.tr, link.en)}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="font-mono-meta text-xs px-2.5 py-1 rounded border border-white/20 hover:border-white/60 transition-colors uppercase cursor-pointer"
              aria-label="Dili Değiştir / Change Language"
            >
              <span className={lang === "tr" ? "font-bold text-[#A85B3F]" : "opacity-60"}>TR</span>
              <span className="opacity-40 mx-1">|</span>
              <span className={lang === "en" ? "font-bold text-[#A85B3F]" : "opacity-60"}>EN</span>
            </button>

            {/* Reservation CTA Button */}
            <button
              onClick={onOpenReservation}
              className="bg-[#A85B3F] hover:bg-[#8e4a32] text-white text-xs uppercase font-sans-body font-semibold tracking-wider px-4 py-2.5 rounded-sm transition-all duration-200 flex items-center space-x-1.5 shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t("Rezervasyon", "Reserve Table")}</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 sm:hidden">
            <button
              onClick={toggleLang}
              className="font-mono-meta text-xs px-2 py-1 rounded border border-white/20 text-white"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-[#A85B3F] focus:outline-none"
              aria-label="Menüyü Aç/Kapat"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#222820] text-[#F5EFEB] flex flex-col justify-between p-8 sm:hidden">
          <div className="flex items-center justify-between border-b border-[#D8CBBF]/20 pb-4">
            <div>
              <div className="font-serif-title text-xl font-bold tracking-tight">NSCODING</div>
              <div className="font-mono-meta text-[10px] text-[#D8CBBF]">
                Restaurant · Café · Bakery
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#D8CBBF] hover:text-white"
              aria-label="Kapat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif-title text-2xl hover:text-[#A85B3F] transition-colors"
              >
                {t(link.tr, link.en)}
              </a>
            ))}
          </div>

          {/* Mobile Bottom CTA */}
          <div className="flex flex-col space-y-3 pt-6 border-t border-[#D8CBBF]/20">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onOpenReservation) onOpenReservation();
              }}
              className="w-full bg-[#A85B3F] text-white py-3 font-sans-body uppercase text-sm font-semibold tracking-wider rounded-sm flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t("Masa Ayırın", "Book a Table")}</span>
            </button>
            <a
              href={`https://wa.me/${siteConfig.social.whatsappDemo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#352820] text-[#D8CBBF] py-3 text-center font-mono-meta text-xs uppercase rounded-sm border border-[#D8CBBF]/20 flex items-center justify-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#A85B3F]" />
              <span>WhatsApp Demo Hattı</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
