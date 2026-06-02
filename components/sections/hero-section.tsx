import Image from "next/image";
import { Reveal } from "@/components/animated/reveal";
import { coreStats } from "@/data/site";

export function HeroSection() {
  return (
    <section>
      <section className="relative isolate z-0 h-[72vh] overflow-hidden sm:h-[78vh]">
        <Image
          src="/Hero%20img/hero.png"
          alt="Pharma Q Hero"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.5)_0%,rgba(2,6,23,0.72)_52%,rgba(2,6,23,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(245,158,11,0.2)_0%,transparent_36%)]" />

        <div className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex min-w-0 flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-8 lg:text-left">
              {/* Left: Logo */}
              <div className="shrink-0">
                <Image
                  src="/shortLogo.png"
                  alt="Pharma Q Logo"
                  width={100}
                  height={100}
                  className="object-contain drop-shadow-2xl sm:h-32 sm:w-32 lg:h-60 lg:w-60"
                />
              </div>

              {/* Right: Text Lines */}
              <div className="min-w-0 text-white ">
                {/* Line 1 */}
                <p className="text-lg font-bold tracking-[0.22em] text-white sm:text-2xl lg:text-5xl">
                  PHARMA Q
                </p>

                {/* Line 2 - Main Heading */}
                <h1 className="mt-2 text-lg font-extrabold leading-snug text-white sm:text-xl lg:text-3xl">
                  PHARMACEUTICALS (SMC-PRIVATE)
                  <br />
                  LIMITED, PAKISTAN.
                </h1>

                {/* Line 3 - Tagline in accent color */}
                <p className="mt-3 text-base font-semibold tracking-wide text-amber-400 sm:text-lg lg:text-2xl [text-shadow:0_2px_12px_rgba(245,158,11,0.4)]">
                  Committed to Better Health
                </p>

                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber-300/90 lg:mx-0" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
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
