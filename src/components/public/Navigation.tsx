"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

export default function Navigation() {
  const { data: session } = useSession();
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks =
    lang === "en"
      ? [
          { label: "Experiences", href: "#featured" },
          { label: "About", href: "#why" },
          { label: "Shop", href: "#shop" },
        ]
      : [
          { label: "体験を見る", href: "#featured" },
          { label: "Theater Localsとは", href: "#why" },
          { label: "ショップ", href: "#shop" },
        ];

  return (
    <nav className="bg-black/90 backdrop-blur-sm sticky top-0 z-50 border-b border-white/10">
      <div className="container-max flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          href="/"
          className="font-playfair text-lg font-bold text-white tracking-wide"
        >
          Theater Locals
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-white font-medium transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle — global master */}
          <div className="flex gap-0 border border-white/20 rounded-none p-0">
            {(["en", "jp"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-semibold transition-colors ${
                  lang === l
                    ? "bg-white text-black"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Auth / CTA */}
          {session ? (
            <div className="flex items-center gap-4">
              {session.user?.role === "ADMIN" && (
                <Link
                  href="/admin"
                  className="text-amber-400 text-sm font-semibold"
                >
                  Admin
                </Link>
              )}
              <button
                onClick={() => signOut()}
                className="text-sm text-white/50 hover:text-white"
              >
                {lang === "en" ? "Sign Out" : "ログアウト"}
              </button>
            </div>
          ) : (
            <a
              href="https://forms.gle/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white border border-white/40 px-4 py-1.5 hover:bg-white hover:text-black transition-colors tracking-widest uppercase"
            >
              {lang === "en" ? "Reserve" : "予約"}
            </a>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-white/70"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-white/70 hover:text-white py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            {(["en", "jp"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-semibold border ${
                  lang === l
                    ? "bg-white text-black border-white"
                    : "text-white/50 border-white/20 hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="https://forms.gle/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center text-sm text-white border border-white/40 px-4 py-2 hover:bg-white hover:text-black transition-colors tracking-widest uppercase mt-2"
          >
            {lang === "en" ? "Reserve a seat" : "席を予約する"}
          </a>
        </div>
      )}
    </nav>
  );
}
