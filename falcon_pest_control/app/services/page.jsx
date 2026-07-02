import { getPageMetadata, jsonLd } from "../lib/seo";
import Script from "next/script";
import { PageBanner } from "../components/common/PageBanner";
import { Section } from "../components/common/Section";
import { Container } from "../components/common/Container";
import { Heading } from "../components/common/Heading";
import { ServiceCard } from "../components/common/ServiceCard";
import services from "../data/services";
import { Bug, Mouse, ScanSearch, ShieldCheck, Sparkles, CalendarClock } from "lucide-react";
import { SlideUp } from "../components/animation/SlideUp";

export const metadata = getPageMetadata("/services", "Services", "Discover premium pest control services for homes and businesses.");

const iconMap = { Bug, Mouse, ScanSearch, ShieldCheck, Sparkles, CalendarClock };

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      <Script id="jsonld-services" type="application/ld+json">
        {JSON.stringify([jsonLd.website("/services"), jsonLd.breadcrumb([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }])])}
      </Script>
      <PageBanner title="Our Services" description="From one-time interventions to ongoing protection, every plan is tailored, precise, and premium." image="/services3.png" eyebrow="Services" />
      <Section>
        <Container>
          <Heading eyebrow="What we provide" title="A comprehensive suite of pest solutions." description="Choose a single treatment or a year-round protection plan that keeps your property secure." center />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Bug;
              return (
                <SlideUp key={service.title} delay={index * 0.06}>
                  <ServiceCard service={service} icon={Icon} />
                </SlideUp>
              );
            })}
          </div>
        </Container>
      </Section>
    </main>
  );
}
