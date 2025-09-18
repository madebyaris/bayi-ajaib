import { Header } from "@/components/layout";
import {
  HeroSection,
  PlacementsSection,
  TalentCloudSection,
  PlansSection,
  AboutSection,
  ContactSection,
  FooterSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="antialiased text-neutral-900 bg-neutral-50">

      {/* Header */}
      <Header />

      {/* Hero */}
      <HeroSection />

      {/* Featured Placements */}
      <PlacementsSection />

      {/* Talent Cloud (Bento) */}
      <TalentCloudSection />

      {/* Plans */}
      <PlansSection />

      {/* About */}
      <AboutSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

