import { GuideRoute, guideMetadata } from "../components/landing/guideRoute";

const SLUG = "guide-niagara-falls-rodent-rebate";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuideRoute slug={SLUG} />;
}
