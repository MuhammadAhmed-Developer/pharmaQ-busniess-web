import Image from "next/image";
import { StaggerGrid, StaggerItem } from "@/components/animated/stagger-grid";
import { capabilities } from "@/data/site";

export function CapabilitiesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
          Our Strengths
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Business Capabilities
        </h2>
        <StaggerGrid className="mt-10 grid gap-6 md:grid-cols-3">
          {capabilities.map((item) => (
            <StaggerItem key={item.title}>
              <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={540}
                  height={320}
                  className="h-44 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
