import { Ship, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Door to Door Service (B2B)", href: "/services" },
        { name: "Ocean Freight", href: "/services" },
        { name: "Flexibag & Installation", href: "/services" },
        { name: "LCL (International)", href: "/services" },
        { name: "Crossborder Trucking", href: "/services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Why Choose Us", href: "/why-choose-us" },
        { name: "Careers", href: "#" },
        { name: "News & Updates", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Partners", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Track Shipment", href: "#" },
        { name: "Customer Portal", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Support Center", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Compliance", href: "#" },
        { name: "Insurance", href: "#" },
        { name: "Liability", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Ship className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">Sea Flexi</span>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted global logistics partner, connecting businesses worldwide 
              through innovative supply chain solutions and unparalleled service excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  T03, Common Ground, Level 2, Moulmein Rise Shoppes, 9, Jalan Moulmein, Pulau Tikus, 10350 George Town, Pulau Pinang, Malaysia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  +6012-420 2065
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Jessicalee@seaflexi.com
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4 text-accent">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-accent">Stay Updated</h4>
              <p className="text-primary-foreground/80">
                Subscribe to our newsletter for the latest industry insights and Sea Flexi updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} Sea Flexi. All rights reserved. | Connecting the world through logistics excellence.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-foreground/80 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-primary-foreground/10 hover:bg-accent/20 rounded-full flex items-center justify-center transition-colors duration-200 group"
                >
                  <social.icon className="h-4 w-4 text-primary-foreground/80 group-hover:text-accent transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Additional Legal Links */}
          <div className="mt-4 pt-4 border-t border-primary-foreground/10">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-primary-foreground/60">
              <span>ISO 9001:2015 Certified</span>
              <span>•</span>
              <span>IATA & FIATA Member</span>
              <span>•</span>
              <span>Customs-Trade Partnership Against Terrorism (C-TPAT)</span>
              <span>•</span>
              <span>Authorized Economic Operator (AEO)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;