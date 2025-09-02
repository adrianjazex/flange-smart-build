import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, AlertTriangle, Wrench } from "lucide-react";

const WaterproofScreed = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Can I waterproof under and over screed?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential guidance on waterproofing applications with screed layers. 
              Understanding proper installation methods and best practices.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Under Screed Section */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Waterproofing Under Screed</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Recommended Method</h3>
                    <p className="text-muted-foreground">
                      Yes, waterproofing under screed is the preferred method for wet areas. 
                      Apply the waterproof membrane directly to the substrate before laying the screed.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Wrench className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Installation Process</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Clean and prepare the substrate thoroughly</li>
                      <li>Apply primer if required</li>
                      <li>Install waterproof membrane</li>
                      <li>Allow proper curing time</li>
                      <li>Lay screed over the membrane</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Over Screed Section */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-destructive/10 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-semibold">Waterproofing Over Screed</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Not Recommended</h3>
                    <p className="text-muted-foreground">
                      Waterproofing over screed is generally not recommended as the primary waterproofing method. 
                      If water penetrates the membrane, it can be trapped in the screed layer.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Special Circumstances</h3>
                    <p className="text-muted-foreground">
                      In renovation situations where screed cannot be removed, waterproofing over screed 
                      may be the only option. Ensure proper substrate preparation and use appropriate products.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Australian Standards */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-full">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold">Australian Standards & NCC Compliance</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                The Australian Standards serve as a guideline that becomes mandatory when referenced by the National Construction Code (NCC) regarding underscreed and overscreed waterproofing. The NCC specifies that either underscreed or overscreed waterproofing must be implemented; however, it does not prohibit the use of both methods. Therefore, employing both techniques can provide enhanced protection and ensure superior waterproofing performance.
              </p>
            </div>

            {/* Best Practices */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/20">
              <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-primary">Do's</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Always waterproof under screed when possible</li>
                    <li>• Use appropriate membrane thickness</li>
                    <li>• Ensure proper substrate preparation</li>
                    <li>• Allow adequate curing time</li>
                    <li>• Follow manufacturer's guidelines</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-destructive">Don'ts</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Don't rely solely on over-screed waterproofing</li>
                    <li>• Don't skip primer when required</li>
                    <li>• Don't rush the installation process</li>
                    <li>• Don't ignore substrate conditions</li>
                    <li>• Don't compromise on material quality</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center bg-card/30 rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4">Need Professional Advice?</h2>
              <p className="text-muted-foreground mb-6">
                Contact our technical team for specific guidance on your waterproofing project.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span>Zach: 0411 430 652</span>
                <span>Adrian: 0413 428 228</span>
                <span>John: 0419 750 066</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">sales@jazex.com.au</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WaterproofScreed;