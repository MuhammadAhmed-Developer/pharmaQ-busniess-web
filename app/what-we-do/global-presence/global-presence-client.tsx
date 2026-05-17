"use client";

import { motion } from "framer-motion";

const regions = [
  { region: "Asia", countries: 8, status: "Active" },
  { region: "Middle East", countries: 5, status: "Active" },
  { region: "Africa", countries: 3, status: "Expanding" },
  { region: "Europe", countries: 2, status: "Growing" },
];

export function GlobalPresenceClient() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our International Footprint
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            PhraramQ has established strong operational presence across multiple
            regions, serving diverse markets with localized solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {regions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border-2 border-slate-200 bg-white p-6 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {item.region}
              </h3>
              <div className="mt-4 space-y-2">
                <div>
                  <p className="text-sm text-gray-600">Countries</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {item.countries}
                  </p>
                </div>
                <div>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
