// File: src/pages/Index.tsx

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
          <img
            src={heroImg}
            alt="Fleet"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container relative z-10 py-28 md:py-36">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-heading font-black leading-tight text-white md:text-5xl lg:text-6xl">
              Reliable Transport, <br />
              Towing & Courier Services
            </h1>

            <p className="mb-6 text-lg text-gray-300 md:text-xl">
              Fast, dependable vehicle transport, towing, and delivery services
              across Milwaukee and surrounding areas.
            </p>

            <p className="mb-8 text-sm font-semibold uppercase tracking-wide text-accent">
              Direct Service • No Brokers • Fast Response
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/quote">
                <Button className="w-full bg-accent px-8 py-6 text-lg font-bold sm:w-auto">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <a href="tel:4143063970">
                <Button
                  variant="outline"
                  className="flex w-full items-center justify-center border-white bg-transparent px-8 py-6 text-white hover:bg-white hover:text-black sm:w-auto"
                >
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
        <div className="container flex flex-wrap justify-center gap-6">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-white">
              <item.icon className="h-5 w-5" />
              <span className="text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Our Services
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-white p-6 shadow-md transition duration-300 hover:shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="mb-5 h-52 w-full rounded-lg object-cover"
                />

                <h3 className="mb-4 text-xl font-bold">{service.title}</h3>

                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services">
              <Button className="bg-black px-6 py-4 text-base text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-background py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose JB</h2>
            <p className="text-muted-foreground">
              Built to provide reliable service, direct communication, and a professional
              experience for business and local clients alike.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
              >
                <item.icon className="mb-4 h-10 w-10 text-accent" />
                <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20 text-center">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Need Reliable Service?
          </h2>

          <p className="mb-8 text-white/90">
            Get a fast quote and start working with a dependable transport
            partner.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/quote">
              <Button className="bg-black px-10 py-6 text-lg text-white">
                Request a Quote
              </Button>
            </Link>

            <a href="tel:4143063970">
              <Button
                variant="outline"
                className="border-black bg-transparent px-10 py-6 text-lg text-black hover:bg-black hover:text-white"
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