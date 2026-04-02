// File: src/components/Footer.tsx

import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/jb-logo.png";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/community", label: "Community" },
  { to: "/quote", label: "Request a Quote" },
];

const serviceLinks = [
  { to: "/transport", label: "Vehicle Transport" },
  { to: "/towing", label: "Towing Services" },
  { to: "/courier", label: "Courier Delivery" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-14 md:py-16">
        {/* TOP CTA STRIP */}
        <div className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-6 md:mb-14 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-black text-white md:text-3xl">
                Need a Reliable Transportation Partner?
              </h3>
              <p className="mt-3 text-sm leading-7 text-silver md:text-base">
                Whether you need transport, towing, courier support, or overflow
                help, JB Transportation & Towing is ready to work with you.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/quote" className="w-full sm:w-auto">
                <Button className="w-full bg-accent px-6 py-5 text-base font-bold text-white hover:bg-accent/90 sm:w-auto">
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <a href="tel:4143063970" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full border-white bg-transparent px-6 py-5 text-base text-white hover:bg-white hover:text-black sm:w-auto"
                >
                  Call 414-306-3970
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:gap-12">
          {/* BRAND */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/5 p-2 md:h-20 md:w-20">
                <img
                  src={logo}
                  alt="JB Transportation & Towing"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="font-heading text-base font-black uppercase tracking-wide md:text-lg">
                  JB Transportation & Towing
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-silver md:text-xs">
                  Transport • Towing • Courier
                </p>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-7 text-silver">
              JB Transportation & Towing provides dependable vehicle transport,
              towing, and courier services for businesses and clients across
              Franklin, Milwaukee, and surrounding areas.
            </p>

            <p className="max-w-md text-sm leading-7 text-silver">
              We are also building workforce pathways tied to transportation,
              logistics, and long-term community impact through work.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold text-white">
              Quick Links
            </h4>

            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-silver transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold text-white">
              Services
            </h4>

            <nav className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-silver transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold text-white">
              Contact
            </h4>

            <div className="flex flex-col gap-4">
              <a
                href="tel:4143063970"
                className="flex items-center gap-3 text-sm text-silver transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span>414-306-3970</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-silver">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Franklin, Wisconsin • Serving Milwaukee and surrounding areas</span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.facebook.com/share/1B1sBESGTK/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-full bg-white/10 p-2.5 text-primary-foreground transition-colors hover:bg-accent"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                <a
                  href="https://www.instagram.com/jbtranspotow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-full bg-white/10 p-2.5 text-primary-foreground transition-colors hover:bg-accent"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-center text-xs text-silver/70 md:flex-row md:items-center md:justify-between md:text-left">
            <p>
              © {new Date().getFullYear()} JB Transportation & Towing. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end">
              <span>MC & DOT Registered</span>
              <span>Fully Insured</span>
              <span>Franklin, WI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;