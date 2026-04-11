"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { getWhyContent } from "@/lib/content";
import { useLang } from "@/contexts/LangContext";

const why = getWhyContent();

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <div className="bg-white min-h-screen">

      {/* Back link */}
      <div className="container-max pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-700 transition-colors tracking-wide uppercase">
          <ArrowLeft size={12} />
          {lang === "en" ? "Back to top" : "トップに戻る"}
        </Link>
      </div>

      {/* Hero */}
      <section className="bg-[#0A0A0A] mt-6 py-24 sm:py-32">
        <div className="container-max max-w-3xl text-center">
          <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-6">
            {lang === "en" ? "About" : "私たちについて"}
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {lang === "en"
              ? "We built this because food is a doorway, not a display."
              : "食べることは、展示じゃない。扉だ。"}
          </h1>
          <div className="w-12 h-px bg-[#B8956A]/60 mx-auto" />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container-max">
          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-8">
            {lang === "en" ? "Why this exists" : "なぜ存在するのか"}
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            {why.title[lang]}
          </h2>
          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-500 w-1/4 text-xs uppercase tracking-widest" />
                  <th className="text-left py-4 px-4 font-semibold text-gray-400 text-xs uppercase tracking-widest">
                    {why.comparison.headers.typical[lang]}
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-[#B8956A] text-xs uppercase tracking-widest">
                    {why.comparison.headers.theater[lang]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {why.comparison.rows.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-[#F5F1E8]/40"}`}>
                    <td className="py-4 px-4 font-semibold text-gray-700 text-sm">{row.category[lang]}</td>
                    <td className="py-4 px-4 text-gray-400 text-sm">{row.typical[lang]}</td>
                    <td className="py-4 px-4 text-gray-800 font-medium text-sm">{row.theater[lang]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3 Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {why.principles.map((p) => (
              <div key={p.id} id={p.id} className="bg-white p-8 scroll-mt-20">
                <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-4">
                  {String(p.id === "unity" ? "01" : p.id === "physicality" ? "02" : "03")}
                </p>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">{p.title[lang]}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-max">
          <h2 className="font-playfair text-2xl font-bold text-white text-center mb-10">
            {why.journey.title[lang]}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {why.journey.steps.map((step, i) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col items-center text-center px-8">
                  <span className="text-xs font-semibold text-[#B8956A] uppercase tracking-wider mb-2">
                    {step.phase[lang]}
                  </span>
                  <span className="text-lg font-bold text-white">{step.label[lang]}</span>
                </div>
                {i < why.journey.steps.length - 1 && (
                  <ArrowRight size={18} className="text-[#B8956A] shrink-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/how-it-works" className="text-[#B8956A] text-xs tracking-[0.2em] uppercase hover:text-[#D4A574] transition-colors">
              {lang === "en" ? "See the full journey map →" : "ジャーニーマップを見る →"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
