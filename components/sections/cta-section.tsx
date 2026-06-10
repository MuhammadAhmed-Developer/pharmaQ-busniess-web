import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/animated/reveal";
import { companyInfo } from "@/data/site";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export function CTASection() {
  const whatsappNumber = companyInfo.whatsapp.replace(/\D/g, "");

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl border border-amber-200 bg-[linear-gradient(120deg,#fff5dc_0%,#fff_55%,#e6f0ff_100%)] p-8 sm:p-12 lg:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_260px] lg:items-center">
            <div>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold text-slate-900 sm:text-4xl">
                For Online Home Delivery, Call or WhatsApp Us
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
                Need medicines or healthcare products delivered to your home?
                Contact our team by call or WhatsApp and share your
                requirements. We will guide you with product availability,
                delivery timelines, and order support.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  <FiPhone className="h-4 w-4" />
                  Call Now
                </Link>

                <Link
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  WhatsApp Us
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <Image
                src="/qrcode.jpeg"
                alt="PharmaQ QR Code"
                width={150}
                height={150}
                className="rounded-xl border border-slate-200 bg-white p-2"
              />

              <p className="mt-4 text-center text-sm font-semibold text-slate-900">
                Scan QR Code
              </p>

              <p className="mt-1 text-center text-xs leading-5 text-slate-500">
                Scan to visit our website or connect for online home delivery.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
