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
            
            {/* Optimal Solution: Both Methods */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/30 shadow-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">The Optimal Solution: Under & Over Screed System</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Double Protection System</h3>
                    <p className="text-muted-foreground">
                      The under/over puddle flange system provides the ultimate waterproofing solution. 
                      In the event of a top over-screed membrane failure, the under-screed membrane still protects 
                      your bathroom or balcony from leaking.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Advanced Drainage System</h3>
                    <p className="text-muted-foreground">
                      The under/over screed system allows drainage between the membranes if water penetrates into the screed. 
                      This prevents water entrapment and provides continuous protection even if the primary membrane is compromised.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Wrench className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Installation Benefits</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Redundant protection - if one membrane fails, the other maintains waterproofing</li>
                      <li>Drainage pathway between membranes prevents water accumulation</li>
                      <li>Enhanced long-term reliability and peace of mind</li>
                      <li>Suitable for high-risk areas like bathrooms and balconies</li>
                      <li>Complies with and exceeds Australian Standards requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Under Screed Component */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Under Screed Waterproofing</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Primary Protection Layer</h3>
                    <p className="text-muted-foreground">
                      The under-screed membrane forms the foundation of your waterproofing system, 
                      applied directly to the substrate before laying the screed.
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
                      <li>Install under-screed waterproof membrane</li>
                      <li>Allow proper curing time</li>
                      <li>Lay screed over the membrane</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Over Screed Component */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-full">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold">Over Screed Waterproofing</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Secondary Protection Layer</h3>
                    <p className="text-muted-foreground">
                      When combined with under-screed waterproofing, the over-screed membrane provides 
                      an additional barrier and is the recommended approach for maximum protection.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Enhanced System Benefits</h3>
                    <p className="text-muted-foreground">
                      As part of the dual-membrane system, the over-screed layer works in conjunction 
                      with the under-screed membrane to provide unparalleled waterproofing performance 
                      and built-in redundancy.
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
              <p className="text-sm text-muted-foreground">sales@jazex.com.au</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WaterproofScreed;