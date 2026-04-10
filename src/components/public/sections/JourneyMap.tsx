"use client";

import { useState } from "react";

const stages = {
  en: [
    {
      title: "Before (7 days → day of)",
      steps: [
        "Discover → Visit the site, browse the program",
        "Anticipate → Read the producer stories behind each course",
        "Book → Sign up, receive your confirmation",
      ],
    },
    {
      title: "During (the evening)",
      steps: [
        "Arrive → Step into the venue",
        "Pre-show → 30-min world-setting intro",
        "Main experience → From wakame revival to Hayama Beef at body temperature — live the five-course story (90 min)",
        "Connect → Register for EC & updates (20 min)",
      ],
    },
    {
      title: "After (next day → 30 days)",
      steps: [
        "Share → Post to social, talk with friends",
        "Learn more → Read producer articles and background content",
        "Shop → Order ingredients and tableware online",
        "Travel → Book a trip to Miura Peninsula",
      ],
    },
  ],
  jp: [
    {
      title: "旅前（7日前〜当日）",
      steps: [
        "発見 → サイト訪問、プログラム閲覧",
        "期待醸成 → 各皿の生産者ストーリーを読む",
        "予約 → 申し込み、参加確認メール受取",
      ],
    },
    {
      title: "旅ナカ（当日）",
      steps: [
        "到着 → 会場へ",
        "プレショー → 世界観へのセットアップ（30分）",
        "メイン体験 → わかめの蘇生から葉山牛の体温造りまで、五皿の物語を体験（90分）",
        "旅後つながり → EC・CRM登録（20分）",
      ],
    },
    {
      title: "旅後（翌日〜30日）",
      steps: [
        "思い出共有 → SNS投稿、友人と会話",
        "学習続行 → 生産者記事、背景知識コンテンツ閲覧",
        "EC購入 → 食材・器をオンライン購入",
        "旅先訪問 → 三浦半島への旅行予約",
      ],
    },
  ],
};

export default function JourneyMap() {
  const [lang, setLang] = useState<"en" | "jp">("en");
  const currentStages = stages[lang];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            {lang === "en" ? "Your Journey" : "体験のジャーニーマップ"}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentStages.map((stage, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {stage.title}
                </h3>
              </div>

              <div className="space-y-3">
                {stage.steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="flex gap-3">
                    <div className="text-amber-600 font-bold min-w-fit">
                      {String.fromCharCode(97 + stepIdx)}.
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
