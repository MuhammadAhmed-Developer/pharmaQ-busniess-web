import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/sections/product-grid";
import { JsonLd } from "@/components/json-ld";
import { CommonHero } from "@/components/sections/common-hero";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      url: `/products/${product.slug}`,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const relatedProducts = getRelatedProducts(slug, 3);
  const productSchema = productJsonLd(product);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.name, path: `/products/${product.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[productSchema, breadcrumb]} />
      <CommonHero
        title={product.name}
        subtitle={product.shortDescription}
        backgroundImage={product.image}
        eyebrow={product.category}
      />
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <Image
          src={product.detailImage}
          alt={product.name}
          width={920}
          height={740}
          unoptimized
          className="w-full rounded-3xl border border-slate-200 bg-white object-contain p-4 shadow-lg"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            {product.category}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600">
            {product.description}
          </p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              Specifications
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dosage Form: {product.dosageForm}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Packaging: {product.packaging}
            </p>
          </div>
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Indications
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {product.indications.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Request Product Inquiry
          </Link>
        </div>
      </section>
      <ProductGrid
        products={relatedProducts}
        title="Related Products"
        subtitle="Explore additional products from our pharmaceutical portfolio."
      />
    </>
  );
}
