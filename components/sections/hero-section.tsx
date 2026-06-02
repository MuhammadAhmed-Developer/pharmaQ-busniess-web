import Link from "next/link";
import { Reveal } from "@/components/animated/reveal";
import { coreStats } from "@/data/site";
import { CommonHero } from "@/components/sections/common-hero";

export function HeroSection() {
  return (
    <section>
      <CommonHero
        eyebrow="Trusted Healthcare Partner"
        title="Committed to Better Health"
        subtitle="PHARMA Q PHARMACEUTICALS (SMC-PRIVATE) LIMITED, PAKISTAN."
        backgroundImage="/Hero%20img/hero1.png"
      />
      {/* <div className="mx-auto mt-6 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="mx-auto mt-4 z-10 grid w-full max-w-6xl grid-cols-2 gap-4 px-4 pb-16 sm:grid-cols-4 sm:px-6 lg:px-8">
        {coreStats.map((stat, index) => (
          <Reveal key={stat.label} delay={0.06 * index}>
            <div className="rounded-2xl border border-slate-200 bg-white/75 p-4 backdrop-blur">
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div> */}
    </section>
  );
}
