import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { CTASection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductGrid } from "@/components/sections/product-grid";
import { JsonLd } from "@/components/json-ld";
import { getAllProducts } from "@/lib/products";
import { faqJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "PhraramQ is a pharmaceutical business delivering high-quality products, strong distribution support, and dependable healthcare partnerships.",
};

export default function HomePage() {
  const products = getAllProducts().slice(0, 6);

  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd(), faqJsonLd(faqs)]} />
      <HeroSection />
      <AboutSection />
      <ProductGrid products={products} />
      {/* <CapabilitiesSection /> */}
      {/* <FaqSection /> */}
      <CTASection />
    </>
  );
}
