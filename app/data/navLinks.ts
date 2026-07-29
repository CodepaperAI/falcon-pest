// Label + href only, deliberately.
//
// The footer and navbar render on EVERY page. If they imported the landing-page
// registry to build these lists they would pull every record — all long-form
// copy, every FAQ — into the module graph of every page, and into the client
// bundle for any component marked "use client". This module exists so
// navigation can link to landing pages without that cost.
//
// Keep it in sync by hand. The quality gate checks pathname uniqueness in the
// registry; it does not know about this file, so a typo here is a broken link
// rather than a build failure. The verification step greps built HTML for 404
// hrefs to catch that.

export interface NavLink {
  href: string;
  label: string;
}

/** Service detail pages, in the order they should appear in the footer. */
export const serviceLinks: NavLink[] = [
  { href: "/services/general-pest-control", label: "General Pest Control" },
  { href: "/services/rodent-control", label: "Rodent Control" },
  { href: "/services/cockroach-control", label: "Cockroach Control" },
  { href: "/services/ant-control", label: "Ant & Carpenter Ant Control" },
  { href: "/services/spider-control", label: "Spider Control" },
  { href: "/services/quarterly-pest-control", label: "Quarterly Plans" },
];

/** Guide pages. Listed in the footer so they are not left under-linked
 *  relative to the city and service pages, which appear in every footer. */
export const guideLinks: NavLink[] = [
  { href: "/landlord-pest-control-ontario", label: "Landlord or Tenant?" },
  { href: "/niagara-falls-rodent-rebate", label: "Niagara Falls Rodent Rebate" },
];

/** City pages, ordered by 2021 Census population, largest first. */
export const cityLinks: NavLink[] = [
  { href: "/pest-control/st-catharines", label: "St. Catharines" },
  { href: "/pest-control/niagara-falls", label: "Niagara Falls" },
  { href: "/pest-control/welland", label: "Welland" },
  { href: "/pest-control/fort-erie", label: "Fort Erie" },
  { href: "/pest-control/grimsby", label: "Grimsby" },
  { href: "/pest-control/beamsville", label: "Beamsville" },
  { href: "/pest-control/thorold", label: "Thorold" },
  { href: "/pest-control/port-colborne", label: "Port Colborne" },
  { href: "/pest-control/niagara-on-the-lake", label: "Niagara-on-the-Lake" },
  { href: "/pest-control/fonthill", label: "Fonthill" },
];
