import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, Clock, Target, Lightbulb, Heart, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced logistics professionals understand the complexities of global trade and supply chain management."
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "Over 15 years of excellence in international shipping and logistics with industry-leading certifications."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive network of partners and agents across all major trade routes and destinations worldwide."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support and real-time tracking to keep you informed every step of the way."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Customer First",
      description: "We put our clients at the heart of everything we do, delivering solutions tailored to their unique needs."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously investing in technology and processes to stay ahead of industry trends and deliver better results."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building trust through transparency, honesty, and ethical business practices in all our operations."
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "Committed to delivering exceptional service quality and continuous improvement in everything we do."
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Founded",
      description: "Sea Flexi Logistics established with a vision to revolutionize logistics in Southeast Asia."
    },
    {
      year: "2012",
      title: "Regional Expansion",
      description: "Opened Malaysia office, expanding our reach across Southeast Asian markets."
    },
    {
      year: "2016",
      title: "Technology Innovation",
      description: "Launched our proprietary tracking platform for real-time shipment visibility."
    },
    {
      year: "2020",
      title: "Industry Recognition",
      description: "Received ISO certification and multiple industry awards for service excellence."
    },
    {
      year: "2024",
      title: "Continuous Growth",
      description: "Serving 100+ clients across Southeast Asia with comprehensive logistics solutions."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sea Flexi</h1>
          <p className="text-xl md:text-2xl opacity-90">Connecting the World Through Seamless Logistics</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                  Your Trusted Logistics Partner Since 2008
                </h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  At Sea Flexi, we understand that your success depends on reliable, efficient logistics. 
                  That's why we've built a comprehensive platform that brings together ocean freight, 
                  flexibag installation, customs clearance, and cross-border trucking under one roof.
                </p>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  With offices in Thailand and Malaysia, we provide strategic coverage across Southeast Asia, 
                  ensuring your cargo reaches its destination safely and on time.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Our technology-driven approach ensures complete visibility throughout your supply chain, 
                  giving you the control and insights needed to make informed decisions and optimize your operations.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-primary mb-3">Our Mission</h4>
                    <p className="text-foreground leading-relaxed">
                      To simplify global trade by providing innovative, reliable, and cost-effective 
                      logistics solutions that empower businesses to reach new markets and achieve sustainable growth.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-primary mb-3">Our Vision</h4>
                    <p className="text-foreground leading-relaxed">
                      To be Southeast Asia's most trusted logistics partner, connecting businesses across continents 
                      through cutting-edge technology and unparalleled service excellence.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="text-3xl font-bold text-accent mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="text-3xl font-bold text-accent mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our every decision and action
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-3">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Milestones that shaped Sea Flexi into the logistics leader we are today
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="border-l-4 border-l-accent hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="text-3xl font-bold text-accent">{milestone.year}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-primary mb-2">{milestone.title}</h4>
                        <p className="text-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The advantages that make Sea Flexi your ideal logistics partner
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                      <feature.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-3">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
