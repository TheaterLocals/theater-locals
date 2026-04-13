"use client";

import Link from "next/link";
import { Clock, Users, AlertCircle, ArrowLeft, CalendarDays } from "lucide-react";
import { getExperienceContent, getUpcomingContent, getSessionsByMonth, getSeatsLabel, isAlmostFull } from "@/lib/content";
import { useLang } from "@/contexts/LangContext";
import { useState } from "react";

const exp = getExperienceContent();
const upcoming = getUpcomingContent();

const courses = {
  en: [
    {
      act: "Act I",
      title: "The Resurrection",
      dish: "Miura Wakame · revived in boiling dashi",
      story: "Dried to black. Dead. Then ten seconds in hot water — and it turns vivid green before your eyes. This is not a magic trick. This is biology. This is what the coast of Miura does every spring.",
      producer: "Harvested by Ishii Shoten · Miura Peninsula",
    },
    {
      act: "Act II",
      title: "The Grating",
      dish: "Izu Wasabi · freshly grated at your seat",
      story: "A real wasabi root. Your hands. Your rhythm. The texture changes as you grind — smooth, then grainy, then fragrant. No one in this room has grated wasabi the same way twice.",
      producer: "Grown by Tanaka Farm · Izu",
    },
    {
      act: "Act III",
      title: "The Three Faces",
      dish: "Misaki Bluefin Tuna · frozen block to three distinct tastes",
      story: "The same fish. Three temperatures. Three textures. Three different relationships with your tongue. You'll never order 'tuna' the same way again.",
      producer: "Sourced from Misaki Fish Market · Misaki Port",
    },
    {
      act: "Act IV",
      title: "The Melt",
      dish: "Hayama Beef · served at body temperature",
      story: "Placed on your palm. No fork. No knife. Your body heat does the work. This is the slowest course of the evening — and the one you'll remember longest.",
      producer: "Raised by Hayama Meat Co. · Hayama",
    },
    {
      act: "Act V",
      title: "The Return",
      dish: "Seasonal closing course · local craft sake pairing",
      story: "The evening ends where it began — with the land. A final course that ties the five stories together. Then: where do you go next?",
      producer: "Paired with Kumazawa Brewery · Chigasaki",
    },
  ],
  jp: [
    {
      act: "第一幕",
      title: "蘇生",
      dish: "三浦わかめ · 熱い出汁で甦る",
      story: "黒く枯れたわかめ。死んでいる。しかし熱湯に10秒—目の前で鮮やかな緑に変わる。これはマジックではない。生物学だ。三浦の海岸が毎春繰り返すことだ。",
      producer: "石井商店 · 三浦半島から直送",
    },
    {
      act: "第二幕",
      title: "おろす",
      dish: "伊豆本わさび · 席でおろしたて",
      story: "本物のわさびの根。あなたの手。あなたのリズム。すりながらテクスチャーが変わる—滑らか、粒立ち、香り。この部屋で同じようにわさびをすった人は一人もいない。",
      producer: "田中農園 · 伊豆で栽培",
    },
    {
      act: "第三幕",
      title: "三つの顔",
      dish: "三崎本マグロ · 冷凍から三種の味へ",
      story: "同じ魚。三つの温度。三つのテクスチャー。舌との三種の関係。「マグロ」を注文するとき、もう以前と同じ意味ではなくなる。",
      producer: "三崎魚市場 · 三崎港から直送",
    },
    {
      act: "第四幕",
      title: "溶ける",
      dish: "葉山牛 · 体温で提供",
      story: "手のひらに置かれる。フォークもナイフもない。あなたの体温が仕事をする。今夜一番ゆっくりした皿—そして一番長く記憶に残る皿。",
      producer: "葉山ミート · 葉山で育てられた",
    },
    {
      act: "第五幕",
      title: "帰還",
      dish: "季節の締めコース · クラフト酒ペアリング",
      story: "夕べは始まった場所に終わる—土地とともに。五つの物語を結ぶ最後の一皿。そして：次はどこへ行く？",
      producer: "熊澤酒造 · 茅ヶ崎とのペアリング",
    },
  ],
};

const timeline = {
  en: [
    { label: "Pre-show", duration: "15 min", desc: "World-setting intro & context" },
    { label: "Main experience", duration: "90 min", desc: "Five courses, five transformations" },
    { label: "Post-show", duration: "20 min", desc: "Connect, register, debrief" },
  ],
  jp: [
    { label: "プレショー", duration: "15分", desc: "世界観セットアップ" },
    { label: "メイン体験", duration: "90分", desc: "五皿、五つの変容" },
    { label: "アフター", duration: "20分", desc: "交流・EC登録・ふりかえり" },
  ],
};

export default function ProgramSpringMiuraPage() {
  const { lang } = useLang();
  const [activeMonth, setActiveMonth] = useState(upcoming.months[0]);
  const sessions = getSessionsByMonth(activeMonth);
  const isComingSoon = (upcoming.comingSoonMonths as string[] | undefined)?.includes(activeMonth) ?? false;

  return (
    <div className="bg-[#F5F1E8] min-h-screen">

      {/* Back link */}
      <div className="container-max pt-8 pb-0">
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-700 transition-colors tracking-wide uppercase">
          <ArrowLeft size={12} />
          {lang === "en" ? "← Home" : "← ホーム"}
        </Link>
      </div>

      {/* Hero visual */}
      <div className="relative h-80 sm:h-96 bg-[radial-gradient(ellipse_at_bottom,_#1a2e1a_0%,_#0a0a0a_100%)] flex flex-col items-center justify-center overflow-hidden mt-6">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, #B8956A 40px, #B8956A 41px)" }} />
        <div className="relative z-10 text-center px-8">
          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-4">
            {lang === "en" ? "Tonight's Program" : "今夜の演目"}
          </p>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white italic mb-3">
            {exp.title[lang]}
          </h1>
          <p className="text-[#B8956A]/80 text-sm tracking-wider">
            {lang === "en" ? "¥15,000 · 15 guests · 2 hours · Miura Peninsula" : "¥15,000 · 15名 · 2時間 · 三浦半島"}
          </p>
        </div>
      </div>

      <div className="container-max max-w-3xl py-16">

        {/* Meta bar */}
        <div className="bg-white border border-[#D4C4A8] p-6 mb-12 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#B8956A]" />
              <span>{exp.duration[lang]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-[#B8956A]" />
              <span>{exp.capacity[lang]}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-playfair text-3xl font-bold text-gray-900">{exp.price.en.split(" ")[0]}</div>
            <div className="text-xs text-gray-400">{lang === "jp" ? "税込 / 1名" : "per person, tax incl."}</div>
          </div>
        </div>

        {/* Evening timeline */}
        <div className="mb-14">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            {lang === "en" ? "The Evening" : "夜の流れ"}
          </p>
          <div className="flex flex-col sm:flex-row gap-px bg-gray-200">
            {timeline[lang].map((t, i) => (
              <div key={i} className="flex-1 bg-[#F5F1E8] p-6 text-center">
                <p className="font-playfair text-lg font-bold text-gray-900 mb-1">{t.label}</p>
                <p className="text-[#B8956A] text-sm font-semibold mb-2">{t.duration}</p>
                <p className="text-gray-500 text-xs">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Five courses */}
        <div className="mb-14">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
            {lang === "en" ? "Five Courses · Five Transformations" : "五皿 · 五つの変容"}
          </p>
          <div className="space-y-px bg-gray-200">
            {courses[lang].map((course, i) => (
              <div key={i} className="bg-white p-7 flex gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#0A0A0A] flex items-center justify-center text-[#B8956A] text-xs font-bold tracking-wide">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div>
                  <p className="text-[#B8956A] text-xs tracking-[0.2em] uppercase mb-1">{course.act}</p>
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-1">{course.title}</h3>
                  <p className="text-sm font-semibold text-gray-500 mb-3">{course.dish}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{course.story}</p>
                  <p className="text-xs text-gray-400 italic">{course.producer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="bg-[#0A0A0A] p-8 mb-10">
          <p className="text-xs font-semibold text-[#B8956A] uppercase tracking-widest mb-6">
            {lang === "en" ? "Your team" : "担当スタッフ"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { code: "ST", bg: "bg-white/10", role: exp.team.storyteller.role[lang], desc: exp.team.storyteller.description[lang] },
              { code: "KT", bg: "bg-[#3A1F1F]", role: exp.team.kitchen.role[lang], desc: exp.team.kitchen.description[lang] },
            ].map((m) => (
              <div key={m.code} className="flex items-center gap-4">
                <div className={`w-12 h-12 ${m.bg} flex items-center justify-center text-white text-xs font-bold tracking-widest shrink-0`}>{m.code}</div>
                <div>
                  <p className="text-white font-semibold">{m.role}</p>
                  <p className="text-white/40 text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Allergen note */}
        <div className="flex items-start gap-2 mb-12 text-xs text-gray-400 bg-white border border-[#D4C4A8] p-4">
          <AlertCircle size={12} className="mt-0.5 shrink-0" />
          <span>{exp.allergenNote[lang]}</span>
        </div>

        {/* Reserve CTA */}
        <div className="text-center mb-20">
          <a href={exp.ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-theater">
            {exp.cta[lang]}
            <span className="text-[#B8956A]">→</span>
          </a>
        </div>

        {/* Upcoming Sessions — #sessions anchor */}
        <div id="sessions" className="scroll-mt-20">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            {lang === "en" ? "Upcoming Sessions" : "次の開催予定"}
          </p>

          {/* Month tabs */}
          <div className="flex gap-2 mb-8 border-b border-gray-200">
            {upcoming.months.map((month) => (
              <button
                key={month}
                onClick={() => setActiveMonth(month)}
                className={`pb-3 px-4 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                  activeMonth === month ? "border-[#B8956A] text-[#B8956A]" : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {month}
              </button>
            ))}
          </div>

          {isComingSoon ? (
            <div className="py-12 text-center bg-white border border-[#D4C4A8]">
              <div className="w-12 h-px bg-[#B8956A]/60 mx-auto mb-6" />
              <p className="font-playfair text-xl font-bold text-gray-700 mb-2">
                {lang === "en" ? "Coming Soon" : "近日公開"}
              </p>
              <p className="text-gray-400 text-sm">
                {lang === "en"
                  ? "Sessions will be announced shortly. Subscribe to get priority access."
                  : "近日発表予定です。下部でメール登録すると先行予約のご案内をお送りします。"}
              </p>
            </div>
          ) : sessions.length === 0 ? (
            <p className="text-center text-gray-500 py-12">{lang === "en" ? "No sessions available." : "開催予定はありません。"}</p>
          ) : (
            <div className="space-y-3">
              {sessions.map((session) => {
                const almostFull = isAlmostFull(session);
                const seatsLabel = getSeatsLabel(session, lang);
                return (
                  <div key={session.id} className="bg-white border border-[#D4C4A8] p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <CalendarDays size={15} className="text-[#B8956A] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{session.date[lang]}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                          <Clock size={11} />{session.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-bold tabular-nums ${almostFull ? "text-red-600" : "text-gray-500"}`}>
                        {seatsLabel}
                      </span>
                      <a href={session.ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-theater text-xs py-2 px-4 whitespace-nowrap">
                        {session.cta[lang]}
                        <span className="text-[#B8956A]">→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
