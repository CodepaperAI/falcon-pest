import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Heading } from "../common/Heading";
import { Button } from "../common/Button";
import { FadeIn } from "../animation/FadeIn";

export function AboutPreview() {
  return (
    <Section className="bg-[#050505]">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn className="relative overflow-hidden rounded-[2rem] border border-[#2A2A2A] bg-[#111111] p-3">
          <Image src="/hero5.png" alt="Professional pest control technician" width={900} height={700} className="h-[420px] w-full rounded-[1.5rem] object-cover" />
        </FadeIn>
        <FadeIn delay={0.15}>
          <Heading eyebrow="About Falcon" title="Crafted for homes and businesses that expect more." description="We combine modern pest science, discreet service, and a luxury customer experience to protect what matters most." />
          <p className="mt-6 text-lg leading-8 text-[#BDBDBD]">Our certified technicians deliver tailored strategies with meticulous care, transparent communication, and long-term prevention plans that protect your property without disruption.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/about">Learn More <ArrowRight size={16} className="ml-2" /></Button>
            <Button href="/contact" variant="secondary">Book Inspection</Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
