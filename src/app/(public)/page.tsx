import HeroSection from "@/components/public/sections/HeroSection";
import FeaturedExperience from "@/components/public/sections/FeaturedExperience";
import UpcomingExperiences from "@/components/public/sections/UpcomingExperiences";
import WhyTheaterLocals from "@/components/public/sections/WhyTheaterLocals";
import JourneyMap from "@/components/public/sections/JourneyMap";
import GuestTestimonials from "@/components/public/sections/GuestTestimonials";
import MiuraInfo from "@/components/public/sections/MiuraInfo";
import ECPreview from "@/components/public/sections/ECPreview";
import BlogPreview from "@/components/public/sections/BlogPreview";
import NewsletterCTA from "@/components/public/sections/NewsletterCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedExperience />
      <UpcomingExperiences />
      <WhyTheaterLocals />
      <JourneyMap />
      <GuestTestimonials />
      <MiuraInfo />
      <ECPreview />
      <BlogPreview />
      <NewsletterCTA />
    </>
  );
}
