import HeroSection from "@/components/public/sections/HeroSection";
import PrologueSection from "@/components/public/sections/PrologueSection";
import ProgramAndProducers from "@/components/public/sections/ProgramAndProducers";
import PartnersSection from "@/components/public/sections/PartnersSection";
import BeyondThePlate from "@/components/public/sections/BeyondThePlate";
import NextSessionTeaser from "@/components/public/sections/NextSessionTeaser";
import ShopTeaser from "@/components/public/sections/ShopTeaser";
import NewsletterCTA from "@/components/public/sections/NewsletterCTA";

export default function HomePage() {
  return (
    <>
      {/* ① Hero — full-screen video, single CTA */}
      <HeroSection />

      {/* ② What this is — brand declaration + 3 mini principles */}
      <PrologueSection />

      {/* ③ Program + Producers — 4 highlights, price meta, producer 4-up, CTA */}
      <ProgramAndProducers />

      {/* ④ Partners — 皿の物語の続き（主情報） */}
      <PartnersSection />

      {/* ⑤ Beyond the Plate — もう一歩三浦を（サブ情報） */}
      <BeyondThePlate />

      {/* ⑥ Next Session — 1-line scarcity module */}
      <NextSessionTeaser />

      {/* ⑦ Shop — teaser, links to /shop */}
      <ShopTeaser />

      {/* ⑧ Newsletter — single action, visitor only */}
      <NewsletterCTA />
    </>
  );
}
