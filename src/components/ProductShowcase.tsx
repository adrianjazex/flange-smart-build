import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Lock, Droplets, Shield } from "lucide-react";
import productRangeImage from "@/assets/product-range.jpg";

const FEATURES = [
  {
    icon: Layers,
    title: "Dual-Stage System",
    description: "Primary flange installs in membrane, secondary locks over screed"
  },
  {
    icon: Lock,
    title: "Secure Locking",
    description: "Patented locking mechanism ensures perfect alignment and seal"
  },
  {
    icon: Droplets,
    title: "100% Waterproof",
    description: "Guaranteed waterproof seal when installed correctly"
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "High-grade stainless steel construction for lasting durability"
  }
];

const PRODUCT_RANGE = [
  {
    name: "Standard Puddle Flanges",
    description: "Basic dual-stage puddle flange system for standard installations",
    sizes: ["50mm", "80mm", "100mm"],
    bestFor: "Most residential and commercial applications"
  },
  {
    name: "Puddle Flange with Tail/Suit Kit",
    description: "Complete system with O-ring connection for secure pipe joining",
    sizes: ["50mm", "80mm", "100mm"], 
    bestFor: "Professional installations requiring O-ring seals"
  },
  {
    name: "Puddle Flange with Solvent Weld",
    description: "System with solvent weld adapter for permanent connections",
    sizes: ["50mm", "80mm", "100mm"],
    bestFor: "Permanent installations with PVC pipe systems"
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Product Range</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of puddle flange systems designed for every application
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FEATURES.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.title} className="shadow-steel hover:shadow-construction transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Product Range */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <img 
              src={productRangeImage} 
              alt="Complete range of puddle flange products showing different sizes and finishes available"
              className="w-full rounded-2xl shadow-product"
            />
          </div>

          <div className="space-y-6">
            {PRODUCT_RANGE.map((product, index) => (
              <Card key={index} className="shadow-steel">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="secondary" className="bg-secondary-dark text-secondary-foreground">
                        {size}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-foreground mb-1">Best For:</div>
                    <div className="text-sm text-muted-foreground">{product.bestFor}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Finishes */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Available Finishes</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Polished Stainless Steel",
              "Matte Stainless Steel", 
              "Black Stainless Steel",
              "Gold Stainless Steel",
              "Rose Stainless Steel",
              "Gun Metal Stainless Steel"
            ].map((finish) => (
              <Badge key={finish} variant="outline" className="border-2 border-border hover:border-primary transition-colors px-4 py-2">
                {finish}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;