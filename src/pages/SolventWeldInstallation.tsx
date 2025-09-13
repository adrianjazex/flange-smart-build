import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle } from "lucide-react";

const SolventWeldInstallation = () => {
  const solventWeldedSteps = [
    {
      step: 1,
      title: "Prepare the DWV (Waste Pipe)",
      details: "Ensure the DWV (waste pipe) is clean and free from any contaminants, including old membrane or adhesives, glue residues, burrs, debris, or sharp edges."
    },
    {
      step: 2,
      title: "Rebate the Floor",
      details: "Rebate the floor so that the top surface of the primary puddle flange sits slightly below the finished floor level."
    },
    {
      step: 3,
      title: "Set the Adjustable Sleeve Angle",
      details: "Align the single notch on the adjustable sleeve with the single notch on the bottom of the primary puddle flange spigot (for straight DWV waste pipes). Rotate the primary puddle flange and sleeve in opposite directions until the puddle flange matches the angle of the DWV (waste pipe). Adjustment range is reached when the two notches on the sleeve align."
    },
    {
      step: 4,
      title: "Solvent Weld the Sleeve",
      details: "Mark the final alignment before welding. Use Type N PVC pipe cement only (do not use primer on ABS parts). Apply joint sealant generously to the underside of the primary puddle flange to create a continuous, void-free bead. Ensure enough is applied to seal the DWV (waste pipe) to the floor junction, allowing excess to be tooled off. Apply PVC cement primer only on DWV PVC waste pipe (not on ABS parts). Apply Type N PVC pipe cement to the external surface of the adjustable spigot and the internal surface of the DWV (waste pipe). Insert the puddle flange into the pipe until excess joint sealant is expelled. Confirm that the primary puddle flange is flush with or slightly below the floor surface. Tool off excess joint sealant around the perimeter of the puddle flange."
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
              Adjustable Solvent Weld Sleeve Installation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Step-by-step installation guide for JAZEX adjustable solvent weld sleeve systems. 
              Follow these detailed instructions to ensure optimal performance and warranty compliance.
            </p>
          </div>


          {/* Installation Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary text-2xl">
                SOLVENT WELDED INSTALLATION OPTION
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {solventWeldedSteps.map((step, index) => (
                  <div key={index}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{step.details}</p>
                      </div>
                    </div>
                    {index < solventWeldedSteps.length - 1 && <Separator className="my-4" />}
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

export default SolventWeldInstallation;