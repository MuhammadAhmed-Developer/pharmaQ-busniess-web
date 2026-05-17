"use client";
import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Corporate Profile | PhraramQ",
//   description:
//     "PhraramQ's company overview, history, and organizational structure.",
// };

export default function CorporateProfilePage() {
  return (
    <main>
      <CommonHero
        title="Corporate Profile"
        subtitle="About PhraramQ"
        backgroundImage="/Hero%20img/hero3.png"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                PhraramQ Pharmaceuticals is a leading pharmaceutical company
                dedicated to the manufacture and distribution of quality
                healthcare products. With decades of experience in the industry,
                we have established ourselves as a trusted name in healthcare.
              </p>
              <p>
                Our commitment to excellence is reflected in our
                state-of-the-art manufacturing facilities, rigorous quality
                control processes, and a team of dedicated professionals who
                work tirelessly to deliver products that meet the highest
                standards.
              </p>
              <p>
                We operate across multiple therapeutic categories including
                antibiotics, pain management, digestive health, and specialty
                medications, serving healthcare professionals and patients
                across the nation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 grid gap-8 md:grid-cols-2"
          >
            {[
              {
                label: "Years of Experience",
                value: "25+",
              },
              {
                label: "Products Portfolio",
                value: "150+",
              },
              {
                label: "Distribution Network",
                value: "National",
              },
              {
                label: "Team Members",
                value: "500+",
              },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg bg-blue-50 p-6 text-center">
                <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Organization Structure
          </h2>
          <div className="space-y-4">
            {[
              "Board of Directors",
              "Executive Management",
              "Operations & Manufacturing",
              "Quality Assurance",
              "Sales & Marketing",
              "Distribution & Logistics",
              "Research & Development",
              "Human Resources & Administration",
            ].map((dept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="rounded-lg border-l-4 border-blue-600 bg-white p-4 pl-6"
              >
                <p className="font-semibold text-gray-900">{dept}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
