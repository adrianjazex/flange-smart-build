import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { removeBackground, loadImage } from "@/lib/backgroundRemoval";
const heroImageUrl = "/lovable-uploads/565d8e6e-809d-4fef-ace8-934317f1cd0d.png";

const HeroSection = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>(heroImageUrl);
  const [isProcessing, setIsProcessing] = useState(false);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        const response = await fetch(heroImageUrl);
        const blob = await response.blob();
        const img = await loadImage(blob);
        const processedBlob = await removeBackground(img);
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(processedUrl);
      } catch (error) {
        console.error('Failed to process image:', error);
        // Keep original image if processing fails
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, []);

  return (
    <section className="relative min-h-[70vh] bg-gradient-hero flex items-center pt-12 pb-8">
      <div className="absolute inset-0 bg-primary/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-teal-400">Under Over</span>{" "}
              <span className="text-white">Puddle Flange</span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 font-light">
              Revolutionary dual-stage waterproofing system
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
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-product">
              <img 
                src={processedImageUrl} 
                alt="JAZEX Under Over puddle flange showing the two-piece design with ribbed top plate and cylindrical base"
                className="w-full h-auto object-cover"
                style={{ background: 'transparent' }}
              />
              {isProcessing && (
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <div className="text-primary-foreground">Processing image...</div>
                </div>
              )}
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