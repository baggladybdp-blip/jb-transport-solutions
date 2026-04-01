// File: src/pages/Community.tsx

import Layout from "@/components/Layout";

export default function Community() {
  return (
    <Layout>
      <main className="pt-32 pb-20">
        <div className="container max-w-5xl">

          {/* HEADER */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-white">
              Workforce Reentry Initiative
            </h1>
            <p className="mt-4 text-lg text-silver leading-relaxed">
              We are committed to creating real opportunities for individuals reentering society by providing structured pathways into transportation, logistics, and service-based careers.
            </p>
          </section>

          {/* WHAT WE'RE DOING */}
          <section className="mb-12">
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">
              What We’re Building
            </h2>
            <p className="mt-4 text-silver leading-relaxed">
              This initiative is focused on preparing individuals for real work opportunities through exposure, training support, and hands-on experience. 
              We aim to help people build stability, develop skills, and move forward with purpose.
            </p>
          </section>

          {/* WHY IT MATTERS */}
          <section className="mb-12">
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">
              Why This Matters
            </h2>
            <p className="mt-4 text-silver leading-relaxed">
              Many individuals returning to society face barriers to employment, which increases the likelihood of reoffending. Access to work, structure, and opportunity significantly improves long-term outcomes.
            </p>
            <p className="mt-4 text-silver leading-relaxed">
              Employment plays a major role in reducing recidivism — creating safer communities, stronger businesses, and more stable environments for families.
            </p>
          </section>

          {/* HOW BUSINESSES HELP */}
          <section className="mb-12">
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">
              How Businesses Are Part of It
            </h2>
            <p className="mt-4 text-silver leading-relaxed">
              Businesses we work with are part of something bigger. By choosing JB Transportation & Towing, you are helping create opportunities for individuals working to rebuild their lives.
            </p>

            <ul className="mt-6 space-y-3 text-silver">
              <li>• Supporting a business that reinvests in workforce development</li>
              <li>• Helping create pathways into logistics and transportation careers</li>
              <li>• Contributing to safer and more stable communities</li>
            </ul>
          </section>

          {/* PARTNERSHIPS */}
          <section className="mb-12">
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">
              Building Partnerships
            </h2>
            <p className="mt-4 text-silver leading-relaxed">
              We are actively working to connect with workforce development programs, reentry support organizations, training providers, and community leaders to create real, structured pathways into employment.
            </p>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center">
            <h3 className="text-xl font-bold text-white">
              Want to Be Part of This Initiative?
            </h3>
            <p className="mt-4 text-silver">
              Whether through business partnerships, training opportunities, or collaboration, there are multiple ways to get involved.
            </p>

            <a
              href="/quote"
              className="inline-block mt-6 bg-accent text-white px-6 py-3 font-bold rounded-md hover:bg-accent/90"
            >
              Work With Us
            </a>
          </section>

        </div>
      </main>
    </Layout>
  );
}