import { Metadata } from "next";
import Link from "next/link";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { motion } from "framer-motion";
import { CSRClient } from "./csr-client";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility | PhraramQ",
  description:
    "Discover PhraramQ's CSR initiatives, research forums, and community engagement programs.",
};

export default function CSRPage() {
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

  return (
    <main>
      <CommonHero
        title="Corporate Social Responsibility"
        subtitle="Making a Difference in Communities"
        backgroundImage="/Hero%20img/hero1.png"
      />

      <CSRClient />

      <CTASection />
    </main>
  );
}
