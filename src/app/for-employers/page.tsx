import { Header } from "@/components/layout";
import { FooterSection } from "@/components/sections";
import { ROICalculator } from "@/components/ROICalculator";
import { caseStudies, testimonials, companyStats } from "@/data";
import Image from "next/image";
import { Clock, Users, Shield, CheckCircle, Building, Target, Award } from "lucide-react";

export const metadata = {
  title: "Recruitment Agency for Employers | Talent Acquisition Jakarta | Headhunter",
  description: "Partner with Indonesia's leading recruitment agency. Professional talent acquisition, headhunter services, and HR consulting for Jakarta businesses. 3x faster hiring, 92% success rate.",
  keywords: "recruitment agency employers, talent acquisition jakarta, headhunter services, hr consulting, executive search employers",
};

export default function ForEmployersPage() {

  const valuePropositions = [
    {
      icon: Clock,
      title: '3x Faster Hiring',
      description: 'Average 21-day placement vs industry standard 60+ days',
      metric: '21 days average'
    },
    {
      icon: Target,
      title: '92% Success Rate',
      description: 'Industry-leading placement success with comprehensive screening',
      metric: '2,500+ placements'
    },
    {
      icon: Users,
      title: 'Quality Guarantee',
      description: '6-month replacement guarantee on all placements',
      metric: '94% retention'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Comprehensive background checks and reference verification',
      metric: '100% verified'
    }
  ];

  const onboardingSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Deep dive into your company culture, requirements, and success metrics',
      duration: '1-2 hours'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create customized recruitment strategy with timelines and KPIs',
      duration: '2-3 days'
    },
    {
      step: 3,
      title: 'Team Assignment',
      description: 'Dedicated recruitment team aligned with your industry and needs',
      duration: '1 day'
    },
    {
      step: 4,
      title: 'Launch & Execute',
      description: 'Begin active recruitment with regular updates and feedback loops',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="antialiased text-neutral-900 bg-neutral-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Find Your Perfect Team Members
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Partner with us to build exceptional teams that drive growth. From startups to enterprises, 
                we deliver talent that matches your culture and accelerates your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-neutral-900 text-white px-6 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors"
                >
                  Book a Consultation
                </a>
                <a
                  href="#case-studies"
                  className="inline-flex items-center justify-center border border-neutral-300 text-neutral-900 px-6 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors"
                >
                  View Success Stories
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
                alt="Team meeting"
                width={600}
                height={500}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Leading Companies Choose Us</h2>
            <p className="text-xl text-neutral-600">
              Proven results that accelerate your growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePropositions.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                  <p className="text-neutral-600 mb-2">{prop.description}</p>
                  <div className="text-blue-600 font-semibold">{prop.metric}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Calculate Your ROI</h2>
            <p className="text-xl text-neutral-600">
              See how much you could save by partnering with us
            </p>
          </div>
          
          <ROICalculator />
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-neutral-600">
              Real results from real companies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-neutral-50 rounded-xl overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-600 font-medium">{study.industry}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="font-medium text-neutral-700">Challenge</h4>
                      <p className="text-sm text-neutral-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-neutral-700">Results</h4>
                      <ul className="text-sm text-neutral-600 space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="font-semibold text-neutral-900">{metric.value}</div>
                        <div className="text-xs text-neutral-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {study.testimonial && (
                    <blockquote className="text-sm text-neutral-600 italic border-l-4 border-blue-600 pl-4">
                      &ldquo;{study.testimonial}&rdquo;
                    </blockquote>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-neutral-600">
              Trusted by leading companies across Southeast Asia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Award key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-neutral-600 mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                
                <div>
                  <div className="font-semibold">{testimonial.clientName}</div>
                  <div className="text-sm text-neutral-600">{testimonial.clientTitle}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Getting Started is Simple</h2>
            <p className="text-xl text-neutral-600">
              From consultation to placement in just a few steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {onboardingSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600 mb-2">{step.description}</p>
                <div className="text-xs text-blue-600 font-medium">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
          <p className="text-xl text-neutral-300 mb-8">
            Join 150+ companies that trust us with their most important hires. 
            Let&apos;s discuss how we can accelerate your growth.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">{companyStats.successRate}%</div>
              <div className="text-neutral-300">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{companyStats.averageTimeToHire}</div>
              <div className="text-neutral-300">Days Average</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{companyStats.totalPlacements.toLocaleString()}+</div>
              <div className="text-neutral-300">Placements</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-neutral-900 px-6 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors"
            >
              Book Free Consultation
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-neutral-900 transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
