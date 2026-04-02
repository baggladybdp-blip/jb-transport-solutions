// File: src/pages/Towing.tsx

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

import towTruckImg from "@/assets/tow-truck.png";

const towingUses = [
  "Local towing support",
  "Business and shop support",
  "Overflow and backup towing",
  "Vehicle relocation",
  "Fast-response service needs",
];

const trustPoints = [
  {
    icon: Clock,
    title: "Fast Response",
    text: "Built for situations where timing matters and clients need dependable communication.",
  },
  {
    icon: Shield,
    title: "Professional Handling",
    text: "Vehicles are handled with care, professionalism, and attention to the customer experience.",
  },
  {
    icon: Truck,
    title: "Reliable Local Support",
    text: "Structured to support towing needs across Franklin, Milwaukee, and surrounding areas.",
  },
  {
    icon: Building2,
    title: "Business-Ready Service",
    text: "A strong fit for repair shops, property-related needs, and businesses needing dependable towing help.",
  },
];

const processSteps = [
  {
    title: "Call or request service",
    text: "Let us know what vehicle needs help, where it is, and what kind of support is needed.",
  },
  {
    title: "Get quick confirmation",
    text: "We respond with next steps so you know your service request is being handled.",
  },
  {
    title: "Pickup and transport",
    text: "We complete the tow with professional handling and clear communication throughout.",
  },
];

const Towing = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Towing Services
            </p>

            <h1 className="mb-6 text-4xl font-heading font-black leading-tight md:text-5xl">
              Reliable Towing Support When You Need Fast, Professional Help
            </h1>

            <p className="mb-6 text-lg text-white/80">
              JB Transportation & Towing provides dependable local towing support for drivers,
              businesses, shops, and property-related needs across Franklin, Milwaukee, and surrounding areas.
            </p>

            <p className="mb-8 text-base text-white/70">
              Whether you need one-time service, overflow support, or a dependable towing option
              for repeat needs, we are built to respond professionally.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/quote">
                <Button className="w-full bg-accent px-8 py-6 text-base font-bold text-white sm:w-auto">
                  Request Towing Service <ArrowRight className="ml-2 h-5 w-5" />
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
              src={towTruckImg}
              alt="Tow truck"
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
            <span className="text-sm font-semibold">Professional Service</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-semibold">Fast Response</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold">Franklin / Milwaukee Area</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            <span className="text-sm font-semibold">Business Support Available</span>
          </div>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="bg-white py-20">
        <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Towing Support Built Around Real Needs
            </h2>

            <p className="mb-6 max-w-2xl text-base leading-7 text-slate-600">
              Towing is not just about moving a vehicle — it is about showing up, communicating
              clearly, and handling the situation professionally. JB Transportation & Towing is
              positioned to support local towing needs with dependable service and a business-ready approach.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {towingUses.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-slate-900">A Strong Fit For</h3>

            <div className="space-y-3 text-sm text-slate-600">
              <p>• Local drivers needing dependable towing</p>
              <p>• Repair shops needing support</p>
              <p>• Businesses needing overflow help</p>
              <p>• Property-related towing needs</p>
              <p>• Clients looking for responsive local service</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Why People and Businesses Use JB for Towing
            </h2>
            <p className="text-slate-600">
              Reliable communication, professional handling, and support built for real-world towing needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <item.icon className="mb-4 h-10 w-10 text-accent" />
                <h3 className="mb-3 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOW-RISK ENTRY */}
      <section className="bg-white py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            A Good Option for Overflow, Backup, and Repeat Support
          </h2>
          <p className="text-base leading-7 text-slate-600">
            Businesses do not always need to replace an existing provider to work with us.
            JB Transportation & Towing is a practical option for overflow calls, backup support,
            one-time service needs, and relationships that grow into repeat work.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Simple Towing Process
            </h2>
            <p className="text-slate-600">
              Clear communication from request to tow completion.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY / WORKFORCE */}
      <section className="bg-white py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            More Than Towing — We’re Building Workforce
          </h2>
          <p className="text-base leading-7 text-slate-600">
            JB Transportation & Towing is also building workforce pathways tied to transportation,
            service work, and real employment opportunities. Clients who work with us are supporting
            a company focused on both dependable service and long-term community impact through work.
          </p>

          <div className="mt-8">
            <Link to="/community">
              <Button
                variant="outline"
                className="border-black px-6 py-4 text-black hover:bg-black hover:text-white"
              >
                Learn About Our Community Initiative
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Need Fast, Reliable Towing Support?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-white/90">
            Whether you need one-time towing, overflow support, or a dependable local towing partner,
            JB Transportation & Towing is ready to help.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/quote">
              <Button className="bg-black px-10 py-6 text-base text-white">
                Request Service
              </Button>
            </Link>

            <a href="tel:4143063970">
              <Button
                variant="outline"
                className="border-black bg-transparent px-10 py-6 text-base text-black hover:bg-black hover:text-white"
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

export default Towing;