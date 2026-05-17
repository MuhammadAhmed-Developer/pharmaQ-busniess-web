import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { motion } from "framer-motion";
import { NationalDistributionSetupClient } from "./national-distribution-setup-client";

export const metadata: Metadata = {
  title: "National Distribution Setup | PhraramQ",
  description:
    "PhraramQ's nationwide distribution network and logistics infrastructure.",
};

export default function NationalDistributionPage() {
  return (
    <main>
      <CommonHero
        title="National Distribution"
        subtitle="Reaching Every Corner of the Nation"
        backgroundImage="/Hero%20img/hero3.png"
      />
      <NationalDistributionSetupClient />
      <CTASection />
    </main>
  );
}
