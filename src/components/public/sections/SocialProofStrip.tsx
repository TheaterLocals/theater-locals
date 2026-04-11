"use client";

import { useLang } from "@/contexts/LangContext";

const producers = [
  {
    code: "IS",
    en: { name: "Ishii Shoten", role: "Wakame harvester, Miura" },
    jp: { name: "石井商店", role: "わかめ漁師・三浦" },
  },
  {
    code: "TF",
    en: { name: "Tanaka Farm", role: "Wasabi grower, Izu" },
    jp: { name: "田中農園", role: "わさび農家・伊豆" },
  },
  {
    code: "HM",
    en: { name: "Hayama Meat Co.", role: "Wagyu producer, Hayama" },
    jp: { name: "葉山ミート", role: "葉山牛生産者・葉山" },
  },
  {
    code: "MF",
    en: { name: "Misaki Fish Market", role: "Bluefin tuna, Misaki Port" },
    jp: { name: "三崎魚市場", role: "本まぐろ・三崎港" },
  },
];

export default function SocialProofStrip() {
  const { lang } = useLang();

  return (
    <section className="bg-[#0A0A0A] py-12 border-t border-white/5">
      <div className="container-max">

        <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase text-center mb-8">
          {lang === "en" ? "The hands behind tonight" : "今夜を作る人たち"}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {producers.map((p) => {
            const info = lang === "jp" ? p.jp : p.en;
            return (
              <div key={p.code} className="bg-[#0A0A0A] px-6 py-6 text-center">
                <div className="w-10 h-10 border border-[#B8956A]/30 flex items-center justify-center text-[#B8956A] text-xs font-bold tracking-widest mx-auto mb-3">
                  {p.code}
                </div>
                <p className="text-white text-sm font-semibold mb-1">{info.name}</p>
                <p className="text-white/35 text-xs leading-snug">{info.role}</p>
              </div>
            );
          })}
        </div>

        <p className="text-white/20 text-xs text-center mt-6 tracking-wide">
          {lang === "en"
            ? "All ingredients sourced directly from producers. No intermediaries."
            : "全食材を生産者から直仕入れ。中間業者なし。"}
        </p>

      </div>
    </section>
  );
}
