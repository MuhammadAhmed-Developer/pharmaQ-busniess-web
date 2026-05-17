import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { WhoWeAreClient } from "./who-we-are-client";

export const metadata: Metadata = {
  title: "Who We Are | PhraramQ",
  description:
    "Learn about PhraramQ's mission, vision, values, and corporate profile.",
};

export default function WhoWeArePage() {
  const team = [
    {
      name: "CEO Message",
      role: "Leadership Vision",
      href: "/who-we-are/ceo-message",
    },
    {
      name: "Mission & Vision",
      role: "Corporate Direction",
      href: "/who-we-are/mission-vision-values",
    },
    {
      name: "Corporate Profile",
      role: "Company Overview",
      href: "/who-we-are/corporate-profile",
    },
  ];

  const values = [
    {
      title: "Integrity",
      desc: "Ethical practices in all operations",
    },
    { title: "Innovation", desc: "Continuous improvement mindset" },
    { title: "Quality", desc: "Excellence in every detail" },
    { title: "Trust", desc: "Building lasting partnerships" },
  ];

  return (
    <main>
      <CommonHero
        title="Who We Are"
        subtitle="Building Trust Through Excellence"
        backgroundImage="/Hero%20img/hero3.png"
      />

      <WhoWeAreClient team={team} values={values} />

      <CTASection />
    </main>
  );
}
