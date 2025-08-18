import { useState } from "react";
import { Menu, X, Ship, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import seaflexi_logo from "@/assets/seaflexi_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/services" },
    { name: "Why Choose Us", href: "/#why-choose-us" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 min-w-0 flex-shrink-0">
<<<<<<< HEAD
            <img 
              src={seaflexi_logo} 
              alt="Sea Flexi Logistics" 
              className="h-6 w-6 sm:h-14 sm:w-14 text-primary flex-shrink-0"
            />
            <span className="text-2xl font-bold text-primary truncate">Sea Flexi</span>
=======
            <Ship className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
            <span className="text-lg sm:text-2xl font-bold text-primary truncate">Sea Flexi</span>
>>>>>>> 4b9bc41df41162520c7a02680793fd14ef4c0e0c
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+60 11112 22211</span>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-foreground hover:text-accent transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 border-t border-border mt-3 pt-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;