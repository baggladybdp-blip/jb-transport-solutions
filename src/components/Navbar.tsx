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
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-secondary">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="JB Transportation & Towing" className="h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading font-semibold text-sm uppercase tracking-wider transition-colors hover:text-accent ${
                location.pathname === link.to ? "text-accent" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="tel:4143063970">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold gap-2">
              <Phone className="w-4 h-4" />
              414-306-3970
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-primary border-t border-secondary">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`font-heading font-semibold text-lg uppercase tracking-wider transition-colors hover:text-accent ${
                  location.pathname === link.to ? "text-accent" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-secondary">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <a href="tel:4143063970">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold gap-2">
                <Phone className="w-4 h-4" />
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
