import { Header } from "@/components/layout";
import { FooterSection } from "@/components/sections";
import { JobSearch } from "@/components/JobSearch";
import { testimonials } from "@/data";
import { Users, TrendingUp, Award, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Jobs through Top Headhunter | Executive Opportunities Jakarta Indonesia",
  description: "Exclusive job opportunities through Indonesia's premier headhunter. Executive search placements in Jakarta, Surabaya, Bandung. Career advancement with top recruitment agency.",
  keywords: "headhunter jobs, executive opportunities, jakarta jobs, recruitment agency candidates, talent acquisition jobs",
};

export default function JobsPage() {
  const candidateValues = [
    {
      icon: Users,
      title: "Exclusive Opportunities",
      description: "Access to hidden job market and exclusive positions not advertised elsewhere"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Strategic career planning and guidance from industry experts"
    },
    {
      icon: Award,
      title: "Premium Support",
      description: "Personalized interview coaching and salary negotiation assistance"
    },
    {
      icon: CheckCircle,
      title: "Quality Matches",
      description: "Only relevant opportunities that match your skills and career goals"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Apply",
      description: "Submit your application for positions that interest you"
    },
    {
      step: 2,
      title: "Initial Screening",
      description: "Our recruiters review your profile and conduct initial assessment"
    },
    {
      step: 3,
      title: "Client Introduction",
      description: "We introduce you to the hiring company and facilitate interviews"
    },
    {
      step: 4,
      title: "Placement",
      description: "Successful candidates receive job offers with our support"
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
            Advance Your Career
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Discover exclusive job opportunities through Indonesia&apos;s premier headhunter. 
            We connect top talent with leading companies across Jakarta, Surabaya, and Bandung.
          </p>
        </div>
      </section>

      {/* Job Search and Listings */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Opportunities</h2>
            <p className="text-xl text-neutral-600">
              Exclusive positions from our premium client network
            </p>
          </div>
          
          <JobSearch />
        </div>
      </section>

      {/* Why Choose Us for Your Career */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-xl text-neutral-600">
              Your career success is our priority
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {candidateValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Candidate Success Stories</h2>
            <p className="text-xl text-neutral-600">
              Real stories from professionals who advanced their careers with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.clientName}</h4>
                    <p className="text-sm text-neutral-600">{testimonial.clientTitle}</p>
                    <p className="text-sm text-neutral-500">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-neutral-600">
              Your journey to career advancement in 4 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {applicationProcess.map((step, idx) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600">{step.description}</p>
                {idx < applicationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-neutral-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-xl text-neutral-300 mb-8">
            Join thousands of professionals who have successfully advanced their careers with our help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-neutral-900 px-6 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors"
            >
              Upload Your Resume
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-neutral-900 transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}