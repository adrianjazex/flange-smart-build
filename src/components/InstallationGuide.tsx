import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Play, Download, CheckCircle } from "lucide-react";
import installationImage from "@/assets/installation-guide.jpg";

const INSTALLATION_STEPS = [
  {
    step: 1,
    title: "Prepare Primary Membrane",
    description: "Ensure the waterproofing membrane is clean and properly positioned. Mark the drain location accurately."
  },
  {
    step: 2,
    title: "Install Primary Puddle Flange",
    description: "Cut the membrane opening and install the primary puddle flange directly into the waterproofing membrane."
  },
  {
    step: 3,
    title: "Apply Screed Layer",
    description: "Pour and level your screed layer over the membrane and around the primary flange to required thickness."
  },
  {
    step: 4,
    title: "Install Secondary Flange",
    description: "Once screed is cured, install the secondary puddle flange that locks into the primary flange system."
  },
  {
    step: 5,
    title: "Final Connection",
    description: "Connect your drainage pipe using the appropriate adapter (O-ring or solvent weld) for a watertight seal."
  }
];

const InstallationGuide = () => {
  return (
    <section id="installation" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Installation Guide</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our step-by-step guide for perfect installation every time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Video/QR Section */}
          <div className="space-y-6">
            <Card className="shadow-construction overflow-hidden">
              <div className="relative">
                <img 
                  src={installationImage} 
                  alt="Step-by-step installation diagram showing puddle flange installation process"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
                    <Play className="mr-2 h-6 w-6" />
                    Watch Installation Video
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Complete Video Tutorial
                </h3>
                <p className="text-muted-foreground mb-4">
                  Watch our comprehensive installation video that covers every step of the process, 
                  from membrane preparation to final connection.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF Guide
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <QrCode className="mr-2 h-4 w-4" />
                    QR Code Access
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-steel bg-muted/50">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <QrCode className="mr-2 h-5 w-5" />
                  On-Site Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Every product box includes a QR code that links directly to this installation guide. 
                  Scan it on-site for instant access to the video tutorial and step-by-step instructions.
                </p>
                <div className="bg-background p-4 rounded-lg border-2 border-dashed border-border text-center">
                  <QrCode className="h-16 w-16 mx-auto mb-2 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground">QR Code on Product Box</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Installation */}
          <div className="space-y-4">
            <Card className="shadow-construction bg-accent/10 border-accent/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Professional Installation Available
                </h3>
                <p className="text-muted-foreground mb-4">
                  Need professional installation? We can connect you with certified installers in your area.
                </p>
                <Button className="bg-gradient-primary">
                  Find Local Installers
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;