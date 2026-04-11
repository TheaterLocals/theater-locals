import HeroSection from "@/components/public/sections/HeroSection";
import PrologueSection from "@/components/public/sections/PrologueSection";
import FeaturedExperience from "@/components/public/sections/FeaturedExperience";
import SocialProofStrip from "@/components/public/sections/SocialProofStrip";
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

      {/* ③ Tonight's Program — teaser only, links to /programs/spring-miura */}
      <FeaturedExperience />

      {/* ④ Social Proof — producer credit roll */}
      <SocialProofStrip />

      {/* ⑤ Next Session — 1-line scarcity module */}
      <NextSessionTeaser />

      {/* ⑥ Shop — teaser, links to /shop */}
      <ShopTeaser />

      {/* ⑦ Newsletter — single action, visitor only */}
      <NewsletterCTA />
    </>
  );
}
