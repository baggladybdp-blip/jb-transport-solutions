import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/jb-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img src={logo} alt="JB Transportation & Towing" className="h-20 w-auto self-start" />
            <p className="text-sm text-silver font-body">
              From Vehicles to Vital Deliveries — We Move What Matters.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-silver hover:text-accent transition-colors text-sm">Home</Link>
              <Link to="/services" className="text-silver hover:text-accent transition-colors text-sm">Services</Link>
              <Link to="/quote" className="text-silver hover:text-accent transition-colors text-sm">Request a Quote</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:4143063970" className="flex items-center gap-2 text-silver hover:text-accent transition-colors text-sm">
                <Phone className="w-4 h-4 text-accent" />
                414-306-3970
              </a>
              <div className="flex items-start gap-2 text-silver text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>9870 S. 31st St, Franklin, Wisconsin</span>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-accent transition-colors rounded-full p-2">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-accent transition-colors rounded-full p-2">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary mt-8 pt-6 text-center text-xs text-silver/60">
          © {new Date().getFullYear()} JB Transportation & Towing. All rights reserved. MC & DOT Registered. Fully Insured.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
