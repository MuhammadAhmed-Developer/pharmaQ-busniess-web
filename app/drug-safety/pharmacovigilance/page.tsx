import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Pharmacovigilance | PhraramQ Drug Safety",
  description:
    "PhraramQ's pharmacovigilance and drug safety monitoring systems.",
};

export default function PharmacovigillancePage() {
  return (
    <main>
      <CommonHero
        title="Pharmacovigilance"
        subtitle="Continuous Drug Safety Monitoring"
        backgroundImage="/Hero%20img/hero3.png"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Pharmacovigilance System
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            PhraramQ maintains a comprehensive pharmacovigilance system to
            monitor the safety and efficacy of our products after market
            release. We track, analyze, and report adverse events to regulatory
            authorities.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Adverse Event Monitoring",
                description:
                  "24/7 reporting system for unexpected drug reactions",
              },
              {
                title: "Data Analysis",
                description: "Statistical analysis of safety signals",
              },
              {
                title: "Regulatory Compliance",
                description:
                  "Adherence to international pharmacovigilance standards",
              },
              {
                title: "Communication",
                description:
                  "Regular safety updates to healthcare professionals",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
