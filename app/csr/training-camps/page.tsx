import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Training Camps | PhraramQ CSR",
  description:
    "PhraramQ's professional development and training camp programs.",
};

export default function TrainingCampsPage() {
  return (
    <main>
      <CommonHero
        title="Training Camps"
        subtitle="Empowering Through Education"
        backgroundImage="/Hero%20img/hero4.png"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Skill Development Programs
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            PhraramQ conducts regular training camps focused on professional
            development, healthcare awareness, and skill enhancement for
            healthcare workers and community members.
          </p>

          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Training Focus Areas
            </h3>
            <ul className="space-y-3">
              {[
                "Healthcare professional certification",
                "Pharmaceutical knowledge updates",
                "Patient care and counseling",
                "Digital health literacy",
                "Business and entrepreneurship",
                "Environmental awareness",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
