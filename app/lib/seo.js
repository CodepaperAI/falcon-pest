import { companyConfig } from "./config";
import { SITE_URL, absoluteUrl, SERVICE_AREA } from "./site";

const siteUrl = SITE_URL;
const defaultDescription =
  "Licensed pest control across the Niagara Region — rodents, cockroaches, ants and spiders. Falcon Pest Control serves Niagara Falls, St. Catharines, Welland and the surrounding municipalities.";

// The OG image must exist. /hero1.png was referenced site-wide but is absent
// from public/, so every social share of every page rendered a broken image.
const defaultOgImage = "/hero5.png";

export function getBaseMetadata(path = "/", title = "Falcon Pest Control", description = defaultDescription) {
  const canonical = absoluteUrl(path);
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Falcon Pest Control",
      template: "%s | Falcon Pest Control",
    },
    description,
    keywords: [
      "pest control",
      "falcon pest control",
      "rodent control",
      "commercial pest control",
      "eco friendly pest control",
    ],
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: title === "Falcon Pest Control" ? title : `${title} | Falcon Pest Control`,
      description,
      url: canonical,
      siteName: "Falcon Pest Control",
      type: "website",
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 800,
          alt: "Falcon Pest Control technician in protective equipment applying a treatment inside a home",
        },
      ],
      locale: "en_CA",
    },
    twitter: {
      card: "summary_large_image",
      title: title === "Falcon Pest Control" ? title : `${title} | Falcon Pest Control`,
      description,
      images: [defaultOgImage],
    },
  };
}

export function getPageMetadata(path, title, description) {
  return {
    ...getBaseMetadata(path, title, description),
    title,
  };
}

export const jsonLd = {
  website: (path = "/") => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Falcon Pest Control",
    url: absoluteUrl(path),
    description: defaultDescription,
  }),
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Falcon Pest Control",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    // Only emit sameAs for profiles that actually exist. companyConfig.social
    // still carries placeholder handles, so an unverified URL here would assert
    // a profile Falcon may not own.
    ...(companyConfig.socialVerified ? { sameAs: Object.values(companyConfig.social) } : {}),
  }),
  localBusiness: () => ({
    "@context": "https://schema.org",
    "@type": "PestControlService",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Falcon Pest Control",
    image: `${siteUrl}/hero5.png`,
    priceRange: "$$",
    telephone: companyConfig.phoneRaw,
    email: companyConfig.email,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "4551 Zimmerman Ave",
      addressLocality: "Niagara Falls",
      addressRegion: "ON",
      postalCode: "L2E 3M5",
      // Explicit CA matters: these SERPs are saturated with Niagara Falls, NY.
      addressCountry: "CA",
    },
    areaServed: SERVICE_AREA.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "AdministrativeArea", name: "Niagara Region, Ontario" },
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    description: defaultDescription,
  }),
  /** Service schema for a single service/pest page. */
  service: ({ name, description, path, areaServed = SERVICE_AREA }) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${siteUrl}/#localbusiness` },
    areaServed: areaServed.map((n) => ({ "@type": "City", name: n })),
  }),
  breadcrumb: (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  }),
  faq: (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }),
};

/**
 * Server-rendered JSON-LD.
 *
 * This MUST NOT use next/script. `<Script>` injects the tag on the client after
 * hydration, so the schema is absent from the served HTML and invisible to any
 * crawler that does not execute JavaScript — which is how every page on this
 * site previously shipped zero structured data despite defining plenty of it.
 *
 * A plain <script> tag with dangerouslySetInnerHTML renders server-side.
 * The `<` escape prevents a "</script>" sequence inside the data from
 * terminating the tag early.
 */
export function JsonLd({ data }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload.length === 1 ? payload[0] : payload).replace(/</g, "\\u003c"),
      }}
    />
  );
}
