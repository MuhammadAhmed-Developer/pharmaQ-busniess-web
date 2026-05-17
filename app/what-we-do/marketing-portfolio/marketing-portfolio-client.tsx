"use client";

import { motion } from "framer-motion";

export function MarketingPortfolioClient() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Comprehensive Product Range
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { category: "Antibiotics", products: "40+" },
            { category: "Pain Management", products: "25+" },
            { category: "Digestive Health", products: "30+" },
            { category: "Cardiac Care", products: "18+" },
            { category: "Respiratory", products: "20+" },
            { category: "Dermatology", products: "15+" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 text-center hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {item.category}
              </h3>
              <p className="mt-3 text-3xl font-bold text-blue-600">
                {item.products}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 rounded-lg bg-gradient-to-r from-blue-100 to-indigo-100 p-8 border border-blue-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Market Reach
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-2xl font-bold text-blue-600">150+</p>
              <p className="text-gray-600">Total Products</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">10K+</p>
              <p className="text-gray-600">Retail Outlets</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">National</p>
              <p className="text-gray-600">Coverage</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
