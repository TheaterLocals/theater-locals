"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const locations = [
  {
    code: "MP",
    en: {
      title: "Misaki Port",
      subtitle: "The tuna capital",
      body: "Forty-seven minutes from Shinagawa. The knife goes in at 5am. By the time you sit down tonight, that tuna has traveled exactly 62 kilometers to reach your plate. Tomorrow morning, 8–10am, gallery level 2: watch the next one land.",
    },
    jp: {
      title: "三崎港",
      subtitle: "マグロの産地",
      body: "品川から47分。包丁が入るのは午前5時。今夜あなたが席に着く頃、そのマグロはちょうど62キロを旅してきた。翌朝8〜10時、2階見学通路—次の一本を見届けよう。",
    },
  },
  {
    code: "HY",
    en: {
      title: "Hayama",
      subtitle: "Hayama Beef country",
      body: "The hills hold heat differently here. Hayama Beef doesn't grow fast — it grows slow, in air that smells of cedar and salt. Tonight you'll feel it dissolve at exactly 36.5 degrees. SANGA Hayama shows you where that temperature begins.",
      },
    jp: {
      title: "葉山",
      subtitle: "葉山牛の産地",
      body: "ここの丘は熱の保ち方が違う。葉山牛は速く育たない。杉と塩の香りの中でゆっくり育つ。今夜、あなたはそれが36.5度で溶けるのを感じる。SANGA葉山が、その温度の始まりを見せてくれる。",
    },
  },
  {
    code: "MC",
    en: {
      title: "Miura City",
      subtitle: "Wakame & turban shell coast",
      body: "Rocky coastline. Hands that know the timing. Wakame doesn't wait — harvested in a ten-week window each spring. The Ishii family has been reading this coast for three generations. Tonight's first course arrived at 6am.",
    },
    jp: {
      title: "三浦市",
      subtitle: "わかめ・サザエの産地",
      body: "岩礁の海岸線。タイミングを知る手。わかめは待たない—毎春、10週間の窓だけが開く。石井家はこの海岸を三代にわたって読んできた。今夜の一皿目は午前6時に届いた。",
    },
  },
];

export default function MiuraPage() {
  const { lang } = useLang();

  return (
    <div className="bg-white min-h-screen">

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
            {lang === "en" ? "The land" : "産地を旅する"}
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {lang === "en"
              ? "After tonight, go see where it came from."
              : "今夜の皿の、向こう側へ行け。"}
          </h1>
          <div className="w-12 h-px bg-[#B8956A]/60 mx-auto" />
        </div>
      </section>

      {/* Location cards */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100">
            {locations.map((loc) => {
              const info = lang === "jp" ? loc.jp : loc.en;
              return (
                <div key={loc.code} className="bg-white p-8">
                  <div className="w-12 h-12 bg-[#0A0A0A] flex items-center justify-center text-white text-xs font-bold tracking-widest mb-6">
                    {loc.code}
                  </div>
                  <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-1">{info.title}</h2>
                  <p className="text-xs font-semibold text-[#B8956A] uppercase tracking-wider mb-5">{info.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{info.body}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 text-sm text-gray-400">
            <p>
              {lang === "en"
                ? "Guides and producer introductions provided after your experience."
                : "体験後に産地ガイド・生産者紹介をお渡しします。"}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
