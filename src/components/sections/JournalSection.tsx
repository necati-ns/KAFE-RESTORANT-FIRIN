"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { journalPosts, JournalPost } from "@/config/journal-data";
import { BookOpen, Clock, ArrowRight, X } from "lucide-react";

export function JournalSection() {
  const { lang, t } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<JournalPost | null>(null);

  return (
    <section id="journal" className="py-24 md:py-32 bg-[#F5EFEB] text-[#2D211A] border-b border-[#D8CBBF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#D8CBBF]/40 gap-6">
          <div>
            <span className="font-mono-meta text-xs text-[#A85B3F] tracking-widest uppercase">
              {t("EDİTORYAL YAYIN", "EDITORIAL JOURNAL")}
            </span>
            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold tracking-tight text-[#222820] mt-2">
              {t("Atelier Gastronomi Dergisi", "The Gastronomic Journal")}
            </h2>
          </div>
          <p className="font-sans-body text-sm text-[#352820]/80 max-w-md">
            {t(
              "Ata buğdaylarının genetiği, 72 saatlik ekşi maya fermantasyonunun mikrobiyolojisi ve Anadolu mutfak mirası üzerine denemeler.",
              "Essays exploring heirloom grain genetics, the microbiology of slow sourdough fermentation, and contemporary Anatolian culinary traditions."
            )}
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalPosts.map((post) => (
            <article
              key={post.slug}
              onClick={() => setSelectedPost(post)}
              className="group bg-white rounded-sm border border-[#D8CBBF]/60 overflow-hidden shadow-sm hover:shadow-md hover:border-[#A85B3F] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={lang === "tr" ? post.titleTr : post.titleEn}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#1C211A]/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono-meta text-white rounded-sm">
                  {lang === "tr" ? post.categoryTr : post.categoryEn}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-xs font-mono-meta text-[#A85B3F] mb-2.5">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{lang === "tr" ? post.readTimeTr : post.readTimeEn}</span>
                    </span>
                  </div>

                  <h3 className="font-serif-title text-xl font-bold text-[#222820] group-hover:text-[#A85B3F] transition-colors leading-snug">
                    {lang === "tr" ? post.titleTr : post.titleEn}
                  </h3>

                  <p className="font-sans-body text-xs sm:text-sm text-[#352820]/80 mt-3 leading-relaxed line-clamp-3">
                    {lang === "tr" ? post.excerptTr : post.excerptEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D8CBBF]/40 flex items-center justify-between">
                  <span className="font-sans-body text-xs font-semibold text-[#222820]">
                    {post.author}
                  </span>
                  <span className="text-xs font-mono-meta text-[#A85B3F] group-hover:translate-x-1 transition-transform flex items-center space-x-1">
                    <span>{t("Yazıyı Oku", "Read Essay")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal / Reader */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-[#F5EFEB] max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-sm border border-[#D8CBBF] shadow-2xl relative p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 text-[#2D211A]/70 hover:text-[#2D211A] p-2 rounded-full bg-[#D8CBBF]/30"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden mb-6 mt-2">
              <Image
                src={selectedPost.image}
                alt={lang === "tr" ? selectedPost.titleTr : selectedPost.titleEn}
                fill
                sizes="(max-width: 768px) 100vw, 750px"
                className="object-cover"
              />
            </div>

            <div className="flex items-center space-x-3 text-xs font-mono-meta text-[#A85B3F] mb-3">
              <span>{lang === "tr" ? selectedPost.categoryTr : selectedPost.categoryEn}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{lang === "tr" ? selectedPost.readTimeTr : selectedPost.readTimeEn}</span>
            </div>

            <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-[#222820] mb-4">
              {lang === "tr" ? selectedPost.titleTr : selectedPost.titleEn}
            </h2>

            <div className="flex items-center space-x-3 pb-6 border-b border-[#D8CBBF] mb-6">
              <div>
                <div className="font-sans-body font-bold text-sm text-[#222820]">
                  {selectedPost.author}
                </div>
                <div className="font-mono-meta text-xs text-[#352820]/70">
                  {lang === "tr" ? selectedPost.authorRoleTr : selectedPost.authorRoleEn}
                </div>
              </div>
            </div>

            <div className="space-y-4 font-sans-body text-sm sm:text-base text-[#352820]/90 leading-relaxed">
              {(lang === "tr" ? selectedPost.contentTr : selectedPost.contentEn).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
