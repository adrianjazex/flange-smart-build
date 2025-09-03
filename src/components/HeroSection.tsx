import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Wrench } from "lucide-react";

const HeroSection = () => {

  const scrollToProducts = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section className="relative min-h-[85vh] bg-gradient-hero flex items-end justify-center pt-24 pb-4">
      <div className="absolute inset-0 bg-primary/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Content */}
          <div>
            <div className="mb-6">
               <h1 className="text-4xl lg:text-6xl font-orbitron font-black mb-4 leading-tight">
                <span className="text-accent">UNDER OVER</span><sup className="text-accent text-2xl lg:text-3xl font-bold ml-1 animate-pulse">™</sup><br />
                <span className="text-white">PUDDLE FLANGE</span>
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-xl">
              Significantly minimize the risk of leaks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-2 justify-center">
              <Button 
                onClick={scrollToProducts}
                size="lg"
                className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-4 text-lg shadow-construction"
              >
                Order Now
              </Button>
            </div>

            {/* Hero Product Image */}
            <div className="relative max-w-md mx-auto">
              <img 
                src="/lovable-uploads/f070d3f0-64d0-4f29-8cfc-7df8a95e0535.png" 
                alt="JAZEX Under Over tile insert kit with push in rubber ring seal"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToProducts}
            className="text-primary-foreground/70 hover:text-primary-foreground animate-bounce"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;