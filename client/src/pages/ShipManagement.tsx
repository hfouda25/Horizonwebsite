/*
Design: Techno-Maritime Futurism
Ship management dashboard with compliance indicators and fleet monitoring
*/

import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { 
  Ship, 
  Shield, 
  Lock, 
  FileCheck, 
  Activity,
  Gauge,
  Radio,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  BarChart3
} from "lucide-react";

export default function ShipManagement() {
  const standards = [
    {
      code: "ISM",
      name: "International Safety Management",
      icon: Shield,
      color: "primary",
      description: "Comprehensive safety management systems ensuring operational excellence and risk mitigation.",
      requirements: [
        "Safety & Environmental Policy",
        "Company Responsibilities",
        "Designated Person Ashore",
        "Master's Responsibility",
        "Emergency Preparedness",
        "Non-Conformity Reporting"
      ]
    },
    {
      code: "ISPS",
      name: "International Ship & Port Security",
      icon: Lock,
      color: "secondary",
      description: "Advanced security protocols protecting vessels, ports, and cargo from security threats.",
      requirements: [
        "Security Assessment",
        "Ship Security Plan",
        "Security Officer Training",
        "Security Equipment",
        "Port Facility Interface",
        "Threat Level Response"
      ]
    },
    {
      code: "MLC",
      name: "Maritime Labour Convention",
      icon: FileCheck,
      color: "primary",
      description: "Full compliance with maritime labor standards ensuring crew welfare and working conditions.",
      requirements: [
        "Crew Certification",
        "Working Conditions",
        "Accommodation Standards",
        "Health & Safety",
        "Social Security",
        "Complaint Procedures"
      ]
    },
  ];

  const managementFeatures = [
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "24/7 vessel monitoring with live status updates and performance analytics.",
    },
    {
      icon: Gauge,
      title: "Performance Metrics",
      description: "Comprehensive KPIs tracking fuel efficiency, speed, and operational costs.",
    },
    {
      icon: Radio,
      title: "Communication Systems",
      description: "Integrated communication platforms for seamless ship-to-shore coordination.",
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Proactive risk assessment and mitigation strategies for safe operations.",
    },
    {
      icon: BarChart3,
      title: "Compliance Reporting",
      description: "Automated compliance reporting and documentation management.",
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Continuous quality monitoring and improvement programs.",
    },
  ];

  return (
    <div className="min-h-screen gradient-mesh">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80"
            alt="Ship Management Dashboard"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-100" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Ship className="w-4 h-4 text-primary" />
            <span className="text-sm font-data text-primary tracking-wider">ISM · ISPS · MLC COMPLIANT</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6">
            SHIP
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              MANAGEMENT
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 font-outfit font-light max-w-3xl mx-auto leading-relaxed">
            Advanced ship management solutions covering ISM, ISPS, and MLC standards with real-time monitoring and compliance verification.
          </p>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              COMPLIANCE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                STANDARDS
              </span>
            </h2>
            <p className="text-lg text-gray-700 font-outfit font-light max-w-2xl mx-auto">
              Comprehensive coverage of international maritime standards
            </p>
          </div>

          <div className="space-y-8">
            {standards.map((standard, index) => (
              <div 
                key={index}
                className="glass-card p-8 md:p-12 rounded-3xl border border-primary/20 hover:border-primary/40 hover:glow-cyan transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Standard Info */}
                  <div className="lg:col-span-1 space-y-4">
                    <div className={`w-16 h-16 rounded-xl bg-${standard.color}/10 border border-${standard.color}/30 flex items-center justify-center glow-cyan`}>
                      <standard.icon className={`w-8 h-8 text-${standard.color}`} />
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-display font-bold text-primary mb-2 tracking-wider">
                        {standard.code}
                      </h3>
                      <p className="text-lg font-outfit font-light text-gray-900 mb-4">
                        {standard.name}
                      </p>
                      <p className="text-sm text-gray-700 font-outfit font-light leading-relaxed">
                        {standard.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 glass-card px-3 py-2 rounded-full border border-primary/30 w-fit">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-xs font-data text-primary tracking-wider">
                        CERTIFIED
                      </span>
                    </div>
                  </div>

                  {/* Right: Requirements Grid */}
                  <div className="lg:col-span-2">
                    <h4 className="text-sm font-display font-bold text-gray-900 mb-4 tracking-wide">
                      KEY REQUIREMENTS
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {standard.requirements.map((req, idx) => (
                        <div 
                          key={idx}
                          className="glass-card p-4 rounded-xl border border-primary/20 hover:border-primary/30 transition-all duration-300"
                        >
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-900 font-outfit font-light">
                              {req}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Features Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              MANAGEMENT
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                CAPABILITIES
              </span>
            </h2>
            <p className="text-lg text-gray-700 font-outfit font-light max-w-2xl mx-auto">
              Advanced tools and systems for comprehensive ship management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementFeatures.map((feature, index) => (
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
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                COMPREHENSIVE
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  VESSEL MANAGEMENT
                </span>
              </h2>

              <div className="space-y-4 text-gray-700 font-outfit font-light leading-relaxed">
                <p>
                  Horizon Maritime delivers world-class ship management services that encompass every aspect of vessel operations. Our integrated approach combines technical management, crew management, commercial operations, and regulatory compliance into a seamless service package designed to maximize vessel performance and minimize operational risks.
                </p>
                
                <p>
                  Our ISM (International Safety Management) Code implementation ensures that your vessels operate with the highest safety standards. We develop and maintain comprehensive Safety Management Systems tailored to your fleet, conduct regular internal audits, and provide continuous improvement programs that keep your operations ahead of regulatory requirements.
                </p>
                
                <p>
                  ISPS (International Ship and Port Facility Security) Code compliance is critical in today's maritime environment. We provide complete security management services including Ship Security Plans, security assessments, crew security training, and coordination with port facility security officers. Our security experts stay current with evolving threats and regulatory changes to ensure your vessels maintain the highest security posture.
                </p>
                
                <p>
                  Beyond regulatory compliance, we offer technical ship management covering planned maintenance systems, spare parts procurement, dry-docking coordination, and performance monitoring. Our experienced superintendents provide hands-on support, ensuring your vessels operate at peak efficiency while maintaining their long-term value.
                </p>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="rounded-2xl overflow-hidden border border-primary/20 glow-cyan">
                <img 
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80"
                  alt="Cargo Ship at Sea"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="glass-card p-16 rounded-3xl border border-primary/20 text-center">
            <Ship className="w-16 h-16 text-primary mx-auto mb-6 glow-cyan" />
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              ELEVATE YOUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                FLEET OPERATIONS
              </span>
            </h2>
            
            <p className="text-lg text-gray-700 font-outfit font-light max-w-2xl mx-auto mb-8">
              Partner with us for comprehensive ship management that ensures safety, security, and compliance.
            </p>
            
            <Link href="/contact">
              <Button size="lg" className="relative overflow-hidden group bg-primary text-primary-foreground hover:bg-primary/90 font-outfit font-medium text-base px-8 py-6 glow-cyan">
                <span className="relative z-10 flex items-center gap-2">
                  Request Demo
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
