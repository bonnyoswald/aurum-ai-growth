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
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Most Practices Are{" "}
            <span className="text-destructive">Missing Out on Patients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            You're amazing at patient care, but marketing feels like another full-time job. Sound familiar?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="p-6 hover-lift bg-white shadow-soft border-l-4 border-l-destructive rounded-xl">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <IconComponent className="w-5 h-5 text-destructive mr-2" />
                      <h3 className="text-lg font-bold text-foreground">{problem.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                      {problem.description}
                    </p>
                    <div className="text-xs font-semibold text-destructive">
                      Impact: {problem.impact}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-base text-muted-foreground mb-1">
            Sound exhausting? There's a better way.
          </p>
          <p className="text-lg font-semibold text-foreground">
            Let AI handle the marketing while you focus on patients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;