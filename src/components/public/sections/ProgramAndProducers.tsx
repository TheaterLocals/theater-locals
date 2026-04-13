"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { getExperienceContent } from "@/lib/content";
import { useLang } from "@/contexts/LangContext";

const exp = getExperienceContent();

const highlights = {
  en: [
    "Watch dried seaweed resurrect — black to vivid green in 10 seconds",
    "Grate real wasabi from Izu — feel the texture change under your hands",
    "Discover frozen tuna's three faces — from frozen block to three distinct tastes",
    "Feel Hayama beef melt on your palm at body temperature",
  ],
  jp: [
    "わかめが10秒で黒から鮮やかな緑に蘇る瞬間を目撃する",
    "伊豆産の本わさびをすりおろし、手の下でテクスチャーが変わるのを感じる",
    "冷凍マグロの三つの顔を発見する：解凍前・紙薄切り・炙り",
    "葉山牛が体温で手のひらに溶けていくのを感じる",
  ],
};

const producers = [
  {
    code: "IS",
    en: { name: "Ishii Shoten", role: "Wakame harvester · Miura" },
    jp: { name: "石井商店", role: "わかめ漁師 · 三浦" },
  },
  {
    code: "TF",
    en: { name: "Tanaka Farm", role: "Wasabi grower · Izu" },
    jp: { name: "田中農園", role: "わさび農家 · 伊豆" },
  },
  {
    code: "HM",
    en: { name: "Hayama Meat Co.", role: "Wagyu producer · Hayama" },
    jp: { name: "葉山ミート", role: "葉山牛生産者 · 葉山" },
  },
  {
    code: "MF",
    en: { name: "Misaki Fish Market", role: "Bluefin tuna · Misaki Port" },
    jp: { name: "三崎魚市場", role: "本マグロ · 三崎港" },
  },
];

export default function ProgramAndProducers() {
  const { lang } = useLang();

  return (
    <section id="program" className="section-padding bg-[#F5F1E8]">
      <div className="container-max">

        {/* Eyebrow + Meta */}
        <div className="max-w-3xl mx-auto">
          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-3 text-center">
            {lang === "en" ? "Tonight's Program" : "今夜の演目"}
          </p>

          {/* Atmospheric visual */}
          <div className="relative h-64 sm:h-72 bg-[radial-gradient(ellipse_at_bottom,_#1a2e1a_0%,_#0a0a0a_100%)] flex flex-col items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, #B8956A 40px, #B8956A 41px)" }}
            />
            <div className="relative z-10 text-center px-8">
              <p className="font-playfair text-2xl sm:text-3xl font-bold text-white italic mb-3">
                {exp.title[lang]}
              </p>
              {/* Price meta — safety / ⑤安心 */}
              <p className="text-[#B8956A]/80 text-sm tracking-wider">
                {lang === "en"
                  ? "¥15,000 · 15 guests · 2 hours · Miura Peninsula"
                  : "¥15,000 · 15名 · 2時間 · 三浦半島"}
              </p>
            </div>
          </div>

          {/* Highlights — desire / ②欲望 */}
          <div className="bg-white border border-[#D4C4A8] border-t-0 px-8 py-8">
            <ul className="space-y-3 mb-8">
              {highlights[lang].map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 size={15} className="text-[#B8956A] mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Producers — trust / ③信頼 */}
            <div className="border-t border-[#D4C4A8] pt-6 mb-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                {lang === "en" ? "The hands behind tonight" : "今夜を作る人たち"}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {producers.map((p) => {
                  const info = lang === "jp" ? p.jp : p.en;
                  return (
                    <div key={p.code} className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#0A0A0A] flex items-center justify-center text-white text-[10px] font-bold tracking-widest shrink-0">
                        {p.code}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-900 leading-tight">{info.name}</p>
                        <p className="text-[10px] text-gray-400 leading-tight">{info.role}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/programs/spring-miura" className="btn-theater text-sm">
                {lang === "en" ? "See the full program" : "プログラム詳細を見る"}
                <span className="text-[#B8956A]">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
