// File: src/pages/Quote.tsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  CheckCircle,
  Phone,
  Shield,
  Clock,
  MessageSquare,
  Truck,
} from "lucide-react";
import Layout from "@/components/Layout";

const Quote = () => {
  const isSubmitted =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("submitted") === "1";

  const nextUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/quote?submitted=1`
      : "/quote?submitted=1";

  if (isSubmitted) {
    return (
      <Layout>
        <section className="bg-background py-32">
          <div className="container max-w-lg rounded-2xl bg-white p-10 text-center shadow-md">
            <CheckCircle className="mx-auto mb-6 h-16 w-16 text-accent" />
            <h1 className="mb-4 text-3xl font-heading font-black text-foreground">
              Request Sent
            </h1>
            <p className="text-lg font-body text-muted-foreground">
              Thanks for reaching out. We’ll review your request and follow up
              with pricing and availability as soon as possible.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/quote">
                <Button variant="outline" className="font-bold">
                  Submit Another Request
                </Button>
              </a>

              <a href="tel:4143063970">
                <Button className="bg-accent px-8 py-6 text-base font-bold">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 414-306-3970
                </Button>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* HEADER */}
      <section className="section-dark py-20">
        <div className="container max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-heading font-black md:text-5xl">
            Request a <span className="text-accent">Fast Quote</span>
          </h1>

          <p className="text-lg font-body leading-8 text-silver">
            Tell us what you need and we’ll follow up with pricing,
            availability, and next steps. Whether you need one-time service,
            overflow support, or a business partner you can grow with, we’re
            ready to talk.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-silver">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              Fully Insured
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              Fast Response
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-accent" />
              Direct Communication
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="bg-muted py-12">
        <div className="container max-w-5xl">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <Truck className="mb-3 h-8 w-8 text-accent" />
              <h2 className="mb-2 text-lg font-bold text-foreground">
                Transport, Towing & Courier
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Request pricing for vehicle transport, towing, courier service,
                or business support needs.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <Clock className="mb-3 h-8 w-8 text-accent" />
              <h2 className="mb-2 text-lg font-bold text-foreground">
                Built for Fast Follow-Up
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Share the basics of the job and we’ll review the request quickly
                so you know your next step.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <Shield className="mb-3 h-8 w-8 text-accent" />
              <h2 className="mb-2 text-lg font-bold text-foreground">
                Business Inquiries Welcome
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Overflow support, backup coverage, scheduled routes, and contract
                inquiries are all welcome here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-background py-20">
        <div className="container max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-heading font-black text-foreground">
              Tell Us About the Job
            </h2>
            <p className="text-muted-foreground">
              The more detail you provide, the easier it is for us to give you a
              useful response.
            </p>
          </div>

          <form
            action="https://formsubmit.co/jbtranspo.share@gmail.com"
            method="POST"
            className="space-y-6 rounded-2xl bg-white p-8 shadow-md md:p-10"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Quote Request - JB Transportation & Towing"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={nextUrl} />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business">Business Name</Label>
                <Input
                  id="business"
                  name="business"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  required
                  placeholder="(414) 000-0000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" required type="email" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service Type *</Label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Vehicle Transport">Vehicle Transport</option>
                <option value="Towing">Towing</option>
                <option value="Courier Delivery">Courier Delivery</option>
                <option value="Business Contract Inquiry">
                  Business Contract Inquiry
                </option>
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="pickup">Pickup Location</Label>
                <Input
                  id="pickup"
                  name="pickup"
                  placeholder="City, address, or pickup area"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dropoff">Drop-off Location</Label>
                <Input
                  id="dropoff"
                  name="dropoff"
                  placeholder="City, address, or drop-off area"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date Needed</Label>
              <Input id="date" type="date" name="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="details">Project Details</Label>
              <Textarea
                id="details"
                name="details"
                rows={5}
                placeholder="Tell us more about the job, route, vehicle(s), urgency, delivery type, or business need..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent py-6 text-lg font-heading font-bold"
            >
              Submit Request
            </Button>
          </form>

          <div className="mt-12 text-center">
            <p className="mb-3 text-muted-foreground">
              Need immediate assistance or prefer to talk first?
            </p>

            <a href="tel:4143063970">
              <Button
                variant="outline"
                className="gap-2 border-accent font-bold text-accent hover:bg-accent hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Call 414-306-3970
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quote;