import { Reveal } from "@/components/animated/reveal";
import { faqs } from "@/data/site";

export function FaqSection() {
  return (
    <section className="bg-linear-to-b from-slate-50 to-white py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            FAQs
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Common Questions
          </h2>
        </Reveal>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.07}>
              <details className="rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm">
                <summary className="cursor-pointer text-base font-semibold text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
