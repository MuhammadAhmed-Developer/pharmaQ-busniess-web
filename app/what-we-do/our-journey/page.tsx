import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { motion } from "framer-motion";
import { OurJourneyClient } from "./our-journey-client";

export const metadata: Metadata = {
  title: "Our Journey | PhraramQ",
  description: "The history and milestones of PhraramQ's journey.",
};

export default function OurJourneyPage() {
  const milestones = [
    { year: "2001", event: "PhraramQ founded" },
    { year: "2005", event: "First manufacturing facility established" },
    { year: "2010", event: "Achieved GMP certification" },
    { year: "2015", event: "Expanded to international markets" },
    { year: "2020", event: "Second plant commissioned" },
    { year: "2024", event: "25 years of excellence in pharma" },
  ];

  return (
    <main>
      <CommonHero
        title="Our Journey"
        subtitle="A Quarter Century of Excellence"
        backgroundImage="/Hero%20img/hero1.png"
      />
      <OurJourneyClient />
      <CTASection />
    </main>
  );
}
