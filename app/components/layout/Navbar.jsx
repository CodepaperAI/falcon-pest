"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { companyConfig } from "../../lib/config";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Falcon Pest Control home">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#D4AF37]/40 bg-[#111111]">
            <Image src="/logo.png" alt="Falcon Pest Control logo" width={32} height={32} />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Falcon</p>
            <p className="text-lg font-semibold text-white">Pest Control</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition ${pathname === link.href ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"}`}
            >
              {link.label}
              {pathname === link.href ? <span className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-[#D4AF37]" /> : null}
            </Link>
          ))}
          <a href={`tel:${companyConfig.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/20 hover:scale-105">
            <PhoneCall size={16} /> Call Now
          </a>
        </div>

        <button
          className="rounded-full border border-[#2A2A2A] p-2 text-white lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#2A2A2A] bg-black/95 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-2xl px-3 py-3 text-sm font-semibold ${pathname === link.href ? "bg-[#D4AF37]/15 text-[#D4AF37]" : "bg-[#111111] text-white"}`}
                >
                  {link.label}
                </Link>
              ))}
              <a href={`tel:${companyConfig.phoneRaw}`} onClick={() => setMobileOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-black hover:scale-105 transition">
                <PhoneCall size={16} /> Call Now
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
