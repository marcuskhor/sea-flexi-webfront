import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, BarChart3, CheckCircle, Clock, Award, DollarSign, HeadphonesIcon, TrendingUp, FileCheck, PackageCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const WhyChooseUs = () => {
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

  const keyBenefits = [
    {
      icon: DollarSign,
      title: "Cost-Effective Solutions",
      description: "Competitive pricing with transparent rates and no hidden fees. We help you optimize logistics costs while maintaining quality."
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "2+ years of experience handling diverse cargo types and complex supply chain requirements across Southeast Asia."
    },
    {
      icon: HeadphonesIcon,
      title: "Responsive Communication",
      description: "Quick response times, proactive updates, and dedicated support ensure you're always informed about your shipments."
    },
    {
      icon: TrendingUp,
      title: "Scalable Services",
      description: "From small LCL shipments to full container loads, we scale with your business needs and growth."
    },
    {
      icon: FileCheck,
      title: "Documentation Support",
      description: "Complete assistance with customs paperwork, permits, and compliance documentation for hassle-free shipping."
    },
    {
      icon: PackageCheck,
      title: "Quality Assurance",
      description: "Rigorous quality checks at every stage ensure your cargo arrives in perfect condition, on time, every time."
    }
  ];

  const testimonials = [
    {
      quote: "Sea Flexi transformed our supply chain operations. Their technology platform gives us complete visibility and control over our shipments.",
      author: "Somchai Wongwiwat",
      role: "Supply Chain Director",
      company: "TechCorp Global"
    },
    {
      quote: "The reliability and customer service are exceptional. We've reduced our shipping costs by 25% while improving delivery times.",
      author: "Lee Wei Chen",
      role: "Logistics Manager",
      company: "Global Retail Inc"
    },
    {
      quote: "Their expertise in customs clearance has eliminated delays and compliance issues. Highly recommend for international shipping.",
      author: "Apinya Srisawat",
      role: "Import/Export Specialist",
      company: "Manufacturing Plus"
    }
  ];

  const comparisons = [
    {
      feature: "Real-Time Tracking",
      seaFlexi: "✓ Advanced GPS & Updates",
      others: "Basic tracking only"
    },
    {
      feature: "Customer Support",
      seaFlexi: "✓ 24/7 Dedicated Team",
      others: "Business hours only"
    },
    {
      feature: "Compliance",
      seaFlexi: "✓ 100% Compliance Record",
      others: "Occasional delays"
    },
    {
      feature: "Technology Platform",
      seaFlexi: "✓ Proprietary System",
      others: "Third-party tools"
    },
    {
      feature: "Regional Coverage",
      seaFlexi: "✓ Thailand & Malaysia",
      others: "Limited presence"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Sea Flexi?</h1>
          <p className="text-xl md:text-2xl opacity-90">Experience the Sea Flexi Advantage</p>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Our Competitive Advantages
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience the difference with our proven track record, cutting-edge technology, 
                and unwavering commitment to your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Additional Benefits
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                More reasons why businesses trust Sea Flexi for their logistics needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyBenefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-3">{benefit.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                How We Compare
              </h2>
              <p className="text-xl text-muted-foreground">
                See what sets Sea Flexi apart from traditional logistics providers
              </p>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-primary font-semibold">Feature</th>
                        <th className="px-6 py-4 text-left text-accent font-semibold">Sea Flexi</th>
                        <th className="px-6 py-4 text-left text-muted-foreground font-semibold">Others</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisons.map((comparison, index) => (
                        <tr key={index} className="border-t border-border hover:bg-muted/30 transition-colors">
                          <td className="px-6 py-4 font-medium text-foreground">{comparison.feature}</td>
                          <td className="px-6 py-4 text-accent font-medium">{comparison.seaFlexi}</td>
                          <td className="px-6 py-4 text-muted-foreground">{comparison.others}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Don't just take our word for it. Here's what industry leaders say about partnering with Sea Flexi.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-l-4 border-l-accent hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="flex text-accent mb-3">
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
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Our Track Record
              </h2>
              <p className="text-xl text-muted-foreground">
                Numbers that speak for themselves
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-card rounded-xl p-6 border border-accent/20 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-accent mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">TEUs Handled & Growing</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-accent/20 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-accent/20 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-accent mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-accent/20 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-accent mb-2">2</div>
                <div className="text-sm text-muted-foreground">Offices</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
