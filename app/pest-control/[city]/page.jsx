// City landing routes: /pest-control/{city}
//
// This is a SERVER component and it owns <head>. It resolves the single record
// it needs from the registry and passes it to the client template as a prop —
// the template never imports the registry itself, which would ship every
// record into every page's bundle.

import { notFound } from "next/navigation";
import { landingPages, getBySlug, getRelatedSummaries } from "../../data/landingPages";
import { getPageMetadata, jsonLd, JsonLd } from "../../lib/seo";
import { LandingTemplate } from "../../components/landing/LandingTemplate";

const FAMILY = "city";

function pageForCity(city) {
  return landingPages.find((p) => p.family === FAMILY && p.citySlug === city);
}

export function generateStaticParams() {
  return landingPages
    .filter((p) => p.family === FAMILY)
    .map((p) => ({ city: p.citySlug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { city } = await params;
  const page = pageForCity(city);
  if (!page) return {};
  const meta = getPageMetadata(page.pathname, page.title, page.metaDescription);
  return {
    ...meta,
    // `absolute` stops the root layout's "%s | Falcon Pest Control" template
    // from appending the brand a second time — these titles already carry it.
    title: { absolute: page.title },
  };
}

export default async function CityPage({ params }) {
  const { city } = await params;
  const page = pageForCity(city);
  if (!page) notFound();

  const related = getRelatedSummaries(page.slug);

  return (
    <>
      <JsonLd
        data={[
          jsonLd.breadcrumb([
            { name: "Home", href: "/" },
            { name: "Pest Control", href: "/services" },
            { name: page.h1, href: page.pathname },
          ]),
          jsonLd.service({
            name: `Pest Control in ${page.entities[0]}`,
            description: page.metaDescription,
            path: page.pathname,
            areaServed: page.entities,
          }),
          jsonLd.faq(page.faqs),
        ]}
      />
      <LandingTemplate page={page} related={related} />
    </>
  );
}
