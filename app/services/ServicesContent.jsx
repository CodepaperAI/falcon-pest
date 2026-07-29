"use client";

import { useState } from "react";
import { PageBanner } from "../components/common/PageBanner";
import { Section } from "../components/common/Section";
import { Container } from "../components/common/Container";
import { Heading } from "../components/common/Heading";
import { ServiceCard } from "../components/common/ServiceCard";
import { ServiceModal } from "../components/common/ServiceModal";
import services from "../data/services";
import { Bug, Mouse, ScanSearch, ShieldCheck, Sparkles, CalendarClock } from "lucide-react";
import { SlideUp } from "../components/animation/SlideUp";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceLinks, cityLinks } from "../data/navLinks";

const iconMap = { Bug, Mouse, ScanSearch, ShieldCheck, Sparkles, CalendarClock };

export function ServicesContent() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300); // Wait for animation
  };

  return (
    <main className="bg-black text-white">
      <PageBanner title="Pest Control Services in Niagara, Ontario" description="From one-time interventions to ongoing protection, every plan is tailored to the property." image="/services7.png" eyebrow="Services" />
      <Section>
        <Container>
          <Heading eyebrow="What we provide" title="A comprehensive suite of pest solutions." description="Choose a single treatment or a year-round protection plan that keeps your property secure." center />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3" >
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Bug;
              return (
                <SlideUp key={service.id} delay={index * 0.06}>
                  <ServiceCard service={service} icon={Icon} onClick={() => handleLearnMore(service)} />
                </SlideUp>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Real crawlable links to each service page.
          The cards above open a modal, and modal content is not a URL — a
          crawler cannot reach it and a visitor cannot link to it. These
          anchors are how each service becomes an indexable page rather than
          a panel inside this one. */}
      <Section className="border-t border-[#2A2A2A] bg-[#050505]">
        <Container>
          <Heading
            eyebrow="In detail"
            title="Read about each service"
            description="Every service has its own page covering the process, timescales and what to expect."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-[#2A2A2A] bg-[#111111] px-6 py-5 transition hover:border-[#D4AF37]/50"
              >
                <span className="text-base font-semibold text-white group-hover:text-[#D4AF37]">
                  {link.label}
                </span>
                <ArrowRight size={16} className="shrink-0 text-[#D4AF37]" />
              </Link>
            ))}
          </div>

          <Heading
            className="mt-16"
            eyebrow="Where we work"
            title="Pest control across the Niagara Region"
            description="Each municipality has its own page covering local pest pressure and what it means for your property."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {cityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-[#2A2A2A] bg-[#111111] px-5 py-2.5 text-sm font-medium text-[#BDBDBD] transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Service Modal */}
      <ServiceModal service={selectedService} isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
