"use client";

import { ArrowRight } from "lucide-react";
import { getWhyContent } from "@/lib/content";
import { useLang } from "@/contexts/LangContext";

const why = getWhyContent();

export default function WhyTheaterLocals() {
  const { lang } = useLang();

  return (
    <section id="why" className="section-padding bg-white">
      <div className="container-max">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-3">
            {lang === "en" ? "Why this exists" : "なぜ存在するのか"}
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900">
            {why.title[lang]}
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-500 w-1/4 text-xs uppercase tracking-widest">
                  {why.comparison.headers.category[lang] || ""}
                </th>
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
                <tr
                  key={i}
                  className={`border-b border-gray-100 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#F5F1E8]/40"
                  }`}
                >
                  <td className="py-4 px-4 font-semibold text-gray-700 text-sm">
                    {row.category[lang]}
                  </td>
                  <td className="py-4 px-4 text-gray-400 text-sm">
                    {row.typical[lang]}
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-medium text-sm">
                    {row.theater[lang]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3 Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 mb-16">
          {why.principles.map((p) => (
            <div key={p.id} className="bg-white p-8">
              <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-4">
                {String(p.id).padStart(2, "0")}
              </p>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                {p.title[lang]}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {p.description[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div className="bg-[#0A0A0A] text-white p-10">
          <h3 className="font-playfair text-2xl font-bold mb-8 text-center">
            {why.journey.title[lang]}
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {why.journey.steps.map((step, i) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col items-center text-center px-6 md:px-8">
                  <span className="text-xs font-semibold text-[#B8956A] uppercase tracking-wider mb-2">
                    {step.phase[lang]}
                  </span>
                  <span className="text-lg font-bold text-white">
                    {step.label[lang]}
                  </span>
                </div>
                {i < why.journey.steps.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="text-[#B8956A] shrink-0 hidden md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
