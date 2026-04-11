import HeroSection from "@/components/public/sections/HeroSection";
import PrologueSection from "@/components/public/sections/PrologueSection";
import FeaturedExperience from "@/components/public/sections/FeaturedExperience";
import UpcomingExperiences from "@/components/public/sections/UpcomingExperiences";
import WhyTheaterLocals from "@/components/public/sections/WhyTheaterLocals";
import JourneyMap from "@/components/public/sections/JourneyMap";
// GuestTestimonials: プロトタイプ前のため非表示（景品表示法リスク回避）
import MiuraInfo from "@/components/public/sections/MiuraInfo";
import ECPreview from "@/components/public/sections/ECPreview";
// BlogPreview: コンテンツ未整備のため非表示（季節不一致・プレースホルダー対策）
import NewsletterCTA from "@/components/public/sections/NewsletterCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PrologueSection />
      <FeaturedExperience />
      <UpcomingExperiences />
      <WhyTheaterLocals />
      <JourneyMap />
      {/* <GuestTestimonials /> — プロトタイプ前のため非表示 */}
      <MiuraInfo />
      <ECPreview />
      {/* <BlogPreview /> — コンテンツ整備後に復活 */}
      <NewsletterCTA />
    </>
  );
}
