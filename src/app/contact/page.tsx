import { Header } from "@/components/layout";
import { FooterSection } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";
import { officeLocations, companyStats } from "@/data";
import { MapPin, Phone, Mail, Clock, CheckCircle, Users, Award } from "lucide-react";

export const metadata = {
  title: "Contact Us - Professional Headhunter & Recruitment Agency | VIBE TALENT",
  description: "Get in touch with Indonesia's leading headhunter and recruitment agency. Book a consultation for executive search, talent acquisition, and HR consulting services in Jakarta.",
  keywords: "contact headhunter, recruitment agency contact, book consultation, talent acquisition jakarta, executive search contact",
};

export default function ContactPage() {
  return (
    <div className="antialiased text-neutral-900 bg-neutral-50">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Ready to find your perfect team members or advance your career? 
            Let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                <p className="text-neutral-600 mb-6">
                  Our team is here to help you with all your recruitment needs. Choose the best way to reach us.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-neutral-600">{officeLocations[0]?.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-neutral-600">{officeLocations[0]?.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-neutral-600">{officeLocations[0]?.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-neutral-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-neutral-600">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-neutral-900 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-2xl font-bold">{companyStats.clientCompanies}+</span>
                    </div>
                    <p className="text-sm text-neutral-300">Clients Served</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-2xl font-bold">{companyStats.totalPlacements}+</span>
                    </div>
                    <p className="text-sm text-neutral-300">Placements Made</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span className="text-2xl font-bold">{companyStats.successRate}%</span>
                    </div>
                    <p className="text-sm text-neutral-300">Success Rate</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <span className="text-2xl font-bold">{companyStats.averageTimeToHire} days</span>
                    </div>
                    <p className="text-sm text-neutral-300">Avg. Placement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Office Locations</h2>
            <p className="text-xl text-neutral-600">
              We&apos;re strategically located across Indonesia&apos;s major business hubs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office) => (
              <div key={office.id} className="bg-neutral-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{office.name}</h3>
                    <p className="text-neutral-600">{office.city}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-neutral-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-neutral-600">{office.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                    <p className="text-sm text-neutral-600">{office.phone}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                    <p className="text-sm text-neutral-600">{office.email}</p>
                  </div>
                </div>
                
                <button className="mt-4 text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  View on Map →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-neutral-900 text-white rounded-xl p-8">
            <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-2">Weekdays</h3>
                <p className="text-neutral-300">Monday - Friday</p>
                <p className="text-xl font-bold">9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Weekend</h3>
                <p className="text-neutral-300">Saturday</p>
                <p className="text-xl font-bold">9:00 AM - 1:00 PM</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-900 rounded-lg">
              <p className="text-sm text-blue-100">
                <strong>Emergency Recruitment:</strong> For urgent hiring needs, we offer 24/7 support. 
                Contact us anytime for emergency placement services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}