"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { businessConfig } from "@/config/business";
import { formatWhatsAppReservation, getWhatsAppUrl, ReservationPayload } from "@/lib/utils/whatsapp";
import { Calendar, Clock, Users, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export function ReservationSection() {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "19:30",
    guests: 2,
    seatingArea: "dining_room" as const,
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim() || !formData.phone.trim() || !formData.date) {
      setErrorMsg(
        lang === "tr"
          ? "Lütfen ad soyad, telefon ve rezervasyon tarihini doldurunuz."
          : "Please complete your full name, contact number, and booking date."
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
    <section id="reservation" className="py-24 md:py-32 bg-[#1C211A] text-[#F5EFEB] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono-meta text-xs text-[#A85B3F] tracking-widest uppercase">
              {t("MASA REZERVASYONU & TADIM", "TABLE RESERVATION & TASTINGS")}
            </span>
            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {t("Atelier Sofrasında Yerinizi Ayırın", "Book Your Table at the Atelier")}
            </h2>
            <p className="font-sans-body text-sm sm:text-base text-[#D8CBBF]/85 leading-relaxed">
              {t(
                "Akşam servisi, odun ateşi şef masası ve hafta sonu artisan brunch rezervasyonları için lütfen bilgilerinizi iletiniz.",
                "Reserve your seats for dinner service, open hearth tastings, or weekend artisanal sourdough brunch."
              )}
            </p>

            <div className="pt-6 border-t border-white/10 space-y-3 font-sans-body text-xs text-[#D8CBBF]/70">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#A85B3F]" />
                <span>{t("6 kişi ve üzeri gruplar için şef tadım menüsü uygulanır.", "Chef's tasting menu applied for parties of 6 or more.")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#A85B3F]" />
                <span>{t("Demo Modu: Rezervasyon bilgileri WhatsApp üzerinden ön kayıt mesajına dönüştürülür.", "Demo Mode: Booking details format into an interactive WhatsApp preview.")}</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-[#232921] p-8 sm:p-10 rounded-sm border border-[#D8CBBF]/20 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-title text-2xl font-bold text-white">
                  {t("Rezervasyon Özeti Hazırlandı", "Reservation Summary Ready")}
                </h3>
                <p className="font-sans-body text-xs sm:text-sm text-[#D8CBBF]/85 max-w-md mx-auto leading-relaxed">
                  {t(
                    "Talebiniz başarıyla oluşturuldu. İşletme hattımıza tek tıkla iletmek için aşağıdaki butona basabilirsiniz.",
                    "Your request has been structured. Click below to launch the formatted inquiry in WhatsApp."
                  )}
                </p>

                <div className="p-4 rounded bg-[#181D17] border border-white/10 text-left font-mono-meta text-xs text-[#D8CBBF] space-y-1.5 max-w-sm mx-auto">
                  <div><strong>{t("Misafir:", "Guest:")}</strong> {formData.name}</div>
                  <div><strong>{t("Telefon:", "Phone:")}</strong> {formData.phone}</div>
                  <div><strong>{t("Tarih & Saat:", "Date & Time:")}</strong> {formData.date} - {formData.time}</div>
                  <div><strong>{t("Kişi:", "Guests:")}</strong> {formData.guests} {t("Kişi", "Persons")}</div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendWhatsApp}
                    className="w-full sm:w-auto bg-[#A85B3F] hover:bg-[#8e4a32] text-white px-6 py-3 rounded-sm font-sans-body text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t("WhatsApp ile Gönder (Demo)", "Send via WhatsApp (Demo)")}</span>
                  </button>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-[#D8CBBF] px-4 py-3 rounded-sm font-mono-meta text-xs uppercase"
                  >
                    {t("Yeni Form", "New Booking")}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded bg-red-900/30 border border-red-700/50 text-red-200 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-meta text-[11px] text-[#D8CBBF] mb-1.5 uppercase">
                      {t("Ad Soyad *", "Full Name *")}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t("Örn: Doğan Yılmaz", "e.g. John Doe")}
                      className="w-full bg-[#181D17] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#A85B3F]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-meta text-[11px] text-[#D8CBBF] mb-1.5 uppercase">
                      {t("Telefon Numarası *", "Phone Number *")}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+90 (5XX) XXX XX XX"
                      className="w-full bg-[#181D17] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#A85B3F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-mono-meta text-[11px] text-[#D8CBBF] mb-1.5 uppercase">
                      {t("Tarih *", "Date *")}
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#181D17] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#A85B3F]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-meta text-[11px] text-[#D8CBBF] mb-1.5 uppercase">
                      {t("Saat", "Time")}
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#181D17] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#A85B3F]"
                    >
                      <option value="09:00">09:00 - Kahvaltı & Fırın</option>
                      <option value="11:30">11:30 - Brunch</option>
                      <option value="13:30">13:30 - Öğle Yemeği</option>
                      <option value="19:00">19:00 - Akşam Servisi</option>
                      <option value="20:30">20:30 - Şef Masası</option>
                      <option value="21:45">21:45 - Gece Servisi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono-meta text-[11px] text-[#D8CBBF] mb-1.5 uppercase">
                      {t("Kişi Sayısı", "Guests")}
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full bg-[#181D17] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#A85B3F]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                        <option key={num} value={num}>
                          {num} {lang === "tr" ? "Kişi" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono-meta text-[11px] text-[#D8CBBF] mb-1.5 uppercase">
                    {t("Masa & Alan Tercihi", "Seating Preference")}
                  </label>
                  <select
                    value={formData.seatingArea}
                    onChange={(e: any) => setFormData({ ...formData, seatingArea: e.target.value })}
                    className="w-full bg-[#181D17] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#A85B3F]"
                  >
                    <option value="dining_room">
                      {t("Ana Yemek Salonu (Dingin & Klasik)", "Main Dining Hall")}
                    </option>
                    <option value="hearth">
                      {t("Odun Ateşi Yanı (Açık Ocak & Şef İletişimi)", "Hearthside & Firepit")}
                    </option>
                    <option value="bakery_terrace">
                      {t("Fırın & Avlu Terası (Gündüz & Kahvaltı)", "Bakery Courtyard Terrace")}
                    </option>
                    <option value="chef_counter">
                      {t("Şef Masası / Bar Tezgahı (Özel Tadım)", "Chef's Counter")}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono-meta text-[11px] text-[#D8CBBF] mb-1.5 uppercase">
                    {t("Özel Notlar veya Alerjenler", "Special Requests / Allergies")}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={t("Gluten hassasiyeti, doğum günü kutlaması vb.", "Dietary needs, anniversaries, etc.")}
                    className="w-full bg-[#181D17] border border-white/15 rounded-sm px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#A85B3F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A85B3F] hover:bg-[#8e4a32] text-white py-3.5 rounded-sm font-sans-body uppercase text-xs font-semibold tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t("Rezervasyon Ön Kaydı Oluştur", "Create Reservation Request")}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
