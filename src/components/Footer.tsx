import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube, Shield, Award, CheckCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-accent">Aurum Aesthetics</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              AI Marketing Agency for Aesthetic Medicine. We help dermatology and aesthetic clinics attract more patients, automate follow-ups, and grow revenue with cutting-edge AI technology.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/80">hello@aurumesthetics.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-white/80">Los Angeles, CA</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/80 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#case-studies" className="text-white/80 hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#blog" className="text-white/80 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#privacy" className="text-white/80 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-white/80 hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Trust & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-white/10 border-white/20 text-white">
                <Shield className="w-4 h-4 mr-2" />
                HIPAA Compliant
              </Badge>
              <Badge variant="secondary" className="bg-white/10 border-white/20 text-white">
                <Award className="w-4 h-4 mr-2" />
                BBB Accredited
              </Badge>
              <Badge variant="secondary" className="bg-white/10 border-white/20 text-white">
                <CheckCircle className="w-4 h-4 mr-2" />
                Google Partner
              </Badge>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/60 text-sm">
            © 2024 Aurum Aesthetics. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-white/60">
            <span>Specializing in Aesthetic Medicine Marketing</span>
            <span>•</span>
            <span>AI-Powered Solutions</span>
            <span>•</span>
            <span>Results Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;