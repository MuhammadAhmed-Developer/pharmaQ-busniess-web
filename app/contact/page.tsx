import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { companyInfo } from "@/data/site";
import { JsonLd } from "@/components/json-ld";
import { CommonHero } from "@/components/sections/common-hero";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PhraramQ for product inquiries, partnerships, and distribution opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <CommonHero
        title="Contact Us"
        subtitle="Let us discuss product availability, partnerships, and distribution opportunities."
        backgroundImage="/Hero%20img/hero4.png"
        eyebrow="Business Inquiry"
      />
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Contact Us
          </p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Let us discuss your business requirements
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Reach out for product information, bulk distribution details, or
            long-term partnership opportunities.
          </p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-700">Email: {companyInfo.email}</p>
            <p className="mt-2 text-sm text-slate-700">
              Phone: {companyInfo.phone}
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Address: {companyInfo.address}
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
