"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { getHeroContent } from "@/lib/content";

const hero = getHeroContent();

export default function HeroSection() {
  const [lang, setLang] = useState<"en" | "jp">("en");
  const [slideIndex, setSlideIndex] = useState(0);

  // Auto-advance slideshow every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % hero.slideshow.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slide = hero.slideshow[slideIndex];

  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Copy + Search ── */}
          <div>
            {/* Language toggle */}
            <div className="flex gap-2 mb-6">
              {(["en", "jp"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
                    lang === l
                      ? "bg-amber-600 text-white"
                      : "bg-white text-gray-600 border border-gray-300 hover:border-amber-400"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900 leading-tight">
              {hero.headline[lang]}
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              {hero.subheadline[lang]}
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8">
              {hero.trustSignals.map((signal, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 bg-white border border-amber-200 text-amber-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                >
                  {signal[lang]}
                </span>
              ))}
            </div>

            {/* Search box */}
            <div className="bg-white rounded-xl shadow-lg p-5 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {hero.search.datePlaceholder[lang]}
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {hero.search.guestsLabel[lang]}
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm">
                    {hero.search.guestsOptions.map((n) => (
                      <option key={n} value={n}>
                        {n}{lang === "jp" ? "名" : n === 1 ? " guest" : " guests"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Language */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {hero.search.languageLabel[lang]}
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm">
                    {hero.search.languageOptions.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="w-full btn-primary flex items-center justify-center gap-2">
                <Search size={18} />
                {hero.search.cta[lang]}
              </button>
            </div>
          </div>

          {/* ── Right: Slideshow ── */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-stone-900">
            {/* Slide panels */}
            {hero.slideshow.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                  i === slideIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Placeholder gradient — swap for <Image> when real photos exist */}
                <div
                  className={`absolute inset-0 ${
                    i === 0
                      ? "bg-gradient-to-br from-green-700 to-emerald-900"
                      : i === 1
                      ? "bg-gradient-to-br from-red-800 to-stone-900"
                      : "bg-gradient-to-br from-amber-700 to-orange-900"
                  }`}
                />
                <div className="relative z-10 text-center px-6">
                  <div className="text-6xl mb-4">
                    {i === 0 ? "🌿" : i === 1 ? "🔥" : "🥩"}
                  </div>
                  <p className="text-white font-semibold text-lg leading-snug">
                    {s.caption[lang]}
                  </p>
                </div>
              </div>
            ))}

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {hero.slideshow.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === slideIndex ? "bg-white w-4" : "bg-white/50"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Stock photo note */}
            <p className="absolute bottom-2 right-3 text-white/40 text-xs z-20">
              {lang === "jp" ? "※ 写真はイメージです" : "※ Photo is illustrative"}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
