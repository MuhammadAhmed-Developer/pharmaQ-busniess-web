import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Learn With Us | PhraramQ News & Media",
  description:
    "Educational resources and pharmaceutical knowledge from PhraramQ.",
};

export default function LearnWithUsPage() {
  return (
    <main>
      <CommonHero
        title="Learn With Us"
        subtitle="Knowledge Sharing & Education"
        backgroundImage="/Hero%20img/hero3.png"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Educational Resources
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            PhraramQ is committed to sharing pharmaceutical knowledge and
            healthcare education. We provide resources for healthcare
            professionals, patients, and students.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Articles & Blog Posts",
                count: "80+",
                desc: "In-depth pharmaceutical and healthcare articles",
              },
              {
                title: "Video Tutorials",
                count: "35+",
                desc: "Educational videos on medications and healthcare",
              },
              {
                title: "Webinars",
                count: "Monthly",
                desc: "Interactive sessions with healthcare experts",
              },
              {
                title: "Research Papers",
                count: "25+",
                desc: "Published research on pharmaceutical innovations",
              },
            ].map((resource, i) => (
              <div
                key={i}
                className="rounded-lg border-l-4 border-blue-600 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {resource.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{resource.desc}</p>
                  </div>
                  <span className="ml-4 flex-shrink-0 rounded-full bg-blue-100 px-3 py-1 text-blue-800 font-semibold">
                    {resource.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
