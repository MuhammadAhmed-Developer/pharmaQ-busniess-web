"use client";

import { FaWhatsapp } from "react-icons/fa";
import { companyInfo } from "@/data/site";

export function FloatingWhatsApp() {
  const phoneNumber = companyInfo.phone; // Use the phone number from companyInfo
  const message = "Hello PhraramQ! I'd like to inquire about your products.";

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-110 active:scale-95"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
