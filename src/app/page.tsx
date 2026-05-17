import Hero from "@/components/Hero";
import MissionParallax from "@/components/MissionParallax";
import StorySplitScreen from "@/components/StorySplitScreen";
import Ministries from "@/components/Ministries";
import MasonryGallery from "@/components/MasonryGallery";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MissionParallax />
      <StorySplitScreen />
      <Ministries />
      <MasonryGallery />
      <FooterCTA />
    </main>
  );
}
