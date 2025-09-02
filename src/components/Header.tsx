import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-steel">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 font-bold text-2xl">
            <img 
              src="/lovable-uploads/90858696-1d7b-4d95-9b61-a8f32ad5b9da.png" 
              alt="Jazex Logo"
              className="h-8 w-8"
            />
            <div>
              <span className="text-black">JAZ</span>
              <span className="text-teal-500">EX</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('stockists')}
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Stockists
            </button>
            <button 
              onClick={() => scrollToSection('installation')}
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Installation
            </button>
            <button 
              onClick={() => scrollToSection('order')}
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Order
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>0411 430 652</span>
            </div>
            <Button 
              onClick={() => scrollToSection('order')}
              className="bg-gradient-primary hover:shadow-construction"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('stockists')}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                Stockists
              </button>
              <button 
                onClick={() => scrollToSection('installation')}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                Installation Guide
              </button>
              <button 
                onClick={() => scrollToSection('order')}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                Order Now
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <div className="flex flex-col">
                    <span>Zach: 0411 430 652</span>
                    <span>Adrian: 0413 428 228</span>
                    <span>John: 0419 750 066</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>sales@jazex.com.au</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;