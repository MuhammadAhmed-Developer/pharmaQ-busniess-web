import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { StaggerGrid, StaggerItem } from "@/components/animated/stagger-grid";

type ProductGridProps = {
  products: Product[];
  title?: string;
  subtitle?: string;
};

export function ProductGrid({
  products,
  title = "Featured Products",
  subtitle = "High-quality formulations built for modern healthcare demands.",
}: ProductGridProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
        Product Portfolio
      </p>
      <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base text-slate-600">{subtitle}</p>
      <StaggerGrid className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <StaggerItem key={product.id}>
            <article className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={420}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                  {product.category}
                </span>
              </div>
              <div className="flex h-[calc(100%-13rem)] flex-col p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {product.shortDescription}
                </p>
                <div className="mt-5">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  );
}
