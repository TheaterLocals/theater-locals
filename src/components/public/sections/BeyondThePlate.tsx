"use client";

import { getBeyondContent } from "@/lib/content";
import { useLang } from "@/contexts/LangContext";

const content = getBeyondContent();

export default function BeyondThePlate() {
  const { lang } = useLang();

  return (
    <section className="bg-[#F5F1E8] py-20 sm:py-24">
      <div className="container-max">

        {/* Eyebrow */}
        <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-3 text-center">
          {content.eyebrow[lang]}
        </p>

        {/* Heading */}
        <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A0A0A] leading-tight mb-12 text-center">
          {content.heading[lang]}
        </h2>

        {/* Spots Grid — 4 cards, responsive columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {content.spots.map((spot) => (
            <a
              key={spot.id}
              href={spot.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-[#D4C4A8] p-4 sm:p-6 hover:shadow-md transition-shadow"
            >
              {/* Spot name */}
              <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#0A0A0A] mb-3 group-hover:text-[#B8956A] transition-colors">
                {spot.name[lang]}
              </h3>

              {/* Copy */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {spot.copy[lang]}
              </p>

              {/* Maps link */}
              <p className="text-[#B8956A] text-xs font-semibold uppercase tracking-wider group-hover:text-[#D4A574] transition-colors inline-flex items-center gap-1">
                {lang === "en" ? "Open in Maps" : "地図で見る"}
                <span>→</span>
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
