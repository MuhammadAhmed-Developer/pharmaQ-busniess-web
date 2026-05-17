"use client";

import { motion } from "framer-motion";

const missionVisionCards = [
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
];

const coreValues = [
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
    desc: "Excellence is not optional-it&apos;s embedded in everything we do.",
  },
  {
    value: "Trust",
    desc: "We build lasting relationships based on reliability and accountability.",
  },
  {
    value: "Responsibility",
    desc: "We care for our stakeholders and the communities we serve.",
  },
];

export function MissionVisionValuesContent() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {missionVisionCards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 text-center"
            >
              <div className="mb-4 text-5xl">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our Core Values
          </h2>
          <div className="space-y-6">
            {coreValues.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-l-4 border-blue-600 py-4 pl-6"
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
    </>
  );
}
