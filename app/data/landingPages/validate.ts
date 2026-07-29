// THE QUALITY GATE.
//
// This is the entire defence against a scaled-content / doorway-page penalty.
// Page count is not the lever — data density per page is, and the only way to
// guarantee it is to make a thin page impossible to ship.
//
// It runs from next.config.js and THROWS. A lint warning or a checklist gets
// ignored; a failing build does not.
//
// DO NOT lower a threshold to get a page to pass. If a page trips the gate,
// rewrite the page. Lowering `maxSimilarity` in particular defeats the only
// check that catches the actual failure mode: one template with a swapped
// city name.

import { LandingPage, bodyText, wordCount } from "./types";

export interface Thresholds {
  minWords: number;
  minFaqs: number;
  minImages: number;
  maxSimilarity: number;
  minInboundLinks: number;
}

export const DEFAULT_THRESHOLDS: Thresholds = {
  // Calibrated against the strongest competitor pages in this market.
  minWords: 900,
  minFaqs: 5,
  minImages: 6,
  // 8-word-shingle Jaccard against every sibling. A genuinely differentiated
  // set lands near 1-3%; anything approaching 30% is a templated page.
  maxSimilarity: 0.3,
  minInboundLinks: 3,
};

export interface Issue {
  slug: string;
  rule: string;
  detail: string;
}

/** Word shingles for near-duplicate detection. */
function shingles(text: string, size = 8): Set<string> {
  const w = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + size <= w.length; i++) out.add(w.slice(i, i + size).join(" "));
  return out;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const s of a) if (b.has(s)) shared++;
  return shared / (a.size + b.size - shared);
}

export function validateLandingPages(
  pages: LandingPage[],
  thresholds: Partial<Thresholds> = {}
): Issue[] {
  const t = { ...DEFAULT_THRESHOLDS, ...thresholds };
  const issues: Issue[] = [];
  const add = (slug: string, rule: string, detail: string) => issues.push({ slug, rule, detail });

  // ---- Uniqueness across the registry ----
  const uniqueFields: Array<[keyof LandingPage, string]> = [
    ["slug", "duplicate-slug"],
    ["pathname", "duplicate-pathname"],
    ["title", "duplicate-title"],
    ["h1", "duplicate-h1"],
    ["metaDescription", "duplicate-meta-description"],
    ["formSourceId", "duplicate-form-source-id"],
  ];
  for (const [field, rule] of uniqueFields) {
    const seen = new Map<string, string>();
    for (const p of pages) {
      const v = String(p[field] ?? "");
      const prev = seen.get(v);
      if (prev) add(p.slug, rule, `${String(field)} "${v}" is already used by "${prev}"`);
      else seen.set(v, p.slug);
    }
  }

  // ---- Per-page rules ----
  for (const p of pages) {
    const text = bodyText(p);
    const words = wordCount(text);

    if (words < t.minWords) add(p.slug, "min-words", `${words} words, needs ${t.minWords}`);
    if (p.faqs.length < t.minFaqs) add(p.slug, "min-faqs", `${p.faqs.length} FAQs, needs ${t.minFaqs}`);

    const uniqueImages = new Set(p.images.map((i) => i.src));
    if (uniqueImages.size < t.minImages) {
      add(p.slug, "min-images", `${uniqueImages.size} unique images, needs ${t.minImages}`);
    }
    for (const img of p.images) {
      if (!img.alt || img.alt.trim().length < 12) {
        add(p.slug, "alt-text", `image ${img.src} has missing or too-short alt text`);
      }
    }

    // Unresolved copy must never reach production.
    const todo = text.match(/\b(TODO|TBD|FIXME|LOREM|XXX|PLACEHOLDER)\b/i);
    if (todo) add(p.slug, "todo-marker", `contains "${todo[0]}"`);

    if (!p.pathname.startsWith("/")) add(p.slug, "pathname", `"${p.pathname}" must start with /`);
    if (p.pathname !== p.pathname.toLowerCase()) add(p.slug, "pathname", `"${p.pathname}" must be lowercase`);
    if (!p.h1.trim()) add(p.slug, "missing-h1", "h1 is empty");
    if (p.metaDescription.length > 165) {
      add(p.slug, "meta-description-length", `${p.metaDescription.length} chars, keep under 165`);
    }
    if (p.metaDescription.length < 70) {
      add(p.slug, "meta-description-length", `${p.metaDescription.length} chars, too short to be useful`);
    }

    // A page must not list itself as related.
    if (p.related.includes(p.slug)) add(p.slug, "self-link", "lists itself in related");
    const dupRelated = p.related.filter((r, i) => p.related.indexOf(r) !== i);
    if (dupRelated.length) add(p.slug, "duplicate-related", `repeats ${dupRelated.join(", ")}`);
    for (const r of p.related) {
      if (!pages.some((x) => x.slug === r)) add(p.slug, "dangling-related", `"${r}" is not a known page`);
    }
  }

  // ---- Inbound link balance: nothing ships orphaned ----
  const inbound = new Map<string, number>(pages.map((p) => [p.slug, 0]));
  for (const p of pages) {
    for (const r of p.related) inbound.set(r, (inbound.get(r) ?? 0) + 1);
  }
  for (const p of pages) {
    const n = inbound.get(p.slug) ?? 0;
    if (n < t.minInboundLinks) {
      add(p.slug, "min-inbound-links", `${n} inbound links, needs ${t.minInboundLinks}`);
    }
  }

  // ---- The anti-doorway check: every pair ----
  const sh = pages.map((p) => ({ slug: p.slug, s: shingles(bodyText(p)) }));
  for (let i = 0; i < sh.length; i++) {
    for (let j = i + 1; j < sh.length; j++) {
      const sim = jaccard(sh[i].s, sh[j].s);
      if (sim > t.maxSimilarity) {
        add(
          sh[i].slug,
          "max-similarity",
          `${(sim * 100).toFixed(1)}% similar to "${sh[j].slug}" (ceiling ${(t.maxSimilarity * 100).toFixed(0)}%)`
        );
      }
    }
  }

  return issues;
}

export function formatIssues(issues: Issue[]): string {
  const bySlug = new Map<string, Issue[]>();
  for (const i of issues) {
    if (!bySlug.has(i.slug)) bySlug.set(i.slug, []);
    bySlug.get(i.slug)!.push(i);
  }
  const lines: string[] = [];
  for (const [slug, list] of bySlug) {
    lines.push(`  ${slug}`);
    for (const i of list) lines.push(`     [${i.rule}] ${i.detail}`);
  }
  return lines.join("\n");
}

/** Max pairwise similarity — reported on success so drift is visible. */
export function maxPairwiseSimilarity(pages: LandingPage[]): { value: number; pair: [string, string] | null } {
  const sh = pages.map((p) => ({ slug: p.slug, s: shingles(bodyText(p)) }));
  let best = 0;
  let pair: [string, string] | null = null;
  for (let i = 0; i < sh.length; i++) {
    for (let j = i + 1; j < sh.length; j++) {
      const sim = jaccard(sh[i].s, sh[j].s);
      if (sim > best) {
        best = sim;
        pair = [sh[i].slug, sh[j].slug];
      }
    }
  }
  return { value: best, pair };
}
