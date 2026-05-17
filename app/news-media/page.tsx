import { Metadata } from "next";
import Link from "next/link";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { motion } from "framer-motion";
import { NewsMediaClient } from "./news-media-client";

export const metadata: Metadata = {
  title: "News & Media | PhraramQ",
  description:
    "Stay updated with PhraramQ's latest news, media coverage, and company culture insights.",
};

export default function NewsMediaPage() {
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

  return (
    <main>
      <CommonHero
        title="News & Media"
        subtitle="Stay Connected With Us"
        backgroundImage="/Hero%20img/hero2.png"
      />
      <NewsMediaClient />
      <CTASection />
    </main>
  );
}
