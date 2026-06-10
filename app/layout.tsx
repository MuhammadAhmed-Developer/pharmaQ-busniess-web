import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import "./globals.css";
import { SITE_URL, companyInfo } from "@/data/site";
import { defaultOgImage } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PhraramQ | Pharmaceutical Business",
    template: "%s | PhraramQ",
  },
  description: companyInfo.shortDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PhraramQ | Pharmaceutical Business",
    description: companyInfo.shortDescription,
    url: SITE_URL,
    siteName: "PhraramQ",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero4.png",
        width: 1200,
        height: 630,
        alt: "PhraramQ pharmaceuticals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhraramQ | Pharmaceutical Business",
    description: companyInfo.shortDescription,
    images: ["/hero4.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
