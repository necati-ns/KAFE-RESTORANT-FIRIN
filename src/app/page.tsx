"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { TodaysBake } from "@/components/sections/TodaysBake";
import { MenuSection } from "@/components/sections/MenuSection";
import { SignatureSection } from "@/components/sections/SignatureSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { EventsSection } from "@/components/sections/EventsSection";
import { JournalSection } from "@/components/sections/JournalSection";
import { ReservationSection } from "@/components/sections/ReservationSection";
import { ReservationModal } from "@/components/reservations/ReservationModal";
import { ProductModal } from "@/components/menu/ProductModal";
import { MenuItem } from "@/config/menu-data";

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen flex flex-col bg-[#F5EFEB]">
        {/* Header Navigation */}
        <Header onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Main Content Flow */}
        <main className="flex-grow">
          {/* 1. Hero Section */}
          <Hero onOpenReservation={() => setIsReservationOpen(true)} />

          {/* 2. Editorial Manifesto */}
          <Manifesto />

          {/* 3. Today's Bake (Daily Fresh Production) */}
          <TodaysBake onSelectItem={(item) => setSelectedMenuItem(item)} />

          {/* 4. Seasonal & Contemporary Menu with Category Filters */}
          <MenuSection onSelectItem={(item) => setSelectedMenuItem(item)} />

          {/* 5. Signature Dishes & Desserts (Editorial Storytelling) */}
          <SignatureSection />

          {/* 6. Asymmetric Gallery & Atmosphere Lightbox */}
          <GallerySection />

          {/* 7. Workshops, Events & Chef's Table */}
          <EventsSection onOpenReservation={() => setIsReservationOpen(true)} />

          {/* 8. Gastronomy Journal & Articles */}
          <JournalSection />

          {/* 9. Working Reservation Section with WhatsApp Preview */}
          <ReservationSection />
        </main>

        {/* Global Footer with NSCODING Attribution */}
        <Footer />

        {/* Interactive Modals */}
        <ReservationModal
          isOpen={isReservationOpen}
          onClose={() => setIsReservationOpen(false)}
        />

        <ProductModal
          item={selectedMenuItem}
          onClose={() => setSelectedMenuItem(null)}
        />
      </div>
    </LanguageProvider>
  );
}
