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
      <div className="container grid h-24 grid-cols-[auto_1fr_auto] items-center gap-8">
        {/* LEFT: BRAND */}
        <div className="flex items-center gap-4 pr-6">
          <img
            src={logo}
            alt="JB Logo"
            className="h-11 w-11 shrink-0 object-contain"
          />

          <div className="leading-tight">
            <p className="font-heading text-base font-black uppercase tracking-wide text-primary-foreground xl:text-[17px]">
              JB Transportation & Towing
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-silver">
              Transport • Towing • Courier
            </p>
          </div>
        </div>

        {/* CENTER: MENU */}
        <div className="hidden md:flex justify-center">
          <nav className="flex items-center gap-10">
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
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.facebook.com/share/1B1sBESGTK/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-primary-foreground transition-colors hover:text-accent"
          >
            <Facebook className="h-5 w-5" />
          </a>

          <a
            href="https://www.instagram.com/jbtranspotow/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-primary-foreground transition-colors hover:text-accent"
          >
            <Instagram className="h-5 w-5" />
          </a>

          <a href="tel:4143063970">
            <Button className="gap-2 bg-accent font-heading font-bold text-accent-foreground hover:bg-accent/90">
              <Phone className="h-4 w-4" />
              414-306-3970
            </Button>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          className="justify-self-end text-primary-foreground md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-primary md:hidden">
          <nav className="container flex flex-col gap-4 py-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`font-heading text-lg font-semibold uppercase tracking-[0.14em] transition-colors hover:text-accent ${
                    isActive ? "text-accent" : "text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="flex items-center gap-4 border-t border-white/10 pt-4">
              <a
                href="https://www.facebook.com/share/1B1sBESGTK/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary-foreground transition-colors hover:text-accent"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/jbtranspotow/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary-foreground transition-colors hover:text-accent"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <a href="tel:4143063970">
              <Button className="w-full gap-2 bg-accent font-heading font-bold text-accent-foreground hover:bg-accent/90">
                <Phone className="h-4 w-4" />
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