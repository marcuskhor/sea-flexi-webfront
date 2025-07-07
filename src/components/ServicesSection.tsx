import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Plane, Truck, Package, FileCheck, Warehouse, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Comprehensive sea freight solutions with FCL and LCL options. Our extensive network ensures competitive rates and reliable transit times across all major shipping routes.",
      features: ["Full Container Load (FCL)", "Less Container Load (LCL)", "Global routing options", "Port-to-port delivery"]
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments. We offer door-to-door delivery with real-time tracking and express handling options.",
      features: ["Express delivery", "Standard air freight", "Dangerous goods handling", "Temperature controlled"]
    },
    {
      icon: Truck,
      title: "Ground Transportation",
      description: "Efficient trucking and inland transportation services connecting ports, airports, and final destinations with flexible scheduling and route optimization.",
      features: ["Local delivery", "Long-haul trucking", "Cross-border transport", "Last-mile delivery"]
    },
    {
      icon: FileCheck,
      title: "Customs Clearance",
      description: "Expert customs brokerage services to ensure smooth clearance of your goods. Our specialists handle documentation, compliance, and duty optimization.",
      features: ["Import/export clearance", "Duty optimization", "Compliance management", "Documentation support"]
    },
    {
      icon: Warehouse,
      title: "Warehousing & Distribution",
      description: "Secure storage and distribution facilities with inventory management, order fulfillment, and value-added services tailored to your needs.",
      features: ["Inventory management", "Order fulfillment", "Pick & pack services", "Cross-docking"]
    },
    {
      icon: Package,
      title: "Supply Chain Management",
      description: "End-to-end supply chain optimization with advanced analytics, demand forecasting, and integrated logistics solutions for maximum efficiency.",
      features: ["Supply chain design", "Demand forecasting", "Vendor management", "Performance analytics"]
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
                    Learn More
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