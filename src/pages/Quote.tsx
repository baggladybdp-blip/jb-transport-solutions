import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle, Phone } from "lucide-react";
import Layout from "@/components/Layout";

const Quote = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-32 bg-background">
          <div className="container max-w-lg text-center">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-3xl font-heading font-black text-foreground mb-4">Thank You</h1>
            <p className="text-muted-foreground font-body text-lg">
              Your request has been sent. We will contact you shortly.
            </p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="section-dark py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">
            Request a <span className="text-accent">Quote</span>
          </h1>
          <p className="text-silver font-body text-lg max-w-xl mx-auto">
            Fill out the form below and we'll get back to you quickly with a competitive quote.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-heading font-semibold text-foreground">Name *</Label>
                <Input id="name" name="name" required placeholder="Your name" className="bg-muted border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business" className="font-heading font-semibold text-foreground">Business Name</Label>
                <Input id="business" name="business" placeholder="Company name" className="bg-muted border-border" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-heading font-semibold text-foreground">Phone *</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="(414) 000-0000" className="bg-muted border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-heading font-semibold text-foreground">Email *</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" className="bg-muted border-border" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="font-heading font-semibold text-foreground">Service Type *</Label>
              <Select name="service" required>
                <SelectTrigger className="bg-muted border-border">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vehicle-transport">Vehicle Transport</SelectItem>
                  <SelectItem value="towing">Towing</SelectItem>
                  <SelectItem value="courier">Courier Delivery</SelectItem>
                  <SelectItem value="contract">Business Contract Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickup" className="font-heading font-semibold text-foreground">Pickup Location</Label>
                <Input id="pickup" name="pickup" placeholder="City, State" className="bg-muted border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dropoff" className="font-heading font-semibold text-foreground">Drop-off Location</Label>
                <Input id="dropoff" name="dropoff" placeholder="City, State" className="bg-muted border-border" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="font-heading font-semibold text-foreground">Date Needed</Label>
              <Input id="date" name="date" type="date" className="bg-muted border-border" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="details" className="font-heading font-semibold text-foreground">Details</Label>
              <Textarea id="details" name="details" rows={4} placeholder="Tell us more about your needs..." className="bg-muted border-border" />
            </div>

            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold text-lg py-6">
              Submit Request
            </Button>
          </form>

          <div className="mt-10 text-center border-t border-border pt-8">
            <p className="text-muted-foreground font-body mb-3">Prefer to talk? Call us directly.</p>
            <a href="tel:4143063970">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-heading font-bold gap-2">
                <Phone className="w-4 h-4" />
                414-306-3970
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quote;
