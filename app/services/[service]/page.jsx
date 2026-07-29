// Service landing routes: /services/{service}
//
// Server component; owns <head>. Resolves one record and passes it to the
// client template as a prop — the template never imports the registry.

import { notFound } from "next/navigation";
import { landingPages, getRelatedSummaries } from "../../data/landingPages";
import { getPageMetadata, jsonLd, JsonLd } from "../../lib/seo";
import { LandingTemplate } from "../../components/landing/LandingTemplate";

const FAMILY = "service";

function pageForService(service) {
  return landingPages.find((p) => p.family === FAMILY && p.serviceSlug === service);
}

export function generateStaticParams() {
  return landingPages
    .filter((p) => p.family === FAMILY)
    .map((p) => ({ service: p.serviceSlug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { service } = await params;
  const page = pageForService(service);
  if (!page) return {};
  return {
    ...getPageMetadata(page.pathname, page.title, page.metaDescription),
    title: { absolute: page.title },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { service } = await params;
  const page = pageForService(service);
  if (!page) notFound();

  const related = getRelatedSummaries(page.slug);

  return (
    <>
      <JsonLd
        data={[
          jsonLd.breadcrumb([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: page.h1, href: page.pathname },
          ]),
          jsonLd.service({
            name: page.h1,
            description: page.metaDescription,
            path: page.pathname,
          }),
          jsonLd.faq(page.faqs),
        ]}
      />
      <LandingTemplate page={page} related={related} />
    </>
  );
}
