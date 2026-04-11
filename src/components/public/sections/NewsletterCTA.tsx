"use client";

import { Mail } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

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
  const { lang } = useLang();
  const c = content[lang];

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="container-max max-w-2xl">
        <div className="text-center text-white">

          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-6">
            {lang === "en" ? "Stay close" : "つながりを持つ"}
          </p>

          <h2 className="font-playfair text-4xl sm:text-5xl font-bold mb-4">{c.title}</h2>
          <p className="text-xl mb-10 text-white/60">{c.subtitle}</p>

          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder={c.placeholder}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#B8956A] transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-theater flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Mail size={16} />
                {c.cta}
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-white/40 mb-4">{c.partnerLabel}</p>
              <button
                type="button"
                className="px-8 py-3 border border-white/30 text-white/70 text-sm tracking-widest uppercase hover:border-[#B8956A] hover:text-white transition-colors"
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
