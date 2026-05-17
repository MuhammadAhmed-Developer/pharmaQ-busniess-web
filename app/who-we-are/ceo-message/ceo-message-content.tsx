"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function CEOMessageContent() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-80 rounded-xl overflow-hidden"
        >
          <Image src="/brandimg.jpeg" alt="CEO" fill className="object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Building Trust, Creating Value
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            At PhraramQ, we are committed to delivering pharmaceutical solutions
            that make a real difference in people&apos;s lives. Our journey has
            been built on three pillars: unwavering quality, ethical business
            practices, and innovation.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Every product we manufacture, every process we refine, and every
            decision we make is guided by our core belief that quality
            healthcare should be accessible, affordable, and reliable.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I am proud of our team&apos;s dedication and look forward to
            continued growth and excellence.
          </p>
          <p className="mt-6 text-lg font-semibold text-gray-900">
            With warm regards,
            <br />
            <span className="text-blue-600">CEO, PhraramQ</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
