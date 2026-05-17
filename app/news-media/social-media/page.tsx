import { Metadata } from "next";
import { CommonHero } from "@/components/sections/common-hero";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Social Media | PhraramQ News & Media",
  description: "Follow PhraramQ on social media for updates and engagement.",
};

export default function SocialMediaPage() {
  return (
    <main>
      <CommonHero
        title="Social Media"
        subtitle="Connect With Us Online"
        backgroundImage="/Hero%20img/hero4.png"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Follow PhraramQ
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center mb-12">
            Stay updated with our latest news, products, and community
            initiatives on social media.
          </p>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                platform: "Facebook",
                icon: "f",
                followers: "50K+",
                color: "from-blue-500 to-blue-600",
              },
              {
                platform: "Instagram",
                icon: "📷",
                followers: "35K+",
                color: "from-pink-500 to-rose-600",
              },
              {
                platform: "LinkedIn",
                icon: "in",
                followers: "25K+",
                color: "from-blue-600 to-blue-700",
              },
              {
                platform: "Twitter",
                icon: "𝕏",
                followers: "15K+",
                color: "from-slate-700 to-slate-900",
              },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className={`rounded-lg bg-gradient-to-br ${social.color} p-6 text-white text-center hover:shadow-lg transition`}
              >
                <p className="text-3xl mb-2">{social.icon}</p>
                <h3 className="text-lg font-semibold">{social.platform}</h3>
                <p className="text-sm mt-2 text-white/80">{social.followers}</p>
              </a>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8 border border-blue-200 text-center">
            <p className="text-lg text-gray-600 mb-4">
              Share your thoughts, questions, or feedback with us on any of our
              social media platforms.
            </p>
            <p className="text-gray-700">
              We value your engagement and look forward to connecting with you!
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
