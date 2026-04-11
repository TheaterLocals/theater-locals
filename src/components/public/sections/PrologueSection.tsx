"use client";

import { useLang } from "@/contexts/LangContext";

export default function PrologueSection() {
  const { lang } = useLang();

  return (
    <section className="bg-[#0A0A0A] py-24 sm:py-32 lg:py-40">
      <div className="container-max max-w-3xl text-center">

        {/* Eyebrow */}
        <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-8">
          {lang === "en" ? "What this is" : "これは何か"}
        </p>

        {/* Brand declaration — Playfair serif, large */}
        <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          {lang === "en" ? (
            <>
              Not a food tour.
              <br />
              <span className="italic font-normal text-white/70">
                A live window.
              </span>
            </>
          ) : (
            <>
              食事ツアーではない。
              <br />
              <span className="font-noto-serif italic font-normal text-white/70">
                生きた窓だ。
              </span>
            </>
          )}
        </h2>

        {/* Thin gold rule */}
        <div className="w-12 h-px bg-[#B8956A]/60 mx-auto mb-8" />

        {/* Supporting copy — Magician voice */}
        <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
          {lang === "en"
            ? "Five courses. Five transformations. Each dish opens a door to the land where it was born."
            : "五皿、五つの変容。それぞれの皿が、生まれた土地への扉を開く。"}
        </p>

      </div>
    </section>
  );
}
