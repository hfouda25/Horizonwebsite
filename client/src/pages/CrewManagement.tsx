/*
Design: Techno-Maritime Futurism
Crew management dashboard with glass morphism cards and compliance tracking
*/

import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { 
  Users, 
  Award, 
  BookOpen, 
  Heart, 
  Shield, 
  CheckCircle2,
  Clock,
  FileText,
  ArrowRight
} from "lucide-react";

export default function CrewManagement() {
  const features = [
    {
      icon: Award,
      title: "Certification Management",
      description: "Track and manage all crew certifications with automated renewal reminders and compliance verification.",
    },
    {
      icon: BookOpen,
      title: "Training Programs",
      description: "Comprehensive training modules aligned with MLC 2006 requirements and industry best practices.",
    },
    {
      icon: Heart,
      title: "Welfare Standards",
      description: "Ensure crew welfare compliance including working conditions, accommodation, and health services.",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete digital documentation system for crew records, contracts, and compliance certificates.",
    },
    {
      icon: Clock,
      title: "Work Hour Monitoring",
      description: "Automated tracking of work and rest hours to ensure compliance with maritime labor regulations.",
    },
    {
      icon: Shield,
      title: "Compliance Audits",
      description: "Regular compliance audits and reporting to maintain MLC 2006 certification standards.",
    },
  ];

  const mlcRequirements = [
    { title: "Minimum Age", status: "Compliant", description: "Verification of minimum age requirements" },
    { title: "Medical Certification", status: "Compliant", description: "Valid medical certificates for all crew" },
    { title: "Training Standards", status: "Compliant", description: "STCW and MLC training compliance" },
    { title: "Employment Agreements", status: "Compliant", description: "Fair and transparent employment contracts" },
    { title: "Repatriation", status: "Compliant", description: "Guaranteed repatriation coverage" },
    { title: "Social Security", status: "Compliant", description: "Social security protection measures" },
  ];

  return (
    <div className="min-h-screen gradient-mesh">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1920&q=80"
            alt="Crew Management"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-100" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-data text-primary tracking-wider">MLC 2006 COMPLIANT</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6">
            CREW
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              MANAGEMENT
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 font-outfit font-light max-w-3xl mx-auto leading-relaxed">
            Comprehensive crew management solutions ensuring full compliance with Maritime Labour Convention 2006 standards, from certification to welfare management.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-32">
        <div className="container">
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

      {/* MLC 2006 Compliance Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="glass-card p-12 rounded-3xl border border-primary/20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-secondary/30 mb-6">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-sm font-data text-secondary tracking-wider">MARITIME LABOUR CONVENTION</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                MLC 2006
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  COMPLIANCE FRAMEWORK
                </span>
              </h2>

              <p className="text-lg text-gray-700 font-outfit font-light max-w-2xl mx-auto">
                Our comprehensive compliance framework ensures adherence to all MLC 2006 requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mlcRequirements.map((req, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-xl border border-primary/20 hover:border-primary/40 hover:glow-cyan transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-display font-bold text-gray-900">
                      {req.title}
                    </h4>
                    <div className="flex items-center gap-1 glass-card px-2 py-1 rounded-full border border-primary/30">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      <span className="text-xs font-data text-primary tracking-wider">
                        {req.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 font-outfit font-light">
                    {req.description}
                  </p>
                </div>
              ))}
            </div>
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
                  src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1920&q=80"
                  alt="Maritime Crew Working on Deck"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                PROFESSIONAL
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  CREW EXCELLENCE
                </span>
              </h2>

              <div className="space-y-4 text-gray-700 font-outfit font-light leading-relaxed">
                <p>
                  At Horizon Maritime, we understand that a vessel's crew is its most valuable asset. Our comprehensive crew management services ensure that every seafarer under our care meets the highest standards of competence, certification, and welfare as mandated by the Maritime Labour Convention 2006.
                </p>
                
                <p>
                  We provide end-to-end crew management solutions that cover recruitment, training, certification verification, contract management, and ongoing welfare support. Our digital platform enables real-time tracking of crew certifications, medical fitness, and training requirements, ensuring your vessels are always manned by qualified personnel.
                </p>
                
                <p>
                  Our dedicated team works closely with maritime training institutions across the Caribbean to deliver specialized courses in STCW compliance, safety management, and emergency response. We maintain detailed records of each crew member's service history, performance evaluations, and professional development, providing transparency and accountability throughout the employment lifecycle.
                </p>
                
                <p>
                  With 24/7 crew support services, we handle everything from visa processing and travel arrangements to repatriation assistance and family welfare programs. Our commitment to MLC 2006 compliance means your crew enjoys fair employment terms, safe working conditions, and access to comprehensive health and social security benefits.
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
              OPTIMIZE YOUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                CREW OPERATIONS
              </span>
            </h2>
            
            <p className="text-lg text-gray-700 font-outfit font-light max-w-2xl mx-auto mb-8">
              Let our experts help you maintain full MLC 2006 compliance while optimizing crew management efficiency.
            </p>
            
            <Link href="/contact">
              <Button size="lg" className="relative overflow-hidden group bg-primary text-primary-foreground hover:bg-primary/90 font-outfit font-medium text-base px-8 py-6 glow-cyan">
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Consultation
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
