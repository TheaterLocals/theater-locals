"use client";

import Link from "next/link";
import { CalendarDays, Clock, Users, ArrowLeft } from "lucide-react";
import { getUpcomingContent, getSessionsByMonth, getSeatsLabel, isAlmostFull } from "@/lib/content";
import { useLang } from "@/contexts/LangContext";
import { useState } from "react";

const upcoming = getUpcomingContent();

export default function SessionsPage() {
  const { lang } = useLang();
  const [activeMonth, setActiveMonth] = useState(upcoming.months[0]);
  const sessions = getSessionsByMonth(activeMonth);
  const isComingSoon = (upcoming.comingSoonMonths as string[] | undefined)?.includes(activeMonth) ?? false;

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
            {lang === "en" ? "Sessions" : "開催日程"}
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white leading-tight">
            {lang === "en" ? "Upcoming Sessions" : "次の開催予定"}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">

          {/* Month tabs */}
          <div className="flex gap-2 mb-8 border-b border-gray-200">
            {upcoming.months.map((month) => (
              <button
                key={month}
                onClick={() => setActiveMonth(month)}
                className={`pb-3 px-4 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                  activeMonth === month
                    ? "border-[#B8956A] text-[#B8956A]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {month}
              </button>
            ))}
          </div>

          {/* Session cards */}
          {isComingSoon ? (
            <div className="py-16 text-center">
              <div className="w-12 h-px bg-[#B8956A]/60 mx-auto mb-8" />
              <p className="font-playfair text-2xl font-bold text-gray-700 mb-2">
                {lang === "en" ? "Coming Soon" : "近日公開"}
              </p>
              <p className="text-gray-500">
                {lang === "en"
                  ? "Sessions for this month will be announced shortly. Subscribe below to get priority access."
                  : "この月の開催は近日発表予定です。下部でメール登録すると先行予約のご案内をお送りします。"}
              </p>
            </div>
          ) : sessions.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              {lang === "en" ? "No sessions available for this month." : "この月の開催予定はありません。"}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sessions.map((session) => {
                const almostFull = isAlmostFull(session);
                const seatsLabel = getSeatsLabel(session, lang);
                const fillPct = Math.round(
                  ((session.seatsTotal - session.seatsRemaining) / session.seatsTotal) * 100
                );

                return (
                  <div
                    key={session.id}
                    className="bg-white border border-[#D4C4A8] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                  >
                    <div className="flex items-start gap-2 mb-3">
                      <CalendarDays size={15} className="text-[#B8956A] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{session.date[lang]}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                          <Clock size={12} />
                          {session.time}
                        </p>
                      </div>
                    </div>

                    <h3 className="font-playfair text-lg font-bold text-gray-900 mb-4 leading-snug">
                      {session.title[lang]}
                    </h3>

                    <div className="flex items-center justify-between mb-3">
                      <span className="font-playfair text-xl font-bold text-gray-900">{session.price}</span>
                      <span className={`text-xs font-medium flex items-center gap-1 ${almostFull ? "text-red-600" : "text-gray-500"}`}>
                        <Users size={13} />
                        {seatsLabel}
                      </span>
                    </div>

                    <div className="w-full h-1 bg-gray-100 mb-5">
                      <div
                        className={`h-1 transition-all ${almostFull ? "bg-red-500" : "bg-[#B8956A]"}`}
                        style={{ width: `${fillPct}%` }}
                      />
                    </div>

                    <div className="mt-auto">
                      {almostFull && (
                        <p className="text-xs text-red-600 font-semibold mb-2 text-center">
                          {lang === "en" ? "Almost full!" : "残席わずか！"}
                        </p>
                      )}
                      <a
                        href={session.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center btn-theater text-sm justify-center"
                      >
                        {session.cta[lang]}
                        <span className="text-[#B8956A]">→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
