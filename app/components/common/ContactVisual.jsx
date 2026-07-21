"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactVisual() {
  return (
    <div className="relative hidden min-h-[440px] items-center justify-center lg:flex">
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute h-80 w-80 rounded-full bg-[#D4AF37]/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-72 w-72 rounded-full border border-[#D4AF37]/30"
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
        <div className="relative flex h-60 w-60 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-sm">
          <div className="flex h-44 w-44 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">
            <Phone size={80} className="text-[#D4AF37]" />
          </div>
        </div>
        <motion.div
          className="absolute -right-6 -top-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-black/60 text-[#D4AF37] backdrop-blur-sm"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mail size={26} />
        </motion.div>
        <motion.div
          className="absolute -bottom-4 -left-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-black/60 text-[#D4AF37] backdrop-blur-sm"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <MapPin size={22} />
        </motion.div>
      </div>
    </div>
  );
}