import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ship, Globe, Package, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const OceanFreight = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Full Container Load (FCL)",
      description: "Exclusive container use for large shipments, ensuring maximum security and efficiency for your cargo.",
      icon: Package
    },
    {
      title: "Less Container Load (LCL)",
      description: "Cost-effective consolidation services for smaller shipments, sharing container space with other cargo.",
      icon: Package
    },
    {
      title: "General & Dangerous Cargo",
      description: "Specialized handling for all types of cargo including hazardous materials with proper certifications and safety protocols.",
      icon: Shield
    },
    {
      title: "Frozen Food & Special Cargo",
      description: "Temperature-controlled containers and specialized equipment for perishable goods and sensitive cargo.",
      icon: Package
    }
  ];

  const routes = [
    "Korea",
    "China",
    "Malaysia",
    "Singapore",
    "Indonesia",
    "Taiwan",
    "India",
    "UAE"
  ];

  const benefits = [
    "Competitive rates from core shipping line partners",
    "Real-time shipment tracking",
    "Door-to-port and port-to-port services",
    "Custom clearance assistance",
    "Dedicated account management",
    "Flexible scheduling options",
    "Comprehensive cargo insurance",
    "24/7 customer support"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex items-center justify-center mb-4">
            <Ship className="h-16 w-16 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ocean Freight Services</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Global maritime shipping solutions connecting you to major ports worldwide
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Comprehensive Ocean Freight Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sea Flexi Group handles FCL and LCL services worldwide. We can support general cargo, 
              dangerous cargo, frozen food and special cargo from origins to various countries. 
              Especially Korea, China, Malaysia, Singapore, Indonesia, Taiwan, India, UAE, etc. 
              We proudly offer you the best solutions based on your requirements and competitive 
              rates from our core shipping line partners.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Our Ocean Freight Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Routes Section */}
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">Global Route Coverage</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide reliable ocean freight services to and from major ports across Asia and the Middle East.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {routes.map((route, index) => (
                <div 
                  key={index} 
                  className="px-6 py-3 bg-background rounded-full border border-primary/20 text-primary font-medium"
                >
                  {route}
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Why Choose Our Ocean Freight?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-8 md:p-12">
            <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-4">
              Ready to Ship?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a competitive quote for your ocean freight needs. Our team of experts is ready 
              to provide you with the best shipping solutions tailored to your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => navigate('/contact')}
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Contact Our Team
              </Button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OceanFreight;
