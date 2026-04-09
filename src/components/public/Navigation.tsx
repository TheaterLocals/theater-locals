"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const { data: session } = useSession();
  const [lang, setLang] = useState<"en" | "jp">("en");
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
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-amber-600 tracking-tight">
          Theater Locals
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <div className="flex gap-1 border border-gray-200 rounded-full p-0.5">
            {(["en", "jp"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  lang === l
                    ? "bg-amber-600 text-white"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Auth */}
          {session ? (
            <div className="flex items-center gap-4">
              {session.user?.role === "ADMIN" && (
                <Link href="/admin" className="text-amber-600 text-sm font-semibold">
                  Admin
                </Link>
              )}
              <button
                onClick={() => signOut()}
                className="text-sm text-gray-500 hover:text-gray-800"
              >
                {lang === "en" ? "Sign Out" : "ログアウト"}
              </button>
            </div>
          ) : (
            <a
              href="https://forms.gle/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2"
            >
              {lang === "en" ? "Reserve a seat" : "席を予約する"}
            </a>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            {(["en", "jp"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  lang === l ? "bg-amber-600 text-white" : "bg-gray-100 text-gray-600"
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
            className="block w-full text-center btn-primary text-sm mt-2"
          >
            {lang === "en" ? "Reserve a seat" : "席を予約する"}
          </a>
        </div>
      )}
    </nav>
  );
}
