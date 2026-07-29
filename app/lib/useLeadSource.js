"use client";

import { usePathname } from "next/navigation";

/**
 * Lead attribution for a form.
 *
 * Returns the values to merge into a submission so the resulting email says
 * which page and which CTA surface produced the lead. Every new landing page
 * gets this for free — the pathname is read at submit time rather than being
 * hard-coded per page.
 *
 * @param {string} section - one of SOURCE_SECTIONS in ./validation
 */
export function useLeadSource(section = "unknown") {
  const pathname = usePathname();
  return { sourcePage: pathname || "unknown", sourceSection: section };
}

export default useLeadSource;
