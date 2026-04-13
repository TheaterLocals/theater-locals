"use client";

import { useLang } from "@/contexts/LangContext";
import { getExperienceContent } from "@/lib/content";

const exp = getExperienceContent();

export default function MobileStickyReserve() {
  const { lang } = useLang();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A] border-t border-white/10 p-4">
      <a
        href={exp.ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center text-sm font-semibold text-white border border-white/40 px-4 py-3 hover:bg-white hover:text-black transition-colors tracking-widest uppercase"
      >
        {lang === "en" ? "Reserve a seat →" : "席を予約する →"}
      </a>
    </div>
  );
}
