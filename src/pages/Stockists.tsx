import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Phone, Mail, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Stockists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  // Mock stockist data - in a real app this would come from an API
  const mockStockists = [
    {
      id: 1,
      name: "Sydney Plumbing Supplies",
      address: "123 George Street, Sydney NSW 2000",
      phone: "(02) 9000 1234",
      distance: "2.5km"
    },
    {
      id: 2,
      name: "Melbourne Trade Center",
      address: "456 Collins Street, Melbourne VIC 3000", 
      phone: "(03) 9000 5678",
      distance: "3.1km"
    },
    {
      id: 3,
      name: "Brisbane Building Supplies",
      address: "789 Queen Street, Brisbane QLD 4000",
      phone: "(07) 3000 9012",
      distance: "4.2km"
    }
  ];

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockStockists);
      setIsSearching(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-steel">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Find Your Local Stockist
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Locate authorized Jazex dealers in your area to purchase our premium puddle flange systems and drainage solutions.
            </p>
          </div>

          {/* Search Section */}
          <Card className="max-w-2xl mx-auto mb-12 shadow-construction">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary">
                <MapPin className="mr-2 h-6 w-6" />
                Search by Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Enter your postcode or suburb..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="text-lg py-3 border-2 border-border focus:border-primary"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  disabled={!searchTerm.trim() || isSearching}
                  className="bg-gradient-primary hover:shadow-construction px-8 py-3 text-lg"
                >
                  <Search className="mr-2 h-5 w-5" />
                  {isSearching ? "Searching..." : "Search"}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Enter your postcode (e.g., 2000) or suburb name (e.g., Sydney) to find the nearest stockists.
              </p>
            </CardContent>
          </Card>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Stockists near "{searchTerm}"
              </h2>
              <div className="grid gap-6">
                {searchResults.map((stockist) => (
                  <Card key={stockist.id} className="shadow-construction hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <Store className="mr-2 h-5 w-5 text-primary" />
                            <h3 className="text-xl font-semibold text-foreground">
                              {stockist.name}
                            </h3>
                          </div>
                          <div className="flex items-center mb-2 text-muted-foreground">
                            <MapPin className="mr-2 h-4 w-4" />
                            <span>{stockist.address}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Phone className="mr-2 h-4 w-4" />
                            <span>{stockist.phone}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {stockist.distance}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Become a Stockist Section */}
          <Card className="max-w-4xl mx-auto shadow-construction">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary mb-4">
                Want to Become a Stockist?
              </CardTitle>
              <p className="text-lg text-muted-foreground">
                Join our network of authorized dealers and offer premium Jazex drainage solutions to your customers.
              </p>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Contact Our Sales Team
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">John</p>
                      <p className="text-muted-foreground">0419 750 066</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">sales@jazex.com.au</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button
                onClick={() => navigate('/contact-us')}
                className="bg-gradient-primary hover:shadow-construction text-lg px-8 py-3"
              >
                Contact Us for More Information
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Our sales team will provide you with all the information about becoming an authorized Jazex stockist, including pricing, minimum orders, and marketing support.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Stockists;