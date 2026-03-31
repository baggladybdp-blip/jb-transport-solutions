// File: src/components/Layout.tsx

import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-24 pb-20 md:pb-0">{children}</main>
      <Footer />

      {/* Mobile Sticky Conversion Bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-primary/95 p-3 backdrop-blur-md md:hidden">
        <div className="flex gap-3">
          <a href="tel:4143063970" className="flex-1">
            <Button className="w-full gap-2 bg-accent font-heading font-bold text-accent-foreground hover:bg-accent/90">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </a>

          <Link to="/quote" className="flex-1">
            <Button
              variant="outline"
              className="w-full border-white text-white hover:bg-white hover:text-black font-heading font-bold"
            >
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;