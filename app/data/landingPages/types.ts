// Landing-page record types.
//
// TWO INVARIANTS, both load-bearing:
//
// 1. Records are PURE JSON-SERIALISABLE DATA. No React components, no imported
//    icons, no functions. Icons are string keys resolved through iconRegistry
//    at render time and typed as `IconKey`, so a typo is a compile error rather
//    than a blank space on a live page. This keeps every record importable from
//    server-only contexts — route metadata, sitemap.ts, and the validator — none
//    of which can evaluate a component reference.
//
// 2. The rendering template MUST NOT import the registry (./index). A client
//    component that imports the registry ships every record — all long-form
//    copy, every FAQ — into every page's JS bundle. The route resolves the one
//    record it needs server-side and passes it as a prop.

export const iconRegistry = [
  "Bug",
  "Mouse",
  "ScanSearch",
  "ShieldCheck",
  "Sparkles",
  "CalendarClock",
  "Home",
  "Building2",
  "UtensilsCrossed",
  "Warehouse",
  "BedDouble",
  "MapPin",
  "Phone",
  "ClipboardCheck",
  "Leaf",
  "AlertTriangle",
  "Landmark",
  "Snowflake",
  "Sun",
] as const;

export type IconKey = (typeof iconRegistry)[number];

/** Which family a record belongs to. Drives routing and related-page mixing. */
export type PageFamily = "city" | "service" | "combo" | "commercial" | "guide";

export interface Faq {
  question: string;
  answer: string;
}

export interface FactRow {
  label: string;
  value: string;
  /** Where the number came from. Required when the value is a statistic. */
  source?: string;
}

export interface Benefit {
  icon: IconKey;
  title: string;
  description: string;
}

export interface PageImage {
  src: string;
  /** Must describe what the image ACTUALLY shows. Verified by opening it. */
  alt: string;
}

export interface LandingPage {
  /** Unique within the whole registry. */
  slug: string;
  family: PageFamily;
  /** Route path, e.g. "/pest-control/thorold". Unique across the registry. */
  pathname: string;

  // ---- Head ----
  /** <title> without the brand suffix handling — exact string to render. */
  title: string;
  metaDescription: string;
  /** The visible <h1>. Leads with the phrase people actually search. */
  h1: string;

  // ---- Body, in render order. bodyText() concatenates these. ----
  intro: string;
  sections: Array<{ heading: string; body: string }>;
  benefits: Benefit[];
  factTable?: { caption: string; rows: FactRow[] };
  faqs: Faq[];
  ctaHeading: string;
  ctaBody: string;

  images: PageImage[];

  // ---- Graph ----
  /** Slugs of related records. Populated/balanced by buildRelated(). */
  related: string[];
  /** Entities this page is the canonical destination for, for in-copy linking. */
  entities: string[];

  // ---- Attribution ----
  /** Closed-union-safe id echoed into the lead email. Unique per page. */
  formSourceId: string;

  // ---- Optional family-specific payload ----
  citySlug?: string;
  serviceSlug?: string;
}

/**
 * The exact prose a visitor reads, in render order.
 *
 * The word count and similarity checks MUST measure this and nothing else —
 * navigation, footer and other boilerplate would inflate every page equally and
 * mask a genuinely thin one.
 */
export function bodyText(p: LandingPage): string {
  const parts: string[] = [p.h1, p.intro];
  for (const s of p.sections) parts.push(s.heading, s.body);
  for (const b of p.benefits) parts.push(b.title, b.description);
  if (p.factTable) {
    parts.push(p.factTable.caption);
    for (const r of p.factTable.rows) parts.push(r.label, r.value);
  }
  for (const f of p.faqs) parts.push(f.question, f.answer);
  parts.push(p.ctaHeading, p.ctaBody);
  return parts.join(" ");
}

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
