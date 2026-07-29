// Single source of truth for the site's canonical origin.
//
// This MUST be the host that actually serves the site. falconpestcontrol.ca
// (apex) 308-redirects to www.falconpestcontrol.ca, so canonicalising to the
// apex points every page at a URL that redirects away. Previously seo.js fell
// back to falconpestcontrol.com — a domain Falcon does not own — while
// sitemap.ts and robots.ts fell back to the apex. Three files, three answers.
//
// NEXT_PUBLIC_SITE_URL is currently set in Vercel to the APEX
// (https://falconpestcontrol.ca), which is what produced the broken canonicals
// in the first place. Rather than depend on that value being corrected by hand
// — and silently re-breaking every canonical on the site the next time someone
// sets it wrong — the apex is normalised to www here, in code.
//
// The env var still controls the origin (so a staging host or a future domain
// works), but it cannot point the canonical at a host that redirects away.
const CANONICAL_HOST = "www.falconpestcontrol.ca";

function normaliseOrigin(raw) {
  const fallback = `https://${CANONICAL_HOST}`;
  if (!raw) return fallback;
  let url;
  try {
    url = new URL(raw.trim());
  } catch {
    return fallback;
  }
  // Force https — an http canonical would also redirect.
  url.protocol = "https:";
  // Apex -> www. Any other host (previews, staging) is left alone.
  if (url.hostname === "falconpestcontrol.ca") url.hostname = CANONICAL_HOST;
  return url.origin;
}

/** Canonical origin, with no trailing slash so `${SITE_URL}${path}` is safe. */
export const SITE_URL = normaliseOrigin(process.env.NEXT_PUBLIC_SITE_URL).replace(/\/+$/, "");

/** Absolute canonical URL for a route path (e.g. "/services/ant-control"). */
export function absoluteUrl(path = "/") {
  if (!path.startsWith("/")) path = `/${path}`;
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

// Municipalities named in areaServed schema. Kept here (not in the landing-page
// registry) so schema helpers can import it without pulling the whole registry
// into a client bundle.
//
// PENDING CLIENT CONFIRMATION: this asserts Falcon services these places. If
// any are outside their genuine service area, remove them — an areaServed claim
// that generates leads they cannot service is worse than a missing page.
export const SERVICE_AREA = [
  "Niagara Falls",
  "St. Catharines",
  "Welland",
  "Thorold",
  "Niagara-on-the-Lake",
  "Fort Erie",
  "Port Colborne",
  "Grimsby",
  "Beamsville",
  "Fonthill",
];

export default SITE_URL;
