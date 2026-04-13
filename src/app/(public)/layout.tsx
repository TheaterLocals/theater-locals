import Navigation from "@/components/public/Navigation";
import Footer from "@/components/public/Footer";
import MobileStickyReserve from "@/components/public/MobileStickyReserve";
import type { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="pb-20 md:pb-0">{children}</main>
      <Footer />
      <MobileStickyReserve />
    </>
  );
}
