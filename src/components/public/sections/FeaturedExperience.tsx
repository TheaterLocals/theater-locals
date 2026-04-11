"use client";

import Link from "next/link";
import { getExperienceContent } from "@/lib/content";
import { useLang } from "@/contexts/LangContext";

const exp = getExperienceContent();

export default function FeaturedExperience() {
  const { lang } = useLang();

  return (
    <section id="featured" className="section-padding bg-[#F5F1E8]">
      <div className="container-max">

        <div className="max-w-3xl mx-auto">

          {/* Eyebrow */}
          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-3 text-center">
            {lang === "en" ? "Tonight's Program" : "今夜の演目"}
          </p>

          {/* Atmospheric visual */}
          <div className="relative h-72 sm:h-80 bg-[radial-gradient(ellipse_at_bottom,_#1a2e1a_0%,_#0a0a0a_100%)] flex flex-col items-center justify-center overflow-hidden mb-0">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 40px, #B8956A 40px, #B8956A 41px)",
              }}
            />
            <div className="relative z-10 text-center px-8">
              <p className="font-playfair text-3xl sm:text-4xl font-bold text-white italic mb-3">
                {exp.title[lang]}
              </p>
              <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase">
                {lang === "en" ? "Miura Peninsula · Spring 2026" : "三浦半島 · 2026年春"}
              </p>
            </div>
          </div>

          {/* Teaser copy + CTA */}
          <div className="bg-white border border-[#D4C4A8] border-t-0 px-8 py-8 text-center">
            <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-lg mx-auto">
              {lang === "en"
                ? "Five courses. Five transformations. One evening you won't be able to describe afterward — only relive."
                : "五皿、五つの変容。言葉では伝えられない夜—体験した後、何度も蘇る記憶。"}
            </p>
            <Link
              href="/programs/spring-miura"
              className="btn-theater text-sm"
            >
              {lang === "en" ? "See the full program" : "プログラム詳細を見る"}
              <span className="text-[#B8956A]">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
