"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Capability {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export function WhatWeDoClient() {
  const capabilities: Capability[] = [
    {
      title: "Global Presence",
      description:
        "Operating across multiple continents with strategic partnerships",
      icon: "🌍",
      href: "/what-we-do/global-presence",
    },
    {
      title: "National Distribution",
      description: "Efficient supply chain covering the entire nation",
      icon: "📦",
      href: "/what-we-do/national-distribution-setup",
    },
    {
      title: "Our Journey",
      description: "Decades of experience in pharmaceutical excellence",
      icon: "📈",
      href: "/what-we-do/our-journey",
    },
    {
      title: "Marketing Portfolio",
      description: "Comprehensive product range and market reach",
      icon: "🎯",
      href: "/what-we-do/marketing-portfolio",
    },
  ];

  return (
    <>
      {/* Capabilities Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Capabilities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Building trust through operational excellence and innovation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => (
              <Link href={item.href} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-500 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 opacity-0 transition group-hover:opacity-100">
                    <span className="text-sm font-medium">Learn more</span>
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

      {/* Overview Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Industry Leadership Through Innovation
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                PhraramQ stands as a beacon of reliability in the pharmaceutical
                sector. Our integrated approach combines cutting-edge research,
                stringent quality controls, and customer-centric operations.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Research & Development",
                  "Quality Assurance",
                  "Supply Chain Excellence",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      className="h-6 w-6 text-blue-600"
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
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src="/brandimg.jpeg"
                alt="PhraramQ operations"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
