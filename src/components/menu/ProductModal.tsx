"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MenuItem } from "@/config/menu-data";
import { X, Sparkles, MessageSquare, AlertTriangle } from "lucide-react";
import { formatWhatsAppOrder, getWhatsAppUrl } from "@/lib/utils/whatsapp";

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function ProductModal({ item, onClose }: ProductModalProps) {
  const { lang, t } = useLanguage();

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#F5EFEB] text-[#2D211A] max-w-2xl w-full rounded-sm border border-[#D8CBBF] shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="relative aspect-[16/10] w-full shrink-0">
          <Image
            src={item.image}
            alt={lang === "tr" ? item.nameTr : item.nameEn}
            fill
            sizes="(max-width: 768px) 100vw, 650px"
            className="object-cover"
          />
          {item.isSignature && (
            <div className="absolute bottom-4 left-4 bg-[#A85B3F] text-white px-3 py-1 text-xs font-mono-meta uppercase tracking-wider font-semibold rounded-sm shadow">
              {t("Şefin İmzası", "Signature Item")}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono-meta text-xs text-[#A85B3F] uppercase tracking-wider block mb-1">
                {item.category.toUpperCase()}
              </span>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#222820]">
                {lang === "tr" ? item.nameTr : item.nameEn}
              </h3>
            </div>
            <div className="font-serif-title text-2xl font-bold text-[#A85B3F] whitespace-nowrap">
              {item.price} {item.currency}
            </div>
          </div>

          <p className="font-sans-body text-sm sm:text-base text-[#352820]/90 leading-relaxed">
            {lang === "tr" ? item.descTr : item.descEn}
          </p>

          {/* Ingredients list */}
          <div>
            <h4 className="font-mono-meta text-xs uppercase tracking-widest text-[#222820] mb-2 font-bold">
              {t("ÖNE ÇIKAN İÇERİKLER", "CURATED INGREDIENTS")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {(lang === "tr" ? item.ingredientsTr : item.ingredientsEn).map((ing, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-sm bg-white border border-[#D8CBBF] font-sans-body text-xs text-[#352820]"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Allergens warning */}
          {item.allergens.length > 0 && (
            <div className="p-3.5 rounded-sm bg-[#A85B3F]/10 border border-[#A85B3F]/30 flex items-start space-x-2.5 text-xs text-[#352820]">
              <AlertTriangle className="w-4 h-4 text-[#A85B3F] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block text-[#A85B3F]">
                  {t("Alerjen Bilgisi:", "Allergen Notice:")}
                </strong>
                <span>{item.allergens.join(", ")}</span>
              </div>
            </div>
          )}

          {/* Order Action Button */}
          <div className="pt-4 border-t border-[#D8CBBF] flex items-center justify-between">
            <div className="text-xs font-mono-meta text-[#352820]/60">
              {item.calories ? `${item.calories} kcal` : ""}
            </div>

            <a
              href={getWhatsAppUrl(
                formatWhatsAppOrder(lang === "tr" ? item.nameTr : item.nameEn, item.price, lang)
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A85B3F] hover:bg-[#8e4a32] text-white px-6 py-3 rounded-sm font-sans-body text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t("WhatsApp ile Sipariş Bilgisi Al", "Order Inquiry via WhatsApp")}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
