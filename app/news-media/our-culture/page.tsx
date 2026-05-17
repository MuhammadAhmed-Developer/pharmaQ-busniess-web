"use client";
import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Our Culture | PhraramQ News & Media",
//   description: "Explore PhraramQ's workplace culture and team values.",
// };

export default function OurCulturePage() {
  return (
    <main>
      <CommonHero
        title="Our Culture"
        subtitle="Where Excellence Meets Collaboration"
        backgroundImage="/Hero%20img/hero2.png"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            PhraramQ Culture & Values
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At PhraramQ, we foster a culture of innovation, collaboration, and
            continuous improvement. Our diverse team of 500+ professionals
            shares a common passion for delivering quality pharmaceuticals and
            making a difference.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Team Diversity",
                desc: "Multicultural team with diverse expertise and perspectives",
              },
              {
                title: "Innovation Hub",
                desc: "Encouraging creative ideas and new approaches",
              },
              {
                title: "Professional Growth",
                desc: "Clear career advancement and development paths",
              },
              {
                title: "Work-Life Balance",
                desc: "Supporting well-being and personal development",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg bg-blue-50 p-6 border border-blue-200"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
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
