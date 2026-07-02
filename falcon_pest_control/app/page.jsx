import { HeroSlider } from "./components/home/HeroSlider";
import { AboutPreview } from "./components/home/AboutPreview";
import { ServicesPreview } from "./components/home/ServicesPreview";
import { WhyChooseUs } from "./components/home/WhyChooseUs";
import { ReviewPreview } from "./components/home/ReviewPreview";
import { CTA } from "./components/home/CTA";
import { getBaseMetadata, jsonLd } from "./lib/seo";
import Script from "next/script";

export const metadata = getBaseMetadata(
  "/",
  "Falcon Pest Control",
  "Premium luxury pest control services with elite protection for homes and businesses."
);

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Script id="jsonld-home" type="application/ld+json">
        {JSON.stringify([jsonLd.website("/"), jsonLd.localBusiness(), jsonLd.organization()])}
      </Script>
      <HeroSlider />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <ReviewPreview />
      <CTA />
    </main>
  );
}
