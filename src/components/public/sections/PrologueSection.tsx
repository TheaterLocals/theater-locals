"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LangContext";

const principles = [
  {
    id: "unity",
    code: "01",
    en: { title: "Unity", desc: "You are not a spectator. You have a role." },
    jp: { title: "一体感", desc: "観客じゃない。あなたが主役。" },
  },
  {
    id: "physicality",
    code: "02",
    en: { title: "Physicality", desc: "Your hands, your tongue. Memory lives in the body." },
    jp: { title: "身体性", desc: "手と舌で覚える。記憶は身体に宿る。" },
  },
  {
    id: "surprise",
    code: "03",
    en: { title: "Surprise", desc: "Each course opens something you did not expect." },
    jp: { title: "サプライズ", desc: "それぞれの皿が、予期しない扉を開く。" },
  },
];

export default function PrologueSection() {
  const { lang } = useLang();

  return (
    <section className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="container-max max-w-4xl">

        {/* Eyebrow */}
        <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-8 text-center">
          {lang === "en" ? "What this is" : "これは何か"}
        </p>

        {/* Brand declaration */}
        <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-center">
          {lang === "en" ? (
            <>Not a food tour.<br /><span className="italic font-normal text-white/70">A live window.</span></>
          ) : (
            <>食事ツアーではない。<br /><span className="font-noto-serif italic font-normal text-white/70">生きた窓だ。</span></>
          )}
        </h2>

        {/* Thin gold rule */}
        <div className="w-12 h-px bg-[#B8956A]/60 mx-auto mb-10" />

        {/* Concrete description — the critical addition */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          {lang === "en" ? (
            <>
              <p className="text-white/70 text-lg leading-relaxed mb-5">
                A 90-minute immersive dinner for 15 guests on the Miura Peninsula,
                47 minutes from Shinagawa.
              </p>
              <p className="text-white/50 text-base leading-relaxed">
                You don&apos;t just watch — you grate wasabi with your own hands,
                torch-sear tuna over open flame, and taste the difference between
                three cuts of the same fish.
                Five courses. Each one a live story about the land, the sea,
                and the people who work them.
              </p>
            </>
          ) : (
            <>
              <p className="text-white/70 text-lg leading-relaxed mb-5">
                品川から47分、三浦半島で開催する15名限定・90分の没入型夕食体験。
              </p>
              <p className="text-white/50 text-base leading-relaxed">
                見るだけじゃない—自分の手でわさびをすりおろし、炎でマグロを炙り、
                同じ魚の3種の違いを舌で確かめる。
                五皿、それぞれが土地・海・そこで働く人々の生きた物語。
              </p>
            </>
          )}
        </div>

        {/* 3 Mini principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
          {principles.map((p) => {
            const info = lang === "jp" ? p.jp : p.en;
            return (
              <Link
                key={p.id}
                href={`/about#${p.id}`}
                className="bg-[#0A0A0A] px-8 py-7 group hover:bg-white/[0.03] transition-colors"
              >
                <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-3">{p.code}</p>
                <p className="text-white font-playfair text-lg font-bold mb-2 group-hover:text-white/80 transition-colors">
                  {info.title}
                </p>
                <p className="text-white/35 text-xs leading-relaxed">{info.desc}</p>
              </Link>
            );
          })}
        </div>

        <p className="text-center mt-8">
          <Link href="/about" className="text-[#B8956A] text-xs tracking-[0.2em] uppercase hover:text-[#D4A574] transition-colors">
            {lang === "en" ? "Read the full story →" : "詳しく読む →"}
          </Link>
        </p>

      </div>
    </section>
  );
}
