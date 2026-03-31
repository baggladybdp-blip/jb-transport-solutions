// File: src/pages/NotFound.tsx

import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <section className="bg-background py-32">
        <div className="container text-center max-w-xl">
          <h1 className="text-5xl font-heading font-black text-foreground mb-4">
            404
          </h1>

          <h2 className="text-2xl font-heading font-bold mb-4">
            Page Not Found
          </h2>

          <p className="text-muted-foreground font-body mb-8">
            The page you are looking for does not exist or may have been moved.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link to="/">
              <Button className="bg-accent text-accent-foreground px-8 py-6 font-heading font-bold">
                Back to Home <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <a href="tel:4143063970">
              <Button
                variant="outline"
                className="px-8 py-6 font-heading font-bold"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;