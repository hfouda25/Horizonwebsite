/*
Design: Techno-Maritime Futurism
Contact page with glass morphism form and Caribbean location highlights
*/

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Globe,
  Clock
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const locations = [
    {
      country: "Guyana",
      city: "Georgetown",
      address: "123 Water Street, Georgetown",
      phone: "+592 701 5624",
      email: "operation@horizon-maritime.com",
    },
    {
      country: "Jamaica",
      city: "Kingston",
      address: "456 Harbour Street, Kingston",
      phone: "+1 876 847 7974",
      email: "operation@horizon-maritime.com",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "operation@horizon-maritime.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+592 701 5624",
      description: "Guyana Office - Mon-Fri 8am to 6pm",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "8:00 AM - 6:00 PM",
      description: "Atlantic Standard Time",
    },
  ];

  return (
    <div className="min-h-screen gradient-mesh">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
            alt="Caribbean Maritime"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-100" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide">CARIBBEAN OPERATIONS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6">
            GET IN
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              TOUCH
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-900 font-normal max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your maritime operations? Contact our team for expert consultancy services.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:glow-cyan transition-all duration-300">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-xl font-semibold text-primary mb-1">
                  {info.value}
                </p>
                <p className="text-sm text-gray-700 font-medium">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-primary/20 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                SEND US A
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  MESSAGE
                </span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      NAME *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white border-primary/30 focus:border-primary font-normal"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      EMAIL *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white border-primary/30 focus:border-primary font-normal"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      COMPANY
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white border-primary/30 focus:border-primary font-normal"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      PHONE
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white border-primary/30 focus:border-primary font-normal"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-data text-primary tracking-wider mb-2">
                    SERVICE INTEREST
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange as any}
                    className="w-full glass-card border border-primary/30 focus:border-primary rounded-lg px-4 py-3 bg-background text-gray-900 font-outfit font-light focus:outline-none focus:glow-cyan transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="crew">Crew Management</option>
                    <option value="ship">Ship Management</option>
                    <option value="surveys">Survey Scheduling</option>
                    <option value="maintenance">Maintenance Tracking</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-data text-primary tracking-wider mb-2">
                    MESSAGE *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-white border-primary/30 focus:border-primary font-normal resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full relative overflow-hidden group bg-primary text-primary-foreground hover:bg-primary/90 font-outfit font-medium text-base py-6 glow-cyan"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-5 h-5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
                </Button>
              </form>
            </div>

            {/* Locations */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  OUR
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    LOCATIONS
                  </span>
                </h2>
                <p className="text-lg text-gray-900 font-normal leading-relaxed">
                  We operate across the Caribbean region, providing expert maritime consultancy services to vessels and operators throughout Guyana, Jamaica, and neighboring islands.
                </p>
              </div>

              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div 
                    key={index}
                    className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-bold text-gray-900 mb-1">
                          {location.country}
                        </h3>
                        <p className="text-sm text-primary font-semibold tracking-wide mb-3">
                          {location.city}
                        </p>
                        
                        <div className="space-y-2 text-sm text-gray-900 font-normal">
                          <p className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                            {location.address}
                          </p>
                          <p className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                            {location.phone}
                          </p>
                          <p className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                            {location.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 rounded-2xl border border-secondary/20">
                <h4 className="text-lg font-display font-bold text-gray-900 mb-3">
                  24/7 Emergency Support
                </h4>
                <p className="text-sm text-gray-700 font-outfit font-light mb-4">
                  For urgent maritime assistance, our emergency response team is available around the clock.
                </p>
                <Button variant="outline" className="w-full glass-card border-secondary/30 hover:border-secondary hover:glow-purple font-outfit font-light">
                  <Phone className="w-4 h-4 mr-2" />
                  24H Hotline: +592 762 5540
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
