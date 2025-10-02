import { Button } from "@/components/ui/button";
import { Ship, Truck, Package, MapPin, Droplets, ArrowRight, Phone, Mail, CheckCircle, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import cert1 from "@/assets/cert1.png";
import cert2 from "@/assets/cert2.png";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Sea Flexi Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive logistics solutions designed to meet your specific business needs. 
              From door-to-door service to specialized transport, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Door to Door Service Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary">Door to Door Service (B2B)</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Complete end-to-end logistics solutions tailored for business-to-business operations. 
                  We handle your cargo from pickup at origin to final delivery at destination, ensuring 
                  seamless supply chain management.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Complete supply chain management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>B2B focused solutions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Real-time tracking</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Dedicated account management</span>
                  </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get B2B Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">Why Choose Our B2B Service?</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-primary mb-2">Flexible Scheduling</h4>
                      <p className="text-sm text-muted-foreground">Pickup and delivery times that work with your business schedule</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-primary mb-2">Insurance Coverage</h4>
                      <p className="text-sm text-muted-foreground">Full cargo protection from origin to destination</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-primary mb-2">Custom Solutions</h4>
                      <p className="text-sm text-muted-foreground">Tailored logistics strategies for your unique needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ocean Freight Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:order-1">
                <div className="text-center">
                  <Ship className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">Global Ocean Network</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-accent">50+</div>
                      <div className="text-sm text-muted-foreground">Ports Worldwide</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-accent">99%</div>
                      <div className="text-sm text-muted-foreground">On-Time Performance</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-accent">24/7</div>
                      <div className="text-sm text-muted-foreground">Tracking Support</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-accent">15+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Ship className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary">Ocean Freight</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Sea Flexi Group handles FCL and LCL services worldwide. We can support general cargo, dangerous 
                  cargo, frozen food and special cargo from origins to various countries. Especially Korea, China, Malaysia, Singapore,
                  Indonesia, Taiwan, India, UAE, etc. We proudly offer you the best solutions based on your requirements. Also offer the competitive rates
                  from core shipping line partners.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Full Container Load (FCL)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Less Container Load (LCL)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>General & dangerous cargo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Frozen food & special cargo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Korea, China, Malaysia, Singapore routes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Competitive rates from core partners</span>
                  </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Ocean Freight Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexibag Section with Certificate Upload */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary">Flexibag & Installation</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Sea Flexi Group offers Flexi Tank for your liquid goods. 
                We are one of the market that have team installing flexi bag inside container.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6">
                    <CheckCircle className="h-5 w-5 text-accent mb-4" />
                    <h3 className="font-semibold text-primary mb-2">Professional Installation</h3>
                    <p className="text-sm text-muted-foreground">Expert installation by certified technicians</p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6">
                    <CheckCircle className="h-5 w-5 text-accent mb-4" />
                    <h3 className="font-semibold text-primary mb-2">Bulk Liquid Transport</h3>
                    <p className="text-sm text-muted-foreground">Safe transport of various non-hazardous liquids</p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6">
                    <CheckCircle className="h-5 w-5 text-accent mb-4" />
                    <h3 className="font-semibold text-primary mb-2">Container Optimization</h3>
                    <p className="text-sm text-muted-foreground">Maximum container utilization and efficiency</p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6">
                    <CheckCircle className="h-5 w-5 text-accent mb-4" />
                    <h3 className="font-semibold text-primary mb-2">Safety Compliance</h3>
                    <p className="text-sm text-muted-foreground">Full compliance with international safety standards</p>
                  </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Flexibag Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Certificates Display */}
              <div className="bg-white border border-primary/20 rounded-2xl p-8 text-center shadow-lg">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-6">Our Certifications</h3>
                
                <div className="grid gap-6">
                  <div className="bg-muted/20 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2 text-sm">The Container Owners Association in 2022</h4>
                    <img 
                      src={cert1} 
                      alt="The Container Owners Association in 2022" 
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  
                  <div className="bg-muted/20 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2 text-sm">The Container Owners Association in 2023</h4>
                    <img 
                      src={cert2} 
                      alt="The Container Owners Association in 2023" 
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Certified professionals ensuring safe, compliant, and quality-assured flexibag installations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LCL International Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary">LCL (International)</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Less than Container Load services for worldwide destinations. 
                  Cost-effective consolidation services for smaller shipments with regular sailing schedules to major international ports and competitive rates.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Global coverage</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Regular sailing schedules</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Cost-effective consolidation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>International customs expertise</span>
                  </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get International LCL Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">International Advantages</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-accent font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Local Expertise</h4>
                      <p className="text-sm text-muted-foreground">Deep understanding of Malaysian customs and regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-accent font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Strategic Location</h4>
                      <p className="text-sm text-muted-foreground">Gateway to Southeast Asia with excellent connectivity</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-accent font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Competitive Rates</h4>
                      <p className="text-sm text-muted-foreground">Best-in-market pricing for Malaysian routes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crossborder Trucking Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:order-1">
                <div className="text-center mb-6">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary">Cross-Border Network</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Malaysia ↔ Singapore</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Malaysia ↔ Thailand</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Regional ASEAN Routes</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Custom Route Planning</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary">Crossborder Trucking</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Sea Flexi Group offers international door-to-door service by long haul trucking from Thailand to
                  Malaysia, Singapore, Laos, Myanmar, Cambodia, Vietnam, and China.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Thailand to ASEAN countries</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Door-to-door service</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Long haul trucking</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span>Malaysia, Singapore, Laos, Myanmar, Cambodia, Vietnam, China</span>
                  </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Trucking Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Optimize Your Logistics?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts help you choose the right combination of services 
              to streamline your supply chain and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-4 w-4" />
                Call Now: +6012-420 2065
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;