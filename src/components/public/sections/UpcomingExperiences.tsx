"use client";

import { useState } from "react";
import { CalendarDays, Clock, Users } from "lucide-react";
import { getUpcomingContent, getSessionsByMonth, getSeatsLabel, isAlmostFull } from "@/lib/content";

const upcoming = getUpcomingContent();

export default function UpcomingExperiences() {
  const [lang, setLang] = useState<"en" | "jp">("en");
  const [activeMonth, setActiveMonth] = useState(upcoming.months[0]);

  const sessions = getSessionsByMonth(activeMonth);
  const isComingSoon = (upcoming.comingSoonMonths as string[] | undefined)?.includes(activeMonth) ?? false;

  return (
    <section className="section-padding bg-stone-50">
      <div className="container-max">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            {upcoming.title[lang]}
          </h2>
          {/* Language toggle */}
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

        {/* Month tabs */}
        <div className="flex gap-2 mb-8 border-b border-gray-200">
          {upcoming.months.map((month) => (
            <button
              key={month}
              onClick={() => setActiveMonth(month)}
              className={`pb-3 px-4 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                activeMonth === month
                  ? "border-amber-600 text-amber-600"
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
            <div className="text-5xl mb-4">🗓️</div>
            <p className="text-2xl font-bold text-gray-700 mb-2">
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
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  {/* Date & time */}
                  <div className="flex items-start gap-2 mb-3">
                    <CalendarDays size={15} className="text-amber-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {session.date[lang]}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <Clock size={12} />
                        {session.time}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug">
                    {session.title[lang]}
                  </h3>

                  {/* Price + seats */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-amber-600">{session.price}</span>
                    <span className={`text-xs font-medium flex items-center gap-1 ${almostFull ? "text-red-600" : "text-gray-500"}`}>
                      <Users size={13} />
                      {seatsLabel}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-gray-200 rounded-full mb-5">
                    <div
                      className={`h-1.5 rounded-full transition-all ${almostFull ? "bg-red-500" : "bg-amber-500"}`}
                      style={{ width: `${fillPct}%` }}
                    />
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    {almostFull && (
                      <p className="text-xs text-red-600 font-semibold mb-2 text-center">
                        {lang === "en" ? "⚡ Almost full!" : "⚡ 残席わずか！"}
                      </p>
                    )}
                    <a
                      href={session.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center btn-primary text-sm"
                    >
                      {session.cta[lang]}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
