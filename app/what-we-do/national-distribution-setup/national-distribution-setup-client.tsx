"use client";

import { motion } from "framer-motion";

export function NationalDistributionSetupClient() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Distribution Network
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            PhraramQ maintains an efficient and responsive distribution system
            ensuring timely delivery of pharmaceutical products across the
            nation. Our network connects manufacturers directly to hospitals,
            clinics, and retail pharmacies.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mt-8">
            {[
              { label: "Distribution Centers", value: "15+" },
              { label: "Coverage Area", value: "National" },
              { label: "Daily Deliveries", value: "500+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg bg-blue-50 p-6 text-center"
              >
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
