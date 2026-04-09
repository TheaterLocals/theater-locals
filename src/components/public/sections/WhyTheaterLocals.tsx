"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { getWhyContent } from "@/lib/content";

const why = getWhyContent();

export default function WhyTheaterLocals() {
  const [lang, setLang] = useState<"en" | "jp">("en");

  return (
    <section className="section-padding bg-white">
      <div className="container-max">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            {why.title[lang]}
          </h2>
          <div className="flex gap-2">
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
        </div>

        {/* ── Comparison Table ── */}
        <div className="mb-16 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-4 px-4 font-semibold text-gray-700 w-1/4">
                  {why.comparison.headers.category[lang] || ""}
                </th>
                <th className="text-left py-4 px-4 font-semibold text-gray-500">
                  {why.comparison.headers.typical[lang]}
                </th>
                <th className="text-left py-4 px-4 font-semibold text-amber-600">
                  {why.comparison.headers.theater[lang]}
                </th>
              </tr>
            </thead>
            <tbody>
              {why.comparison.rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                >
                  <td className="py-4 px-4 font-semibold text-gray-700">
                    {row.category[lang]}
                  </td>
                  <td className="py-4 px-4 text-gray-500">
                    {row.typical[lang]}
                  </td>
                  <td className="py-4 px-4 text-amber-700 font-medium">
                    {row.theater[lang]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── 3 Principles ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {why.principles.map((p) => (
            <div
              key={p.id}
              className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-8"
            >
              <div className="text-5xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {p.title[lang]}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {p.description[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* ── Journey Timeline ── */}
        <div className="bg-slate-800 text-white rounded-2xl p-10">
          <h3 className="text-2xl font-bold mb-8 text-center">
            {why.journey.title[lang]}
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {why.journey.steps.map((step, i) => (
              <div key={i} className="flex items-center">
                {/* Step */}
                <div className="flex flex-col items-center text-center px-6 md:px-8">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                    {step.phase[lang]}
                  </span>
                  <span className="text-lg font-bold text-white">
                    {step.label[lang]}
                  </span>
                </div>
                {/* Arrow — hide after last step */}
                {i < why.journey.steps.length - 1 && (
                  <ArrowRight
                    size={20}
                    className="text-amber-400 shrink-0 hidden md:block"
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
