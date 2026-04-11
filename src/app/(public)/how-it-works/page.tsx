"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

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

export default function HowItWorksPage() {
  const { lang } = useLang();
  const currentStages = stages[lang];

  return (
    <div className="bg-[#F5F1E8] min-h-screen">

      <div className="container-max pt-8">
        <Link href="/about" className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-700 transition-colors tracking-wide uppercase">
          <ArrowLeft size={12} />
          {lang === "en" ? "Back to About" : "Aboutに戻る"}
        </Link>
      </div>

      <section className="bg-[#0A0A0A] mt-6 py-20">
        <div className="container-max max-w-2xl text-center">
          <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-6">
            {lang === "en" ? "How it works" : "体験の仕組み"}
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white leading-tight">
            {lang === "en" ? "The full arc — before, during, after." : "旅前・旅ナカ・旅後の全体像"}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {currentStages.map((stage, idx) => (
              <div key={idx} className="bg-[#F5F1E8] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#0A0A0A] text-white flex items-center justify-center font-bold text-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h2 className="font-playfair text-lg font-bold text-gray-900 leading-snug">
                    {stage.title}
                  </h2>
                </div>
                <div className="space-y-3">
                  {stage.steps.map((step, stepIdx) => (
                    <div key={stepIdx} className="flex gap-3">
                      <div className="text-[#B8956A] font-bold min-w-fit text-xs mt-0.5">
                        {String.fromCharCode(97 + stepIdx)}.
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs/spring-miura" className="btn-theater text-sm">
              {lang === "en" ? "See tonight's program →" : "今夜のプログラムを見る →"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
