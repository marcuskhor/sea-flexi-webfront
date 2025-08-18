import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Truck, Package, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: "Door to Door Service (B2B)",
      description: "Complete end-to-end logistics solutions tailored for business-to-business operations. We handle your cargo from pickup to final delivery.",
      features: ["Complete supply chain management", "B2B focused solutions", "Real-time tracking", "Dedicated account management"]
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Sea Flexi Group handles FCL and LCL services worldwide. We can support general cargo, dangerous cargo, frozen food and special cargo from origins to various countries. Especially Korea, China, Malaysia, Singapore, Indonesia, Taiwan, India, UAE, etc. We proudly offer you the best solutions based on your requirements. Also offer the competitive rates from core shipping line partners.",
      features: ["Full Container Load (FCL)", "Less Container Load (LCL)", "General & dangerous cargo", "Frozen food & special cargo", "Korea, China, Malaysia, Singapore routes", "Competitive rates from core partners"]
    },
    {
      icon: Package,
      title: "Flexibag & Installation",
      description: "Sea Flexi Group offers Flexi Tank for your liquid goods. We are one of the market that have team installing flexi bag inside container.",
      features: ["Professional installation team", "Flexi tank solutions", "Liquid goods transport", "Market-leading expertise"]
    },
    {
      icon: Package,
      title: "LCL (Malaysia)",
      description: "Less than Container Load services specifically designed for Malaysian market with cost-effective consolidation and regular schedules.",
      features: ["Malaysian market expertise", "Regular sailing schedules", "Cost-effective consolidation", "Local customs knowledge"]
    },
    {
      icon: Truck,
      title: "Crossborder Trucking",
      description: "Sea Flexi Group offers international door-to-door service by long haul trucking from Thailand to Malaysia, Singapore, Laos, Myanmar, Cambodia, Vietnam, and China.",
      features: ["Thailand to ASEAN countries", "Door-to-door service", "Long haul trucking", "Coverage: Malaysia, Singapore, Laos, Myanmar, Cambodia, Vietnam, China"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From ocean freight to final delivery, we provide comprehensive logistics solutions 
              that streamline your supply chain and accelerate your business growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every business is unique. Let our experts design a tailored logistics strategy 
              that meets your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Request Consultation
              </Button>
              <Button variant="outline" size="lg">
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;