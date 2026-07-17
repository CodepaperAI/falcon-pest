"use client";

import { useState } from "react";
import { ArrowRight, Bug, Mouse, ScanSearch, ShieldCheck, Sparkles, CalendarClock } from "lucide-react";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Heading } from "../common/Heading";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { SlideUp } from "../animation/SlideUp";
import { ServiceModal } from "../common/ServiceModal";
import services from "../../data/services";

const iconMap = { Bug, Mouse, ScanSearch, ShieldCheck, Sparkles, CalendarClock };

export function ServicesPreview() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300); // wait for exit animation
  };

  // Show the first 6 as a preview; remove .slice(0, 6) to show all.
  const previewServices = services.slice(0, 6);

  return (
    <Section className="bg-black">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Heading eyebrow="Services" title="Protection plans designed for excellence." description="From one-time treatments to ongoing home protection, we tailor every visit to the property, season, and risk level." />
          <Button href="/services" variant="secondary">View All Services</Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {previewServices.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Bug;
            return (
              <SlideUp key={service.id ?? service.title} delay={index * 0.08}>
                <Card className="group h-full transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#BDBDBD]">{service.description ?? service.details}</p>
                  <button
                    type="button"
                    onClick={() => handleLearnMore(service)}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37] transition group-hover:translate-x-1"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </button>
                </Card>
              </SlideUp>
            );
          })}
        </div>
      </Container>

      {/* Service Modal */}
      <ServiceModal service={selectedService} isOpen={isModalOpen} onClose={handleCloseModal} />
    </Section>
  );
}