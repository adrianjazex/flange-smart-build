import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import puddleFlangeHero from "@/assets/puddle-flange-hero.jpg";
import productRange from "@/assets/product-range.jpg";
import installationGuide from "@/assets/installation-guide.jpg";

const FullRange = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "Tile Insert Kit with Push In Rubber Ring Seal",
      image: puddleFlangeHero,
      description: "Our premium tile insert kit designed for superior wastewater solutions with a push-in rubber ring seal system.",
      features: [
        "Push-in rubber ring seal technology",
        "Available in multiple stainless steel finishes",
        "Sizes: 50mm, 80mm, 100mm",
        "Professional wastewater solution"
      ],
      pricing: "From $80 AUD (Box pricing available)"
    },
    {
      name: "Under Over Flange Kit with Rubber Ring Seal",
      image: productRange,
      description: "Comprehensive flange kit solution for under and over tile applications with integrated rubber ring seal.",
      features: [
        "Dual under/over installation capability",
        "Integrated rubber ring seal",
        "ABS construction",
        "Complete installation kit included"
      ],
      pricing: "From $20 AUD (Box pricing available)"
    },
    {
      name: "Adjustable Solvent Welded Sleeve",
      image: installationGuide,
      description: "Professional-grade adjustable sleeve for solvent welding applications with precise fit capabilities.",
      features: [
        "Adjustable design for versatile installation",
        "Solvent welding compatibility",
        "Durable ABS construction",
        "Professional contractor choice"
      ],
      pricing: "From $5.00 AUD (Box pricing available)"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Full Range of Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our complete collection of professional wastewater solutions, 
              Significantly minimize the risk of leaks.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto mb-12">
            {products.map((product, index) => (
              <Card key={index} className="shadow-construction overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">
                        {product.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-accent">
                          {product.pricing}
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ready to Order?
              </h2>
              <p className="text-muted-foreground mb-6">
                Configure your products and get instant pricing with our easy-to-use ordering system.
              </p>
              <Button 
                onClick={() => navigate('/')}
                className="bg-gradient-primary hover:shadow-construction"
                size="lg"
              >
                Start Your Order
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FullRange;