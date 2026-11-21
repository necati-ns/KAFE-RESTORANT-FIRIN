"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "tr" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (keyTr: string, keyEn: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("tr");

  useEffect(() => {
    // Check localStorage or browser language
    const saved = localStorage.getItem("nscoding_lang") as Language;
    if (saved && (saved === "tr" || saved === "en")) {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("nscoding_lang", newLang);
    document.documentElement.lang = newLang;
  };

  const toggleLang = () => {
    handleSetLang(lang === "tr" ? "en" : "tr");
  };

  const t = (keyTr: string, keyEn: string) => {
    return lang === "tr" ? keyTr : keyEn;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
