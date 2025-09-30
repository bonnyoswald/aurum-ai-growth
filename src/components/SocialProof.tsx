import { Card } from "@/components/ui/card";
import { Star, Users, Calendar, TrendingUp } from "lucide-react";

const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      number: "300+",
      label: "Patient Bookings Generated Monthly",
      color: "text-accent"
    },
    {
      icon: Calendar,
      number: "87%",
      label: "Average Appointment Show Rate",
      color: "text-secondary"
    },
    {
      icon: Star,
      number: "4.8★",
      label: "Average Client Review Rating",
      color: "text-warning"
    },
    {
      icon: TrendingUp,
      number: "40+",
      label: "Aesthetic Practices Transformed",
      color: "text-primary"
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Trusted by Growing Practices Everywhere
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Real results from real practices who've transformed their patient acquisition.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-4 text-center hover-lift bg-white shadow-soft rounded-xl">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted mb-3`}>
                  <IconComponent className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
              </Card>
            );
          })}
        </div>
        
        {/* Testimonial Snippet */}
        <div className="mt-8 text-center">
          <blockquote className="text-base italic text-muted-foreground max-w-3xl mx-auto">
            "Aurum transformed our marketing from a time-drain to a profit center. The AI chatbot alone books 30+ appointments monthly while we sleep."
          </blockquote>
          <cite className="text-sm font-semibold text-foreground mt-3 block">
            — Dr. Sarah Chen, Beverly Hills Dermatology
          </cite>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;