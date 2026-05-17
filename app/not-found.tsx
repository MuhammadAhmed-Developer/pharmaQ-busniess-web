import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-4 max-w-xl text-base text-slate-600">
        The page you are looking for is unavailable. Browse our products or
        contact our team for assistance.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Back Home
        </Link>
        <Link
          href="/products"
          className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-500"
        >
          View Products
        </Link>
      </div>
    </section>
  );
}
