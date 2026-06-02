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
    <section className="relative isolate z-0 h-[72vh] overflow-hidden sm:h-[78vh]">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.5)_0%,rgba(2,6,23,0.72)_52%,rgba(2,6,23,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(245,158,11,0.2)_0%,transparent_36%)]" />

      <div className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center text-white [text-shadow:0_2px_18px_rgba(2,6,23,0.55)]">
            {eyebrow ? (
              <p className="mb-5 inline-flex items-center rounded-full border border-white/35 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-100 sm:text-lg">
              {subtitle}
            </p>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-300/90" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
