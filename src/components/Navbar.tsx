// File: src/components/Navbar.tsx

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/jb-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/quote", label: "Request a Quote" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur-md">
      <div className="container flex h-28 items-center justify-between">
        
        {/* 🔥 LARGE LOGO (MAIN BRAND) */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="JB Transportation & Towing"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* 🔥 NAV MOVED RIGHT */}
        <div className="flex items-center gap-10">
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-heading text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:text-accent ${
                    isActive ? "text-accent" : "text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1B1sBESGTK/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-accent"
            >
              <Facebook className="h-5 w-5" />
            </a>

            <a
              href="https://www.instagram.com/jbtranspotow/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-accent"
            >
              <Instagram className="h-5 w-5" />
            </a>

            <a href="tel:4143063970">
              <Button className="bg-accent font-bold gap-2">
                <Phone className="h-4 w-4" />
                414-306-3970
              </Button>
            </a>
          </div>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-primary">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-lg uppercase text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex gap-4 pt-4 border-t border-white/10">
              <Facebook className="h-5 w-5" />
              <Instagram className="h-5 w-5" />
            </div>

            <a href="tel:4143063970">
              <Button className="w-full bg-accent font-bold">
                Call Now: 414-306-3970
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;