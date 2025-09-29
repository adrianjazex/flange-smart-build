import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle } from "lucide-react";
import installationDemo from "@/assets/installation-demo.jpg";
import rubberRingInspection from "@/assets/rubber-ring-inspection-new.jpg";
import secondaryFlange1 from "@/assets/secondary-flange-1.jpg";
import secondaryFlange2 from "@/assets/secondary-flange-2.jpg";
import screedApplication1 from "@/assets/screed-application-1.jpg";
import screedApplication2 from "@/assets/screed-application-2.jpg";

const RubberRingSealInstallation = () => {
  const puddleFlangeSteps = [
    {
      step: 1,
      title: "Prepare the DWV (Waste Pipe)",
      details: "Ensure the DWV (waste pipe) is clean and free from any contaminants, including old membrane or adhesives, glue residues, burrs, debris, or sharp edges."
    },
    {
      step: 2,
      title: "Rebate the Floor",
      details: "Rebate the floor so that the top surface of the primary puddle flange sits slightly below the finished floor level. Once the rebate is complete, fit the rubber ring seal to the primary puddle flange."
    },
    {
      step: 3,
      title: "Install the Primary Puddle Flange",
      details: "Apply EPDM-compatible lubricant to the rubber ring seal. Apply a generous bead of joint sealant to the underside of the primary puddle flange in a continuous flow without creating air voids. Apply enough joint sealant to seal the DWV (waste pipe) to the floor junction, ensuring excess is expelled so it can be tooled off around the perimeter of the puddle flange."
    },
    {
      step: 4,
      title: "Inspect the Rubber Ring Seal",
      details: "Visually check the rubber ring seal by looking down through the puddle flange spigot to ensure it has not shifted during installation. When correctly installed, the rubber ring seal will lap around to the inside bottom of the spigot."
    },
    {
      step: 5,
      title: "Apply Waterproofing Membrane",
      details: "Apply waterproofing membrane over the textured horizontal surface of the primary puddle flange. Take care not to allow membrane to flow into the spigot. Allow membrane to fully cure before installing the secondary puddle flange."
    },
    {
      step: 6,
      title: "Install the Secondary Puddle Flange",
      details: "Apply a small dot of joint sealant to both locating lugs of the primary puddle flange. Press the secondary puddle flange into place, ensuring it is aligned, flat, and securely seated. Allow the joint sealant to fully cure before continuing. If required, the secondary puddle flange may also be fixed with a suitable fast-cure epoxy, PVC cement, or Cyanoacrylate (super glue)."
    },
    {
      step: 7,
      title: "Apply Tiler's Screed",
      details: "Apply screed over the secondary puddle flange, fully encasing the bedding tabs. Ensure the screed terminates in line with the outside perimeter of the secondary puddle flange. Clean the top of the puddle flange so it is ready for the next waterproofing layer. Inspect the inside of the spigot for screed overflow. Remove any material that may have entered the drainage flutes between the primary and secondary puddle flanges, as this could create a risk of capillary water ingress."
    },
    {
      step: 8,
      title: "Waterproof Over Screed",
      details: "The system is now ready for second-stage waterproofing. Apply membrane in accordance with your manufacturer's specifications."
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
              Rubber Ring Seal Installation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Step-by-step installation guide for JAZEX puddle flanges with rubber ring seals. 
              Follow these detailed instructions to ensure optimal performance and warranty compliance.
            </p>
          </div>


          {/* Installation Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary text-2xl">
                PUDDLE FLANGE INSTALLATION GUIDE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {puddleFlangeSteps.map((step, index) => (
                  <div key={index}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{step.details}</p>
                        
                        {/* Add demonstration photo for step 2 */}
                        {step.step === 2 && (
                          <div className="mt-4">
                            <img 
                              src={installationDemo} 
                              alt="Puddle flange installation demonstration showing proper rebated floor placement"
                              className="w-full max-w-md rounded-lg shadow-sm"
                            />
                            <p className="text-xs text-muted-foreground mt-2">
                              Demonstration: Puddle flange properly rebated and installed in concrete floor
                            </p>
                          </div>
                        )}
                        
                        {/* Add rubber ring seal inspection photo for step 4 */}
                        {step.step === 4 && (
                          <div className="mt-1">
                            <img 
                              src={rubberRingInspection} 
                              alt="Visual inspection view of rubber ring seal properly positioned inside puddle flange spigot"
                              className="w-full max-w-md rounded-lg shadow-sm"
                            />
                            <p className="text-xs text-muted-foreground mt-2">
                              Visual inspection: Rubber ring seal correctly positioned and visible at the bottom of the spigot
                            </p>
                          </div>
                        )}
                        
                        {/* Add secondary puddle flange installation photos for step 6 */}
                        {step.step === 6 && (
                          <div className="mt-1 space-y-4">
                            <div>
                              <img 
                                src={secondaryFlange1} 
                                alt="Secondary puddle flange being positioned for installation"
                                className="w-full max-w-md rounded-lg shadow-sm"
                              />
                              <p className="text-xs text-muted-foreground mt-2">
                                Step one applying adhesive to locating lugs
                              </p>
                            </div>
                            <div>
                              <img 
                                src={secondaryFlange2} 
                                alt="Secondary puddle flange fully installed and seated"
                                className="w-full max-w-md rounded-lg shadow-sm"
                              />
                              <p className="text-xs text-muted-foreground mt-2">
                                Step 2: Secondary puddle flange properly aligned and securely seated
                              </p>
                            </div>
                          </div>
                        )}
                        
                        {/* Add screed application photos for step 7 */}
                        {step.step === 7 && (
                          <div className="mt-4 space-y-4">
                            <div>
                              <img 
                                src={screedApplication1} 
                                alt="Applying tiler's screed over the secondary puddle flange"
                                className="w-full max-w-md rounded-lg shadow-sm"
                              />
                              <p className="text-xs text-muted-foreground mt-2">
                                Applying screed over the secondary puddle flange, fully encasing the bedding tabs
                              </p>
                            </div>
                            <div>
                              <img 
                                src={screedApplication2} 
                                alt="Completed screed application with proper perimeter termination"
                                className="w-full max-w-md rounded-lg shadow-sm"
                              />
                              <p className="text-xs text-muted-foreground mt-2">
                                Completed screed application with proper perimeter termination and clean flange surface
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {index < puddleFlangeSteps.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Resources */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-primary">Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Professional Installation</h4>
                  <p className="text-muted-foreground mb-4">
                    Professional installation is recommended for critical applications. Please ensure all 
                    installations comply with local building codes and standards.
                  </p>
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

export default RubberRingSealInstallation;