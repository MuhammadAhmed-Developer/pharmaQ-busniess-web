"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Facility {
  name: string;
  description: string;
  capacity: string;
  certifications: string[];
  href: string;
}

interface Commitment {
  title: string;
  desc: string;
}

export function ManufacturingFacilitiesClient({ facilities, commitments }: { facilities: Facility[], commitments: Commitment[] }) {
  return (
    <>
      {/* Facilities Overview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Production Powerhouses
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Equipped with cutting-edge technology and staffed by industry
              experts
            </p>
          </div>

          <div className="grid gap-12">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid gap-8 items-center md:grid-cols-2 ${
                  index % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/brandimg.jpeg"
                    alt={facility.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:[direction:ltr]">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {facility.name}
                  </h3>
                  <p className="mt-3 text-gray-600 text-lg">
                    {facility.description}
                  </p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-500">
                        PRODUCTION CAPACITY
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        {facility.capacity}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-2">
                        CERTIFICATIONS
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {facility.certifications.map((cert, i) => (
                          <span
                            key={i}
                            className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link href={facility.href}>
                    <button className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
                      Learn More
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
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Quality Commitment
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {commitments.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg bg-slate-800 p-6 border border-slate-700"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
