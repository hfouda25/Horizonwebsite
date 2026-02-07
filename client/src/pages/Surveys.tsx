/*
Design: Techno-Maritime Futurism
Survey scheduling page with automated tracking and compliance alerts
*/

import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { 
  ClipboardCheck, 
  Calendar, 
  Bell, 
  FileText, 
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowRight,
  BarChart
} from "lucide-react";

export default function Surveys() {
  const surveyTypes = [
    {
      icon: ClipboardCheck,
      title: "Annual Surveys",
      description: "Comprehensive annual inspections ensuring vessel compliance with classification society requirements.",
      frequency: "Yearly",
    },
    {
      icon: Calendar,
      title: "Intermediate Surveys",
      description: "Mid-period inspections verifying continued compliance between major surveys.",
      frequency: "2-3 Years",
    },
    {
      icon: FileText,
      title: "Special Surveys",
      description: "Detailed examinations of hull, machinery, and equipment at specified intervals.",
      frequency: "5 Years",
    },
    {
      icon: BarChart,
      title: "Condition Surveys",
      description: "Assessment of vessel condition for purchase, sale, or insurance purposes.",
      frequency: "As Needed",
    },
  ];

  const features = [
    {
      icon: Calendar,
      title: "Automated Scheduling",
      description: "Intelligent scheduling system that automatically plans surveys based on regulatory requirements and vessel availability.",
    },
    {
      icon: Bell,
      title: "Compliance Alerts",
      description: "Proactive notifications for upcoming surveys, expiring certificates, and compliance deadlines.",
    },
    {
      icon: FileText,
      title: "Digital Reports",
      description: "Comprehensive digital survey reports with photo documentation and compliance verification.",
    },
    {
      icon: Clock,
      title: "Timeline Tracking",
      description: "Visual timeline tracking of all past and upcoming surveys with status indicators.",
    },
    {
      icon: CheckCircle2,
      title: "Compliance Verification",
      description: "Automated compliance checking against ISM, ISPS, and MLC requirements.",
    },
    {
      icon: AlertCircle,
      title: "Issue Management",
      description: "Track and manage survey findings with corrective action workflows.",
    },
  ];

  return (
    <div className="min-h-screen gradient-mesh">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt="Survey Scheduling"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-primary/30 mb-6">
            <ClipboardCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-data text-primary tracking-wider">AUTOMATED SURVEY MANAGEMENT</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6">
            SURVEY
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              SCHEDULING
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 font-outfit font-light max-w-3xl mx-auto leading-relaxed">
            Streamlined survey scheduling and tracking system ensuring timely inspections and continuous regulatory compliance.
          </p>
        </div>
      </section>

      {/* Survey Types Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              SURVEY
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                CATEGORIES
              </span>
            </h2>
            <p className="text-lg text-gray-700 font-outfit font-light max-w-2xl mx-auto">
              Comprehensive coverage of all maritime survey requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {surveyTypes.map((survey, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/40 hover:glow-cyan transition-all duration-500 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:glow-cyan transition-all duration-300">
                    <survey.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {survey.title}
                      </h3>
                      <div className="glass-card px-3 py-1 rounded-full border border-primary/30">
                        <span className="text-xs font-data text-primary tracking-wider">
                          {survey.frequency}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 font-outfit font-light leading-relaxed">
                      {survey.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              SYSTEM
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                FEATURES
              </span>
            </h2>
            <p className="text-lg text-gray-700 font-outfit font-light max-w-2xl mx-auto">
              Advanced tools for efficient survey management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/40 hover:glow-cyan transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:glow-cyan transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-700 font-outfit font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-primary/20 glow-cyan">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80"
                  alt="Caribbean Port Operations"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                INTELLIGENT
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  SURVEY MANAGEMENT
                </span>
              </h2>

              <div className="space-y-4 text-gray-700 font-outfit font-light leading-relaxed">
                <p>
                  Our advanced survey scheduling system takes the complexity out of managing vessel inspections and certifications. We coordinate with classification societies, flag state authorities, and port state control to ensure your vessels maintain all required certificates and endorsements without interruption to operations.
                </p>
                
                <p>
                  The system automatically tracks survey due dates, generates advance notifications, and coordinates with surveyors to schedule inspections at convenient ports along your vessel's route. This proactive approach minimizes off-hire time and ensures surveys are conducted efficiently without disrupting commercial operations.
                </p>
                
                <p>
                  We maintain comprehensive digital records of all survey reports, findings, and recommendations. Our platform provides instant access to historical survey data, enabling trend analysis and proactive maintenance planning. This data-driven approach helps identify recurring issues and implement preventive measures before they escalate into major problems.
                </p>
                
                <p>
                  Our team of experienced marine surveyors and technical experts review all survey findings and coordinate necessary repairs or modifications. We work closely with approved service providers across the Caribbean to ensure timely completion of survey-related work, helping you maintain uninterrupted class and statutory certificates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="glass-card p-16 rounded-3xl border border-primary/20 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              STREAMLINE YOUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                SURVEY PROCESS
              </span>
            </h2>
            
            <p className="text-lg text-gray-700 font-outfit font-light max-w-2xl mx-auto mb-8">
              Never miss a survey deadline with our automated scheduling and compliance tracking system.
            </p>
            
            <Link href="/contact">
              <Button size="lg" className="relative overflow-hidden group bg-primary text-primary-foreground hover:bg-primary/90 font-outfit font-medium text-base px-8 py-6 glow-cyan">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
