// File: src/pages/Transport.tsx

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

import vehicleTransportImg from "@/assets/vehicle-transport.png";

const transportUses = [
  "Dealer transfers",
  "Auction pickups",
  "Fleet and business vehicle movement",
  "Local, regional, and long-distance transport",
];

const trustPoints = [
  {
    icon: Truck,
    title: "Multi-Vehicle Capability",
    text: "Equipped with a dually truck and 5-car trailer setup to support efficient vehicle movement.",
  },
  {
    icon: Clock,
    title: "Responsive Scheduling",
    text: "Built for businesses that need dependable communication, organized pickup coordination, and real follow-through.",
  },
  {
    icon: Shield,
    title: "Professional Handling",
    text: "Registered, insured, and focused on transporting vehicles with care and professionalism.",
  },
  {
    icon: Building2,
    title: "Business-Oriented Support",
    text: "A strong fit for dealerships, auctions, independent dealers, and businesses that need reliable transport help.",
  },
];

const processSteps = [
  {
    title: "Share the vehicle details",
    text: "Tell us what needs to be moved, where it is located, and where it needs to go.",
  },
  {
    title: "Receive a fast quote",
    text: "We provide clear next-step communication so you can move forward quickly.",
  },
  {
    title: "Schedule pickup and delivery",
    text: "We coordinate timing and transport based on your needs, whether local or long distance.",
  },
];

const Transport = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Vehicle Transport
            </p>

            <h1 className="mb-6 text-4xl font-heading font-black leading-tight md:text-5xl">
              Reliable Vehicle Transport for Local, Regional, and Long-Distance Moves
            </h1>

            <p className="mb-6 text-lg text-white/80">
              JB Transportation & Towing supports dealerships, auctions, independent dealers,
              and businesses that need vehicles moved safely, professionally, and on schedule.
            </p>

            <p className="mb-8 text-base text-white/70">
              Whether you need help with a local transfer, a regional move, or longer-distance
              hauling, we’re available to support one-time jobs, overflow work, and repeat needs.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/quote">
                <Button className="w-full bg-accent px-8 py-6 text-base font-bold text-white sm:w-auto">
                  Request Transport Quote <ArrowRight className="ml-2 h-5 w-5" />
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
              src={vehicleTransportImg}
              alt="Vehicle transport trailer"
              className="h-full w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* QUICK TRUST STRIP */}
      <section className="bg-accent py-4">
        <div className="container flex flex-wrap justify-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-semibold">MC & DOT Registered</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-semibold">Fully Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold">Based in Franklin, WI</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            <span className="text-sm font-semibold">Long-Distance Transport Available</span>
          </div>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="bg-white py-20">
        <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Vehicle Transport Built Around Business Needs
            </h2>

            <p className="mb-6 max-w-2xl text-base leading-7 text-slate-600">
              We understand that businesses do not just need a truck — they need dependable
              coordination, clear communication, and confidence that vehicles will be moved
              professionally. JB Transportation & Towing is structured to support practical
              transport needs without broker confusion or unnecessary delays.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {transportUses.map((item) => (
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
              <p>• Dealerships needing reliable vehicle movement</p>
              <p>• Auto auctions and post-sale pickups</p>
              <p>• Independent dealers moving inventory</p>
              <p>• Businesses needing scheduled transport support</p>
              <p>• Clients looking for local, regional, or long-distance hauling</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE JB */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Why Businesses Use JB for Transport
            </h2>
            <p className="text-slate-600">
              We are building the kind of service businesses can start with confidently and continue using as needs grow.
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
            Start With Overflow or Backup Support
          </h2>
          <p className="text-base leading-7 text-slate-600">
            Not every client is looking to replace an existing provider immediately — and that is okay.
            JB Transportation & Towing is a strong option for overflow work, backup support, trial runs,
            and one-off moves that can grow into repeat business over time.
          </p>
        </div>
      </section>

      {/* SIMPLE PROCESS */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Simple Transport Process
            </h2>
            <p className="text-slate-600">
              Clear communication from quote to delivery.
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
            More Than Transport — We’re Building Workforce
          </h2>
          <p className="text-base leading-7 text-slate-600">
            JB Transportation & Towing is also developing workforce pathways tied to transportation,
            logistics, and real employment opportunities. Businesses that work with us are not only
            getting service — they are supporting a company building long-term capacity and stronger
            community impact through work.
          </p>

          <div className="mt-8">
            <Link to="/community">
              <Button variant="outline" className="border-black px-6 py-4 text-black hover:bg-black hover:text-white">
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
            Need Local or Long-Distance Vehicle Transport?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-white/90">
            Whether you need a one-time move, overflow support, or a transport partner you can build with,
            JB Transportation & Towing is ready to talk.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/quote">
              <Button className="bg-black px-10 py-6 text-base text-white">
                Request a Quote
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

export default Transport;