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
import { organizationSchema, websiteSchema, professionalServiceSchema } from "@/lib/schema";

export const metadata = {
  title: "Leading Headhunter & Recruitment Agency in Jakarta | VIBE TALENT",
  description: "Premier headhunter and talent acquisition firm in Indonesia. Expert recruitment agency serving Jakarta, Surabaya, Bandung. Executive search & HR consulting services.",
  keywords: "headhunter, recruitment agency, talent acquisition, executive search, hr consulting, jakarta, indonesia",
  openGraph: {
    title: "Leading Headhunter & Recruitment Agency in Jakarta | VIBE TALENT",
    description: "Premier headhunter and talent acquisition firm in Indonesia. Expert recruitment agency serving Jakarta, Surabaya, Bandung.",
    type: "website",
    locale: "en_ID",
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />

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
    </>
  );
}

