"use client";
import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Cephalosporin Plant | Manufacturing Facilities",
//   description:
//     "PhraramQ's specialized cephalosporin antibiotic manufacturing facility.",
// };

export default function CephalosporinPlantPage() {
  return (
    <main>
      <CommonHero
        title="Cephalosporin Plant"
        subtitle="Antibiotic Excellence"
        backgroundImage="/Hero%20img/hero1.png"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Specialized Antibiotic Production
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our dedicated cephalosporin plant represents cutting-edge
              pharmaceutical manufacturing for antibiotics. With a monthly
              capacity of 200+ tons and advanced fermentation technology, we
              produce world-class cephalosporin formulations.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-8">
              {[
                "Fermentation Technology",
                "Sterile Production",
                "Advanced Testing Labs",
                "Temperature Control",
                "Waste Treatment",
                "Packaging Systems",
              ].map((capability, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg bg-blue-50 p-4 border-l-4 border-blue-600 flex items-center gap-3"
                >
                  <span className="text-blue-600 text-lg">✓</span>
                  <span className="font-medium text-gray-900">
                    {capability}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quality Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                {["ISO 13485", "GMP", "FDA Approved", "WHO Certified"].map(
                  (cert) => (
                    <span
                      key={cert}
                      className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium"
                    >
                      {cert}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
