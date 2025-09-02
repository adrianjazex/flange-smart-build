import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, AlertTriangle, Wrench, Download } from "lucide-react";
import installationGuide from "@/assets/installation-guide.jpg";

const InstallationInstructions = () => {
  const generalTools = [
    "Drill with appropriate bits",
    "Measuring tape",
    "Level",
    "Pencil for marking",
    "Safety glasses",
    "Dust mask",
    "Tile cutting tools (if required)"
  ];

  const tileInsertSteps = [
    {
      step: 1,
      title: "Preparation",
      details: "Ensure the surface is clean, level, and properly waterproofed according to Australian Standards AS 3740."
    },
    {
      step: 2,
      title: "Marking and Cutting",
      details: "Mark the tile insert position and cut the opening to the exact dimensions specified for your chosen size (50mm, 80mm, or 100mm)."
    },
    {
      step: 3,
      title: "Test Fit",
      details: "Perform a dry fit to ensure proper alignment and fit before final installation."
    },
    {
      step: 4,
      title: "Apply Sealant",
      details: "Apply appropriate waterproof sealant around the opening perimeter."
    },
    {
      step: 5,
      title: "Insert Installation",
      details: "Carefully install the tile insert, ensuring the push-in rubber ring seal is properly seated."
    },
    {
      step: 6,
      title: "Final Check",
      details: "Verify all seals are properly positioned and conduct a water test to ensure waterproof integrity."
    }
  ];

  const underOverSteps = [
    {
      step: 1,
      title: "Surface Preparation",
      details: "Prepare the substrate ensuring it meets waterproofing membrane requirements."
    },
    {
      step: 2,
      title: "Position Flange",
      details: "Position the under flange component according to your specific installation requirements."
    },
    {
      step: 3,
      title: "Secure Installation",
      details: "Secure the flange using appropriate fasteners for your substrate type."
    },
    {
      step: 4,
      title: "Rubber Ring Seal",
      details: "Install the rubber ring seal ensuring proper compression and waterproof integrity."
    },
    {
      step: 5,
      title: "Over Flange",
      details: "Install the over flange component, ensuring perfect alignment with the under component."
    },
    {
      step: 6,
      title: "Testing",
      details: "Perform comprehensive water testing to verify installation integrity."
    }
  ];

  const sleeveSteps = [
    {
      step: 1,
      title: "Pipe Preparation",
      details: "Ensure pipes are clean, properly cut, and deburred for optimal solvent welding."
    },
    {
      step: 2,
      title: "Adjustment",
      details: "Adjust the sleeve to the required length and configuration for your specific application."
    },
    {
      step: 3,
      title: "Test Assembly",
      details: "Perform a dry assembly to verify proper fit and alignment."
    },
    {
      step: 4,
      title: "Solvent Application",
      details: "Apply appropriate solvent cement according to manufacturer specifications."
    },
    {
      step: 5,
      title: "Installation",
      details: "Install the sleeve ensuring proper insertion depth and alignment."
    },
    {
      step: 6,
      title: "Curing",
      details: "Allow appropriate curing time before testing or applying pressure."
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
              Installation Instructions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional installation guides for all JAZEX waterproofing products. 
              Follow these detailed instructions to ensure optimal performance and warranty compliance.
            </p>
          </div>

          {/* Important Notice */}
          <Card className="mb-8 border-amber-200 dark:border-amber-800">
            <CardHeader>
              <CardTitle className="flex items-center text-amber-700 dark:text-amber-300">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-700 dark:text-amber-300">
              <p>
                All installations must comply with Australian Standards AS 3740 (Waterproofing of domestic wet areas) 
                and local building codes. Professional installation is recommended for critical applications.
              </p>
            </CardContent>
          </Card>

          {/* General Tools Required */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Wrench className="mr-2 h-5 w-5" />
                General Tools Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  {generalTools.map((tool, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground">{tool}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <img 
                    src={installationGuide} 
                    alt="Installation tools"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product-Specific Instructions */}
          <div className="space-y-8">
            {/* Tile Insert Kit Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">
                  Tile Insert Kit with Push In Rubber Ring Seal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tileInsertSteps.map((step, index) => (
                    <div key={index}>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                          <p className="text-muted-foreground">{step.details}</p>
                        </div>
                      </div>
                      {index < tileInsertSteps.length - 1 && <Separator className="my-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Under Over Flange Kit Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">
                  Under Over Flange Kit with Rubber Ring Seal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {underOverSteps.map((step, index) => (
                    <div key={index}>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                          <p className="text-muted-foreground">{step.details}</p>
                        </div>
                      </div>
                      {index < underOverSteps.length - 1 && <Separator className="my-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Adjustable Solvent Welded Sleeve Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">
                  Adjustable Solvent Welded Sleeve
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sleeveSteps.map((step, index) => (
                    <div key={index}>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                          <p className="text-muted-foreground">{step.details}</p>
                        </div>
                      </div>
                      {index < sleeveSteps.length - 1 && <Separator className="my-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Resources */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-primary">Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Professional Support</h4>
                  <p className="text-muted-foreground mb-4">
                    Need installation assistance? Our technical team is available to provide guidance and support.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>Zach: 0411 430 652</div>
                    <div>Adrian: 0413 428 228</div>
                    <div>John: 0419 750 066</div>
                    <div>Email: sales@jazex.com.au</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Compliance & Standards</h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Australian Standard AS 3740</li>
                    <li>• Building Code of Australia (BCA)</li>
                    <li>• National Construction Code (NCC)</li>
                    <li>• Local building authority requirements</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InstallationInstructions;