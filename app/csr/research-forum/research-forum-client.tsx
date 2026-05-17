"use client";

import { motion } from "framer-motion";

export function ResearchForumClient() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Research Initiatives
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              PhraramQ&apos;s Research Forum is dedicated to advancing
              pharmaceutical knowledge and fostering collaborative research
              between industry professionals, academicians, and healthcare
              experts.
            </p>
            <p>
              Through regular seminars, workshops, and conferences, we create
              platforms for knowledge sharing and innovation in pharmaceutical
              sciences.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Ongoing Projects",
              count: "12",
              desc: "Active research initiatives",
            },
            {
              title: "Partner Institutions",
              count: "8",
              desc: "Academic collaborations",
            },
            {
              title: "Publications",
              count: "25+",
              desc: "Research papers published",
            },
            {
              title: "Annual Forum",
              count: "1",
              desc: "Major annual symposium",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border border-blue-200"
            >
              <p className="text-4xl font-bold text-blue-600">{item.count}</p>
              <p className="mt-2 font-semibold text-gray-900">{item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
