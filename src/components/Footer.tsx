import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-2xl mb-4">PuddleFlange Pro</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Revolutionary dual-stage puddle flange systems for professional waterproofing solutions.
            </p>
            <p className="text-primary-foreground/80 text-sm">
              Trusted by tradesmen and DIY enthusiasts across Australia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#products" className="hover:text-accent transition-colors">Product Range</a></li>
              <li><a href="#installation" className="hover:text-accent transition-colors">Installation Guide</a></li>
              <li><a href="#order" className="hover:text-accent transition-colors">Order Online</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Warranty Information</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>1800-FLANGE (1800-352-643)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>info@puddleflangepro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Sydney, Australia</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium">Monday - Friday</div>
                  <div className="text-sm">8:00 AM - 6:00 PM</div>
                </div>
              </div>
              <div className="ml-8">
                <div className="font-medium">Saturday</div>
                <div className="text-sm">9:00 AM - 2:00 PM</div>
              </div>
              <div className="ml-8">
                <div className="font-medium">Sunday</div>
                <div className="text-sm">Closed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/60 text-sm">
            <div>
              © 2024 PuddleFlange Pro. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Shipping Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;