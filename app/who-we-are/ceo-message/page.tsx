import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";
import { CEOMessageContent } from "./ceo-message-content";

export const metadata: Metadata = {
  title: "CEO Message | PhraramQ",
  description: "Message from PhraramQ's CEO on our mission and vision.",
};

export default function CEOMessagePage() {
  return (
    <main>
      <CommonHero
        title="CEO Message"
        subtitle="Leadership Vision for the Future"
        backgroundImage="/Hero%20img/hero1.png"
      />

      <section className="py-16 md:py-24">
        <CEOMessageContent />
      </section>

      <CTASection />
    </main>
  );
}
