import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, AlertCircle, FileText, Clock, CheckCircle2, XCircle } from "lucide-react";

const WarrantiesLimitations = () => {
  const warrantyPeriods = [
    {
      product: "Tile Insert Kit with Push In Rubber Ring Seal",
      period: "10 Years",
      coverage: "Manufacturing defects, material failure, seal integrity"
    },
    {
      product: "Under Over Flange Kit with Rubber Ring Seal", 
      period: "10 Years",
      coverage: "Manufacturing defects, material failure, seal performance"
    },
    {
      product: "Adjustable Solvent Welded Sleeve",
      period: "10 Years", 
      coverage: "Manufacturing defects, material failure, joint integrity"
    }
  ];

  const warrantyConditions = [
    "Products must be installed according to JAZEX installation instructions",
    "Installation must comply with Australian Standard AS 3740",
    "Professional installation recommended for warranty validation",
    "Proof of purchase required for all warranty claims",
    "Products must be used for intended applications only",
    "Regular maintenance and inspections as recommended",
    "Warranty registration within 30 days of installation recommended"
  ];

  const coveredDefects = [
    "Manufacturing defects in materials",
    "Premature seal failure under normal use",
    "Structural integrity issues",
    "Corrosion resistance failure (stainless steel products)",
    "Dimensional inaccuracies affecting function",
    "Joint integrity failure (when properly installed)"
  ];

  const limitations = [
    "Damage due to improper installation or use outside specifications",
    "Normal wear and tear from regular use",
    "Damage from chemical exposure beyond product specifications",
    "Modifications or alterations to original product design",
    "Damage from excessive force or impact",
    "Consequential or indirect damages",
    "Labor costs for removal and reinstallation",
    "Damage from failure to follow maintenance recommendations"
  ];

  const claimProcess = [
    {
      step: 1,
      title: "Contact JAZEX Support",
      detail: "Contact our technical support team with details of the issue"
    },
    {
      step: 2,
      title: "Provide Documentation",
      detail: "Supply proof of purchase, installation photos, and issue description"
    },
    {
      step: 3,
      title: "Technical Assessment",
      detail: "Our team will assess the claim and may arrange inspection if required"
    },
    {
      step: 4,
      title: "Resolution",
      detail: "Approved claims will be resolved through repair, replacement, or credit"
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
              Warranties & Limitations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive warranty information and coverage details for all JAZEX waterproofing products. 
              Understanding your warranty rights and product limitations.
            </p>
          </div>

          {/* Warranty Overview */}
          <Card className="mb-8 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700 dark:text-green-300">
                <Shield className="mr-2 h-5 w-5" />
                Warranty Coverage Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 dark:text-green-300 mb-4">
                JAZEX stands behind the quality of our waterproofing products with comprehensive warranty coverage 
                when products are installed and maintained according to our specifications.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {warrantyPeriods.map((item, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 border border-border">
                    <h4 className="font-semibold text-foreground text-sm mb-2">{item.product}</h4>
                    <div className="text-2xl font-bold text-primary mb-2">{item.period}</div>
                    <p className="text-xs text-muted-foreground">{item.coverage}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Warranty Conditions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <FileText className="mr-2 h-5 w-5" />
                Warranty Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                To maintain warranty coverage, the following conditions must be met:
              </p>
              <ul className="space-y-2">
                {warrantyConditions.map((condition, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{condition}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* What's Covered */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  What's Covered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {coveredDefects.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Limitations & Exclusions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                  <XCircle className="mr-2 h-5 w-5" />
                  Limitations & Exclusions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {limitations.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="mr-2 h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Warranty Claim Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Clock className="mr-2 h-5 w-5" />
                Warranty Claim Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {claimProcess.map((step, index) => (
                  <div key={index}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                        <p className="text-muted-foreground">{step.detail}</p>
                      </div>
                    </div>
                    {index < claimProcess.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Important Legal Notice */}
          <Card className="border-amber-200 dark:border-amber-800">
            <CardHeader>
              <CardTitle className="flex items-center text-amber-700 dark:text-amber-300">
                <AlertCircle className="mr-2 h-5 w-5" />
                Important Legal Notice
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-700 dark:text-amber-300">
              <div className="space-y-4 text-sm">
                <p>
                  <strong>Consumer Rights:</strong> This warranty is in addition to your rights under Australian Consumer Law. 
                  Our goods come with guarantees that cannot be excluded under Australian Consumer Law.
                </p>
                <p>
                  <strong>Liability Limitation:</strong> To the extent permitted by law, JAZEX's liability is limited to the repair, 
                  replacement, or refund of the purchase price of defective products.
                </p>
                <p>
                  <strong>Professional Advice:</strong> This warranty information is general in nature. For specific warranty claims 
                  or complex situations, professional advice should be sought.
                </p>
                <div className="mt-6 pt-4 border-t border-amber-300/30">
                  <h4 className="font-semibold mb-2">Contact Information for Warranty Claims:</h4>
                  <div className="space-y-1">
                    <div>Phone: 0411 430 652 (Zach)</div>
                    <div>Email: sales@jazex.com.au</div>
                    <div>Business Hours: Monday - Friday 8:00 AM - 5:00 PM AEST</div>
                  </div>
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

export default WarrantiesLimitations;