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
      {/* Background hero blur */}
      <div
        className="absolute top-0 w-full -z-10 h-[880px] blur-3xl bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2400&auto=format&fit=crop')",
        }}
        aria-hidden="true"
      />

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

