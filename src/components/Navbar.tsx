// File: src/components/Navbar.tsx

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/jb-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/community", label: "Community" },
  { to: "/quote", label: "Quote" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur-md">
      <div className="container grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 md:h-24 md:gap-8">
        {/* BRAND */}
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3 pr-2 md:gap-4 md:pr-6"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="JB Logo"
            className="h-9 w-9 shrink-0 object-contain md:h-11 md:w-11"
          />

          <div className="min-w-0 leading-tight">
            <p className="truncate font-heading text-sm font-black uppercase tracking-wide text-primary-foreground md:text-base xl:text-[17px]">
              JB Transportation & Towing
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.24em] text-silver md:text-[10px] md:tracking-[0.28em]">
              Transport • Towing • Courier
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden justify-center md:flex">
          <nav className="flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative pb-1 font-heading text-sm font-semibold uppercase tracking-[0.14em] transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-primary-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-0 -bottom-[2px] h-[2px] rounded-full bg-accent transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-4 md:flex">
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
            <Button className="gap-2 bg-accent font-heading font-bold text-accent-foreground shadow-sm hover:bg-accent/90">
              <Phone className="h-4 w-4" />
              414-306-3970
            </Button>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          className="justify-self-end rounded-md p-1 text-primary-foreground transition-colors hover:text-accent md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                  className={`rounded-lg px-1 py-1 text-lg font-semibold uppercase tracking-[0.14em] transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-primary-foreground hover:text-accent"
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
              <Button className="mt-1 w-full gap-2 bg-accent font-heading font-bold text-accent-foreground hover:bg-accent/90">
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