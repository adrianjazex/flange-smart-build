import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Store, Users, DollarSign, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const BecomeStockist = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    businessType: "",
    yearsInBusiness: "",
    currentSuppliers: "",
    estimatedVolume: "",
    targetMarket: "",
    storefront: false,
    tradeAccount: false,
    publicAccess: false,
    additionalInfo: ""
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.companyName || !formData.contactName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Stockist application:", formData);
    
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 48 hours.",
    });

    // Reset form
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      postcode: "",
      businessType: "",
      yearsInBusiness: "",
      currentSuppliers: "",
      estimatedVolume: "",
      targetMarket: "",
      storefront: false,
      tradeAccount: false,
      publicAccess: false,
      additionalInfo: ""
    });
  };

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-accent" />,
      title: "Competitive Margins",
      description: "Attractive wholesale pricing with generous profit margins for our stockist partners."
    },
    {
      icon: <Store className="h-8 w-8 text-accent" />,
      title: "Marketing Support",
      description: "Professional marketing materials, product displays, and promotional support."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Training & Support",
      description: "Comprehensive product training and ongoing technical support for your team."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Quality Guarantee",
      description: "Backed by our reputation for quality and innovation in waterproofing solutions."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Become a <span className="text-accent">JAZEX Stockist</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Join our growing network of trusted suppliers and bring revolutionary Under Over™ 
                tile insert kit systems with push in rubber ring seal to your customers.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              Why Partner with <span className="text-accent">JAZEX</span>?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-product transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-primary">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-product">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-primary mb-4">
                    Stockist Application Form
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Please provide the following information to help us assess your application.
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Company Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                        Company Information
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="companyName">Company Name *</Label>
                          <Input
                            id="companyName"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange("companyName", e.target.value)}
                            placeholder="Your Company Name"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="contactName">Primary Contact *</Label>
                          <Input
                            id="contactName"
                            value={formData.contactName}
                            onChange={(e) => handleInputChange("contactName", e.target.value)}
                            placeholder="Contact Person Name"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="contact@yourcompany.com"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="0400 000 000"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Address Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                        Business Address
                      </h3>
                      
                      <div>
                        <Label htmlFor="address">Street Address</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          placeholder="123 Business Street"
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <Label htmlFor="city">City/Suburb</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            placeholder="City"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select State" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="NSW">NSW</SelectItem>
                              <SelectItem value="VIC">VIC</SelectItem>
                              <SelectItem value="QLD">QLD</SelectItem>
                              <SelectItem value="SA">SA</SelectItem>
                              <SelectItem value="WA">WA</SelectItem>
                              <SelectItem value="TAS">TAS</SelectItem>
                              <SelectItem value="NT">NT</SelectItem>
                              <SelectItem value="ACT">ACT</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="postcode">Postcode</Label>
                          <Input
                            id="postcode"
                            value={formData.postcode}
                            onChange={(e) => handleInputChange("postcode", e.target.value)}
                            placeholder="0000"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Business Details */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                        Business Details
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="businessType">Business Type</Label>
                          <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Business Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="trade-supplier">Trade Supplier</SelectItem>
                              <SelectItem value="hardware-store">Hardware Store</SelectItem>
                              <SelectItem value="plumbing-specialist">Plumbing Specialist</SelectItem>
                              <SelectItem value="building-supplies">Building Supplies</SelectItem>
                              <SelectItem value="wholesaler">Wholesaler</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="yearsInBusiness">Years in Business</Label>
                          <Select value={formData.yearsInBusiness} onValueChange={(value) => handleInputChange("yearsInBusiness", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Years" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-2">0-2 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="6-10">6-10 years</SelectItem>
                              <SelectItem value="11-20">11-20 years</SelectItem>
                              <SelectItem value="20+">20+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="currentSuppliers">Current Key Suppliers</Label>
                        <Input
                          id="currentSuppliers"
                          value={formData.currentSuppliers}
                          onChange={(e) => handleInputChange("currentSuppliers", e.target.value)}
                          placeholder="List your main suppliers"
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="estimatedVolume">Estimated Monthly Volume</Label>
                          <Select value={formData.estimatedVolume} onValueChange={(value) => handleInputChange("estimatedVolume", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Volume" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 units</SelectItem>
                              <SelectItem value="11-50">11-50 units</SelectItem>
                              <SelectItem value="51-100">51-100 units</SelectItem>
                              <SelectItem value="100+">100+ units</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="targetMarket">Target Market</Label>
                          <Select value={formData.targetMarket} onValueChange={(value) => handleInputChange("targetMarket", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Market" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="trade-only">Trade Only</SelectItem>
                              <SelectItem value="diy-retail">DIY/Retail</SelectItem>
                              <SelectItem value="both">Both Trade & Retail</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Business Features */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                        Business Features
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="storefront"
                            checked={formData.storefront}
                            onCheckedChange={(checked) => handleInputChange("storefront", !!checked)}
                          />
                          <Label htmlFor="storefront">Physical storefront/showroom</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="tradeAccount"
                            checked={formData.tradeAccount}
                            onCheckedChange={(checked) => handleInputChange("tradeAccount", !!checked)}
                          />
                          <Label htmlFor="tradeAccount">Trade account facilities</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="publicAccess"
                            checked={formData.publicAccess}
                            onCheckedChange={(checked) => handleInputChange("publicAccess", !!checked)}
                          />
                          <Label htmlFor="publicAccess">Public counter access</Label>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                        Additional Information
                      </h3>
                      
                      <div>
                        <Label htmlFor="additionalInfo">Additional Comments</Label>
                        <Textarea
                          id="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                          placeholder="Tell us more about your business, specific requirements, or any questions you have..."
                          rows={4}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center pt-8">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="bg-gradient-primary hover:shadow-construction px-12"
                      >
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Questions About Our Stockist Program?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our team is here to help answer any questions about becoming a JAZEX stockist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  Call: 0411 430 652
                </Button>
                <Button variant="outline" size="lg">
                  Email: sales@jazex.com.au
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BecomeStockist;