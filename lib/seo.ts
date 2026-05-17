import { companyInfo, SITE_URL } from "@/data/site";
import type { Product } from "@/data/products";

type JsonLd = Record<string, unknown>;

export const defaultOgImage = `${SITE_URL}/famousprodutctimage.jpeg`;

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyInfo.name,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/products?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.jpeg`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: companyInfo.phone,
      email: companyInfo.email,
    },
    sameAs: [
      companyInfo.social.linkedin,
      companyInfo.social.facebook,
      companyInfo.social.instagram,
    ],
  };
}

export function productJsonLd(product: Product): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: [`${SITE_URL}${product.image}`, `${SITE_URL}${product.detailImage}`],
    category: product.category,
    brand: {
      "@type": "Brand",
      name: companyInfo.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: companyInfo.legalName,
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqJsonLd(
  faqs: Array<{ question: string; answer: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
