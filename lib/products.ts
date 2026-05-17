import { products } from "@/data/products";

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 3) {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);

  const byCategory = products.filter(
    (product) => product.slug !== slug && product.category === current.category,
  );

  if (byCategory.length >= limit) return byCategory.slice(0, limit);

  const fallback = products.filter(
    (product) => product.slug !== slug && product.category !== current.category,
  );

  return [...byCategory, ...fallback].slice(0, limit);
}
