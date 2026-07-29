import { HeroSlider } from "./components/home/HeroSlider";
import { AboutPreview } from "./components/home/AboutPreview";
import { ServicesPreview } from "./components/home/ServicesPreview";
import { WhyChooseUs } from "./components/home/WhyChooseUs";
import { ReviewPreview } from "./components/home/ReviewPreview";
import { CTA } from "./components/home/CTA";
import { getBaseMetadata, jsonLd, JsonLd } from "./lib/seo";

// The homepage <title> was literally "Falcon Pest Control" — no service term,
// no location. Overriding `title` here (rather than relying on getBaseMetadata's
// title.default) makes the site's most linked page target its actual query.
export const metadata = {
  ...getBaseMetadata(
    "/",
    "Falcon Pest Control",
    "Licensed pest control across the Niagara Region. Falcon Pest Control treats rodents, cockroaches, ants and spiders in Niagara Falls, St. Catharines, Welland and surrounding municipalities."
  ),
  title: {
    absolute: "Pest Control Niagara Falls & Niagara Region | Falcon Pest Control",
    template: "%s | Falcon Pest Control",
  },
};

export default function Home() {
  return (
    <main className="bg-black text-white">
      <JsonLd data={[jsonLd.website("/"), jsonLd.localBusiness(), jsonLd.organization()]} />
      <HeroSlider />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <ReviewPreview />
      <CTA />
    </main>
  );
}
