// File: src/pages/About.tsx

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  MapPin,
  Shield,
  Truck,
  Users,
} from "lucide-react";
import Layout from "@/components/Layout";

const servicePoints = [
  "Vehicle transport for dealerships, auctions, and business needs",
  "Towing support for drivers, shops, and local business use",
  "Courier services for medical, legal, and business deliveries",
];

const whyChoose = [
  {
    icon: Truck,
    title: "Direct Service",
    text: "We work directly with clients and businesses without unnecessary middlemen or broker confusion.",
  },
  {
    icon: Shield,
    title: "Professional Approach",
    text: "We focus on communication, reliability, and handling every job with professionalism.",
  },
  {
    icon: Briefcase,
    title: "Built for Business",
    text: "We support one-time jobs, overflow work, backup service, and long-term business relationships.",
  },
  {
    icon: Users,
    title: "Growth-Focused",
    text: "We are building both service capacity and workforce pathways to create long-term value.",
  },
];

export default function About() {
  return (
    <Layout>
      <main className="bg-background pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container max-w-6xl">
          {/* HERO */}
          <section className="rounded-3xl bg-primary px-6 py-10 text-white shadow-lg md:px-10 md:py-14">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent md:text-sm">
                About JB Transportation & Towing
              </p>

              <h1 className="text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
                Reliable Transportation Support Built to Grow With Our Clients
              </h1>

              <p className="mt-5 text-sm leading-7 text-silver md:text-base">
                JB Transportation & Towing is a Milwaukee-area transportation
                company based in Franklin, Wisconsin, providing dependable
                vehicle transport, towing, and courier services for businesses
                and clients who need responsive, professional support.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-silver">
                <MapPin className="h-4 w-4 text-accent" />
                Franklin, WI • Serving Milwaukee and surrounding areas
              </div>
            </div>
          </section>

          {/* WHO WE ARE */}
          <section className="mt-12 grid gap-6 md:mt-16 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Who We Are
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                We built JB Transportation & Towing to serve real transportation
                and service needs with clear communication, dependable
                follow-through, and a professional approach to every job.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                Our focus is not just on getting one job done — it is on
                becoming a transportation partner that businesses and clients
                feel comfortable using again and again.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                Many of our clients may start with one-time jobs, overflow
                support, or backup needs. Our goal is to turn those
                opportunities into trusted, long-term working relationships.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h3 className="text-xl font-bold text-white md:text-2xl">
                What We Do
              </h3>

              <ul className="mt-5 space-y-4">
                {servicePoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm leading-6 text-silver md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* WHY CLIENTS WORK WITH US */}
          <section className="mt-12 md:mt-16">
            <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Why Clients Work With JB
              </h2>
              <p className="mt-3 text-sm leading-6 text-silver md:text-base">
                We are building a company that clients can use with confidence,
                whether they need one-time support or a dependable long-term
                partner.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 md:gap-6">
              {whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-sm md:p-6"
                >
                  <item.icon className="mb-4 h-10 w-10 text-accent" />
                  <h3 className="mb-3 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-silver">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BUSINESS + COMMUNITY DIRECTION */}
          <section className="mt-12 rounded-3xl bg-white px-6 py-10 shadow-md md:mt-16 md:px-10 md:py-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                More Than a Service Company
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                JB Transportation & Towing is also developing a workforce
                initiative tied to transportation, logistics, and structured
                employment pathways. That means we are building more than
                day-to-day service capacity — we are building long-term value.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                We want our business to stand for reliable service, stronger
                partnerships, and practical opportunity. That direction helps us
                serve clients well while building something meaningful over time.
              </p>

              <div className="mt-6">
                <Link to="/community">
                  <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                    Learn About Our Community Initiative
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 text-center md:mt-16">
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Let’s Work Together
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-silver md:text-base">
              Whether you need transport, towing, courier support, or a
              dependable company you can grow with over time, JB Transportation
              & Towing is ready to talk.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/quote" className="w-full sm:w-auto">
                <Button className="w-full bg-accent px-8 py-5 text-base font-bold text-white hover:bg-accent/90 sm:w-auto">
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <a href="tel:4143063970" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full border-white bg-transparent px-8 py-5 text-base text-white hover:bg-white hover:text-black sm:w-auto"
                >
                  Call 414-306-3970
                </Button>
              </a>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}