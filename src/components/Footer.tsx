// File: src/components/Footer.tsx

import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/jb-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md">
                <img
                  src={logo}
                  alt="JB Transportation & Towing"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="font-heading text-lg font-black uppercase tracking-wide">
                  JB Transportation & Towing
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-silver">
                  Transport • Towing • Courier
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm font-body leading-relaxed text-silver">
              From vehicles to vital deliveries, we provide dependable transport,
              towing, and courier services for businesses across Franklin,
              Milwaukee, and surrounding Wisconsin areas.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-lg font-bold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm text-silver transition-colors hover:text-accent"
              >
                Home
              </Link>

              <Link
                to="/services"
                className="text-sm text-silver transition-colors hover:text-accent"
              >
                Services
              </Link>

              <Link
                to="/quote"
                className="text-sm text-silver transition-colors hover:text-accent"
              >
                Request a Quote
              </Link>

              <Link
                to="/community"
                className="text-sm text-silver transition-colors hover:text-accent"
              >
                Community Initiative
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-lg font-bold">Contact</h4>

            <div className="flex flex-col gap-3">
              <a
                href="tel:4143063970"
                className="flex items-center gap-2 text-sm text-silver transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent" />
                414-306-3970
              </a>

              <div className="flex items-start gap-2 text-sm text-silver">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                <span>9870 S. 31st St, Franklin, Wisconsin</span>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-full bg-secondary p-2 transition-colors hover:bg-accent"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-full bg-secondary p-2 transition-colors hover:bg-accent"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-secondary pt-6 text-center text-xs text-silver/60">
          © {new Date().getFullYear()} JB Transportation & Towing. All rights
          reserved. MC & DOT Registered. Fully Insured.
        </div>
      </div>
    </footer>
  );
};

export default Footer;