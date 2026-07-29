// Landing-page registry.
//
// IMPORTANT: no client component may import this module. It pulls every record
// — all long-form copy, every FAQ — and a client import would ship the whole
// registry into that page's JS bundle. Routes resolve the single record they
// need on the server and pass it down as a prop.

import { LandingPage } from "./types";
import { cityPages } from "./cities";
import { servicePages } from "./services";
import { guidePages } from "./guides";

/**
 * Interleaves the families round-robin.
 *
 * Concatenating cities then services would make the cyclic walk below link
 * cities almost exclusively to other cities. Interleaving first means each
 * page's neighbours in the ordering come from different families, so the
 * related graph is genuinely cross-family without any special-casing.
 */
function interleave(groups: LandingPage[][]): LandingPage[] {
  const out: LandingPage[] = [];
  const longest = Math.max(0, ...groups.map((g) => g.length));
  for (let i = 0; i < longest; i++) {
    for (const g of groups) if (i < g.length) out.push(g[i]);
  }
  return out;
}

/**
 * Assigns `related` links across the registry.
 *
 * Balanced by construction: pages are walked in order and each takes its links
 * from the following pages cyclically, so every page ends up with exactly the
 * same inbound count instead of links pooling on whichever page happens to be
 * listed first. An unbalanced graph is how "related pages" sections end up
 * funnelling everything into one hub while the rest of the set sits orphaned.
 */
function buildRelated(pages: LandingPage[], perPage = 5): LandingPage[] {
  const n = pages.length;
  if (n < 2) return pages;
  const k = Math.min(perPage, n - 1);
  return pages.map((page, i) => {
    const related: string[] = [];
    for (let step = 1; step <= k; step++) {
      related.push(pages[(i + step) % n].slug);
    }
    return { ...page, related };
  });
}

/** Every landing page, with the related graph resolved. */
export const landingPages: LandingPage[] = buildRelated(interleave([cityPages, servicePages, guidePages]));

const bySlug = new Map(landingPages.map((p) => [p.slug, p]));
const byPathname = new Map(landingPages.map((p) => [p.pathname, p]));

export function getBySlug(slug: string): LandingPage | undefined {
  return bySlug.get(slug);
}

export function getByPathname(pathname: string): LandingPage | undefined {
  return byPathname.get(pathname);
}

export function getByFamily(family: LandingPage["family"]): LandingPage[] {
  return landingPages.filter((p) => p.family === family);
}

export function getCityPage(citySlug: string): LandingPage | undefined {
  return landingPages.find((p) => p.family === "city" && p.citySlug === citySlug);
}

/** Lightweight shape for related-page cards — never pass whole records to a
 *  client component when a summary will do. */
export interface PageSummary {
  slug: string;
  pathname: string;
  h1: string;
  metaDescription: string;
  family: LandingPage["family"];
}

export function toSummary(p: LandingPage): PageSummary {
  return {
    slug: p.slug,
    pathname: p.pathname,
    h1: p.h1,
    metaDescription: p.metaDescription,
    family: p.family,
  };
}

export function getRelatedSummaries(slug: string): PageSummary[] {
  const page = bySlug.get(slug);
  if (!page) return [];
  return page.related.map((r) => bySlug.get(r)).filter((p): p is LandingPage => Boolean(p)).map(toSummary);
}

/** Route entries for sitemap.ts. */
export function landingPageRoutes(): Array<{ path: string; priority: number }> {
  return landingPages.map((p) => ({
    path: p.pathname,
    priority: p.family === "city" || p.family === "service" ? 0.8 : 0.7,
  }));
}

export default landingPages;
