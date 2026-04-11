"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProductsContent } from "@/lib/content";
import { useLang } from "@/contexts/LangContext";

const products = getProductsContent();

const PRODUCT_BG: Record<string, string> = {
  "miura-wakame": "bg-[radial-gradient(ellipse_at_center,_#0d2e1a_0%,_#000_100%)]",
  "misaki-tuna": "bg-[radial-gradient(ellipse_at_center,_#2a0a0a_0%,_#000_100%)]",
  "hayama-beef": "bg-[radial-gradient(ellipse_at_center,_#2a1800_0%,_#000_100%)]",
  "craft-sake": "bg-[radial-gradient(ellipse_at_center,_#1a1a2a_0%,_#000_100%)]",
};

const PRODUCT_CODE: Record<string, string> = {
  "miura-wakame": "WK",
  "misaki-tuna": "TN",
  "hayama-beef": "BF",
  "craft-sake": "SK",
};

export default function ShopPage() {
  const { lang } = useLang();

  return (
    <div className="bg-[#F5F1E8] min-h-screen">

      <div className="container-max pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-700 transition-colors tracking-wide uppercase">
          <ArrowLeft size={12} />
          {lang === "en" ? "Back to top" : "トップに戻る"}
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
            {lang === "en" ? "Shop opening 2026." : "2026年オープン予定。"}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">

          {/* Coming Soon banner */}
          <div className="border border-[#B8956A]/30 bg-white px-6 py-4 mb-10 flex items-start gap-3">
            <p className="text-sm text-gray-600">
              {products.comingSoonNote[lang]}
            </p>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 mb-8">
            {products.products.map((product) => (
              <div key={product.id} className="bg-[#F5F1E8] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#F5F1E8]/70 z-10 flex items-center justify-center">
                  <span className="bg-[#0A0A0A] text-white text-xs font-bold px-3 py-1 tracking-widest uppercase">
                    {products.comingSoonLabel[lang]}
                  </span>
                </div>
                <div className={`h-40 ${PRODUCT_BG[product.id] ?? "bg-[#0A0A0A]"} flex items-center justify-center`}>
                  <span className="text-white/20 text-2xl font-bold tracking-widest">
                    {PRODUCT_CODE[product.id] ?? "—"}
                  </span>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm font-semibold text-gray-900 mb-1 leading-tight">{product.name[lang]}</p>
                  <p className="text-base font-bold text-[#B8956A]">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 text-center mb-8">{products.priceNote[lang]}</p>

          <div className="text-center">
            <button disabled className="btn-theater opacity-40 cursor-not-allowed">
              {products.cta[lang]}
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
