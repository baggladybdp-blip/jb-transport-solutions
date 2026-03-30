import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Phone, Truck, Shield, Clock, FileText, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import vehicleTransportImg from "@/assets/vehicle-transport.jpg";
import towTruckImg from "@/assets/tow-truck.jpg";
import courierVanImg from "@/assets/courier-van.jpg";

const Services = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="section-dark py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-silver font-body text-lg max-w-2xl mx-auto">
            Professional transportation, towing, and courier solutions for businesses across Wisconsin.
          </p>
        </div>
      </section>

      {/* Vehicle Transport */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Truck className="w-6 h-6 text-accent" />
                <span className="font-heading font-bold text-accent uppercase text-sm tracking-wider">Vehicle Transport</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-6">
                Reliable Multi-Car Hauling & Dealer Transfers
              </h2>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                Our white dually truck with 5-car trailer provides secure, professional vehicle transport
                for dealerships, auctions, and businesses that demand reliable scheduling and careful handling.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Dealer-to-dealer vehicle transfers",
                  "Auction pickup and delivery",
                  "Multi-car hauling (up to 5 vehicles)",
                  "Secure handling and professional care",
                  "Reliable scheduling with direct communication",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground font-body">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/quote">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold gap-2">
                  Get a Transport Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={vehicleTransportImg} alt="Vehicle transport trailer" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* Self-Load Towing */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
              <img src={towTruckImg} alt="Self-load tow truck" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-accent" />
                <span className="font-heading font-bold text-accent uppercase text-sm tracking-wider">Self-Load Towing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-6">
                Fast, Reliable Local Towing
              </h2>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                Our red self-load tow truck provides fast-response towing services for businesses and
                individuals in the Milwaukee area. Professional, reliable, and always on time.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Fast response times",
                  "Local towing across Milwaukee area",
                  "Business towing support and contracts",
                  "Professional and insured operators",
                  "Property management vehicle removal",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground font-body">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/quote">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold gap-2">
                  Get a Towing Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Courier Services */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-accent" />
                <span className="font-heading font-bold text-accent uppercase text-sm tracking-wider">Courier Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-6">
                Time-Sensitive, Professional Delivery
              </h2>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                Our dedicated courier van handles medical specimens, legal documents, and business-critical
                deliveries with the care and urgency your operations demand.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Medical specimen and supply delivery",
                  "Legal document courier services",
                  "Same-day and time-sensitive delivery",
                  "Scheduled daily or weekly routes",
                  "Secure, professional handling",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground font-body">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/quote">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold gap-2">
                  Get a Courier Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={courierVanImg} alt="Courier van" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* Business & Contract Services */}
      <section className="section-dark py-20">
        <div className="container text-center">
          <Building2 className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
            Business & <span className="text-accent">Contract Services</span>
          </h2>
          <p className="text-silver font-body text-lg max-w-2xl mx-auto mb-8">
            Looking for a reliable transportation partner for repeat work? We offer contract-based
            services for dealerships, medical offices, law firms, and property managers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {[
              { icon: Clock, text: "Scheduled Routes" },
              { icon: Shield, text: "Insured & Registered" },
              { icon: Phone, text: "Direct Communication" },
            ].map((item) => (
              <div key={item.text} className="bg-secondary rounded-lg p-6 flex flex-col items-center gap-3">
                <item.icon className="w-8 h-8 text-accent" />
                <span className="font-heading font-semibold text-primary-foreground text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <Link to="/quote">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold text-lg px-10 py-6 gap-2">
              Inquire About Contracts <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
