// File: src/pages/WorkWithUs.tsx

import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const WorkWithUs = () => {
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
        <section className="py-32 text-center">
          <h1 className="text-3xl font-bold text-white">
            Request Received
          </h1>
          <p className="mt-4 text-silver">
            We’ll review your information and reach out shortly.
          </p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-dark py-20">
        <div className="container max-w-2xl text-center">
          <h1 className="text-4xl font-semibold text-white">
            Work With Us
          </h1>
          <p className="mt-4 text-silver">
            Tell us how you're looking to work with JB Transportation & Towing.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl bg-white p-8 shadow-md"
          >
            {/* NAME */}
            <div className="space-y-2">
              <Label>Name *</Label>
              <Input name="name" required />
            </div>

            {/* BUSINESS */}
            <div className="space-y-2">
              <Label>Business Name</Label>
              <Input name="business" />
            </div>

            {/* PHONE + EMAIL */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Phone *</Label>
                <Input name="phone" required />
              </div>

              <div className="space-y-2">
                <Label>Email *</Label>
                <Input name="email" required type="email" />
              </div>
            </div>

            {/* INTEREST TYPE */}
            <div className="space-y-2">
              <Label>Type of Interest *</Label>
              <Select name="interest">
                <SelectTrigger>
                  <SelectValue placeholder="Select interest type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Business Partnership">
                    Business Partnership
                  </SelectItem>
                  <SelectItem value="Contract Work">
                    Contract Work
                  </SelectItem>
                  <SelectItem value="Dealer / Shop Partnership">
                    Dealer / Shop Partnership
                  </SelectItem>
                  <SelectItem value="Courier Needs">
                    Courier Needs
                  </SelectItem>
                  <SelectItem value="Workforce / Training">
                    Workforce / Training Program
                  </SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* DETAILS */}
            <div className="space-y-2">
              <Label>Tell us about your needs *</Label>
              <Textarea
                name="details"
                rows={5}
                placeholder="Volume, frequency, type of work, locations, etc."
                required
              />
            </div>

            {/* SUBMIT */}
            <Button className="w-full bg-accent py-6 text-lg font-semibold">
              Submit Request
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default WorkWithUs;