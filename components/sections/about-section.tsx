import Image from "next/image";
import { Reveal } from "@/components/animated/reveal";
import { companyInfo } from "@/data/site";

export function AboutSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
          Who We Are
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Built for Quality, Speed, and Trust
        </h2>
        <p className="mt-5 text-base leading-7 text-slate-700">
          {companyInfo.longDescription}
        </p>
      </Reveal>
      <Reveal delay={0.12}>
        <Image
          src="/brandimg.jpeg"
          alt="Pharmaceutical brand operations"
          width={880}
          height={680}
          className="h-full w-full rounded-3xl object-cover shadow-xl"
        />
      </Reveal>
    </section>
  );
}
