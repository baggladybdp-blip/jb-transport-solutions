// File: src/pages/Quote.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle, Phone, Shield, Clock } from "lucide-react";
import Layout from "@/components/Layout";

const Quote = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const subject = `New Quote Request - ${data.get("service")}`;
    const body = `
Name: ${data.get("name")}
Business: ${data.get("business")}
Phone: ${data.get("phone")}
Email: ${data.get("email")}

Service: ${data.get("service")}

Pickup: ${data.get("pickup")}
Drop-off: ${data.get("dropoff")}
Date Needed: ${data.get("date")}

Details:
${data.get("details")}
    `;

    window.location.href = `mailto:jbtranspo.share@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="bg-background py-32">
          <div className="container max-w-lg text-center">
            <CheckCircle className="mx-auto mb-6 h-16 w-16 text-accent" />
            <h1 className="mb-4 text-3xl font-heading font-black text-foreground">
              Request Sent
            </h1>
            <p className="text-lg font-body text-muted-foreground">
              We’ll review your request and reach out shortly.
            </p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* HEADER */}
      <section className="section-dark py-20">
        <div className="container text-center max-w-2xl">
          <h1 className="mb-4 text-4xl font-heading font-black md:text-5xl">
            Get a <span className="text-accent">Fast Quote</span>
          </h1>

          <p className="text-lg font-body text-silver">
            Tell us what you need and we’ll respond quickly with pricing and availability.
          </p>

          {/* TRUST STRIP */}
          <div className="mt-8 flex justify-center gap-6 flex-wrap text-sm text-silver">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              Fully Insured
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              Fast Response
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-background py-20">
        <div className="container max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-xl shadow-md"
          >
            {/* NAME + BUSINESS */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Name *</Label>
                <Input name="name" required placeholder="Your name" />
              </div>

              <div className="space-y-2">
                <Label>Business Name</Label>
                <Input name="business" placeholder="Company name" />
              </div>
            </div>

            {/* PHONE + EMAIL */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Phone *</Label>
                <Input name="phone" required placeholder="(414) 000-0000" />
              </div>

              <div className="space-y-2">
                <Label>Email *</Label>
                <Input name="email" required type="email" />
              </div>
            </div>

            {/* SERVICE */}
            <div className="space-y-2">
              <Label>Service Type *</Label>
              <Select name="service">
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Vehicle Transport">
                    Vehicle Transport
                  </SelectItem>
                  <SelectItem value="Towing">Towing</SelectItem>
                  <SelectItem value="Courier">Courier Delivery</SelectItem>
                  <SelectItem value="Contract Inquiry">
                    Business Contract Inquiry
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* LOCATIONS */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="pickup" placeholder="Pickup Location" />
              <Input name="dropoff" placeholder="Drop-off Location" />
            </div>

            {/* DATE */}
            <Input type="date" name="date" />

            {/* DETAILS */}
            <Textarea
              name="details"
              rows={4}
              placeholder="Tell us more about the job..."
            />

            {/* SUBMIT */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent py-6 text-lg font-heading font-bold"
            >
              Submit Request
            </Button>
          </form>

          {/* CALL OPTION */}
          <div className="mt-12 text-center">
            <p className="mb-3 text-muted-foreground">
              Need immediate assistance?
            </p>

            <a href="tel:4143063970">
              <Button
                variant="outline"
                className="gap-2 border-accent text-accent hover:bg-accent hover:text-white font-bold"
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