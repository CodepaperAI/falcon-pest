import { getPageMetadata, jsonLd, JsonLd } from "../lib/seo";
import { Section } from "../components/common/Section";
import { Container } from "../components/common/Container";
import { Heading } from "../components/common/Heading";
import { BookingForm } from "../components/forms/BookingForm";
import { FadeIn } from "../components/animation/FadeIn";

export const metadata = getPageMetadata(
  "/book",
  "Book Pest Control in Niagara",
  "Book a licensed pest control visit anywhere in the Niagara Region. Choose your service and preferred date, and our team will confirm."
);

export default function BookPage() {
  return (
    <main className="bg-black text-white">
      <JsonLd data={[jsonLd.website("/book"), jsonLd.breadcrumb([{ name: "Home", href: "/" }, { name: "Book", href: "/book" }])]} />

      <Section>
        <Container className="mx-auto max-w-2xl">
          <FadeIn>
            <Heading as="h1" eyebrow="Book Now" title="Book Pest Control in Niagara" description="Fill in your details and pick a preferred date. Our team will confirm your appointment shortly." center />
            <div className="mt-10">
              <BookingForm />
            </div>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}