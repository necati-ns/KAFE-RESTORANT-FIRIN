"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { businessConfig } from "@/config/business";
import { formatWhatsAppReservation, getWhatsAppUrl, ReservationPayload } from "@/lib/utils/whatsapp";
import { X, Calendar, Send, CheckCircle2, AlertCircle } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "20:00",
    guests: 2,
    seatingArea: "dining_room" as const,
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.date) {
      setErrorMsg(
        lang === "tr"
          ? "Lütfen ad soyad, telefon ve rezervasyon tarihini doldurunuz."
          : "Please complete required fields."
      );
      return;
    }
    setIsSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const payload: ReservationPayload = {
      ...formData,
      lang,
    };
    const encoded = formatWhatsAppReservation(payload);
    window.open(getWhatsAppUrl(encoded), "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#232921] text-[#F5EFEB] max-w-lg w-full rounded-sm border border-[#D8CBBF]/20 p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#D8CBBF] hover:text-white p-2"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="font-mono-meta text-[11px] text-[#A85B3F] uppercase tracking-widest">
            {t("REZERVASYON TALEP FORMU", "RESERVATION REQUEST")}
          </span>
          <h3 className="font-serif-title text-2xl font-bold text-white mt-1">
            {t("Masa Ayırtın", "Book a Table")}
          </h3>
        </div>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="font-serif-title text-xl font-bold text-white">
              {t("Rezervasyon Bilgisi Hazırlandı", "Reservation Info Ready")}
            </h4>
            <p className="font-sans-body text-xs text-[#D8CBBF]/85">
              {t(
                "Talebiniz biçimlendirildi. WhatsApp üzerinden doğrudan işletmeye iletmek için butona tıklayabilirsiniz.",
                "Your request is prepared. Send directly via WhatsApp to complete your demo inquiry."
              )}
            </p>
            <button
              onClick={handleSendWhatsApp}
              className="w-full bg-[#A85B3F] hover:bg-[#8e4a32] text-white py-3 rounded-sm font-sans-body text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>{t("WhatsApp ile İlet (Demo)", "Send WhatsApp (Demo)")}</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-2.5 rounded bg-red-900/40 text-red-200 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <label className="block font-mono-meta text-[10px] text-[#D8CBBF] mb-1 uppercase">
                {t("Ad Soyad *", "Full Name *")}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#181D17] border border-white/15 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#A85B3F]"
              />
            </div>

            <div>
              <label className="block font-mono-meta text-[10px] text-[#D8CBBF] mb-1 uppercase">
                {t("Telefon *", "Phone *")}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#181D17] border border-white/15 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#A85B3F]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-mono-meta text-[10px] text-[#D8CBBF] mb-1 uppercase">
                  {t("Tarih *", "Date *")}
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#181D17] border border-white/15 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#A85B3F]"
                />
              </div>

              <div>
                <label className="block font-mono-meta text-[10px] text-[#D8CBBF] mb-1 uppercase">
                  {t("Kişi", "Guests")}
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                  className="w-full bg-[#181D17] border border-white/15 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#A85B3F]"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {lang === "tr" ? "Kişi" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#A85B3F] hover:bg-[#8e4a32] text-white py-3 rounded-sm font-sans-body uppercase text-xs font-semibold tracking-wider flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t("Talebi Onayla", "Submit Reservation")}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
