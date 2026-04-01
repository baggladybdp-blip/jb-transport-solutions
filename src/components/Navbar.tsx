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
    <header className="fixed inset-x-0 top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="container grid grid-cols-3 items-center h-24">
        
        {/* LEFT: LOGO + NAME */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="JB Logo"
            className="h-12 w-12 object-contain"
          />

          <div>
            <p className="text-lg font-black uppercase tracking-wide text-white leading-none">
              JB Transportation & Towing
            </p>
            <p className="text-[10px] tracking-[0.25em] text-gray-400 mt-1">
              TRANSPORT • TOWING • COURIER
            </p>
          </div>
        </div>

        {/* CENTER: NAV (TRUE CENTER) */}
        <div className="hidden md:flex justify-center">
          <nav className="flex gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-semibold uppercase tracking-[0.15em] ${
                    active ? "text-red-500" : "text-white"
                  } hover:text-red-500`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="hidden md:flex justify-end items-center gap-4">
          <a href="https://www.facebook.com/share/1B1sBESGTK/?mibextid=wwXIfr" target="_blank">
            <Facebook className="h-5 w-5 text-white hover:text-red-500" />
          </a>

          <a href="https://www.instagram.com/jbtranspotow/" target="_blank">
            <Instagram className="h-5 w-5 text-white hover:text-red-500" />
          </a>

          <a href="tel:4143063970">
            <Button className="bg-red-500 hover:bg-red-600 text-white font-bold px-4">
              414-306-3970
            </Button>
          </a>
        </div>

        {/* MOBILE MENU */}
        <button
          className="md:hidden justify-self-end text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <nav className="container flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;