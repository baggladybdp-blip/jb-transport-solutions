// File: src/components/Navbar.tsx

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Phone } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 bg-black">
      <div className="container flex h-20 items-center justify-between md:h-24">
        {/* LEFT: BRAND UNIT */}
        <div className="flex min-w-0 items-center">
          <Link
            to="/"
            className="ml-0 flex items-center"
            onClick={() => setOpen(false)}
          >
            <img
              src={logo}
              alt="JB Logo"
              className="h-20 w-auto shrink-0 object-contain md:h-24"
            />

            {/* TEXT LOCKUP */}
            <div className="-ml-[22px] flex flex-col items-center leading-none md:-ml-[26px]">
              <div className="text-[17px] font-semibold tracking-wide text-white md:text-[18px]">
                Transportation
              </div>

              {/* CENTER LINE + RED SIDE LINES */}
              <div className="mt-0.5 flex items-center justify-center gap-2 md:gap-3">
                <span className="h-[2px] w-14 bg-red-600 md:w-16" />
                <span className="text-[17px] font-semibold tracking-wide text-white md:text-[18px]">
                  &amp; Towing
                </span>
                <span className="h-[2px] w-14 bg-red-600 md:w-16" />
              </div>

              <div className="mt-1 text-center text-[10px] tracking-[0.22em] text-gray-400 md:text-[11px]">
                TRANSPORT • TOWING • COURIER
              </div>
            </div>
          </Link>
        </div>

        {/* DESKTOP RIGHT SIDE */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isActive ? "text-red-500" : "text-white hover:text-red-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1B1sBESGTK/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white transition-colors hover:text-red-500"
            >
              <Facebook className="h-4 w-4" />
            </a>

            <a
              href="https://www.instagram.com/jbtranspotow/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white transition-colors hover:text-red-500"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <Link to="/quote">
            <Button className="bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700">
              <Phone className="mr-2 h-4 w-4" />
              414-306-3970
            </Button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <nav className="container flex flex-col gap-4 py-5 text-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium ${
                    isActive ? "text-red-500" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="flex justify-center gap-4 pt-2">
              <a
                href="https://www.facebook.com/share/1B1sBESGTK/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white transition-colors hover:text-red-500"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/jbtranspotow/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white transition-colors hover:text-red-500"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <Link to="/quote" onClick={() => setOpen(false)}>
              <Button className="mt-2 w-full bg-red-600 text-white hover:bg-red-700">
                <Phone className="mr-2 h-4 w-4" />
                414-306-3970
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;