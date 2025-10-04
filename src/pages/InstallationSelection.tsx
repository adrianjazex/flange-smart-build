import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InstallationSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Installation Instructions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the installation type that matches your product
            </p>
          </div>

          {/* Installation Options */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/rubber-ring-installation')}>
              <CardHeader>
                <CardTitle className="text-2xl">Rubber Ring Seal Installation</CardTitle>
                <CardDescription className="text-base">
                  Step-by-step guide for installing puddle flanges with rubber ring seals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
                  View Instructions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/solvent-weld-installation')}>
              <CardHeader>
                <CardTitle className="text-2xl">Adjustable Solvent Weld Sleeve</CardTitle>
                <CardDescription className="text-base">
                  Step-by-step guide for solvent weld installation with adjustable sleeve
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
                  View Instructions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InstallationSelection;