import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import puddleFlangeHero from "@/assets/puddle-flange-hero.jpg";
import productRange from "@/assets/product-range.jpg";
import installationGuide from "@/assets/installation-guide.jpg";
import spigotAdjustmentDemo from "@/assets/spigot-adjustment-demo.mov";
import underOverTileInsert from "@/assets/under-over-tile-insert-kit.jpg";
import solventWeldedAdapter from "@/assets/solvent-welded-adapter.jpg";
import underOverPuddleFlange from "@/assets/puddle-flange-rubber-seal-kit.jpg";

const FullRange = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "Under Over Puddle Flange Kit with Rubber Ring Seal and Tile Insert Waste",
      image: underOverTileInsert,
      description: "Designed for single or dual layered waterproofing membrane systems, complemented with 316 stainless steel marine grade tile insert waste top."
    },
    {
      name: "Under Over Puddle Flange Kit with Push In Rubber Ring Seal",
      image: underOverPuddleFlange,
      description: "Comprehensive puddle flange kit solution for under and over tile applications with integrated rubber ring seal.",
      features: [
        "Dual under/over installation capability",
        "Integrated rubber ring seal",
        "ABS construction",
        "Complete installation kit included"
      ],
      pricing: "From $20 AUD (Box pricing available)"
    },
    {
      name: "Under Over Adjustable Solvent Welded Sleeve",
      image: solventWeldedAdapter,
      description: "Designed to simplify installations where drainage waste pipes are not perfectly vertical. By removing the rubber ring seal from the puddle flange spigot, the adjustable sleeve can be twisted into position and solvent welded, allowing for up to 5° of adjustment for out of plumb drainage pipes. This ensures a precise and watertight connection, even when pipes come through the slab on an angle.",
      video: spigotAdjustmentDemo
    }
  ];

  return (
    <div className="min-h-screen bg-accent/10">
      <Header />
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Products
            </h1>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto mb-12">
            {products.map((product, index) => (
              <Card key={index} className="shadow-construction overflow-hidden bg-primary border-primary">
                <div className="md:flex">
                <div className="md:w-1/3 flex items-center justify-center p-4 bg-white">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full object-contain"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle className="text-xl text-white">
                        {product.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/90 mb-4">
                        {product.description}
                      </p>
                      {product.features && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                          <ul className="list-disc list-inside text-sm text-white/80 space-y-1">
                            {product.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {product.video && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-white mb-2">Spigot Adjustment Demo:</h4>
                          <video 
                            controls 
                            className="w-full max-w-md rounded-lg shadow-sm"
                            preload="metadata"
                          >
                            <source src={product.video} type="video/quicktime" />
                            <source src={product.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <p className="text-xs text-white/70 mt-2">
                            Demonstration of different spigot adjustment angles
                          </p>
                        </div>
                      )}
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