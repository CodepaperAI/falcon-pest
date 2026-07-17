import { getPageMetadata, jsonLd } from "../lib/seo";
import Script from "next/script";
import { PageBanner } from "../components/common/PageBanner";
import { Section } from "../components/common/Section";
import { Container } from "../components/common/Container";
import { Heading } from "../components/common/Heading";
import { ContactForm } from "../components/forms/ContactForm";
import { Card } from "../components/common/Card";
import { Phone, Mail, MapPin } from "lucide-react";
import { FadeIn } from "../components/animation/FadeIn";
import { companyConfig } from "../lib/config";

export const metadata = getPageMetadata("/contact", "Contact Us", "Get in touch with Falcon Pest Control for premium inspection and treatment requests.");

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <Script id="jsonld-contact" type="application/ld+json">
        {JSON.stringify([jsonLd.website("/contact"), jsonLd.breadcrumb([{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }])])}
      </Script>
      <PageBanner title="Contact Falcon" description="Reach out for a consultation, emergency support, or a customized protection plan." image="/contact_us.png" eyebrow="Contact" />
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
