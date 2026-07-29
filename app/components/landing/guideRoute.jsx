// Shared implementation for the root-level guide routes.
//
// Guide pages live at root paths (/landlord-pest-control-ontario,
// /niagara-falls-rodent-rebate) rather than under a shared segment, because
// the URL is the keyword and burying them under /guides/ would dilute it.
// That means one route directory each, so this module holds the logic and the
// route files stay two lines.
//
// Server-side only. Resolves the record and owns <head>; the client template
// receives the record as a prop and never imports the registry.

import { notFound } from "next/navigation";
import { getBySlug, getRelatedSummaries } from "../../data/landingPages";
import { getPageMetadata, jsonLd, JsonLd } from "../../lib/seo";
import { LandingTemplate } from "./LandingTemplate";

export function guideMetadata(slug) {
  const page = getBySlug(slug);
  if (!page) return {};
  return {
    ...getPageMetadata(page.pathname, page.title, page.metaDescription),
    title: { absolute: page.title },
  };
}

export function GuideRoute({ slug }) {
  const page = getBySlug(slug);
  if (!page) notFound();

  const related = getRelatedSummaries(page.slug);

  return (
    <>
      <JsonLd
        data={[
          jsonLd.breadcrumb([
            { name: "Home", href: "/" },
            { name: page.h1, href: page.pathname },
          ]),
          jsonLd.faq(page.faqs),
        ]}
      />
      <LandingTemplate page={page} related={related} />
    </>
  );
}
