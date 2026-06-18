import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { CommonHero } from "@/components/sections/common-hero";
import {
  getHeroImageForPath,
  getInfoPageBySegments,
  infoPages,
} from "@/data/pages";
import { breadcrumbJsonLd } from "@/lib/seo";

type InfoPageProps = {
  params: Promise<{ slug: string[] }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return infoPages.map((page) => ({
    slug: page.path.replace(/^\//, "").split("/"),
  }));
}

export async function generateMetadata({
  params,
}: InfoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getInfoPageBySegments(slug);

  if (!page) {
    return {
      title: "Page Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: page.title,
    description: page.subtitle,
    alternates: { canonical: page.path },
    openGraph: {
      title: `${page.title} | PhraramQ`,
      description: page.subtitle,
      url: page.path,
      images: [{ url: getHeroImageForPath(page.path), alt: page.title }],
    },
  };
}

export default async function InfoPage({ params }: InfoPageProps) {
  const { slug } = await params;
  const page = getInfoPageBySegments(slug);

  if (!page) {
    notFound();
  }

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    ...slug.map((segment, index) => ({
      name: page.path
        .replace(/^\//, "")
        .split("/")
        [index].split("-")
        .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
        .join(" "),
      path: `/${page.path
        .replace(/^\//, "")
        .split("/")
        .slice(0, index + 1)
        .join("/")}`,
    })),
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <CommonHero
        title={page.title}
        subtitle={page.subtitle}
        backgroundImage={getHeroImageForPath(page.path)}
        eyebrow="PhraramQ"
      />
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              {page.intro}
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-600">
              Key Focus Areas
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {page.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
