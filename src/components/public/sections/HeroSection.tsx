"use client";

import { useState, useEffect } from "react";
import { getHeroContent } from "@/lib/content";
import { useLang } from "@/contexts/LangContext";

const hero = getHeroContent();

// Video backgrounds — matched to each transformation moment
const SLIDE_VIDEOS = [
  "/videos/hero.mp4",          // Tuna — night market, lanterns, steam
  "/videos/experience01.mp4",  // Fisherman — dawn net pull, golden sea
  "/videos/experience02.mp4",  // Miura street — stone, dried fish, mist
];

// Gradient fallbacks (shown before video loads / on error)
const SLIDE_FALLBACK = [
  "bg-[radial-gradient(ellipse_at_center,_#2a0a0a_0%,_#000_70%)]",
  "bg-[radial-gradient(ellipse_at_center,_#0d2e1a_0%,_#000_70%)]",
  "bg-[radial-gradient(ellipse_at_center,_#2a1800_0%,_#000_70%)]",
];

export default function HeroSection() {
  const { lang } = useLang();
  const [slideIndex, setSlideIndex] = useState(0);
  const [captionVisible, setCaptionVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCaptionVisible(false);
      setTimeout(() => {
        setSlideIndex((prev) => (prev + 1) % hero.slideshow.length);
        setCaptionVisible(true);
      }, 600);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = hero.slideshow[slideIndex];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* Video backgrounds — all rendered, crossfade by opacity */}
      {SLIDE_VIDEOS.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1500 ${SLIDE_FALLBACK[i]} ${
            i === slideIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
      ))}

      {/* Dark overlay — deepen for text readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* ── Center content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Transformation caption — fades with slide */}
        <p
          className={`text-white/40 text-xs tracking-[0.3em] uppercase mb-10 transition-opacity duration-500 ${
            captionVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.caption[lang]}
        </p>

        {/* Main headline — Playfair serif */}
        <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-8">
          {lang === "en" ? (
            <>
              Taste local tonight.
              <br />
              <span className="italic font-normal">Live it tomorrow.</span>
            </>
          ) : (
            <>
              今夜、土地を味わう。
              <br />
              <span className="font-noto-serif italic font-normal">
                明日、土地を生きる。
              </span>
            </>
          )}
        </h1>

        {/* Thin gold rule */}
        <div className="w-16 h-px bg-[#B8956A] mx-auto mb-8" />

        {/* Single CTA */}
        <a
          href="https://forms.gle/placeholder"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-theater"
        >
          {lang === "en" ? "Reserve a seat" : "席を予約する"}
          <span className="text-[#B8956A]">→</span>
        </a>
      </div>

      {/* Location — minimal, bottom center */}
      <p className="absolute bottom-8 left-0 right-0 text-center text-white/25 text-xs tracking-[0.25em] uppercase z-10">
        Miura Peninsula &nbsp;·&nbsp; 47 min from Shinagawa
      </p>

      {/* Slide indicators — bottom right */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-10">
        {hero.slideshow.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlideIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-300 bg-white/60 hover:bg-white ${
              i === slideIndex ? "w-6 h-0.5" : "w-1.5 h-0.5"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
