"use client";

import { motion } from "motion/react";
import { contact } from "@/data/company";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`${contact.whatsapp}?text=${encodeURIComponent(
        "Hello TKEL, I'd like to enquire about your services."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60 [animation-duration:2.5s]" />
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.693 4.612 1.897 6.487L4 29l7.72-1.86A11.93 11.93 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3Zm0 21.818a9.77 9.77 0 0 1-4.98-1.365l-.357-.213-4.583 1.104 1.127-4.47-.234-.366A9.77 9.77 0 0 1 5.182 15c0-5.968 4.85-10.818 10.819-10.818S26.818 9.032 26.818 15 21.969 24.818 16.001 24.818Zm5.55-8.14c-.304-.152-1.797-.887-2.076-.988-.279-.101-.482-.152-.685.152-.202.304-.786.988-.964 1.19-.177.203-.354.228-.658.076-.304-.152-1.283-.473-2.444-1.51-.903-.805-1.513-1.8-1.69-2.104-.177-.304-.019-.469.133-.62.137-.136.304-.354.456-.532.152-.177.202-.304.304-.507.101-.203.05-.38-.025-.532-.076-.152-.685-1.652-.939-2.264-.247-.594-.499-.514-.685-.523-.177-.009-.38-.011-.582-.011-.203 0-.532.076-.81.38-.279.304-1.063 1.04-1.063 2.535 0 1.495 1.088 2.94 1.24 3.144.152.203 2.14 3.267 5.187 4.581.725.313 1.29.5 1.731.64.727.231 1.389.198 1.912.12.583-.087 1.797-.735 2.05-1.444.254-.71.254-1.318.177-1.444-.076-.127-.279-.203-.583-.355Z" />
      </svg>
    </motion.a>
  );
}
