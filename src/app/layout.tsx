import type { Metadata } from "next";
import "@/styles/globals.css";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Theater Locals - 地方文化の擬似体験",
  description: "日本文化をショーのように体験する。三浦半島での本物の旅へ。",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <SessionProvider>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
