// File: src/pages/Towing.tsx

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Phone,
  Shield,
  Truck,
  Building2,
} from "lucide-react";
import Layout from "@/components/Layout";
import towTruckImg from "@/assets/tow-truck.png";

const towingBenefits = [
  "Fast local towing response",
  "Self-load tow truck for efficient service",
  "Support for repair shops and businesses",
  "Property and private vehicle movement",
  "Fully insured and professional handling",
];

const towingClients = [
  "Local Drivers",
  "Auto Repair Shops",
  "Dealerships",
  "Property Managers",
  "Businesses",
  "Private Vehicle Owners",
];

const Towing = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="section-dark py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-heading font-bold uppercase tracking-[0.18em] text-accent">
                Towing Services
              </div>

              <h1 className="mb-6 text-4xl font-heading font-black leading-tight text-primary-foreground md:text-5xl">
                Fast, Reliable Towing When You Need It Most
              </h1>

              <p className="mb-6 text-lg font-body leading-relaxed text-silver">
                JB Transportation & Towing provides dependable local towing for drivers,
                repair shops, and businesses that need quick response and professional service.
              </p>

              <p className="mb-8 text-sm font-heading font-semibold uppercase tracking-[0.16em] text-accent">
                Fast Response • Local Service • Professional Handling
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/quote">
                  <Button className="w-full bg-accent px-8 py-6 text-lg font-heading font-bold text-accent-foreground hover:bg-accent/90 sm:w-auto">
                    Request Towing Service
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <a href="tel:4143063970">
                  <Button
                    variant="outline"
                    className="w-full border-white bg-transparent px-8 py-6 text-lg font-heading font-bold text-white hover:bg-white hover:text-black sm:w-auto"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={towTruckImg}
                alt="JB Transportation & Towing tow truck"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-accent py-4">
        <div className="container flex flex-wrap justify-center gap-6 text-center">
          <div className="flex items-center gap-2 text-accent-foreground">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-heading font-semibold">
              Fast Response
            </span>
          </div>

          <div className="flex items-center gap-2 text-accent-foreground">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-heading font-semibold">
              Fully Insured
            </span>
          </div>

          <div className="flex items-center gap-2 text-accent-foreground">
            <Truck className="h-5 w-5" />
            <span className="text-sm font-heading font-semibold">
              Local Milwaukee Coverage
            </span>
          </div>
        </div>
      </section>

      {/* WHY USE US */}
      <section className="bg-background py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-heading font-black text-foreground md:text-4xl">
              Built for Quick, Reliable Towing
            </h2>
            <p className="font-body text-muted-foreground">
              When you need towing, speed and reliability matter. Our service is designed
              for drivers and businesses who need dependable local support.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-heading font-bold text-foreground">
                What We Handle
              </h3>

              <ul className="space-y-3">
                {towingBenefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-body text-muted-foreground"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-heading font-bold text-foreground">
                Best Fit Clients
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {towingClients.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-muted px-4 py-3 text-center text-sm font-heading font-semibold text-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-accent/20 bg-accent/10 p-4">
                <p className="text-sm font-body text-foreground">
                  Need ongoing towing support for your business or property?
                  We can discuss consistent service options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-muted py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-heading font-black text-foreground md:text-4xl">
              Towing Services We Provide
            </h2>
            <p className="font-body text-muted-foreground">
              Our towing service supports both individual and business needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Truck className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-3 text-xl font-heading font-bold text-foreground">
                Local Towing
              </h3>
              <p className="text-sm font-body text-muted-foreground">
                Fast towing support for drivers needing reliable service within the Milwaukee area.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Building2 className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-3 text-xl font-heading font-bold text-foreground">
                Business Support
              </h3>
              <p className="text-sm font-body text-muted-foreground">
                Reliable towing support for repair shops, dealerships, and businesses.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Shield className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-3 text-xl font-heading font-bold text-foreground">
                Property & Vehicle Movement
              </h3>
              <p className="text-sm font-body text-muted-foreground">
                Professional vehicle movement services for property managers and private needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary py-24 text-center text-primary-foreground">
        <div className="container max-w-3xl">
          <h2 className="mb-4 text-3xl font-heading font-black md:text-4xl">
            Need Towing Right Now?
          </h2>

          <p className="mb-8 text-lg font-body text-silver">
            Call now for immediate assistance or request service online.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:4143063970">
              <Button className="bg-accent px-10 py-6 text-lg font-heading font-bold text-accent-foreground hover:bg-accent/90">
                Call Now
              </Button>
            </a>

            <Link to="/quote">
              <Button
                variant="outline"
                className="border-white bg-transparent px-10 py-6 text-lg font-heading font-bold text-white hover:bg-white hover:text-black"
              >
                Request Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Towing;