import { Header } from "@/components/layout";
import { FooterSection } from "@/components/sections";
import { Search, Users, Building, Globe, CheckCircle, ArrowRight, Clock, Target, Shield } from "lucide-react";

export const metadata = {
  title: "Executive Search & Recruitment Services Jakarta | Professional Headhunter",
  description: "Professional executive search, RPO, mass hiring & EOR services in Indonesia. Expert headhunter and talent acquisition solutions. 92% success rate, 21-day average placement.",
  keywords: "executive search, recruitment services, headhunter services, talent acquisition, RPO, mass hiring, jakarta, indonesia",
};

export default function ServicesPage() {
  const services = [
    {
      id: 'executive-search',
      icon: Search,
      title: 'Executive Search',
      description: 'Strategic C-suite and senior leadership recruitment for transformational hires.',
      features: [
        'Comprehensive market mapping',
        'Confidential search process',
        'Executive assessment',
        'Cultural fit evaluation',
        '6-month placement guarantee'
      ],
      timeline: '6-8 weeks',
      pricing: 'From $15,000',
      ideal: 'Companies seeking C-level executives and senior leadership roles'
    },
    {
      id: 'rpo',
      icon: Building,
      title: 'Recruitment Process Outsourcing (RPO)',
      description: 'End-to-end recruitment solution with embedded team and streamlined processes.',
      features: [
        'Dedicated recruitment team',
        'Complete process ownership',
        'Technology and tools included',
        'Performance metrics tracking',
        'Scalable solutions'
      ],
      timeline: '4-6 weeks',
      pricing: 'From $8,000/month',
      ideal: 'Fast-growing companies with high volume hiring needs'
    },
    {
      id: 'mass-hiring',
      icon: Users,
      title: 'Mass Hiring',
      description: 'Large-scale recruitment campaigns for rapid team expansion.',
      features: [
        'Multi-channel sourcing',
        'Assessment center setup',
        'Bulk interview coordination',
        'Onboarding support',
        'Quality assurance'
      ],
      timeline: '3-4 weeks',
      pricing: 'From $500 per hire',
      ideal: 'Companies expanding rapidly or launching new locations'
    },
    {
      id: 'eor',
      icon: Globe,
      title: 'Employer of Record (EOR)',
      description: 'Compliant international hiring without setting up local entities.',
      features: [
        'Legal compliance management',
        'Payroll and benefits administration',
        'Contract management',
        'Local HR support',
        'Risk mitigation'
      ],
      timeline: '1-2 weeks',
      pricing: 'From $300/employee/month',
      ideal: 'Companies hiring internationally without local presence'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Discovery',
      description: 'We understand your requirements, culture, and success criteria through detailed consultation.'
    },
    {
      step: 2,
      title: 'Strategy',
      description: 'Develop a tailored recruitment strategy with timelines, sourcing channels, and success metrics.'
    },
    {
      step: 3,
      title: 'Sourcing',
      description: 'Leverage our network and advanced tools to identify and engage top-tier candidates.'
    },
    {
      step: 4,
      title: 'Evaluation',
      description: 'Comprehensive assessment including technical skills, cultural fit, and career motivation.'
    },
    {
      step: 5,
      title: 'Placement',
      description: 'Manage the entire offer process and ensure smooth onboarding for successful placements.'
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: '92% Success Rate',
      description: 'Proven track record with industry-leading placement success'
    },
    {
      icon: Clock,
      title: '21 Days Average',
      description: 'Fast turnaround without compromising on quality'
    },
    {
      icon: Shield,
      title: '6-Month Guarantee',
      description: 'We stand behind our placements with comprehensive guarantee'
    },
    {
      icon: Users,
      title: '2,500+ Placements',
      description: 'Extensive experience across diverse industries and roles'
    }
  ];

  return (
    <div className="antialiased text-neutral-900 bg-neutral-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Comprehensive recruitment solutions tailored to your business needs. 
            From executive search to mass hiring, we deliver results that matter.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  
                  <p className="text-neutral-600 mb-6">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-neutral-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-neutral-700">Timeline</h4>
                        <p className="text-neutral-600">{service.timeline}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-neutral-700">Starting From</h4>
                        <p className="text-neutral-600">{service.pricing}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-sm text-neutral-700 mb-2">Ideal For</h4>
                    <p className="text-sm text-neutral-600">{service.ideal}</p>
                  </div>
                  
                  <button className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-neutral-600">
              A proven methodology that delivers consistent results
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600">{step.description}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-neutral-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-neutral-600">
              Results that speak for themselves
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Specializations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry Specializations</h2>
            <p className="text-xl text-neutral-600">
              Deep expertise across key sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Technology & IT</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>Software Engineering</li>
                <li>Data Science & Analytics</li>
                <li>Product Management</li>
                <li>DevOps & Infrastructure</li>
                <li>Cybersecurity</li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Finance & Banking</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>Investment Banking</li>
                <li>Risk Management</li>
                <li>Financial Planning</li>
                <li>Fintech</li>
                <li>Compliance</li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>Clinical Research</li>
                <li>Healthcare IT</li>
                <li>Pharmaceutical</li>
                <li>Medical Devices</li>
                <li>Healthcare Administration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-neutral-300 mb-8">
            Let&apos;s discuss your hiring needs and create a customized solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-neutral-900 px-6 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors"
            >
              Book a Consultation
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-neutral-900 transition-colors"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
