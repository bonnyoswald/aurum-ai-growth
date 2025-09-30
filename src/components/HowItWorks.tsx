import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Settings, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Free Marketing Audit",
      description: "We analyze your website, social media, ads, reviews, and automation—then show you exactly where you're losing patients and revenue.",
      timeline: "Week 1",
      deliverables: [
        "Comprehensive 20-point analysis",
        "Competitor benchmarking",
        "Revenue opportunity assessment",
        "Custom strategy presentation"
      ]
    },
    {
      number: "2",
      icon: Settings,
      title: "Custom Strategy + Setup",
      description: "We build your AI marketing system: content calendar, chatbot, ad funnels, and automation workflows—all HIPAA compliant.",
      timeline: "Week 2-3",
      deliverables: [
        "AI chatbot training & deployment",
        "Content calendar creation",
        "Landing page optimization",
        "Automation workflow setup"
      ]
    },
    {
      number: "3",
      icon: Rocket,
      title: "Launch + Optimize",
      description: "Your marketing runs on autopilot while we monitor performance, test variations, and optimize for maximum patient bookings.",
      timeline: "Month 1-3+",
      deliverables: [
        "24/7 AI automation running",
        "Weekly performance reports",
        "Continuous optimization",
        "Dedicated account management"
      ]
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How We Transform Your Marketing in{" "}
            <span className="text-accent">90 Days</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 3-step process gets your practice from struggling with marketing to automatically attracting qualified patients.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-primary rounded-full z-10"></div>
                  
                  <Card className="p-8 hover-lift bg-white shadow-medium h-full">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <Badge className="mb-2 bg-accent/10 text-accent border-accent/20">
                        {step.timeline}
                      </Badge>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h4 className="font-semibold text-foreground mb-3">What You Get:</h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to see how this works for your practice?
          </p>
          <div className="inline-flex items-center space-x-2 text-accent font-semibold">
            <span>Start with your free audit</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;