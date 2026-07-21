import { getPageMetadata, jsonLd } from "../lib/seo";
import Script from "next/script";
import { Section } from "../components/common/Section";
import { Container } from "../components/common/Container";
import { Heading } from "../components/common/Heading";
import { ContactForm } from "../components/forms/ContactForm";
import { Card } from "../components/common/Card";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { FadeIn } from "../components/animation/FadeIn";
import { companyConfig } from "../lib/config";
import { ContactVisual } from "../components/common/ContactVisual"; 
import Image from "next/image";


export const metadata = getPageMetadata("/contact", "Contact Us", "Get in touch with Falcon Pest Control for premium inspection and treatment requests.");

const contactInfo = [
  { icon: MapPin, label: "Address", value: "St. Catharines, Ontario, Canada" },
  { icon: Phone, label: "Phone", value: "289-990-5828", href: "tel:+12899905828" },
  { icon: Mail, label: "Email", value: "info@falconpestcontrol.ca", href: "mailto:info@falconpestcontrol.ca" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 8:00 AM - 7:00 PM" },
  { icon: Globe, label: "Service Area", value: "Serving Niagara & Hamilton Region" },
];

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <Script id="jsonld-contact" type="application/ld+json">
        {JSON.stringify([jsonLd.website("/contact"), jsonLd.breadcrumb([{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }])])}
      </Script>

     <section className="relative isolate overflow-hidden border-b border-[#2A2A2A] bg-black">
        <Image src="/hero6.png" alt="Falcon Pest Control" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.18),_transparent_55%)]" />

        <div className="relative z-10 mx-auto grid w-full items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:px-14">
          {/* Left: info */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D4AF37] text-[#D4AF37]">
                <Phone size={22} />
              </div>
              <h1 className="text-3xl font-bold uppercase tracking-wide text-[#D4AF37] sm:text-4xl lg:text-5xl">Contact Us</h1>
            </div>
            <p className="mt-4 text-lg text-white/90">We’re here to help.</p>

            <div className="mt-10 grid max-w-xl gap-px overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 bg-black/70 px-5 py-4 backdrop-blur-sm">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/50 text-[#D4AF37]">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#D4AF37]">{label}</p>
                    {href ? (
                      <a href={href} className="block truncate text-base text-white transition hover:text-[#D4AF37]">{value}</a>
                    ) : (
                      <p className="text-base text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: animated visual */}
          <ContactVisual />
        </div>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn>
            <Heading eyebrow="Let’s talk" title="A premium service starts with a simple conversation." description="Our team is available for rapid response, inspections, and expert recommendations." />
            <div className="mt-8 grid gap-4">
              <a href={`tel:${companyConfig.phoneRaw}`} className="block">
                <Card className="flex items-center gap-4 hover:border-[#D4AF37]/50 transition cursor-pointer">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]"><Phone size={20} /></div>
                  <div>
                    <p className="font-semibold text-white">Call us</p>
                    <p className="text-sm text-[#BDBDBD]">{companyConfig.phone}</p>
                  </div>
                </Card>
              </a>
              <a href={`mailto:${companyConfig.email}`} className="block">
                <Card className="flex items-center gap-4 hover:border-[#D4AF37]/50 transition cursor-pointer">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]"><Mail size={20} /></div>
                  <div>
                    <p className="font-semibold text-white">Email us</p>
                    <p className="text-sm text-[#BDBDBD]">{companyConfig.email}</p>
                  </div>
                </Card>
              </a>
              <Card className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]"><MapPin size={20} /></div>
                <div>
                  <p className="font-semibold text-white">Visit</p>
                  <p className="text-sm text-[#BDBDBD]">{companyConfig.address}</p>
                </div>
              </Card>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}><ContactForm /></FadeIn>
        </Container>
      </Section>
    </main>
  );
}