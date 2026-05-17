"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navMenu } from "@/data/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-3 py-2 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex min-w-fit shrink-0 items-center gap-2 md:gap-3"
        >
          <Image
            src="/logo.jpeg"
            alt="PhraramQ logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-md object-cover sm:h-11 sm:w-11"
            priority
          />
          <div className="hidden min-w-fit sm:block">
            <p className="text-base font-bold leading-tight text-slate-900 md:text-lg">
              PhraramQ
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 md:text-xs">
              Pharma
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navMenu.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="inline-flex items-center whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 xl:text-sm"
              >
                {item.label}
              </Link>

              {item.children?.length ? (
                <div
                  className={`pointer-events-none absolute left-0 top-full z-50 pt-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100`}
                >
                  <div className="w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-xs text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 md:text-sm"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md border border-slate-300 p-2 text-slate-700 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen ? (
        <nav className="border-t border-slate-200 bg-white px-3 py-3 sm:px-6 lg:hidden">
          <div className="space-y-1">
            {navMenu.map((item) =>
              item.children?.length ? (
                <details
                  key={item.href}
                  className="rounded-lg border border-slate-200 px-3 py-2"
                >
                  <summary className="cursor-pointer list-none text-sm font-semibold text-slate-800">
                    {item.label}
                  </summary>
                  <div className="mt-2 space-y-1 border-t border-slate-100 pt-2 ps-2">
                    <Link
                      href={item.href}
                      className="block rounded-lg px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 sm:text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label} Overview
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-2 py-1 text-xs text-slate-600 hover:bg-slate-100 hover:text-slate-900 sm:text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
