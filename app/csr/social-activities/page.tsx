"use client";
import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Social Activities | PhraramQ CSR",
//   description: "PhraramQ's community engagement and social welfare programs.",
// };

export default function SocialActivitiesPage() {
  return (
    <main>
      <CommonHero
        title="Social Activities"
        subtitle="Community Engagement & Welfare"
        backgroundImage="/Hero%20img/hero2.png"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Community Programs
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              PhraramQ believes in creating positive impact in the communities
              we serve. Through our social activities, we focus on education,
              health awareness, and sustainable development.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Education Scholarship",
                description:
                  "Supporting underprivileged students in their educational journey",
              },
              {
                title: "Health Awareness",
                description: "Regular campaigns on preventive healthcare",
              },
              {
                title: "Environmental Initiatives",
                description: "Tree plantation and sustainability programs",
              },
              {
                title: "Disaster Relief",
                description: "Swift response to community emergencies",
              },
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-slate-200 bg-white p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {program.title}
                </h3>
                <p className="mt-2 text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
