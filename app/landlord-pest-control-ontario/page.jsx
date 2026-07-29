import { GuideRoute, guideMetadata } from "../components/landing/guideRoute";

const SLUG = "guide-landlord-responsibility";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuideRoute slug={SLUG} />;
}
