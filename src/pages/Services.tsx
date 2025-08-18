import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Truck, Package, MapPin, Droplets, ArrowRight, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Door to Door Service (B2B)",
      description: "Complete end-to-end logistics solutions tailored for business-to-business operations. We handle your cargo from pickup at origin to final delivery at destination, ensuring seamless supply chain management.",
      features: ["Complete supply chain management", "B2B focused solutions", "Real-time tracking", "Dedicated account management", "Flexible scheduling", "Insurance coverage"]
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Comprehensive sea freight solutions with FCL and LCL options. Our extensive global network ensures competitive rates and reliable transit times across all major shipping routes worldwide.",
      features: ["Full Container Load (FCL)", "Less Container Load (LCL)", "Global shipping routes", "Port-to-port delivery", "Competitive pricing", "Transit time optimization"]
    },
    {
      icon: Droplets,
      title: "Flexibag & Installation",
      description: "Specialized flexibag solutions for bulk liquid transportation. We provide professional installation services and ensure safe, efficient transport of non-hazardous liquids in standard containers.",
      features: ["Professional installation", "Bulk liquid transport", "Container optimization", "Safety compliance", "Quality assurance", "Technical support"]
    },
    {
      icon: Package,
      title: "LCL (Malaysia)",
      description: "Less than Container Load services specifically designed for Malaysian market. Cost-effective consolidation services for smaller shipments with regular sailing schedules and competitive rates.",
      features: ["Malaysian market expertise", "Regular sailing schedules", "Cost-effective consolidation", "Local customs knowledge", "Door-to-door delivery", "Competitive rates"]
    },
    {
      icon: MapPin,
      title: "Crossborder Trucking",
      description: "Efficient cross-border trucking solutions connecting different countries and regions. We handle customs procedures, documentation, and ensure timely delivery across international borders.",
      features: ["International border crossings", "Customs clearance", "Documentation handling", "Multi-country permits", "Route optimization", "24/7 tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive logistics solutions designed to meet your specific business needs. 
              From door-to-door service to specialized transport, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
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
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Choose Our Services */}
            <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Why Choose Sea Flexi Services?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Ship className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Global Network</h3>
                  <p className="text-sm text-muted-foreground">Extensive worldwide connections for seamless logistics</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Specialized Solutions</h3>
                  <p className="text-sm text-muted-foreground">Tailored services for unique business requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Reliable Delivery</h3>
                  <p className="text-sm text-muted-foreground">On-time delivery with real-time tracking</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">Round-the-clock customer service and assistance</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Optimize Your Logistics?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let our experts help you choose the right combination of services 
                to streamline your supply chain and reduce costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +1 (555) 123-4567
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;