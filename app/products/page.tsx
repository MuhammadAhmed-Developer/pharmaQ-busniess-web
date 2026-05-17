import type { Metadata } from "next";
import { ProductGrid } from "@/components/sections/product-grid";
import { JsonLd } from "@/components/json-ld";
import { CommonHero } from "@/components/sections/common-hero";
import { getAllProducts } from "@/lib/products";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore PhraramQ pharmaceutical products and formulations.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const products = getAllProducts();
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <CommonHero
        title="Our Products"
        subtitle="Explore our complete pharmaceutical portfolio designed for dependable treatment support."
        backgroundImage="/Hero%20img/hero2.png"
        eyebrow="Product Portfolio"
      />
      <ProductGrid
        products={products}
        title="Complete Product Range"
        subtitle="Explore our static product catalog built for search visibility and rich-detail browsing."
      />
    </>
  );
}
