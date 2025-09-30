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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Aesthetic Practices
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the growing community of dermatology and aesthetic clinics transforming their patient acquisition with AI-powered marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center hover-lift bg-white shadow-medium">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4`}>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground leading-tight">{stat.label}</p>
              </Card>
            );
          })}
        </div>
        
        {/* Testimonial Snippet */}
        <div className="mt-12 text-center">
          <blockquote className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
            "Aurum transformed our marketing from a time-drain to a profit center. The AI chatbot alone books 30+ appointments monthly while we sleep."
          </blockquote>
          <cite className="text-sm font-semibold text-foreground mt-4 block">
            — Dr. Sarah Chen, Beverly Hills Dermatology
          </cite>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;