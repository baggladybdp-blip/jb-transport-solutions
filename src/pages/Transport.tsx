// File: src/pages/Transport.tsx

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
import vehicleTransportImg from "@/assets/vehicle-transport.png";

const transportBenefits = [
  "Dealer-to-dealer transfers",
  "Auction pickups and delivery",
  "Multi-car hauling support",
  "Direct communication with no broker delays",
  "Reliable scheduling and professional handling",
];

const transportClients = [
  "Dealerships",
  "Auto Auctions",
  "Independent Dealers",
  "Auto Repair Shops",
  "Fleet Buyers",
  "Business Accounts",
];

const Transport = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="section-dark py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-heading font-bold uppercase tracking-[0.18em] text-accent">
                Vehicle Transport Services
              </div>

              <h1 className="mb-6 text-4xl font-heading font-black leading-tight text-primary-foreground md:text-5xl">
                Direct Vehicle Transport for Dealers, Auctions & Business Clients
              </h1>

              <p className="mb-6 text-lg font-body leading-relaxed text-silver">
                JB Transportation & Towing provides dependable multi-car transport
                for dealerships, auctions, and businesses that need direct,
                professional vehicle movement without broker delays.
              </p>

              <p className="mb-8 text-sm font-heading font-semibold uppercase tracking-[0.16em] text-accent">
                Multi-Car Hauling • Direct Service • Reliable Scheduling
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/quote">
                  <Button className="w-full bg-accent px-8 py-6 text-lg font-heading font-bold text-accent-foreground hover:bg-accent/90 sm:w-auto">
                    Request Transport Quote
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
                src={vehicleTransportImg}
                alt="JB Transportation & Towing vehicle transport trailer"
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
            <Truck className="h-5 w-5" />
            <span className="text-sm font-heading font-semibold">
              Multi-Car Hauling
            </span>
          </div>

          <div className="flex items-center gap-2 text-accent-foreground">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-heading font-semibold">
              Direct Service
            </span>
          </div>

          <div className="flex items-center gap-2 text-accent-foreground">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-heading font-semibold">
              Reliable Scheduling
            </span>
          </div>
        </div>
      </section>

      {/* WHY USE US */}
      <section className="bg-background py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-heading font-black text-foreground md:text-4xl">
              Built for Businesses That Need Vehicle Movement
            </h2>
            <p className="font-body text-muted-foreground">
              This service is designed for clients who need dependable transport,
              professional communication, and direct scheduling without the confusion
              of broker-driven service.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-heading font-bold text-foreground">
                What We Handle
              </h3>

              <ul className="space-y-3">
                {transportBenefits.map((item) => (
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
                {transportClients.map((item) => (
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
                  Need repeat transport support? We can also discuss ongoing
                  vehicle movement for dealers and business accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPORT USE CASES */}
      <section className="bg-muted py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-heading font-black text-foreground md:text-4xl">
              Transport Work We Support
            </h2>
            <p className="font-body text-muted-foreground">
              Vehicle transport needs vary by client. This page is built to show
              exactly where our transport service fits.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Building2 className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-3 text-xl font-heading font-bold text-foreground">
                Dealer Transfers
              </h3>
              <p className="text-sm font-body text-muted-foreground">
                Direct vehicle movement between lots and locations for dealerships
                needing reliable support.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Truck className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-3 text-xl font-heading font-bold text-foreground">
                Auction Pickups
              </h3>
              <p className="text-sm font-body text-muted-foreground">
                Reliable transport for auction purchases and post-sale vehicle movement.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Shield className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-3 text-xl font-heading font-bold text-foreground">
                Business Accounts
              </h3>
              <p className="text-sm font-body text-muted-foreground">
                Ongoing transport support for companies that need direct communication
                and dependable scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl border-t border-white/10 pt-10">
            <h3 className="text-lg font-bold uppercase tracking-wide text-white">
              More Than a Service
            </h3>

            <p className="mt-4 max-w-2xl leading-relaxed text-silver">
              Our work also supports workforce reentry and training opportunities
              within our community. By working with us, you are helping create
              real pathways for individuals building a second chance through
              employment and skill development.
            </p>

            <Link
              to="/community"
              className="inline-block mt-4 font-semibold text-accent hover:underline"
            >
              Learn About Our Community Initiative →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary py-24 text-center text-primary-foreground">
        <div className="container max-w-3xl">
          <h2 className="mb-4 text-3xl font-heading font-black md:text-4xl">
            Need Vehicle Transport You Can Count On?
          </h2>

          <p className="mb-8 text-lg font-body text-silver">
            Request a quote now or call directly to discuss dealer transport,
            auction pickups, or ongoing business transport needs.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/quote">
              <Button className="bg-accent px-10 py-6 text-lg font-heading font-bold text-accent-foreground hover:bg-accent/90">
                Request Transport Quote
              </Button>
            </Link>

            <a href="tel:4143063970">
              <Button
                variant="outline"
                className="border-white bg-transparent px-10 py-6 text-lg font-heading font-bold text-white hover:bg-white hover:text-black"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 414-306-3970
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transport;