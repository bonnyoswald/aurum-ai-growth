import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern aesthetic clinic with AI technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
            <Badge variant="secondary" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Shield className="w-4 h-4 mr-2" />
              HIPAA Compliant
            </Badge>
            <Badge variant="secondary" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Award className="w-4 h-4 mr-2" />
              Healthcare Marketing Specialists
            </Badge>
            <Badge variant="secondary" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <TrendingUp className="w-4 h-4 mr-2" />
              Proven Results in 90 Days
            </Badge>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            AI-Powered Marketing That{" "}
            <span className="text-accent">Fills Your Aesthetic Practice</span>
            —While You Focus on Patients
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Done-for-you content, automation, and ads that attract qualified patients 
            and grow your revenue by <strong className="text-accent">30-50% in 90 days</strong>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="btn-hero shadow-glow">
              Get Your Free Marketing Audit
            </Button>
            <Button className="btn-secondary-hero">
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