// File: src/pages/CommunityInterest.tsx

import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Phone, Users } from "lucide-react";

const CommunityInterest = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    fetch("https://formsubmit.co/jbtranspo.share@gmail.com", {
      method: "POST",
      body: data,
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="bg-background py-32">
          <div className="container max-w-lg rounded-2xl bg-white p-10 text-center shadow-md">
            <CheckCircle className="mx-auto mb-6 h-16 w-16 text-accent" />
            <h1 className="mb-4 text-3xl font-heading font-semibold text-foreground">
              Interest Received
            </h1>
            <p className="text-lg text-muted-foreground">
              Thanks for your interest in the community initiative. We’ll review
              your information and follow up soon.
            </p>

            <div className="mt-8">
              <a href="tel:4143063970">
                <Button className="bg-accent px-8 py-6 text-base font-semibold">
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
      <section className="section-dark py-20">
        <div className="container max-w-3xl text-center">
          <Users className="mx-auto mb-4 h-10 w-10 text-accent" />
          <h1 className="mb-4 text-4xl font-heading font-semibold text-white md:text-5xl">
            Community Initiative Interest Form
          </h1>
          <p className="text-lg leading-8 text-silver">
            Tell us how you are interested in participating in, supporting, or
            partnering around the workforce reentry and community initiative.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl bg-white p-8 shadow-md md:p-10"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Community Initiative Interest - JB Transportation & Towing"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization">Organization / Business</Label>
                <Input
                  id="organization"
                  name="organization"
                  placeholder="Organization or business name"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" name="phone" required placeholder="Phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="interestType">Type of Interest *</Label>
              <select
                id="interestType"
                name="interest_type"
                required
                defaultValue=""
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="Community Partnership">Community Partnership</option>
                <option value="Referral Organization">Referral Organization</option>
                <option value="Training Support">Training Support</option>
                <option value="Employer / Hiring Interest">Employer / Hiring Interest</option>
                <option value="Program Collaboration">Program Collaboration</option>
                <option value="General Interest">General Interest</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="details">Tell us more *</Label>
              <Textarea
                id="details"
                name="details"
                rows={6}
                required
                placeholder="Share how you would like to be involved, what type of collaboration you’re interested in, or what support you may be able to offer."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent py-6 text-lg font-semibold"
            >
              Submit Interest
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default CommunityInterest;