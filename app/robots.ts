import { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

// NOTE: there is no public/robots.txt in this project. If one is ever added it
// will silently win over this route and these rules become a no-op.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
