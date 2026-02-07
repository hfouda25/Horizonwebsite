/*
Design: Techno-Maritime Futurism
Glass morphism footer with multi-column layout and glowing accents
*/

import { Anchor, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 bg-white border-t border-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-primary/5 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <Anchor className="w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
              <div>
                <h3 className="text-base font-display font-bold text-gray-900 tracking-wide leading-tight">
                  HORIZON MARITIME
                </h3>
                <p className="text-xs text-primary font-medium tracking-wide">CONSULTANCY & INVESTMENT</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 font-outfit font-light leading-relaxed">
              Professional maritime consultancy and investment services across the Caribbean, ensuring compliance with international standards.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-display font-bold text-gray-900 mb-4 tracking-wide">
              SERVICES
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/crew-management", label: "Crew Management" },
                { href: "/ship-management", label: "Ship Management" },
                { href: "/surveys", label: "Survey Scheduling" },
                { href: "/maintenance", label: "Maintenance Tracking" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-sm text-gray-900/70 hover:text-primary transition-colors cursor-pointer font-medium">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-display font-bold text-gray-900 mb-4 tracking-wide">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-900/70 font-normal">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Caribbean Region<br />Guyana, Jamaica</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-900/70 hover:text-primary transition-colors cursor-pointer font-normal">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>operation@horizon-maritime.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-900/70 hover:text-primary transition-colors cursor-pointer font-normal">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+592 701 5624</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-900/70 hover:text-primary transition-colors cursor-pointer font-normal">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+1 876 847 7974</span>
              </li>
            </ul>
          </div>

          {/* Compliance Column */}
          <div>
            <h4 className="text-sm font-display font-bold text-gray-900 mb-4 tracking-wide">
              COMPLIANCE
            </h4>
            <div className="space-y-3">
              {[
                { code: "MLC 2006", label: "Maritime Labour Convention" },
                { code: "ISM", label: "International Safety Management" },
                { code: "ISPS", label: "International Ship & Port Security" },
              ].map((item) => (
                <div key={item.code} className="bg-white/80 p-3 rounded-lg border border-primary/15 hover:border-primary/30 transition-colors shadow-sm">
                  <p className="text-xs font-semibold text-primary tracking-wide">
                    {item.code}
                  </p>
                  <p className="text-xs text-gray-900/60 font-normal mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-900/60 font-normal">
              © {currentYear} Horizon Maritime Consultancy & Investment. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
              ].map((social) => (
                <button
                  key={social.label}
                  className="p-2 rounded-lg bg-white/80 border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-900/60 group-hover:text-primary transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
