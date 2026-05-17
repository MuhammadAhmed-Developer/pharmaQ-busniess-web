import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { motion } from "framer-motion";
import { ResearchForumClient } from "./research-forum-client";

export const metadata: Metadata = {
  title: "Research Forum | PhraramQ CSR",
  description:
    "PhraramQ's pharmaceutical research forum and collaborative initiatives.",
};

export default function ResearchForumPage() {
  return (
    <main>
      <CommonHero
        title="Research Forum"
        subtitle="Advancing Pharmaceutical Knowledge"
        backgroundImage="/Hero%20img/hero1.png"
      />
      <ResearchForumClient />
      <CTASection />
    </main>
  );
}
