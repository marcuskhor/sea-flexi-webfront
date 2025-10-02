import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    office: "thailand"
  });

  const offices = [
    {
      id: "thailand",
      country: "Thailand",
      company: "SEA FLEXI LOGISTICS Co., Ltd.",
      address: "116/53 SSP Tower 2, Naranong Rd., Klongtoey, Klongtoey, Bangkok 10110, Thailand",
      email: "yarincha@seaflexi.com",
      phone: "+66-81-146-9595",
      secondaryPhone: "064-895-6826",
      contactPerson: "YARINCHA CHAROENPHANICH",
      contactTitle: "Business Development Executive",
      taxId: "0105565024128",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM"
    },
    {
      id: "malaysia",
      country: "Malaysia", 
      company: "SEA FLEXI LOGISTICS Sdn Bhd",
      address: "T03, Common Ground, Level 2, Moulmein Rise Shoppes, 9, Jalan Moulmein, Pulau Tikus, 10350 George Town, Pulau Pinang, Malaysia",
      email: "Jessicalee@seaflexi.com",
      phone: "+6012-420 2065",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      office: "thailand"
    });
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90">Get in touch with our offices worldwide</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Offices</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We have offices strategically located in Thailand and Malaysia to serve you better across Southeast Asia.
                </p>
              </div>

              <div className="space-y-6">
                {offices.map((office) => (
                  <Card key={office.id} className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary flex items-center gap-3">
                        <MapPin className="h-5 w-5" />
                        <span className="text-2xl">{office.id === 'thailand' ? '🇹🇭' : '🇲🇾'}</span>
                        {office.country} Office
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{office.company}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{office.address}</p>
                        {office.taxId && (
                          <p className="text-muted-foreground text-xs mt-1">Tax ID: {office.taxId}</p>
                        )}
                      </div>
                      
                      {office.contactPerson && (
                        <>
                          <Separator />
                          <div>
                            <h5 className="text-sm font-semibold text-foreground">{office.contactPerson}</h5>
                            <p className="text-xs text-muted-foreground">{office.contactTitle}</p>
                          </div>
                        </>
                      )}
                      
                      <Separator />
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <a href={`mailto:${office.email}`} className="text-primary hover:underline text-sm">
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <a href={`tel:${office.phone}`} className="text-primary hover:underline text-sm">
                            {office.phone}
                          </a>
                        </div>
                        {office.secondaryPhone && (
                          <div className="flex items-center gap-2 ml-6">
                            <Phone className="h-3 w-3 text-primary" />
                            <a href={`tel:${office.secondaryPhone}`} className="text-primary hover:underline text-xs">
                              {office.secondaryPhone} (Alt)
                            </a>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground text-sm">{office.hours}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-primary mb-2">24/7 Emergency Hotline</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    For urgent shipping matters and emergencies
                  </p>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:+60111122211" className="text-primary font-medium hover:underline">
                      +60 11112 22211
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="office" className="block text-sm font-medium text-foreground mb-2">
                          Preferred Office
                        </label>
                        <select
                          id="office"
                          name="office"
                          value={formData.office}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="thailand">Thailand Office</option>
                          <option value="malaysia">Malaysia Office</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Enter subject"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Enter your message..."
                        className="resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;