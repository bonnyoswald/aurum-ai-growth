import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern aesthetic clinic with AI technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-in">
            <Badge variant="secondary" className="bg-white/15 border-white/30 text-white hover:bg-white/25 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              HIPAA Compliant
            </Badge>
            <Badge variant="secondary" className="bg-white/15 border-white/30 text-white hover:bg-white/25 rounded-full px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Healthcare Specialists
            </Badge>
            <Badge variant="secondary" className="bg-white/15 border-white/30 text-white hover:bg-white/25 rounded-full px-4 py-2">
              <TrendingUp className="w-4 h-4 mr-2" />
              Results in 90 Days
            </Badge>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-slide-up">
            AI That Actually{" "}
            <span className="text-accent">Fills Your Practice</span>
            {" "}While You Focus on What You Love
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-6 leading-relaxed opacity-90 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Smart marketing that works behind the scenes—attracting the right patients 
            and growing your revenue by <strong className="text-accent">30-50% in 90 days</strong>, 
            without the marketing headaches.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="btn-hero shadow-glow rounded-full px-8 py-3">
              Get Your Free Marketing Audit
            </Button>
            <Button className="btn-secondary-hero rounded-full px-8 py-3">
              See How It Works
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;