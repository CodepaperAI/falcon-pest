import { MetadataRoute } from "next";
import { absoluteUrl } from "./lib/site";
import { landingPageRoutes } from "./data/landingPages";

const staticRoutes: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/book", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/reviews", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  // Landing pages come from the registry, so a new record is listed
  // automatically and cannot be forgotten here.
  const routes = [...staticRoutes, ...landingPageRoutes()];
  return routes.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    priority,
  }));
}
