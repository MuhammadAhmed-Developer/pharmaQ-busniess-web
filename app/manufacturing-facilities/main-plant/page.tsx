import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { MainPlantClient } from "./main-plant-client";

export const metadata: Metadata = {
  title: "Main Plant | Manufacturing Facilities",
  description:
    "PhraramQ's main manufacturing plant with advanced technology and quality systems.",
};

export default function MainPlantPage() {
  const capabilities = [
    "Tablet Manufacturing",
    "Capsule Production",
    "Liquid Formulations",
    "Injectable Solutions",
    "Quality Testing Labs",
    "Packaging & Labeling",
  ];

  const certifications = ["ISO 9001", "GMP", "WHO Certified", "FDA Approved"];

  return (
    <main>
      <CommonHero
        title="Main Plant"
        subtitle="Advanced Manufacturing Excellence"
        backgroundImage="/Hero%20img/hero4.png"
      />

      <MainPlantClient capabilities={capabilities} certifications={certifications} />

      <CTASection />
    </main>
  );
}
