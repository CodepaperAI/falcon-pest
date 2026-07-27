import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "../common/Container";
import { companyConfig } from "../../lib/config";
import servicesData from "../../data/services";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book Service" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2A2A2A] bg-[#060606]">
      <Container className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Falcon</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Pest Control</h3>
          <p className="mt-4 text-sm leading-7 text-[#BDBDBD]">Premium pest protection with discreet service, eco-conscious treatments, and elite customer care.</p>
          <p className="mt-4 text-sm text-[#BDBDBD]">{companyConfig.serviceArea}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm text-[#BDBDBD]">
            {quickLinks.map((link) => (
              <li key={link.href}><Link href={link.href} className="transition hover:text-[#D4AF37]">{link.label}</Link></li>
            ))}
            <li><Link href="/privacy" className="transition hover:text-[#D4AF37]">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-3 text-sm text-[#BDBDBD]">
            {servicesData.map((service) => (
              <li key={service.id}>
                <Link href="/services" className="transition hover:text-[#D4AF37]">{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-[#BDBDBD]">
            <li>
              <a href={`tel:${companyConfig.phoneRaw}`} className="flex items-center gap-2 transition hover:text-[#D4AF37]">
                <Phone size={16} className="flex-shrink-0 text-[#D4AF37]" /> {companyConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${companyConfig.email}`} className="flex items-center gap-2 transition hover:text-[#D4AF37]">
                <Mail size={16} className="flex-shrink-0 text-[#D4AF37]" /> {companyConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 flex-shrink-0 text-[#D4AF37]" /> {companyConfig.address}
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-1 flex-shrink-0 text-[#D4AF37]" /> Mon – Sat: {companyConfig.hours.weekday}
            </li>
          </ul>

          <div className="mt-6 flex gap-3">
            {companyConfig.social.instagram ? (
              <a href={companyConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#2A2A2A] p-2 text-[#BDBDBD] transition hover:border-[#D4AF37] hover:text-[#D4AF37]" aria-label="Instagram"><Instagram size={16} /></a>
            ) : null}
            {companyConfig.social.facebook ? (
              <a href={companyConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#2A2A2A] p-2 text-[#BDBDBD] transition hover:border-[#D4AF37] hover:text-[#D4AF37]" aria-label="Facebook"><Facebook size={16} /></a>
            ) : null}
          </div>
        </div>
      </Container>

      <div className="border-t border-[#2A2A2A] py-5 text-center text-sm text-[#7a7a7a]">© {year} Falcon Pest Control. All rights reserved.</div>
    </footer>
  );
}