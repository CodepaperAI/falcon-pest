import type { NextConfig } from "next";
import { landingPages } from "./app/data/landingPages";
import {
  validateLandingPages,
  formatIssues,
  maxPairwiseSimilarity,
  DEFAULT_THRESHOLDS,
} from "./app/data/landingPages/validate";

// ---------------------------------------------------------------------------
// THE QUALITY GATE
//
// Runs here rather than as a `prebuild` npm script so it uses the framework's
// own module resolution (path aliases, extensionless imports), runs identically
// under npm/pnpm/bun, and needs no extra dev dependency such as tsx that could
// be missing on the deploy runner.
//
// It THROWS. A failing build is the only enforcement that does not get ignored.
// Do not weaken a threshold to make a page pass — rewrite the page.
// ---------------------------------------------------------------------------
const issues = validateLandingPages(landingPages);

if (issues.length) {
  throw new Error(
    `\n\n✗ Landing-page quality gate failed (${issues.length} issue${issues.length === 1 ? "" : "s"}):\n\n` +
      formatIssues(issues) +
      `\n\nThresholds: ${JSON.stringify(DEFAULT_THRESHOLDS)}\n` +
      `Fix the page. Do not lower the threshold.\n`
  );
}

if (landingPages.length) {
  const { value, pair } = maxPairwiseSimilarity(landingPages);
  // Reported on every build so similarity drift is visible before it fails.
  console.log(
    `✓ Quality gate passed — ${landingPages.length} landing pages, ` +
      `max pairwise similarity ${(value * 100).toFixed(2)}%` +
      (pair ? ` (${pair[0]} ↔ ${pair[1]})` : "") +
      ` against a ${(DEFAULT_THRESHOLDS.maxSimilarity * 100).toFixed(0)}% ceiling.`
  );
}

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*", "192.168.1.9"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
