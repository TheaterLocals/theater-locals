"use client";

import Link from "next/link";
import { ArrowLeft, Utensils, MapPin, ShoppingBag } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

// ─────────────────────────────────────────────
// Section ①: Hero copy
// ─────────────────────────────────────────────
const hero = {
  label: { en: "About", jp: "Theater Localsについて" },
  h1: {
    en: ["You came to Japan", "for the real thing.", "But the real thing", "doesn't have a website."],
    jp: ["「本物」は、", "検索しても出てこない。"],
  },
  body: {
    en: "The best food in Japan comes from people who don't advertise. Fishermen who wake at 3am. Farmers who've worked the same soil for three generations. You'll never find them on a travel app.\n\nThat's why we built Theater Locals.",
    jp: "日本で最も美味しい食材を作る人たちは、広告を出さない。SNSもやらない。午前3時に起きる漁師。三代続く農家。旅行アプリでは、彼らに出会えない。\n\nだから、Theater Localsを作りました。",
  },
};

// ─────────────────────────────────────────────
// Section ②: Solution — One evening. Three doors.
// ─────────────────────────────────────────────
const solution = {
  label: { en: "What we offer", jp: "提供するもの" },
  h2: { en: "One evening. Three doors.", jp: "一夜が、三つの扉を開ける。" },
  sub: {
    en: "Theater Locals is a one-stop gateway to Japan's local food culture. One immersive dinner opens three doors — tonight, tomorrow, and beyond.",
    jp: "Theater Localsは、日本の地方食文化へのワンストップ入口です。一回のイマーシブディナーが、三つの扉を開けます。",
  },
  doors: [
    {
      phase: { en: "TONIGHT", jp: "今夜" },
      icon: Utensils,
      title: { en: "An immersive dinner", jp: "没入型ディナー" },
      body: {
        en: "A 5-course participatory dinner for 15 guests. You don't watch someone cook — you grate the wasabi, torch the tuna, and taste the difference between three cuts of the same fish. The food transforms in front of you.",
        jp: "15名のための5コース参加型ディナー。誰かが料理するのを見るのではなく、あなたがわさびをおろし、マグロを炙り、同じ魚の三つの部位の違いを味わう。食材が目の前で変容する。",
      },
    },
    {
      phase: { en: "TOMORROW", jp: "明日" },
      icon: MapPin,
      title: { en: "A curated guide", jp: "キュレーションガイド" },
      body: {
        en: "After your evening, you receive a personal guide to the producers and places behind your meal. Where to go, how to get there, and who to meet — so you're not a stranger when you arrive.",
        jp: "夕食の後、その夜の食材の生産者と場所へのパーソナルガイドを受け取る。どこへ行くか、どうやって行くか、誰に会うか。到着したとき、あなたは見知らぬ人ではない。",
      },
    },
    {
      phase: { en: "FOREVER", jp: "いつまでも" },
      icon: ShoppingBag,
      title: { en: "An online shop", jp: "オンラインショップ" },
      body: {
        en: "Every ingredient from your evening — available to order from the producers you met. Delivered to your door, anywhere in the world. No middlemen. No markup on their stories.",
        jp: "その夜のすべての食材を、出会った生産者から注文できる。世界中どこへでもお届け。仲介なし。彼らのストーリーに上乗せなし。",
      },
    },
  ],
};

// ─────────────────────────────────────────────
// Section ③: How Tonight Works
// ─────────────────────────────────────────────
const timeline = {
  label: { en: "The experience", jp: "体験の流れ" },
  h2: {
    en: "What happens at a Theater Locals evening",
    jp: "Theater Localsの一夜で起きること",
  },
  steps: [
    {
      time: "18:00",
      title: { en: "Arrive", jp: "到着" },
      body: {
        en: "Step into a venue on the Miura Peninsula. 15 guests. One long table. No menus.",
        jp: "三浦半島の会場へ。15名。一本の長テーブル。メニューはない。",
      },
    },
    {
      time: "18:15",
      title: { en: "Pre-show", jp: "プレショー" },
      body: {
        en: "Your storyteller introduces the land, the sea, and the people who grew tonight's food.",
        jp: "ストーリーテラーが今夜の食材を育てた土地、海、人々を紹介する。",
      },
    },
    {
      time: "18:30",
      title: { en: "Five courses", jp: "五皿" },
      body: {
        en: "Each course is a live demonstration and a moment of participation. You grate the wasabi. You torch the tuna. You taste three cuts of the same fish and learn why they're different. The food is not brought to you — it transforms in front of you.",
        jp: "各皿はライブデモンストレーションと参加の瞬間。あなたがわさびをおろす。あなたがマグロを炙る。同じ魚の三つの部位を味わい、なぜ違うのかを学ぶ。食材はあなたのもとへ運ばれるのではなく、目の前で変容する。",
      },
    },
    {
      time: "20:00",
      title: { en: "Connect", jp: "繋がる" },
      body: {
        en: "Receive your personal guide to tomorrow's adventure — where to go, who to visit, how to get there. Register for the shop to order ingredients later.",
        jp: "明日の冒険へのパーソナルガイドを受け取る。どこへ行くか、誰を訪ねるか、どうやって行くか。後で食材を注文するためのショップ登録も。",
      },
    },
    {
      time: "20:15",
      title: { en: "Leave", jp: "退場" },
      body: {
        en: "You leave with a full stomach, a plan for tomorrow, and a connection to a region you didn't know existed.",
        jp: "満腹で、明日の計画を持ち、知らなかった地域との繋がりを胸に帰る。",
      },
    },
  ],
};

// ─────────────────────────────────────────────
// Section ④: Tomorrow
// ─────────────────────────────────────────────
const tomorrow = {
  label: { en: "Tomorrow", jp: "翌日" },
  h2: { en: "The next morning, you have a plan.", jp: "翌朝、あなたには計画がある。" },
  lede: {
    en: "Most food experiences end when you leave the table. Ours is designed to begin there.",
    jp: "ほとんどの食体験は、席を立ったときに終わる。私たちのは、そこから始まるように設計されている。",
  },
  sub: {
    en: "After your evening, you receive a personalized guide:",
    jp: "夕食の後、パーソナライズされたガイドを受け取る：",
  },
  bullets: [
    {
      head: { en: "Where to go", jp: "どこへ行くか" },
      body: {
        en: "The specific ports, farms, and workshops behind each course.",
        jp: "各皿の背景にある港、農場、工房の具体的な場所。",
      },
    },
    {
      head: { en: "How to get there", jp: "どうやって行くか" },
      body: {
        en: "Trains, buses, walking routes — all in English and Japanese.",
        jp: "電車、バス、徒歩ルート——すべて英語と日本語で。",
      },
    },
    {
      head: { en: "Who to meet", jp: "誰に会うか" },
      body: {
        en: "Introductions to the producers, so you're not a stranger when you arrive.",
        jp: "生産者への紹介状。到着したとき、あなたは見知らぬ人ではない。",
      },
    },
  ],
  coda: {
    en: "Yesterday you tasted their food. Today you stand in their kitchen.",
    jp: "昨日、あなたは彼らの食材を味わった。今日、あなたは彼らの台所に立つ。",
  },
};

// ─────────────────────────────────────────────
// Section ⑤: Forever
// ─────────────────────────────────────────────
const forever = {
  label: { en: "Back home", jp: "帰国後" },
  h2: { en: "Back home, the connection stays.", jp: "帰国しても、繋がりは続く。" },
  body: {
    en: "Three weeks after your trip, you're cooking dinner and you remember the wakame that came back to life in ten seconds.\n\nYou open the Theater Locals shop. It's there. The same wakame, from the same harvester, shipped to your door.\n\nEvery ingredient from your evening — available to order from the producers you met. No middlemen. No markup on their stories.",
    jp: "旅行から三週間後、夕食を作っていてふと思い出す。10秒で蘇ったあのわかめを。\n\nTheater Localsのショップを開く。ある。同じわかめが、同じ漁師から、あなたの家に届く。\n\nその夜のすべての食材を、出会った生産者から注文できる。仲介なし。彼らのストーリーに上乗せなし。",
  },
  badge: {
    en: "Shop opens 2026. Join the waitlist to be first.",
    jp: "ショップは2026年オープン予定。先行登録受付中。",
  },
  cta: { en: "Browse the shop →", jp: "ショップを見る →" },
};

// ─────────────────────────────────────────────
// Section ⑥: Built Different
// ─────────────────────────────────────────────
const facts = {
  label: { en: "What makes this different", jp: "違いを生むもの" },
  h2: { en: "Built different.", jp: "根本から違う。" },
  items: [
    {
      en: "Every ingredient is sourced directly from producers.\nNo wholesalers. No importers.",
      jp: "すべての食材は生産者から直接調達。\n卸業者なし。輸入業者なし。",
    },
    {
      en: "Every evening is limited to 15 guests.\nNot 50. Not 30. Fifteen.",
      jp: "一夜の定員は15名。\n50名でも30名でもない。15名。",
    },
    {
      en: "Every program is bilingual — Japanese and English —\nnarrated live, not subtitled.",
      jp: "すべてのプログラムはバイリンガル——日本語と英語——\n字幕ではなく、ライブナレーション。",
    },
    {
      en: "Every course is participatory.\nYou don't watch someone cook. You cook.",
      jp: "すべての皿は参加型。\n誰かが料理するのを見るのではない。あなたが料理する。",
    },
    {
      en: "Every guest receives a next-day guide\nwith real logistics, not tourist brochures.",
      jp: "すべてのゲストが翌日のガイドを受け取る。\n観光パンフレットではなく、実際の行き方付きで。",
    },
  ],
};

// ─────────────────────────────────────────────
// Section ⑦: CTA
// ─────────────────────────────────────────────
const cta = {
  label: { en: "Current program", jp: "現在のプログラム" },
  h2: { en: "See what's playing now.", jp: "今、上演中のものを見る。" },
  sub: {
    en: "Each season, we open a new door to a different region of Japan. Here's the current program.",
    jp: "毎シーズン、日本の異なる地域への新しい扉を開けます。現在のプログラムはこちら。",
  },
  btn: { en: "Spring 2026: Miura Peninsula →", jp: "Spring 2026：三浦半島 →" },
  note: { en: "15 seats per session. Next: May 24, 2026.", jp: "1回15席。次回：2026年5月24日。" },
};

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function AboutPage() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen">

      {/* ① HERO ──────────────────────────────── */}
      <section className="bg-[#0A0A0A] pt-8 pb-24 sm:pb-32">
        <div className="container-max max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-white/30 hover:text-white/60 transition-colors tracking-wide uppercase mb-16"
          >
            <ArrowLeft size={12} />
            {lang === "en" ? "← Home" : "← ホーム"}
          </Link>

          <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-10">
            {hero.label[lang]}
          </p>

          <h1 className="font-playfair font-bold text-white leading-snug mb-10">
            {lang === "en" ? (
              <>
                <span className="block text-4xl sm:text-5xl lg:text-6xl">{hero.h1.en[0]}</span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl">{hero.h1.en[1]}</span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-white/40 mt-4">{hero.h1.en[2]}</span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-white/40">{hero.h1.en[3]}</span>
              </>
            ) : (
              <>
                <span className="block text-4xl sm:text-5xl lg:text-6xl">{hero.h1.jp[0]}</span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl">{hero.h1.jp[1]}</span>
              </>
            )}
          </h1>

          <div className="w-10 h-px bg-[#B8956A]/50 mb-10" />

          <div className="max-w-xl">
            {hero.body[lang].split("\n\n").map((para, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed ${i === 0 ? "text-white/60 mb-6" : "text-white/90 font-semibold"}`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ② SOLUTION ──────────────────────────── */}
      <section className="section-padding bg-[#F5F1E8]">
        <div className="container-max">
          <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-8">
            {solution.label[lang]}
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {solution.h2[lang]}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mb-14">
            {solution.sub[lang]}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {solution.doors.map((door) => {
              const Icon = door.icon;
              return (
                <div key={door.phase.en} className="bg-white p-8 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-[#B8956A]/30 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#B8956A]" />
                    </div>
                    <span className="text-[#B8956A] text-xs font-bold tracking-[0.3em] uppercase">
                      {door.phase[lang]}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-gray-900">
                    {door.title[lang]}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {door.body[lang]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ③ HOW TONIGHT WORKS ─────────────────── */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-max max-w-2xl">
          <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-8">
            {timeline.label[lang]}
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-14">
            {timeline.h2[lang]}
          </h2>

          <div className="space-y-10">
            {timeline.steps.map((step, i) => (
              <div key={i} className="flex gap-6 sm:gap-10">
                {/* time + connector */}
                <div className="flex flex-col items-center shrink-0">
                  <span className="font-mono text-[#B8956A] text-sm font-bold tracking-widest">
                    {step.time}
                  </span>
                  {i < timeline.steps.length - 1 && (
                    <div className="w-px flex-1 bg-white/10 mt-3" />
                  )}
                </div>
                {/* content */}
                <div className="pb-8">
                  <p className="text-white font-semibold text-base mb-2">{step.title[lang]}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{step.body[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ TOMORROW ──────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-8">
            {tomorrow.label[lang]}
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {tomorrow.h2[lang]}
          </h2>

          {/* Lede — the strongest line */}
          <p className="font-playfair text-xl sm:text-2xl text-gray-700 italic leading-relaxed mb-10 border-l-2 border-[#B8956A] pl-6">
            {tomorrow.lede[lang]}
          </p>

          <p className="text-gray-600 text-base mb-6">{tomorrow.sub[lang]}</p>

          <div className="space-y-6 mb-10">
            {tomorrow.bullets.map((b, i) => (
              <div key={i} className="flex gap-5">
                <span className="text-[#B8956A] font-bold text-lg shrink-0 mt-0.5">·</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{b.head[lang]}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.body[lang]}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#0A0A0A] px-8 py-6">
            <p className="font-playfair text-lg sm:text-xl text-white leading-relaxed">
              {tomorrow.coda[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* ⑤ FOREVER ───────────────────────────── */}
      <section className="section-padding bg-[#F5F1E8]">
        <div className="container-max max-w-3xl">
          <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-8">
            {forever.label[lang]}
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
            {forever.h2[lang]}
          </h2>

          <div className="space-y-6 mb-10">
            {forever.body[lang].split("\n\n").map((para, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed ${
                  i === 0
                    ? "text-gray-600"
                    : i === 1
                    ? "text-gray-900 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Coming Soon badge */}
          <div className="border border-[#B8956A]/30 bg-white px-6 py-4 mb-8 inline-block">
            <p className="text-sm text-gray-600">{forever.badge[lang]}</p>
          </div>

          <div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#B8956A] hover:text-[#D4A574] transition-colors tracking-wide"
            >
              {forever.cta[lang]}
            </Link>
          </div>
        </div>
      </section>

      {/* ⑥ BUILT DIFFERENT ───────────────────── */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-max max-w-3xl">
          <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-8">
            {facts.label[lang]}
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-14">
            {facts.h2[lang]}
          </h2>

          <div className="space-y-0">
            {facts.items.map((item, i) => (
              <div
                key={i}
                className="border-t border-white/10 py-8 first:border-t-0"
              >
                <div className="flex gap-6 items-start">
                  <span className="text-[#B8956A]/40 font-mono text-xs shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-playfair text-xl sm:text-2xl text-white leading-snug whitespace-pre-line">
                    {item[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ CTA ───────────────────────────────── */}
      <section className="section-padding bg-[#F5F1E8]">
        <div className="container-max max-w-2xl text-center">
          <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-8">
            {cta.label[lang]}
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {cta.h2[lang]}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-10">
            {cta.sub[lang]}
          </p>

          <Link
            href="/programs/spring-miura"
            className="btn-theater inline-block mb-6"
          >
            {cta.btn[lang]}
          </Link>

          <p className="text-gray-400 text-xs tracking-wide">{cta.note[lang]}</p>
        </div>
      </section>

    </div>
  );
}
