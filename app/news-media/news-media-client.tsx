"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const newsCategories = [
  {
    title: "Social Media",
    description: "Follow us for real-time updates and engagement",
    posts: "150+ posts",
    href: "/news-media/social-media",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Our Culture",
    description: "Discover the PhraramQ workplace and team spirit",
    posts: "45+ stories",
    href: "/news-media/our-culture",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Learn With Us",
    description: "Educational resources and industry insights",
    posts: "80+ articles",
    href: "/news-media/learn-with-us",
    color: "from-orange-500 to-red-500",
  },
];

export function NewsMediaClient() {
  return (
    <>
      {/* Featured News Cards */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Latest from PhraramQ
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              News, updates, and stories from our company
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {newsCategories.map((category, index) => (
              <Link href={category.href} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl overflow-hidden h-64 cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}
                  />
                  <div className="relative h-full flex flex-col justify-between p-6 text-white">
                    <div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <p className="mt-2 text-sm text-white/80">
                        {category.description}
                      </p>
                    </div>
                    <div className="flex items-end justify-between">
                      <span className="text-sm font-medium">
                        {category.posts}
                      </span>
                      <svg
                        className="h-6 w-6 transform group-hover:translate-x-2 transition"
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
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Recent Articles
          </h2>
          <div className="space-y-6">
            {[
              {
                date: "May 2026",
                title: "PhraramQ Achieves New Quality Milestone",
                excerpt:
                  "Certified excellence in pharmaceutical manufacturing standards...",
              },
              {
                date: "April 2026",
                title: "Community Health Initiative Reaches 10,000 Families",
                excerpt:
                  "Our medical camps and health awareness programs make a difference...",
              },
              {
                date: "March 2026",
                title: "Expanding Distribution to New Markets",
                excerpt:
                  "Strategic expansion announced for wider product availability...",
              },
            ].map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-l-4 border-blue-500 pl-6 py-3 hover:pl-8 transition"
              >
                <time className="text-sm font-medium text-blue-600">
                  {article.date}
                </time>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {article.title}
                </h3>
                <p className="mt-2 text-gray-600">{article.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
