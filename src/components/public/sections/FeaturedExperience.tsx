"use client";

import { Clock, Users, AlertCircle, CheckCircle2 } from "lucide-react";
import { getExperienceContent } from "@/lib/content";
import { useLang } from "@/contexts/LangContext";

const exp = getExperienceContent();

export default function FeaturedExperience() {
  const { lang } = useLang();

  return (
    <section id="featured" className="section-padding bg-[#F5F1E8]">
      <div className="container-max">

        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-3">
            {lang === "en" ? "Tonight's Program" : "今夜の演目"}
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900">
            {lang === "en" ? "Spring · Five Courses" : "春の五皿"}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-[#D4C4A8] overflow-hidden shadow-sm">

          {/* Hero card — dark atmospheric header, no emoji */}
          <div className="relative h-64 bg-[radial-gradient(ellipse_at_bottom,_#1a2e1a_0%,_#0a0a0a_100%)] flex flex-col items-center justify-center overflow-hidden">
            {/* Subtle texture lines */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 40px, #B8956A 40px, #B8956A 41px)",
              }}
            />
            <div className="relative z-10 text-center px-8">
              <p className="font-playfair text-3xl font-bold text-white italic mb-2">
                {exp.title[lang]}
              </p>
              <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase">
                {lang === "en" ? "Miura Peninsula · Spring 2026" : "三浦半島 · 2026年春"}
              </p>
            </div>
            <p className="absolute bottom-2 right-3 text-white/30 text-xs">
              {exp.imageNote[lang]}
            </p>
          </div>

          {/* Content */}
          <div className="p-8">

            {/* Title + Price */}
            <div className="flex items-start justify-between mb-6 gap-4 pb-6 border-b border-[#D4C4A8]">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 leading-snug">
                {exp.title[lang]}
              </h3>
              <div className="text-right shrink-0">
                <div className="font-playfair text-3xl font-bold text-gray-900">
                  {exp.price.en.split(" ")[0]}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {lang === "jp" ? "税込 / 1名" : "per person, tax incl."}
                </div>
              </div>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-5 mb-6 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#B8956A]" />
                <span>{exp.duration[lang]}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={14} className="text-[#B8956A]" />
                <span>{exp.capacity[lang]}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                {lang === "en" ? "What you'll experience" : "体験できること"}
              </p>
              <ul className="space-y-2.5">
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-gray-700"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-[#B8956A] mt-0.5 shrink-0"
                    />
                    <span>{h[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Team — text initials instead of emoji */}
            <div className="bg-[#F5F1E8] p-5 mb-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                {lang === "en" ? "Your team" : "担当スタッフ"}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0A0A0A] flex items-center justify-center text-white text-xs font-bold tracking-widest shrink-0">
                    ST
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {exp.team.storyteller.role[lang]}
                    </p>
                    <p className="text-xs text-gray-500">
                      {exp.team.storyteller.description[lang]}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#3A1F1F] flex items-center justify-center text-white text-xs font-bold tracking-widest shrink-0">
                    KT
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {exp.team.kitchen.role[lang]}
                    </p>
                    <p className="text-xs text-gray-500">
                      {exp.team.kitchen.description[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Allergen note */}
            <div className="flex items-start gap-2 mb-8 text-xs text-gray-400">
              <AlertCircle size={12} className="mt-0.5 shrink-0" />
              <span>{exp.allergenNote[lang]}</span>
            </div>

            {/* CTA */}
            <a
              href={exp.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center btn-theater text-sm justify-center"
            >
              {exp.cta[lang]}
              <span className="text-[#B8956A]">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
