import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    clinicName: "",
    email: "",
    phone: "",
    website: "",
    challenge: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.fullName || !formData.email || !formData.clinicName) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and clinic name are required.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would submit to your backend
    toast({
      title: "Audit Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your free marketing audit.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      clinicName: "",
      email: "",
      phone: "",
      website: "",
      challenge: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="section-padding bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Fill Your Schedule with{" "}
              <span className="text-accent">Qualified Patients?</span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Get your free marketing audit and discover exactly how to grow your practice with AI-powered marketing.
            </p>
            
            {/* Trust Indicators */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-accent" />
                <span>Free 30-minute consultation included</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-accent" />
                <span>Custom strategy presentation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-accent" />
                <span>No obligation • No high-pressure sales</span>
              </div>
            </div>
            
            {/* Alternative CTA */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-bold mb-2">Not ready to book?</h3>
              <p className="text-sm opacity-90 mb-4">
                Download our free guide: "7 Ways Aesthetic Clinics Are Losing Patients Online (And How to Fix It)"
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Download Free Guide
              </Button>
            </div>
          </div>
          
          {/* Form */}
          <Card className="p-8 bg-white shadow-strong">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Get Your Free Marketing Audit
              </h3>
              <p className="text-muted-foreground">
                See exactly where you're losing patients and revenue
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Dr. Jane Smith"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="clinicName" className="text-foreground">Clinic/Practice Name *</Label>
                <Input
                  id="clinicName"
                  value={formData.clinicName}
                  onChange={(e) => handleInputChange("clinicName", e.target.value)}
                  placeholder="Smith Dermatology"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="doctor@example.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <Label htmlFor="website" className="text-foreground">Website URL</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  placeholder="https://yourpractice.com"
                />
              </div>
              
              <div>
                <Label htmlFor="challenge" className="text-foreground">Biggest Marketing Challenge</Label>
                <Select value={formData.challenge} onValueChange={(value) => handleInputChange("challenge", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your main challenge" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inconsistent-bookings">Inconsistent patient bookings</SelectItem>
                    <SelectItem value="low-social-engagement">Low social media engagement</SelectItem>
                    <SelectItem value="wasted-ad-spend">Wasted ad spend / poor ROI</SelectItem>
                    <SelectItem value="manual-follow-ups">Too much manual follow-up work</SelectItem>
                    <SelectItem value="poor-online-reputation">Poor online reputation</SelectItem>
                    <SelectItem value="no-marketing-strategy">No clear marketing strategy</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button type="submit" className="w-full btn-hero">
                Get My Free Audit
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;