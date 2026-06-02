import Link from "next/link";
import { Reveal } from "@/components/animated/reveal";

export function CTASection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl border border-amber-200 bg-[linear-gradient(120deg,#fff5dc_0%,#fff_55%,#e6f0ff_100%)] p-10 sm:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
          {/* <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
            Let us collaborate
          </p> */}
          <h2 className="mt-4 max-w-2xl text-3xl font-bold text-slate-900 sm:text-4xl">
            Looking for reliable pharma products with home delivery?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
            Share your requirements and our team will propose product options,
            home delivery availability, timelines, and partnership models.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Start a Conversation
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
