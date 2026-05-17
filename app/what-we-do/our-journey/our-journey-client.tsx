"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "2001", event: "PhraramQ founded" },
  { year: "2005", event: "First manufacturing facility established" },
  { year: "2010", event: "Achieved GMP certification" },
  { year: "2015", event: "Expanded to international markets" },
  { year: "2020", event: "Second plant commissioned" },
  { year: "2024", event: "25 years of excellence in pharma" },
];

export function OurJourneyClient() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    {i + 1}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="h-16 w-1 bg-blue-200" />
                  )}
                </div>
                <div className="pt-2">
                  <p className="text-sm font-semibold text-blue-600">
                    {milestone.year}
                  </p>
                  <p className="text-lg font-medium text-gray-900">
                    {milestone.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
