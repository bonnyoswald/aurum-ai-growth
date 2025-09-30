import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const ServicesPackages = () => {
  const packages = [
    {
      name: "Starter",
      price: "$1,500",
      period: "/month",
      bestFor: "Small practices ready to establish online presence",
      popular: false,
      deliverables: [
        "8 social media posts per month",
        "4 Reels/video content pieces",
        "1 SEO-optimized blog post",
        "Basic AI chatbot with FAQs",
        "Appointment reminder automation",
        "Light ad campaign setup + management"
      ],
      ctaText: "Start Growing"
    },
    {
      name: "Growth",
      price: "$3,750",
      period: "/month",
      bestFor: "Established clinics scaling patient acquisition",
      popular: true,
      deliverables: [
        "15 social posts per month",
        "8 Reels/videos",
        "4 carousel posts",
        "2 SEO blogs",
        "Advanced chatbot with booking integration",
        "2 ad funnels with landing pages",
        "Review request automation",
        "No-show recovery sequences",
        "Biweekly performance reports"
      ],
      ctaText: "Get Started"
    },
    {
      name: "Premium",
      price: "$6,500",
      period: "/month",
      bestFor: "High-revenue practices maximizing growth",
      popular: false,
      deliverables: [
        "30 social posts per month",
        "12 professional videos",
        "Full-funnel advertising strategy",
        "Custom landing pages for each service",
        "Email + SMS patient nurturing campaigns",
        "AI-powered intake assistant",
        "Weekly performance dashboards",
        "Dedicated account manager",
        "Priority support"
      ],
      ctaText: "Scale Your Practice"
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-gradient-primary">Growth Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            All packages include a $1,500 setup fee and 3-month minimum commitment to ensure real results.
          </p>
          <Badge className="bg-accent/10 text-accent border-accent/20">
            No long-term contracts • Cancel after 3 months
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative p-8 hover-lift ${pkg.popular ? 'shadow-strong border-2 border-accent' : 'shadow-medium'} bg-white`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1 shadow-medium">
                    <Star className="w-4 h-4 mr-1" />
                    MOST POPULAR
                  </Badge>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{pkg.bestFor}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {pkg.deliverables.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full ${pkg.popular ? 'btn-hero' : 'btn-primary-large'}`}
              >
                {pkg.ctaText}
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-2">
            <strong>Custom add-ons available:</strong> Teleconsult pages, advanced HIPAA intake, 
            paid ad spend management, SMS volume scaling.
          </p>
          <p className="text-sm text-muted-foreground">
            All packages include HIPAA-compliant systems and dedicated account management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPackages;