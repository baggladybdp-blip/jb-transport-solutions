// File: src/pages/Courier.tsx

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  Phone,
  Shield,
  Truck,
} from "lucide-react";
import Layout from "@/components/Layout";
import courierVanImg from "@/assets/courier-van.png";

const courierBenefits = [
  "Same-day delivery available",
  "Medical, legal, and business document support",
  "Scheduled route options for repeat clients",
  "Professional, secure handling",
  "Fast communication and dependable response",
];

const courierClients = [
  "Medical Offices",
  "Law Firms",
  "Title Companies",
  "Accounting Offices",
  "Pharmacies",
  "Local Businesses",
];

const Courier = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="section-dark py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-heading font-bold uppercase tracking-[0.18em] text-accent">
                Courier Delivery Services
              </div>

              <h1 className="mb-6 text-4xl font-heading font-black leading-tight text-primary-foreground md:text-5xl">
                Same-Day Courier Service for Medical, Legal &amp; Business Delivery
              </h1>

              <p className="mb-6 text-lg font-body leading-relaxed text-silver">
                JB Transportation &amp; Towing provides dependable courier delivery
                for offices and businesses that need time-sensitive service,
                direct communication, and professional handling.
              </p>

              <p className="mb-8 text-sm font-heading font-semibold uppercase tracking-[0.16em] text-accent">
                Fast Response • Secure Handling • Local Coverage
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/quote">
                  <Button className="w-full bg-accent px-8 py-6 text-lg font-heading font-bold text-accent-foreground hover:bg-accent/90 sm:w-auto">
                    Request Courier Service
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
                src={courierVanImg}
                alt="JB Transportation & Towing courier van"
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
              Same-Day Delivery
            </span>
          </div>

          <div className="flex items-center gap-2 text-accent-foreground">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-heading font-semibold">
              Professional Handling
            </span>
          </div>

          <div className="flex items-center gap-2 text-accent-foreground">
            <Truck className="h-5 w-5" />
            <span className="text-sm font-heading font-semibold">
              Milwaukee Area Coverage
            </span>
          </div>
        </div>
      </section>

      {/* WHY USE US */}
      <section className="bg-background py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-heading font-black text-foreground md:text-4xl">
              Built for Businesses That Need Reliable Delivery
            </h2>
            <p className="font-body text-muted-foreground">
              When timing matters, communication matters too. Our courier service
              is designed for offices and professionals who need dependable
              local delivery support.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-heading font-bold text-foreground">
                What We Handle
              </h3>

              <ul className="space-y-3">
                {courierBenefits.map((item) => (
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
                {courierClients.map((item) => (
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
                  Need repeat delivery support? We can also discuss ongoing
                  courier needs for offices and business accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE TYPES */}
      <section className="bg-muted py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-heading font-black text-foreground md:text-4xl">
              Courier Services We Support
            </h2>
            <p className="font-body text-muted-foreground">
              Local delivery needs vary by business. This page is designed to
              show exactly where our courier support fits.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <FileText className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-3 text-xl font-heading font-bold text-foreground">
                Legal Delivery
              </h3>
              <p className="text-sm font-body text-muted-foreground">
                Document delivery for law offices, filings, and time-sensitive
                paperwork requiring professional handling.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Shield className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-3 text-xl font-heading font-bold text-foreground">
                Medical Delivery
              </h3>
              <p className="text-sm font-body text-muted-foreground">
                Local delivery support for medical offices, supplies, and other
                sensitive business-related items requiring dependable timing.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Truck className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-3 text-xl font-heading font-bold text-foreground">
                Business Courier
              </h3>
              <p className="text-sm font-body text-muted-foreground">
                Same-day and scheduled delivery for offices, title companies,
                accounting firms, and other local businesses.
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
              className="mt-4 inline-block font-semibold text-accent hover:underline"
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
            Need a Courier Service You Can Count On?
          </h2>

          <p className="mb-8 text-lg font-body text-silver">
            Request service now or call directly to discuss same-day delivery,
            scheduled routes, or ongoing courier support.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/quote">
              <Button className="bg-accent px-10 py-6 text-lg font-heading font-bold text-accent-foreground hover:bg-accent/90">
                Request Courier Service
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

export default Courier;