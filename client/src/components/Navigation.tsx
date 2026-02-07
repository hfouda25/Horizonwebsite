/*
Design: Techno-Maritime Futurism
Glass morphism navigation with frosted backdrop and glowing accents
*/

import { Button } from "@/components/ui/button";
import { Menu, X, Anchor } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/crew-management", label: "Crew Management" },
    { href: "/ship-management", label: "Ship Management" },
    { href: "/surveys", label: "Surveys" },
    { href: "/maintenance", label: "Maintenance" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <Anchor className="w-7 h-7 text-primary transition-all duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h1 className="text-lg font-display font-bold text-gray-900 leading-tight">
                  HORIZON MARITIME
                </h1>
                <p className="text-xs text-primary font-medium tracking-wide">CONSULTANCY & INVESTMENT</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`relative font-medium text-sm transition-all duration-300 hover:text-primary ${
                    location === item.href ? "text-primary" : "text-gray-900/80"
                  }`}
                >
                  {item.label}
                  {location === item.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary glow-cyan" />
                  )}
                </Button>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="relative overflow-hidden group bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-md hover:shadow-lg transition-all">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-900 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-border/30">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-outfit transition-all duration-300 ${
                    location === item.href
                      ? "bg-primary/20 text-primary glow-cyan"
                      : "text-gray-900/80 hover:bg-muted hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/contact">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-outfit font-medium">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
