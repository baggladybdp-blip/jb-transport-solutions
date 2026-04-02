// File: src/pages/Courier.tsx

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Shield,
  Truck,
  Building2,
} from "lucide-react";
import Layout from "@/components/Layout";

import courierVanImg from "@/assets/courier-van.png";

const courierUses = [
  "Medical deliveries",
  "Legal document delivery",
  "Title and escrow documents",
  "Business-to-business deliveries",
  "Same-day and scheduled routes",
];

const trustPoints = [
  {
    icon: Clock,
    title: "Time-Sensitive Delivery",
    text: "Built for businesses that depend on fast, accurate, and on-time deliveries.",
  },
  {
    icon: Shield,
    title: "Professional Handling",
    text: "Documents and items are handled with care, confidentiality, and professionalism.",
  },
  {
    icon: Truck,
    title: "Flexible Routing",
    text: "Available for same-day, scheduled, and recurring delivery needs.",
  },
  {
    icon: Building2,
    title: "Business-Focused",
    text: "Designed for offices, firms, and organizations that need dependable delivery support.",
  },
];

const processSteps = [
  {
    title: "Request a delivery",
    text: "Tell us what needs to be delivered, where it’s going, and timing.",
  },
  {
    title: "Get confirmation",
    text: "We confirm details quickly so you know your delivery is handled.",
  },
  {
    title: "Pickup & delivery",
    text: "We complete the delivery with clear communication and follow-through.",
  },
];

const Courier = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Courier Services
            </p>

            <h1 className="mb-6 text-4xl font-heading font-black leading-tight md:text-5xl">
              Reliable Business Delivery When Timing Matters
            </h1>

            <p className="mb-6 text-lg text-white/80">
              JB Transportation & Towing provides dependable courier services for businesses that
              need fast, professional, and consistent delivery support.
            </p>

            <p className="mb-8 text-base text-white/70">
              Whether it’s urgent documents, scheduled routes, or overflow support, we help keep
              your operations moving.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/quote">
                <Button className="w-full bg-accent px-8 py-6 text-base font-bold text-white sm:w-auto">
                  Request Courier Service <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <a href="tel:4143063970">
                <Button
                  variant="outline"
                  className="w-full border-white bg-transparent px-8 py-6 text-base text-white hover:bg-white hover:text-black sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>

          <div>
            <img
              src={courierVanImg}
              alt="Courier van"
              className="h-full w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-accent py-4">
        <div className="container flex flex-wrap justify-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-semibold">Reliable & Professional</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-semibold">Fast Response</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold">Local Service Area</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            <span className="text-sm font-semibold">Same-Day Available</span>
          </div>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="bg-white py-20">
        <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Courier Services Built for Business Operations
            </h2>

            <p className="mb-6 max-w-2xl text-base text-slate-600">
              We understand that delivery is not just about moving items — it’s about timing,
              reliability, and trust. JB Transportation & Towing supports businesses that depend
              on consistent delivery execution.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {courierUses.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border bg-slate-50 p-4"
                >
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold">A Strong Fit For</h3>

            <div className="space-y-3 text-sm">
              <p>• Medical offices</p>
              <p>• Law firms</p>
              <p>• Title companies</p>
              <p>• Accounting offices</p>
              <p>• Local businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Businesses Use JB for Courier
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <item.icon className="mb-4 h-10 w-10 text-accent" />
                <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOW RISK */}
      <section className="py-20 text-center">
        <div className="container max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold">
            Start with Overflow or Backup Deliveries
          </h2>
          <p className="text-slate-600">
            Many businesses begin by using us when their current system is overloaded.
            As reliability is proven, we grow into a consistent delivery partner.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Simple Delivery Process
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-lg font-bold">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20 text-center">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Need Reliable Delivery Support?
          </h2>

          <p className="mb-8 text-white/90">
            Get started with fast, professional courier service today.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
            <Link to="/quote">
              <Button className="bg-black px-10 py-6 text-white">
                Request Service
              </Button>
            </Link>

            <a href="tel:4143063970">
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
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