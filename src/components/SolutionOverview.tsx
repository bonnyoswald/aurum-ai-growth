import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, MessageCircle, Mail, Target, Star, BarChart3 } from "lucide-react";
import aiChatbotImage from "@/assets/ai-chatbot.jpg";

const SolutionOverview = () => {
  const benefits = [
    {
      icon: Bot,
      title: "AI-Generated Content",
      description: "Professional posts, reels, and blogs created weekly—tailored to your brand voice.",
      highlight: "Save 15+ hours weekly"
    },
    {
      icon: MessageCircle,
      title: "24/7 Smart Chatbot",
      description: "Answers questions and books appointments automatically, even after hours.",
      highlight: "Book while you sleep"
    },
    {
      icon: Mail,
      title: "Automated Nurturing",
      description: "Email and SMS sequences that convert leads and reduce no-shows by 40%.",
      highlight: "40% fewer no-shows"
    },
    {
      icon: Target,
      title: "Targeted Ad Campaigns",
      description: "Data-driven ads on Google and social media that attract your ideal patients.",
      highlight: "Higher quality leads"
    },
    {
      icon: Star,
      title: "Reputation Management",
      description: "Automated review requests and response management to build 5-star reputation.",
      highlight: "Protect your brand"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Weekly dashboards showing exactly what's working and your ROI.",
      highlight: "Transparent results"
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            AI-Powered Solution
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The AI Marketing System Built for{" "}
            <span className="text-gradient-primary">Aesthetic Medicine</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We combine proven marketing strategies with cutting-edge AI to automate your patient acquisition—so you can focus on delivering exceptional care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src={aiChatbotImage} 
              alt="AI chatbot for medical practice appointment booking" 
              className="rounded-lg shadow-strong w-full"
            />
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold shadow-medium">
              AI-Powered
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Marketing That Works While You Sleep
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our AI-powered platform handles content creation, patient communication, and lead nurturing automatically. 
              No more manual posting, missed follow-ups, or wasted ad spend.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-foreground font-semibold">HIPAA-compliant automation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-foreground font-semibold">Proven in aesthetic medicine</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-foreground font-semibold">Results guaranteed in 90 days</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="p-6 hover-lift bg-white shadow-medium border-0">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    {benefit.highlight}
                  </Badge>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;