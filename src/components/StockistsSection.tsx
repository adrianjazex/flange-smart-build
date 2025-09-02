import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const StockistsSection = () => {
  const stockists = [
    {
      name: "Premium Plumbing Supplies",
      location: "Sydney, NSW",
      address: "123 Trade Street, Silverwater NSW 2128",
      phone: "02 9999 8888",
      email: "orders@premiumplumbing.com.au",
      website: "www.premiumplumbing.com.au"
    },
    {
      name: "Trade Direct Building Supplies",
      location: "Melbourne, VIC",
      address: "456 Industrial Way, Clayton VIC 3168",
      phone: "03 8888 7777",
      email: "sales@tradedirect.com.au",
      website: "www.tradedirect.com.au"
    },
    {
      name: "Construction Pro Supplies",
      location: "Brisbane, QLD",
      address: "789 Builder Boulevard, Eagle Farm QLD 4009",
      phone: "07 7777 6666",
      email: "info@constructionpro.com.au",
      website: "www.constructionpro.com.au"
    },
    {
      name: "Perth Trade Depot",
      location: "Perth, WA",
      address: "321 Commercial Drive, Welshpool WA 6106",
      phone: "08 6666 5555",
      email: "orders@perthtrade.com.au",
      website: "www.perthtrade.com.au"
    },
    {
      name: "Adelaide Building Solutions",
      location: "Adelaide, SA",
      address: "654 Industry Road, Hindmarsh SA 5007",
      phone: "08 5555 4444",
      email: "sales@adelaidesolutions.com.au",
      website: "www.adelaidesolutions.com.au"
    },
    {
      name: "Hobart Hardware & Trade",
      location: "Hobart, TAS",
      address: "987 Warehouse Lane, Moonah TAS 7009",
      phone: "03 4444 3333",
      email: "trade@hobarthardware.com.au",
      website: "www.hobarthardware.com.au"
    }
  ];

  return (
    <section id="stockists" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Find Our <span className="text-accent">Stockists</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            JAZEX Under Over™ products are available through our trusted network of trade suppliers across Australia.
            Contact your nearest stockist for immediate availability and expert advice.
          </p>
          <Link to="/become-stockist">
            <Button size="lg" className="bg-gradient-primary hover:shadow-construction">
              <ExternalLink className="mr-2 h-5 w-5" />
              Become a Stockist
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stockists.map((stockist, index) => (
            <Card key={index} className="hover:shadow-product transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  {stockist.name}
                </CardTitle>
                <p className="text-sm font-semibold text-accent">{stockist.location}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  {stockist.address}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent" />
                    <a href={`tel:${stockist.phone}`} className="hover:text-primary transition-colors">
                      {stockist.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-accent" />
                    <a href={`mailto:${stockist.email}`} className="hover:text-primary transition-colors">
                      {stockist.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <ExternalLink className="h-4 w-4 text-accent" />
                    <a 
                      href={`https://${stockist.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {stockist.website}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-background rounded-2xl p-8 shadow-steel max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Can't Find a Local Stockist?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us directly for assistance with your order or to discuss becoming an authorized stockist in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: 0411 430 652
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                sales@jazex.com.au
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockistsSection;