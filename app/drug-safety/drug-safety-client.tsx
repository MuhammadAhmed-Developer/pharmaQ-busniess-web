"use client";

import { motion } from "framer-motion";

const safetyFeatures = [
  {
    title: "Pharmacovigilance",
    description: "Continuous monitoring of drug safety and efficacy",
    icon: "📊",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing before market release",
    icon: "✓",
  },
  {
    title: "Adverse Event Reporting",
    description: "Swift reporting and response protocols",
    icon: "⚠️",
  },
  {
    title: "Compliance",
    description: "Adherence to international regulatory standards",
    icon: "📋",
  },
  {
    title: "Medical Support",
    description: "Expert guidance for healthcare professionals",
    icon: "👨‍⚕️",
  },
  {
    title: "Patient Education",
    description: "Comprehensive information for safe medication use",
    icon: "📚",
  },
];

export function DrugSafetyClient() {
  return (
    <>
      {/* Safety Features Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Safety Measures
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ensuring every product meets the highest safety and quality
              standards
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Reporting Adverse Events
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              PhraramQ takes adverse event reporting seriously. If you
              experience any unexpected reactions or side effects from our
              products, please report them immediately.
            </p>

            <div className="bg-white rounded-xl p-8 border-2 border-red-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How to Report:
              </h3>
              <ul className="space-y-3">
                {[
                  "Contact our Medical Information Team",
                  "Call our hotline: +92-300-0000000",
                  "Email: hello@phraramq.com",
                  "Visit our facility in Karachi",
                  "Submit online through our website",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
