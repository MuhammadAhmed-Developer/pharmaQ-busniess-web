import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { ManufacturingFacilitiesClient } from "./manufacturing-facilities-client";

export const metadata: Metadata = {
  title: "Manufacturing Facilities | PhraramQ",
  description:
    "Discover PhraramQ's state-of-the-art manufacturing plants and facilities.",
};

export default function ManufacturingFacilitiesPage() {
  const facilities = [
    {
      name: "Main Plant",
      description:
        "Primary manufacturing facility with advanced infrastructure",
      capacity: "500+ Tons/Month",
      certifications: ["ISO 9001", "GMP", "WHO Certified"],
      href: "/manufacturing-facilities/main-plant",
    },
    {
      name: "Cephalosporin Plant",
      description: "Specialized facility for antibiotic production",
      capacity: "200+ Tons/Month",
      certifications: ["ISO 13485", "GMP", "FDA Approved"],
      href: "/manufacturing-facilities/cephalosporin-plant",
    },
  ];

  const commitments = [
    {
      title: "Latest Technology",
      desc: "State-of-the-art equipment and automation",
    },
    {
      title: "Quality Control",
      desc: "Rigorous testing at every production stage",
    },
    {
      title: "Sustainability",
      desc: "Eco-friendly manufacturing processes",
    },
  ];

  return (
    <main>
      <CommonHero
        title="Manufacturing Facilities"
        subtitle="World-Class Production Standards"
        backgroundImage="/Hero%20img/hero4.png"
      />

      <ManufacturingFacilitiesClient facilities={facilities} commitments={commitments} />

      <CTASection />
    </main>
  );
}
