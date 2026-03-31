// File: src/pages/Services.tsx

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Truck,
  Shield,
  Clock,
  FileText,
  Building2,
} from "lucide-react";
import Layout from "@/components/Layout";
import vehicleTransportImg from "@/assets/vehicle-transport.png";
import towTruckImg from "@/assets/tow-truck.png";
import courierVanImg from "@/assets/courier-van.png";

const Services = () => {
  return (
    <Layout>
      {/* HEADER */}
      <section className="section-dark py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="mb-4 text-4xl font-heading font-black md:text-5xl">
            Our <span className="text-accent">Services</span>
          </h1>

          <p className="text-lg text-silver">
            Built to support businesses and clients who need dependable
            transport, towing, and time-sensitive delivery across Milwaukee and surrounding areas.
          </p>
        </div>
      </section>

      {/* VEHICLE TRANSPORT */}
      <section className="bg-background py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Truck className="h-6 w-6 text-accent" />
                <span className="text-sm font-bold uppercase tracking-wider text-accent">
                  Vehicle Transport
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-black md:text-4xl">
                Direct Multi-Car Transport — No Brokers, No Delays
              </h2>

              <p className="mb-6 text-muted-foreground leading-relaxed">
                Our dually truck and 5-car trailer are positioned to move vehicles efficiently for dealerships,
                auctions, and businesses that need consistent, reliable transport.
              </p>

              <ul className="mb-8 space-y-3">
                {[
                  "Dealer-to-dealer transfers",
                  "Auction pickups and delivery",
                  "Multi-car hauling support",
                  "Direct service — no middlemen",
                  "Clear communication and scheduling",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/quote">
                <Button className="bg-accent font-bold">
                  Get Transport Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={vehicleTransportImg}
                alt="Vehicle transport"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TOWING */}
      <section className="bg-muted py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 overflow-hidden rounded-xl shadow-lg">
              <img
                src={towTruckImg}
                alt="Tow truck"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-accent" />
                <span className="text-sm font-bold uppercase tracking-wider text-accent">
                  Towing
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-black md:text-4xl">
                Fast, Local Towing You Can Depend On
              </h2>

              <p className="mb-6 text-muted-foreground leading-relaxed">
                Built for quick response and dependable service, our self-load tow truck supports drivers,
                shops, and businesses across the Milwaukee area.
              </p>

              <ul className="mb-8 space-y-3">
                {[
                  "Fast local response",
                  "Repair shop support",
                  "Business towing",
                  "Property vehicle movement",
                  "Insured and professional",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/quote">
                <Button className="bg-accent font-bold">
                  Get Towing Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COURIER */}
      <section className="bg-background py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-accent" />
                <span className="text-sm font-bold uppercase tracking-wider text-accent">
                  Courier
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-black md:text-4xl">
                Time-Sensitive Delivery for Businesses
              </h2>

              <p className="mb-6 text-muted-foreground leading-relaxed">
                Reliable same-day and scheduled delivery for medical, legal, and business clients
                who need consistency and speed.
              </p>

              <ul className="mb-8 space-y-3">
                {[
                  "Medical deliveries",
                  "Legal document delivery",
                  "Same-day service",
                  "Scheduled routes",
                  "Secure handling",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/quote">
                <Button className="bg-accent font-bold">
                  Get Courier Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={courierVanImg}
                alt="Courier van"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTRACT CTA */}
      <section className="section-dark py-24 text-center">
        <div className="container max-w-3xl">
          <Building2 className="mx-auto mb-6 h-12 w-12 text-accent" />

          <h2 className="mb-4 text-3xl font-black md:text-4xl">
            Need a Reliable Transportation Partner?
          </h2>

          <p className="mb-8 text-silver">
            We work with dealerships, offices, and businesses that need consistent, dependable service.
          </p>

          <div className="mb-10 flex justify-center gap-6 flex-wrap text-sm text-silver">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              Scheduled Routes
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              Fully Insured
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              Direct Communication
            </div>
          </div>

          <Link to="/quote">
            <Button className="bg-accent px-10 py-6 text-lg font-bold">
              Request Contract Info <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;