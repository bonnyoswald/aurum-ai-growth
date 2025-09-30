import { Card } from "@/components/ui/card";
import { Hospital, Bot, TrendingUp, Shield, Clock, Target } from "lucide-react";

const WhyChooseUs = () => {
  const differentiators = [
    {
      icon: Hospital,
      title: "Healthcare-Specialized",
      description: "We only work with aesthetic medicine—we speak your language and understand HIPAA compliance.",
      highlight: "100% healthcare focus"
    },
    {
      icon: Bot,
      title: "AI-First Approach",
      description: "We leverage the latest AI tools to deliver premium results at a fraction of traditional agency costs.",
      highlight: "Next-gen technology"
    },
    {
      icon: TrendingUp,
      title: "Performance-Driven",
      description: "We're obsessed with ROI. Every dollar you invest should generate measurable patient growth.",
      highlight: "Results guaranteed"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "All systems, chatbots, and data handling meet healthcare privacy regulations.",
      highlight: "Fully compliant"
    },
    {
      icon: Clock,
      title: "Hands-Off for You",
      description: "We handle everything—you just approve content and watch your practice grow.",
      highlight: "Zero time investment"
    },
    {
      icon: Target,
      title: "3-Month Guarantee",
      description: "We're committed to your success. Our minimum ensures we have time to deliver real results.",
      highlight: "Risk-free trial"
    }
  ];

  return (
    <section className="section-padding bg-gradient-primary text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Aesthetic Clinics Choose <span className="text-accent">Aurum</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We're not just another marketing agency. We're the only AI-powered marketing partner built specifically for aesthetic medicine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="p-6 bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift backdrop-blur-sm">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    {item.highlight}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white/10 rounded-lg p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">The Aurum Difference</h3>
            <p className="text-lg opacity-90 mb-6">
              While other agencies treat you like just another client, we become an extension of your practice. 
              Our AI-powered approach means better results, lower costs, and zero hassle for you.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Transparent pricing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Dedicated support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Results-driven approach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;