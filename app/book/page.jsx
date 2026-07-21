import { getPageMetadata, jsonLd } from "../lib/seo";
import Script from "next/script";
import { Section } from "../components/common/Section";
import { Container } from "../components/common/Container";
import { Heading } from "../components/common/Heading";
import { BookingForm } from "../components/forms/BookingForm";
import { FadeIn } from "../components/animation/FadeIn";

export const metadata = getPageMetadata("/book", "Book a Service", "Schedule a premium pest control service with Falcon. Choose your service and preferred date.");

export default function BookPage() {
  return (
    <main className="bg-black text-white">
      <Script id="jsonld-book" type="application/ld+json">
        {JSON.stringify([jsonLd.website("/book"), jsonLd.breadcrumb([{ name: "Home", href: "/" }, { name: "Book", href: "/book" }])])}
      </Script>

      <Section>
        <Container className="mx-auto max-w-2xl">
          <FadeIn>
            <Heading eyebrow="Book Now" title="Schedule your service." description="Fill in your details and pick a preferred date. Our team will confirm your appointment shortly." center />
            <div className="mt-10">
              <BookingForm />
            </div>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}