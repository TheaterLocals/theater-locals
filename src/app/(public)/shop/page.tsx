"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const shopProducts = [
  {
    id: "wakame",
    code: "WK",
    bg: "bg-[radial-gradient(ellipse_at_center,_#0d3a1a_0%,_#000_100%)]",
    en: {
      name: "Miura Wakame Set",
      price: "¥2,500",
      producer: "Ishii Shoten · Miura Peninsula",
      story: "Sun-dried on the rocky coast, then revived in seconds. The same wakame from Act I — harvested in the cold currents off Miura and packed the same day.",
    },
    jp: {
      name: "三浦わかめセット",
      price: "¥2,500",
      producer: "石井商店 · 三浦半島",
      story: "岩場で天日干し、そして瞬時に蘇る。第一幕のわかめと同じもの。三浦の冷たい海流で育ち、当日梱包。",
    },
  },
  {
    id: "beef",
    code: "BF",
    bg: "bg-[radial-gradient(ellipse_at_center,_#2a1400_0%,_#000_100%)]",
    en: {
      name: "Hayama Beef (limited)",
      price: "¥6,000",
      producer: "Hayama Meat Co. · Hayama",
      story: "Raised slowly on the hills above Sagami Bay. Limited cuts available each week — the same marbled beef that melted on your palm in Act IV.",
    },
    jp: {
      name: "葉山牛（数量限定）",
      price: "¥6,000",
      producer: "葉山ミート · 葉山",
      story: "相模湾を見下ろす丘でゆっくりと育てられた。毎週数量限定。第四幕で手のひらに溶けたあの霜降り牛肉。",
    },
  },
  {
    id: "tuna",
    code: "TN",
    bg: "bg-[radial-gradient(ellipse_at_center,_#2a0a0a_0%,_#000_100%)]",
    en: {
      name: "Misaki Tuna Selection",
      price: "¥4,500",
      producer: "Misaki Fish Market · Misaki Port",
      story: "Bluefin landed at Misaki Port — Japan's largest tuna market. Flash-frozen at peak freshness, delivered to your door. Three temperature tastings included.",
    },
    jp: {
      name: "三崎まぐろセレクション",
      price: "¥4,500",
      producer: "三崎魚市場 · 三崎港",
      story: "日本最大のマグロ市場、三崎港に水揚げされた本マグロ。旬の鮮度で急速冷凍し、自宅にお届け。三温度テイスティング付き。",
    },
  },
  {
    id: "sake",
    code: "SK",
    bg: "bg-[radial-gradient(ellipse_at_center,_#1a1a2a_0%,_#000_100%)]",
    en: {
      name: "Kumazawa Craft Sake",
      price: "¥3,200",
      producer: "Kumazawa Brewery · Chigasaki",
      story: "Brewed in Chigasaki since 1872. The same bottles that closed Act V — a sake that tastes of the Shonan coast at dusk.",
    },
    jp: {
      name: "熊澤酒造クラフト酒",
      price: "¥3,200",
      producer: "熊澤酒造 · 茅ヶ崎",
      story: "1872年から茅ヶ崎で醸造。第五幕の締めに使ったのと同じボトル。湘南の海岸の夕暮れを感じる酒。",
    },
  },
];

export default function ShopPage() {
  const { lang } = useLang();

  return (
    <div className="bg-[#F5F1E8] min-h-screen">

      {/* Back link */}
      <div className="container-max pt-8 pb-0">
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-700 transition-colors tracking-wide uppercase">
          <ArrowLeft size={12} />
          {lang === "en" ? "← Home" : "← ホーム"}
        </Link>
      </div>

      {/* Hero */}
      <section className="bg-[#0A0A0A] mt-6 py-20">
        <div className="container-max max-w-2xl text-center">
          <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-6">
            {lang === "en" ? "The shop" : "ショップ"}
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            {lang === "en" ? "Take tonight home." : "今夜を持ち帰る。"}
          </h1>
          <p className="text-white/40 text-sm">
            {lang === "en"
              ? "Every ingredient from the experience — sourced directly from the producers."
              : "体験のすべての食材を、生産者から直接お届けします。"}
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="section-padding">
        <div className="container-max max-w-5xl">

          {/* Coming soon note */}
          <div className="border border-[#B8956A]/30 bg-white px-6 py-4 mb-10">
            <p className="text-sm text-gray-600">
              {lang === "en"
                ? "Shop opens 2026. Register your interest below and we'll notify you when orders open."
                : "ショップは2026年オープン予定です。下部でご登録いただくと、注文開始時にお知らせします。"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 mb-12">
            {shopProducts.map((product) => {
              const info = lang === "jp" ? product.jp : product.en;
              return (
                <div key={product.id} className="bg-white relative overflow-hidden group">
                  {/* Coming soon badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-[#0A0A0A]/70 text-white text-[10px] font-bold px-2 py-1 tracking-widest uppercase">
                      {lang === "en" ? "Coming Soon" : "近日公開"}
                    </span>
                  </div>

                  {/* Atmospheric gradient image */}
                  <div className={`h-52 ${product.bg} flex items-center justify-center`}>
                    <span className="text-white/10 text-5xl font-bold tracking-widest group-hover:text-white/20 transition-colors">
                      {product.code}
                    </span>
                  </div>

                  {/* Product info */}
                  <div className="p-6 border-t border-gray-100">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <p className="font-playfair text-lg font-bold text-gray-900 leading-snug">{info.name}</p>
                      <p className="text-[#B8956A] font-bold text-base shrink-0">{info.price}</p>
                    </div>
                    <p className="text-xs text-gray-400 italic mb-3">{info.producer}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{info.story}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-gray-400 text-center mb-6">
            {lang === "en"
              ? "Can't visit Miura? We bring the peninsula to your door."
              : "三浦に来られなくても、半島の味をお届けします。"}
          </p>

          <div className="text-center">
            <button disabled className="btn-theater opacity-40 cursor-not-allowed">
              {lang === "en" ? "Shop opens soon →" : "まもなくオープン →"}
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
