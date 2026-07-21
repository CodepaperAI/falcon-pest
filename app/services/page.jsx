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

const iconMap = { Bug, Mouse, ScanSearch, ShieldCheck, Sparkles, CalendarClock };

export default function ServicesPage() {
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
      <PageBanner title="Our Services" description="From one-time interventions to ongoing protection, every plan is tailored, precise, and premium." image="/services7.png" eyebrow="Services" />
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

      {/* Service Modal */}
      <ServiceModal service={selectedService} isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
