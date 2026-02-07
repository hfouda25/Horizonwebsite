/*
Design: Techno-Maritime Futurism
Maintenance tracking page with predictive analytics and service history
*/

import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { 
  Wrench, 
  TrendingUp, 
  Database, 
  Package, 
  Calendar,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Settings,
  FileText
} from "lucide-react";

export default function Maintenance() {
  const features = [
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-powered predictive maintenance algorithms that forecast equipment failures before they occur, minimizing downtime.",
    },
    {
      icon: Database,
      title: "Service History",
      description: "Comprehensive digital records of all maintenance activities, repairs, and inspections with full traceability.",
    },
    {
      icon: Package,
      title: "Parts Management",
      description: "Intelligent inventory tracking for spare parts with automated reordering and supplier management.",
    },
    {
      icon: Calendar,
      title: "Scheduled Maintenance",
      description: "Automated scheduling of preventive maintenance based on running hours, calendar dates, and usage patterns.",
    },
    {
      icon: AlertTriangle,
      title: "Critical Alerts",
      description: "Real-time notifications for critical maintenance issues requiring immediate attention.",
    },
    {
      icon: Settings,
      title: "Work Order Management",
      description: "Digital work order system with task assignment, progress tracking, and completion verification.",
    },
  ];

  const maintenanceTypes = [
    {
      title: "Preventive Maintenance",
      description: "Scheduled maintenance to prevent equipment failures",
      icon: Calendar,
      metrics: ["Scheduled Tasks", "Completion Rate", "Cost Savings"],
    },
    {
      title: "Corrective Maintenance",
      description: "Repairs and fixes for identified issues",
      icon: Wrench,
      metrics: ["Active Issues", "Resolution Time", "Parts Used"],
    },
    {
      title: "Predictive Maintenance",
      description: "Data-driven maintenance based on condition monitoring",
      icon: TrendingUp,
      metrics: ["Predictions", "Accuracy Rate", "Prevented Failures"],
    },
  ];

  return (
    <div className="min-h-screen gradient-mesh">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
            alt="Maintenance Tracking"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-100" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-sm font-data text-primary tracking-wider">PREDICTIVE MAINTENANCE SYSTEM</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6">
            MAINTENANCE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              TRACKING
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 font-outfit font-light max-w-3xl mx-auto leading-relaxed">
            Advanced maintenance tracking system with predictive analytics, comprehensive service history, and intelligent parts management.
          </p>
        </div>
      </section>

      {/* Maintenance Types Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {maintenanceTypes.map((type, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/40 hover:glow-cyan transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:glow-cyan transition-all duration-300">
                  <type.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {type.title}
                </h3>
                
                <p className="text-gray-700 font-outfit font-light leading-relaxed mb-6">
                  {type.description}
                </p>

                <div className="space-y-2">
                  <p className="text-xs font-data text-primary tracking-wider mb-3">KEY METRICS</p>
                  {type.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 font-outfit font-light">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
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
                CAPABILITIES
              </span>
            </h2>
            <p className="text-lg text-gray-700 font-outfit font-light max-w-2xl mx-auto">
              Comprehensive tools for efficient maintenance management
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
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                PROACTIVE
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  MAINTENANCE STRATEGY
                </span>
              </h2>

              <div className="space-y-4 text-gray-700 font-outfit font-light leading-relaxed">
                <p>
                  Traditional reactive maintenance approaches lead to unexpected failures, costly emergency repairs, and extended vessel downtime. Our predictive maintenance system transforms this paradigm by leveraging advanced analytics, IoT sensors, and machine learning algorithms to anticipate equipment failures before they occur.
                </p>
                
                <p>
                  The system continuously monitors critical equipment parameters including vibration, temperature, pressure, and performance metrics. By analyzing these data streams against historical patterns and manufacturer specifications, our algorithms can predict potential failures weeks or even months in advance, allowing you to schedule maintenance during planned port calls rather than facing emergency situations at sea.
                </p>
                
                <p>
                  Our comprehensive maintenance tracking platform maintains detailed service histories for every piece of equipment aboard your vessels. This includes installation dates, manufacturer specifications, maintenance intervals, parts replacements, and performance trends. This wealth of data enables informed decision-making about equipment lifecycle management, helping you optimize the balance between preventive maintenance and equipment replacement.
                </p>
                
                <p>
                  We integrate with leading spare parts suppliers to maintain optimal inventory levels. The system automatically generates purchase orders when stock levels fall below predetermined thresholds, ensuring critical spares are always available when needed. This intelligent inventory management reduces carrying costs while eliminating the risk of extended downtime due to parts unavailability.
                </p>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="rounded-2xl overflow-hidden border border-primary/20 glow-cyan">
                <img 
                  src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80"
                  alt="Ship Engine Room Maintenance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="glass-card p-12 rounded-3xl border border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-secondary/30">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-data text-secondary tracking-wider">OPERATIONAL EXCELLENCE</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                  MAXIMIZE
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    UPTIME
                  </span>
                </h2>

                <p className="text-lg text-gray-700 font-outfit font-light leading-relaxed">
                  Our predictive maintenance system helps you prevent costly breakdowns, extend equipment life, and optimize maintenance budgets.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  {[
                    { value: "35%", label: "Cost Reduction" },
                    { value: "50%", label: "Less Downtime" },
                    { value: "99%", label: "Uptime Rate" },
                    { value: "24/7", label: "Monitoring" },
                  ].map((stat, index) => (
                    <div key={index} className="glass-card p-4 rounded-xl border border-primary/20">
                      <p className="text-2xl font-display font-bold text-primary mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-700 font-outfit font-light">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Reduce unplanned downtime by up to 50%",
                  "Extend equipment lifespan through proactive care",
                  "Optimize spare parts inventory and reduce costs",
                  "Improve safety through better equipment reliability",
                  "Comprehensive audit trail for compliance",
                  "Real-time visibility into all maintenance activities",
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className="glass-card p-4 rounded-xl border border-primary/20 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-900 font-outfit font-light">
                        {benefit}
                      </span>
                    </div>
                  </div>
                ))}
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
              TRANSFORM YOUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                MAINTENANCE STRATEGY
              </span>
            </h2>
            
            <p className="text-lg text-gray-700 font-outfit font-light max-w-2xl mx-auto mb-8">
              Move from reactive to predictive maintenance and experience the difference in operational efficiency.
            </p>
            
            <Link href="/contact">
              <Button size="lg" className="relative overflow-hidden group bg-primary text-primary-foreground hover:bg-primary/90 font-outfit font-medium text-base px-8 py-6 glow-cyan">
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
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
