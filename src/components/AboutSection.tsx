import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced logistics professionals understand the complexities of global trade and supply chain management."
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "2+ years of excellence in international shipping and logistics with industry-leading certifications."
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

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              About Sea Flexi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded with a vision to revolutionize global logistics, Sea Flexi has grown to become 
              a trusted partner for businesses worldwide, delivering innovative supply chain solutions 
              that drive growth and efficiency.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Connecting the World Through Seamless Logistics
              </h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                At Sea Flexi, we understand that your success depends on reliable, efficient logistics. 
                That's why we've built a comprehensive platform that brings together ocean freight, 
                air cargo, customs clearance, and last-mile delivery under one roof.
              </p>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Our technology-driven approach ensures complete visibility throughout your supply chain, 
                giving you the control and insights needed to make informed decisions and optimize your operations.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-card rounded-lg border border-accent/20">
                  <div className="text-2xl font-bold text-accent mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-accent/20">
                  <div className="text-2xl font-bold text-accent mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">TEUs Handled & Growing</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-primary mb-3">Our Mission</h4>
                  <p className="text-foreground">
                    To simplify global trade by providing innovative, reliable, and cost-effective 
                    logistics solutions that empower businesses to reach new markets and achieve sustainable growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-primary mb-3">Our Vision</h4>
                  <p className="text-foreground">
                    To be the world's most trusted logistics partner, connecting businesses across continents 
                    through cutting-edge technology and unparalleled service excellence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features Grid */}
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
  );
};

export default AboutSection;