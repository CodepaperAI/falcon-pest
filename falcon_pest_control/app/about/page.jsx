import { getPageMetadata, jsonLd } from "../lib/seo";
import Script from "next/script";
import { PageBanner } from "../components/common/PageBanner";
import { Section } from "../components/common/Section";
import { Container } from "../components/common/Container";
import { Heading } from "../components/common/Heading";
import { Card } from "../components/common/Card";
import { FadeIn } from "../components/animation/FadeIn";
import { Button } from "../components/common/Button";

export const metadata = getPageMetadata("/about", "About Us", "Learn about Falcon Pest Control’s dedication to premium protection and modern pest management.");

const process = ["Inspection", "Customized Treatment Plan", "Precision Application", "Follow-Up Protection"];
const values = [
  { title: "Our Story", description: "We created Falcon Pest Control to bring luxury-level care and modern expertise to every property we protect." },
  { title: "Mission", description: "To deliver effective, responsible, and beautifully executed pest services with clear communication and care." },
  { title: "Vision", description: "To become the region’s most trusted name for premium pest management and prevention." },
];

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <Script id="jsonld-about" type="application/ld+json">
        {JSON.stringify([jsonLd.website("/about"), jsonLd.breadcrumb([{ name: "Home", href: "/" }, { name: "About", href: "/about" }])])}
      </Script>
      <PageBanner title="About Falcon Pest Control" description="We bring premium care, meticulous planning, and modern pest science to homes and businesses across the region." image="/hero5.png" eyebrow="About us" />
      <Section>
        <Container className="grid gap-8 lg:grid-cols-3">
          {values.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <Card className="h-full">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-[#BDBDBD]">{item.description}</p>
              </Card>
            </FadeIn>
          ))}
        </Container>
      </Section>
      <Section className="bg-[#050505]">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <Heading eyebrow="Our Process" title="A refined approach to pest management." description="Each visit follows a clear, professional process to produce lasting results without disruption." />
            <div className="mt-8 space-y-4">
              {process.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/10 text-sm font-semibold text-[#D4AF37]">0{index + 1}</div>
                  <p className="text-lg text-white">{step}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Why choose us</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Luxury service, measurable results.</h3>
              <p className="mt-4 text-base leading-8 text-[#BDBDBD]">We pair experienced technicians with transparent recommendations so every treatment feels considered, effective, and tailored.</p>
              <div className="mt-8">
                <Button href="/contact">Schedule a Consultation</Button>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}
