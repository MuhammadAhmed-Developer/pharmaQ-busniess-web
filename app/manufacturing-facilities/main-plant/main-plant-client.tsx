"use client";

import { motion } from "framer-motion";

export function MainPlantClient({ capabilities, certifications }: { capabilities: string[], certifications: string[] }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Production Capabilities
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Our main manufacturing facility represents the pinnacle of
              pharmaceutical production technology. Located strategically, it
              houses cutting-edge equipment and operates under the strictest
              quality standards.
            </p>
            <p>
              With a monthly capacity of 500+ tons, we are equipped to handle
              diverse pharmaceutical formulations and meet national demand.
            </p>
          </div>
        </motion.div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Manufacturing Capabilities
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-lg bg-blue-50 p-4 border-l-4 border-blue-600"
              >
                <svg
                  className="h-6 w-6 text-blue-600 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium text-gray-900">{cap}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 border-2 border-green-200"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map(
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
        </motion.div>
      </div>
    </section>
  );
}
