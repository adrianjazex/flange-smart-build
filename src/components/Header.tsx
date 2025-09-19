import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, ShoppingCart, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInstallationDropdownOpen, setIsInstallationDropdownOpen] = useState(false);
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
          <div 
            className="flex items-end space-x-1 font-bold text-2xl cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          >
            <img 
              src="/lovable-uploads/90858696-1d7b-4d95-9b61-a8f32ad5b9da.png" 
              alt="Jazex Logo"
              className="h-12 w-12 object-contain"
              style={{ filter: 'drop-shadow(0 0 0 transparent)' }}
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
              onClick={() => scrollToSection('shopping-cart')}
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
              onClick={() => scrollToSection('shopping-cart')}
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
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-background z-40 overflow-y-auto">
            <div className="container mx-auto px-4 py-4">
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
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                Order products
              </button>
              <button 
                onClick={() => {
                  navigate('/full-range');
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                Product range
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
              <div className="flex flex-col">
                <button 
                  onClick={() => setIsInstallationDropdownOpen(!isInstallationDropdownOpen)}
                  className="flex items-center justify-between text-left text-foreground hover:text-primary font-medium transition-colors"
                >
                  Installation Instructions
                  <ChevronDown className={`h-4 w-4 transition-transform ${isInstallationDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isInstallationDropdownOpen && (
                  <div className="ml-4 mt-2 flex flex-col space-y-2">
                    <button 
                      onClick={() => {
                        navigate('/rubber-ring-installation');
                        setIsMenuOpen(false);
                        setIsInstallationDropdownOpen(false);
                      }}
                      className="text-left text-foreground hover:text-primary font-medium transition-colors py-1 text-sm"
                    >
                      Rubber ring seal installation
                    </button>
                    <button 
                      onClick={() => {
                        navigate('/solvent-weld-installation');
                        setIsMenuOpen(false);
                        setIsInstallationDropdownOpen(false);
                      }}
                      className="text-left text-foreground hover:text-primary font-medium transition-colors py-1 text-sm"
                    >
                      Adjustable solvent weld sleeve
                    </button>
                  </div>
                )}
              </div>
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
                  navigate('/contact-us');
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary font-medium transition-colors"
              >
                Contact Us
              </button>
            </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;