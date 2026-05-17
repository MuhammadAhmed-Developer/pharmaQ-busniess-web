"use client";
import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";

// export const metadata: Metadata = {
//   title: "Medical Camp | PhraramQ CSR",
//   description: "PhraramQ's free medical camps and healthcare initiatives.",
// };

export default function MedicalCampPage() {
  return (
    <main>
      <CommonHero
        title="Medical Camp"
        subtitle="Healthcare for All"
        backgroundImage="/Hero%20img/hero1.png"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Community Healthcare Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            PhraramQ organizes regular medical camps in partnership with
            healthcare providers to deliver free medical consultations, health
            screening, and awareness programs to underserved communities.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Free Health Checkups",
                items: [
                  "General consultation",
                  "Blood pressure screening",
                  "Diabetes testing",
                ],
              },
              {
                title: "Services Provided",
                items: [
                  "Medication guidance",
                  "Health counseling",
                  "Disease awareness",
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                className="rounded-lg bg-gray-50 p-6 border border-slate-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-green-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-50 rounded-lg p-6 border border-green-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Impact Metrics
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-green-600">50+</p>
                <p className="text-gray-600">Camps Organized</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">500K+</p>
                <p className="text-gray-600">People Benefited</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">Free</p>
                <p className="text-gray-600">All Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
