"use client";

import { useLang } from "@/contexts/LangContext";

const locations = [
  {
    code: "MP",
    title: { en: "Misaki Port", jp: "三崎港" },
    subtitle: { en: "The tuna capital", jp: "マグロの産地" },
    desc: {
      en: "Home to one of Japan's premier tuna markets. Join an early morning auction viewing (8–10am, 2F gallery, free) and trace tonight's dish back to its source.",
      jp: "日本有数のマグロ水揚げ港。翌朝8〜10時、2階見学通路から競りを無料見学でき、今夜の一皿の産地をたどれます。",
    },
  },
  {
    code: "HY",
    title: { en: "Hayama", jp: "葉山" },
    subtitle: { en: "Hayama Beef country", jp: "葉山牛の産地" },
    desc: {
      en: "Hayama's rolling hills nurture Hayama Beef — the premium wagyu that anchors our warm-temperature course. SANGA Hayama brings the farm story to the table.",
      jp: "葉山の丘陵地で育つ葉山牛は、体温造りの主役。SANGA葉山で、牧場から皿までのストーリーを体験できます。",
    },
  },
  {
    code: "MC",
    title: { en: "Miura City", jp: "三浦市" },
    subtitle: { en: "Wakame & turban shell coast", jp: "わかめ・サザエの産地" },
    desc: {
      en: "The rocky coastline of Miura yields hand-harvested wakame and wild turban shells. Visit Ishii Shoten or Urari market to meet the producers behind tonight's first course.",
      jp: "三浦の岩礁地帯で手摘みされるわかめとサザエ。石井商店やうらりで、今夜の一皿目を届けてくれた生産者に会えます。",
    },
  },
];

export default function MiuraInfo() {
  const { lang } = useLang();

  return (
    <section className="section-padding bg-white">
      <div className="container-max">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-3">
            {lang === "en" ? "The land" : "産地を旅する"}
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {lang === "en"
              ? "After tonight, explore Miura Peninsula."
              : "体験後、三浦半島へ。"}
          </h2>
          <p className="text-gray-500 text-lg">
            {lang === "en"
              ? "Tonight's dishes trace back to these places. Go see them for yourself."
              : "今夜の一皿が、明日の旅への入口になる。"}
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 mb-10">
          {locations.map((loc) => (
            <div
              key={loc.title.en}
              className="bg-white p-8"
            >
              <div className="w-12 h-12 bg-[#0A0A0A] flex items-center justify-center text-white text-xs font-bold tracking-widest mb-5">
                {loc.code}
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-1">
                {loc.title[lang]}
              </h3>
              <p className="text-xs font-semibold text-[#B8956A] uppercase tracking-wider mb-4">
                {loc.subtitle[lang]}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {loc.desc[lang]}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400">
            {lang === "en"
              ? "Guides and producer introductions provided after your experience."
              : "体験後に産地ガイド・生産者紹介をお渡しします。"}
          </p>
        </div>
      </div>
    </section>
  );
}
