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
      <div className="container flex h-24 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-transparent">
            <img
              src={logo}
              alt="JB Transportation & Towing"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="hidden min-w-0 lg:block">
            <p className="truncate font-heading text-lg font-black uppercase tracking-wide text-primary-foreground">
              JB Transportation & Towing
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-silver">
              Transport • Towing • Courier
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-primary-foreground transition-colors hover:text-accent"
          >
            <Facebook className="h-5 w-5" />
          </a>

          <a
            href="https://instagram.com"
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

        <button
          type="button"
          className="text-primary-foreground md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-primary md:hidden">
          <nav className="container flex flex-col gap-5 py-6">
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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary-foreground transition-colors hover:text-accent"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://instagram.com"
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