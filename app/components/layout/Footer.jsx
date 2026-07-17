import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "../common/Container";
import { companyConfig } from "../../lib/config";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

const services = ["General Pest Control", "Rodent Control", "Spider Control", "Ant & Cockroach Control"];

export function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#060606]">
      <Container className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Falcon</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Pest Control</h3>
          <p className="mt-4 text-sm leading-7 text-[#BDBDBD]">Premium pest protection with discreet service, eco-conscious treatments, and elite customer care.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm text-[#BDBDBD]">
            {quickLinks.map((link) => (
              <li key={link.href}><Link href={link.href} className="transition hover:text-[#D4AF37]">{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-3 text-sm text-[#BDBDBD]">
            {services.map((service) => <li key={service}>{service}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-[#BDBDBD]">
            <li className="flex gap-2"><a href={`tel:${companyConfig.phoneRaw}`} className="flex gap-2 items-center transition hover:text-[#D4AF37]"><Phone size={16} className="mt-0.5 text-[#D4AF37]" /> {companyConfig.phone}</a></li>
            <li className="flex gap-2"><a href={`mailto:${companyConfig.email}`} className="flex gap-2 items-center transition hover:text-[#D4AF37]"><Mail size={16} className="mt-0.5 text-[#D4AF37]" /> {companyConfig.email}</a></li>
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 text-[#D4AF37]" /> {companyConfig.address}</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href={companyConfig.social.instagram} className="rounded-full border border-[#2A2A2A] p-2 text-[#BDBDBD] transition hover:border-[#D4AF37] hover:text-[#D4AF37]" aria-label="Instagram"><Instagram size={16} /></a>
            <a href={companyConfig.social.facebook} className="rounded-full border border-[#2A2A2A] p-2 text-[#BDBDBD] transition hover:border-[#D4AF37] hover:text-[#D4AF37]" aria-label="Facebook"><Facebook size={16} /></a>
            <a href={companyConfig.social.twitter} className="rounded-full border border-[#2A2A2A] p-2 text-[#BDBDBD] transition hover:border-[#D4AF37] hover:text-[#D4AF37]" aria-label="Twitter"><Linkedin size={16} /></a>
          </div>
        </div>
      </Container>
      <div className="border-t border-[#2A2A2A] py-5 text-center text-sm text-[#7a7a7a]">© 2026 Falcon Pest Control. All rights reserved.</div>
    </footer>
  );
}
