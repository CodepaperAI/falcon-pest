import { getPageMetadata } from "../lib/seo";
import { ReviewsContent } from "../components/reviews/ReviewsContent";

export const metadata = getPageMetadata("/reviews", "Reviews", "Read client testimonials and share your own experience with Falcon Pest Control.");

export default function ReviewsPage() {
  return <ReviewsContent />;
}
