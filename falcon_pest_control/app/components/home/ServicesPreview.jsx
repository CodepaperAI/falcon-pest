import { ArrowRight, Bug, Mouse, ScanSearch, ShieldCheck, Sparkles, CalendarClock } from "lucide-react";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Heading } from "../common/Heading";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { SlideUp } from "../animation/SlideUp";

const services = [
  { title: "General Pest Control", description: "Integrated protection for ants, roaches, and other common household pests.", icon: Bug },
  { title: "Rodent Control", description: "Humane, durable solutions that stop rodents from returning.", icon: Mouse },
  { title: "Spider Control", description: "Targeted web removal and prevention with premium care.", icon: ScanSearch },
  { title: "Ant & Cockroach Control", description: "Precision treatments with prevention at the entry points.", icon: ShieldCheck },
  { title: "Preventive Treatments", description: "Seasonal programs to eliminate recurring pest pressure.", icon: Sparkles },
  { title: "One-Time & Ongoing Services", description: "Flexible plans for urgent guidance and long-term peace of mind.", icon: CalendarClock },
];

export function ServicesPreview() {
  return (
    <Section className="bg-black">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Heading eyebrow="Services" title="Protection plans designed for excellence." description="From one-time treatments to ongoing home protection, we tailor every visit to the property, season, and risk level." />
          <Button href="/services" variant="secondary">View All Services</Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <SlideUp key={service.title} delay={index * 0.08}>
                <Card className="group h-full transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#BDBDBD]">{service.description}</p>
                  <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37] transition group-hover:translate-x-1">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </div>
                </Card>
              </SlideUp>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
