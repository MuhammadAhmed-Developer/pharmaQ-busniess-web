"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Research Forum",
    description:
      "Advancing pharmaceutical knowledge through collaborative research",
    icon: "🔬",
    href: "/csr/research-forum",
  },
  {
    title: "Social Activities",
    description: "Community engagement and social welfare programs",
    icon: "🤝",
    href: "/csr/social-activities",
  },
  {
    title: "Training Camps",
    description: "Skill development and professional growth initiatives",
    icon: "📚",
    href: "/csr/training-camps",
  },
  {
    title: "Medical Camp",
    description: "Healthcare services and medical awareness campaigns",
    icon: "⚕️",
    href: "/csr/medical-camp",
  },
];

export function CSRClient() {
  return (
    <>
      {/* Programs Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Commitment to Society
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              PhraramQ believes in giving back to society through meaningful
              programs and initiatives that create lasting impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <Link href={program.href} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 transition hover:shadow-xl hover:border-green-500 cursor-pointer"
                >
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {program.description}
                  </p>
                  <div className="mt-4 inline-flex items-center text-green-600 font-medium text-sm">
                    Explore
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Impact
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { stat: "1000+", label: "People Trained" },
              { stat: "50+", label: "Medical Camps" },
              { stat: "500K+", label: "Lives Touched" },
              { stat: "100+", label: "Communities Served" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-green-600">{item.stat}</p>
                <p className="mt-2 text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
