import { getPageMetadata, jsonLd, JsonLd } from "../lib/seo";
import { ReviewsContent } from "../components/reviews/ReviewsContent";

export const metadata = getPageMetadata("/reviews", "Reviews", "Read client testimonials and share your own experience with Falcon Pest Control.");

export default function ReviewsPage() {
  return (
    <>
      {/* Deliberately NO Review or AggregateRating schema. The testimonials in
          app/data/reviews.js are template placeholders, not real customers.
          Emitting rating schema over them would be a structured-data policy
          violation. Add it only once real, attributable reviews exist. */}
      <JsonLd
        data={[
          jsonLd.website("/reviews"),
          jsonLd.breadcrumb([
            { name: "Home", href: "/" },
            { name: "Reviews", href: "/reviews" },
          ]),
        ]}
      />
      <ReviewsContent />
    </>
  );
}
