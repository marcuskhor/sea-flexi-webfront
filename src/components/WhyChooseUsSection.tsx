import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, BarChart3, CheckCircle, Clock } from "lucide-react";

const WhyChooseUsSection = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Reliability & Security",
      description: "Your cargo is protected with comprehensive insurance coverage and state-of-the-art security protocols throughout the entire journey.",
      stats: "99.8% Safe Delivery Rate"
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "Optimized routing and streamlined processes ensure faster transit times while maintaining cost-effectiveness for your shipments.",
      stats: "40% Faster Processing"
    },
    {
      icon: BarChart3,
      title: "Real-Time Tracking",
      description: "Advanced tracking technology provides complete visibility of your shipments with instant updates and detailed analytics.",
      stats: "Live GPS Tracking"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated account managers and logistics specialists provide personalized service and industry expertise for your unique needs.",
      stats: "24/7 Expert Support"
    },
    {
      icon: CheckCircle,
      title: "Compliance Excellence",
      description: "Stay compliant with international regulations through our expertise in customs, documentation, and trade requirements.",
      stats: "100% Compliance Record"
    },
    {
      icon: Clock,
      title: "On-Time Performance",
      description: "Consistent delivery schedules with proactive communication about any potential delays or route changes.",
      stats: "98.5% On-Time Delivery"
    }
  ];

  const testimonials = [
    {
      quote: "Sea Flexi transformed our supply chain operations. Their technology platform gives us complete visibility and control over our shipments.",
      author: "Sarah Johnson",
      role: "Supply Chain Director",
      company: "TechCorp Global"
    },
    {
      quote: "The reliability and customer service are exceptional. We've reduced our shipping costs by 25% while improving delivery times.",
      author: "Michael Chen",
      role: "Logistics Manager",
      company: "Global Retail Inc"
    },
    {
      quote: "Their expertise in customs clearance has eliminated delays and compliance issues. Highly recommend for international shipping.",
      author: "Emma Rodriguez",
      role: "Import/Export Specialist",
      company: "Manufacturing Plus"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              Why Choose Sea Flexi?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the difference with our proven track record, cutting-edge technology, 
              and unwavering commitment to your success.
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {advantages.map((advantage, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                      <advantage.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-primary mb-2">{advantage.title}</h4>
                      <div className="text-sm font-medium text-accent mb-3">{advantage.stats}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                  
                  {/* Accent border */}
                  <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <div className="bg-card rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-primary mb-4">
                What Our Clients Say
              </h3>
              <p className="text-lg text-muted-foreground">
                Don't just take our word for it. Here's what industry leaders say about partnering with Sea Flexi.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="flex text-accent mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-lg">★</span>
                        ))}
                      </div>
                      <p className="text-foreground italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="font-semibold text-primary">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-accent font-medium">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">500K+</div>
              <div className="text-sm text-muted-foreground">Shipments Delivered</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">2</div>
              <div className="text-sm text-muted-foreground">Offices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;