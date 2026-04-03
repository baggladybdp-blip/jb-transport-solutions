// File: src/pages/Community.tsx

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle,
  Handshake,
  Shield,
  Users,
} from "lucide-react";
import Layout from "@/components/Layout";

const pillars = [
  {
    icon: Users,
    title: "Workforce Reentry",
    text: "Creating structured pathways for individuals reentering society to move toward stable, productive work.",
  },
  {
    icon: Briefcase,
    title: "Job Readiness",
    text: "Building exposure to transportation, logistics, service work, and the professional expectations that come with it.",
  },
  {
    icon: Building2,
    title: "Business Partnership",
    text: "Working with employers, organizations, and community partners to create real opportunities and practical next steps.",
  },
];

const howItWorks = [
  "Connect with referral and community partners",
  "Identify participants who are ready for structured opportunity",
  "Provide exposure, hands-on learning, and work-readiness support",
  "Build pathways into transportation, logistics, and service-related work",
];

const businessImpact = [
  "Supports a company reinvesting into workforce development",
  "Helps create pathways into logistics and transportation careers",
  "Contributes to stronger communities through work and opportunity",
  "Strengthens long-term business and workforce sustainability",
];

export default function Community() {
  return (
    <Layout>
      <main className="bg-background pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container max-w-6xl">
          <section className="rounded-3xl bg-primary px-6 py-10 text-white shadow-lg md:px-10 md:py-14">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent md:text-sm">
                Community Initiative
              </p>

              <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                Workforce Reentry with a Real Path Toward Work
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-silver md:text-base">
                JB Transportation & Towing is building a workforce initiative
                focused on helping individuals reentering society move toward
                structured opportunities in transportation, logistics, and
                service-based careers.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-silver md:text-base">
                This is about creating practical pathways through work exposure,
                hands-on experience, and long-term partnership — not vague
                promises.
              </p>
            </div>
          </section>

          <section className="mt-12 md:mt-16">
            <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                What We’re Building
              </h2>
              <p className="mt-3 text-sm leading-6 text-silver md:text-base">
                A structured initiative designed to connect work, stability, and
                real opportunity.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 md:gap-6">
              {pillars.map((item) => (
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

          <section className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Shield className="h-8 w-8 text-accent" />
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Why This Matters
                </h2>
              </div>

              <p className="text-sm leading-7 text-slate-600 md:text-base">
                Many individuals returning to society face serious employment
                barriers. Without structure, opportunity, and access to work,
                long-term stability becomes harder to achieve.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                Employment can play a major role in reducing reoffending,
                strengthening families, and contributing to safer communities.
                This initiative is designed to support that reality through real
                pathways, not just good intentions.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Handshake className="h-8 w-8 text-accent" />
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  How We See It Working
                </h2>
              </div>

              <ul className="space-y-3">
                {howItWorks.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm leading-6 text-slate-600 md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-12 rounded-3xl bg-white px-6 py-10 shadow-md md:mt-16 md:px-10 md:py-12">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  How Businesses Are Part of It
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  Businesses that work with JB Transportation & Towing are part
                  of something bigger than a single transaction. By choosing to
                  work with us, they are supporting a company that is committed
                  to building workforce, creating opportunity, and growing
                  responsibly.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  This initiative is meant to create long-term value for
                  participants, partner organizations, employers, and the wider
                  community.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  Business Impact
                </h3>

                <ul className="space-y-3">
                  {businessImpact.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm leading-6 text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-12 md:mt-16">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Building Partnerships
              </h2>

              <p className="mt-4 max-w-4xl text-sm leading-7 text-silver md:text-base">
                We are actively interested in connecting with workforce
                development programs, reentry support organizations, training
                providers, employers, and community leaders who want to help
                build real, structured pathways into work.
              </p>

              <p className="mt-4 max-w-4xl text-sm leading-7 text-silver md:text-base">
                The goal is to create relationships that make this initiative
                stronger, more credible, and more effective over time.
              </p>
            </div>
          </section>

          <section className="mt-12 text-center md:mt-16">
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Want to Get Involved in the Initiative?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-silver md:text-base">
              Whether you represent an organization, employer, training partner,
              or community effort, there are multiple ways to support and engage
              with this initiative.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/community-interest" className="w-full sm:w-auto">
                <Button className="w-full bg-accent px-8 py-5 text-base font-semibold text-white hover:bg-accent/90 sm:w-auto">
                  Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <a href="tel:4143063970" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full border-white bg-transparent px-8 py-5 text-base text-white hover:bg-white hover:text-black sm:w-auto"
                >
                  Talk With Us
                </Button>
              </a>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}