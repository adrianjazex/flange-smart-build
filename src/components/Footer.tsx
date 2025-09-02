import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-2xl mb-4">JAZEX</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Enhance leak prevention by implementing dual independent waterproofing membrane systems, complemented by Under Over puddle flanges. This design eliminates water trapping in screeds, ensuring superior protection and longevity.
            </p>
            <p className="text-primary-foreground/80 text-sm">
              Trusted by tradesmen and DIY enthusiasts across Australia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/#order" className="hover:text-accent transition-colors">Order Online</Link></li>
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
                <div className="flex flex-col">
                  <span>Zach: 0411 430 652</span>
                  <span>Adrian: 0413 428 228</span>
                  <span>John: 0419 750 066</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>sales@jazex.com.au</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Kunda Park QLD 4556, Australia</span>
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
                  <div className="text-sm">7:00 AM - 4:00 PM</div>
                </div>
              </div>
              <div className="ml-8">
                <div className="font-medium">Saturday</div>
                <div className="text-sm">Closed</div>
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
              © 2024 JAZEX. All rights reserved.
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