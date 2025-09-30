import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Star, DollarSign } from "lucide-react";
import patientImage from "@/assets/patient-consultation.jpg";

const CaseStudies = () => {
  const caseStudies = [
    {
      clinicType: "Boutique Dermatology Practice",
      location: "Los Angeles, CA",
      challenge: "Low online visibility, inconsistent bookings",
      solution: "Growth Package: Social media overhaul + ad campaigns + chatbot",
      results: [
        { icon: TrendingUp, value: "143%", label: "increase in monthly patient bookings" },
        { icon: Users, value: "87%", label: "appointment show rate (up from 62%)" },
        { icon: DollarSign, value: "$47,000", label: "additional revenue in 90 days" }
      ],
      testimonial: "Aurum transformed our marketing from a time-drain to a profit center. The AI chatbot alone books 30+ appointments monthly while we sleep.",
      author: "Dr. Sarah Chen",
      position: "Practice Owner"
    },
    {
      clinicType: "Med Spa Chain",
      location: "Dallas, Texas",
      challenge: "High ad spend, low ROI, manual follow-ups",
      solution: "Premium Package: Full automation + multi-location campaigns",
      results: [
        { icon: TrendingUp, value: "62%", label: "reduction in cost per lead" },
        { icon: Users, value: "200+", label: "new patients across 3 locations" },
        { icon: Star, value: "4.9★", label: "Google rating (up from 4.1)" }
      ],
      testimonial: "The automation alone saved our team 20 hours per week. The ROI is undeniable—we're expanding to two more locations.",
      author: "Maria Rodriguez",
      position: "Practice Manager"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Results from Real{" "}
            <span className="text-gradient-primary">Aesthetic Practices</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our AI-powered marketing system has transformed patient acquisition for practices just like yours.
          </p>
        </div>
        
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-8 lg:p-12 shadow-medium hover-lift bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-6">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                      {study.clinicType}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                      {study.location}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.results.map((result, resultIndex) => {
                        const IconComponent = result.icon;
                        return (
                          <div key={resultIndex} className="text-center p-4 bg-muted rounded-lg">
                            <IconComponent className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-foreground">{result.value}</div>
                            <div className="text-xs text-muted-foreground">{result.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <img 
                      src={patientImage} 
                      alt="Happy patient consultation at aesthetic clinic" 
                      className="rounded-lg shadow-medium w-full"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-lg font-bold shadow-medium">
                      Success Story
                    </div>
                  </div>
                  
                  <blockquote className="mt-6 text-lg italic text-muted-foreground leading-relaxed">
                    "{study.testimonial}"
                  </blockquote>
                  <cite className="block mt-4 text-sm font-semibold text-foreground">
                    — {study.author}, {study.position}
                  </cite>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Want to see similar results for your practice?
          </p>
          <Badge className="bg-accent/10 text-accent border-accent/20">
            Your success story could be next
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;