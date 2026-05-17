import { Metadata } from "next";
import Link from "next/link";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { motion } from "framer-motion";
import { DrugSafetyClient } from "./drug-safety-client";

export const metadata: Metadata = {
  title: "Drug Safety | PhraramQ",
  description:
    "PhraramQ's commitment to drug safety, pharmacovigilance, and adverse event reporting.",
};

export default function DrugSafetyPage() {
  const safetyFeatures = [
    {
      title: "Pharmacovigilance",
      description: "Continuous monitoring of drug safety and efficacy",
      icon: "📊",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing before market release",
      icon: "✓",
    },
    {
      title: "Adverse Event Reporting",
      description: "Swift reporting and response protocols",
      icon: "⚠️",
    },
    {
      title: "Compliance",
      description: "Adherence to international regulatory standards",
      icon: "📋",
    },
    {
      title: "Medical Support",
      description: "Expert guidance for healthcare professionals",
      icon: "👨‍⚕️",
    },
    {
      title: "Patient Education",
      description: "Comprehensive information for safe medication use",
      icon: "📚",
    },
  ];

  return (
    <main>
      <CommonHero
        title="Drug Safety"
        subtitle="Protecting Patient Wellbeing"
        backgroundImage="/Hero%20img/hero1.png"
      />
      <DrugSafetyClient />
      <CTASection />
    </main>
  );
}
