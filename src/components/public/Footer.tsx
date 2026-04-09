"use client";

import { useState } from "react";
import { getFooterContent } from "@/lib/content";

const footer = getFooterContent();

const SocialIcon = ({ name }: { name: string }) => {
  if (name === "Instagram") {
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
};

export default function Footer() {
  const [lang, setLang] = useState<"en" | "jp">("en");
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">

        {/* Top row: brand + language toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 pb-8 border-b border-gray-800">
          <div>
            <p className="text-xl font-bold text-amber-500 mb-1">Theater Locals</p>
            <p className="text-sm text-gray-400">
              {lang === "en"
                ? "A live window into local food culture."
                : "地域の食文化への、生きた窓。"}
            </p>
          </div>
          <div className="flex gap-1 border border-gray-700 rounded-full p-0.5 self-start sm:self-auto">
            {(["en", "jp"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  lang === l ? "bg-amber-600 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Main columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.id}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {col.heading[lang]}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label[lang]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {footer.newsletter.label[lang]}
            </h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footer.newsletter.placeholder[lang]}
                className="flex-1 min-w-0 bg-gray-800 border border-gray-700 text-white text-sm px-3 py-2 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-3 py-2 rounded-lg transition-colors shrink-0"
              >
                {footer.newsletter.cta[lang]}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">{footer.copyright[lang]}</p>

          {/* Social links */}
          <div className="flex gap-4">
            {footer.social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SocialIcon name={s.name} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
