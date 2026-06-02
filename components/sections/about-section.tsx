import Image from "next/image";
import { Reveal } from "@/components/animated/reveal";
import { companyInfo } from "@/data/site";

export function AboutSection() {
  return (
    <section className="w-full py-20">
      <Reveal>
        <div className="relative isolate overflow-hidden min-h-130 sm:min-h-145">
          <Image
            src="/webg.jpeg"
            alt="Pharmaceutical brand operations"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(7,16,34,0.92)_0%,rgba(7,16,34,0.78)_42%,rgba(7,16,34,0.45)_100%)]" />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-5xl text-center text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                Who We Are
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Built for Quality, Speed, and Trust
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-100">
                {companyInfo.longDescription}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
