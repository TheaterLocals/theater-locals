"use client";

import { useState } from "react";
import { Clock, Users, AlertCircle, CheckCircle2 } from "lucide-react";
import { getExperienceContent } from "@/lib/content";

const exp = getExperienceContent();

export default function FeaturedExperience() {
  const [lang, setLang] = useState<"en" | "jp">("en");

  return (
    <section className="section-padding bg-white">
      <div className="container-max">

        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            {lang === "en" ? "Featured Experience" : "注目の体験"}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl">

          {/* ── Hero image (placeholder) ── */}
          <div className="relative h-72 bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center overflow-hidden">
            <div className="text-center text-white px-6">
              <div className="text-7xl mb-3">🍽️</div>
              <p className="text-2xl font-bold">{exp.title[lang]}</p>
            </div>
            {/* Stock photo notice */}
            <p className="absolute bottom-2 right-3 text-white/60 text-xs">
              {exp.imageNote[lang]}
            </p>
          </div>

          {/* ── Content ── */}
          <div className="p-8">

            {/* Language toggle */}
            <div className="flex gap-2 mb-6">
              {(["en", "jp"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    lang === l
                      ? "bg-amber-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Title + Price */}
            <div className="flex items-start justify-between mb-6 gap-4">
              <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                {exp.title[lang]}
              </h3>
              <div className="text-right shrink-0">
                <div className="text-3xl font-bold text-amber-600">{exp.price.en.split(" ")[0]}</div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {lang === "jp" ? "税込" : "per person, tax incl."}
                </div>
              </div>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <Clock size={15} className="text-amber-600" />
                <span>{exp.duration[lang]}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={15} className="text-amber-600" />
                <span>{exp.capacity[lang]}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                {lang === "en" ? "What you'll experience" : "体験できること"}
              </p>
              <ul className="space-y-2.5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-amber-600 mt-0.5 shrink-0" />
                    <span>{h[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Team */}
            <div className="bg-stone-50 rounded-xl p-5 mb-6">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                {lang === "en" ? "Your team" : "担当スタッフ"}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {/* Storyteller */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl shrink-0">
                    🎤
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
                {/* Kitchen */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl shrink-0">
                    🍳
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
            <div className="flex items-start gap-2 mb-8 text-xs text-gray-500">
              <AlertCircle size={13} className="mt-0.5 shrink-0" />
              <span>{exp.allergenNote[lang]}</span>
            </div>

            {/* CTA */}
            <a
              href={exp.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center btn-primary text-base"
            >
              {exp.cta[lang]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
