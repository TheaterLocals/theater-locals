"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { getProductsContent } from "@/lib/content";

const products = getProductsContent();

const PRODUCT_EMOJIS: Record<string, string> = {
  "miura-wakame": "🌿",
  "misaki-tuna": "🐟",
  "hayama-beef": "🥩",
  "craft-sake": "🍶",
};

export default function ECPreview() {
  const [lang, setLang] = useState<"en" | "jp">("en");

  return (
    <section className="section-padding bg-stone-50">
      <div className="container-max">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-1">
              {products.title[lang]}
            </h2>
            <p className="text-gray-600">{products.subtitle[lang]}</p>
          </div>
          <div className="flex gap-2">
            {(["en", "jp"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  lang === l
                    ? "bg-amber-600 text-white"
                    : "bg-white text-gray-600 border border-gray-300 hover:border-amber-400"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Coming Soon banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-4 mb-10 flex items-start gap-3">
          <ShoppingBag size={20} className="text-amber-600 mt-0.5 shrink-0" />
          <p className="text-sm text-amber-800">
            {products.comingSoonNote[lang]}
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          {products.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm relative"
            >
              {/* Coming soon overlay */}
              <div className="absolute inset-0 bg-white/70 z-10 flex items-center justify-center">
                <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {products.comingSoonLabel[lang]}
                </span>
              </div>

              {/* Placeholder image */}
              <div className="h-36 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <span className="text-5xl">{PRODUCT_EMOJIS[product.id] ?? "🎁"}</span>
              </div>

              {/* Details */}
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1 leading-tight">
                  {product.name[lang]}
                </p>
                <p className="text-base font-bold text-amber-600">{product.price}</p>
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
            className="btn-primary opacity-40 cursor-not-allowed"
          >
            {products.cta[lang]}
          </button>
        </div>

      </div>
    </section>
  );
}
