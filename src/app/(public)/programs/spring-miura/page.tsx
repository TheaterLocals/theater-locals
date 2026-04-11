"use client";

import Link from "next/link";
import { Clock, Users, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";
import { getExperienceContent } from "@/lib/content";
import { useLang } from "@/contexts/LangContext";

const exp = getExperienceContent();

export default function ProgramSpringMiuraPage() {
  const { lang } = useLang();

  return (
    <div className="bg-[#F5F1E8] min-h-screen">

      {/* Back link */}
      <div className="container-max pt-8 pb-0">
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-700 transition-colors tracking-wide uppercase">
          <ArrowLeft size={12} />
          {lang === "en" ? "Back to top" : "トップに戻る"}
        </Link>
      </div>

      {/* Hero */}
      <div className="relative h-80 sm:h-96 bg-[radial-gradient(ellipse_at_bottom,_#1a2e1a_0%,_#0a0a0a_100%)] flex flex-col items-center justify-center overflow-hidden mt-6">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, #B8956A 40px, #B8956A 41px)",
          }}
        />
        <div className="relative z-10 text-center px-8">
          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-4">
            {lang === "en" ? "Tonight's Program" : "今夜の演目"}
          </p>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white italic mb-3">
            {exp.title[lang]}
          </h1>
          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase">
            {lang === "en" ? "Miura Peninsula · Spring 2026" : "三浦半島 · 2026年春"}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container-max max-w-3xl py-16">

        {/* Meta bar */}
        <div className="bg-white border border-[#D4C4A8] p-6 mb-10 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#B8956A]" />
              <span>{exp.duration[lang]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-[#B8956A]" />
              <span>{exp.capacity[lang]}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-playfair text-3xl font-bold text-gray-900">
              {exp.price.en.split(" ")[0]}
            </div>
            <div className="text-xs text-gray-400">
              {lang === "jp" ? "税込 / 1名" : "per person, tax incl."}
            </div>
          </div>
        </div>

        {/* Teaser paragraph */}
        <p className="text-gray-600 text-lg leading-relaxed mb-12 font-light">
          {lang === "en"
            ? "Five courses. Five transformations. One evening you won't be able to describe afterward — only relive."
            : "五皿、五つの変容。言葉では伝えられない夜—体験した後、何度も蘇る記憶。"}
        </p>

        {/* What you'll experience */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            {lang === "en" ? "What you'll experience" : "体験できること"}
          </p>
          <div className="space-y-4">
            {exp.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-[#D4C4A8] p-5">
                <CheckCircle2 size={16} className="text-[#B8956A] mt-0.5 shrink-0" />
                <p className="text-gray-700 leading-relaxed">{h[lang]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="bg-[#0A0A0A] p-8 mb-10">
          <p className="text-xs font-semibold text-[#B8956A] uppercase tracking-widest mb-6">
            {lang === "en" ? "Your team" : "担当スタッフ"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-white text-xs font-bold tracking-widest shrink-0">
                ST
              </div>
              <div>
                <p className="text-white font-semibold">{exp.team.storyteller.role[lang]}</p>
                <p className="text-white/40 text-sm">{exp.team.storyteller.description[lang]}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#3A1F1F] flex items-center justify-center text-white text-xs font-bold tracking-widest shrink-0">
                KT
              </div>
              <div>
                <p className="text-white font-semibold">{exp.team.kitchen.role[lang]}</p>
                <p className="text-white/40 text-sm">{exp.team.kitchen.description[lang]}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Allergen note */}
        <div className="flex items-start gap-2 mb-10 text-xs text-gray-400 bg-white border border-[#D4C4A8] p-4">
          <AlertCircle size={12} className="mt-0.5 shrink-0" />
          <span>{exp.allergenNote[lang]}</span>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={exp.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-theater text-sm"
          >
            {exp.cta[lang]}
            <span className="text-[#B8956A]">→</span>
          </a>
          <p className="text-xs text-gray-400 mt-4">
            <Link href="/sessions" className="underline underline-offset-2 hover:text-gray-600 transition-colors">
              {lang === "en" ? "View all upcoming sessions →" : "全開催日程を見る →"}
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
