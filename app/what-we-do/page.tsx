import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { WhatWeDoClient } from "./what-we-do-client";

export const metadata: Metadata = {
  title: "What We Do | PhraramQ",
  description:
    "Explore PhraramQ's pharmaceutical operations, global presence, and distribution network.",
};

export default function WhatWeDoPage() {
  return (
    <main>
      <CommonHero
        title="What We Do"
        subtitle="Global Pharmaceutical Excellence"
        backgroundImage="/Hero%20img/hero2.png"
      />
      <WhatWeDoClient />
      <CTASection />
    </main>
  );
}
