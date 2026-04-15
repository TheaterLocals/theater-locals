"use client";

import { useState } from "react";
import { getPartnersContent } from "@/lib/content";
import { useLang } from "@/contexts/LangContext";

const content = getPartnersContent();

export default function PartnersSection() {
  const { lang } = useLang();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (partnerId: string) => {
    setImageErrors((prev) => ({ ...prev, [partnerId]: true }));
  };

  // Helper to get initials from partner name
  const getInitial = (name: string): string => {
    const words = name.trim().split(" ");
    return words
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 1);
  };

  return (
    <section className="bg-[#0E1C1A] py-24 sm:py-32">
      <div className="container-max">

        {/* Eyebrow */}
        <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-3 text-center">
          {content.eyebrow[lang]}
        </p>

        {/* Heading */}
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-center max-w-4xl mx-auto">
          {content.heading[lang]}
        </h2>

        {/* Thin gold rule */}
        <div className="w-12 h-px bg-[#B8956A]/60 mx-auto mb-8" />

        {/* Intro text */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            {content.intro[lang]}
          </p>
        </div>

        {/* Partners Grid — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {content.partners.map((partner) => {
            const hasImageError = imageErrors[partner.id];
            const initial = getInitial(partner.name[lang]);

            return (
              <div
                key={partner.id}
                className="bg-[#1B2E2A] border border-[#3A4A42] overflow-hidden flex flex-col"
              >
                {/* Image or Placeholder */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#1B2E2A] to-[#3A4A42] overflow-hidden flex items-center justify-center">
                  {partner.imageSrc && !hasImageError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={partner.imageSrc}
                      alt={partner.name[lang]}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(partner.id)}
                    />
                  ) : (
                    <span className="text-5xl font-playfair font-bold text-[#B8956A]/60">
                      {initial}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="px-6 py-6 flex flex-col flex-grow">
                  {/* Dish badge */}
                  <p className="text-xs uppercase tracking-widest text-[#B8956A] mb-3">
                    {partner.dish[lang]}
                  </p>

                  {/* Partner name */}
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-2">
                    {partner.name[lang]}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-white/80 mb-4">
                    {partner.tagline[lang]}
                  </p>

                  {/* Story */}
                  <p className="text-sm text-white/60 leading-relaxed mb-6 line-clamp-4 flex-grow">
                    {partner.story[lang]}
                  </p>

                  {/* CTA Link */}
                  <a
                    href={partner.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B8956A] text-sm font-semibold uppercase tracking-wider hover:text-[#D4A574] transition-colors inline-flex items-center gap-2 mb-4"
                  >
                    {lang === "en" ? "Visit" : "詳しく見る"}
                    <span>→</span>
                  </a>

                  {/* Note */}
                  <p className="text-[10px] text-white/40 leading-tight">
                    {partner.note[lang]}
                  </p>

                  {/* Photo disclaimer */}
                  <p className="text-[10px] text-white/30 mt-2">
                    {lang === "en" ? "※ Photo is illustrative" : "※ 写真はイメージです"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
