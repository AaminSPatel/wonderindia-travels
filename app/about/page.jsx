import StoryHero from "@/components/about/StoryHero";
import MissionVision from "@/components/about/MissionVision";
import TeamSection from "@/components/about/TeamSection";
import Timeline from "@/components/about/Timeline";
import TrustBadges from "@/components/about/TrustBadges";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "About Us | India's Most Trusted Travel Agency",
  description:
    "Learn about WanderIndia's story, mission and the team behind 50,000+ curated Indian holidays since 2014. Verified guides, transparent pricing, 24/7 support.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About WanderIndia — India's Most Trusted Travel Agency",
    description:
      "12 years of curating honest, verified holiday packages across India.",
  },
};

export default function AboutPage() {
  return (
    <>
      <StoryHero />
      <MissionVision />
      <TrustBadges />
      <TeamSection />
      <Timeline />
      <CTASection />
    </>
  );
}
