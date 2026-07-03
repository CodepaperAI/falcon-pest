import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { companyConfig } from "../../lib/config";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-[#2A2A2A] bg-black">
      <Image src="/hero6.png" alt="Premium pest control service" fill className="object-cover opacity-30" />
      <div className="absolute inset-0 bg-black/70" />
      <Container className="relative py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Ready to protect your property?</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Book a premium inspection and let our experts restore comfort with confidence.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#BDBDBD]">Whether you need urgent support or a long-term protection plan, our team is ready to deliver exceptional service.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={`tel:${companyConfig.phoneRaw}`}>Call Now</Button>
          <Button href="/services" variant="secondary">View Services</Button>
        </div>
      </Container>
    </section>
  );
}
