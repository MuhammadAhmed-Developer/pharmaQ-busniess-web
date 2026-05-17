"use client";
import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Mission, Vision & Values | PhraramQ",
//   description:
//     "PhraramQ's mission, vision, and core values that guide our operations.",
// };

export default function MissionVisionValuesPage() {
  return (
    <main>
      <CommonHero
        title="Mission, Vision & Values"
        subtitle="Our Guiding Principles"
        backgroundImage="/Hero%20img/hero2.png"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Mission",
                icon: "🎯",
                description:
                  "To deliver high-quality pharmaceutical products that improve healthcare outcomes and make medicines accessible to communities.",
              },
              {
                title: "Vision",
                icon: "🌟",
                description:
                  "To be the most trusted pharmaceutical company, recognized for excellence, innovation, and social responsibility.",
              },
              {
                title: "Values",
                icon: "💎",
                description:
                  "Integrity, Innovation, Quality, Trust, and Responsibility guide every decision and action we take.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="space-y-6">
            {[
              {
                value: "Integrity",
                desc: "We conduct business with honesty and transparency in all dealings.",
              },
              {
                value: "Innovation",
                desc: "We continuously improve processes and develop better solutions.",
              },
              {
                value: "Quality",
                desc: "Excellence is not optional—it&apos;s embedded in everything we do.",
              },
              {
                value: "Trust",
                desc: "We build lasting relationships based on reliability and accountability.",
              },
              {
                value: "Responsibility",
                desc: "We care for our stakeholders and the communities we serve.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-l-4 border-blue-600 pl-6 py-4"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.value}
                </h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
