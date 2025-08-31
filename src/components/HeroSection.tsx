import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Wrench, Users } from "lucide-react";
const heroImageUrl = "/lovable-uploads/7256bfe4-20d9-462c-b04c-f044049ef1dc.png";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              <span className="block text-accent">Under Over™</span>
              ensures no trapped water and no spigot restriction — the smarter way to waterproof.
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-xl">
              The only dual-stage puddle flange system that installs in your primary waterproofing membrane 
              and locks with a secondary flange over the screed.
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
              
              <Button 
                onClick={() => document.getElementById('installation')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg"
              >
                <Shield className="mr-2 h-6 w-6" />
                Installation Guide
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <Wrench className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-sm text-primary-foreground/80 font-semibold">Trade</div>
                <div className="text-sm text-primary-foreground/80">Professional</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-sm text-primary-foreground/80 font-semibold">Waterproof</div>
                <div className="text-sm text-primary-foreground/80">Guaranteed</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-sm text-primary-foreground/80 font-semibold">DIY</div>
                <div className="text-sm text-primary-foreground/80">Friendly</div>
              </div>
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
            
            {/* Floating Feature Cards */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-steel border border-border">
              <div className="text-sm font-semibold text-foreground">Primary Install</div>
              <div className="text-xs text-muted-foreground">Membrane Integration</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-accent rounded-xl p-4 shadow-steel text-accent-foreground">
              <div className="text-sm font-semibold">Secondary Lock</div>
              <div className="text-xs opacity-90">Over Screed</div>
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