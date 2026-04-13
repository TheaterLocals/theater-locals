"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LangContext";
import { getUpcomingContent } from "@/lib/content";

const upcoming = getUpcomingContent();

export default function NextSessionTeaser() {
  const { lang } = useLang();

  // Always use the first session as "next"
  const next = upcoming.sessions[0];
  if (!next) return null;

  const seatsRemaining = next.seatsRemaining;
  const seatsTotal = next.seatsTotal;
  const isAlmostFull = seatsRemaining <= 3;

  return (
    <section className="bg-[#F5F1E8] border-t border-[#D4C4A8]">
      <div className="container-max py-6">

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          {/* Next session info */}
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase shrink-0">
              {lang === "en" ? "Next" : "次の開催"}
            </p>
            <p className="text-gray-900 text-sm font-semibold">
              {next.date[lang]} &nbsp;·&nbsp; {next.time}
            </p>
            <p className={`text-sm font-bold tabular-nums ${isAlmostFull ? "text-red-600" : "text-gray-500"}`}>
              {lang === "en"
                ? `${seatsRemaining} / ${seatsTotal} seats remaining`
                : `残り${seatsRemaining}席 / ${seatsTotal}席`}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={next.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-theater text-xs py-2 px-5"
            >
              {lang === "en" ? "Reserve this session" : "この回を予約する"}
              <span className="text-[#B8956A]">→</span>
            </a>
            <Link
              href="/programs/spring-miura#sessions"
              className="text-xs text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors"
            >
              {lang === "en" ? "View all sessions →" : "全日程を見る →"}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
