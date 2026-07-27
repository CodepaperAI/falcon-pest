import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://falconpestcontrol.ca";
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/book`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/reviews`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
  ];
}