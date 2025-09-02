import { Button } from "@/components/ui/button";
import { ArrowDown, Wrench } from "lucide-react";
const heroImageUrl = "/lovable-uploads/7256bfe4-20d9-462c-b04c-f044049ef1dc.png";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] bg-gradient-hero flex items-center pt-16">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10 mt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-orbitron font-black mb-4 leading-tight">
                <span className="text-accent">UNDER OVER</span><sup className="text-accent text-2xl lg:text-3xl font-bold ml-1 animate-pulse">™</sup><br />
                <span className="text-white">PUDDLE FLANGE</span>
              </h1>
              <p className="text-2xl lg:text-3xl font-serif italic text-primary-foreground/90 leading-relaxed">
                the smarter way to waterproof
              </p>
            </div>
            
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-xl">
              no ponding no restriction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToProducts}
                size="lg"
                className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-4 text-lg shadow-construction"
              >
                <Wrench className="mr-2 h-6 w-6" />
                Order Now
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-product bg-gradient-steel">
              <img 
                src={heroImageUrl} 
                alt="JAZEX Under Over dual-stage puddle flange system showing the innovative two-piece design"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
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