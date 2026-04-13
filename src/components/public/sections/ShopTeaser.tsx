"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LangContext";

const shopItems = [
  {
    id: "wakame",
    code: "WK",
    bg: "bg-[radial-gradient(ellipse_at_center,_#0d3a1a_0%,_#000_100%)]",
    en: {
      name: "Miura Wakame Set",
      price: "¥2,500",
      producer: "from Ishii Shoten · Miura Peninsula",
    },
    jp: {
      name: "三浦わかめセット",
      price: "¥2,500",
      producer: "石井商店 · 三浦半島から直送",
    },
  },
  {
    id: "beef",
    code: "BF",
    bg: "bg-[radial-gradient(ellipse_at_center,_#2a1400_0%,_#000_100%)]",
    en: {
      name: "Hayama Beef (limited)",
      price: "¥6,000",
      producer: "from Hayama Meat Co. · Hayama",
    },
    jp: {
      name: "葉山牛（数量限定）",
      price: "¥6,000",
      producer: "葉山ミート · 葉山から直送",
    },
  },
  {
    id: "tuna",
    code: "TN",
    bg: "bg-[radial-gradient(ellipse_at_center,_#2a0a0a_0%,_#000_100%)]",
    en: {
      name: "Misaki Tuna Selection",
      price: "¥4,500",
      producer: "from Misaki Fish Market · Misaki Port",
    },
    jp: {
      name: "三崎まぐろセレクション",
      price: "¥4,500",
      producer: "三崎魚市場 · 三崎港から直送",
    },
  },
];

export default function ShopTeaser() {
  const { lang } = useLang();

  return (
    <section className="section-padding bg-white border-t border-gray-100">
      <div className="container-max">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-3">
            {lang === "en" ? "The shop" : "ショップ"}
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {lang === "en" ? "Take tonight home." : "今夜を持ち帰る。"}
          </h2>
          <p className="text-gray-400 text-sm">
            {lang === "en"
              ? "Every ingredient from tonight — sourced directly from the producers you just met."
              : "今夜の食材すべてを、生産者から直接。"}
          </p>
        </div>

        {/* 3 Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-100 mb-8">
          {shopItems.map((item) => {
            const info = lang === "jp" ? item.jp : item.en;
            return (
              <div key={item.id} className="bg-white relative overflow-hidden group">
                {/* Coming soon badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#0A0A0A]/70 text-white text-[10px] font-bold px-2 py-1 tracking-widest uppercase">
                    {lang === "en" ? "Coming Soon" : "近日公開"}
                  </span>
                </div>

                {/* Atmospheric image */}
                <div className={`h-44 ${item.bg} flex items-center justify-center`}>
                  <span className="text-white/10 text-4xl font-bold tracking-widest group-hover:text-white/15 transition-colors">
                    {item.code}
                  </span>
                </div>

                {/* Details */}
                <div className="p-5 border border-t-0 border-gray-100">
                  <p className="font-playfair text-base font-bold text-gray-900 mb-1">{info.name}</p>
                  <p className="text-[#B8956A] font-bold text-sm mb-2">{info.price}</p>
                  <p className="text-gray-400 text-xs leading-snug">{info.producer}</p>
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
          <Link href="/shop" className="btn-theater text-xs py-2 px-6">
            {lang === "en" ? "See all products →" : "商品一覧を見る →"}
          </Link>
        </div>

      </div>
    </section>
  );
}
