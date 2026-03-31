// File: src/pages/Community.tsx

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Briefcase,
  Truck,
  Users,
  Shield,
  Handshake,
} from "lucide-react";
import Layout from "@/components/Layout";

const supportAreas = [
  "CDL career exposure and preparation support",
  "Guidance toward logistics and transportation pathways",
  "Work-readiness encouragement and professional direction",
  "Connection-building with workforce and community partners",
];

const pathwayItems = [
  "CDL school readiness support",
  "Exposure to trucking, towing, and logistics careers",
  "Mentorship and encouragement for next-step planning",
  "Partnership opportunities with workforce and reentry organizations",
];

const partnerItems = [
  "Reentry programs",
  "Workforce development organizations",
  "Community nonprofits",
  "Business sponsors",
  "Training partners",
  "Employers interested in second-chance talent",
];

const Community = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="section-dark py-24 text-center">
        <div className="container max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-heading font-bold uppercase tracking-[0.18em] text-accent">
            Community Commitment
          </div>

          <h1 className="mb-6 text-4xl font-heading font-black md:text-5xl">
            Mobility for Opportunity
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-silver">
            JB Transportation & Towing is committed to supporting individuals
            reentering the community by helping create pathways into CDL,
            logistics, and transportation-related careers.
          </p>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="bg-background py-24">
        <div className="container max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold">
            The Challenge We Want to Help Address
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            In the Milwaukee area, many individuals returning to the community
            face real barriers to employment, stability, and long-term
            opportunity. Reentry is not only about finding work. It is also
            about gaining direction, access, encouragement, and a pathway
            toward something sustainable.
          </p>
        </div>
      </section>

      {/* INITIATIVE */}
      <section className="bg-muted py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Second Chance Career Pathway Initiative
            </h2>

            <p className="text-muted-foreground">
              Our first focus is not passenger transportation. It is helping
              individuals reentering the community prepare for CDL school and
              explore other skills and opportunities connected to logistics,
              transportation, and workforce advancement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportAreas.map((item) => (
              <div key={item} className="rounded-xl bg-white p-6 shadow-sm">
                <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                <p className="text-sm font-semibold text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="bg-background py-24">
        <div className="container grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Truck className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold">What This Can Look Like</h3>
            </div>

            <ul className="space-y-3">
              {pathwayItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold">What We’re Building Toward</h3>
            </div>

            <p className="mb-4 text-muted-foreground">
              This initiative is about helping create real opportunity. That
              means exposure, preparation, partnership, and long-term pathways
              that can lead to stable work and practical career direction.
            </p>

            <div className="rounded-xl border border-accent/20 bg-accent/10 p-5">
              <p className="text-sm text-foreground">
                The long-term goal is to help connect motivated individuals with
                training, support, and industry pathways that can lead to
                meaningful next steps in transportation and logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-muted py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Handshake className="mx-auto mb-5 h-12 w-12 text-accent" />
            <h2 className="mb-4 text-3xl font-bold">
              How Others Can Get Involved
            </h2>

            <p className="text-muted-foreground">
              This commitment becomes stronger through collaboration. We welcome
              conversations with organizations, businesses, and sponsors that
              want to help create practical opportunities for those rebuilding
              their lives.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnerItems.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white px-5 py-4 text-center text-sm font-semibold text-foreground shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-background py-24 text-center">
        <div className="container max-w-3xl">
          <Users className="mx-auto mb-6 h-12 w-12 text-accent" />

          <h2 className="mb-4 text-3xl font-bold">Why This Matters</h2>

          <p className="text-muted-foreground leading-relaxed">
            Reentry support is not just about second chances in theory. It is
            about helping people move toward stability, skill development, and
            access to real opportunity. We want this initiative to reflect a
            serious commitment to community, workforce readiness, and practical
            next steps.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center text-primary-foreground">
        <div className="container max-w-3xl">
          <Shield className="mx-auto mb-5 h-10 w-10 text-accent" />

          <h2 className="mb-4 text-3xl font-bold">
            Partner With Us or Learn More
          </h2>

          <p className="mb-8 text-silver">
            If you are a reentry program, workforce organization, training
            partner, sponsor, or employer interested in helping build this
            effort, we would love to connect.
          </p>

          <Link to="/quote">
            <Button className="bg-accent px-10 py-6 text-lg font-bold text-accent-foreground">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Community;