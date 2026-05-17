import Image from "next/image";
import { Reveal } from "@/components/animated/reveal";

type CommonHeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  eyebrow?: string;
};

export function CommonHero({
  title,
  subtitle,
  backgroundImage,
  eyebrow,
}: CommonHeroProps) {
  return (
    <section className="relative isolate z-0 overflow-hidden">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#60a5fa33_0%,transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          {eyebrow ? (
            <p className="mb-4 inline-flex rounded-full border border-white/35 bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
