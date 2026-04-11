"use client";

import { ShoppingBag } from "lucide-react";
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

export default function ECPreview() {
  const { lang } = useLang();

  return (
    <section className="section-padding bg-[#F5F1E8]">
      <div className="container-max">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-3">
            {lang === "en" ? "The shop" : "ショップ"}
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            {products.title[lang]}
          </h2>
          <p className="text-gray-500">{products.subtitle[lang]}</p>
        </div>

        {/* Coming Soon banner */}
        <div className="border border-[#B8956A]/30 bg-white px-6 py-4 mb-10 flex items-start gap-3">
          <ShoppingBag size={18} className="text-[#B8956A] mt-0.5 shrink-0" />
          <p className="text-sm text-gray-600">
            {products.comingSoonNote[lang]}
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 mb-8">
          {products.products.map((product) => (
            <div
              key={product.id}
              className="bg-[#F5F1E8] relative overflow-hidden"
            >
              {/* Coming soon overlay */}
              <div className="absolute inset-0 bg-[#F5F1E8]/70 z-10 flex items-center justify-center">
                <span className="bg-[#0A0A0A] text-white text-xs font-bold px-3 py-1 tracking-widest uppercase">
                  {products.comingSoonLabel[lang]}
                </span>
              </div>

              {/* Atmospheric image placeholder */}
              <div className={`h-40 ${PRODUCT_BG[product.id] ?? "bg-[#0A0A0A]"} flex items-center justify-center`}>
                <span className="text-white/20 text-2xl font-bold tracking-widest">
                  {PRODUCT_CODE[product.id] ?? "—"}
                </span>
              </div>

              {/* Details */}
              <div className="p-4 bg-white">
                <p className="text-sm font-semibold text-gray-900 mb-1 leading-tight">
                  {product.name[lang]}
                </p>
                <p className="text-base font-bold text-[#B8956A]">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Price note */}
        <p className="text-xs text-gray-400 text-center mb-6">
          {products.priceNote[lang]}
        </p>

        {/* CTA (disabled) */}
        <div className="text-center">
          <button
            disabled
            className="btn-theater opacity-40 cursor-not-allowed"
          >
            {products.cta[lang]}
          </button>
        </div>

      </div>
    </section>
  );
}
