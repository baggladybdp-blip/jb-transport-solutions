import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield, MapPin, Truck, Clock, Users, CheckCircle, Heart, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-transport.jpg";
import vehicleTransportImg from "@/assets/vehicle-transport.jpg";
import towTruckImg from "@/assets/tow-truck.jpg";
import courierVanImg from "@/assets/courier-van.jpg";

const trustItems = [
  { icon: Shield, label: "MC & DOT Registered" },
  { icon: Shield, label: "Fully Insured" },
  { icon: MapPin, label: "Based in Franklin, WI" },
  { icon: Truck, label: "Serving Milwaukee & Surrounding Areas" },
];

const services = [
  {
    title: "Vehicle Transport",
    image: vehicleTransportImg,
    items: ["Dealer-to-dealer transfers", "Auction pickups", "Multi-car hauling"],
  },
  {
    title: "Self-Load Towing",
    image: towTruckImg,
    items: ["Fast response", "Local towing", "Business support"],
  },
  {
    title: "Professional Courier Services",
    image: courierVanImg,
    items: ["Medical delivery", "Legal document delivery", "Same-day & scheduled routes"],
  },
];

const audiences = [
  "Dealerships",
  "Auto Repair Shops",
  "Property Managers",
  "Medical Offices",
  "Law Firms",
  "Local Businesses",
];

const whyChoose = [
  { icon: CheckCircle, text: "No Broker Delays" },
  { icon: Phone, text: "Direct Communication" },
  { icon: Clock, text: "Reliable Scheduling" },
  { icon: Users, text: "Professional Service" },
];

const stats = [
  { value: "500+", label: "Vehicles Delivered" },
  { value: "50+", label: "Routes Handled" },
  { value: "100+", label: "Clients Served" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="JB Transportation fleet" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary-foreground leading-tight mb-6">
              Transportation, Towing & Professional Courier Services —{" "}
              <span className="text-accent">Built for Reliability</span>
            </h1>
            <p className="text-lg md:text-xl text-silver mb-8 max-w-2xl font-body">
              Vehicle transport, self-load towing, and time-sensitive delivery services for businesses,
              medical offices, and legal professionals across Wisconsin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold text-lg px-8 py-6 gap-2 w-full sm:w-auto">
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:4143063970">
                <Button size="lg" variant="outline" className="border-silver text-primary-foreground hover:bg-secondary font-heading font-bold text-lg px-8 py-6 gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-accent py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-accent-foreground">
                <item.icon className="w-5 h-5" />
                <span className="font-heading font-semibold text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-4">
              Our <span className="text-accent">Core Services</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Fast Transport. Reliable Towing. Trusted Delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-colors shadow-sm hover:shadow-lg">
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm font-body">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground font-heading font-bold gap-2">
                View All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-dark py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-center mb-12">
            Who We <span className="text-accent">Serve</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {audiences.map((a) => (
              <div key={a} className="bg-secondary rounded-lg p-6 text-center font-heading font-semibold text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default">
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose JB */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-center mb-12 text-foreground">
            Why Choose <span className="text-accent">JB</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item) => (
              <div key={item.text} className="flex flex-col items-center text-center p-6 rounded-lg border border-border hover:border-accent transition-colors">
                <item.icon className="w-10 h-10 text-accent mb-4" />
                <span className="font-heading font-bold text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Stats */}
      <section className="section-charcoal py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
            Proven Vehicle Transport <span className="text-accent">Experience</span>
          </h2>
          <p className="text-silver mb-12 max-w-xl mx-auto font-body">
            No Broker Delays. Just Reliable Service.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-heading font-black text-accent">{stat.value}</span>
                <span className="text-silver font-body mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-6">
              Community <span className="text-accent">Commitment</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              We are committed to supporting local communities across the Milwaukee area by creating
              opportunities, supporting small businesses, and providing reliable transportation services
              where they are needed most.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["Supporting Underserved Milwaukee Communities", "Workforce Opportunities", "Local Business Partnerships"].map((item) => (
                <div key={item} className="bg-muted rounded-lg p-4 font-heading font-semibold text-sm text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
            Ready to Get <span className="text-accent">Started</span>?
          </h2>
          <p className="text-silver font-body text-lg mb-8 max-w-xl mx-auto">
            Call now or request a quote for fast, reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold text-lg px-10 py-6 gap-2 w-full sm:w-auto">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:4143063970">
              <Button size="lg" variant="outline" className="border-silver text-primary-foreground hover:bg-secondary font-heading font-bold text-lg px-10 py-6 gap-2 w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                414-306-3970
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
