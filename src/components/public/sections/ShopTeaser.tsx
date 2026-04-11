"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LangContext";

export default function ShopTeaser() {
  const { lang } = useLang();

  return (
    <section className="section-padding bg-white border-t border-gray-100">
      <div className="container-max">

        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* Product visual pair */}
          <div className="flex gap-3 shrink-0">
            <div className="w-28 h-36 bg-[radial-gradient(ellipse_at_center,_#0d2e1a_0%,_#000_100%)] flex items-end justify-center pb-3">
              <span className="text-white/20 text-xs font-bold tracking-widest">WK</span>
            </div>
            <div className="w-28 h-36 bg-[radial-gradient(ellipse_at_center,_#2a0a0a_0%,_#000_100%)] flex items-end justify-center pb-3">
              <span className="text-white/20 text-xs font-bold tracking-widest">TN</span>
            </div>
          </div>

          {/* Text + CTA */}
          <div>
            <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-3">
              {lang === "en" ? "The shop" : "ショップ"}
            </p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {lang === "en" ? "Take tonight home." : "今夜を持ち帰る。"}
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              {lang === "en"
                ? "Shop opening 2026. Join the waitlist for early access."
                : "2026年オープン予定。先行案内を受け取る。"}
            </p>
            <div className="flex items-center gap-4">
              <Link href="/shop" className="btn-theater text-xs py-2 px-5">
                {lang === "en" ? "Join the waitlist →" : "先行登録する →"}
              </Link>
              <Link
                href="/shop"
                className="text-xs text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors"
              >
                {lang === "en" ? "See all products →" : "商品一覧を見る →"}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
