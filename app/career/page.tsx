"use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Careers | PhraramQ",
//   description:
//     "Join PhraramQ and build a rewarding career in pharmaceuticals. Explore job opportunities and company culture.",
// };

export default function CareerPage() {
  const departments = [
    {
      name: "Research & Development",
      openings: 8,
      description: "Innovation and scientific excellence",
    },
    {
      name: "Manufacturing",
      openings: 12,
      description: "Production and quality control",
    },
    {
      name: "Sales & Marketing",
      openings: 6,
      description: "Market leadership and growth",
    },
    {
      name: "Supply Chain",
      openings: 5,
      description: "Logistics and distribution",
    },
  ];

  const benefits = [
    {
      icon: "💼",
      title: "Competitive Salary",
      desc: "Market-leading compensation",
    },
    { icon: "🏥", title: "Health Benefits", desc: "Comprehensive coverage" },
    {
      icon: "📚",
      title: "Training Programs",
      desc: "Professional development",
    },
    { icon: "⚖️", title: "Work-Life Balance", desc: "Flexible arrangements" },
    { icon: "🎓", title: "Scholarships", desc: "Educational support" },
    { icon: "🌟", title: "Career Growth", desc: "Clear advancement paths" },
  ];

  return (
    <main>
      <CommonHero
        title="Join Our Team"
        subtitle="Building the Future of Pharmaceuticals"
        backgroundImage="/Hero%20img/hero3.png"
      />

      {/* Why Join Us */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Why Work at PhraramQ?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We are more than just a pharmaceutical company. We are a
                community of dedicated professionals committed to improving
                lives through quality healthcare products.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Innovative work environment",
                  "Supportive team culture",
                  "Industry-leading benefits",
                  "Career development opportunities",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-xl overflow-hidden"
            >
              <Image
                src="/brandimg.jpeg"
                alt="PhraramQ team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Employee Benefits
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="rounded-lg bg-white p-6 shadow-sm border border-blue-100"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      {/* <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Open Positions
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-slate-200 bg-white p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {dept.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{dept.description}</p>
                <p className="mt-4 text-2xl font-bold text-blue-600">
                  {dept.openings} Openings
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Make an Impact&quest;</h2>
          <p className="mt-4 text-lg text-blue-100">
            Submit your CV and let&apos;s discuss how you can grow with PhraramQ
          </p>
          <Link href="/contact">
            <button className="mt-8 inline-flex items-center rounded-lg bg-white px-8 py-3 text-blue-600 font-bold hover:bg-blue-50 transition">
              Apply Now
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </Link>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
