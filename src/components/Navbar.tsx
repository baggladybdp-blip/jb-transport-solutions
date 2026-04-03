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
      <div className="container flex h-20 items-center justify-between xl:h-24">
        {/* LEFT: BRAND UNIT */}
        <div className="flex min-w-0 items-center">
          <Link
            to="/"
            className="flex min-w-0 items-center"
            onClick={() => setOpen(false)}
          >
            <img
              src={logo}
              alt="JB Logo"
              className="h-20 w-auto shrink-0 object-contain xl:h-24"
            />

            <div className="-ml-[22px] flex min-w-0 flex-col items-center leading-none md:-ml-[26px]">
              <div className="text-sm font-semibold tracking-wide text-white sm:text-base xl:text-[18px]">
                Transportation
              </div>

              <div className="mt-0.5 flex items-center justify-center gap-2 xl:gap-3">
                <span className="h-[2px] w-10 bg-red-600 sm:w-12 xl:w-16" />
                <span className="text-sm font-semibold tracking-wide text-white sm:text-base xl:text-[18px]">
                  &amp; Towing
                </span>
                <span className="h-[2px] w-10 bg-red-600 sm:w-12 xl:w-16" />
              </div>

              <div className="mt-1 text-center text-[9px] tracking-[0.18em] text-gray-400 sm:text-[10px] xl:text-[11px] xl:tracking-[0.22em]">
                TRANSPORT • TOWING • COURIER
              </div>
            </div>
          </Link>
        </div>

        {/* DESKTOP RIGHT SIDE */}
        <div className="hidden items-center gap-5 xl:flex">
          <nav className="flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors 2xl:text-[13px] ${
                    isActive ? "text-red-500" : "text-white hover:text-red-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
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
            <Button className="bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 2xl:px-5">
              <Phone className="mr-2 h-4 w-4" />
              414-306-3970
            </Button>
          </Link>
        </div>

        {/* MOBILE / TABLET MENU BUTTON */}
        <button
          type="button"
          className="ml-4 text-white xl:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* MOBILE / TABLET MENU */}
      {open && (
        <div className="border-t border-white/10 bg-black xl:hidden">
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