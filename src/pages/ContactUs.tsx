import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Building } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-steel">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="text-primary">JAZEX</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for sales inquiries, technical support, or any questions about our puddle flange products.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            
            {/* Sales Contact */}
            <div className="bg-background rounded-lg p-6 border border-border shadow-steel">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Sales Contact</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Zach</p>
                <p className="text-muted-foreground">0411 430 652</p>
              </div>
            </div>

            {/* Technical Contact */}
            <div className="bg-background rounded-lg p-6 border border-border shadow-steel">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Technical Contact</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Adrian</p>
                <p className="text-muted-foreground">0413 428 228</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-background rounded-lg p-6 border border-border shadow-steel">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <div className="space-y-2">
                <a 
                  href="mailto:sales@jazex.com.au" 
                  className="text-primary hover:underline"
                >
                  sales@jazex.com.au
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-background rounded-lg p-6 border border-border shadow-steel">
              <div className="flex items-center mb-4">
                <Building className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">John</h3>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">0419 750 066</p>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            
            {/* Postal Address */}
            <div className="bg-background rounded-lg p-6 border border-border shadow-steel">
              <div className="flex items-start mb-4">
                <Mail className="h-6 w-6 text-primary mr-3 mt-1" />
                <h3 className="text-xl font-semibold">Postal Address</h3>
              </div>
              <div className="space-y-1 text-muted-foreground">
                <p>JAZEX Pty Ltd</p>
                <p>PO Box 5376</p>
                <p>Maroochydore BC, QLD 4558</p>
                <p>Australia</p>
              </div>
            </div>

            {/* Physical Address */}
            <div className="bg-background rounded-lg p-6 border border-border shadow-steel">
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                <h3 className="text-xl font-semibold">Physical Address</h3>
              </div>
              <div className="space-y-1 text-muted-foreground">
                <p>1/8 Tectonic Cres</p>
                <p>Kunda Park QLD 4556</p>
                <p>Australia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;