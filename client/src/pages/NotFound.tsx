/*
Design: Techno-Maritime Futurism
404 page with glass morphism styling and navigation back to home
*/

import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Anchor, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-mesh">
      <Navigation />
      
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Floating Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-3xl glass-card border border-primary/30 flex items-center justify-center glow-cyan">
                  <Anchor className="w-16 h-16 text-primary animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
              </div>
            </div>

            {/* 404 Text */}
            <div>
              <h1 className="text-8xl md:text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary mb-4">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                LOST AT SEA
              </h2>
              <p className="text-lg text-gray-700 font-outfit font-light max-w-xl mx-auto leading-relaxed">
                The page you're looking for has drifted off course. Let's navigate you back to safe waters.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="/">
                <Button size="lg" className="relative overflow-hidden group bg-primary text-primary-foreground hover:bg-primary/90 font-outfit font-medium text-base px-8 py-6 glow-cyan">
                  <span className="relative z-10 flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Return Home
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-card border-primary/30 hover:border-primary hover:glow-cyan font-outfit font-light text-base px-8 py-6"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Button>
            </div>

            {/* Quick Links */}
            <div className="pt-12">
              <p className="text-sm font-data text-primary tracking-wider mb-6">
                QUICK NAVIGATION
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {[
                  { href: "/crew-management", label: "Crew Management" },
                  { href: "/ship-management", label: "Ship Management" },
                  { href: "/surveys", label: "Surveys" },
                  { href: "/maintenance", label: "Maintenance" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link key={link.href} href={link.href}>
                    <Button 
                      variant="ghost" 
                      className="glass-card border border-primary/20 hover:border-primary/40 hover:glow-cyan font-outfit font-light text-sm"
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
