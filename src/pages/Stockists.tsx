import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Phone, Mail, ExternalLink } from "lucide-react";
import { useState } from "react";

const Stockists = () => {
  const [postcode, setPostcode] = useState("");

  const handlePostcodeSearch = () => {
    if (postcode.trim()) {
      // Placeholder for postcode search functionality
      console.log("Searching for stockists near:", postcode);
    }
  };

  const handleMapClick = (region: string) => {
    // Placeholder for map region click functionality
    console.log("Selected region:", region);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Find Our <span className="text-accent">Stockists</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                JAZEX Under Over™ products are available through our trusted network of trade suppliers across Australia.
                Find your nearest stockist for immediate availability and expert advice.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-steel">
                <CardHeader>
                  <CardTitle className="text-center text-primary flex items-center justify-center gap-2">
                    <Search className="h-6 w-6" />
                    Find Stockists by Postcode
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Input
                      placeholder="Enter your postcode..."
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      className="flex-1"
                      onKeyPress={(e) => e.key === 'Enter' && handlePostcodeSearch()}
                    />
                    <Button 
                      onClick={handlePostcodeSearch}
                      className="bg-gradient-primary"
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Find Stockists by <span className="text-accent">Region</span>
              </h2>
              <p className="text-muted-foreground">
                Click on a region below to find stockists in that area
              </p>
            </div>

            {/* Australia Map - Simplified Interactive Regions */}
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-construction">
                <CardContent className="p-8">
                  <div className="relative">
                    {/* This would be replaced with an actual interactive map */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        { name: "New South Wales", code: "NSW" },
                        { name: "Victoria", code: "VIC" },
                        { name: "Queensland", code: "QLD" },
                        { name: "Western Australia", code: "WA" },
                        { name: "South Australia", code: "SA" },
                        { name: "Tasmania", code: "TAS" },
                        { name: "Northern Territory", code: "NT" },
                        { name: "Australian Capital Territory", code: "ACT" }
                      ].map((state) => (
                        <Button
                          key={state.code}
                          variant="outline"
                          className="h-20 flex flex-col items-center justify-center hover:bg-accent/10 hover:border-accent transition-all"
                          onClick={() => handleMapClick(state.code)}
                        >
                          <MapPin className="h-5 w-5 mb-1 text-accent" />
                          <span className="text-sm font-medium">{state.name}</span>
                          <span className="text-xs text-muted-foreground">{state.code}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Become a Stockist Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-construction bg-accent/10 border-accent/20">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <ExternalLink className="h-16 w-16 mx-auto mb-4 text-accent" />
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      Become a Stockist
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                      Join our network of trusted trade suppliers and offer JAZEX Under Over™ products to your customers.
                      We're looking for quality distributors across Australia.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-background/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        Why Partner With Us?
                      </h3>
                      <ul className="text-left text-muted-foreground space-y-2 text-sm">
                        <li>• Premium quality products with proven demand</li>
                        <li>• Comprehensive training and support</li>
                        <li>• Marketing materials and technical resources</li>
                        <li>• Competitive wholesale pricing</li>
                        <li>• Exclusive territory opportunities</li>
                      </ul>
                    </div>
                    <div className="bg-background/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        Requirements
                      </h3>
                      <ul className="text-left text-muted-foreground space-y-2 text-sm">
                        <li>• Established trade supply business</li>
                        <li>• Experience with plumbing products</li>
                        <li>• Strong local market presence</li>
                        <li>• Commitment to quality service</li>
                        <li>• Appropriate storage and logistics</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-gradient-primary">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us: 0411 430 652
                    </Button>
                    <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                      <Mail className="mr-2 h-5 w-5" />
                      Email: sales@jazex.com.au
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground mt-6">
                    Ready to discuss partnership opportunities? Get in touch today to learn more about our stockist program.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Stockists;