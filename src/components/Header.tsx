import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cartTotal, recentlyAdded } = useCart();

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

          {/* Desktop Shopping Cart */}
          <div className="hidden md:flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('order')}
              className={`relative p-2 ${recentlyAdded ? 'animate-bounce' : ''}`}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartTotal > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartTotal}
                </span>
              )}
            </Button>
            
            {/* Desktop Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Shopping Cart */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('order')}
              className={`relative p-2 ${recentlyAdded ? 'animate-bounce' : ''}`}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartTotal > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartTotal}
                </span>
              )}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Menu */}
        {isMenuOpen && (
          <div className="py-4 border-t border-border bg-background">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('order')}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                Order Now
              </button>
              <button 
                onClick={() => {
                  navigate('/full-range');
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                View Full Range
              </button>
              <button 
                onClick={() => {
                  navigate('/installation-instructions');
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                Installation Instructions
              </button>
              <button 
                onClick={() => {
                  navigate('/warranties-limitations');
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                Warranties & Limitations
              </button>
              <button 
                onClick={() => {
                  navigate('/stockists');
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                Stockists
              </button>
              <button 
                onClick={() => {
                  navigate('/waterproof-screed');
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                Can I waterproof under and over screed?
              </button>
              <button 
                onClick={() => {
                  navigate('/contact-us');
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                Contact Us
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