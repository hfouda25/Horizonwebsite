/*
Design: Techno-Maritime Futurism
Full-viewport hero with animated gradient mesh background and translucent overlapping panels
*/

import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { 
  Users, 
  Ship, 
  ClipboardCheck, 
  Wrench, 
  Shield, 
  Globe, 
  Award,
  ArrowRight,
  CheckCircle2,
  MapPin
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Users,
      title: "Crew Management",
      description: "MLC 2006 compliant crew management solutions ensuring proper certification, training, and welfare standards for maritime personnel.",
      features: ["Certification Tracking", "Training Programs", "Compliance Monitoring"],
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1920&q=80",
      link: "/crew-management"
    },
    {
      icon: Ship,
      title: "Ship Management",
      description: "Comprehensive ship management covering ISM, ISPS, and MLC standards with real-time monitoring and compliance verification.",
      features: ["ISM Compliance", "ISPS Security", "Fleet Monitoring"],
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80",
      link: "/ship-management"
    },
    {
      icon: ClipboardCheck,
      title: "Survey Scheduling",
      description: "Automated survey scheduling and tracking system ensuring timely inspections and regulatory compliance.",
      features: ["Automated Scheduling", "Compliance Alerts", "Inspection Reports"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      link: "/surveys"
    },
    {
      icon: Wrench,
      title: "Maintenance Tracking",
      description: "Advanced maintenance tracking system with predictive analytics and comprehensive service history management.",
      features: ["Predictive Analytics", "Service History", "Parts Management"],
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80",
      link: "/maintenance"
    },
  ];

  const stats = [
    { value: "500+", label: "Vessels Managed" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Compliance Rate" },
    { value: "24/7", label: "Support Available" },
  ];

  const complianceStandards = [
    { code: "MLC 2006", name: "Maritime Labour Convention", status: "Certified" },
    { code: "ISM", name: "International Safety Management", status: "Compliant" },
    { code: "ISPS", name: "International Ship & Port Security", status: "Verified" },
  ];

  return (
    <div className="min-h-screen gradient-mesh">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1920&q=80"
            alt="Maritime Command Center"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/95 via-cyan-50/95 to-blue-100/95" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 animate-fade-in-up shadow-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">CERTIFIED MARITIME CONSULTANCY</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-gray-900 leading-tight animate-fade-in-up animation-delay-100">
              NAVIGATING
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                MARITIME EXCELLENCE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-700 font-normal max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Professional maritime consultancy and investment services across the Caribbean, ensuring full compliance with MLC 2006, ISM, and ISPS standards.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
              <Link href="/contact">
                <Button size="lg" className="relative overflow-hidden group bg-primary text-primary-foreground hover:bg-primary/90 font-outfit font-medium text-base px-8 py-6 glow-cyan">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
                </Button>
              </Link>
              <Link href="/ship-management">
                <Button size="lg" variant="outline" className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-outfit font-semibold text-base px-8 py-6 transition-all duration-300">
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 animate-fade-in-up animation-delay-400">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:border-primary/40 shadow-lg transition-all duration-300">
                  <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-900/70 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              OUR SERVICES
            </h2>
            <p className="text-lg text-gray-900/70 font-normal max-w-2xl mx-auto">
              Comprehensive maritime solutions tailored to meet international compliance standards
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:glow-cyan transition-all duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-display font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-900/70 font-normal leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-900/70 font-normal">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href={service.link}>
                      <Button variant="ghost" className="group/btn text-primary hover:text-primary font-medium mt-2 p-0">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Service Image */}
                <div className="mt-6 rounded-xl overflow-hidden border border-primary/20">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="glass-card p-12 rounded-3xl border border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-secondary/30">
                  <Award className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-data text-secondary tracking-wider">INTERNATIONAL STANDARDS</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                  CERTIFIED
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    COMPLIANCE
                  </span>
                </h2>

                <p className="text-lg text-gray-900/70 font-normal leading-relaxed">
                  We maintain the highest standards of maritime compliance, ensuring your operations meet all international regulations and safety requirements.
                </p>

                {/* Compliance Standards */}
                <div className="space-y-4">
                  {complianceStandards.map((standard, index) => (
                    <div key={index} className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-primary/20 hover:border-primary/40 shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-semibold text-primary tracking-wide">
                            {standard.code}
                          </p>
                          <p className="text-sm text-gray-900/70 font-normal mt-1">
                            {standard.name}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/30">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-xs font-semibold text-primary tracking-wide">
                            {standard.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-primary/20 glow-cyan">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
                    alt="Caribbean Maritime Operations"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caribbean Operations Section */}
      <section className="relative py-32 bg-gradient-to-b from-transparent to-blue-50/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-primary/30 mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-data text-primary tracking-wider">OUR SERVICE AREA</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              CARIBBEAN
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                MARITIME OPERATIONS
              </span>
            </h2>
            
            <p className="text-lg text-gray-700 font-normal max-w-3xl mx-auto leading-relaxed">
              Serving the Caribbean maritime industry with comprehensive consultancy and investment services across multiple territories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Guyana */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">Guyana</h3>
              <p className="text-gray-700 font-normal mb-4 leading-relaxed">
                Our primary hub in Georgetown provides comprehensive maritime services to vessels operating in Guyanese waters and the wider South American region.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Port State Control
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Crew Changes
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Survey Coordination
                </p>
              </div>
            </div>

            {/* Jamaica */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">Jamaica</h3>
              <p className="text-gray-700 font-normal mb-4 leading-relaxed">
                Our Kingston office serves as a strategic location for vessels transiting through major Caribbean shipping lanes and calling at Jamaican ports.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Flag State Services
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Technical Management
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Emergency Response
                </p>
              </div>
            </div>

            {/* Other Caribbean Islands */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">Caribbean Network</h3>
              <p className="text-gray-700 font-normal mb-4 leading-relaxed">
                Through our network of partners and agents, we provide services across Trinidad & Tobago, Barbados, and other Caribbean territories.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Regional Coverage
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Local Expertise
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  24/7 Support
                </p>
              </div>
            </div>
          </div>

          {/* Caribbean Image */}
          <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
              alt="Caribbean Maritime Operations - Tropical port with cargo vessels"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="relative glass-card p-16 rounded-3xl border border-primary/20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10 text-center space-y-8">
              <Globe className="w-16 h-16 text-primary mx-auto glow-cyan" />
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                READY TO SET SAIL?
              </h2>
              
              <p className="text-lg text-gray-900/70 font-normal max-w-2xl mx-auto">
                Partner with Horizon Maritime for comprehensive consultancy services across the Caribbean region.
              </p>
              
              <Link href="/contact">
                <Button size="lg" className="relative overflow-hidden group bg-primary text-primary-foreground hover:bg-primary/90 font-outfit font-medium text-base px-8 py-6 glow-cyan">
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
