import { Header } from "@/components/layout";
import { FooterSection } from "@/components/sections";
import { teamMembers, companyStats, officeLocations, industryExpertise } from "@/data";
import Image from "next/image";
import { MapPin, Phone, Mail, Users, Award, Globe, TrendingUp } from "lucide-react";

export const metadata = {
  title: "About Us - Premier Headhunter & Talent Acquisition Team | VIBE TALENT",
  description: "Meet Indonesia's leading headhunter and recruitment team. 8+ years experience, 2,500+ placements, 92% success rate. Expert talent acquisition across Jakarta, Surabaya, Bandung.",
  keywords: "recruitment team, headhunter indonesia, talent acquisition experts, recruitment agency jakarta, executive search team",
};

export default function AboutPage() {
  return (
    <div className="antialiased text-neutral-900 bg-neutral-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Our Company
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            We&apos;re a team of recruitment specialists dedicated to connecting exceptional talent 
            with forward-thinking companies across Southeast Asia.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Founded in 2017, we started with a simple mission: to revolutionize how companies 
                  find and hire exceptional talent. What began as a small team of recruitment enthusiasts 
                  has grown into Southeast Asia&apos;s premier talent acquisition partner.
                </p>
                <p>
                  We&apos;ve shipped products at venture-backed startups and public companies. Now we help 
                  founders build teams that move with the same velocity—without compromising on quality.
                </p>
                <p>
                  Our approach combines deep industry expertise with cutting-edge technology to deliver 
                  results that exceed expectations. We&apos;re not just recruiters; we&apos;re strategic partners 
                  in your growth journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">{companyStats.yearsInBusiness}+</div>
              <div className="text-neutral-600">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">{companyStats.totalPlacements.toLocaleString()}+</div>
              <div className="text-neutral-600">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">{companyStats.clientCompanies}+</div>
              <div className="text-neutral-600">Client Companies</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">{companyStats.successRate}%</div>
              <div className="text-neutral-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-neutral-600">
              Industry experts who understand both talent and business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-sm text-neutral-600 mb-3">{member.experience} years experience</p>
                </div>
                <p className="text-sm text-neutral-600 mb-4 line-clamp-3">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.specializations.slice(0, 2).map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-neutral-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">People First</h3>
              <p className="text-neutral-600">
                We believe that the right people are the foundation of every successful business. 
                Our approach prioritizes human connection and cultural fit.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-neutral-600">
                We maintain the highest standards in everything we do, from candidate sourcing 
                to client communication. Quality is never compromised.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Mindset</h3>
              <p className="text-neutral-600">
                We&apos;re committed to continuous learning and improvement, both for ourselves 
                and for the candidates and companies we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry Expertise</h2>
            <p className="text-xl text-neutral-600">
              Deep knowledge across diverse sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {industryExpertise.map((industry, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-neutral-700 font-medium">{industry.name}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-neutral-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${industry.color}`}
                        style={{ width: `${industry.percentage}%` }}
                      />
                    </div>
                    <span className="text-neutral-600 text-sm w-8">{industry.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop"
                alt="Industry expertise"
                width={500}
                height={400}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-xl text-neutral-600">
              Strategic presence across key Indonesian markets
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office) => (
              <div key={office.id} className="bg-neutral-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">
                    {office.city} {office.isHeadOffice && '(HQ)'}
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-neutral-600 text-sm">{office.address}</p>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm text-neutral-600">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm text-neutral-600">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-neutral-300 mb-8">
            Let&apos;s discuss how we can help you build your dream team or find your next opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-neutral-900 px-6 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/jobs"
              className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-neutral-900 transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
