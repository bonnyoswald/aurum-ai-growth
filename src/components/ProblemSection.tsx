import { Card } from "@/components/ui/card";
import { X, TrendingDown, Clock, Target } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Inconsistent Social Media",
      description: "You post occasionally, but engagement is low and you're not attracting new patients.",
      impact: "Lost opportunities daily"
    },
    {
      icon: Target,
      title: "Wasted Ad Spend",
      description: "You've tried Facebook and Google ads, but the leads are low-quality or don't convert.",
      impact: "Thousands in wasted budget"
    },
    {
      icon: Clock,
      title: "Manual Follow-Ups",
      description: "Your team spends hours calling no-shows and chasing leads that go cold.",
      impact: "20+ hours weekly lost"
    },
    {
      icon: X,
      title: "No Marketing Strategy",
      description: "You're doing random tactics without a cohesive system or clear ROI tracking.",
      impact: "Uncertain growth path"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Most Aesthetic Clinics Are{" "}
            <span className="text-destructive">Leaving Money on the Table</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While you're focused on delivering exceptional patient care, your marketing is struggling to keep up. Sound familiar?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="p-8 hover-lift bg-white shadow-soft border-l-4 border-l-destructive">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-destructive rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <IconComponent className="w-6 h-6 text-destructive mr-3" />
                      <h3 className="text-xl font-bold text-foreground">{problem.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      {problem.description}
                    </p>
                    <div className="text-sm font-semibold text-destructive">
                      Impact: {problem.impact}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-2">
            The result? Your competitors are growing while you're stuck.
          </p>
          <p className="text-xl font-semibold text-foreground">
            It's time for a different approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;