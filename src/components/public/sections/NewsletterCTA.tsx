"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

const content = {
  en: {
    title: "Join Theater Locals",
    subtitle:
      "Priority booking, insider stories, and seasonal producer updates — delivered to your inbox.",
    placeholder: "Your email address",
    cta: "Subscribe",
    partnerLabel: "Interested in joining as a chef or performer?",
    partnerCta: "Apply as Partner / Host",
  },
  jp: {
    title: "Theater Localsに参加する",
    subtitle: "新プログラムの先行予約、業界ニュース、文化コラムが届きます",
    placeholder: "メールアドレス",
    cta: "今すぐ登録",
    partnerLabel: "シェフ・パフォーマーとしての参画をお考えの方",
    partnerCta: "パートナー・ホスト申請",
  },
};

export default function NewsletterCTA() {
  const [lang, setLang] = useState<"en" | "jp">("en");
  const c = content[lang];

  return (
    <section className="section-padding bg-gradient-to-r from-amber-600 to-orange-600">
      <div className="container-max max-w-2xl">
        <div className="text-center text-white">
          {/* Lang toggle */}
          <div className="flex justify-center gap-2 mb-6">
            {(["en", "jp"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  lang === l
                    ? "bg-white text-amber-600"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <h2 className="text-4xl font-bold mb-4">{c.title}</h2>
          <p className="text-xl mb-8 text-amber-50">{c.subtitle}</p>

          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder={c.placeholder}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Mail size={20} />
                {c.cta}
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-amber-500">
              <p className="text-sm text-amber-50 mb-4">{c.partnerLabel}</p>
              <button
                type="button"
                className="px-8 py-2 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white"
              >
                {c.partnerCta}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
