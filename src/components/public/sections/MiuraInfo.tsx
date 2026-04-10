"use client";

import { useState } from "react";

const locations = [
  {
    emoji: "🐟",
    title: { en: "Misaki Port", jp: "三崎港" },
    subtitle: { en: "The tuna capital", jp: "マグロの産地" },
    desc: {
      en: "Home to one of Japan's premier tuna markets. Join an early morning auction viewing (8–10am, 2F gallery, free) and trace tonight's dish back to its source.",
      jp: "日本有数のマグロ水揚げ港。翌朝8〜10時、2階見学通路から競りを無料見学でき、今夜の一皿の産地をたどれます。",
    },
  },
  {
    emoji: "🥩",
    title: { en: "Hayama", jp: "葉山" },
    subtitle: { en: "Hayama Beef country", jp: "葉山牛の産地" },
    desc: {
      en: "Hayama's rolling hills nurture Hayama Beef — the premium wagyu that anchors our warm-temperature course. SANGA Hayama brings the farm story to the table.",
      jp: "葉山の丘陵地で育つ葉山牛は、体温造りの主役。SANGA葉山で、牧場から皿までのストーリーを体験できます。",
    },
  },
  {
    emoji: "🌿",
    title: { en: "Miura City", jp: "三浦市" },
    subtitle: { en: "Wakame & turban shell coast", jp: "わかめ・サザエの産地" },
    desc: {
      en: "The rocky coastline of Miura yields hand-harvested wakame and wild turban shells. Visit Ishii Shoten or Urari market to meet the producers behind tonight's first course.",
      jp: "三浦の岩礁地帯で手摘みされるわかめとサザエ。石井商店やうらりで、今夜の一皿目を届けてくれた生産者に会えます。",
    },
  },
];

export default function MiuraInfo() {
  const [lang, setLang] = useState<"en" | "jp">("en");

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container-max">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              {lang === "en"
                ? "After tonight, explore Miura Peninsula."
                : "体験後、三浦半島へ。"}
            </h2>
            <p className="text-lg text-gray-600">
              {lang === "en"
                ? "Tonight's dishes trace back to these places. Go see them for yourself."
                : "今夜の一皿が、明日の旅への入口になる。"}
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            {(["en", "jp"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  lang === l
                    ? "bg-amber-600 text-white"
                    : "bg-white text-gray-600 border border-gray-300 hover:border-amber-400"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {locations.map((loc) => (
            <div
              key={loc.title.en}
              className="bg-white rounded-2xl border border-blue-100 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{loc.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {loc.title[lang]}
              </h3>
              <p className="text-sm font-semibold text-teal-600 mb-3">
                {loc.subtitle[lang]}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {loc.desc[lang]}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            {lang === "en"
              ? "Guides and producer introductions provided after your experience."
              : "体験後に産地ガイド・生産者紹介をお渡しします。"}
          </p>
        </div>
      </div>
    </section>
  );
}
