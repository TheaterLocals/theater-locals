import type { Metadata } from "next";
import { Playfair_Display, Noto_Serif_JP } from "next/font/google";
import "@/styles/globals.css";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { LangProvider } from "@/contexts/LangContext";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "700", "900"],
  variable: "--font-noto-serif-jp",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Theater Locals — Taste local tonight. Live it tomorrow.",
  description:
    "A live window into local food culture. 47 minutes from Shinagawa.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${playfair.variable} ${notoSerifJP.variable}`}
    >
      <body>
        <LangProvider>
          <SessionProvider>
            {children}
            <Toaster />
          </SessionProvider>
        </LangProvider>
      </body>
    </html>
  );
}
