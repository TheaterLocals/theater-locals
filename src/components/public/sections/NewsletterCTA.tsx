"use client";

import { Mail } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const content = {
  en: {
    title: "Join Theater Locals",
    subtitle: "Priority booking, insider stories, and seasonal producer updates — delivered to your inbox.",
    placeholder: "Your email address",
    cta: "Subscribe",
  },
  jp: {
    title: "Theater Localsに参加する",
    subtitle: "新プログラムの先行予約、業界ニュース、文化コラムが届きます",
    placeholder: "メールアドレス",
    cta: "今すぐ登録",
  },
};

export default function NewsletterCTA() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="container-max max-w-xl">
        <div className="text-center text-white">

          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-6">
            {lang === "en" ? "Stay close" : "つながりを持つ"}
          </p>

          <h2 className="font-playfair text-4xl sm:text-5xl font-bold mb-4">{c.title}</h2>
          <p className="text-xl mb-10 text-white/50">{c.subtitle}</p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder={c.placeholder}
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#B8956A] transition-colors"
              required
            />
            <button
              type="submit"
              className="btn-theater flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Mail size={16} />
              {c.cta}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
