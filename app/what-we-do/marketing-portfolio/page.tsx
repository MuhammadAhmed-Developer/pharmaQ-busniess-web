import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { motion } from "framer-motion";
import { MarketingPortfolioClient } from "./marketing-portfolio-client";

export const metadata: Metadata = {
  title: "Marketing Portfolio | PhraramQ",
  description:
    "PhraramQ's comprehensive product portfolio and market presence.",
};

export default function MarketingPortfolioPage() {
  return (
    <main>
      <CommonHero
        title="Marketing Portfolio"
        subtitle="Our Product Range"
        backgroundImage="/Hero%20img/hero2.png"
      />
      <MarketingPortfolioClient />
      <CTASection />
    </main>
  );
}
