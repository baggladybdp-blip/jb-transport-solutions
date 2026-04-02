// File: src/pages/Index.tsx

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Shield,
  Truck,
  Users,
} from "lucide-react";
import Layout from "@/components/Layout";

import heroImg from "@/assets/hero-transport.png";
import vehicleTransportImg from "@/assets/vehicle-transport.png";
import towTruckImg from "@/assets/tow-truck.png";
import courierVanImg from "@/assets/courier-van.png";

const trustItems = [
  { icon: Shield, label: "MC & DOT Registered" },
  { icon: Shield, label: "Fully Insured" },
  { icon: MapPin, label: "Based in Franklin, WI" },
  { icon: Truck, label: "Serving Milwaukee & Surrounding Areas" },
];

const services = [
  {
    title: "Vehicle Transport",
    image: vehicleTransportImg,
    items: ["Dealer transfers", "Auction pickups", "Multi-car hauling"],
  },
  {
    title: "Self-Load Towing",
    image: towTruckImg,
    items: ["Fast response", "Local towing", "Business support"],
  },
  {
    title: "Courier Services",
    image: courierVanImg,
    items: ["Medical delivery", "Legal delivery", "Same-day routes"],
  },
];

const whyChoose = [
  {
    icon: Truck,
    title: "Direct Service",
    text: "Work directly with JB Transportation & Towing without broker delays or unnecessary middlemen.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    text: "Built for businesses and clients who need quick communication, dependable scheduling, and real follow-through.",
  },
  {
    icon: Users,
    title: "Business-Focused",
    text: "Positioned to support dealerships, offices, shops, and repeat clients who need reliable service.",
  },
  {
    icon: Shield,
    title: "Professional & Insured",
    text: "Registered, insured, and built to handle transport, towing, and courier work professionally.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Fleet" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container relative z-10 pt-24 pb-16 md:py-36">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-3xl font-heading font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Reliable Transportation Built for Businesses That Need Support
            </h1>

            <p className="mb-5 max-w-xl text-base leading-7 text-gray-300 md:text-lg">
              Vehicle transport, towing, and courier services across Milwaukee and surrounding
              areas. Built for businesses that need dependable, responsive, and professional
              support.
            </p>

            <p className="mb-7 text-xs font-semibold uppercase tracking-wide text-accent md:text-sm">
              Start as Backup • Grow Into a Reliable Partner
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/quote" className="w-full sm:w-auto">
                <Button className="w-full bg-accent px-6 py-5 text-base font-bold sm:w-auto sm:px-8 sm:py-6 sm:text-lg">
                  Request a Quote
                </Button>
              </Link>

              <a href="tel:4143063970" className="w-full sm:w-auto">
                <Button className="w-full bg-white px-6 py-5 text-base text-black hover:bg-gray-100 sm:w-auto sm:px-8 sm:py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-accent py-4">
        <div className="container flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:gap-6">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-white">
              <item.icon className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-xs font-semibold sm:text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
              Services Built Around Your Needs
            </h2>
            <p className="text-sm leading-6 text-slate-600 md:text-base">
              Built to support businesses, repeat clients, and one-time needs with dependable
              service and clear communication.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-4 shadow-md transition hover:shadow-xl md:p-6"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="mb-4 h-44 w-full rounded-xl object-cover md:mb-5 md:h-52"
                />

                <h3 className="mb-3 text-lg font-bold text-slate-900 md:mb-4 md:text-xl">
                  {service.title}
                </h3>

                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center md:mt-12">
            <Link to="/services">
              <Button className="bg-black px-6 py-5 text-sm text-white md:px-6 md:py-4 md:text-base">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
              Why Businesses Choose JB
            </h2>
            <p className="text-sm leading-6 text-muted-foreground md:text-base">
              Reliable service, direct communication, and a structure built for long-term support.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md md:p-6"
              >
                <item.icon className="mb-4 h-9 w-9 text-accent md:h-10 md:w-10" />
                <h3 className="mb-2 text-base font-bold text-slate-900 md:mb-3 md:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOW RISK ENTRY */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900 md:mb-4 md:text-3xl">
            Start Small. Scale With Confidence.
          </h2>
          <p className="text-sm leading-7 text-muted-foreground md:text-base">
            Many of our clients begin by using us for overflow or backup support. As we prove
            reliability and consistency, we grow into a long-term partner.
          </p>
        </div>
      </section>

      {/* WORKFORCE */}
      <section className="bg-white py-16 md:py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900 md:mb-4 md:text-3xl">
            More Than a Service — We’re Building Workforce
          </h2>
          <p className="text-sm leading-7 text-muted-foreground md:text-base">
            JB Transportation & Towing is actively developing a workforce pipeline through hands-on
            training and employment pathways in the transportation industry. Businesses that work
            with us are also supporting real job opportunities and stronger communities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 text-center md:py-20">
        <div className="container">
          <h2 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl">
            Need Reliable Backup or Primary Support?
          </h2>

          <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-white/90 md:mb-8 md:text-base">
            Get a fast quote and start working with a dependable transportation partner.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link to="/quote" className="w-full sm:w-auto">
              <Button className="w-full bg-black px-8 py-5 text-base text-white sm:w-auto sm:px-10 sm:py-6 sm:text-lg">
                Request a Quote
              </Button>
            </Link>

            <a href="tel:4143063970" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full border-black bg-transparent px-8 py-5 text-base text-black hover:bg-black hover:text-white sm:w-auto sm:px-10 sm:py-6 sm:text-lg"
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

export default Index;