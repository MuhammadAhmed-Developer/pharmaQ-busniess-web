import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { companyInfo, navMenu } from "@/data/site";

export function SiteFooter() {
  const mainNavItems = navMenu.slice(0, 6);

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="flex flex-col">
            <Link href="/" className="inline-flex items-center gap-2 w-fit">
              <Image
                src="/logo.jpeg"
                alt="PhraramQ logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-md object-cover"
              />
              <div>
                <p className="text-lg font-bold text-white">
                  {companyInfo.name}
                </p>
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Pharma
                </p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Reliable pharmaceutical solutions backed by quality systems and
              responsive distribution support.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Get In Touch
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <FiPhone className="h-5 w-5 shrink-0 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 uppercase">Phone</p>
                  <Link
                    href={`tel:${companyInfo.phone}`}
                    className="text-sm text-slate-300 hover:text-white"
                  >
                    {companyInfo.phone}
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaWhatsapp className="h-5 w-5 shrink-0 text-green-400 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 uppercase">WhatsApp</p>
                  <Link
                    href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`}
                    className="text-sm text-slate-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {companyInfo.whatsapp}
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="h-5 w-5 shrink-0 text-red-400 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 uppercase">Email</p>
                  <Link
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm text-slate-300 hover:text-white break-all"
                  >
                    {companyInfo.email}
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMapPin className="h-5 w-5 shrink-0 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 uppercase">Address</p>
                  <p className="text-sm text-slate-300">
                    {companyInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center md:col-span-2 lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Connect
            </p>
            <Image
              src="/qrcode.jpeg"
              alt="PhraramQ QR Code"
              width={120}
              height={120}
              className="rounded-lg border border-slate-700 p-2 bg-white"
            />
            <p className="mt-3 text-xs text-slate-500 text-center">
              Scan to visit our website
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <p className="text-xs text-slate-50 text-center">
            © {new Date().getFullYear()} {companyInfo.legalName}. All rights
            reserved.
          </p>
          {/* <div className="flex gap-4 text-slate-400">
            <Link
              href={companyInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href={companyInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebookF className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href={companyInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
