"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Member {
  name: string;
  role: string;
  href: string;
}

interface Value {
  title: string;
  desc: string;
}

export function WhoWeAreClient({ team, values }: { team: Member[], values: Value[] }) {
  return (
    <>
      {/* Leadership Sections */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Leadership & Vision
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our organizational structure and leadership perspective
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <Link href={member.href} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative rounded-xl border-2 border-slate-200 bg-white p-8 text-center transition hover:border-blue-500 hover:shadow-xl"
                >
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{member.role}</p>
                  <div className="mt-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                    Read More →
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg bg-slate-800 p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
