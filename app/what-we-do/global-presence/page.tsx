import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { motion } from "framer-motion";
import { GlobalPresenceClient } from "./global-presence-client";

export const metadata: Metadata = {
  title: "Global Presence | PhraramQ",
  description: "PhraramQ's global operations and international presence.",
};

export default function GlobalPresencePage() {
  const regions = [
    { region: "Asia", countries: 8, status: "Active" },
    { region: "Middle East", countries: 5, status: "Active" },
    { region: "Africa", countries: 3, status: "Expanding" },
    { region: "Europe", countries: 2, status: "Growing" },
  ];

  return (
    <main>
      <CommonHero
        title="Global Presence"
        subtitle="Operating Across Continents"
        backgroundImage="/Hero%20img/hero2.png"
      />
      <GlobalPresenceClient />
      <CTASection />
    </main>
  );
}
